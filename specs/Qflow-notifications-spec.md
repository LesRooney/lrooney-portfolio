# Qualis Flow — Materials & Waste Risk Notifications — Component & Content Spec
## lrooney.com/qualisflow-02

This document maps every section of the current Wix page into components and media placeholders for the Netlify rebuild. Use it as the build brief.

---

## Notes Before You Build

This is the shortest of the three case studies — fewer sections, fewer interactive components, and no audio. It's more of a design showcase than a deep narrative dive. The main complexity is the repeated use of a laptop/browser frame image (`Librem 13Sml.png`) as a UI presentation device, and a mix of static screens + animated GIFs showing final navigation flows.

There's also a small but notable bug to be aware of: the `Corrrect@2x.png` image (note the typo in the original filename) renders at only 20×20px on the Wix page. It appears to be a decorative tick/checkmark icon used as a visual bullet. It's functionally an icon, not a real image — replace with a proper `✓` or styled icon component on the new site.

---

## Page Sections (in order)

---

### 1. HERO IMAGE

**Type:** Full-width image  
**Current dimensions:** 768×432px  
**Placeholder:** `[IMAGE: qflow-02-hero.jpg — construction context or notifications UI, 768×432px]`  
**Notes:** Smaller than the other two hero images (both were wider). Check for layout consistency across case studies.

---

### 2. PAGE TITLE

**Type:** H2  
**Content:** MATERIALS & WASTE RISK NOTIFICATIONS

---

### 3. HEADER ILLUSTRATION

**Type:** Wide illustration  
**Caption above:**
> Below: Illustration I created in Sketch, to communicate non-compliant products and environmental issues within constructions.

**Placeholder:** `[IMAGE: notifications-illustration.png — 980×318px, custom illustration of non-compliant materials/environmental issues, created in Sketch]`  
**Notes:** This is original illustration work by Lesley, not a screenshot. Treat with care — it's a portfolio piece in itself.

---

### 4. WHAT IS QFLOW?

**Type:** Body text  
**Heading:** What is Qflow?

**Content:**
> Qualis Flow is an environmental management platform that holistically tracks, monitors and predicts construction projects environmental risk.

---

### 5. ACTIVITIES

**Type:** Single-column list  
**Heading:** Activities

- Observational research
- Customer & stakeholder interviews
- Remote user testing
- Internal testing
- Active listening
- Sketching
- Wireframes
- Information Architecture
- Iterations
- Component Library
- Illustrations *(link to Qflow air quality page)*
- Interactive patterns
- Customer feedback
- Mixpanel *(link to Qflow air quality page)*

**Notes:** Two items (Illustrations, Mixpanel) are linked to the air quality case study on the Wix site. On the new site, decide whether to keep these cross-links or make them plain text. This is a single list unlike the two-column layout used on the air quality page.

---

### 6. TEAM

**Type:** Text block  
**Heading:** Team

- 2 Founders (Ex-environmental consultant & civil engineer)
- 1 CTO / backend engineer
- 1 Product owner
- 2 Engineers (back and front end)
- Sole Product Designer (Me)
- 1 Tester
- 1 Lead Engineer (joined later)

**Notes:** Identical team to the air quality case study with one addition: "Sole Product Designer (Me)" is explicitly called out here. This is consistent with the 0→1 founding designer framing.

---

### 7. DURATION

**Type:** Text  
**Content:** ~6 months

---

### 8. TOOLS

**Type:** Icon row  
**Heading:** Tools  
**Component needed:** `<IconRow>`

Tools visible in the Wix layout (some icons rendered as SVG, some as text labels):
- Pen & paper
- Sketch
- Principle
- Zeplin
- Miro
- Screen Flow
- Zoom
- QuickTime

**Placeholders:** `[ICON: sketch.svg]` `[ICON: principle.svg]` `[ICON: zeplin.svg]` etc.  
**Notes:** Smaller tool set than the air quality case study — no Storybook, Zeroheights, Confluence, or Mixpanel listed here in the tools row (though Mixpanel appears in the Activities list). Some Wix icon slots appeared empty or broken in the scrape — confirm the full tool list with Lesley.

---

### 9. RESULTS

**Type:** Bullet list  
**Heading:** Results

- A scalable design framework pattern that could be re-used for all products.
- Increased engagement with customers.
- Helped founders envision tangible solutions to the complex construction site organisations and permissions.

---

### 10. INDUSTRY CHALLENGES

**Type:** Body text + bullet list  
**Heading:** Industry Challenges — The problem with non-compliant materials in construction.

