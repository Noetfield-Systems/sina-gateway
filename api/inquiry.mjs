import { neon } from '@neondatabase/serverless';
import { validateInquiry } from '../lib/inquiry.mjs';
export default async function handler(req,res){
res.setHeader('Cache-Control','no-store');res.setHeader('X-Robots-Tag','noindex, nofollow');
if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'Method not allowed'});}
if(!String(req.headers['content-type']||'').startsWith('application/json'))return res.status(415).json({error:'JSON required'});
if(Number(req.headers['content-length']||0)>12000)return res.status(413).json({error:'Request too large'});
try {
const input=validateInquiry(typeof req.body==='string'?JSON.parse(req.body):req.body);
if(!input)return res.status(400).json({error:'Invalid inquiry'});
if(!process.env.GATEWAY_DATABASE_URL)return res.status(503).json({error:'Intake unavailable'});
const sql=neon(process.env.GATEWAY_DATABASE_URL);
const {category,name,email,organization,message}=input;
const rows=await sql`INSERT INTO inquiries(category,name,email,organization,message) SELECT ${category},${name},${email},${organization},${message} WHERE (SELECT count(*) FROM inquiries WHERE email=${email} AND created_at>now()-interval '1 hour')<3 RETURNING id`;
if(!rows.length)return res.status(429).json({error:'Please try again later'});
return res.status(201).json({id:rows[0].id});
}catch{ return res.status(503).json({error:'Inquiry not saved'});}
}