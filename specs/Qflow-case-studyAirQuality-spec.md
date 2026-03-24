# Qualis Flow Air Quality Case Study — Component & Content Spec
## lrooney.com/contech-qflow

This document maps every section of the current Wix page into components and media placeholders for the Netlify rebuild. Use it as the build brief.

---

## Page Sections (in order)

---

### 1. HERO IMAGE

**Type:** Full-width image  
**Current dimensions:** 872×581px  
**Placeholder:** `[IMAGE: qflow-hero.jpg — construction site or air quality context, 872×581px]`  
**Notes:** Sits above the page title. Larger and more portrait-oriented than the EDC hero — check layout approach for consistency across case studies.

---

### 2. PAGE TITLE & INTRO

**Type:** H2 text + intro paragraph  
**Heading:** THE QUALITY OF AIR AROUND CONSTRUCTION SITES

**Intro:**
> This project taught me to balance bold visions with resource reality. While the goal was to use AI to automate manual work, the lesson was in 'failing fast' to protect the company's runway. I now focus on finding pragmatic paths that deliver value while keeping a close eye on indirect competitors.

---

### 3. HERO GIF (AIR QUALITY UI)

**Type:** Animated GIF  
**Placeholder:** `[GIF: air-quality-ui.gif — Qflow air quality interface animation]`  
**Caption below:** Displaying air quality with empty state work packages (Gantt chart) below.  
**Notes:** This GIF appears twice on the page (also in the predictive feature section). Export once, reference twice. It's a key showpiece — make sure it autoplays and loops.

---

### 4. WHAT IS QFLOW AND ITS VISION?

**Type:** Body text  
**Heading:** Air Quality Opportunity — What is Qflow and Its Vision?

**Content:**
> Qualis Flow is a SaaS platform that uses AI to tackle environmental risks on construction projects. It pulls data from devices so teams can track, predict, and analyse issues in real time, helping them stay compliant, avoiding fines while protecting the environment. Built for environmental consultants and project managers, it makes handling compliance on mega projects simpler and more efficient.
>
> Environmental consultants used to spend days manually pulling data from air quality sensors, a workload that was increasing due to large construction project demands. By the time they imported everything into Power BI for stakeholder meetings, the process had taken so long that teams were stuck reacting to pollution breaches instead of getting ahead of them.
>
> Qflow's Air Quality module automatically aggregates sensor data and will use AI trained on historical readings to predict pollutant behaviour based on construction schedules. This lets project managers tweak their plans and immediately see any risks ahead, turning compliance from a hassle into a strategic advantage.
>
> The company already had a client lined up to test the product on a major project where pollution breaches were a constant problem. With small competition in this niche sector and the potential for big financial gains, our focus was on building a real-time, scalable solution that could serve multiple clients.

---

### 5. MY ROLE

**Type:** Body text  
**Heading:** My Role

**Content:**
> Sole UX/UI designer in an agile start-up, responsible for delivering a 0→1 end-to-end product from discovery through to handover.
>
> I quickly got up to speed through site visits, customer interviews, and observing real environmental workflows. Observing users' tools, workarounds, and frustrations firsthand to clarify problems the company needed to solve. I worked closely with the founders — an ex-environmental manager and a civil engineer — using their expertise to ask sharper questions while keeping a beginner's mindset so I could challenge assumptions rather than inherit them.
>
> Highlighted insights were pulled into videos, audio clips, and customer journey maps, which helped the whole team step into the customer's world and get aligned on which MVPs to prioritise.

**Component needed:** `<LightboxGallery>` or `<ZoomableImage>` — 2 images with "press to zoom" interaction  
**Placeholders:**
- `[IMAGE: my-role-01.png — 980×644px, press to zoom]`
- `[IMAGE: my-role-02.jpg — 594×358px, press to zoom]`

**Notes:** Wix used a "Show More" expand on this gallery. On the new site a lightbox or zoomable modal achieves the same result.

---

### 6. WHAT I DID

**Type:** Two-column list  
**Heading:** What I Did

