# Risk Management — Component & Content Spec
## lrooney.com/clinical-risk-based-monitoring

This document maps every section of the current Wix page into components and media placeholders for the Netlify rebuild. Use it as the build brief.

---

## Notes Before You Build

This page covers two products in one: Risk Management (RACT redesign) and RTSM (Randomisation Trial Supply Management). It's structured more like a narrative arc than a showcase — near-cancellation to rescue to pivot — which means the writing carries more weight than the visuals. There are fewer GIFs than the Qflow pages but more multi-image clusters.

One significant interactive element: the hover-audio thumbnail in the Ideas section (same `<HoverAudio>` component as the Qflow air quality page). Everything else is static images and text.

The `Librem 13Sml.png` laptop frame reappears here (same file as the Qflow notifications page) — used once at the top. Same note applies: consider replacing with a CSS device frame for consistency.

Several image slots in the Wix layout rendered as empty SVG placeholders (`xml version="1.0"`) rather than actual images — these are noted below. They represent content that either wasn't visible to the scraper (likely NDA-protected screens behind a hover/lightbox) or is missing from the Wix layout. Flagged in open questions.

---

## Page Sections (in order)

---

### 1. HERO IMAGE

**Type:** Full-width image
**Current dimensions:** 980×245px
**Placeholder:** `[IMAGE: risk-mgmt-hero.jpg — 980×245px]`
**Notes:** Same hero image as the EDC case study (`d0fd9709...` Wix fragment). Confirm with Lesley whether this is intentional (shared banner) or whether Risk Management should have its own hero image.

---

### 2. COMPANY CONTEXT

**Type:** Body text
**Heading:** First, about the company?

**Content:**
> Medidata, founded in 1999 and now part of Dassault Systèmes, is a global technology company providing end-to-end B2B SaaS solutions for clinical trials within the life sciences industry. Their platform helps pharmaceutical, biotech, and contracts research organisations (CROs) modernise the discovery process by improving workflows, reducing errors, and accelerating the development of new therapies.

---

### 3. PAGE TITLE

**Type:** H1
**Content:** Risk Management: From Near-Cancellation to Strategic Vision

---

### 4. LAPTOP FRAME + PRODUCT SCREENSHOT

**Type:** Laptop frame image + UI screenshot

**Placeholder (laptop frame):** `[IMAGE: librem-laptop-frame.png — 1266×708px, same Librem 13Sml.png file used across Qflow pages]`
**Notes:** Largest instance of the laptop frame across all four case studies (1266×708). Use the same exported file, let CSS size it.

**Placeholder (UI screenshot):** `[IMAGE: risk-mgmt-product-screen.jpg — 863×485px, Risk Management UI]`

**SVG placeholder below (likely NDA-protected or missing content):**
`[PLACEHOLDER: unknown content — rendered as empty SVG in Wix scrape]`

**Caption below:**
> Below: A short-term vision concept with an updated design system and branding, 2021

---

### 5. THE STAKES AND BUSINESS CHALLENGES

**Type:** Body text
**Heading:** The Stakes and Business Challenges

**Content:**
> After years of development and millions in investment, Medidata's RACT (Risk Assessment Categorisation Tool) had only one mid-market customer and was nearing cancellation. Its convoluted, fragmented workflows led prospects to dismiss it in sales demos, believing Excel or SharePoint easily met their needs.

---

### 6. TEAM & LOCATION

**Type:** Text block
**Heading:** Team & Location

- 1 Product Director 🇺🇸
- 1 Business Analyst 🇮🇳
- 1 Product Owner 🇬🇧
- 1 Project Manager 🇮🇳
- 7 Engineers 🇮🇳
- 1 Engineering Director 🇬🇧
- 1 Product Designer (me) 🇬🇧

---

### 7. THE APPLICATION AND POTENTIAL VALUE

**Type:** Body text
**Heading:** The Application and Potential Value

**Content:**
> Renamed Risk Management and reimagined as a cloud-based project-management tool, it gives Clinical Operations Teams (Study Leads, CRAs, and Data Managers) 👩🏽‍⚕️🧑🏻‍⚕️👨🏻‍⚕️👩🏾‍⚕️ a faster way to collaborate, log mitigation steps (backup plans), and make critical go/no-go calls. Reducing work that used to take hours looking at multiple documents or spreadsheets, to minutes.
>
> It brings together key risk indicators (KRIs) and Quality Tolerance Limits (QTLs). Think Brad Pitt's Moneyball about statistical data 🎬🧢⚾️, but applied to a clinical trial. The system uses historical patient, site, and timeline data as statistical inputs to generate clear probabilities of potential issues before they become serious. For example, based on past trials, Site 🏥 [X] may have a 75% likelihood of dropping out early because patient data-entry pace is predicted to slow week over week. If this happens, what can we do?

