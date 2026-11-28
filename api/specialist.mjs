import {neon} from '@neondatabase/serverless';
import {validateAccess,presentCase,readAgentRequest,renderMarkdown} from '../lib/specialist.mjs';
export default async function handler(req,res){
 res.setHeader('Cache-Control','private, no-store, max-age=0');
 res.setHeader('X-Robots-Tag','noindex, nofollow, noarchive');
 res.setHeader('Referrer-Policy','no-referrer');
 res.setHeader('Vary','Origin, Accept, Authorization');
 if(!['GET','POST'].includes(req.method)){res.setHeader('Allow','GET, POST');return res.status(405).json({error:'Access requires a valid invitation.'})}
 let input;
 if(req.method==='GET'){input=readAgentRequest(req.query,req.headers.authorization);}
 else{
 if(!String(req.headers['content-type']||'').startsWith('application/json'))return res.status(415).json({error:'JSON required'});
 if(Number(req.headers['content-length']||0)>2000)return res.status(413).json({error:'Request too large'});
 try{input=validateAccess(typeof req.body==='string'?JSON.parse(req.body):req.body)}catch{}
 }
 if(!input)return res.status(401).json({error:'Invitation unavailable.'});
 if(!process.env.GATEWAY_DATABASE_URL)return res.status(503).json({error:'Specialist access temporarily unavailable.'});
 try{
  const sql=neon(process.env.GATEWAY_DATABASE_URL);
  // Hash-only, scope-specific grants; live expiry/revocation. No secret in URL,
  // static assets, sitemap, logs, browser storage, or returned data.
  const grants=await sql`SELECT audience FROM specialist_grants WHERE token_hash=${input.hash} AND scope=${input.scope} AND revoked_at IS NULL AND expires_at>now() LIMIT 1`;
  if(grants.length!==1)return res.status(401).json({error:'Invitation unavailable.'});
  const mode=grants[0].audience;
  if(!['owner','specialist'].includes(mode))return res.status(401).json({error:'Invitation unavailable.'});
  const rows=await sql`SELECT c.payload,c.visibility FROM specialist_cases c JOIN specialist_grants g ON g.scope=c.scope WHERE g.token_hash=${input.hash} AND g.scope=${input.scope} AND g.revoked_at IS NULL AND g.expires_at>now() AND (g.audience='owner' OR (g.audience='specialist' AND c.visibility='approved' AND c.approval_ref IS NOT NULL AND c.slug=ANY(g.allowed_slugs))) ORDER BY c.rank,c.slug`;
  const cases=rows.map(r=>presentCase({...r.payload,visibility:r.visibility},mode)).filter(Boolean);
  if(mode==='specialist'&&input.scope==='web3'&&(cases.length!==rows.length||cases.some(c=>c.edition!=='V11')))return res.status(503).json({error:'Collection edition unavailable.'});
  const data={scope:input.scope,mode,cases};
  if(String(req.headers.accept||'').includes('text/markdown')){res.setHeader('Content-Type','text/markdown; charset=utf-8');return res.status(200).send(renderMarkdown(data));}
  return res.status(200).json(data);
 }catch{return res.status(503).json({error:'Specialist access temporarily unavailable.'})}
}
