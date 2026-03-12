# HomeRenter — Component & Content Spec
## lrooney.com/homerenter

This document maps every section of the current Wix page into components and media placeholders for the Netlify rebuild. Use it as the build brief.

---

## Notes Before You Build

This is the most text-heavy and research-led of all five case studies — it's deliberately framed as a strategic investigation story rather than a design showcase. There are relatively few UI screens; most visuals are research artefacts (traffic maps, competitor analysis, flows, journey maps).

It's also the oldest case study (2018) and Lesley has explicitly flagged it as a learning piece rather than a flagship portfolio item — the intro sets that framing clearly. The title on the Wix page is "Beyond Optimization: Aligning Business Ambition with User Reality" and the case study you previously restructured together uses "Uncovering Lopsided Focus to Help Growth" as the overarching title — confirm which heading is current and intended before building.

The `Librem 13Sml.png` laptop frame appears once here (same shared file as Qflow notifications and Risk Management).

One carousel, two zoomable images, one GIF. No audio, no hover interactions beyond the zoom. Structurally the simplest page of the five.

---

## Page Sections (in order)

---

### 1. HERO IMAGE

**Type:** Full-width image
**Current dimensions:** 980×653px
**Placeholder:** `[IMAGE: homerenter-hero.jpg — property/letting context, 980×653px]`
**Notes:** Original filename: `pexels-axp-photography-500641970-30683430.jpg` — this is a Pexels stock photo. On the new site either re-source the same image from Pexels (free) or export directly from Wix. The filename makes it findable on Pexels if needed.

---

### 2. PAGE TITLE & INTRO

**Type:** H1 + intro paragraph

**Heading:** Beyond Optimization: Aligning Business Ambition with User Reality

**Note on title:** In a previous session the case study was also being worked on under the title "Uncovering Lopsided Focus to Help Growth." Confirm with Lesley which title is current before building.

**Intro:**
> I've kept this 2018 case study because it reminds me how much I learned about product–market fit, and target users in a young start-up. Since then, I've made early user investigation a habit whenever I can.

---

### 3. LAPTOP FRAME

**Type:** Laptop frame presentation image
**Placeholder:** `[IMAGE: librem-laptop-frame.png — 1029×576px, Librem 13Sml.png shared file]`
**Notes:** Same `Librem 13Sml.png` used across Qflow notifications and Risk Management. Use the same exported file — this instance is 1029×576. No UI screenshot is paired with it in the scraped layout; it appears to sit standalone above the "What is HomeRenter?" section. Confirm with Lesley whether a screen should appear here or whether the laptop frame is intentionally empty/decorative at this point.

---

### 4. WHAT IS HOMERENTER?

**Type:** Body text + competitor list
**Heading:** What is HomeRenter?

**Content:**
> HomeRenter set out to be a fairer, low-cost alternative to traditional letting agents by connecting landlords, renters, keyholders and tradespeople in one place. Founded by landlords and property developers (Q Developments), the site looked great but hid a few tech and conversion issues.
>
> To drive growth, the company introduced a 30-day free listing period alongside its low-cost subscription, giving landlords access to Rightmove and Zoopla to advertise their properties. Paid add-ons like gas safety certificates rounded out the offering.

**It competed with:**
- Online platforms like OpenRent, HouseSimple, Urban, Upad, Howsy etc.
- Traditional brick and mortar high-street estate agents

---

### 5. MY ROLE

**Type:** Body text
**Heading:** My Role

**Content:**
> I joined a year post-launch as the sole UX/UI designer. Initially tasked with shaping the online rental service vision, but also looked into low customer conversion issues. Working closely with the product manager and lead developer.

---

### 6. SO WHAT'S THE PROBLEM?

**Type:** Body text + two bullet lists
**Heading:** So What's the Problem

**Content:**
> Product decisions focused on landlords because they were the paying users with the most monetisation potential. However, despite the free offer, the company wasn't attracting as many landlords as expected. When I joined, a new property-creation flow (e.g., property type, bedrooms, bathrooms) was being implemented to reduce steps, as this was considered the faster, preferred experience.
>
> I spent a few weeks on customer support, auditing emails, speaking with landlords, and weighing business value against issues. The findings surprised me: a good percentage of landlords tolerated property creation despite a few issues. They were more frustrated by the confusing post-offer tenant experience, and some were even paying competitors £100 to £200 just for a simpler handover. The free offer and subscription also felt complicated and unclear, causing them to pause and call us. Compared to competitors the site attracted more… 🤷🏽‍♀️:

**Bullet list:**
- Live-in landlords looking for lodgers, unlikely to buy extras like photography, key-holder services, or the other add-ons on offer. And with Rightmove being the wrong channel and no SpareRoom partnership, this audience was a poor fit.
- Professional landlords and small agents were cheekily using the platform mainly for cheap portal access, sometimes cycling through multiple email addresses to keep exploiting the free offer while handling everything else themselves.

---

### 7. RECOMMENDATIONS AND QUICK FIXES

**Type:** Numbered list
**Heading:** Recommendations and Quick Fixes

**Content:** Based on the research, I recommended targeted design and copy updates to fix the core website mismatch and increase traffic from the company's bi-monthly newspaper and online advertising. Get more traffic.

1. Landlords weren't discovering services like referencing and photography because they were buried in the dashboard. Adding a checkout-style step within property creation surfaced these add-ons at the right moment and made their existence clear, while keeping them optional to avoid added friction.

2. Trying the experience myself, I noticed landlords were forced to write full descriptions before moving onto the next stage of quick description tags like parking or ensuite. A simple reorder would help them to write a shorter description.

3. Offer a clear one-off payment option, as the subscription created hesitation and added pricing complexity to landlords who only needed to let one property. Kind of putting them off.

4. Unexpected charges were a recurring theme in support emails around the subscription model, so making free trial terms explicit ("No credit card needed") to reduce sign-up anxiety and potentially impact sign-up drop-off or remove subscription altogether.

5. User testing of the current site revealed landlords were unclear about what HomeRenter offered and whether it was for them. Simplified the landing page by clarifying messaging, restructuring FAQs to better chunk information based on frequent customer questions, and removing distractions such as tradesmen and keyholders. Recommended removing confusing £20K/month property examples and instead showcasing a wider range of properties from their portfolio to better reflect their offering.

6. The site asked for trust it hadn't earned yet. There were no let properties on display on the main homepage, no testimonials, no evidence it worked. Showcasing recently let properties, even if it had to be updated or hacked manually by an engineer every 2 to 4 weeks, was a low-cost way to build credibility quickly.

7. The toughest discussion centred on refining our core messaging and removing "One Stop Shop" from multiple landing pages. The tagline tested well, but it overstated the breadth and geographic reach of the service, blurring who we were actually built for. That gap between promise and reality caused frustration among landlords who felt misled and ultimately chose competitors, resulting in avoidable lost sales that would be hard to win back.

---

### 8. THE OUTCOME

**Type:** Numbered list
**Heading:** The Outcome

**Content:**
> Due to the Founder taking extended leave, broader strategic decisions were paused and some recommendations could not move forward. Despite these constraints, progress was made where possible.

1. Some of my recommendations were implemented within the first month, including copy changes that increased site traffic. While I observed an estimated 50% rise in properties approved for Rightmove advertising, conversion to paid add-ons remained low.

---

### 9. THE WORK BEHIND THE RECOMMENDATIONS

**Type:** Section header + body text + images
**Heading:** The Work Behind the Recommendations

**Intro:**
> A map showing the external sources driving traffic to HomeRenter's site, giving us extra evidence on where visitors were coming from and where they were dropping off.

**Placeholder:** `[IMAGE: traffic-sources-map.png — 661×527px, traffic source map showing referral sources and drop-off points]`
**Notes:** Original filename: `Campaign_SMAL.png`

**Body text:**
> Prominent high-end rentals featured on the homepage created confusion about who the platform was for. To demonstrate the value of showcasing a range of price points, I referenced Airbnb as an example of attracting a broad audience without alienating core users.

**Component needed:** `<ZoomableImage>` — 2 images with "press to zoom" interaction
**Placeholders:**
- `[IMAGE: competitor-analysis-1.png — 672×498px, press to zoom]`
- `[IMAGE: competitor-analysis-2.png — 898×530px, press to zoom]`
**Notes:** These appear to be competitor pricing/property range comparisons. Both have "press to zoom" in the Wix layout.

**Body text:**
> One noticeable pattern was the disproportionate amount of shared accommodation compared to other companies and whether HomeRenter's subscription deal would appeal to those customers.