**Column 1:**
- Observational research
- Competitive analysis
- Customer & stakeholder interviews
- 1+1 plus remote & on-site testing
- Active listening
- Sketching, wireframes
- Sitemaps
- Iterations

**Column 2:**
- Visual design
- Component Library
- Design system creation (Zero Heights)
- Illustrations
- Iconography
- Interactive patterns
- Customer feedback
- Mixpanel
- Marketing material and consultation

**Notes:** On Wix some items were anchor links. On new site, style as a two-column tag list or plain list. Confirm with Lesley which (if any) should be anchor links.

---

### 7. TEAM

**Type:** Text block  
**Heading:** Team

- 2 Founders (Ex-environmental consultant & civil engineer)
- 1 CTO / backend engineer
- 1 Product owner
- 2 Engineers (back and front end)
- 1 Tester
- 1 Lead Engineer (joined later)

---

### 8. DURATION

**Type:** Text  
**Content:** ~5 months

---

### 9. TOOLS USED

**Type:** Icon row  
**Component needed:** `<IconRow>` — horizontally scrollable or wrapping grid of tool logos with labels

Tools to include:
- Pen & paper
- Sketch
- Photoshop
- Confluence
- Zoom
- Zeplin
- Mixpanel
- Principle
- Screenflow
- Miro
- QuickTime
- Teams
- Zeroheights
- Storybook

**Placeholders:** `[ICON: sketch.svg]` `[ICON: zeplin.svg]` `[ICON: mixpanel.svg]` etc.  
**Notes:** Different tool set from EDC — no Figma here (this predates it). Use official SVG logos where available.

**Caption below tools:**
> Below: Email illustrations inspired by a brainstorming session with the product owner and founder.

*(This caption sits below the tools section in the Wix layout — it refers to illustrations shown later. Consider whether to move it closer to the illustrations in the new layout.)*

---

### 10. OUTCOMES

**Type:** Bullet list + image  
**Heading:** The Outcomes That Redirected but Defined the Future

**Content:**
- We launched the MVP just in time for a client pilot. Aimed at improving air quality monitoring on a complex project with 30+ sensors and multiple stakeholders. Full disclosure: the client didn't convert — you can read more about that [link to Candid Reflections section].
- The app generated data for Qflow's training model, improving clarity on sensor activity and machine learning capabilities.
- Research with piloting clients showed limited resources to reach product–market fit, prompting a pivot toward new growth areas. With only five months of runway, this helped clarify Qflow's direction.
- Validated the benefits of rapid prototyping to define a solid MVP.
- Established Qflow's first design system for a scalable framework and direction for other modules/applications.

**Caption below outcomes:**
> Below: Customer journey map illustrating the actions needed to gather data and produce a report; including time, external software (Power BI), and quotes with main goals on each step.

**Placeholder:** `[IMAGE: customer-journey-map.jpg — 980×551px, full customer journey map]`

---

### 11. KEY FINDINGS — TURNING SENSOR CHAOS INTO CLEAR ACTIONS

**Type:** Body text + bullet list  
**Heading:** Turning Sensor Chaos into Clear Actions

**Intro:** Additional key findings included:

**Findings list:**
- Environmental consultants received email alerts containing the sensor manufacturer's time, location, and pollutant (gas) exceedance information. Still, they needed to see the pollutant behaviour, deduce the cause and reduce hours downloading the data from the sensors.
- They valued visualisations for quick insights in stakeholder meetings, but still needed access to the underlying accurate data — for example, meetings often focused on just 2 pages of a 90-page report because they had graphs.
- Have the freedom to view multiple pollutant gases, sensors, and other data sources for comparison, speed, and efficiency.
- Easy to use and trustworthy against its competitors.
- Cope with increasingly complex infrastructure projects, measuring multiple gases with many sensors and manufacturers.
- Thresholds could be adjusted according to the users' needs or government standards.
- Be predictive, anticipate issues, and see trends (machine learning).
- Monitor the system at any time, not always during an exceedance issue.

**MVP focus:**

