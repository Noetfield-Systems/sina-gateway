import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { validateInquiry } from '../lib/inquiry.mjs';
const page=fs.readFileSync(new URL('../public/services/index.html',import.meta.url),'utf8');
const build=fs.readFileSync(new URL('../scripts/build.mjs',import.meta.url),'utf8');
test('all seven service practices have inquiry links and selectable identifiers',()=>{
  for(const id of ['ai-ml','localization','multilingual','locops','agents','inference','evaluation']){
    assert.ok(page.includes('data-service="'+id+'"'));
    assert.ok(page.includes('<option value="'+id+'"'));
  }
  assert.match(page,/fetch\('\/api\/inquiry'/);
  assert.match(page,/r\.status!==201/);
  assert.match(page,/name="consent" type="checkbox" required/);
  assert.ok(build.includes("base+'/services/'"));
  assert.ok(build.includes('Explore engineering services'));
});
test('service inquiry matches existing development intake contract',()=>{
 const input={category:'development',name:'Test Customer',email:'test@example.com',organization:'Example',message:'Engineering practice: Localization & Internationalization Engineering\n\nA synthetic project request for validation.',website:'',consent:'on'};
 assert.equal(validateInquiry(input).category,'development');
 assert.equal(validateInquiry({...input,consent:null}),null);
 assert.equal(validateInquiry({...input,website:'bot'}),null);
});

test('published product catalog agrees with the human offer page',()=>{
 const catalog=JSON.parse(fs.readFileSync(new URL('../public/services/catalog.json',import.meta.url),'utf8'));
 assert.equal(catalog.currency,'CAD');
 assert.equal(catalog.offers.length,7);
 const ids=new Set();
 for(const o of catalog.offers){
  assert.ok(!ids.has(o.id));ids.add(o.id);
  assert.ok(Number.isInteger(o.price)&&o.price>0);
  for(const field of ['scope','deliverable','acceptance','exclusions','buyer','duration'])assert.ok(o[field]);
  assert.ok(page.includes('data-offer="'+o.id+'"'));
  assert.ok(page.includes('value="'+o.id+'" data-practice="'+o.practice+'"'));
  assert.ok(page.includes('From CAD $'+o.price.toLocaleString('en-CA')));
 }
 assert.ok(page.includes("Offer: "));
 assert.ok(page.includes('/services/catalog.json'));
 assert.doesNotThrow(()=>new Function(page.split('<script>')[1].split('</script>')[0]));
});
