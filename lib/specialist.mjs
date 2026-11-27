import {createHash} from 'node:crypto';
export const scopes=Object.freeze(['web3','ai','capital','companies','trade','ventures','research','gaming','consumer','creative']);
export const tokenHash=token=>createHash('sha256').update(token,'utf8').digest('hex');
export function validateAccess(body){
 if(!body||typeof body!=='object'||Array.isArray(body)||Object.keys(body).some(k=>!['scope','token'].includes(k)))return null;
 if(!scopes.includes(body.scope)||typeof body.token!=='string'||!(/^(?:[A-Za-z0-9_-]{43}|[0-9A-HJKMNP-TV-Z]{6}(?:-[0-9A-HJKMNP-TV-Z]{6}){2})$/.test(body.token)))return null;
 return {scope:body.scope,hash:tokenHash(body.token)};
}
export function safeLink(s){try{const u=new URL(s);return u.protocol==='https:'&&!u.username&&!u.password?u.href:null}catch{return null}}
export function presentCase(row,mode){
 if(!row||typeof row!=='object'||(mode!=='owner'&&row.visibility!=='approved'))return null;
 const fields=['slug','title','category','stage','thesis','architecture','engineering','research','evidence','boundary','collaboration','contribution'];
 const out=Object.fromEntries(fields.map(k=>[k,typeof row[k]==='string'?row[k]:'']));
 out.sources=(Array.isArray(row.sources)?row.sources:[]).filter(x=>x&&typeof x.label==='string'&&safeLink(x.url)).map(x=>({label:x.label,url:safeLink(x.url)}));
 return out;
}

export function readAgentRequest(query,authorization){
 if(!query||typeof query!=='object'||Object.keys(query).some(k=>k!=='scope')||typeof authorization!=='string')return null;
 const m=/^Bearer ([A-Za-z0-9_-]+)$/.exec(authorization);
 return m?validateAccess({scope:query.scope,token:m[1]}):null;
}
export function renderMarkdown(data){
 const lines=['# SINA — Specialist Portfolio','Collection: '+data.scope,'Access: '+data.mode,'Cases: '+data.cases.length,'','Source-linked technical dossiers. Treat claims as dossier assertions; distinguish source inspection from execution, authorship, audit, and economic validation. Private repository references do not grant repository access.',''];
 for(const c of data.cases){
  lines.push('## '+c.title,'Category: '+c.category,'Stage: '+c.stage,'');
  for(const [key,label] of [['thesis','Thesis'],['architecture','Architecture'],['engineering','Engineering'],['research','Research'],['evidence','Evidence'],['contribution','Contribution'],['boundary','Boundaries'],['collaboration','Collaboration']])if(c[key])lines.push('### '+label,c[key],'');
  lines.push('### Source references',...(c.sources||[]).map(s=>'- '+s.label+': '+s.url),'');
 }
 return lines.join('\n');
}