Building an MVP meant focusing on what mattered most:
- Fast, responsive access to sensor APIs
- Smart caching and quick loading
- GPS-enabled mapping to pinpoint issues

All while managing tight deadlines, shifting terminology, and limited domain knowledge.

---

### 12. THE WORK TOWARDS SOLUTIONS — WEB INSPIRATION

**Type:** Body text + GIF grid  
**Heading:** The Work Towards Solutions

**Intro questions:**
> - What's the best way to handle multiple data topics for comparison on the same graph?
> - What can Qflow realistically do for version 1 release?

**Caption:** Below: Web-based data visualization example from various sites

**Component needed:** `<GifGrid>` — 4 animated GIFs in a 2×2 or horizontal row  
**Placeholders:**
- `[GIF: web-inspo-01.gif — 626×418px, data viz inspiration]`
- `[GIF: web-inspo-02.gif — 640×450px, data viz inspiration]`
- `[GIF: web-inspo-03.gif — 560×394px, data viz inspiration]`
- `[GIF: web-inspo-04.gif — 576×324px, data viz inspiration]`

**Notes:** All four are animated GIFs. They should autoplay and loop. This is a mood/inspiration section, not final product screens.

---

### 13. WORKSHOP & SCOPING

**Type:** GIF + image  
**Caption above GIF:** Below: Early workshop discussion with all stakeholders using MoSCoW and service blueprint to highlight Qflow's resources, how the service would be delivered and a realistic scope.

**Placeholder:** `[GIF: moscow-workshop.gif — 980×315px, workshop/service blueprint]`

**Caption above sketches:** Below: Early sketch ideas detailing different data comparison ideas and how they might be visualized

**Placeholder:** `[IMAGE: early-sketches.jpg — 977×649px, notebook sketches of data comparison ideas]`

**Caption above wireframes:** Below: Low fidelity layout test, working through ideas such as air monitors GPS or grouping configuration controls to filter through the data and compare construction work throughout the area.

**Component needed:** `<ShowMoreGallery>` — image(s) with expand/collapse (Wix used "Show More")  
**Placeholder:** `[IMAGE: lo-fi-wireframes.png — 980×789px, low fidelity layout sketches]`

---

### 14. EARLY PROTOTYPE — HOVER INTERACTION

**Type:** Interactive hover image  
**Caption:**
> 👉🏽 Below: Hover the image below to see early prototype ideas for pollutant behaviour, sensor mapping, and the time slider. Designed to handle up to 12 pollutants and 3 data feeds per sensor to ensure scalability from small sites to mega projects.

**Component needed:** `<HoverReveal>`  
**Placeholder:** `[IMAGE: early-prototype-hover.jpg — 960×538px, hover reveals prototype screens for pollutant behaviour, sensor mapping, time slider]`

**Body text below:**
> Design experiments tested extreme cases — 12 pollutants and 3 feeds per sensor — to ensure scalability for both mega projects and smaller companies.
>
> The following displays pollutant data across multiple monitors with staggered loading to test API behaviour and timing. The goal was to challenge early-stage ideas, like the exceedance feature, which highlighted monitors exceeding limits using colour-coded IDs linked to the visual guide above. While not ideal for colourblind users, it sparked useful discussion. The client especially liked the exceedance part: "I would keep this feature on at all times" to spot issues at a glance.

**Placeholder:** `[GIF: exceedance-experiment.gif — exceedance feature experiment with staggered loading]`  
**Notes:** The GIF filename is ExceednaceExperiment01DONE.gif on Wix (note the typo in the original). Export and rename to exceedance-experiment.gif.

---

### 15. SCOPE & TIERED IMPLEMENTATION

**Type:** Body text + image + GIF  
**Content:**
> Scope creep led to tiered implementation — skimmed, semi-skimmed, and full-fat — to ensure delivery, delaying some features until post-launch. By designing complete user flows and edge cases upfront, I aimed to future-proof the product beyond the MVP.

