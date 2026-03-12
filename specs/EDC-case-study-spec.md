# EDC Case Study — Component & Content Spec
## lrooney.com/medidataedcredesign

This document maps every section of the current Wix page into components and media placeholders for the Netlify rebuild. Use it as the build brief.

---

## Page Sections (in order)

---

### 1. HERO BANNER

**Type:** Full-width image  
**Current dimensions:** 980×245px  
**Placeholder:** `[IMAGE: hero-banner.jpg — wide landscape, Medidata screen or design snapshot]`  
**Notes:** Sits above the page title. Should be full-bleed or constrained to content width depending on layout choice.

---

### 2. PAGE TITLE

**Type:** H1 text  
**Content:**
> Reimagining Data Capture: Laying the Foundation for a Smarter, Seamless, and Future-Ready Experience

---

### 3. THE PROBLEM

**Type:** Body text + image  
**Content:**
> Medidata faced a pivotal challenge: despite its dominant global market share, its flagship Rave Classic (2000) ran on ageing Microsoft technology approaching end of life. The 2017 redesign (Rave EDC) helped maintain that position, but Classic continued to compete internally, splitting that share and cannibalising resources and investment. Even as more customers migrated, some as late as mid-2025, the change remained unpopular. Complaints and feedback exposed critical issues that slowed adoption and forced clinical teams into workarounds. Meanwhile, competitors were advancing modern single-code base platforms with more consistent, integrated experiences, threatening revenue and increasing Medidata's exposure to disruption.

**Intro caption (above image):**
> A snapshot of designs I worked on, including synthetic patients, global task filters and data capture pages.

**Placeholder:** `[IMAGE: problem-snapshot.jpg — design collage, 730×410px]`

---

### 4. WHAT ARE EDC PRODUCTS?

**Type:** Body text + audio player  
**Heading:** What Are Electronic Data Capture Products?  
**Content:**
> EDC systems are cloud-based applications used in clinical trials for entering, reviewing, and managing patient-level data. Study teams capture medical results in structured forms or import data from other connected systems.

**Caption above audio player:**
> AI-generated podcast created from a doc I wrote to quickly onboard teams to the redesign

**Component needed:** `<AudioPlayer>`  
**Placeholder:** `[AUDIO: edc-onboarding-podcast.mp3 — 14:16, NotebookLM generated]`  
**Notes:** Wix hosted this natively. On the new site use a styled HTML `<audio>` element or embed. Label it: *"NotebookLM generated podcast — Lesley's EDC onboarding"*

---

### 5. MY ROLE

**Type:** Body text  
**Heading:** My Role  
**Content:**
> I led EDC's data pages (the patient record, a large section of the redesign) working alongside my design partner Anastasiya in a deliberate divide-and-conquer model. Ownership of different areas, to explore with regular syncs to coordinate findings and designs.
>
> After our Lead Designer Michael left in 2023, we expanded scope to study listing pages. I independently led AI features, Electronic Health Record integration, and other areas tying into the wider platform ecosystem.

---

### 6. BUSINESS CONSTRAINTS

**Type:** Numbered list  
**Heading:** Business Constraints and Challenges

1. Started as a visual reskin, to upgrade to the new evolving design system; past design efforts struggled with domain credibility to convince executives to make changes.
2. Technical debt — Outdated APIs, Angular to React migration, strict backend constraints and a lean engineering team.
3. Cross-product coordination — Multiple company-wide initiatives (homepage, overall navigation, design system, study build & platform integration) required close alignment to lessen the "Frankenstein" experience.

---

### 7. TEAM

**Type:** Text block  
**Heading:** Team  
**Content:** (flag emojis preserved)

1 Product Director (PM) 🇺🇸 / 1 Business Analyst 🇺🇸 / 1 Back End 🇺🇸 / 1 System Architect 🇺🇸 / 3 Engineers (Front End) 🇺🇸 / 3 QA 🇺🇸 / 2 Data Scientists 🇺🇸 / Design System 🇵🇱 🇺🇦 🇮🇳 🇺🇸 / Customer Support 🇯🇵 🇺🇸 🇰🇷

1 Lead Designer (left 2023) 🇺🇸 / 1 Senior Designer (me) 🇬🇧 / 1 Designer (agency) 🇵🇱 / 1 Design Director (support & guidance — left 2024) 🇺🇸

---

### 8. DURATION

**Type:** Text  
**Content:** ~2.5 years. Multi-phased releases.

---