---

### 8. MY RESPONSIBILITIES

**Type:** Tag/bullet list
**Heading:** My Responsibilities

- Design + research
- Learning domain knowledge
- Stakeholder management
- Alignment with engineering
- Introducing new interactive patterns to emerging design systems

---

### 9. PROJECT DURATION

**Type:** Text
**Content:** ~7 months

---

### 10. TOOLS

**Type:** Icon row
**Component needed:** `<IconRow>`

Tools:
- Pen & paper
- Figma
- Axure
- Confluence
- Zoom
- Pendo
- Slack

**Placeholders:** `[ICON: figma.svg]` `[ICON: axure.svg]` `[ICON: confluence.svg]` etc.
**Notes:** Smallest tool set across all four case studies. Notably includes Axure (for advanced high-fidelity prototypes) alongside Figma — both are called out in the copy as a deliberate "Figma specs, Axure interactions" workflow split.

---

### 11. THE OUTCOME

**Type:** Bullet list
**Heading:** The Outcome

- Launched in early 2021, Risk Management successfully absorbed RACT functionality while integrating with other apps and scaling for enterprise adoption.
- I designed a unified modal that saved users hours to find and reference information and reduced system engineering maintenance. The pattern was adopted into Medidata's design system.
- Lowered demo rejection rates and increased leads. Prevented product discontinuation and enabled strategic repositioning that unified data, risk, and quality management for Clinical Data Studio.

---

### 12. MY PROJECT CHALLENGES

**Type:** Bullet list
**Heading:** My Project Challenges

- I inherited a project already behind schedule from an overstretched US-based lead designer.
- Needed to get up to speed on the domain and clinical trials to make solid design calls.
- Globally distributed team in Mumbai, London, New York and San Francisco.
- Fragmented, siloed customer data (sales, customer success & interviews) across the organisation.
- Coordinating with the Detect team on roadmap alignment and integration while managing complex stakeholder dynamics, including Risk Management and frequent late-stage changes.
- Evolving design system & overall company-wide design goals mid-production to improve aesthetics.

---

### 13. THE GOALS

**Type:** Bullet list
**Heading:** The Goals — What Were the Overall Product Objectives?

- Deliver a modern, integrated replacement for the outdated RACT tool within 7 months (including development), enabling growth in Risk-Based Quality Management and moving users beyond Excel.
- Provide a unified view of risk data, eliminating the need to navigate across multiple pages.
- Expand Medidata's design system with reusable components tailored to new product needs, ensuring alignment with other applications and strengthening integration opportunities.

**Caption below:**
> Below: Risk list displaying the difference between the old and new design system. RM's predictive tools visually lacked a clear hierarchy and added unnecessary cognitive load.

**SVG placeholder (likely before/after comparison image):**
`[PLACEHOLDER: risk-list-old-vs-new — before/after design system comparison, rendered as empty SVG in Wix scrape — confirm asset with Lesley]`

---

### 14. DESIGNING THROUGH THE FOG

**Type:** Body text (structured subsections) + image + hover audio
**Heading:** Designing Through The Fog — From Confusion to Confidence and Selected UX Practices to Catch Up

**Content:**

**Building Domain Knowledge**
- Domain immersion — Attended TransCelerate conferences and binge-watched Dan Sfera's YouTube channel for plain English clinical trial explanations. Intense 😳, paused Netflix weekends for a bit 📺
- Researched how competitors and regulatory bodies communicated clinical risk management in layman's terms to grasp core concepts. Understanding the concepts clarified how other products like Google Calendar and Shopify structured items, defined their attributes and relationships, and applied design patterns.
- Internal archaeology — Dug into historical design decisions with lead designers, who also drew on their expertise for targeted feedback on my design concepts.
- Listening tour — Extracted insights from subject matter experts, stakeholders, other designers, sales calls, and client training sessions.

**Building Trust & Alignment**
- Show-don't-tell prototypes — Used interactive prototypes to amplify the design's voice in a PM-led org, enabling stakeholders to champion ideas in rooms I wasn't in.
- Simplify complexity — As an outsider, I turned acronym-heavy jargon into reference docs. My honest "newbie" questions helped BAs and engineers too.
- Present options — Showed multiple solutions with pros/cons to spark informed discussion and surface hidden constraints.