**Placeholder:** `[IMAGE: browser-divider.jpg — 980×72px, Firefox Quantum dark browser bar used as visual divider]`  
**Notes:** This is a thin decorative strip (72px tall) used as a section divider. On the new site, replace with a CSS divider or styled `<hr>` unless Lesley wants to keep the browser chrome aesthetic.

**Placeholder:** `[GIF: past-prototypes.gif — prototype iteration history/montage]`

**Caption:**
> Hover function idea reveals monitor/sensors and their data lines.
> Suggested by the CTO after a show-and-tell, the hover feature was designed to distinguish multiple data lines without confusing accurate data viewing with Gantt chart filtering.

---

### 16. GANTT CHART FEATURE

**Type:** Body text + image  
**Heading:** Programme Gantt Chart Feature

**Content:**
> We tested comparing construction data — like work packages and traffic — against pollutant behavior. The Gantt chart concept seemed tricky technically, so I suggested having users upload data manually instead of relying on Qflow automation. Not ideal, but engineering built a quick Excel upload hack. With a "let's try it" mindset, we tracked usage in Mixpanel to see if it was worth pursuing further.

**Placeholder:** `[IMAGE: gantt-chart-feature.jpg — 977×549px, Gantt chart / work packages feature]`

---

### 17. PREDICTIVE FEATURE

**Type:** Body text + GIF  
**Caption:** Below: Figuring out the predictive feature

