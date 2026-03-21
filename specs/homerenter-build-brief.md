# HomeRenter — Build Brief for Claude Code
## Target page: lrooney.com/homerenter

This document is the complete build brief for the HomeRenter case study page on the Netlify portfolio site. It contains all updated copy, section order, component requirements, and image placeholders in one place.

---

## Context

- This is the most text-heavy of the five case studies — it's a strategic investigation story, not a design showcase.
- There are relatively few UI screens; most visuals are research artefacts (traffic maps, competitor analysis, flows, journey maps).
- No audio player on this page. No hover interactions beyond zoomable images.
- This is the only case study without a footer PeekGrid — the page ends after the journey map carousel. Do not add one unless instructed.
- Structurally the simplest of the five pages.

---

## Page Title

**Use this title (confirmed):**
> Don't Optimise for the Wrong Problem

---

## Sections (in order)

---

### 1. Hero Image

**Component:** Full-width image
**Dimensions:** 980×653px
**File:** `homerenter-hero.jpg`
**Notes:** Pexels stock photo, original filename `pexels-axp-photography-500641970-30683430.jpg`. Re-source from Pexels if needed.

---

### 2. Intro

**Component:** H1 + intro paragraph

**H1:** Don't Optimise for the Wrong Problem

**Intro paragraph:**
> I've kept this case study because it taught me something I still use today: don't optimise for the wrong problem, and take the time to identify what truly deserves prioritisation.

---

### 3. Laptop Frame

**Component:** Laptop frame image (decorative, no screen content inside)
**File:** `librem-laptop-frame.png` — shared file `Librem 13Sml.png`, 1029×576px
**Notes:** Same file used in Qflow Notifications and Risk Management. Sits standalone above the "What is HomeRenter?" section. No UI screenshot is paired with it.

---

### 4. What is HomeRenter?

**Component:** Body text + bullet list

**Heading:** What is HomeRenter?

**Body:**
> HomeRenter set out to be a fairer, low-cost alternative to traditional letting agents — connecting landlords, renters, keyholders and tradespeople in one place. Founded by landlords and property developers, the site looked great and complete but hid some tech and conversion issues.
>
> To drive growth, the company introduced a 30-day free listing period alongside its low-cost subscription, giving landlords access to Rightmove and Zoopla to advertise their properties. Paid add-ons like gas safety certificates rounded out the offering.

**It competed with:**
- Online platforms like OpenRent, HouseSimple, Urban, Upad, and Howsy
- Traditional high-street estate agents

---

### 5. My Role

**Component:** Body text

**Heading:** My Role

**Body:**
> I joined as the sole UX/UI designer, working closely with the product manager and lead developer. Initially tasked with shaping the online rental service vision, I also investigated why the platform wasn't converting as many customers as expected.

---

### 6. So What Was the Problem?

**Component:** Body text + bullet list

**Heading:** So What Was the Problem?

