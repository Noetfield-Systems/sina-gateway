import {escapeHtml as e} from './portfolio.mjs';
export const discoveryBriefs=Object.freeze([
  {
    "id": "ai",
    "title": "AI, coding agents & developer technology",
    "headline": "Engineering dependable intelligence",
    "thesis": "The interesting problem is not whether an agent can produce code. It is whether a team can trust a sequence of changes, reproduce an outcome and recover when a model or tool fails.",
    "audience": "Software engineers · AI engineers · CTOs",
    "lenses": [
      "Agent workspaces: context assembly, tool interfaces, isolation and reviewable change sets.",
      "Model integration: routing by task, structured output, fallback behavior and measured cost.",
      "Developer experience: reproducible evaluation, observable tool use and practical integration with existing workflows."
    ],
    "steps": [
      "Choose one representative development task and establish a human or deterministic baseline.",
      "Compare the agent-assisted result on correctness, review effort, execution cost and failure recovery.",
      "Document the conditions under which the approach is useful, and where it should not be used."
    ],
    "question": "What part of the engineering lifecycle is most constrained by context, coordination or reliability?",
    "conversation": "Bring a codebase, evaluation question or workflow that could benefit from a focused technical experiment.",
    "links": [
      [
        "Public engineering note",
        "/engineering/"
      ]
    ]
  },
  {
    "id": "startups",
    "title": "Startups & emerging technology",
    "headline": "From an insight to an actual product",
    "thesis": "A technology is not yet a venture. The most compelling opportunities begin with a specific user, an important problem and a credible reason to choose a new solution.",
    "audience": "Founders · product managers · designers · technology partners",
    "lenses": [
      "Problem discovery: identify a concrete situation in which existing alternatives are inadequate.",
      "Product architecture: choose the smallest usable experience that can test the core thesis.",
      "Commercial design: define who makes the purchasing decision, how the product reaches them and how value is measured."
    ],
    "steps": [
      "Describe a real user and their present alternative.",
      "Create a narrow prototype or service experiment and observe the user experience.",
      "Use evidence from actual conversations and trials to decide whether to expand, revise or stop."
    ],
    "question": "What unmet need could be addressed with a fundamentally better product rather than a larger feature list?",
    "conversation": "Bring a problem, an early concept or complementary product expertise.",
    "links": []
  },
  {
    "id": "capital",
    "title": "Venture building, VC & private equity",
    "headline": "Capital, ownership and company formation",
    "thesis": "A useful venture thesis connects a differentiated product or acquisition opportunity with the people, capabilities, capital and operating discipline needed to realize it.",
    "audience": "Founders · investors · investment professionals · experienced operators",
    "lenses": [
      "Venture creation: founder alignment, market selection and complementary capabilities.",
      "Investment technology: sourcing, diligence, portfolio information and capital allocation workflows.",
      "Acquisition technology: operational baselines, value-creation hypotheses and integration planning."
    ],
    "steps": [
      "Define the market thesis and the company or workflow to which it applies.",
      "Separate assumed outcomes from verified company performance, ownership and funding information.",
      "Identify a concrete next conversation: strategic advice, technical co-building or appropriate diligence."
    ],
    "question": "Which opportunity deserves scarce capital and operating attention, and what evidence would change that decision?",
    "conversation": "Exchange a thesis or discuss software and operating infrastructure; specific investment opportunities require their own verified terms.",
    "links": []
  },
  {
    "id": "trade",
    "title": "Global business, trade & logistics",
    "headline": "Infrastructure for international commerce",
    "thesis": "Trade depends on a chain of decisions: finding credible counterparties, comparing terms, coordinating transport and reconciling deliveries and payments across organizations.",
    "audience": "International traders · logistics specialists · business owners · market expansion partners",
    "lenses": [
      "Trade discovery: product specifications, supplier qualification and buyer requirements.",
      "Logistics coordination: shipment milestones, document handoffs and exception visibility.",
      "Cross-border workflows: quotations, commercial terms, landed-cost assumptions and reconciliation."
    ],
    "steps": [
      "Map one real transaction from request to delivery, identifying information gaps and ownership at each step.",
      "Compare the existing manual process with a small structured digital workflow.",
      "Measure avoided rework, time to resolve exceptions and clarity for counterparties."
    ],
    "question": "Which handoff in international trade produces the most avoidable uncertainty or delay?",
    "conversation": "Bring an actual trade lane, procurement challenge or logistics process for a practical conversation.",
    "links": []
  },
  {
    "id": "fintech",
    "title": "FinTech, banking & capital markets",
    "headline": "Financial infrastructure with accountable records",
    "thesis": "Financial software becomes valuable when it helps users make decisions, understand obligations or reconcile transfers accurately. The system must distinguish information, authorization and settlement.",
    "audience": "FinTech professionals · traders · financial engineers · capital markets specialists",
    "lenses": [
      "Market intelligence: data provenance, timestamps, comparable instruments and research methods.",
      "Capital workflows: obligation records, servicing events, permissions and reconciliation.",
      "Payments and settlement: exact-value accounting, authorization and independently observed transaction outcomes."
    ],
    "steps": [
      "Select a concrete financial workflow and define the source of truth for each record.",
      "Identify who is authorized to change state and which events constitute a completed outcome.",
      "Prototype the workflow with test data, reconcile results and document assumptions before handling real assets."
    ],
    "question": "Where does fragmented information prevent a financial operator from making a timely, trustworthy decision?",
    "conversation": "Discuss a financial software problem, research integration or technical architecture. This is not a financial product offer.",
    "links": [
      [
        "Market intelligence collection",
        "/discover/markets/"
      ],
      [
        "Web3 & settlement engineering",
        "/discover/web3/"
      ]
    ]
  },
  {
    "id": "local",
    "title": "Local business & urban economy",
    "headline": "Useful work close to home",
    "thesis": "Vancouver offers a practical setting for studying how service providers, small businesses and residents discover one another and coordinate everyday needs.",
    "audience": "Vancouver professionals · local business owners · operators · community builders",
    "lenses": [
      "Local services: availability, trust, scheduling and service delivery.",
      "Hospitality and commerce: discoverability, repeat customers and practical operational tools.",
      "Urban marketplaces: matching local demand and supply while preserving a human point of contact."
    ],
    "steps": [
      "Choose a neighborhood-scale problem and talk to the people who encounter it.",
      "Test a small service or coordination workflow before building a broad marketplace.",
      "Measure actual bookings, successful fulfillment, repeat demand and customer feedback."
    ],
    "question": "Which recurring local problem is poorly served by current services or platforms?",
    "conversation": "Introduce a local business, a practical need or a community partnership in Vancouver.",
    "links": []
  },
  {
    "id": "gaming",
    "title": "Gaming, entertainment & virtual worlds",
    "headline": "Experiences people want to return to",
    "thesis": "An interactive world is only compelling when its mechanics, atmosphere and social experience give players a reason to return. Technology and economies should serve that experience.",
    "audience": "Game developers · designers · creative professionals · community builders",
    "lenses": [
      "Game systems: core loops, progression, meaningful choices and feedback.",
      "Digital worlds: spatial interaction, persistence, identity and collaborative experiences.",
      "Game economies: transparent resources, balanced incentives and sustainable content systems."
    ],
    "steps": [
      "Describe one player experience in terms of actions, feedback and reasons to return.",
      "Build a small playable slice rather than a large empty world.",
      "Observe players without coaching; revise mechanics based on actual enjoyment and behavior."
    ],
    "question": "What makes an interactive experience genuinely memorable rather than merely visually impressive?",
    "conversation": "Bring a mechanic, art direction, playable prototype or world-building concept for discussion.",
    "links": []
  },
  {
    "id": "consumer",
    "title": "Consumer, lifestyle & social applications",
    "headline": "Products that earn a place in everyday life",
    "thesis": "Consumer technology is not simply a collection of features. The strongest products understand the context in which people use them, the trust required and the value of returning.",
    "audience": "Consumer founders · mobile engineers · designers · educators",
    "lenses": [
      "Mobile-first products: simple onboarding, accessibility and meaningful repeat use.",
      "Human connection: consent, thoughtful introductions, safety and authentic interaction.",
      "Learning and productivity: clear feedback, useful progress and minimal unnecessary complexity."
    ],
    "steps": [
      "Identify a specific everyday situation and the current behavior it creates.",
      "Design a small flow that is useful without demanding excessive information or commitment.",
      "Observe first-use comprehension and repeat behavior; prioritize changes based on evidence."
    ],
    "question": "What human need is underserved by today's consumer software, and what would a genuinely better experience feel like?",
    "conversation": "Discuss a non-confidential consumer product question, design concept or complementary expertise.",
    "links": []
  },
  {
    "id": "companies",
    "title": "Autonomous companies & intelligent operations",
    "headline": "A more useful relationship between people and software",
    "thesis": "The most credible promise of AI-native organizations is not eliminating people. It is reducing avoidable coordination work while preserving responsibility, judgment and visibility into actual outcomes.",
    "audience": "Executives · business operators · AI engineers · organizational designers",
    "lenses": [
      "Intelligent workflows: task boundaries, dependencies, evidence and recovery.",
      "Human–AI collaboration: delegation, accountability and escalation when judgment is needed.",
      "Operational systems: commercial priorities, customer outcomes and measurable improvements."
    ],
    "steps": [
      "Map a repeated workflow and establish the current time, cost and error baseline.",
      "Delegate a narrow, reversible task with explicit inputs and acceptance criteria.",
      "Measure completed work, manual intervention and failure recovery rather than the number of agents."
    ],
    "question": "Which operational constraint could be reduced without compromising the quality of human decisions?",
    "conversation": "Bring a real workflow, automation question or operating-model challenge.",
    "links": []
  },
  {
    "id": "luxury",
    "title": "Luxury, wealth & private markets",
    "headline": "Technology behind exceptional service",
    "thesis": "High-value markets depend on provenance, discretion, expertise and trust. The role of technology is often to make an exceptional human relationship more informed, rather than to replace it with a mass-market funnel.",
    "audience": "Luxury professionals · collectors · private client advisers · commerce specialists",
    "lenses": [
      "High-value commerce: verified provenance, accurate descriptions and discreet discovery.",
      "Private client experience: consent-based preferences, personal service and efficient preparation.",
      "Specialist networks: introductions, expertise and careful handling of transactions and confidential information."
    ],
    "steps": [
      "Identify a high-value client journey and where uncertainty or time is lost.",
      "Design a tool that supports the specialist without publishing private client information.",
      "Validate quality with actual practitioners; avoid implying authenticity, valuation or availability without evidence."
    ],
    "question": "How can technology make a rare-asset or private-client experience more trustworthy and personal?",
    "conversation": "Explore a specific specialist workflow, private-market software problem or high-end service concept.",
    "links": []
  },
  {
    "id": "physical",
    "title": "Real estate, construction & physical industries",
    "headline": "Better information for tangible assets",
    "thesis": "Physical operations have constraints that software cannot wish away: locations, schedules, budgets, materials, safety and handoffs between responsible teams.",
    "audience": "Property professionals · construction specialists · architects · industrial operators",
    "lenses": [
      "Property operations: maintenance requests, asset records and service coordination.",
      "Construction workflows: scope, quotations, schedules, changes and delivery evidence.",
      "Industrial software: inventory, site information, exceptions and operational decisions."
    ],
    "steps": [
      "Map an actual process with the people responsible for each handoff.",
      "Identify one source of repeated rework, delayed decisions or missing records.",
      "Prototype an improvement and measure its effect on the workflow, not merely dashboard activity."
    ],
    "question": "What information gap repeatedly delays or increases the cost of a physical-world decision?",
    "conversation": "Bring a property, construction or industrial workflow suitable for a focused discussion.",
    "links": []
  },
  {
    "id": "commerce",
    "title": "E-commerce, marketplaces & digital commerce",
    "headline": "Designing credible exchange between buyers and sellers",
    "thesis": "A marketplace becomes useful when participants can find one another, understand terms, transact with confidence and return because the experience is better than the alternatives.",
    "audience": "Merchants · marketplace founders · product specialists · distribution partners",
    "lenses": [
      "Merchant technology: catalog management, availability, pricing and fulfillment.",
      "Marketplace mechanics: supply quality, matching, trust, dispute handling and repeat demand.",
      "Distribution: gifting, referrals, partnerships and creator-led commerce."
    ],
    "steps": [
      "Choose a concrete category and map how buyers currently discover and purchase.",
      "Test a narrow supply-and-demand experience with real participants.",
      "Measure conversion, successful fulfillment, repeat purchase and the economics of serving both sides."
    ],
    "question": "What makes an exchange worth returning to for both the customer and the merchant?",
    "conversation": "Discuss a merchant problem, distribution opportunity or marketplace concept.",
    "links": []
  },
  {
    "id": "growth",
    "title": "Sales, growth & business development",
    "headline": "Relationships before automation",
    "thesis": "A durable distribution system understands who benefits, why the opportunity matters and what follow-up is appropriate. It cannot substitute automated activity for genuine commercial interest.",
    "audience": "Growth professionals · sales leaders · founders · partnership managers",
    "lenses": [
      "Customer discovery: qualified audiences, problem context and relevant offers.",
      "Relationship workflows: consent, contact context, commitments and appropriate follow-up.",
      "Partnership economics: mutual value, attribution and clear responsibilities."
    ],
    "steps": [
      "Define one audience, a credible reason to engage and a measurable customer outcome.",
      "Test a small relevant outreach or referral experiment; track responses without inventing engagement.",
      "Improve the message, channel or product based on observed outcomes."
    ],
    "question": "How can a business create repeatable distribution without sacrificing trust or treating every person as a lead?",
    "conversation": "Discuss an acquisition, referral or partnership problem grounded in a real business.",
    "links": [
      [
        "Public boundary engineering note",
        "/engineering/"
      ]
    ]
  },
  {
    "id": "community",
    "title": "Community, creator & participation economy",
    "headline": "Making participation worth people's time",
    "thesis": "Communities create value when people can contribute, learn, connect and receive fair recognition. An incentive mechanism should strengthen the experience rather than replace its purpose.",
    "audience": "Community builders · creators · researchers · platform developers",
    "lenses": [
      "Contribution design: clear opportunities, evidence of completion and meaningful recognition.",
      "Community experience: onboarding, shared interests, feedback and long-term relationships.",
      "Participation economics: budgeted rewards, transparent eligibility and settlement when actually funded."
    ],
    "steps": [
      "Choose a community need and define what a useful contribution looks like.",
      "Test a small participation workflow with real participants and gather feedback.",
      "Evaluate whether recognition, rewards or collaboration strengthen sustained participation."
    ],
    "question": "What would make a community valuable even if financial incentives were removed?",
    "conversation": "Bring a community-building question or a contribution mechanism worth testing.",
    "links": [
      [
        "Escrow and contribution settlement research",
        "/discover/web3/"
      ]
    ]
  },
  {
    "id": "research",
    "title": "Research, innovation & experimental ideas",
    "headline": "A disciplined place for unusual questions",
    "thesis": "A serious experiment identifies a question, an observable result and the conditions that would change the original hypothesis. An interesting idea does not need to become a company immediately.",
    "audience": "Researchers · technical specialists · designers · curious collaborators",
    "lenses": [
      "Exploration: emerging technologies and interdisciplinary hypotheses.",
      "Experimentation: bounded prototypes, transparent assumptions and reproducible observations.",
      "Knowledge sharing: readable notes, concrete evidence and clear limits."
    ],
    "steps": [
      "Write one question and distinguish what is known from what is assumed.",
      "Choose a small experiment with an observable result and a comparison baseline.",
      "Share the method, outcome and uncertainty; decide whether another iteration is justified."
    ],
    "question": "What promising question remains unexplored because it falls between existing disciplines?",
    "conversation": "Introduce an unusual idea, a research problem or a technical experiment.",
    "links": [
      [
        "Engineering note",
        "/engineering/"
      ],
      [
        "Protocol engineering collection",
        "/discover/web3/"
      ]
    ]
  }
]);
export function renderDiscovery(d,base){const href='/discover/'+d.id+'/';const cards=d.lenses.map((x,i)=>'<article><span class="kicker">0'+(i+1)+'</span><p>'+e(x)+'</p></article>').join('');const steps=d.steps.map((x,i)=>'<li><span>0'+(i+1)+'</span><p>'+e(x)+'</p></li>').join('');const links=d.links.map(([t,u])=>'<a class="row" href="'+e(u)+'">'+e(t)+' <span>↗</span></a>').join('');return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="'+e(d.thesis)+'"><link rel="canonical" href="'+base+href+'"><title>'+e(d.title)+' | SINA Gateway</title><style>:root{--paper:#f5f3ed;--ink:#202824;--muted:#59625d;--line:#d9d7ce;--accent:#82633b;--dark:#172420}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.7 system-ui,-apple-system,sans-serif}a{color:inherit;text-decoration:none}a:focus-visible{outline:2px solid #947349;outline-offset:4px}.wrap{width:min(1080px,calc(100% - 64px));margin:auto}header{border-bottom:1px solid var(--line)}nav{min-height:70px;display:flex;justify-content:space-between;align-items:center;gap:15px;font-size:12px;font-weight:700;letter-spacing:.06em}nav a:last-child{font-weight:500;letter-spacing:0}.hero{padding:75px 0 58px;display:grid;grid-template-columns:1fr .42fr;gap:45px;align-items:end}h1,h2,h3,p{margin:0}h1{font:normal clamp(44px,6vw,83px)/1.02 Georgia,serif;letter-spacing:-.05em;margin:17px 0 21px}h2{font:normal clamp(30px,4vw,45px)/1.08 Georgia,serif;letter-spacing:-.03em;margin:10px 0 20px}.lead{font-size:18px;color:var(--muted);max-width:650px}.kicker{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);font-weight:700}.aside{border:1px solid var(--line);padding:22px;background:#e6e7de}.aside p{font-size:13px;margin-top:10px;color:var(--muted)}.section{padding:48px 0;border-top:1px solid var(--line)}.lenses{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.lenses article{background:#fbf9f4;border:1px solid var(--line);padding:20px}.lenses p{font-size:14px;margin-top:12px}.two{display:grid;grid-template-columns:1fr 1fr;gap:36px}.question{background:var(--dark);color:#f4f0e5;padding:27px}.question .kicker{color:#d5be96}.question h2{font-size:35px}.question p{color:#bdc9bf;font-size:14px}.steps{list-style:none;padding:0;margin:0}.steps li{display:flex;gap:15px;padding:15px 0;border-top:1px solid var(--line);font-size:14px}.steps span{color:var(--accent);font-size:11px}.button{display:inline-flex;align-items:center;gap:15px;min-height:46px;padding:10px 17px;border:1px solid var(--dark);background:var(--dark);color:#f4f0e5;font-size:13px;font-weight:650;border-radius:3px}.button.light{background:#dfc69e;color:var(--ink);border-color:#dfc69e;margin-top:20px}.row{display:flex;justify-content:space-between;gap:15px;padding:14px 0;border-top:1px solid var(--line);font-size:14px}.note{font-size:12px;color:var(--muted);margin-top:20px}footer{padding:25px 0;border-top:1px solid var(--line);font-size:12px;color:var(--muted)}@media(max-width:700px){.wrap{width:calc(100% - 36px)}.hero,.two{grid-template-columns:1fr;gap:20px}.hero{padding:43px 0 30px}h1{font-size:48px}.lead{font-size:16px}.section{padding:33px 0}.lenses{grid-template-columns:1fr}.question{padding:20px}.question h2{font-size:30px}}</style></head><body><header><nav class="wrap"><a href="/">SINA / GATEWAY</a><a href="/#focus">All interests ↗</a></nav></header><main class="wrap"><section class="hero"><div><div class="kicker">Editorial exploration · '+e(d.title)+'</div><h1>'+e(d.headline)+'</h1><p class="lead">'+e(d.thesis)+'</p></div><aside class="aside"><div class="kicker">For people interested in</div><p>'+e(d.audience)+'</p><p>Research and discussion, not an assertion of an active commercial project.</p></aside></section><section class="section"><div class="kicker">01 / Perspectives</div><h2>Three areas worth exploring.</h2><div class="lenses">'+cards+'</div></section><section class="section two"><div><div class="kicker">02 / Practical exploration</div><h2>A useful starting point.</h2><ol class="steps">'+steps+'</ol></div><div class="question"><div class="kicker">03 / A question to discuss</div><h2>'+e(d.question)+'</h2><p>'+e(d.conversation)+'</p><a class="button light" href="/?interest='+e(d.id)+'#connect">Start a conversation ↗</a></div></section>'+(links?'<section class="section"><div class="kicker">Related public material</div><h2>Explore further.</h2>'+links+'</section>':'')+'<section class="section"><p class="note">This editorial brief is a starting point for discussion and research. It does not identify a private venture, claim a launched product, offer securities, or represent a commitment to collaborate.</p><a class="button" href="/#focus">Explore another interest ↗</a></section></main><footer><div class="wrap">SINA GATEWAY · Vancouver, Canada</div></footer></body></html>'}