**Content:**
> One of a few propositions of Qflow's software as a service platform is to give environment managers the ability to keep on top of any triggered alert from Qflow's mobile app collecting data, as real-time as possible across all projects they oversaw. Any data from scanned tickets or API integration is needed to notify users of government compliance issues, helping managers to report, investigate, and rectify quickly. The reasons behind these needs were to:

**List:**
- Reduce accidental installation of non-compliant building material that could forcibly be ripped out, incurring costs.
- Avoid financial penalties.
- Save time and be ready to cope with government audits.
- Avoid delays or closures.
- Finish a project with a clean bill of health to enable companies to win more contracts.

**Content continued:**
> Qflow was already trialling their MVP on two sites by collecting data through photographing paper tickets and then notifying customers of any anomalies/events. I aimed to improve the UX, UI web app adding additional features while being aware of how artificial intelligence technology will automate and be a useful critical advantage towards data-informed decisions.

---

### 11. MY ROLE AND OUTPUTS

**Type:** Body text + images  
**Heading:** My Role and Outputs

**Content:**
> After discovery sessions with clients and experiencing their landscape, I moved onto researching competitors for example Smart Waste. I produced various flows, either alone or collaboratively, with the product owner and CTO to figure out multiple paths, restrictions, and solutions for stage 2 MVP. As notification will drive the platform and navigation, I hatched out how different user levels will interact with various alerts. Eventually, rejiggering these insights into Qflow's homepage aimed at satisfying a collection of target users. The main idea resembles a Facebook/Twitter-like feed displaying a list of alerts. At this point, Qflow looked into the scalability of the software for potential global release, which meant investigating the information architecture, localisation of microcopy, multiple modules, organisations, settings, and homepage with one simple navigation.

**Placeholder:** `[IMAGE: notification-environment-flow.jpg — 1139×246px, wide notification flow/environment diagram]`  
**Notes:** Very wide and short (1139×246) — likely a horizontal flow or IA diagram. Check rendering on mobile.

**Placeholder:** `[IMAGE: folio-lite-frame.jpg — 1082×571px, UI frame/flow overview]`

**Content (inline, between images):**
> Next, a prototype presenting the flow from email to record correction to show a clear journey for stakeholders. Done by myself to flag up any potential engineering architectural problems, issues and alignment.
>
> I've introduced a flashing alert button, which would become part of the visual language of the platform, always used to tell users there's something wrong that needs attention, or to guide their next step. To help with implementation I googled the react component and checked with the UI engineer before adding it to the design system. You'll notice I've started testing illustrations, using them as a visual anchor to reinforce missing information. The aim is to develop a Qflow brand character by mirroring the founders' sense of humour and other consultants' attitude toward their work. Further development could have meant animation within the platform to congratulate users when they've resolved issues. Gives the platform a more delightful presence.

---

### 12. LAPTOP FRAME + RECORD PAGE SCREENS

**Type:** Laptop frame image + UI screenshot + annotation  
**Component needed:** Stacked image layout — laptop frame with UI screen below or overlaid

**Placeholder (laptop frame):** `[IMAGE: librem-laptop-frame.png — 1040×581px, laptop/browser chrome frame used to present UI]`  
**Notes:** This `Librem 13Sml.png` image is used **four times** across this page as a presentation device. Export once, reference four times. It acts as a decorative frame — on the new site you may want to replace this pattern with a proper device mockup component or CSS-styled browser frame for consistency.

**Placeholder (UI screenshot):** `[IMAGE: record-missing-data.jpg — 720×401px, WM Table Record with missing data state]`

**Annotation/caption (replacing the broken 20×20 tick icon):**
> `[ICON: checkmark ✓]` Above shows a right-hand panel which can list multiple alerts for a record including Qflow's own recommendation on what to do next. It will only expand if triggered by missing information and draw the user's attention immediately.

**Notes:** The `Corrrect@2x.png` referenced here renders at 20×20px on Wix — it's effectively a decorative tick. Replace with a styled `✓` character or a proper icon (e.g. a green checkmark SVG) in the new build. Do not try to export this as a meaningful image.

---

### 13. HOMEPAGE NOTIFICATION EMBED

**Type:** Body text + laptop frame + GIF  
**Content:**
> Embedding notification into Qflow's homepage. By doing this it will allow customers to pursue either two primary goals from seeing all alerts across all projects, or directly navigate into any module/subject matter to monitor progress.

**Placeholder (laptop frame, 2nd use):** `[IMAGE: librem-laptop-frame.png — 1170×657px, same laptop frame at larger size]`  
**Notes:** Same `Librem 13Sml.png` file, different rendered dimensions (1170×657 vs 1040×581 above). Use the same image file, let CSS handle sizing.