**Component needed:** `<HoverReveal>` (there's an SVG/interactive element here in the Wix layout)  
**Placeholder:** `[INTERACTIVE or IMAGE: predictive-feature — hover reveals predictive AI design exploration]`

**Heading:** The Use of AI

**Content:**
> The predictive feature lets users forecast pollutant behaviour based on historical information and adjust work packages to visualise potential risks within defined confidence ranges.

**Placeholder (repeat GIF):** `[GIF: air-quality-ui.gif — same as section 3, showing predictive UI in context]`  
**Notes:** This is the same Librem-13SmlTRANS.gif used in the hero. Reference the same file rather than duplicating.

**Sub-section — Updating the exceedance feature:**
> Clients wanted a search for sensors, but since their main goal was finding exceedances above specific monitors, I brainstormed with the lead developer, and we came up with a feasible alternative — a simple checkbox to highlight them.

**Caption:**
> Below: Introducing animation as a quick walkthrough technique to grab the user's attention when initially opening up air quality.

*(Note: The animation itself is referenced in the Wix layout here but the file wasn't captured in the page scrape. Confirm with Lesley whether this is a separate GIF or the same air quality UI animation.)*

---

### 18. USABILITY STUDY

**Type:** Body text + image + hover audio interaction  
**Heading:** Usability Study

**Content:**
> Final quick usability testing to reevaluate five key assumptions and uncover usability issues early. Rapid prototyping iterations ran throughout the week with nine target users (four recorded), one guerrilla session, and five in-house team members, ensuring diverse perspectives. Each 20-minute session provided valuable insights into current practices and indirect competitors.

**Placeholder:** `[IMAGE: usability-testing.jpg — 979×547px, usability testing session photos or notes]`

**Component needed:** `<HoverAudio>` — static image that triggers audio on hover  
**Caption:**
> 🔉 Below: Hover over the image below to hear environmental consultants discuss how they use data in their work (2 mins).

**Placeholder:** `[IMAGE + AUDIO: consultants-audio-thumb.jpg — hover plays 2-min audio clip of environmental consultants]`  
**Notes:** Same hover-to-audio pattern used in the Candid Reflections section too (see below). This needs a consistent component — on hover, play audio or reveal an audio player. Confirm audio file format and source with Lesley.

---

### 19. CANDID REFLECTIONS

**Type:** Body text + hover audio + GIF  
**Heading:** Candid Reflections, Competitors & What I've Learned

**Component needed:** `<HoverAudio>`  
**Caption:**
> 🔉 Below: Hover over the image to hear a 2-minute snippet on Power BI trends impacting Qflow business direction.

**Placeholder:** `[IMAGE + AUDIO: powerbi-trends-thumb.jpg — 896×261px, hover plays 2-min audio on Power BI competition]`

**Placeholder:** `[GIF: pilot-usage-graph.gif — in-product graph visualisation from 3-month client pilot, showing usage peaks]`

**Caption above GIF:**
> Below: A snippet of the actual in-product graph visualisation used during the client's 3-month pilot. Usage peaked in the first 2 months but tailed off as the client didn't have that vital component of the threshold line on the graph. What could be monitored was the evidence of how many times the client actually monitored sensors, and if it aligned with the sensor emails of exceedance alerts — the company had API data to compare. That way, they could prove what the user actually did versus what they said they did.

**Reflections body text:**
> Throughout the project — and increasingly toward the end — I noticed an emerging trend within the research: specialists were funding their own Power BI training, making it a formidable direct competitor within potential clients' existing Microsoft environments. This pattern accelerated across sectors like waste collection and material delivery, where robust data visualisation proved too valuable to ignore.
>
> The pilot revealed tough market truths. The client didn't convert after the trial — they could hire a junior analyst with BI training for less than Qflow's subscription. Without the promised advanced AI forecasting feature integrated with construction work schedules and the exceedance threshold line still undeveloped (scheduled for the next release), the company couldn't justify a resource-heavy push based on a single client's commitment.
>
> When COVID-19 hit, Qflow quickly pivoted to focus on AI and ML for more attainable and successful modules already in the field. Integrating Power BI API to work with clients' existing tools, rather than competing against them.
>
> Not everything was lost — the app provided valuable usage insights that became great training material. As a designer, I learned how good research can save a company time and money, showing that without the resources to build something truly different, you risk creating a product no one wants — like offering a skateboard when they're after a car. 🛹 🚲 🛵 🚙

---

### 20. NEXT — DESIGN SYSTEM & OTHER MODULES

**Type:** Body text + GIF gallery + image  
**Heading:** Next

**Content:**
> Air Quality required unique UI components to address user needs, whereas other products — such as Waste and Materials — followed a more CRUD-based (create, read, update, and delete) approach, utilising Material Design principles. Collaborating with the product owner & engineers, we scaled these modules beyond MVP toward an enterprise-level system.
>
> I created Qflow's first unified design system with consistent patterns, visual language, and reusable components. Integrated with Storybook, it documented UI behaviour, animation, illustration, branding, and accessibility — helping engineers standardise capabilities, speed up implementation, and support skill expansion for those seeking full-stack experience. Below you'll see examples as well as contributions I made to their early marketing materials.

**Caption:**
> Below: 404 illustration replacing my earlier rough draft for quicker implementation.

*(Note: The 404 illustration SVGs are referenced in the Wix layout but weren't captured in the scrape. Confirm with Lesley whether these are static SVG files or animated.)*  
**Placeholder:** `[SVG/IMAGE: 404-illustration — Qflow 404 page illustration(s)]`

---

### 21. DESIGN SYSTEM GALLERY

**Type:** GIF gallery with zoom/lightbox  
**Component needed:** `<LightboxGallery>` — 6 items, each "press to zoom"

**Placeholders:**
- `[GIF: design-system-colours.gif — 980×687px, labelled "Qflow colours"]`
- `[GIF: design-system-illustrations.gif — 980×751px, labelled "Guide to illustrations"]`
- `[GIF: design-system-modals.gif — 980×692px, labelled "Modals Dos and Don'ts"]`
- `[GIF: design-system-iconography.gif — 980×760px, labelled "Iconography"]`
- `[GIF: design-system-full.gif — 980×1483px, unlabelled, full design system overview]`
- `[GIF: sketch-style-guide.gif — 980×758px, labelled "Sketch Style guide"]`

**Notes:** All six are animated GIFs with press-to-zoom. The lightbox should display them at full size. The 980×1483 item is very tall — consider whether to show full height or crop with a scroll interaction.

---

### 22. COMPONENT PARTS / ICONOLOGY

**Type:** Image + icon showcase  
**Heading:** Component Parts — Iconology

**Component needed:** `<Carousel>` or side-by-side — 2 slides  
**Placeholders:**
- `[IMAGE: component-parts-iconology.jpg — 978×612px, icon set and component examples]`
- *(second image appears to be a repeat — confirm with Lesley)*

---

### 23. MARKETING MATERIAL

**Type:** Image pair  
**Heading:** Some Marketing Material

**Caption:**
> Below: First time doing marketing — but hey, it's a startup, we all wear many hats! Judge the results below.

**Placeholders:**
- `[IMAGE: marketing-01.png — 770×425px, cropped from 642×355 source, social/marketing asset]`
- `[IMAGE: marketing-02.jpg — 515×646px, marketing material portrait format]`

---

### 24. TEAM PHOTOS

**Type:** Image grid  
**Caption:** Below: Some early team photos

**Component needed:** `<PhotoGrid>` — 3 square team photos  
**Placeholders:**
- `[IMAGE: team-photo-1.jpg — 313×313px]`
- `[IMAGE: team-photo-2.jpg — 313×313px]`
- `[IMAGE: team-photo-3.jpg — 313×313px]`

---

### 25. FOOTER — OTHER CASE STUDIES PEEK GRID

**Type:** Hover-reveal thumbnail grid  
**Component needed:** `<PeekGrid>` — same component as EDC page, 11 thumbnails  
**Notes:** This footer grid is larger than the EDC one (11 thumbnails vs 9). Confirm whether this is intentional or an artefact of Wix reordering. Some thumbnails appear shared between pages.

**Placeholders:**
- `[IMAGE: peek-thumb-1.jpg — 317×316px]`
- `[IMAGE: peek-thumb-2.jpg — 317×316px]`
- `[IMAGE: peek-thumb-3.png — 316×316px]`
- `[IMAGE: peek-thumb-4.jpg — 317×316px]`
- `[IMAGE: peek-thumb-5.jpg — 317×316px]`
- `[IMAGE: peek-thumb-6.png — 316×316px]`
- `[IMAGE: peek-thumb-7.jpg — 317×316px]`
- `[IMAGE: peek-thumb-8.png — 316×316px]`
- `[IMAGE: peek-thumb-9.jpg — 317×316px]`
- `[IMAGE: peek-thumb-10.jpg — 317×316px]`
- `[IMAGE: peek-thumb-11.jpg — 316×316px]`

---

## Component Summary

| Component | Count | Notes |
|---|---|---|
| `<HoverReveal>` | 2 | Early prototype (section 14), Predictive feature (section 17) |
| `<HoverAudio>` | 2 | Consultants audio (section 18), Power BI trends audio (section 19) — **new component, not in EDC spec** |
| `<LightboxGallery>` | 2 | My Role zoom images (section 5), Design System GIFs (section 21) |
| `<GifGrid>` | 1 | Web inspiration GIFs (section 12) — autoplay, loop |
| `<ShowMoreGallery>` | 1 | Lo-fi wireframes (section 13) — expand/collapse |
| `<Carousel>` | 1 | Component parts / iconology (section 22) |
| `<IconRow>` | 1 | 14 tool logos (section 9) |
| `<PhotoGrid>` | 1 | 3 team photos (section 24) |
| `<PeekGrid>` | 1 | 11 thumbnails footer (section 25) — same component as EDC, different count |
| Animated GIFs (standalone) | 5+ | air-quality-ui.gif (×2), exceedance-experiment.gif, past-prototypes.gif, pilot-usage-graph.gif |

---

## New Component vs EDC Spec

One component type appears here that wasn't in the EDC spec:

**`<HoverAudio>`** — an image thumbnail that triggers audio playback on hover. Used twice (sections 18 and 19). This needs its own component with:
- A static image
- A hover state that either plays audio inline or reveals an `<audio>` player
- A visual indicator (e.g. 🔉 icon or waveform) so users know it's interactive

Build this as a shared component — it could also be useful for the EDC Loom hover if that ends up using audio rather than video.

---

## Media Types Summary

This page is significantly more GIF-heavy than the EDC case study. Notable difference from EDC:

| Type | Count |
|---|---|
| Static images (jpg/png) | ~12 |
| Animated GIFs | ~10 |
| Audio clips | 2 |
| Interactive hover elements | 4 |

Make sure GIF performance is handled on the new site — consider `loading="lazy"` and check file sizes before deploying.

---

## Images & GIFs to Export from Wix

| Filename (suggested) | Wix URL fragment | Dimensions | Type |
|---|---|---|---|
| qflow-hero.jpg | 6f6a6768... | 872×581 | jpg |
| air-quality-ui.gif | 8ffb3e25... | — | gif (used ×2) |
| my-role-01.png | 80122494... | 980×644 | png |
| my-role-02.jpg | 4afad6e9... | 594×358 | jpg |
| customer-journey-map.jpg | 30f95a33... | 980×551 | jpg |
| web-inspo-01.gif | 75b40aeb... | 626×418 | gif |
| web-inspo-02.gif | 98eca3e6... | 640×450 | gif |
| web-inspo-03.gif | 554d0f01... | 560×394 | gif |
| web-inspo-04.gif | 07eb3bac... | 576×324 | gif |
| moscow-workshop.gif | 38df96d1... | 980×315 | gif |
| early-sketches.jpg | notesADS... | 977×649 | jpg |
| lo-fi-wireframes.png | d1bfdd4b... | 980×789 | png |
| early-prototype-hover.jpg | e1fff538... | 960×538 | jpg |
| exceedance-experiment.gif | e3ed8d66... | — | gif |
| browser-divider.jpg | 19c93070... | 980×72 | jpg (or replace with CSS) |
| past-prototypes.gif | 507d4807... | — | gif |
| gantt-chart-feature.jpg | edc96f8e... | 977×549 | jpg |
| usability-testing.jpg | 69682069... | 979×547 | jpg |
| powerbi-trends-thumb.jpg | 62204f70... | 896×261 | jpg |
| pilot-usage-graph.gif | b189a12b... | — | gif |
| design-system-colours.gif | 179e935e... | 980×687 | gif |
| design-system-illustrations.gif | d7cee8a7... | 980×751 | gif |
| design-system-modals.gif | 6009a552... | 980×692 | gif |
| design-system-iconography.gif | c7b08d4f... | 980×760 | gif |
| design-system-full.gif | 5c1d6a5f... | 980×1483 | gif |
| sketch-style-guide.gif | 52f4e537... | 980×758 | gif |
| component-parts-iconology.jpg | cb374761... | 978×612 | jpg |
| marketing-01.png | 9370aa89... | 770×425 | png |
| marketing-02.jpg | ee4df31c... | 515×646 | jpg |
| team-photo-1.jpg | b2b40bf0... | 313×313 | jpg |
| team-photo-2.jpg | 3c3bb5e2... | 313×313 | jpg |
| team-photo-3.jpg | b4f86cb2... | 313×313 | jpg |

---

## Open Questions for Lesley

- [ ] The hover-to-audio clips in sections 18 and 19 — are these hosted somewhere (SoundCloud, direct file)? What format?
- [ ] Section 17 (predictive feature) — is there a separate animation GIF for "introducing animation as a walkthrough technique" or is it the same air-quality-ui.gif?
- [ ] The 404 illustrations referenced before the design system gallery — are these SVG files you have, or are they within the design system GIFs?
- [ ] The `<HoverReveal>` on section 14 (early prototype) — what does it reveal? A second image, a Figma link, or a video?
- [ ] The browser chrome divider image (980×72px) — keep as an image asset or replace with a CSS styled divider?
- [ ] Design system gallery item 5 (980×1483px tall GIF) — display full height with scroll, or crop with a "show more" toggle?
- [ ] Component parts section — is the second image a repeat of the first, or a different screen?
- [ ] Footer peek grid — 11 thumbnails here vs 9 on EDC. Is this intentional, or should both be consistent?
- [ ] Confirm which peek grid thumbnails link to which case studies (some thumbnails appear shared between EDC and Qflow footer grids).
