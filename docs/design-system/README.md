# SINA Gateway V5 — design system

## Design research (2026-11-27)
Public page content / navigation reviewed; desktop/mobile render audit not completed. These are interpretation and adaptation notes, not claims of visual parity.

| Reference | Transferable principle |
|---|---|
| [Apple](https://www.apple.com) | Product-first hierarchy and prominent media |
| [Linear](https://linear.app) | Concrete work context and purposeful product imagery |
| [Vercel](https://vercel.com) | Structured navigation and developer-oriented destinations |
| [Stripe](https://stripe.com) | Clear product/solution entry points |
| [Raycast](https://raycast.com) | Keyboard shortcuts with ordinary visual discovery |
| [Framer](https://framer.com) | Showcase real work, not ornamental UI |
| [Figma](https://figma.com) | Distinct paths by professional activity |
| [Arc](https://arc.net) | Editorial narrative; current page is a farewell, not the historic product |
| [Are.na](https://www.are.na) | Collections connect ideas and people |
| [Awwwards](https://www.awwwards.com) | Category-driven discovery |
| [Layers](https://layers.to) | Search and explicit topical filters |
| [Product Hunt](https://www.producthunt.com) | New discoveries and clear collection entries |
| [Cosmos](https://www.cosmos.so) | Search and collection exploration |
| [Monocle](https://monocle.com) | Access denied; visual analysis pending |
| Read.cv | Service closed in 2025; historical clean profile direction, archive visual review pending |
| [a16z](https://a16z.com) | Thematic research and recent writing |
| [Sequoia](https://sequoiacap.com) | Founder and company stories |
| [Founders Fund](https://foundersfund.com) | Restrained navigation and thesis-driven content |
| [YC](https://www.ycombinator.com) | Separate founder, company, resource and cofounder routes |
| [General Catalyst](https://www.generalcatalyst.com) | Editorial initiatives and topic coverage |
| [Coinbase](https://www.coinbase.com) | Separate learning, individual and advanced workflows |
| [Phantom](https://phantom.com) | Clear product focus and exploration |
| [GitHub](https://github.com) | Source-oriented credibility |
| [Bloomberg](https://www.bloomberg.com) | Headline hierarchy and market information |
| [Flexport](https://www.flexport.com) | Operational workflows and domain context |
| [Sotheby's](https://www.sothebys.com) | Distinct collection and category discovery |
| [Epic Games](https://store.epicgames.com) | Entertainment discovery |
| [Steam](https://store.steampowered.com) | Browsable collections |
| [Airbnb](https://www.airbnb.com) | Human-scale category search |
| [Hugging Face](https://huggingface.co) | Discover models, spaces and community materials |

## Implementation
- Shared semantic CSS tokens, persisted light/dark/system, 12/8/4-column layout primitives, focus and reduced-motion rules.
- System sans and Georgia serif, native system fonts selected for predictable rendering and zero font requests. Geist/Instrument Serif not yet installed.
- Existing content publication allowlist remains authoritative; no candidate assets are added.
- Original conceptual SVG motifs only: generated in repository, no third-party assets or model-generated product screenshots. No founder photo.
- Build generates PNG previews from authored SVG via pinned Resvg dev dependency. Original source: lib/design-system.mjs. Association: interest territory, not private venture. Crop: 1200x630 social card. Homepage/territory art is decorative with contextual label. Usage: original project artwork; no third-party imagery. Actual product screenshot approval and rights remain required.
- Native dialog, role discovery and keyboard command shortcut. No tracking or external search calls.

## Internal component review
Open docs/design-system/gallery.html from a local checkout using a server rooted at the repository. The gallery is outside public/ and not part of public navigation. This is a starter gallery, not a claim that all components in the mandate are complete.

## Acceptance / evidence
Visual sophistication and composition: inspect real screenshots; typography: check wrapping and sizes; mobile: check 11 specified widths; discovery and interaction: test menus, filters, focus, deep links, clipboard and form; imagery: verify source/permission and representation; performance: collect lab Lighthouse and distinguish field data; accessibility: check keyboard, contrast, screen reader and automated checks; consistency: verify themes across every route. Do not assign 90/100 without actual evidence. No user interviews have been performed.

## Remaining design scope
Real product imagery, original recordings, approved founder photo, full component coverage, all browser/device audit and genuine audience feedback are independent acceptance items. No deployment or audit claim in this file.
