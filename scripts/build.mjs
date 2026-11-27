import fs from 'node:fs';
import {curate,escapeHtml} from '../lib/portfolio.mjs';
const items=curate(JSON.parse(fs.readFileSync('portfolio/approved.json','utf8')));
const base='https://sina-venture-gateway.vercel.app';
const html=fs.readFileSync('public/index.html','utf8');
const cards=items.map(e=>'<article class="tile"><h3><a href="/work/'+e.slug+'/">'+escapeHtml(e.title)+'</a></h3><p>'+escapeHtml(e.caseStudy.problem)+'</p></article>').join('');
if(items.length){fs.writeFileSync('public/index.html',html.replace('<div id="case-studies"></div>','<div id="case-studies" class="grid">'+cards+'</div>'));}
for(const e of items){const dir='public/work/'+e.slug;fs.mkdirSync(dir,{recursive:true});const content=Object.entries(e.caseStudy).map(([k,v])=>'<section><h2>'+escapeHtml(k.replace(/([A-Z])/g,' $1'))+'</h2>'+ (k==='screenshots'?v.map(p=>{if(!fs.existsSync('public'+p))throw Error('Screenshot missing');return '<img style="width:100%;height:auto" src="'+escapeHtml(p)+'" alt="Approved product screenshot">'}).join(''):'<p>'+escapeHtml(v)+'</p>')+'</section>').join('');fs.writeFileSync(dir+'/index.html','<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escapeHtml(e.title)+' | Sina Gateway</title><style>body{max-width:900px;margin:40px auto;padding:24px;background:#11191c;color:#f1f0e8;font:17px/1.7 system-ui}a{color:#d4b47e}section{border-top:1px solid #34474a;padding:16px 0}h2{text-transform:capitalize}</style><a href="/">SINA / GATEWAY</a><h1>'+escapeHtml(e.title)+'</h1>'+content+'</html>');}
fs.writeFileSync('public/robots.txt','User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: '+base+'/sitemap.xml\n');
fs.writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[base+'/',...items.map(e=>base+'/work/'+e.slug+'/')].map(u=>'<url><loc>'+u+'</loc></url>').join('')+'</urlset>');
console.log('Public cases generated:',items.length);