### 9. USER PROBLEMS & RESEARCH INSIGHTS

**Type:** Numbered list  
**Heading:** User Problems & Research Insights

1. Lost task visibility and accuracy — Users lost sight of outstanding tasks when drilling into patient records, forcing unnecessary navigation or reliance on exported reports.
2. Performance issues — Poor system performance pushed users toward unnatural workarounds or competitors.
3. Poor integration & data persistence — Users re-entered the same patient data in multiple places; related information was buried.
4. Broken accessibility — Poor readability, keyboard tab order didn't match expectations for fast data entry workflows.
5. Real estate — Feedback from users and product showed that each redesign reduced visible data density. Users wanted grids to be more compact so they could see more data before scrolling.

**Caption below list:**
> Please note that I list user insights below, but also influenced gathering internal information across the company, so we had the full picture.

---

### 10. RESEARCH LOOM THUMBNAIL (Interactive)

**Component needed:** `<HoverReveal>` — static image that reveals/links to Loom on hover  
**Caption:**
> Hover to hear highlights from a 10-minute Loom I cut to surface the research themes. I also credited past designers whose earlier work helped the team to avoid bias or see patterns within our conclusions.

**Placeholder:** `[IMAGE: research-loom-thumbnail.webp — 537×343px, hover triggers link to Loom video]`  
**Notes:** This is not a video embed. On hover, show a play button overlay or open the Loom URL in a new tab. Confirm Loom link with Lesley.

---

### 11. TOOLS USED

**Type:** Icon row  
**Heading:** Tools  
**Component needed:** `<IconRow>` — horizontally scrollable or wrapping grid of tool logos with labels

Tools to include (logos needed for each):
- Figma
- Storybook
- Loom
- Lovable
- Slack
- Zoom
- Notion
- Pendo
- Axure
- Condens
- Pen & paper
- Gemini (Experiments)
- GitHub
- Screen Flow

**Placeholders:** `[ICON: figma.svg]` `[ICON: storybook.svg]` `[ICON: loom.svg]` etc.  
**Notes:** Use official SVG logos where available. Group under a "Tools" heading. Wix used SVG icons inline — replicate as an icon strip.

---

### 12. WHAT I DID

**Type:** Tag/link list  
**Heading:** What I did 👩🏾‍💻

- De-risking
- Collaboration
- Prototyping
- Competitive Analysis
- User Interviews
- Stakeholder Alignment
- Introducing interactive patterns to emerging design systems

**Notes:** On Wix these were anchor links (✦ prefix). On new site, style as tags or a simple bulleted list. Anchor links are optional — confirm with Lesley.

---

### 13. HOW MIGHT WE GOALS

**Type:** Numbered list  
**Heading:** How Might We Goals

1. Build a cleaner interface for future capabilities (think AI automation, imported patient records, all that good stuff)
2. Speed up data entry — Reduce errors, cut unnecessary queries. Daily friction points and slowness.
3. Restore task awareness — Bring back what made Rave Classic loved by its users while keeping the best working efficiency gains from the 2017 redesign.
4. Sales demo impact — Make the improvement visually obvious so clients can see the immediate AHA moment.

**Deep dive quick links (below HMW):**
- Streamlining patient data workflows for all personas →
- Helping Data Manager find, spot check and lock patients easily →
- Unsaid legacy attraction of Rave Classic →
- Discovering a root problem from various symptoms →

**Notes:** These are in-page anchor links. Wire them to the corresponding Deep Dive sections below.

---

### 14. OUTCOMES

**Type:** Image carousel + body text  
**Heading:** The Outcomes, Impact and Personal Growth

**Component needed:** `<Carousel>` — 3 slides  
**Placeholders:**
- `[IMAGE: outcomes-slide-1.png — 980×590px, post-launch customer feedback]`
- `[IMAGE: outcomes-slide-2.png — 980×486px]`
- `[IMAGE: outcomes-slide-3.png — 980×639px]`

**Caption below carousel:**
> After a lukewarm late 2022 pitch, executive buy-in finally came once we demonstrated interactive prototypes and clear productivity gains in 2023. The redesign is rolling out in phases across Q3 2025 and Q2 2026, and the images below show a snapshot of post-launch customer feedback, including Reddit, which has been harsh on the structural changes outside the primary EDC environment.