**Component needed:** `<Carousel>` — 3 slides
**Placeholders:**
- `[IMAGE: shared-accommodation-analysis-1.png — 980×633px]`
- `[IMAGE: pricing-package-concept.png — 980×1455px — very tall, one-off payment package concept]`
- `[IMAGE: shared-accommodation-analysis-3.png — 847×447px]`
**Notes:** Slide 2 (980×1455) is extremely tall — nearly 1.5× the width in height. This is likely a full-page screenshot of the site or a long design concept. Consider whether to display it full-height with scroll, crop it, or use a "show more" toggle. The caption references "a fixed one-off second package" suggesting slide 2 is the pricing concept.

**Caption for carousel:**
> The second image shows a fixed one-off second package could be considered showing clear real value rather than the subscription. Test with customers.

**Body text:**
> Marketing: Multiple copy tweaks using assets from the previous designer, plus a few small additions from me. Settled on "no strings attached, no credit card needed" to ease landlord anxiety, which led to an uptick in listed properties.

**Placeholder:** `[IMAGE: free-banner.png — 854×432px, marketing banner with "no strings attached, no credit card needed" copy]`
**Notes:** Original filename: `LL_Let_prop_freeBannerHalf.png`

---

### 10. LANDLORD CREATION FLOW

**Type:** Body text + carousel
**Caption:**
> Below: is a map of the landlord creation flow that was being implemented when I started.

**Component needed:** `<Carousel>` — 2 slides
**Placeholders:**
- `[IMAGE: landlord-creation-flow-1.png — 980×648px, landlord property creation flow map]`
- `[IMAGE: landlord-creation-flow-2.png — 980×871px, landlord creation flow detail/continuation]`
**Notes:** Both are high-resolution flow diagrams (original filenames include `_d_1894_1252` and `_d_1762_1566` indicating 2× source resolution). Export at full resolution for clarity — these are detail-heavy maps that need to be readable when zoomed.

---

### 11. DESIGN CONCEPTS

**Type:** Section header + body text + images + GIF + carousel
**Heading:** Design Concepts

**Body text:**
> Applying Susan Weinschenk's principle that authentic photos of people and homes engage the brain faster and naturally draw the eye to what matters.

**Placeholder:** `[IMAGE: landing-page-redesign.png — 473×1192px, landing page redesign concept — tall portrait format]`
**Notes:** Original filename: `LLlandingV1a copy_edited.png`. Very tall and narrow (473×1192) — this is likely a full-length mobile or desktop page mockup shown in portrait. Needs care in layout — consider a scrollable image panel or a "before/after" toggle if the FAQ before/after labels are part of this image.

**Labels visible in Wix layout:** FAQ (Before) / FAQ (After) — these appear to be labels for the image above or a before/after pair. Confirm whether the landing page image contains both states or if there are two separate images.

**Bullet list (FAQ improvements):**
- Reduce content density making text more readable with more alignment, chunking (grouping) and white space.
- Added blog links and advice on navigating the letting market.
- Reordered FAQs by importance and spread key answers across the site.
- Added a clear "How it works" for each audience.

**Placeholder:** `[GIF: iphones-small.gif — mobile UI animation showing the redesigned experience]`
**Notes:** Original filename: `iPhonesSSmall.gif`. This is the only GIF on the page — likely a scrolling or interaction demo of the mobile redesign.

**Body text:**
> Landlord journey map done in Trello so it can be easily adjusted. Done to clearly communicate expectations and what the company actually covered to the team.

**Component needed:** `<Carousel>` — 2 slides
**Placeholders:**
- `[IMAGE: landlord-journey-map-1.png — 980×597px, landlord journey map in Trello]`
- `[IMAGE: landlord-journey-map-2.png — 980×693px, landlord journey map detail/continuation]`
**Notes:** Both are high-resolution (original filenames include `_d_3432_2090` and `_d_2961_2093` indicating 2× source). Export at full resolution — journey maps need to be readable when viewed closely.

---

## Component Summary

| Component | Count | Notes |
|---|---|---|
| `<Carousel>` | 3 | Accommodation analysis (3 slides, section 9), Creation flow (2 slides, section 10), Journey map (2 slides, section 11) |
| `<ZoomableImage>` | 2 | Competitor analysis pair (section 9) |
| `<PeekGrid>` | 0 | **No footer peek grid on this page** — see note below |
| Laptop frame device | 1 | Librem 13Sml.png at 1029×576 (section 3) |
| Animated GIFs | 1 | iphones-small.gif (section 11) |
| Static images | 10 | Mix of research artefacts, flows, designs |

