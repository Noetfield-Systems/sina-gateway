// Independent regression runner against the exact public VELTARIS source revision.
// Usage: node review-capital.mjs /path/to/VELTARIS
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
const root=resolve(process.argv[2]||'.');
const pinned={'public/capital.mjs':'05dcca4269a4a5044c297efdfeddea38fec25d06','api/issuance-simulate.mjs':'2e0763170259ec7dfd4b0bb69807c171c966811f'};
for(const [file,sha] of Object.entries(pinned)){
  const data=readFileSync(resolve(root,file));
  assert.equal(createHash('sha1').update(`blob ${data.length}\0`).update(data).digest('hex'),sha,`Unexpected revision: ${file}`);
}
const {simulateIssuance}=await import(pathToFileURL(resolve(root,'public/capital.mjs')));
const {default:handler}=await import(pathToFileURL(resolve(root,'api/issuance-simulate.mjs')));
let seed=0x6d2b79f5;
function random(n){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n;}
let allowed=0,denied=0;
for(let i=0;i<1024;i++){
  const supply=1+random(1000000), price=1+random(100000), holding=random(supply+1), request=1+random(supply+1);
  for(let mask=0;mask<8;mask++){
    const x={principalCents:supply*price,unitPriceCents:price,holdingUnits:holding,requestedUnits:request,senderVerified:!!(mask&1),recipientVerified:!!(mask&2),paused:!!(mask&4)};
    const r=simulateIssuance(x),t=r.transfer;
    const permitted=!x.paused&&x.senderVerified&&x.recipientVerified&&request<=holding;
    const settled=permitted?BigInt(request):0n;
    assert.equal(BigInt(r.issuedUnits),BigInt(supply));
    assert.equal(t.allowed,permitted);
    assert.equal(BigInt(t.settledUnits),settled);
    assert.equal(BigInt(t.senderAfter)+BigInt(t.recipientAfter),BigInt(holding));
    assert.equal(BigInt(t.transferValueCents),settled*BigInt(price));
    assert.deepEqual(t.reasons,[...(x.paused?['TRANSFERS_PAUSED']:[]),...(!x.senderVerified?['SENDER_INELIGIBLE']:[]),...(!x.recipientVerified?['RECIPIENT_INELIGIBLE']:[]),...(request>holding?['INSUFFICIENT_HOLDINGS']:[])]);
    if(permitted)allowed++;else denied++;
  }
}
const base={principalCents:10000000,unitPriceCents:10000,holdingUnits:200,requestedUnits:75,senderVerified:true,recipientVerified:true,paused:false};
const invalid=[null,[],{}, {...base,principalCents:0},{...base,principalCents:100000000001},{...base,unitPriceCents:3},{...base,unitPriceCents:0},{...base,holdingUnits:1001},{...base,requestedUnits:0},{...base,requestedUnits:1.5},{...base,recipientVerified:'true'},{...base,paused:0}];
for(const x of invalid)assert.throws(()=>simulateIssuance(x));
const boundary=simulateIssuance({...base,principalCents:100000000000,unitPriceCents:1000000000,holdingUnits:100,requestedUnits:100});
assert.equal(boundary.transfer.transferValueCents,100000000000);
function call(method,type,body,length=200){let status,output;const headers={};handler({method,headers:{'content-type':type,'content-length':String(length)},body},{setHeader(k,v){headers[k]=v},status(n){status=n;return this},json(v){output=v;return this}});return{status,output,headers};}
const requests=[['GET','application/json',base,200,405],['POST','text/plain',base,200,415],['POST','application/json',base,4097,413],['POST','application/json','{',1,400],['POST','application/json',{...base,requestedUnits:0},200,400],['POST','application/json; charset=utf-8',JSON.stringify(base),200,200],['POST','application/json',{...base,paused:true},200,200]];
for(const [method,type,body,length,expected] of requests){const r=call(method,type,body,length);assert.equal(r.status,expected);assert.equal(r.headers['cache-control'],'no-store');if(expected===200)assert.equal(r.output.mode,'simulation');}
console.log(JSON.stringify({revision:'5bfd84b036dff07d7a75a91d42e6cb3d9f01f829',sourceBlobsVerified:2,scenarios:allowed+denied,allowed,denied,invalidInputs:invalid.length,boundaryCases:1,handlerCases:requests.length,status:'PASS',scope:'Actual off-chain simulator and direct handler invocation; no HTTP deployment, EVM, audit or financial settlement.'},null,2));
