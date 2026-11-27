import test from 'node:test';
import assert from 'node:assert/strict';
import {curate,selectShowcases} from '../lib/portfolio.mjs';
import {renderWorkLibrary} from '../lib/work-library.mjs';

const entry=i=>({slug:'work-'+i,title:'Research '+i,approval:{status:'approved',authority:'founder',reference:'synthetic-test',date:'2026-01-01',scope:'public_link_description'},reference:{description:'Synthetic test work <script>',author:'Test author',stage:'Research',territories:['web3'],url:'https://example.com/'+i}});
const base='https://example.com';
test('library lists all approved works, independently of showcase limits',()=>{
 const items=curate(Array.from({length:25},(_,i)=>entry(i)));
 assert.equal(selectShowcases(items,'home').length,12);
 assert.equal(selectShowcases(items,'web3').length,6);
 const html=renderWorkLibrary(items,base);
 assert.equal((html.match(/<article class="work-card"/g)||[]).length,25);
 for(const p of items)assert.ok(html.includes('/work/'+p.slug+'/'));
 assert.ok(html.includes('25 published works'));
 assert.ok(html.includes('&lt;script&gt;'));
 assert.ok(!html.includes('Synthetic test work <script>'));
});
test('empty manifest stays honest and exposes existing engineering route',()=>{
 const html=renderWorkLibrary(curate([]),base);
 assert.ok(html.includes('0 published works'));
 assert.ok(html.includes('/engineering/'));
 assert.ok(!html.includes('<article class="work-card"'));
});
test('unapproved content cannot enter library build pipeline',()=>{
 const x=entry(1);x.approval.status='pending';
 assert.throws(()=>renderWorkLibrary(curate([x]),base),/publication authority/);
});