**Execution & Delivery**
- Collaborative iteration — Led mini workshops and Slack threads, sneaking stronger UX validation into a 'just ship it' culture.
- Balanced pragmatism — Drove implementation, a design-to-code partnership with the Indian engineering team through pre-grooming, 1-on-1s, lean prototypes, and strategic tooling. Adopted Axure for advanced high-fidelity prototypes (Figma specs, Axure interactions).

**Closing paragraph:**
> Triangulated insights from subject matter experts, desk research, job postings, YouTube content, and the Product Director — focusing on trade-offs, user personas, and strategies to achieve key goals.

**Placeholder:** `[IMAGE: research-triangulation.jpg — 977×720px, research notes, whiteboard, or insight synthesis]`

**SVG placeholder (likely a diagram or additional research image):**
`[PLACEHOLDER: unknown content — rendered as empty SVG in Wix scrape]`

---

### 15. THE IDEAS — INTERVIEWS AND DESIGN IDEAS

**Type:** Image + hover audio interaction
**Heading:** The Ideas — Interviews, Design Ideas

**Placeholder:** `[IMAGE: interviews-design-ideas.jpg — 979×717px, interview notes or design exploration]`

**Component needed:** `<HoverAudio>`
**Caption:**
> 🔉 Below: Hover over the image for activity snippets. This informed design spikes that de-risked features via mini workshops, design reviews, prototypes, and SME feedback, evaluating new UI patterns.

**Placeholder:** `[IMAGE + AUDIO: activity-snippets-thumb — hover plays audio snippets of design activity/research sessions]`

**Two SVG placeholders below (likely NDA-protected screens or missing assets):**
`[PLACEHOLDER: unknown content ×2 — rendered as empty SVGs in Wix scrape — confirm assets with Lesley]`

---

### 16. THE SOLUTIONS — RISK LIST & TABLE DESIGN

**Type:** Body text + images
**Heading:** The Solutions — The Rationale Behind Some Selected Designs

**Content:**
> The first release prioritised a data table over visualisations due to limited front-end resources. The design intention was to offer a clear view of all risks — across categories — allowing users to compare status (from open, closed to deferred), trace origin (e.g., medical dispensation or tumour assessment), so users could work toward closing them out from an easily understood view. All without leaving the risk listing page. Each risk included contextual details such as descriptions, links to any attached Quality Tolerance Limits (QTLs) and Key Risk Indicators (KRIs) for that risk. Due to technical limitations, support for column rearrangement and resizing was not possible. The hover states revealed extra content, so I had several calls with the product director — formerly a risk manager — to figure out how to rearrange the grid so that the most important information appeared first, moving left to right.
>
> Original pattern had two hover points — risk details and truncated content. I recommended merging them to improve scannability and reduce friction, then added an info icon so users wouldn't miss hidden content.

**Placeholder:** `[IMAGE: risk-list-hover-pattern.jpg — 632×450px, risk list hover state design]`

**Three SVG placeholders (likely before/after screens or additional UI details):**
`[PLACEHOLDER: unknown content ×3 — rendered as empty SVGs in Wix scrape — confirm assets with Lesley]`

**Caption below:**
> Below: I replaced the slide-up UI with a full-page modal after testing showed it appeared abruptly, obscured grid content, and couldn't auto-focus the correct row. Despite initial pushback to reuse the existing pattern, the change gained support. Interviews revealed users didn't reference other risks while entering questions, ensuring the modal didn't disrupt flow. Since risks were referenced by name for easier recall, not number, I de-emphasised numbers and highlighted names as deep links to detailed views. Easily accessed by one click.

**Placeholder:** `[IMAGE: modal-design.jpg — 978×542px, full-page modal design replacing slide-up UI]`

**Three more SVG placeholders:**
`[PLACEHOLDER: unknown content ×3 — rendered as empty SVGs in Wix scrape — confirm assets with Lesley]`

**Placeholder:** `[IMAGE: qtl-kri-modal.jpg — 980×551px, Quality Tolerance Limits and KRIs in modal context]`

**SVG placeholder:**
`[PLACEHOLDER: unknown content — rendered as empty SVG in Wix scrape]`

**Caption below:**
> Below: Giving users the ability to see multiple Quality Tolerance Limits — very data-dense information — attached to a single risk. These read-only statistical metrics, sourced from Detect, helped users to review while entering or editing risk mitigation strategy in context without overwhelming the interface.
>
> Clinical staff checked risks often but rarely edited them — changes typically followed major meetings. I recommended skipping inline grid editing to keep scope tight and hit the release deadline. Instead, a modal handled edits with smooth transitions and consolidated related content (risks and metrics) in one place.

---

### 17. WHAT CAME NEXT — RTSM

