# EDC Case Study — Build Spec
## `lrooney.com/medidataedcredesign` → `medidataedcredesign.html`

This document reflects the **final built state** of the EDC case study page. Use it as the reference when dropping in real images, confirming hover behaviours, or picking up the build in Claude Code.

---

## Layout Overview

```
[ NAV — sticky, full width ]
[ HERO — full bleed, 245px tall ]
[ .wrap — max 1080px centred, 40px side padding ]
  [ CASE HEADER — full width: H1 + tags ]
  [ TWO-COLUMN GRID ]
    [ MAIN (left, fluid) ] [ SIDEBAR (right, 240px, scrolls with page) ]
  [ /TWO-COLUMN ]
[ /wrap ]
[ OUTCOMES BAND — full bleed, off-white (#f5f3ef) ]
[ DEEP DIVES — max 1080px centred ]
[ PEEK GRID — max 1080px centred ]
[ FOOTER ]
```

**Key layout decisions:**
- Two-column grid uses `grid-template-columns: 1fr 240px`, `gap: 48px`, `align-items: start`
- Sidebar scrolls with page (no sticky) — all four sidebar cards scroll naturally
- Outcomes section breaks out of the two-column wrap — full bleed, off-white bg, top/bottom border
- Deep dives and peek grid resume as single-column centred content below outcomes
- Mobile breakpoint at 780px collapses to single column

---

## Design Tokens

```css
--navy:   #1a3a6b   /* headings, badges, links, buttons */
--border: #e4e1db   /* all dividers and card borders */
--bg:     #ffffff   /* page background */
--text:   #1a1a18   /* primary body text, strong */
--muted:  #6b6b66   /* secondary body text, captions */
--faint:  #f5f3ef   /* callout backgrounds, outcomes band bg */
--tag-bg: #eceae5   /* tag pill background */
--r:      10px      /* standard border-radius */
--r-sm:   6px       /* small border-radius (buttons) */
--max:    1080px    /* max content width */
--sb:     240px     /* sidebar width */
--pad:    40px      /* horizontal page padding */
```

Font: `Inter`, system sans-serif fallback.

---

## Page Sections (in order)

---

### 1. HERO BANNER

**Type:** Full-bleed image, `height: 245px`
**File:** `hero-banner.jpg`
**Notes:** ⚠️ Confirm — may be shared with Risk Management hero (`d0fd9709…` Wix fragment)

---

### 2. PAGE TITLE + TAGS

**Type:** H1 + tag row
**Tags:** `🔒 NDA` (dark pill) · `B2B Enterprise` · `~2.5 years`
**H1:**
> Reimagining Data Capture: Laying the Foundation for a Smarter, Seamless, and Future-Ready Experience

---

### 3. THE PROBLEM

**Heading:** The Problem
**Body:**
> Medidata faced a pivotal challenge: despite its dominant global market share, its flagship Rave Classic (2000) ran on ageing Microsoft technology approaching end of life. The 2017 redesign (Rave EDC) helped maintain that position, but Classic continued to compete internally, splitting that share and cannibalising resources and investment. Even as more customers migrated, some as late as mid-2025, the change remained unpopular. Complaints and feedback exposed critical issues that slowed adoption and forced clinical teams into workarounds. Meanwhile, competitors were advancing modern single-code base platforms with more consistent, integrated experiences, threatening revenue and increasing Medidata's exposure to disruption.

**Caption above image:**
> A snapshot of designs I worked on, including synthetic patients, global task filters and data capture pages.

**Image:** `[IMAGE: problem-snapshot.jpg — 730×410px]`

---

### 4. WHAT ARE EDC PRODUCTS?

**Heading:** What Are Electronic Data Capture Products?
**Body:**
> EDC systems are cloud-based applications used in clinical trials for entering, reviewing, and managing patient-level data. Study teams capture medical results in structured forms or import data from other connected systems.

**Caption above audio player:**
> AI-generated podcast created from a doc I wrote to quickly onboard teams to the redesign

**Component:** `<AudioPlayer>`
**File:** `audio/edc-onboarding-podcast.mp3` — 14:16
**Label:** NotebookLM generated podcast — Lesley's EDC onboarding
**Notes:** Styled HTML `<audio>` element with play/pause button, progress bar (click-to-seek), timestamp display.

