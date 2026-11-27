import fs from 'node:fs';
import {escapeHtml as e} from './portfolio.mjs';
export const territories=Object.freeze([
  {
    "id": "web3",
    "title": "Web3 & Crypto",
    "description": "Digital assets, protocols and programmable markets",
    "roles": [
      "engineer",
      "capital",
      "research"
    ],
    "keywords": "solidity ethereum EVM DeFi blockchain crypto wallets tokenization",
    "accent": "#678dff",
    "layout": "studio",
    "href": "/discover/web3/"
  },
  {
    "id": "ai",
    "title": "AI & Developer Technology",
    "description": "Agents, coding tools and intelligent software",
    "roles": [
      "engineer",
      "founder",
      "research"
    ],
    "keywords": "AI MCP coding agents IDE developer tools models",
    "accent": "#43d3df",
    "layout": "studio",
    "href": "/discover/ai/"
  },
  {
    "id": "startups",
    "title": "Startups & Emerging Tech",
    "description": "Product discovery and new venture formation",
    "roles": [
      "founder",
      "engineer",
      "creative"
    ],
    "keywords": "startup SaaS product founder cofounder technology",
    "accent": "#8da7f7",
    "layout": "editorial",
    "href": "/discover/startups/"
  },
  {
    "id": "capital",
    "title": "Venture Building & Capital",
    "description": "Company formation, venture capital and private equity",
    "roles": [
      "capital",
      "founder",
      "operator"
    ],
    "keywords": "VC PE private equity investment acquisition",
    "accent": "#d6b67f",
    "layout": "editorial",
    "href": "/discover/capital/"
  },
  {
    "id": "trade",
    "title": "Global Trade & Logistics",
    "description": "International commerce and supply-chain coordination",
    "roles": [
      "operator",
      "founder"
    ],
    "keywords": "logistics freight import export global trade supply chain",
    "accent": "#6aa6d8",
    "layout": "field",
    "href": "/discover/trade/"
  },
  {
    "id": "fintech",
    "title": "FinTech & Capital Markets",
    "description": "Financial workflows, banking and settlement",
    "roles": [
      "capital",
      "engineer",
      "operator"
    ],
    "keywords": "RWA payments banking fintech private credit",
    "accent": "#60caa5",
    "layout": "studio",
    "href": "/discover/fintech/"
  },
  {
    "id": "local",
    "title": "Local & Urban Economy",
    "description": "Vancouver business and local services",
    "roles": [
      "operator",
      "founder",
      "creative"
    ],
    "keywords": "Vancouver local hospitality restaurants delivery",
    "accent": "#d69a7e",
    "layout": "field",
    "href": "/discover/local/"
  },
  {
    "id": "gaming",
    "title": "Gaming & Virtual Worlds",
    "description": "Game mechanics and interactive experiences",
    "roles": [
      "creative",
      "founder",
      "engineer"
    ],
    "keywords": "games game development worlds entertainment",
    "accent": "#ff8d82",
    "layout": "studio",
    "href": "/discover/gaming/"
  },
  {
    "id": "consumer",
    "title": "Consumer & Lifestyle",
    "description": "Human-centered products and social experiences",
    "roles": [
      "creative",
      "founder",
      "engineer"
    ],
    "keywords": "consumer social dating lifestyle mobile education",
    "accent": "#b8a8de",
    "layout": "editorial",
    "href": "/discover/consumer/"
  },
  {
    "id": "companies",
    "title": "Autonomous Companies",
    "description": "Business operations and human–AI collaboration",
    "roles": [
      "operator",
      "engineer",
      "founder"
    ],
    "keywords": "company OS automation workforce autonomous agents",
    "accent": "#90b4d6",
    "layout": "studio",
    "href": "/discover/companies/"
  },
  {
    "id": "luxury",
    "title": "Luxury & Private Markets",
    "description": "Provenance, exceptional service and rare assets",
    "roles": [
      "capital",
      "operator",
      "creative"
    ],
    "keywords": "luxury fine art private clients collectibles wealth",
    "accent": "#d7ba8f",
    "layout": "editorial",
    "href": "/discover/luxury/"
  },
  {
    "id": "physical",
    "title": "Real Estate & Industries",
    "description": "Property, construction and industrial workflows",
    "roles": [
      "operator",
      "engineer"
    ],
    "keywords": "construction real estate proptech architecture industrial",
    "accent": "#e1b45f",
    "layout": "field",
    "href": "/discover/physical/"
  },
  {
    "id": "commerce",
    "title": "E-Commerce & Marketplaces",
    "description": "Merchants, distribution and marketplace design",
    "roles": [
      "operator",
      "founder",
      "creative"
    ],
    "keywords": "retail ecommerce gifting marketplaces affiliates",
    "accent": "#d9a18c",
    "layout": "field",
    "href": "/discover/commerce/"
  },
  {
    "id": "growth",
    "title": "Sales, Growth & Partnerships",
    "description": "Relationships, distribution and revenue operations",
    "roles": [
      "operator",
      "founder"
    ],
    "keywords": "CRM sales growth marketing business development",
    "accent": "#84c9ac",
    "layout": "field",
    "href": "/discover/growth/"
  },
  {
    "id": "community",
    "title": "Community Economy",
    "description": "Creator networks and meaningful participation",
    "roles": [
      "creative",
      "research",
      "founder"
    ],
    "keywords": "community creator contributors participation",
    "accent": "#b4b6f5",
    "layout": "editorial",
    "href": "/discover/community/"
  },
  {
    "id": "research",
    "title": "Research & Innovation",
    "description": "Experimental ideas and reproducible exploration",
    "roles": [
      "research",
      "engineer",
      "creative"
    ],
    "keywords": "research experiments innovation evidence",
    "accent": "#9da3e8",
    "layout": "editorial",
    "href": "/discover/research/"
  }
]);
const visuals={"web3":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#678dff\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#678dff\" stroke-width=\"1.2\" stroke-opacity=\".75\"><path d=\"M40 280v45m-5 -20h10\"/><path d=\"M87 246v79m-5 -20h10\"/><path d=\"M134 212v113m-5 -20h10\"/><path d=\"M181 178v147m-5 -20h10\"/><path d=\"M228 280v45m-5 -20h10\"/><path d=\"M275 246v79m-5 -20h10\"/><path d=\"M322 212v113m-5 -20h10\"/><path d=\"M369 178v147m-5 -20h10\"/><path d=\"M416 280v45m-5 -20h10\"/><path d=\"M463 246v79m-5 -20h10\"/><path d=\"M510 212v113m-5 -20h10\"/><path stroke-width=\"3\" d=\"M20 280L95 232 150 258 217 171 276 196 347 106 413 139 520 53\"/><circle cx=\"347\" cy=\"106\" r=\"5\"/></g></svg>","ai":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#43d3df\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#43d3df\" stroke-width=\"1.2\" stroke-opacity=\".75\"><rect x=\"45\" y=\"60\" width=\"72\" height=\"54\" rx=\"7\"/><path d=\"M80 114v65\"/><rect x=\"145\" y=\"154\" width=\"72\" height=\"54\" rx=\"7\"/><path d=\"M180 208v65\"/><rect x=\"245\" y=\"60\" width=\"72\" height=\"54\" rx=\"7\"/><path d=\"M280 114v65\"/><rect x=\"345\" y=\"154\" width=\"72\" height=\"54\" rx=\"7\"/><path d=\"M380 208v65\"/><rect x=\"445\" y=\"60\" width=\"72\" height=\"54\" rx=\"7\"/><path d=\"M480 114v65\"/><path d=\"M81 179H481M281 179v104\"/><rect x=\"214\" y=\"283\" width=\"134\" height=\"41\" rx=\"8\"/></g></svg>","startups":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#8da7f7\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#8da7f7\" stroke-width=\"1.2\" stroke-opacity=\".75\"><ellipse cx=\"280\" cy=\"180\" rx=\"20\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"38\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"56\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"74\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"92\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"110\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"128\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"146\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"164\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"182\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"200\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"218\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><circle cx=\"280\" cy=\"180\" r=\"135\"/></g></svg>","capital":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#d6b67f\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#d6b67f\" stroke-width=\"1.2\" stroke-opacity=\".75\"><rect x=\"80\" y=\"40\" width=\"400\" height=\"280\" transform=\"rotate(0 280 180)\"/><rect x=\"98\" y=\"53\" width=\"364\" height=\"254\" transform=\"rotate(3 280 180)\"/><rect x=\"116\" y=\"66\" width=\"328\" height=\"228\" transform=\"rotate(6 280 180)\"/><rect x=\"134\" y=\"79\" width=\"292\" height=\"202\" transform=\"rotate(9 280 180)\"/><rect x=\"152\" y=\"92\" width=\"256\" height=\"176\" transform=\"rotate(12 280 180)\"/><rect x=\"170\" y=\"105\" width=\"220\" height=\"150\" transform=\"rotate(15 280 180)\"/><rect x=\"188\" y=\"118\" width=\"184\" height=\"124\" transform=\"rotate(18 280 180)\"/><rect x=\"206\" y=\"131\" width=\"148\" height=\"98\" transform=\"rotate(21 280 180)\"/></g></svg>","trade":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#6aa6d8\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#6aa6d8\" stroke-width=\"1.2\" stroke-opacity=\".75\"><path d=\"M40 35v290M25 50h510\" opacity=\".28\"/><path d=\"M105 35v290M25 88h510\" opacity=\".28\"/><path d=\"M170 35v290M25 126h510\" opacity=\".28\"/><path d=\"M235 35v290M25 164h510\" opacity=\".28\"/><path d=\"M300 35v290M25 202h510\" opacity=\".28\"/><path d=\"M365 35v290M25 240h510\" opacity=\".28\"/><path d=\"M430 35v290M25 278h510\" opacity=\".28\"/><path d=\"M495 35v290M25 316h510\" opacity=\".28\"/><path stroke-width=\"3\" d=\"M70 260L150 130 270 210 380 82 490 170\"/><circle cx=\"70\" cy=\"260\" r=\"8\"/><circle cx=\"150\" cy=\"130\" r=\"8\"/><circle cx=\"270\" cy=\"210\" r=\"8\"/><circle cx=\"380\" cy=\"82\" r=\"8\"/><circle cx=\"490\" cy=\"170\" r=\"8\"/></g></svg>","fintech":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#60caa5\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#60caa5\" stroke-width=\"1.2\" stroke-opacity=\".75\"><path d=\"M40 280v45m-5 -20h10\"/><path d=\"M87 246v79m-5 -20h10\"/><path d=\"M134 212v113m-5 -20h10\"/><path d=\"M181 178v147m-5 -20h10\"/><path d=\"M228 280v45m-5 -20h10\"/><path d=\"M275 246v79m-5 -20h10\"/><path d=\"M322 212v113m-5 -20h10\"/><path d=\"M369 178v147m-5 -20h10\"/><path d=\"M416 280v45m-5 -20h10\"/><path d=\"M463 246v79m-5 -20h10\"/><path d=\"M510 212v113m-5 -20h10\"/><path stroke-width=\"3\" d=\"M20 280L95 232 150 258 217 171 276 196 347 106 413 139 520 53\"/><circle cx=\"347\" cy=\"106\" r=\"5\"/></g></svg>","local":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#d69a7e\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#d69a7e\" stroke-width=\"1.2\" stroke-opacity=\".75\"><path d=\"M40 35v290M25 50h510\" opacity=\".28\"/><path d=\"M105 35v290M25 88h510\" opacity=\".28\"/><path d=\"M170 35v290M25 126h510\" opacity=\".28\"/><path d=\"M235 35v290M25 164h510\" opacity=\".28\"/><path d=\"M300 35v290M25 202h510\" opacity=\".28\"/><path d=\"M365 35v290M25 240h510\" opacity=\".28\"/><path d=\"M430 35v290M25 278h510\" opacity=\".28\"/><path d=\"M495 35v290M25 316h510\" opacity=\".28\"/><path stroke-width=\"3\" d=\"M70 260L150 130 270 210 380 82 490 170\"/><circle cx=\"70\" cy=\"260\" r=\"8\"/><circle cx=\"150\" cy=\"130\" r=\"8\"/><circle cx=\"270\" cy=\"210\" r=\"8\"/><circle cx=\"380\" cy=\"82\" r=\"8\"/><circle cx=\"490\" cy=\"170\" r=\"8\"/></g></svg>","gaming":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#ff8d82\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#ff8d82\" stroke-width=\"1.2\" stroke-opacity=\".75\"><path d=\"M0 360L280 80M0 165h560\" opacity=\".55\"/><path d=\"M70 360L280 80M0 189h560\" opacity=\".55\"/><path d=\"M140 360L280 80M0 213h560\" opacity=\".55\"/><path d=\"M210 360L280 80M0 237h560\" opacity=\".55\"/><path d=\"M280 360L280 80M0 261h560\" opacity=\".55\"/><path d=\"M350 360L280 80M0 285h560\" opacity=\".55\"/><path d=\"M420 360L280 80M0 309h560\" opacity=\".55\"/><path d=\"M490 360L280 80M0 333h560\" opacity=\".55\"/><path d=\"M560 360L280 80M0 357h560\" opacity=\".55\"/><path d=\"M177 115l103-67 103 67-103 69zM177 115v96l103 69 103-69v-96M280 184v96\" stroke-width=\"2\"/></g></svg>","consumer":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#b8a8de\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#b8a8de\" stroke-width=\"1.2\" stroke-opacity=\".75\"><circle cx=\"405\" cy=\"180\" r=\"27\"/><path d=\"M280 180L405 180\"/><circle cx=\"342.5\" cy=\"276.9948452238571\" r=\"27\"/><path d=\"M280 180L342.5 276.9948452238571\"/><circle cx=\"217.50000000000003\" cy=\"276.99484522385717\" r=\"27\"/><path d=\"M280 180L217.50000000000003 276.99484522385717\"/><circle cx=\"155\" cy=\"180\" r=\"27\"/><path d=\"M280 180L155 180\"/><circle cx=\"217.49999999999994\" cy=\"83.0051547761429\" r=\"27\"/><path d=\"M280 180L217.49999999999994 83.0051547761429\"/><circle cx=\"342.5\" cy=\"83.00515477614287\" r=\"27\"/><path d=\"M280 180L342.5 83.00515477614287\"/><circle cx=\"280\" cy=\"180\" r=\"44\" stroke-width=\"2\"/></g></svg>","companies":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#90b4d6\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#90b4d6\" stroke-width=\"1.2\" stroke-opacity=\".75\"><rect x=\"45\" y=\"60\" width=\"72\" height=\"54\" rx=\"7\"/><path d=\"M80 114v65\"/><rect x=\"145\" y=\"154\" width=\"72\" height=\"54\" rx=\"7\"/><path d=\"M180 208v65\"/><rect x=\"245\" y=\"60\" width=\"72\" height=\"54\" rx=\"7\"/><path d=\"M280 114v65\"/><rect x=\"345\" y=\"154\" width=\"72\" height=\"54\" rx=\"7\"/><path d=\"M380 208v65\"/><rect x=\"445\" y=\"60\" width=\"72\" height=\"54\" rx=\"7\"/><path d=\"M480 114v65\"/><path d=\"M81 179H481M281 179v104\"/><rect x=\"214\" y=\"283\" width=\"134\" height=\"41\" rx=\"8\"/></g></svg>","luxury":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#d7ba8f\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#d7ba8f\" stroke-width=\"1.2\" stroke-opacity=\".75\"><rect x=\"80\" y=\"40\" width=\"400\" height=\"280\" transform=\"rotate(0 280 180)\"/><rect x=\"98\" y=\"53\" width=\"364\" height=\"254\" transform=\"rotate(3 280 180)\"/><rect x=\"116\" y=\"66\" width=\"328\" height=\"228\" transform=\"rotate(6 280 180)\"/><rect x=\"134\" y=\"79\" width=\"292\" height=\"202\" transform=\"rotate(9 280 180)\"/><rect x=\"152\" y=\"92\" width=\"256\" height=\"176\" transform=\"rotate(12 280 180)\"/><rect x=\"170\" y=\"105\" width=\"220\" height=\"150\" transform=\"rotate(15 280 180)\"/><rect x=\"188\" y=\"118\" width=\"184\" height=\"124\" transform=\"rotate(18 280 180)\"/><rect x=\"206\" y=\"131\" width=\"148\" height=\"98\" transform=\"rotate(21 280 180)\"/></g></svg>","physical":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#e1b45f\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#e1b45f\" stroke-width=\"1.2\" stroke-opacity=\".75\"><path d=\"M40 35v290M25 50h510\" opacity=\".28\"/><path d=\"M105 35v290M25 88h510\" opacity=\".28\"/><path d=\"M170 35v290M25 126h510\" opacity=\".28\"/><path d=\"M235 35v290M25 164h510\" opacity=\".28\"/><path d=\"M300 35v290M25 202h510\" opacity=\".28\"/><path d=\"M365 35v290M25 240h510\" opacity=\".28\"/><path d=\"M430 35v290M25 278h510\" opacity=\".28\"/><path d=\"M495 35v290M25 316h510\" opacity=\".28\"/><path stroke-width=\"3\" d=\"M70 260L150 130 270 210 380 82 490 170\"/><circle cx=\"70\" cy=\"260\" r=\"8\"/><circle cx=\"150\" cy=\"130\" r=\"8\"/><circle cx=\"270\" cy=\"210\" r=\"8\"/><circle cx=\"380\" cy=\"82\" r=\"8\"/><circle cx=\"490\" cy=\"170\" r=\"8\"/></g></svg>","commerce":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#d9a18c\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#d9a18c\" stroke-width=\"1.2\" stroke-opacity=\".75\"><path d=\"M40 35v290M25 50h510\" opacity=\".28\"/><path d=\"M105 35v290M25 88h510\" opacity=\".28\"/><path d=\"M170 35v290M25 126h510\" opacity=\".28\"/><path d=\"M235 35v290M25 164h510\" opacity=\".28\"/><path d=\"M300 35v290M25 202h510\" opacity=\".28\"/><path d=\"M365 35v290M25 240h510\" opacity=\".28\"/><path d=\"M430 35v290M25 278h510\" opacity=\".28\"/><path d=\"M495 35v290M25 316h510\" opacity=\".28\"/><path stroke-width=\"3\" d=\"M70 260L150 130 270 210 380 82 490 170\"/><circle cx=\"70\" cy=\"260\" r=\"8\"/><circle cx=\"150\" cy=\"130\" r=\"8\"/><circle cx=\"270\" cy=\"210\" r=\"8\"/><circle cx=\"380\" cy=\"82\" r=\"8\"/><circle cx=\"490\" cy=\"170\" r=\"8\"/></g></svg>","growth":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#84c9ac\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#84c9ac\" stroke-width=\"1.2\" stroke-opacity=\".75\"><path d=\"M40 35v290M25 50h510\" opacity=\".28\"/><path d=\"M105 35v290M25 88h510\" opacity=\".28\"/><path d=\"M170 35v290M25 126h510\" opacity=\".28\"/><path d=\"M235 35v290M25 164h510\" opacity=\".28\"/><path d=\"M300 35v290M25 202h510\" opacity=\".28\"/><path d=\"M365 35v290M25 240h510\" opacity=\".28\"/><path d=\"M430 35v290M25 278h510\" opacity=\".28\"/><path d=\"M495 35v290M25 316h510\" opacity=\".28\"/><path stroke-width=\"3\" d=\"M70 260L150 130 270 210 380 82 490 170\"/><circle cx=\"70\" cy=\"260\" r=\"8\"/><circle cx=\"150\" cy=\"130\" r=\"8\"/><circle cx=\"270\" cy=\"210\" r=\"8\"/><circle cx=\"380\" cy=\"82\" r=\"8\"/><circle cx=\"490\" cy=\"170\" r=\"8\"/></g></svg>","community":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#b4b6f5\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#b4b6f5\" stroke-width=\"1.2\" stroke-opacity=\".75\"><circle cx=\"405\" cy=\"180\" r=\"27\"/><path d=\"M280 180L405 180\"/><circle cx=\"342.5\" cy=\"276.9948452238571\" r=\"27\"/><path d=\"M280 180L342.5 276.9948452238571\"/><circle cx=\"217.50000000000003\" cy=\"276.99484522385717\" r=\"27\"/><path d=\"M280 180L217.50000000000003 276.99484522385717\"/><circle cx=\"155\" cy=\"180\" r=\"27\"/><path d=\"M280 180L155 180\"/><circle cx=\"217.49999999999994\" cy=\"83.0051547761429\" r=\"27\"/><path d=\"M280 180L217.49999999999994 83.0051547761429\"/><circle cx=\"342.5\" cy=\"83.00515477614287\" r=\"27\"/><path d=\"M280 180L342.5 83.00515477614287\"/><circle cx=\"280\" cy=\"180\" r=\"44\" stroke-width=\"2\"/></g></svg>","research":"<svg viewBox=\"0 0 560 360\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><rect width=\"560\" height=\"360\" fill=\"#101827\"/><g stroke=\"#9da3e8\" stroke-opacity=\".1\" stroke-width=\".6\"><path d=\"M0 0v360\"/><path d=\"M40 0v360\"/><path d=\"M80 0v360\"/><path d=\"M120 0v360\"/><path d=\"M160 0v360\"/><path d=\"M200 0v360\"/><path d=\"M240 0v360\"/><path d=\"M280 0v360\"/><path d=\"M320 0v360\"/><path d=\"M360 0v360\"/><path d=\"M400 0v360\"/><path d=\"M440 0v360\"/><path d=\"M480 0v360\"/><path d=\"M520 0v360\"/><path d=\"M560 0v360\"/><path d=\"M0 0h560\"/><path d=\"M0 40h560\"/><path d=\"M0 80h560\"/><path d=\"M0 120h560\"/><path d=\"M0 160h560\"/><path d=\"M0 200h560\"/><path d=\"M0 240h560\"/><path d=\"M0 280h560\"/><path d=\"M0 320h560\"/><path d=\"M0 360h560\"/></g><g fill=\"none\" stroke=\"#9da3e8\" stroke-width=\"1.2\" stroke-opacity=\".75\"><ellipse cx=\"280\" cy=\"180\" rx=\"20\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"38\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"56\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"74\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"92\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"110\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"128\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"146\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"164\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"182\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"200\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><ellipse cx=\"280\" cy=\"180\" rx=\"218\" ry=\"135\" transform=\"rotate(-28 280 180)\"/><circle cx=\"280\" cy=\"180\" r=\"135\"/></g></svg>"};
export const discoveryIndex=[...territories,{id:'markets',title:'Digital market research',description:'Public financial research collection',roles:['capital','engineer','research'],keywords:'market data SignalForge crypto',href:'/discover/markets/'},{id:'engineering',title:'Engineering note',description:'A public technical note',roles:['engineer','research'],keywords:'software architecture evidence',href:'/engineering/'}];
export function enhancePage(html,id){if(html.includes('gateway-v5.css'))return html;const item=territories.find(t=>t.id===id);const index=JSON.stringify(discoveryIndex).replaceAll('<','\\u003c');const title=id==='home'?'SINA Gateway — Ideas, work and people':(item?.title||({markets:'Digital market research',engineering:'Engineering note'}[id]||'Selected work'))+' | SINA Gateway';const img='https://sina-venture-gateway.vercel.app/assets/social/'+(item?id:id==='home'?'home':id==='markets'?'fintech':'research')+'.png';html=html.replace('</head>','<link rel="stylesheet" href="/assets/gateway-v5.css"><meta property="og:image" content="'+img+'"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image">'+(!html.includes('name="theme-color"')?'<meta name="theme-color" content="#F8F9FB">':'')+'</head>');html=html.replace(/<body([^>]*)>/,'<body$1 class="'+(id==='home'?'gateway-home':'gateway-world')+'" data-layout="'+(item?.layout||'editorial')+'" data-territory="'+e(id)+'">');if(!html.includes('aria-label="Main navigation"')&& !html.includes('<nav'))html=html.replace('<header>','<header class="gateway-shell"><nav class="wrap">').replace('</header>','</nav></header>');html=html.replace('</body>','<script type="application/json" id="gateway-discovery-index">'+index+'</script><script defer src="/assets/gateway-v5.js"></script></body>');return html}
export function worldVisual(d){const item=territories.find(t=>t.id===d.id);if(!item)return '';return '<div class="world-side"><div class="world-art" aria-label="Original conceptual illustration, not a product screenshot" role="img">'+visuals[d.id]+'<div class="world-caption">SINA / DISCOVERY</div><div class="world-name">'+e(item.title)+'</div></div></div>'}
export function writeSocialSvg(dir){fs.mkdirSync(dir,{recursive:true});for(const d of [{id:'home',title:'Ideas, work and people',description:'Explore the worlds that interest you',accent:'#91adff'},...territories]){const words=d.title.split(' ');const lines=[];let line='';for(const w of words){if((line+' '+w).trim().length>23&&line){lines.push(line);line=w}else line=(line+' '+w).trim()}if(line)lines.push(line);const content=lines.map((l,i)=>'<text x="65" y="'+(225+i*72)+'" fill="#f3f5f8" font-size="61" font-family="DejaVu Sans, sans-serif" font-weight="600">'+e(l)+'</text>').join('');const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#101827"/><rect x="48" y="48" width="1104" height="534" rx="20" fill="none" stroke="#33425a"/><g stroke="'+d.accent+'" fill="none" stroke-opacity=".55">'+Array.from({length:12},(_,i)=>'<ellipse cx="935" cy="315" rx="'+(16+i*14)+'" ry="210" transform="rotate(-28 935 315)"/>').join('')+'</g><text x="65" y="116" fill="'+d.accent+'" font-size="22" font-family="DejaVu Sans, sans-serif" letter-spacing="5">SINA / GATEWAY</text>'+content+'<text x="65" y="550" fill="#b8c3d1" font-family="DejaVu Sans, sans-serif" font-size="24">DISCOVERY · VANCOUVER, CANADA</text></svg>';fs.writeFileSync(dir+'/'+d.id+'.svg',svg)}}