**Type:** Body text + images
**Heading:** What Came Next and the Move to RTSM — Betting on Randomisation Trial Supply Management (Drug Supply)

**Content:**
> During the 2021 restructure, certain products were put on hold, but I stayed thanks to my credibility with the RM Product Director. Instead of playing it safe, I volunteered to lead design on RTSM, Medidata's toughest and second-largest product. It had a reputation for being notoriously difficult for designers due to a lack of design maturity and front-end support, which made achieving good design challenging.
>
> I started by really listening to all stakeholders, including developers. My advanced prototyping skills earned credibility, giving me genuine access to users, sales report calls and proper conversations with engineers. I uncovered key lessons from the 2017 redesign — both its successes and its organisational and technical failures. For example, while the design system modernised the UI, it couldn't scale to the product's complexity, and after launch, engineers were left with an incomplete solution. Understanding that breakdown shaped my approach to the Rave EDC redesign when I joined the team.
>
> Surprisingly, the design below became one of the fastest-adopted features. It lets users control email alerts for drug supplies. I found that consultants, often on client calls or multitasking, preferred configuring all alerts at once while referencing others. After testing several concepts, I landed on a dense checkbox map. Technically, it could be considered cluttered and error-prone, but it offered a clear overview of defaults or non-recommended alerts. Later, I highlighted changes and included a simple save button, moving away from autosave so people could easily see what they had done. It taught me a key lesson: knowing when to break best-practice rules matters more than following them.

**Placeholder:** `[IMAGE: rtsm-email-alerts.jpg — 898×526px, RTSM email alerts checkbox configuration]`

**SVG placeholder:**
`[PLACEHOLDER: unknown content — rendered as empty SVG in Wix scrape]`

**Caption below:**
> Below: Different ways to simplify the product to its core essentials for better understanding.

**Placeholder:** `[IMAGE: rtsm-simplification.webp — 976×641px, product simplification concepts/sketches]`

---

### 18. SELLING THE DESIGN SYSTEM (THAT DIDN'T STICK)

