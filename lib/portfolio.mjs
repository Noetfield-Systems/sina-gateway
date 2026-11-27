export const weights=Object.freeze({credibility:20,technology:20,design:15,business:15,innovation:10,founderFit:10,evidence:10});
export const caseFields=['problem','solution','marketOpportunity','technology','capabilities','architecture','verifiedMilestones','screenshots','stage','founderContribution','collaboration'];
export function score(r){return Object.entries(weights).reduce((n,[k,w])=>{const v=r?.[k];if(!Number.isFinite(v)||v<0||v>100)throw Error('Invalid score');return n+v*w/100},0)}
export const discoveryTerritories=Object.freeze(['web3','ai','startups','capital','trade','fintech','local','gaming','consumer','companies','luxury','physical','commerce','growth','community','research']);
export const showcaseLimits=Object.freeze({home:12,territory:6});
export function curate(entries){if(!Array.isArray(entries))throw Error('Expected array');const slugs=new Set();return entries.map(e=>{
if(!e||e.approval?.status!=='approved'||e.approval?.authority!=='founder'||!e.approval?.reference||!Number.isFinite(Date.parse(e.approval?.date)))throw Error('Missing publication authority');
if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.slug)||slugs.has(e.slug)||typeof e.title!=='string'||!e.title.trim())throw Error('Invalid public case identifier');slugs.add(e.slug);

if(e.approval.scope==='public_link_description'){
if(Object.keys(e).some(k=>!['slug','title','approval','reference'].includes(k)))throw Error('Reference scope cannot carry full-case fields');
const r=e.reference;if(!r||Object.keys(r).some(k=>!['description','author','stage','territories','url'].includes(k))||!Array.isArray(r.territories)||!r.territories.length||r.territories.some(t=>!discoveryTerritories.includes(t)))throw Error('Invalid public reference');
for(const k of ['description','author','stage'])if(typeof r[k]!=='string'||!r[k].trim()||r[k].length>800)throw Error('Invalid reference copy');
const u=new URL(r.url);if(u.protocol!=='https:'||u.username||u.password)throw Error('Invalid reference URL');
return {slug:e.slug,title:e.title,scope:'public_link_description',score:0,reference:{description:r.description,author:r.author,stage:r.stage,url:u.href},showcase:{territories:[...new Set(r.territories)],positioning:r.description}};
}
if(e.approval.scope!==undefined&&e.approval.scope!=='full')throw Error('Unsupported publication scope');
if(!e.caseStudy||Object.keys(e.caseStudy).some(k=>!caseFields.includes(k)))throw Error('Unexpected case field');
for(const k of caseFields){const v=e.caseStudy[k];if(k==='screenshots'){if(!Array.isArray(v)||!v.length||v.some(s=>typeof s!=='string'||!/^\/images\/[a-z0-9_-]+\.(png|jpg|webp)$/.test(s)))throw Error('Approved local screenshots required')}else if(typeof v!=='string'||!v.trim())throw Error('Incomplete case study')}
let showcase=null;if(e.showcase!==undefined){const s=e.showcase;if(!s||Object.keys(s).some(k=>!['territories','positioning','interesting','audience','productUrl','linkLabel'].includes(k))||!Array.isArray(s.territories)||!s.territories.length||s.territories.some(t=>!discoveryTerritories.includes(t)))throw Error('Invalid showcase territory');for(const k of ['positioning','interesting','audience','linkLabel'])if(typeof s[k]!=='string'||!s[k].trim()||s[k].length>600)throw Error('Invalid showcase copy');if(typeof s.productUrl!=='string'||!/^https:\/\//i.test(s.productUrl))throw Error('Invalid product link');const u=new URL(s.productUrl);if(u.protocol!=='https:'||u.username||u.password)throw Error('Invalid product link');showcase={territories:[...new Set(s.territories)],positioning:s.positioning,interesting:s.interesting,audience:s.audience,productUrl:u.href,linkLabel:s.linkLabel};}
return {slug:e.slug,title:e.title,score:score(e.ratings),caseStudy:Object.fromEntries(caseFields.map(k=>[k,e.caseStudy[k]])),showcase};
}).sort((a,b)=>b.score-a.score)}
export function selectShowcases(items,territory='home',limit=territory==='home'?showcaseLimits.home:showcaseLimits.territory){if(territory!=='home'&&!discoveryTerritories.includes(territory))return [];if(!Number.isSafeInteger(limit)||limit<1)throw Error('Invalid display limit');return items.filter(x=>territory==='home'||x.showcase?.territories.includes(territory)).slice(0,limit)}
export const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
