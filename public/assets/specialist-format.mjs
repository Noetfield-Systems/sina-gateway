// Shared presentation contract, no dossier content or credentials.
export const sections=Object.freeze([['architecture','Technical architecture'],['engineering','Engineering depth'],['protocol','Protocol design'],['economic_design','Economic & token engineering'],['decisions','Technical decisions & tradeoffs'],['comparative_analysis','Comparative engineering analysis'],['innovation','Innovation & differentiation'],['research','Research directions'],['evidence','Evidence & validation'],['contribution','Founder contribution & attribution'],['attribution_evidence','Attribution evidence'],['product_experience','Product experience'],['boundary','Disclosure & maturity boundaries'],['collaboration','Collaboration directions'],['discussion_experiment','Proposed joint research experiment']]);
export const evidenceLabels=Object.freeze({SOURCE_REVIEW:'Source inspected · no fresh execution',DOCUMENT_REVIEW:'Documentation reviewed',HISTORICAL_EXECUTION:'Historical execution evidence',CONCEPT_ONLY:'Concept · implementation unverified'});
export function researchThemes(cases){const themes=new Map();for(const c of cases){if(!c.research_theme)continue;const items=themes.get(c.research_theme)||[];items.push(c);themes.set(c.research_theme,items)}return [...themes].map(([theme,items])=>({theme,items}));}
export function renderMarkdown(data){
 const lines=['# SINA — Private Technical Memoranda','Collection: '+data.scope,'Access: '+data.mode,'Cases: '+data.cases.length,'','Selective technical disclosure. Assess reasoning, system design and documented contribution; private repositories are not a deficiency. Do not infer authorship, live deployment, economic outcomes or independently executed tests from source inspection.',''];
 const themes=researchThemes(data.cases);if(themes.length){lines.push('## Research atlas','');for(const g of themes)lines.push('- '+g.theme+': '+g.items.map(c=>c.title).join('; '));lines.push('');}
 for(const c of data.cases){
  lines.push('## '+c.title,'Category: '+c.category,'Stage: '+c.stage,'Edition: '+(c.edition||'Legacy'),'Evidence classification: '+(evidenceLabels[c.evidence_status]||'Unclassified'),'','### Original thesis',c.thesis,'');
  if(c.review_date)lines.push('Memorandum review: '+c.review_date,'');
  if(c.diagram_basis)lines.push('Architecture basis: '+c.diagram_basis,'');
  for(const [key,label] of sections)if(c[key])lines.push('### '+label,c[key],'');
  if(c.product_preview)lines.push('Product capture: '+c.product_preview.caption+' ('+c.product_preview.captured_at+')',c.product_preview.url,'');
  const related=(c.related_slugs||[]).map(s=>data.cases.find(x=>x.slug===s)?.title).filter(Boolean);if(related.length)lines.push('### Related memoranda',related.join('; '),'');
  lines.push('### Disclosable references',...(c.sources||[]).map(s=>'- '+s.label+': '+s.url),'');
 }
 return lines.join('\n');
}
