export const weights=Object.freeze({credibility:20,technology:20,design:15,business:15,innovation:10,founderFit:10,evidence:10});
export const caseFields=['problem','solution','marketOpportunity','technology','capabilities','architecture','verifiedMilestones','screenshots','stage','founderContribution','collaboration'];
export function score(r){return Object.entries(weights).reduce((n,[k,w])=>{const v=r?.[k];if(!Number.isFinite(v)||v<0||v>100)throw Error('Invalid score');return n+v*w/100},0)}
export function curate(entries){if(!Array.isArray(entries))throw Error('Expected array');const slugs=new Set();return entries.map(e=>{
if(!e||e.approval?.status!=='approved'||e.approval?.authority!=='founder'||!e.approval?.reference||!Number.isFinite(Date.parse(e.approval?.date)))throw Error('Missing publication authority');
if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.slug)||slugs.has(e.slug)||typeof e.title!=='string'||!e.title.trim())throw Error('Invalid public case identifier');slugs.add(e.slug);
if(!e.caseStudy||Object.keys(e.caseStudy).some(k=>!caseFields.includes(k)))throw Error('Unexpected case field');
for(const k of caseFields){const v=e.caseStudy[k];if(k==='screenshots'){if(!Array.isArray(v)||!v.length||v.some(s=>typeof s!=='string'||!/^\/images\/[a-z0-9_-]+\.(png|jpg|webp)$/.test(s)))throw Error('Approved local screenshots required')}else if(typeof v!=='string'||!v.trim())throw Error('Incomplete case study')}
return {slug:e.slug,title:e.title,score:score(e.ratings),caseStudy:Object.fromEntries(caseFields.map(k=>[k,e.caseStudy[k]]))};
}).sort((a,b)=>b.score-a.score).slice(0,6)}
export const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
