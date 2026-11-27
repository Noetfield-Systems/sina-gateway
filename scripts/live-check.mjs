// Execute from an unauthenticated runner. No cookies or bypass token.
const base='https://sina-venture-gateway.vercel.app';
const marker='gateway-v3-qa-'+Date.now()+'@example.com';
async function request(path,opts){const r=await fetch(base+path,{...opts,redirect:'manual',signal:AbortSignal.timeout(10000)});return {status:r.status,body:await r.text()}}
try{
const home=await request('/');if(home.status!==200)throw Error('Anonymous homepage '+home.status);
for(const p of ['/atlas','/atlas.html','/app.js','/aether.js','/api/projects','/portfolio/approved.json']){const r=await request(p);if(r.status!==404)throw Error('Unexpected public route '+p+' '+r.status)}
const read=await request('/api/inquiry');if(read.status!==405)throw Error('Public read '+read.status);
const invalid=await request('/api/inquiry',{method:'POST',headers:{'content-type':'application/json'},body:'{}'});if(invalid.status!==400)throw Error('Invalid POST '+invalid.status);
const valid=await request('/api/inquiry',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({category:'partnership',name:'Gateway V3 automated QA',email:marker,organization:'Synthetic QA only',message:'Synthetic technical acceptance test. Do not contact or count as a lead.',consent:'on'})});
if(valid.status!==201)throw Error('Valid POST '+valid.status);
const id=JSON.parse(valid.body).id;if(!/^[0-9a-f-]{36}$/i.test(id))throw Error('Missing receipt');
console.log('GATEWAY_ANONYMOUS_QA PASS receipt='+id+' marker='+marker);
}catch(e){console.error('GATEWAY_ANONYMOUS_QA FAIL '+e.message);process.exitCode=1}