**Business outcomes:**
- Removed unused features, reducing years of design/engineering debt and lowering engineering maintenance, increasing company efficiency.
- Enabled a smoother Classic-to-new platform migration (unified product) and strengthened competitive edge in sales demos.
- The initiative demonstrated the ROI of embedded research — fewer rework cycles, fewer post-release fixes, and clearer guidance on where engineering should focus backend refactoring.

**User outcomes:**
- Users can reliably glance left for a visual to-do summary, streamlining workflows and boosting productivity by 40–50% fewer clicks. Confirmed from usability studies and beta pilot releases.
- Increases in discoverability, improved scanning behaviour and reduced support tickets by making core features easier to find. Pilot report revealed faster time to value, especially for newer features.

---

### 15. ALL BRAINS ON DECK / STAKEHOLDER INTERVIEWS

**Type:** Section header + image + body text  
**Heading:** 🧠 All Brains On Deck Approach

**Placeholder:** `[IMAGE: stakeholder-interviews.jpg — 922×518px, team/collaboration context]`

**Sub-heading:** The Plan & What We Did  
**Content:**
> After the mixed reception of the 2017 redesign, I partnered with the Lead Designer and PM to broaden discovery beyond end users. Instead of large group workshops, we ran individual calls with solution experts, sales, marketing, and engineering — the format that surfaces candid, unfiltered insight.
>
> What we heard was consistent: clients saw us as stagnant. Legacy dependencies were driving performance issues. And the competitive landscape was shifting fast, with eSource and eCOA companies moving into the EDC market.

---

### 16. SYSTEM MAPS (Interactive Hover)

**Component needed:** `<HoverReveal>`  
**Caption:** Hover to see system maps of interconnected tasks  
**Placeholder:** `[IMAGE: system-maps.jpg — 874×491px, hover reveals interconnected task maps]`  
**Notes:** Same pattern as the Loom thumbnail — static image, hover shows additional content or a zoomed/alternate view. Confirm what the hover reveals with Lesley.

---

### 17. MEET THE USERS / PERSONAS

**Type:** Persona descriptions + image carousel  
**Heading:** Meet the Users

**Persona text (Sites / Client side):**

*Sites:*
- 🧑🏻‍⚕️ Clinical Research Coordinator (CRC) — Conducts visits, enters patient data from multiple sources, resolves queries. Constantly interrupted.
- 👩🏾‍⚕️ Study Nurse — Interacts with patients, enters data & queries. Constantly interrupted.
- 👩🏽‍⚕️ Data Coordinator — Enters data from site personnel, resolves queries.
- 👨🏻‍⚕️ Primary Investigator (PI) — Leads study, oversees procedures, ensures compliance.
- 👩🏽‍⚕️ Sub-Investigator (Sub I) — Assists PI, performs trial procedures.

*Client side:*
- 🧑🏻‍⚕️ Clinical Research Associate (CRA) — Monitors sites, ensures protocol compliance. Like an inspector or referee for the trial.
- 🧑🏽‍💻 Data Manager (DM) — Cleans, validates, and packages clinical data for statisticians.

**Caption:** A visual summary overview of all personas and their day-to-day goals and actions within the system. Click to explore details.

**Component needed:** `<Carousel>` — 2 slides  
**Placeholders:**
- `[IMAGE: personas-overview-1.webp — 980×988px]`
- `[IMAGE: personas-overview-2.webp — 980×878px]`

---

### 18. ENGINEERING COLLABORATION

**Type:** Body text + image carousel  
**Heading:** Where the Best Ideas Win (Engineering Collaboration)

**Content:**
> I brought engineering into design early to reduce surprises and handoff friction. In a group with strong opinions and history, psychological safety mattered. We kept everyone informed but were selective about which feedback shaped direction. Sharing research clips rather than just conclusions meant people felt heard and kept bringing their views, which helped us catch blind spots early.
>
> In practice this meant 30-minute syncs to surface blockers, debate solutions, and flag API needs before they became constraints. Functional prototypes instead of static mockups. Tesler's Law applied deliberately. If complexity could live in the system, done programmatically, it shouldn't live in the UI.
>
> I also pushed to get design included in cross-product engineering meetings, bug bashes, and peer reviews. And brought in accessibility specialists early, after noticing users were navigating primarily by keyboard. Something that needed to be designed for, not retrofitted.

**Component needed:** `<Carousel>` — 4 slides  
**Placeholders:**
- `[IMAGE: engineering-collab-1.webp — 980×590px]`
- `[IMAGE: engineering-collab-2.webp — 980×657px]`
- `[IMAGE: engineering-collab-3.png — 980×450px]`
- `[IMAGE: engineering-collab-4.webp — 980×590px (repeat of slide 1)]`

