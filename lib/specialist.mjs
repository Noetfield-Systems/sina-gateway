import {createHash} from 'node:crypto';
export {renderMarkdown} from '../public/assets/specialist-format.mjs';
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
 if(mode==='specialist'&&row.external_memo_v11){const memo=row.external_memo_v11;if(memo.edition!=='V11'||memo.slug!==row.slug)return null;row=memo;}
 const fields=['slug','title','category','stage','thesis','architecture','engineering','research','evidence','boundary','collaboration','contribution','edition','protocol','economic_design','decisions','innovation','evidence_status','product_experience'];
 const out=Object.fromEntries(fields.map(k=>[k,typeof row[k]==='string'?row[k]:'']));
 out.sources=(Array.isArray(row.sources)?row.sources:[]).filter(x=>x&&typeof x.label==='string'&&safeLink(x.url)).map(x=>({label:x.label,url:safeLink(x.url)}));
 return out;
}

export function readAgentRequest(query,authorization){
 if(!query||typeof query!=='object'||Object.keys(query).some(k=>k!=='scope')||typeof authorization!=='string')return null;
 const m=/^Bearer ([A-Za-z0-9_-]+)$/.exec(authorization);
 return m?validateAccess({scope:query.scope,token:m[1]}):null;
}