---

### 5. MY ROLE

**Heading:** My Role
**Body:**
> I led EDC's data pages (the patient record, a large section of the redesign) working alongside my design partner Anastasiya in a deliberate divide-and-conquer model. Ownership of different areas, to explore with regular syncs to coordinate findings and designs.
>
> After our Lead Designer Michael left in 2023, we expanded scope to study listing pages. I independently led AI features, Electronic Health Record integration, and other areas tying into the wider platform ecosystem.

---

### 6. BUSINESS CONSTRAINTS AND CHALLENGES

**Heading:** Business Constraints and Challenges
**Type:** Numbered list (navy circle badges)

1. Started as a visual reskin, to upgrade to the new evolving design system; past design efforts struggled with domain credibility to convince executives to make changes.
2. Technical debt — Outdated APIs, Angular to React migration, strict backend constraints and a lean engineering team.
3. Cross-product coordination — Multiple company-wide initiatives (homepage, overall navigation, design system, study build & platform integration) required close alignment to lessen the "Frankenstein" experience.

---

### 7. SIDEBAR — WHAT I DID

**Heading:** What I did 👩🏾‍💻
**Type:** List with ✦ prefix, anchor links where applicable. No shadow — outline border only.

- ✦ [De-risking](#dd1)
- ✦ [Collaboration](#engineering)
- ✦ [Prototyping](#dd1)
- ✦ Competitive Analysis
- ✦ [User Interviews](#research)
- ✦ [Stakeholder Alignment](#stakeholders)
- ✦ Introducing interactive patterns to emerging design systems

⚠️ Confirm with Lesley whether these should all be anchor links or some static.

---

### 8. SIDEBAR — TOOLS

**Heading:** Tools
**Type:** 2-column icon grid. No shadow — outline border only.
**14 tools (in display order):**
Figma · Storybook · Loom · Lovable · Slack · Zoom · Notion · Pendo · Axure · condens · Pen & paper · Gemini (Experiments) · GitHub · Screen Flow

**Notes:** Currently using text labels as icon placeholders. Replace each `.tool-icon` div with the actual SVG logo file when available. Official SVG sources:
- Figma, Slack, Zoom, Notion, GitHub — available from brand kits
- Loom, Pendo, Axure, Storybook, condens, Lovable, Screen Flow, Gemini — check brand/press pages

---

### 9. SIDEBAR — TEAM

**Heading:** Team
**Type:** Plain list, no bullets. Divider rule between production team and design team. No shadow — outline border only.

1 Product Director (PM) 🇺🇸 / 1 Business Analyst 🇺🇸 / 1 Back End 🇺🇸 / 1 System Architect 🇺🇸 / 3 Engineers (Front End) 🇺🇸 / 3 QA 🇺🇸 / 2 Data Scientists 🇺🇸 / Design System 🇵🇱 🇺🇦 🇮🇳 🇺🇸 / Customer Support 🇯🇵 🇺🇸 🇰🇷

---

1 Lead Designer (left 2023) 🇺🇸 / **1 Senior Designer (me) 🇬🇧** / 1 Designer (agency) 🇵🇱 / 1 Design Director (support & guidance — left 2024) 🇺🇸

---

### 10. SIDEBAR — DURATION

**Heading:** Duration
**Content:** ~2.5 years (**Multi-phased releases and dependencies. Last release 2026**)
**Type:** Text only. No shadow — outline border only.

---

### 11. USER PROBLEMS & RESEARCH INSIGHTS

**Heading:** User Problems & Research Insights
**Type:** Numbered list (navy circle badges)

1. Lost task visibility and accuracy — Users lost sight of outstanding tasks when drilling into patient records, forcing unnecessary navigation or reliance on exported reports.
2. Performance issues — Poor system performance pushed users toward unnatural workarounds or competitors.
3. Poor integration & data persistence — Users re-entered the same patient data in multiple places; related information was buried.
4. Broken accessibility — Poor readability, keyboard tab order didn't match expectations for fast data entry workflows.
5. Real estate — Feedback from users and product showed that each redesign reduced visible data density. Users wanted grids to be more compact so they could see more data before scrolling.

**Caption below list:**
> Please note that I list user insights below, but also influenced gathering internal information across the company, so we had the full picture.

---

### 12. RESEARCH LOOM (Interactive)

**Component:** `<HoverReveal>` with `.vid-controls` bar
**Video:** `images/EDCRedesign/EDC_LoomResearchMovie.mp4` (local mp4, not external Loom URL)
**Callout above:**
> Hover to hear highlights from a 10-minute Loom I cut to surface the research themes. I also credited past designers whose earlier work helped the team to avoid bias or see patterns within our conclusions.

**Behaviour:**
- Hover → video plays with sound (unmutes if user hasn't muted)
- Control bar appears on hover: draggable scrubber + countdown + sound toggle
- Mouseleave → video pauses, resets to start, controls hide
- Sound icon: `images/icons/Sound on.svg` / `images/icons/Sound off.svg`

---

### 13. HOW MIGHT WE GOALS

**Heading:** How Might We Goals
**Type:** Numbered list (navy circle badges)

1. Build a cleaner interface for future capabilities (think AI automation, imported patient records, all that good stuff)
2. Speed up data entry — Reduce errors, cut unnecessary queries. Daily friction points and slowness.
3. Restore task awareness — Bring back what made Rave Classic loved by its users while keeping the best working efficiency gains from the 2017 redesign.
4. Sales demo impact — Make the improvement visually obvious so clients can see the immediate AHA moment.

**Divider rule, then quick links:**

🧑🏾‍💻 Quick links to deep dive into specific snapshot solutions

- [Streamlining patient data workflows for all personas →](#dd1)
- [Helping Data Manager find, spot check and lock patients easily →](#dd2)
- [Unsaid legacy attraction of Rave Classic →](#dd3)
- [Discovering a root problem from various symptoms →](#dd4)

---

### 14. ALL BRAINS ON DECK

**Heading:** 🧠 All Brains On Deck Approach
**Image:** `[IMAGE: stakeholder-interviews.jpg — 922×518px]`
**Sub-heading:** The Plan & What We Did
**Body:**
> I partnered with the Lead Designer and PM to broaden discovery beyond end users. Instead of large group workshops, we ran individual calls with solution experts, sales, marketing, and engineering — the format that surfaces candid, unfiltered insight.
>
> What we heard was consistent: clients saw us as stagnant. Legacy dependencies were driving performance issues. And the competitive landscape was shifting fast, with eSource and eCOA companies moving into the EDC market.

---

### 15. SYSTEM MAPS (Interactive)

**Component:** `<HoverReveal>`
**Caption above:** Hover to see system maps of interconnected tasks
**Image:** `[IMAGE: system-maps.jpg — 874×491px]`
**⚠️ Confirm hover reveal content with Lesley** — second image, zoomed view, or modal?

---

### 16. MEET THE USERS / PERSONAS

**Heading:** Meet the Users

**Sites:**
- 🧑🏻‍⚕️ Clinical Research Coordinator (CRC) — Conducts visits, enters patient data from multiple sources, resolves queries. Constantly interrupted.
- 👩🏾‍⚕️ Study Nurse — Interacts with patients, enters data & queries. Constantly interrupted.
- 👩🏽‍⚕️ Data Coordinator — Enters data from site personnel, resolves queries.
- 👨🏻‍⚕️ Primary Investigator (PI) — Leads study, oversees procedures, ensures compliance.
- 👩🏽‍⚕️ Sub-Investigator (Sub I) — Assists PI, performs trial procedures.

**Client side:**
- 🧑🏻‍⚕️ Clinical Research Associate (CRA) — Monitors sites, ensures protocol compliance. Like an inspector or referee for the trial.
- 🧑🏽‍💻 Data Manager (DM) — Cleans, validates, and packages clinical data for statisticians.

**Caption above carousel:**
> A visual summary overview of all personas and their day-to-day goals and actions within the system. Click to explore details.

**Component:** `<Carousel>` — 2 slides
- `[IMAGE: personas-overview-1.webp — 980×988px]`
- `[IMAGE: personas-overview-2.webp — 980×878px]`

---

### 17. ENGINEERING COLLABORATION

**Heading:** Where the Best Ideas Win (Engineering Collaboration)
**Body:**
> I brought engineering into design early to reduce surprises and handoff friction. In a group with strong opinions and history, psychological safety mattered. We kept everyone informed but were selective about which feedback shaped direction. Sharing research clips rather than just conclusions meant people felt heard and kept bringing their views, which helped us catch blind spots early.
>
> In practice this meant 30-minute syncs to surface blockers, debate solutions, and flag API needs before they became constraints. Functional prototypes instead of static mockups. Tesler's Law applied deliberately. If complexity could live in the system, done programmatically, it shouldn't live in the UI.
>
> I also pushed to get design included in cross-product engineering meetings, bug bashes, and peer reviews. And brought in accessibility specialists early, after noticing users were navigating primarily by keyboard. Something that needed to be designed for, not retrofitted.

**Component:** `<Carousel>` — 3 slides
- `images/EDCRedesign/MD_LoomCommunication.webp` — Loom communication library grid (active)
- `images/EDCRedesign/MD_NEXTLargeStage02.webp` — Patients grid — Data manager and power user permissions
- `images/EDCRedesign/MD_FigmaProtoTypeLoops.webp` — Figma prototype flow — patient grid states and transitions

**Caption below carousel:**
> Figma files with JTBD flow with annotations, Loom walkthroughs, and a component tracker that directors referenced throughout the redesign.

---

### 18. OVERALL RESEARCH PLAN

**Heading:** Overall Research Plan — Derisking Assumptions and Increasing Design Quality
**Body:**
> I split data page design ownership to give my design partner and me autonomy to explore ideas while allowing me to focus on cross-product challenges. Though initially unpopular, this moved us from UI reskinning to outcome-driven work with deeper research and bolder UX bets.
>
> Interviewed 55+ participants over two years either in 1-on-1 or group sessions with 28% returning — building trust through short, focused sessions that respected their time and supported continuous discovery habits. We also shared multiple snippets with designers on other initiatives to influence their teams.
>
> Reviewed prior research to identify trends, such as Data Managers shifting from patient-level detail to site-wide tasks, which helped us prioritise features that served multiple personas over their isolated frustrations and contributed to a vision of removing that persona from EDC altogether.

**Image pair (side by side):**
- `[IMAGE: research-guidelines-1.png — 430×430px, scrappy research guidelines]`
- `[IMAGE: competitor-screenshots.webp — 430×430px, competitor screenshots]`

---

### 19. OUTCOMES BAND (full bleed)

**Layout:** Breaks out of `.wrap`, full-bleed `#f5f3ef` background, top/bottom `1px solid #e4e1db` border
**Heading:** The Outcomes, Impact and Personal Growth

**Component:** `<Carousel>` — 3 slides (above the caption text)
- `[IMAGE: outcomes-slide-1.png — 980×590px]`
- `[IMAGE: outcomes-slide-2.png — 980×486px]`
- `[IMAGE: outcomes-slide-3.png — 980×639px]`

**Caption below carousel:**
> After a lukewarm late 2022 pitch, executive buy-in finally came once we demonstrated interactive prototypes and clear productivity gains in 2023. The redesign is rolling out in phases across Q3 2025 and Q2 2026, and the images below show a snapshot of post-launch customer feedback, including Reddit, which has been harsh on the structural changes outside the primary EDC environment.

**Two-column results grid:**

**Business outcomes:**
- Removed unused features, reducing years of design/engineering debt and lowering engineering maintenance, increasing company efficiency.
- Enabled a smoother Classic-to-new platform migration (unified product) and strengthened competitive edge in sales demos.
- The initiative demonstrated the ROI of embedded research — fewer rework cycles, fewer post-release fixes, and clearer guidance on where engineering should focus backend refactoring.

**User Benefits:**
- Users can reliably glance left for a visual to-do summary, streamlining workflows and boosting productivity by 40–50% fewer clicks. Confirmed from usability studies and beta pilot releases.
- Increases in discoverability, improved scanning behaviour and reduced support tickets by making core features easier to find. Pilot report revealed faster time to value, especially for newer features.

---

### 20. DEEP DIVE 01 — STREAMLINING PATIENT DATA WORKFLOWS `#dd1`

**Label:** Deep Dive: Problem and Solution 01
**Heading:** Streamlining Patient Data Workflows, Reducing Back and Forth Navigation

**Component:** `<Carousel>` — 2 slides
- `[IMAGE: deep-dive-01-a.webp — 980×560px]`
- `[IMAGE: deep-dive-01-b.webp — 980×612px]`

**Body:**
> My idea was simple: make patient visits folders (left hand side) communicate more at a glance. I added right-aligned status badges — red for critical blocking work, yellow for next priority, neutral for low priority tasks that could wait, coordinating with Michael for the left side study visit. In space-constrained views, only the highest-priority indicator shows with an overflow indicator, keeping things clean without losing signal. This visual language was aligned across EDC and with other platform designers to avoid cross-application conflicts.
>
> Smart filtering and form search reduced reliance on the matrix grid that disappeared once a user selected a patient form. A hover-to-preview the tasks on visit folders (like an accelerator) meant users could check tasks without drilling in. And a consistent left-side pattern lets users glance progress or outstanding tasks from any listing or detail page, updating dynamically without a refresh.
>
> Users were stuck in an endless loop: find patient → drill in → lose context → navigate back → reapply filters → repeat. The monochromatic interface made scanning hard, and task visibility vanished the moment they clicked into a patient record.

**Before/After image pair:**
- `[IMAGE: before-patient-details-2017.jpg — 848×504px]` — label: BEFORE Rave X / EDC redesign patient details 2017
- `[IMAGE: after-patient-details-2026.jpg — 913×587px]` — label: AFTER New redesign of patient details 2026

**Component:** `<HoverReveal>`
**Caption above:** Hover to listen to scrappy design experiments, excerpted from a compilation capturing successes and failures during concept testing.
**Image:** `[IMAGE: concept-experiments-thumbnail.jpg]`
**⚠️ Confirm hover reveal content with Lesley**

---

### 21. DEEP DIVE 02 — PATIENT SEARCH & FILTER `#dd2`

**Label:** Deep Dive: Problem and Solution 02
**Heading:** Design System Contribution: Patient Search & Filter Prototype

**Body:**
> Data Managers were spot-checking patient progress on the drugs more frequently. They were receiving lists of 15 to 100 patient IDs by email or spreadsheet, then locking records one by one. The design system's suggestive-text component gave them no other option. One Data Manager put it bluntly: "We now have a problem with Medidata."
>
> I designed a bulk-paste solution with a 15-tag maximum that balanced performance with real-world needs and edge cases. The pattern reduced workflow time to minutes and became a reusable design system component that Clinical Data Studio (another product) could adopt.

**Image pair:**
- `[IMAGE: research-guidelines-1.png — 430×430px]`
- `[IMAGE: competitor-screenshots.webp — 430×430px]`

**Images (full width):**
- `[IMAGE: design-system-loading-component.jpg — 554×373px]` — caption: Design System virtual loading component option wasn't right for the use case
- `[IMAGE: lovable-experimental-design.jpg — 836×533px]` — caption: Experimental designs: While working in Lovable and riffing on ideas with my front-end lead

**Prototype link:** [Patient filter prototype ↗](https://patient-finder-scribe-ui.lovable.app/) — fill button (navy)

**Caption above carousel:** Below final design solution, including sandbox screenshots showing iterative conversations with engineers and refined Figma screens

**Component:** `<Carousel>` — 4 slides
- `[IMAGE: final-design-01.webp — 980×608px]`
- `[IMAGE: final-design-02.webp — 980×561px]`
- `[IMAGE: final-design-03.webp — 980×518px]`
- `[IMAGE: final-design-04.webp — 980×608px]`

**Body (after carousel):**
> Another pattern that made it into the design system: a smoother, faster, more forgiving time-input for medication. With no strong examples in external systems and static mocks falling flat, I put together a quick prototype for the team to try.

**Prototype link:** [Time picker prototype ↗](https://1xe7ex.axshare.com/) — outline button (navy border)

---

### 22. DEEP DIVE 03 — SYNTHETIC PATIENTS `#dd3`

**Label:** Deep Dive 03
**Heading:** The Unsaid Legacy Attraction — From Custom Code Workaround to Core Feature

**Body:**
> While exploring potential pitfalls of an autosave-to-draft idea, I accidentally uncovered a deeper migration risk. Rave Classic let study builders custom-code features outside the core product. Like Figma plugins, these extensions expanded the platform in ways we couldn't track, leaving us blind to what existed or how widely it was used.
>
> One such extension surfaced during interviews: dummy patients. Site staff needed to preview forms and study builders or DM wanted to run UAT to check and verify dynamically generated fields within the forms before the first live patient started. Without it, problems in the study could go unnoticed and take months to resolve. Only the most well-resourced studies hacked a solution. Others refused to upgrade from Classic entirely. Populating multiple forms with realistic data for a single patient could take weeks or months.

**Image:** `[IMAGE: synthetic-patients.jpg — 763×474px]`

**Body (continued):**
> That conversation became one of the value propositions when a Data Scientist realised they could create Synthetic Patient data, transforming an unofficial workaround into a proper product capability using AI to generate realistic historical patient data. The next release will cover the parameters users would like to control what's generated.

---

### 23. DEEP DIVE 04 — ROOT PROBLEM `#dd4`

**Label:** Deep Dive 04
**Heading:** Discovering a Root Problem from Various Symptoms — How Unresolvable Queries Undermine Trust and Data Integrity Across Clinical Teams

**Body:**
> I began to notice a fundamental system flaw showing up in my own as well as other designers' user calls. The platform treated 'not yet available' data the same as 'missing' data. Take drug returns: when patients are given medication, they must bring back any unused study doses at their next visit, which might not happen for weeks or months. The system didn't account for that. It immediately flagged those fields as queries, creating alerts no one could honestly resolve.
>
> To cope, users entered junk data to clear these query alerts temporarily from the system. If they didn't, these queries would clog up task lists across EDC, Clinical Data Studio, and the Homepage, inflating counts and eroding trust in the whole ecosystem — but the junk data could also be forgotten. Losing accuracy. I mapped the impact and escalated it, showing that a UI patch wouldn't fix a system-level issue. That work was brought to the attention of Design VP and manager to secure a proper future root-cause fix to handle deferred queries and finally stop penalising users for real-world delays.

**Caption above carousel:** Visual presentation of the lack of trust and accuracy. A problem to help communicate the issue across different teams.

**Component:** `<Carousel>` — 2 slides
- `images/EDCRedesign/MD_SystemQueryissues01.webp` — System Impact Map: Unresolvable Queries in EDC (active)
- `images/EDCRedesign/MD_NEXTLargeStage02.webp` — Patients grid — Data manager and power user permissions

---

### 24. CANDID REFLECTIONS

**Heading:** Candid Reflections
**Body:**
> My first redesign was tough. Priorities shifted, people moved on, and cross-product dependencies kept growing, so progress often felt slow. It was also my first time working on a high-risk product with a two-year timeline, where backend mistakes or bugs could cost Medidata a million dollars a day in client penalties. I was always aware of that pressure, so that's why I made sure engineering had the time and clarity they needed to plan and deliver.
>
> Coordinating multiple roadmaps meant revisiting earlier work, juggling backup designs, and balancing other projects at the same time. Maintaining enthusiasm and managing tension was challenging, especially since we were used to working on shorter projects. I learned when to push with evidence and when to let go, what truly mattered and why. What a foundational release really meant, and how tricky prioritisation can be when trying to keep people focused. Since launch, early client feedback has been positive, and the effort has been worth it.

---

### 25. PEEK GRID `#peek`

**Caption:** You can hover to take a sneak peek 👀 or use my password on restricted cases.
**Component:** `<PeekGrid>` — 3×3 grid, each cell aspect-ratio 1:1
**Hover:** Scale 1.04 on hover
**9 thumbnails (~317×316px each):**
- `[IMAGE: peek-thumb-1.jpg]`
- `[IMAGE: peek-thumb-2.jpg]`
- `[IMAGE: peek-thumb-3.png]`
- `[IMAGE: peek-thumb-4.jpg]`
- `[IMAGE: peek-thumb-5.jpg]`
- `[IMAGE: peek-thumb-6.png]`
- `[IMAGE: peek-thumb-7.jpg]`
- `[IMAGE: peek-thumb-8.png]`
- `[IMAGE: peek-thumb-9.jpg]`

**⚠️ Confirm with Lesley which case study each thumbnail links to**

---

## Component Summary

| Component | Count | Locations |
|---|---|---|
| `<Carousel>` | 6 | Outcomes (3 slides), Personas (2), Engineering (4), DD01 (2), DD02 (4), Root Problem (2) |
| `<HoverReveal>` | 3 | Loom thumbnail, System maps, Concept experiments |
| `<AudioPlayer>` | 1 | NotebookLM podcast, 14:16 |
| `<PeekGrid>` | 1 | 9 thumbnails, 3×3 |
| Numbered list | 4 | Business Constraints, User Problems, HMW Goals, Personas |
| Quick links (anchors) | 4 | Below HMW Goals → DD01–04 |
| Prototype links | 2 | Patient filter (Lovable), Time picker (Axure) |
| Image pair | 3 | Research plan, DD01 before/after, DD02 context |

---

## Images to Source / Export from Wix

| Filename | Wix fragment | Dimensions |
|---|---|---|
| hero-banner.jpg | d0fd9709… | 980×245 |
| problem-snapshot.jpg | 63076d0d… | 730×410 |
| research-loom-thumbnail.webp | 9c4e006a… | 537×343 |
| outcomes-slide-1.png | 019657d4… | 980×590 |
| outcomes-slide-2.png | d2621156… | 980×486 |
| outcomes-slide-3.png | 2138797e… | 980×639 |
| stakeholder-interviews.jpg | a6ef8603… | 922×518 |
| system-maps.jpg | da18d7b5… | 874×491 |
| personas-overview-1.webp | 7daf963d… | 980×988 |
| personas-overview-2.webp | 6c256d23… | 980×878 |
| engineering-collab-1.webp | 1d40afbf… | 980×590 |
| engineering-collab-2.webp | a991c7e3… | 980×657 |
| engineering-collab-3.png | 13193855… | 980×450 |
| engineering-collab-4.webp | (repeat of collab-1) | 980×590 |
| deep-dive-01-a.webp | c3703b79… | 980×560 |
| deep-dive-01-b.webp | ed434a26… | 980×612 |
| before-patient-details-2017.jpg | d90d07e8… | 848×504 |
| after-patient-details-2026.jpg | cccb70ea… | 913×587 |
| concept-experiments-thumbnail.jpg | (confirm) | — |
| research-guidelines-1.png | 69ab1697… | 430×430 |
| competitor-screenshots.webp | aaa7ea8b… | 430×430 |
| design-system-loading-component.jpg | 42b48df7… | 554×373 |
| lovable-experimental-design.jpg | 7112c52f… | 836×533 |
| final-design-01.webp | 8374dedc… | 980×608 |
| final-design-02.webp | 17355640… | 980×561 |
| final-design-03.webp | 40992f37… | 980×518 |
| final-design-04.webp | (repeat of 01) | 980×608 |
| synthetic-patients.jpg | 4d846f93… | 763×474 |
| root-problem-01.webp | c89e009b… | 980×733 |
| root-problem-02.webp | 66793024… | 980×842 |
| peek-thumb-1 through 9 | various | ~317×316 each |

---

## Open Questions for Lesley

- [ ] Loom URL for research highlights (section 12)
- [ ] What does the system maps hover reveal? (section 15)
- [ ] What does the concept experiments hover reveal? (section 20)
- [ ] Which case study does each of the 9 peek grid thumbnails link to? (section 25)
- [ ] Do you have `edc-onboarding-podcast.mp3` as a downloadable file or does it need re-exporting from NotebookLM?
- [ ] Hero banner — is this the same image as the Risk Management page hero?
- [ ] Should all "What I Did" items be anchor links, or only the highlighted ones?

---

## Changelog

### 2026-03-24
- Video control bar (`.vid-controls`) added to `exp-video` and `loom-video`: draggable scrubber, countdown timer, sound toggle
- Homepage card-0: static image placeholder added as hover state (pending final video)
- DD04 carousel: `SystemQueryIssue_B.webp` removed, replaced with `MD_NEXTLargeStage02.webp`
- Engineering carousel: `MD_DesignSystemSpreadSheetValueBuckets.webp` retired; final 3 slides confirmed
- "User outcomes" renamed to "User Benefits" in outcomes band
- DD01 caption updated to "Hover to listen to scrappy design experiments..."
- Sidebar duration updated: `~2.5 years (Multi-phased releases and dependencies. Last release 2026)`
- "After the mixed reception of the 2017 redesign," removed from All Brains section body
- Vertical gap (24px) added between football video card and following body text
