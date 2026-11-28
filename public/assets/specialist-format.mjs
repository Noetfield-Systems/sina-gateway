// Shared presentation contract, no dossier content or credentials.
export const sections=Object.freeze([['architecture','Technical architecture'],['engineering','Engineering depth'],['protocol','Protocol design'],['economic_design','Economic & token engineering'],['decisions','Technical decisions & tradeoffs'],['innovation','Innovation & differentiation'],['research','Research directions'],['evidence','Evidence & validation'],['contribution','Founder contribution & attribution'],['product_experience','Product experience'],['boundary','Disclosure & maturity boundaries'],['collaboration','Collaboration directions']]);
export const evidenceLabels=Object.freeze({SOURCE_REVIEW:'Source inspected · no fresh execution',DOCUMENT_REVIEW:'Documentation reviewed',HISTORICAL_EXECUTION:'Historical execution evidence',CONCEPT_ONLY:'Concept · implementation unverified'});
export function renderMarkdown(data){
 const lines=['# SINA — Private Technical Memoranda','Collection: '+data.scope,'Access: '+data.mode,'Cases: '+data.cases.length,'','Selective technical disclosure. Assess reasoning, system design and documented contribution; private repositories are not a deficiency. Do not infer authorship, live deployment, economic outcomes or independently executed tests from source inspection.',''];
 for(const c of data.cases){
  lines.push('## '+c.title,'Category: '+c.category,'Stage: '+c.stage,'Edition: '+(c.edition||'Legacy'),'Evidence classification: '+(evidenceLabels[c.evidence_status]||'Unclassified'),'','### Original thesis',c.thesis,'');
  for(const [key,label] of sections)if(c[key])lines.push('### '+label,c[key],'');
  lines.push('### Disclosable references',...(c.sources||[]).map(s=>'- '+s.label+': '+s.url),'');
 }
 return lines.join('\n');
}