**Placeholder:** `[GIF: homepage-final.gif — homepage notification feed, final design animation]`  
**Notes:** Original filename is `QF_Homepage-01DONE2.gif`. This appears to be the hero final design GIF for this case study — a key showpiece. Ensure it autoplays and loops.

**Caption after GIF:** Final design.

**Annotation/caption (replacing broken tick icon again):**
> `[ICON: checkmark ✓]` Other points of customer value:

**Bullet list:**
- Different shapes for different alert types according to Qflow's notification.
- Qflow's business value on constant display by showing the customer how many incidents they've discovered.
- More visibility on other modules the company offers.
- Easy navigation for those users overseeing multiple construction projects.

---

### 14. NAVIGATION FOR ENTERPRISE

**Type:** Section header + body text + GIF + images  
**Heading:** NAVIGATION FOR ENTERPRISE

**Content:**
> Below presents research exploring the landscape of relevant roles within construction. It reveals a pyramid structure of different level users, their cross-over between construction projects, and overall responsibilities. I used secondary research such as advertised job vacancies, snippets from conferences and asking subject matter stakeholders for more insights.

**Placeholder:** `[GIF: org-pyramid.gif — 980px wide, pyramid structure of construction roles and responsibilities]`  
**Notes:** Original filename is `ArtboardLLG.gif`. This is a research/visualisation GIF, not a UI screen.

**Content continued:**
> I wanted to avoid using breadcrumbs navigation as it could cause additional confusion with the established navigation style of the platform but still wanted to give the user the freedom to go in and out from different levels. The next concept rough prototype displays the functional flow of a user navigating to a homepage, main content pages, project (organisation) and settings area.

**Concept solution text:**
> Concept solution to address the issue of management and directors overseeing multiple construction projects with different Qflow modules activated. If top level users wanted to aggregate data, Qflow would allow them to make groups and see the overall picture through visualisation and other elements.

**Placeholder (laptop frame, 3rd use):** `[IMAGE: librem-laptop-frame.png — 1170×657px]`

**Placeholder:** `[IMAGE: create-group-screen.png — 803×449px, Projects — Create Group screen]`  
**Notes:** Original filename is `Projects_11_CreateGroup 02.png`

**Placeholder (laptop frame, 4th use):** `[IMAGE: librem-laptop-frame.png — 1026×573px]`

**Placeholder:** `[IMAGE: groups-pressed-screen.png — 710×395px, Projects — Groups view with pressed state]`  
**Notes:** Original filename is `Projects_06_Groups Press.png`

**Content continued:**
> Navigation to different module (subject area) without needing to go back to the homepage. This feature was expanded out to incorporate projects which would help users navigate their multiple assigned construction sites, including groups.

---

### 15. FINAL NAVIGATION STRUCTURE & OTHER SCREENS

**Type:** GIF pair + static screens  
**Heading:** Final Navigation Structure and Other Screens

**Component needed:** Stacked or side-by-side layout — 2 GIFs + 3 static images

**Placeholder:** `[GIF: table-record-scroll.gif — WM Table Record scroll interaction, final navigation]`  
**Notes:** Original filename is `WM_Table_Record-02-Scroll.gif`

**Placeholder:** `[GIF: menu-panel.gif — menu panel open/close animation, final navigation]`  
**Notes:** Original filename is `MenuPanelDONE.gif`

**Placeholder:** `[IMAGE: navigation-screenshot.png — 600×630px, navigation structure screenshot from May 2021]`  
**Notes:** Original filename includes the date `Screenshot 2021-05-18 at 09.54.33.png` — rename on export.

**Placeholder:** `[IMAGE: filter-applied.png — 980×550px, WM Table with filter applied state]`  
**Notes:** Original filename `WM_Table_06 FilterApplied.png`

**Placeholder:** `[IMAGE: too-many-filters.png — 979×549px, WM Table with too many filters edge case]`  
**Notes:** Original filename `WM_Table_07 TooManyFilters.png`. This is an edge case/error state — worth calling out in the UI as intentional UX thinking.

---

### 16. FOOTER — OTHER CASE STUDIES PEEK GRID

**Type:** Hover-reveal thumbnail grid  
**Component needed:** `<PeekGrid>` — 8 thumbnails  
**Notes:** Slightly smaller than the Qflow air quality footer grid (8 vs 11). Some thumbnails appear shared across case study pages — use the same image assets where filenames overlap.

