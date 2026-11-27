import {escapeHtml as e} from './portfolio.mjs';
export const experiences=[
  {
    "id": "web3",
    "title": "Liquidity under pressure",
    "kicker": "DEX market laboratory",
    "description": "Estimate constant-product swap execution and price impact from pool reserves. Change the trade size and observe how the pool price moves.",
    "labels": [
      "Pool token reserve",
      "Quote reserve",
      "Trade size"
    ],
    "values": [
      "10000",
      "20000",
      "500"
    ],
    "mode": "swap",
    "status": "Trading simulation · no wallet or real funds"
  },
  {
    "id": "ai",
    "title": "The agent review loop",
    "kicker": "Coding agent evaluation",
    "description": "Compare a baseline manual task with an agent-assisted workflow, including review time and retry overhead.",
    "labels": [
      "Manual minutes",
      "Agent minutes",
      "Review + retry minutes"
    ],
    "values": [
      "90",
      "25",
      "20"
    ],
    "mode": "agent",
    "status": "Engineering experiment · user-supplied assumptions"
  },
  {
    "id": "startups",
    "title": "The first 100 customers",
    "kicker": "Venture experiment",
    "description": "Explore the relationship between qualified conversations, conversion and monthly recurring revenue.",
    "labels": [
      "Qualified conversations",
      "Conversion %",
      "Monthly price"
    ],
    "values": [
      "100",
      "12",
      "49"
    ],
    "mode": "venture",
    "status": "Business scenario · not observed traction"
  },
  {
    "id": "capital",
    "title": "The acquisition lens",
    "kicker": "Private market research",
    "description": "Test how normalized annual earnings, purchase multiple and leverage affect indicative equity requirement.",
    "labels": [
      "Annual earnings",
      "Purchase multiple",
      "Debt %"
    ],
    "values": [
      "250000",
      "4",
      "40"
    ],
    "mode": "acquisition",
    "status": "Hypothetical valuation · not an investment offer"
  },
  {
    "id": "trade",
    "title": "From port to shelf",
    "kicker": "Trade cost laboratory",
    "description": "Build an illustrative landed-cost model using shipment volume, unit cost and total freight/duties.",
    "labels": [
      "Units",
      "Unit cost",
      "Freight + duties"
    ],
    "values": [
      "1000",
      "15",
      "2400"
    ],
    "mode": "trade",
    "status": "Illustrative trade model · no freight quote"
  },
  {
    "id": "fintech",
    "title": "Settlement that balances",
    "kicker": "Financial engineering",
    "description": "Reconcile an opening balance, inflows and outflows. Observe the remaining liability and settlement gap.",
    "labels": [
      "Opening balance",
      "Inflows",
      "Outflows"
    ],
    "values": [
      "10000",
      "4200",
      "8500"
    ],
    "mode": "settle",
    "status": "Accounting example · no payment execution"
  },
  {
    "id": "local",
    "title": "A viable neighborhood route",
    "kicker": "Vancouver service economics",
    "description": "Explore how job volume, booking price and variable cost shape a local service day.",
    "labels": [
      "Jobs per day",
      "Price per job",
      "Cost per job"
    ],
    "values": [
      "8",
      "35",
      "18"
    ],
    "mode": "local",
    "status": "Illustrative local service · no booking"
  },
  {
    "id": "gaming",
    "title": "Orbit / a playable study",
    "kicker": "Interactive arcade",
    "description": "Pilot a small ship through a field of moving obstacles. Tap or use arrow keys to move, collect stars and avoid impacts.",
    "labels": [
      "",
      "",
      ""
    ],
    "values": [
      "",
      "",
      ""
    ],
    "mode": "game",
    "status": "Playable browser experiment · original miniature game"
  },
  {
    "id": "consumer",
    "title": "A better first session",
    "kicker": "Consumer product studio",
    "description": "Estimate activation and return from a small first-session cohort. Explore how onboarding choices change expected repeat use.",
    "labels": [
      "Visitors",
      "Activation %",
      "Return %"
    ],
    "values": [
      "200",
      "65",
      "40"
    ],
    "mode": "consumer",
    "status": "Product design model · not actual user analytics"
  },
  {
    "id": "companies",
    "title": "One team, many tasks",
    "kicker": "Human–AI operating study",
    "description": "Estimate a team’s weekly time recovered after delegating repetitive work and retaining human review.",
    "labels": [
      "Tasks per week",
      "Manual minutes per task",
      "AI + review minutes"
    ],
    "values": [
      "40",
      "30",
      "12"
    ],
    "mode": "agent",
    "status": "Operating model · not an active autonomous workforce"
  },
  {
    "id": "luxury",
    "title": "The object & its provenance",
    "kicker": "Private client study",
    "description": "Examine a fictional collectible's provenance chain. Select which evidence exists and identify unresolved questions before acquisition.",
    "labels": [
      "",
      "",
      ""
    ],
    "values": [
      "",
      "",
      ""
    ],
    "mode": "provenance",
    "status": "Interactive fictional object · not an item for sale"
  },
  {
    "id": "physical",
    "title": "A change on site",
    "kicker": "Construction workflow",
    "description": "Model a scope change and compare added labor, material and contingency costs before discussing approval.",
    "labels": [
      "Labor hours",
      "Hourly cost",
      "Materials cost"
    ],
    "values": [
      "18",
      "85",
      "650"
    ],
    "mode": "construction",
    "status": "Illustrative estimate · no actual quote"
  },
  {
    "id": "commerce",
    "title": "A marketplace in miniature",
    "kicker": "Commerce studio",
    "description": "Adjust orders, average order value and commission rate to explore marketplace gross revenue.",
    "labels": [
      "Orders",
      "Average order value",
      "Commission %"
    ],
    "values": [
      "120",
      "75",
      "8"
    ],
    "mode": "marketplace",
    "status": "Hypothetical unit economics · no payment"
  },
  {
    "id": "growth",
    "title": "A conversation, not a funnel",
    "kicker": "Partnership experiment",
    "description": "Model a small relevant outreach cohort and expected conversations and follow-up time.",
    "labels": [
      "Introductions",
      "Reply %",
      "Minutes per reply"
    ],
    "values": [
      "30",
      "25",
      "20"
    ],
    "mode": "growth",
    "status": "Planning model · no messages sent"
  },
  {
    "id": "community",
    "title": "A contribution budget",
    "kicker": "Participation economy",
    "description": "Allocate a finite community reward budget across eligible contributions with an explicit fee reserve.",
    "labels": [
      "Reward budget",
      "Contributions",
      "Fee %"
    ],
    "values": [
      "500",
      "20",
      "2.5"
    ],
    "mode": "community",
    "status": "Illustrative reward accounting · no token"
  },
  {
    "id": "research",
    "title": "An experiment worth repeating",
    "kicker": "Research methods",
    "description": "Compare a baseline result with a variant and examine the absolute and relative change.",
    "labels": [
      "Baseline",
      "Variant",
      "Sample size"
    ],
    "values": [
      "40",
      "48",
      "100"
    ],
    "mode": "research",
    "status": "Descriptive comparison · not statistical significance"
  }
];
export const publicReferences=[{id:'web3',title:'Expedition Escrow',description:'Inspect existing Solidity, Foundry tests and the independent accounting model.',href:'/discover/web3/#model',label:'Existing public engineering reference'},{id:'fintech',title:'SignalForge',description:'Read the public market research collection and documented application links.',href:'/discover/markets/',label:'Existing public project reference'}];
export function renderExperience(d){const form=d.mode==='game'?'<div class="play-stage"><canvas width="640" height="320" aria-label="Orbit arcade play field"></canvas><div class="play-controls"><button type="button" data-play="left" aria-label="Move left">←</button><button type="button" data-play="start">Start game</button><button type="button" data-play="right" aria-label="Move right">→</button></div><output aria-live="polite">Ready to play</output><p class="lab-note">Use left/right arrows or hold the touch controls. Collect gold stars and avoid red obstacles.</p></div>':d.mode==='provenance'?'<div class="object-study"><svg viewBox="0 0 300 160" role="img" aria-label="Fictional abstract bronze sculpture"><rect width="300" height="160" fill="#171b21"/><path d="M120 135h60l-8-34 31-66-27-15-46 48-28-20-14 29 38 35z" fill="#b99762"/><path d="M120 135h60v8h-60z" fill="#7d6748"/></svg><p>Study object 01 — fictional bronze sculpture</p>'+['Maker and date documented','Ownership chain complete','Condition report available','Independent authenticity review'].map((x,i)=>'<label><input type="checkbox" data-proof="'+i+'"> '+e(x)+'</label>').join('')+'<output aria-live="polite"></output></div>':'<div class="lab-inputs">'+d.labels.map((l,i)=>'<label for="lab-'+d.id+'-'+i+'">'+e(l)+'<input id="lab-'+d.id+'-'+i+'" type="number" min="0" max="1000000000" step="any" value="'+e(d.values[i])+'" inputmode="decimal"></label>').join('')+'</div><div class="lab-results" aria-live="polite"></div><p class="lab-note" data-method></p>';return '<section class="experience-lab" id="experience-'+d.id+'" data-lab="'+d.mode+'"><div class="lab-intro"><div class="lab-kicker">'+e(d.kicker)+'</div><h2>'+e(d.title)+'</h2><p>'+e(d.description)+'</p><span class="lab-status">'+e(d.status)+'</span></div><div class="lab-workspace">'+form+'</div><a class="lab-contact" href="/?interest='+e(d.id)+'&amp;idea='+e(d.id)+'#connect">Discuss this experiment ↗</a></section>'}
export function insertExperience(html,id){const d=experiences.find(x=>x.id===id);if(!d)return html;const section=renderExperience(d);const match=html.match(/<section[^>]*>[\s\S]*?<\/section>/);if(!match)throw Error('Missing discovery hero '+id);return html.replace(match[0],match[0]+section)}
export function homeDiscoveries(){const picks=['gaming','web3','trade','ai','luxury','physical'];return '<section class="section" id="experiences"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Interactive collection / Edition 01</div><h2>Something you can actually try.</h2></div><p>Small, original experiments across markets, engineering, business and creative work. Change the inputs, play, or investigate a question.</p></div><div class="experience-rail">'+picks.map(id=>{const d=experiences.find(x=>x.id===id);return '<a class="experience-preview" data-preview="'+id+'" href="/discover/'+id+'/#experience-'+id+'"><span class="lab-kicker">'+e(d.kicker)+'</span><h3>'+e(d.title)+'</h3><p>'+e(d.description)+'</p><span>Try the experience ↗</span></a>'}).join('')+'</div></div></section>'}