**Notable absence: No footer peek grid.** This is the only case study without the "hover to sneak peek" thumbnail grid at the bottom. The page ends after the journey map carousel. Confirm with Lesley whether this is intentional or an oversight — if it should have one, use the same `<PeekGrid>` component as the other pages.

---

## Images & GIF to Export from Wix

| Filename (suggested) | Original Wix filename / fragment | Dimensions | Type |
|---|---|---|---|
| homerenter-hero.jpg | pexels-axp-photography-500641970-30683430.jpg | 980×653 | jpg (also on Pexels) |
| librem-laptop-frame.png | Librem 13Sml.png (shared) | 1029×576 | png |
| traffic-sources-map.png | Campaign_SMAL.png | 661×527 | png |
| competitor-analysis-1.png | c4e1cd84... | 672×498 | png |
| competitor-analysis-2.png | 7928926b... | 898×530 | png |
| shared-accommodation-analysis-1.png | 513c6921... | 980×633 | png |
| pricing-package-concept.png | 918e3212... | 980×1455 | png (very tall — check display) |
| shared-accommodation-analysis-3.png | be89dd91... | 847×447 | png |
| free-banner.png | LL_Let_prop_freeBannerHalf.png | 854×432 | png |
| landlord-creation-flow-1.png | c0e40ed6... _d_1894_1252 | 980×648 | png (2× source) |
| landlord-creation-flow-2.png | 322a5aca... _d_1762_1566 | 980×871 | png (2× source) |
| landing-page-redesign.png | LLlandingV1a copy_edited.png | 473×1192 | png (tall portrait) |
| iphones-small.gif | iPhonesSSmall.gif | — | gif |
| landlord-journey-map-1.png | 4de0cb44... _d_3432_2090 | 980×597 | png (2× source) |
| landlord-journey-map-2.png | 7738e909... _d_2961_2093 | 980×693 | png (2× source) |

---

## Updated Cross-Case Component Comparison (All 5 Pages)

| Feature | EDC | Qflow Air Quality | Qflow Notifications | Risk Management | HomeRenter |
|---|---|---|---|---|---|
| Carousels | 6 | 1 | 0 | 0 | 3 |
| HoverReveal | 4 | 2 | 0 | 0 | 0 |
| HoverAudio | 0 | 2 | 0 | 1 | 0 |
| Audio player (standalone) | 1 | 0 | 0 | 0 | 0 |
| ZoomableImage | 0 | 2 | 0 | 0 | 2 |
| Animated GIFs | ~3 | ~10 | 5 | 0 | 1 |
| LightboxGallery | 0 | 2 | 0 | 0 | 0 |
| IconRow | 1 | 1 | 1 | 1 | 0 |
| PeekGrid footer | 9 | 11 | 8 | 9 | **0** |
| Laptop frame device | 0 | 0 | 4× | 1× | 1× |
| Empty SVG slots (NDA?) | 0 | 0 | 0 | ~12 | 0 |
| Confirmed static images | 27+ | 12 | 12 | 12 | 10 |

---

## Open Questions for Lesley

- [ ] **Page title:** The Wix page shows "Beyond Optimization: Aligning Business Ambition with User Reality" but a previous session worked on "Uncovering Lopsided Focus to Help Growth" as the title. Which is current?
- [ ] **Laptop frame (section 3):** The `Librem 13Sml.png` appears standalone at the top with no UI screenshot paired to it. Should a HomeRenter screen sit inside this frame, or is it intentionally empty/decorative here?
- [ ] **FAQ before/after (section 11):** The labels "FAQ (Before)" and "FAQ (After)" appear in the Wix layout adjacent to the tall landing page image. Is the 473×1192 image a single combined before/after, or should there be two separate images here?
- [ ] **Tall carousel slide (section 9, slide 2):** The pricing package concept image is 980×1455 — very long. How do you want this displayed? Full scroll height, cropped with a "show more", or a scaled-down thumbnail?
- [ ] **No footer peek grid:** This is the only case study without the thumbnail footer. Intentional, or should one be added?
- [ ] **Hero image:** This is a Pexels stock photo. Happy to re-use it on the new site (it's free to use) or would you prefer a different image?
- [ ] **`<ZoomableImage>` behaviour:** The competitor analysis images have "press to zoom" on Wix. On the new site — lightbox modal, or zoom-in-place interaction?