**Caption below carousel:**
> Figma files with JTBD flow with annotations, Loom walkthroughs, and a component tracker that directors referenced throughout the redesign.

---

### 19. OVERALL RESEARCH PLAN

**Type:** Body text + stats + image pair  
**Heading:** Overall Research Plan — Derisking Assumptions and Increasing Design Quality

**Content:**
> I split data page design ownership to give my design partner and me autonomy to explore ideas while allowing me to focus on cross-product challenges. Though initially unpopular, this moved us from UI reskinning to outcome-driven work with deeper research and bolder UX bets.

**Key stat:**
> Interviewed 55+ participants over two years either in 1-on-1 or group sessions with 28% returning — building trust through short, focused sessions that respected their time and supported continuous discovery habits. We also shared multiple snippets with designers on other initiatives to influence their teams.

**Additional insight:**
> Reviewed prior research to identify trends, such as Data Managers shifting from patient-level detail to site-wide tasks, which helped us prioritise features that served multiple personas over their isolated frustrations and contributed to a vision of removing that persona from EDC altogether.

**Placeholders:**
- `[IMAGE: research-guidelines-1.png — 430×430px, scrappy research guidelines]`
- `[IMAGE: competitor-screenshots.webp — 430×430px, competitor screenshots]`

---

### 20. DEEP DIVE 01 — STREAMLINING PATIENT DATA WORKFLOWS

**Type:** Full deep-dive section  
**Heading:** Deep Dive: Problem and Solution 01 — Streamlining Patient Data Workflows, Reducing Back and Forth Navigation

**Component needed:** `<Carousel>` — 2 slides (before/after concept exploration)  
**Placeholders:**
- `[IMAGE: deep-dive-01-a.webp — 980×560px]`
- `[IMAGE: deep-dive-01-b.webp — 980×612px]`

**Body content:**
> My idea was simple: make patient visits folders (left hand side) communicate more at a glance. I added right-aligned status badges — red for critical blocking work, yellow for next priority, neutral for low priority tasks that could wait, coordinating with Michael for the left side study visit. In space-constrained views, only the highest-priority indicator shows with an overflow indicator, keeping things clean without losing signal. This visual language was aligned across EDC and with other platform designers to avoid cross-application conflicts.
>
> Smart filtering and form search reduced reliance on the matrix grid that disappeared once a user selected a patient form. A hover-to-preview the tasks on visit folders (like an accelerator) meant users could check tasks without drilling in. And a consistent left-side pattern lets users glance progress or outstanding tasks from any listing or detail page, updating dynamically without a refresh.
>
> Users were stuck in an endless loop: find patient → drill in → lose context → navigate back → reapply filters → repeat. The monochromatic interface made scanning hard, and task visibility vanished the moment they clicked into a patient record.

**Before/After images:**  
**Placeholders:**
- `[IMAGE: before-patient-details-2017.jpg — 848×504px, labelled "BEFORE Rave X / EDC redesign patient details 2017"]`
- `[IMAGE: after-patient-details-2026.jpg — 913×587px, labelled "AFTER New redesign of patient details 2026"]`

**Component needed (concept experiments):** `<HoverReveal>`  
**Caption:** Hover to see scrappy design experiments, excerpted from a compilation capturing successes and failures during concept testing.  
**Placeholder:** `[IMAGE: concept-experiments-thumbnail.jpg — hover reveals design experiment compilation]`

---

### 21. DEEP DIVE 02 — PATIENT SEARCH & FILTER / DESIGN SYSTEM CONTRIBUTION

**Type:** Full deep-dive section  
**Heading:** Deep Dive: Problem and Solution 02 — Design System Contribution: Patient Search & Filter Prototype

**Body content:**
> Data Managers were spot-checking patient progress on the drugs more frequently. They were receiving lists of 15 to 100 patient IDs by email or spreadsheet, then locking records one by one. The design system's suggestive-text component gave them no other option. One Data Manager put it bluntly: "We now have a problem with Medidata."
>
> I designed a bulk-paste solution with a 15-tag maximum that balanced performance with real-world needs and edge cases. The pattern reduced workflow time to minutes and became a reusable design system component that Clinical Data Studio (another product) could adopt.