**Placeholders:**
- `[IMAGE: peek-thumb-1.jpg — 317×316px]`
- `[IMAGE: peek-thumb-2.jpg — 317×316px]`
- `[IMAGE: peek-thumb-3.png — 316×316px]`
- `[IMAGE: peek-thumb-4.jpg — 317×316px]`
- `[IMAGE: peek-thumb-5.jpg — 317×316px]`
- `[IMAGE: peek-thumb-6.png — 316×316px]`
- `[IMAGE: peek-thumb-7.jpg — 317×316px]`
- `[IMAGE: peek-thumb-8.png — 317×316px]`

---

## Component Summary

| Component | Count | Notes |
|---|---|---|
| `<IconRow>` | 1 | 8 tool logos (section 8) |
| `<PeekGrid>` | 1 | 8 thumbnails footer (section 16) |
| Animated GIFs (standalone) | 5 | homepage-final.gif, org-pyramid.gif, table-record-scroll.gif, menu-panel.gif, exceedance-experiment |
| Laptop frame presentation device | 4 | Same image file used at different sizes — consider replacing with CSS device frame component |
| Decorative tick icon | 2 | Replace `Corrrect@2x.png` (20×20, broken) with styled ✓ character or SVG icon |

**No new component types vs previous specs.** This is the simplest page of the three — no audio, no hover audio, no lightbox galleries, no carousels.

---

## Comparison Across All Three Case Studies

| Feature | EDC | Qflow Air Quality | Qflow Notifications |
|---|---|---|---|
| Carousels | 6 | 1 | 0 |
| HoverReveal | 4 | 2 | 0 |
| HoverAudio | 0 | 2 | 0 |
| Audio player | 1 | 0 | 0 |
| Animated GIFs | ~3 | ~10 | 5 |
| Lightbox/zoom | 0 | 2 | 0 |
| IconRow | 1 | 1 | 1 |
| PeekGrid footer | 9 thumbs | 11 thumbs | 8 thumbs |
| Approx. static images | 27+ | 12 | 12 |

**Footer peek grid count inconsistency:** 9 / 11 / 8 thumbnails across the three pages. Decide on a standard before building `<PeekGrid>` — it'll be cleaner if all three footers show the same set.

---

## Images & GIFs to Export from Wix

| Filename (suggested) | Original Wix filename | Dimensions | Type |
|---|---|---|---|
| qflow-02-hero.jpg | d4142940... | 768×432 | jpg |
| notifications-illustration.png | Artboard.png | 980×318 | png |
| notification-environment-flow.jpg | NotificationEnvironment.jpg | 1139×246 | jpg |
| folio-lite-frame.jpg | Folio_lite - New frame.jpg | 1082×571 | jpg |
| librem-laptop-frame.png | Librem 13Sml.png | 1040–1170×581–657 | png (export once) |
| record-missing-data.jpg | WM_Table_RecordV2 MissingData 03_edited.jpg | 720×401 | jpg |
| *(skip)* | Corrrect@2x.png | 20×20 | replace with ✓ icon |
| homepage-final.gif | QF_Homepage-01DONE2.gif | — | gif |
| org-pyramid.gif | ArtboardLLG.gif | 980×? | gif |
| create-group-screen.png | Projects_11_CreateGroup 02.png | 803×449 | png |
| groups-pressed-screen.png | Projects_06_Groups Press.png | 710×395 | png |
| table-record-scroll.gif | WM_Table_Record-02-Scroll.gif | — | gif |
| menu-panel.gif | MenuPanelDONE.gif | — | gif |
| navigation-screenshot.png | Screenshot 2021-05-18 at 09.54.33.png | 600×630 | png |
| filter-applied.png | WM_Table_06 FilterApplied.png | 980×550 | png |
| too-many-filters.png | WM_Table_07 TooManyFilters.png | 979×549 | png |

---

## Open Questions for Lesley

- [ ] The laptop frame (`Librem 13Sml.png`) is used 4 times as a decorative UI frame. Do you want to keep this pattern on the new site, or replace with a CSS browser/device frame component? The latter would be easier to maintain and more responsive.
- [ ] The `Corrrect@2x.png` tick icon is broken (20×20px, barely visible). Confirm whether this should be a green checkmark icon, a styled ✓, or something else — used twice on the page.
- [ ] Activities list: should Illustrations and Mixpanel remain as cross-links to the air quality case study, or be plain text?
- [ ] Tools section: some Wix icon slots appeared empty in the scrape. Can you confirm the full tools list for this case study?
- [ ] Footer peek grid: this page has 8 thumbs, air quality has 11, EDC has 9. Standardise to one count across all three, or keep them as-is?
- [ ] The `org-pyramid.gif` (ArtboardLLG.gif) dimensions weren't captured — can you confirm the aspect ratio so the layout can be planned?
- [ ] The `homepage-final.gif` is the key final design showcase for this case — confirm it autoplays and loops correctly when exported from Wix.