**Type:** Body text + images
**Heading:** Selling the Design System (That Didn't Stick)

**Content:**
> My partnership and influence weakened after RTSM Product Director left; product priorities realigned toward immediate sales wins, which began to erode support for our long-term design system vision. To address this challenge, I synthesised stakeholder concerns and strategic perspectives into a framing canvas that articulated both the new leadership's priorities and the business case for systemic design. It was a way to debrief my Design Director as he advocated for adoption during our weekly stakeholder calls with selected leaders within the team. Eventually, I transitioned to RAVE EDC.

**Placeholder:** `[IMAGE: rtsm-framing-canvas-1.webp — 981×640px, design system framing canvas]`
**Notes:** Original filename `RTSM_DS_FramingCanvas.webp`

**Placeholder:** `[IMAGE: rtsm-framing-canvas-2.webp — 721×497px, design system framing canvas detail]`
**Notes:** Original filename `RTSM_DS_FramingCanvas2.webp`

---

### 19. FOOTER — OTHER CASE STUDIES PEEK GRID

**Type:** Hover-reveal thumbnail grid
**Heading:** You can hover to take a sneak peek 👀 or use my password on restricted cases.
**Component needed:** `<PeekGrid>` — 9 thumbnails
**Notes:** Same count as the EDC page (9). Some thumbnail images appear shared with EDC footer grid.

**Placeholders:**
- `[IMAGE: peek-thumb-1.jpg — 317×316px]`
- `[IMAGE: peek-thumb-2.jpg — 317×316px]`
- `[IMAGE: peek-thumb-3.png — 316×316px]`
- `[IMAGE: peek-thumb-4.jpg — 317×316px]`
- `[IMAGE: peek-thumb-5.jpg — 317×316px]`
- `[IMAGE: peek-thumb-6.png — 316×316px]`
- `[IMAGE: peek-thumb-7.jpg — 317×316px]`
- `[IMAGE: peek-thumb-8.png — 317×316px]`
- `[IMAGE: peek-thumb-9.jpg — 316×316px]`

---

## Component Summary

| Component | Count | Notes |
|---|---|---|
| `<HoverAudio>` | 1 | Activity snippets (section 15) — same component as Qflow air quality |
| `<IconRow>` | 1 | 7 tool logos (section 10) |
| `<PeekGrid>` | 1 | 9 thumbnails footer (section 19) |
| Laptop frame presentation device | 1 | Librem 13Sml.png at 1266×708 — same file as Qflow notifications |
| Static images | ~10 confirmed | Plus ~10 empty SVG slots (see below) |

**No new component types.** All components appear in earlier specs. Simplest component footprint of the four case studies.

---

## ⚠️ Empty SVG Placeholders — Action Required

This page has significantly more empty SVG slots than any other case study — approximately **10 image positions** rendered as `xml version="1.0" encoding="UTF-8"?` rather than actual images. These are almost certainly NDA-protected design screens that sit behind hover/lightbox interactions on Wix, or assets that weren't loaded by the scraper.

**Locations of missing assets:**

| Section | Count | Likely content |
|---|---|---|
| Section 4 (below laptop frame) | 1 | Vision concept screen |
| Section 13 (risk list old vs new) | 1 | Before/after design system comparison |
| Section 14 (designing through the fog) | 1 | Research diagram or insight synthesis |
| Section 15 (hover audio area) | 2 | Design spike screens or interview artifacts |
| Section 16 (risk list solutions) | 3 | Risk list hover states, additional UI screens |
| Section 16 (modal design area) | 3 | Modal iterations, QTL/KRI screens |
| Section 17 (RTSM) | 1 | RTSM screen or prototype |

**Total: ~12 empty asset slots across the page.**

Before building this page, Lesley needs to confirm which of these are:
- (a) Assets that can be exported from Wix with the correct credentials/hover interaction
- (b) NDA-protected screens that should stay hidden (replace with a blurred placeholder or lock icon)
- (c) Assets that were simply missing/broken in the Wix layout and need to be re-uploaded

---

## Images to Export from Wix

| Filename (suggested) | Wix URL fragment / original name | Dimensions | Type |
|---|---|---|---|
| risk-mgmt-hero.jpg | d0fd9709... (shared with EDC) | 980×245 | jpg |
| librem-laptop-frame.png | Librem 13Sml.png (shared with Qflow) | 1266×708 | png |
| risk-mgmt-product-screen.jpg | d598bbc8... | 863×485 | jpg |
| research-triangulation.jpg | 42d1df93... | 977×720 | jpg |
| interviews-design-ideas.jpg | e66f4a8d... | 979×717 | jpg |
| risk-list-hover-pattern.jpg | 4c279c5f... | 632×450 | jpg |
| modal-design.jpg | 130d8371... | 978×542 | jpg |
| qtl-kri-modal.jpg | 4767a1d4... | 980×551 | jpg |
| rtsm-email-alerts.jpg | 6f1d3238... | 898×526 | jpg |
| rtsm-simplification.webp | ed691bec... | 976×641 | webp |
| rtsm-framing-canvas-1.webp | RTSM_DS_FramingCanvas.webp | 981×640 | webp |
| rtsm-framing-canvas-2.webp | RTSM_DS_FramingCanvas2.webp | 721×497 | webp |

---

## Updated Cross-Case Component Comparison (All 4 Pages)

| Feature | EDC | Qflow Air Quality | Qflow Notifications | Risk Management |
|---|---|---|---|---|
| Carousels | 6 | 1 | 0 | 0 |
| HoverReveal | 4 | 2 | 0 | 0 |
| HoverAudio | 0 | 2 | 0 | 1 |
| Audio player (standalone) | 1 | 0 | 0 | 0 |
| Animated GIFs | ~3 | ~10 | 5 | 0 |
| LightboxGallery/zoom | 0 | 2 | 0 | 0 |
| IconRow | 1 | 1 | 1 | 1 |
| PeekGrid footer | 9 | 11 | 8 | 9 |
| Laptop frame device | 0 | 0 | 4× | 1× |
| Empty SVG slots (NDA?) | 0 | 0 | 0 | ~12 |
| Confirmed static images | 27+ | 12 | 12 | 12 |

---

## Open Questions for Lesley

- [ ] The hero image appears to be the same file as the EDC case study (`d0fd9709...`). Is this intentional, or does Risk Management need its own hero?
- [ ] There are approximately 12 empty SVG image slots on this page. Which of these are: (a) exportable from Wix with the right interaction, (b) NDA screens that should show a blurred/locked placeholder, or (c) broken/missing assets to re-upload?
- [ ] The hover audio in section 15 — same question as Qflow: what file format and where is it hosted?
- [ ] The `Librem 13Sml.png` laptop frame: keep as a presentation device, or replace with a CSS device frame across both this page and Qflow notifications (where it's also used)?
- [ ] The "Rave EDC redesign" internal link in the RTSM section — this should link to `/medidataedcredesign` on the new site. Confirm this is the intended destination.
- [ ] Footer peek grid: this page has 9 thumbnails (matching EDC). Are the same 9 thumbnails used, or a different set?