**Placeholders:**
- `[IMAGE: design-system-loading-component.jpg — 554×373px, caption: "Design System virtual loading component option wasn't right for the use case"]`
- `[IMAGE: lovable-experimental-design.jpg — 836×533px, caption: "Experimental designs: While working in Lovable and riffing on ideas with my front-end lead"]`

**Prototype link:**  
`[LINK: Patient filter prototype → https://patient-finder-scribe-ui.lovable.app/]`  
*Style as a prominent CTA button or inline text link*

**Component needed:** `<Carousel>` — 4 slides (final design solution)  
**Caption above carousel:** Below final design solution, including sandbox screenshots showing iterative conversations with engineers and refined Figma screens  
**Placeholders:**
- `[IMAGE: final-design-01.webp — 980×608px]`
- `[IMAGE: final-design-02.webp — 980×561px]`
- `[IMAGE: final-design-03.webp — 980×518px]`
- `[IMAGE: final-design-04.webp — 980×608px (repeat of slide 1)]`

**Time picker sub-section:**  
**Content:**
> Another pattern that made it into the design system: a smoother, faster, more forgiving time-input for medication. With no strong examples in external systems and static mocks falling flat, I put together a quick prototype for the team to try.

**Prototype link:**  
`[LINK: Time picker prototype → https://1xe7ex.axshare.com/]`

---

### 22. THE UNSAID LEGACY ATTRACTION — SYNTHETIC PATIENTS

**Type:** Body text + image  
**Heading:** The Unsaid Legacy Attraction — From Custom Code Workaround to Core Feature

**Content:**
> While exploring potential pitfalls of an autosave-to-draft idea, I accidentally uncovered a deeper migration risk. Rave Classic let study builders custom-code features outside the core product. Like Figma plugins, these extensions expanded the platform in ways we couldn't track, leaving us blind to what existed or how widely it was used.
>
> One such extension surfaced during interviews: dummy patients. Site staff needed to preview forms and study builders or DM wanted to run UAT to check and verify dynamically generated fields within the forms before the first live patient started. Without it, problems in the study could go unnoticed and take months to resolve. Only the most well-resourced studies hacked a solution. Others refused to upgrade from Classic entirely. Populating multiple forms with realistic data for a single patient could take weeks or months.

**Placeholder:** `[IMAGE: synthetic-patients.jpg — 763×474px, dummy patient / UAT feature context]`

**Content continued:**
> That conversation became one of the value propositions when a Data Scientist realised they could create Synthetic Patient data, transforming an unofficial workaround into a proper product capability using AI to generate realistic historical patient data. The next release will cover the parameters users would like to control what's generated.

---

### 23. DISCOVERING A ROOT PROBLEM

**Type:** Body text + image carousel  
**Heading:** Discovering a Root Problem from Various Symptoms — How Unresolvable Queries Undermine Trust and Data Integrity Across Clinical Teams

**Content:**
> I began to notice a fundamental system flaw showing up in my own as well as other designers' user calls. The platform treated 'not yet available' data the same as 'missing' data. Take drug returns: when patients are given medication, they must bring back any unused study doses at their next visit, which might not happen for weeks or months. The system didn't account for that. It immediately flagged those fields as queries, creating alerts no one could honestly resolve.
>
> To cope, users entered junk data to clear these query alerts temporarily from the system. If they didn't, these queries would clog up task lists across EDC, Clinical Data Studio, and the Homepage, inflating counts and eroding trust in the whole ecosystem — but the junk data could also be forgotten. Losing accuracy. I mapped the impact and escalated it, showing that a UI patch wouldn't fix a system-level issue. That work was brought to the attention of Design VP and manager to secure a proper future root-cause fix to handle deferred queries and finally stop penalising users for real-world delays.

**Component needed:** `<Carousel>` — 2 slides  
**Caption:** Visual presentation of the lack of trust and accuracy. A problem to help communicate the issue across different teams.  
**Placeholders:**
- `[IMAGE: root-problem-01.webp — 980×733px]`
- `[IMAGE: root-problem-02.webp — 980×842px]`

---

### 24. CANDID REFLECTIONS

**Type:** Body text  
**Heading:** Candid Reflections

**Content:**
> My first redesign was tough. Priorities shifted, people moved on, and cross-product dependencies kept growing, so progress often felt slow. It was also my first time working on a high-risk product with a two-year timeline, where backend mistakes or bugs could cost Medidata a million dollars a day in client penalties. I was always aware of that pressure, so that's why I made sure engineering had the time and clarity they needed to plan and deliver.
>
> Coordinating multiple roadmaps meant revisiting earlier work, juggling backup designs, and balancing other projects at the same time. Maintaining enthusiasm and managing tension was challenging, especially since we were used to working on shorter projects. I learned when to push with evidence and when to let go, what truly mattered and why. What a foundational release really meant, and how tricky prioritisation can be when trying to keep people focused. Since launch, early client feedback has been positive, and the effort has been worth it.