**Body:**
> Product decisions prioritised landlords, as they were the primary paying users with the greatest monetisation potential. As a result, other user journeys were developed but not explored to the same depth. But despite the free offer, the company wasn't attracting as many landlords as expected.
>
> When I joined, a new property-creation flow (where landlords describe their rental property — such as whether it's a flat or house, and the number of bedrooms) was being implemented to reduce steps — this was considered the faster, preferred experience. But I spent a few weeks on customer support: auditing emails, speaking with landlords, and weighing business value against their actual issues.
>
> The findings surprised me. A good chunk of landlords tolerated property creation despite a few hiccups. What really frustrated them was the confusing post-offer tenant experience — some were paying competitors £100–£200 just for a simpler handover. Resulting in the site neglecting convenience for them after getting over the hurdle of advertising their property.
>
> The free offer and subscription also felt unclear, causing people to pause and call us — and of course that could be at any time of day, night, or over the weekend.
>
> Compared to competitors, the site was attracting subset groups that were a poor fit for the business model:

**Bullet list:**
- Live-in landlords looking for lodgers — unlikely to buy extras like photography or key-holder services, and with no SpareRoom partnership, the wrong channel entirely.
- Professional landlords exploiting the free listing by cycling through email addresses, while handling everything else themselves.

---

### 7. Seven Things Worth Fixing

**Component:** Numbered list with bold titles

**Heading:** Seven Things Worth Fixing

**Intro:**
> Based on the research, I recommended targeted design and copy updates to fix the core mismatch and bring in better-fit traffic from the company's advertising.

**List:**

1. **Surface the add-ons earlier.** Target landlords weren't discovering services like referencing and photography — they were buried in the dashboard. A checkout-style step within property creation could surface them at the right moment, while keeping them optional.

2. **Reorder the description step.** Landlords were forced to write full descriptions before moving on. A simple reorder let them start with quick-description tags like parking or ensuite — much lower friction.

3. **Offer a one-off payment option.** The subscription created hesitation for landlords who only needed to let one property. A clear single-payment route removed that barrier.

4. **Make the free trial terms explicit.** Unexpected charges were a recurring theme in support emails. I recommended adding "No credit card needed" alongside free to marketing materials and banners — reducing sign-up anxiety before landlords even reached the site.

5. **Simplify the landing page.** User testing revealed landlords were unclear about what HomeRenter even offered. I simplified the messaging, restructured the FAQs around frequent support questions, and removed distractions like tradesmen and keyholders.

6. **Build basic credibility.** The site asked for trust it hadn't earned. No let properties on display, no testimonials. Showcasing recently let properties — even if manually updated by an engineer every few weeks — was a low-cost way to build credibility quickly.

7. **Drop "One Stop Shop."** The toughest conversation. The tagline tested well but overstated the breadth and geographic reach of the service the company had resources to support, blurring who the platform was actually built for. That gap between promise and reality was causing landlords to choose competitors.

---

### 8. What Happened

**Component:** Body text

**Heading:** What Happened

**Body:**
> Some recommendations went live in the first month — like removing £20k-a-month rentals from the homepage, because the average landlord would wonder if the site was even for them. I double checked who the target audience was.
>
> On the marketing side, adding "No credit card needed" to banners and advertising copy reduced sign-up anxiety and drove more curious landlords to the site — I observed an estimated 50% rise in properties approved for Rightmove advertising, though conversion to paid add-ons remained low.

---

### 9. What I Couldn't Change

**Component:** Body text

**Heading:** What I Couldn't Change

**Body:**
> The founder was on extended leave, which meant broader strategic decisions — pricing model changes and repositioning the audience — couldn't move forward. The most impactful recommendations stayed on the shelf. That was a useful lesson too: good research findings don't automatically translate into action. You need the right people in the room.

**Closing line (styled as a pullquote or standalone closing statement):**
> Making something faster doesn't matter if you're optimising the wrong journey. That's stayed with me.

---

### 10. The Work Behind the Recommendations

**Component:** Section header + body text + images

**Heading:** The Work Behind the Recommendations

**Body:**
> A map showing the external sources driving traffic to HomeRenter's site, giving us extra evidence on where visitors were coming from and where they were dropping off.

**Image:** `traffic-sources-map.png` — 661×527px

**Body:**
> Prominent high-end rentals featured on the homepage created confusion about who the platform was for. To demonstrate the value of showcasing a range of price points, I referenced Airbnb as an example of attracting a broad audience without alienating core users.

**Component:** `<ZoomableImage>` — 2 images with press-to-zoom interaction
- `competitor-analysis-1.png` — 672×498px
- `competitor-analysis-2.png` — 898×530px

**Body:**
> One noticeable pattern was the disproportionate amount of shared accommodation compared to other companies, and whether HomeRenter's subscription deal would appeal to those customers.

**Component:** `<Carousel>` — 3 slides
- `shared-accommodation-analysis-1.png` — 980×633px
- `pricing-package-concept.png` — 980×1455px *(very tall — display full-height with vertical scroll or a "show more" toggle)*
- `shared-accommodation-analysis-3.png` — 847×447px

**Caption for carousel slide 2:**
> A fixed one-off payment package could be considered, showing clear real value rather than the subscription. Test with customers.

**Body:**
> Marketing: multiple copy tweaks using assets from the previous designer, plus a few small additions from me. Settled on "no strings attached, no credit card needed" to ease landlord anxiety, which led to an uptick in listed properties.

**Image:** `free-banner.png` — 854×432px

---

### 11. Landlord Creation Flow

**Component:** Body text + carousel

**Caption:**
> Below: a map of the landlord creation flow that was being implemented when I started.

**Component:** `<Carousel>` — 2 slides
- `landlord-creation-flow-1.png` — 980×648px *(2× source resolution — export at full res, detail-heavy)*
- `landlord-creation-flow-2.png` — 980×871px *(2× source resolution — export at full res)*

---

### 12. Design Concepts

**Component:** Section header + body text + images + GIF + carousel

**Heading:** Design Concepts

**Body:**
> Applying Susan Weinschenk's principle that authentic photos of people and homes engage the brain faster and naturally draw the eye to what matters.

**Image:** `landing-page-redesign.png` — 473×1192px *(tall portrait — full-length page mockup. Labels "FAQ (Before)" and "FAQ (After)" appear adjacent to this image in the original layout — confirm whether this is a single combined image or two separate images before building.)*

**Bullet list (FAQ improvements):**
- Reduce content density making text more readable with more alignment, chunking and white space.
- Added blog links and advice on navigating the letting market.
- Reordered FAQs by importance and spread key answers across the site.
- Added a clear "How it works" for each audience.

**GIF:** `iphones-small.gif` *(only GIF on this page — mobile UI animation of the redesigned experience)*

**Body:**
> Landlord journey map done in Trello so it can be easily adjusted — done to clearly communicate expectations and what the company actually covered to the team.

**Component:** `<Carousel>` — 2 slides
- `landlord-journey-map-1.png` — 980×597px *(2× source — export at full res)*
- `landlord-journey-map-2.png` — 980×693px *(2× source — export at full res)*

---

## Component Summary

| Component | Count | Notes |
|---|---|---|
| `<Carousel>` | 3 | Accommodation analysis (3 slides, section 10), Creation flow (2 slides, section 11), Journey map (2 slides, section 12) |
| `<ZoomableImage>` | 2 | Competitor analysis pair (section 10) — lightbox or zoom-in-place, match other case studies |
| `<PeekGrid>` | 0 | **Not on this page** |
| Laptop frame | 1 | `Librem 13Sml.png`, 1029×576px, decorative only |
| Animated GIFs | 1 | `iphones-small.gif` (section 12) |
| Static images | 10 | See image list below |

---

## Image Files

| Suggested filename | Dimensions | Notes |
|---|---|---|
| `homerenter-hero.jpg` | 980×653 | Pexels stock, re-source if needed |
| `librem-laptop-frame.png` | 1029×576 | Shared file — same as Qflow/Risk Management |
| `traffic-sources-map.png` | 661×527 | |
| `competitor-analysis-1.png` | 672×498 | ZoomableImage |
| `competitor-analysis-2.png` | 898×530 | ZoomableImage |
| `shared-accommodation-analysis-1.png` | 980×633 | Carousel slide 1 |
| `pricing-package-concept.png` | 980×1455 | Carousel slide 2 — very tall, handle with care |
| `shared-accommodation-analysis-3.png` | 847×447 | Carousel slide 3 |
| `free-banner.png` | 854×432 | |
| `landlord-creation-flow-1.png` | 980×648 | 2× source, export at full res |
| `landlord-creation-flow-2.png` | 980×871 | 2× source, export at full res |
| `landing-page-redesign.png` | 473×1192 | Tall portrait — confirm single or two images |
| `iphones-small.gif` | — | Only GIF on page |
| `landlord-journey-map-1.png` | 980×597 | 2× source, export at full res |
| `landlord-journey-map-2.png` | 980×693 | 2× source, export at full res |

---

## Open Questions (resolve before building)

- [ ] **Page title:** Confirmed as "Don't Optimise for the Wrong Problem" — double check this is reflected in the HTML `<title>` and `<h1>`.
- [ ] **Laptop frame:** No screen content sits inside the frame on this page — decorative only. Confirm before building.
- [ ] **FAQ before/after (section 12):** Is `landing-page-redesign.png` a single combined image or two separate files?
- [ ] **Tall carousel slide (section 10, slide 2):** `pricing-package-concept.png` is 980×1455 — very tall. Full scroll height, cropped with "show more", or scaled thumbnail?
- [ ] **ZoomableImage behaviour:** Lightbox modal or zoom-in-place? Match whatever the other case studies use.
- [ ] **No footer PeekGrid:** Intentional on this page. Do not add unless told otherwise.