---

### 25. FOOTER — OTHER CASE STUDIES PEEK GRID

**Type:** Hover-reveal thumbnail grid  
**Heading:** You can hover to take a sneak peek 👀 or use my password on restricted cases.

**Component needed:** `<PeekGrid>` — 9 thumbnails in a grid (3×3), each with hover reveal  
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

**Notes:** Each thumbnail links to a case study. Hover shows a slightly enlarged or labelled preview. Confirm which case study each thumbnail links to with Lesley.

---

## Component Summary

| Component | Count | Notes |
|---|---|---|
| `<Carousel>` | 6 | Outcomes (3 slides), Personas (2), Engineering (4), Deep Dive 01 (2), Deep Dive 02 (4), Root Problem (2) |
| `<HoverReveal>` | 4 | Loom thumbnail, System maps, Concept experiments, Peek grid items |
| `<AudioPlayer>` | 1 | NotebookLM podcast, 14:16 |
| `<IconRow>` | 1 | 14 tool logos |
| `<PeekGrid>` | 1 | 9 thumbnails, 3×3, hover interaction |
| In-page anchor links | 4 | Deep dive quick links in HMW section |
| External prototype links | 2 | Lovable (patient filter), Axure (time picker) |

---

## Images to Source / Export from Wix

All images currently hosted on Wix static CDN. Export before migrating:

| Filename (suggested) | Current Wix URL fragment | Dimensions |
|---|---|---|
| hero-banner.jpg | d0fd9709... | 980×245 |
| problem-snapshot.jpg | 63076d0d... | 730×410 |
| research-loom-thumbnail.webp | 9c4e006a... | 537×343 |
| outcomes-slide-1.png | 019657d4... | 980×590 |
| outcomes-slide-2.png | d2621156... | 980×486 |
| outcomes-slide-3.png | 2138797e... | 980×639 |
| stakeholder-interviews.jpg | a6ef8603... | 922×518 |
| system-maps.jpg | da18d7b5... | 874×491 |
| personas-overview-1.webp | 7daf963d... | 980×988 |
| personas-overview-2.webp | 6c256d23... | 980×878 |
| engineering-collab-1.webp | 1d40afbf... | 980×590 |
| engineering-collab-2.webp | a991c7e3... | 980×657 |
| engineering-collab-3.png | 13193855... | 980×450 |
| deep-dive-01-a.webp | c3703b79... | 980×560 |
| deep-dive-01-b.webp | ed434a26... | 980×612 |
| before-patient-details.jpg | d90d07e8... | 848×504 |
| after-patient-details.jpg | cccb70ea... | 913×587 |
| research-guidelines-1.png | 69ab1697... | 430×430 |
| competitor-screenshots.webp | aaa7ea8b... | 430×430 |
| design-system-loading.jpg | 42b48df7... | 554×373 |
| lovable-experimental.jpg | 7112c52f... | 836×533 |
| final-design-01.webp | 8374dedc... | 980×608 |
| final-design-02.webp | 17355640... | 980×561 |
| final-design-03.webp | 40992f37... | 980×518 |
| synthetic-patients.jpg | 4d846f93... | 763×474 |
| root-problem-01.webp | c89e009b... | 980×733 |
| root-problem-02.webp | 66793024... | 980×842 |
| peek-thumb-1 through 9 | various | ~317×316 each |

**To export:** Open each Wix image URL directly and save, or use a browser extension to batch-download from the Wix CDN before the migration.

---

## Open Questions for Lesley

- [ ] What does the Loom hover reveal? A play button that opens Loom, or an embedded preview?
- [ ] What does the system maps hover reveal? A second image, a zoomed view, or a modal?
- [ ] What does the concept experiments hover reveal? Inline expansion or a lightbox?
- [ ] Which case study does each of the 9 peek grid thumbnails link to?
- [ ] Do you have the NotebookLM podcast as a downloadable audio file, or does it need re-exporting?
- [ ] Confirm the Loom video URL for the research themes 10-minute walkthrough.
- [ ] Do the "What I Did" tags need to be anchor links, or can they be static?
