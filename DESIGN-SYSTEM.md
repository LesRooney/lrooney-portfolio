# Lesley Rooney — Portfolio Design System

Living reference for all style tokens, typography rules, spacing, layout, and component conventions used across the site. Add to this file as new patterns are established.

---

## Colour Tokens

All colours are defined as CSS custom properties on `:root`.

| Token | Hex | Usage |
|---|---|---|
| `--ink` | `#0A0A0A` | Primary text — all headings (h1–h3), bold labels, nav logo |
| `--ink-mid` | `#4A4A4A` | Secondary text — body copy, nav links, list items, sidebar text |
| `--ink-light` | `#717171` | Tertiary text — captions, eyebrows, placeholder labels, icon labels |
| `--paper` | `#f5f5f5` | Nav backdrop base, footer background |
| Page fill | `#FDFDFC` | `html` and `body` background on all pages — set directly, not via `--paper` |
| `--paper-alt` | `#efede7` | Card backgrounds, image placeholder surfaces, secondary containers |
| `--rule` | `#e2e0d8` | Borders, dividers, subtle container outlines |
| `--faint` | `#f5f3ef` | Very light surface — outcomes band, img-card background (EDC page) |
| `#fff` | `#ffffff` | Text on dark surfaces only (NDA tags, overlay labels) |

### On-dark overrides
- NDA tag text: `#fff` on `--ink` background
- Hover-reveal overlay label: `rgba(255,255,255,0.8)`
- NDA lock label: `rgba(255,255,255,0.5)`

### Do not use
- Do not introduce new colours without updating this file
- Navy `#1a3a6b` has been retired — replaced with `--ink` (`#0A0A0A`) site-wide

---

## Typography

### Font Family
```
Plus Jakarta Sans — loaded via Google Fonts
Weights imported: 300, 400, 500, 600, 700
```

Both `--serif` and `--sans` tokens point to the same typeface:
```css
--serif: 'Plus Jakarta Sans', system-ui, sans-serif;
--sans:  'Plus Jakarta Sans', system-ui, sans-serif;
```

### Base
| Property | Value |
|---|---|
| `font-size` | `16px` (html root) |
| `font-weight` (body default) | `300` |
| `line-height` (body) | `1.7` |
| `font-smoothing` | `-webkit-font-smoothing: antialiased` |

---

### Type Scale

#### Homepage H1
```css
font-size: clamp(2.8rem, 5vw, 4.2rem);
font-weight: 700;
line-height: 1.1;
letter-spacing: -0.02em;
color: var(--ink);
margin-bottom: 40px;
```

#### Case Study Page H1 (`.cs-header h1`)
```css
font-size: clamp(1.6rem, 3vw, 2.4rem);
font-weight: 700;
line-height: 1.15;
letter-spacing: -0.02em;
color: var(--ink);
margin-bottom: 20px;
max-width: 820px;
```

#### Section H2 (`.cs-section h2`)
```css
font-size: clamp(1.2rem, 2vw, 1.6rem);
font-weight: 700;
letter-spacing: -0.01em;
color: var(--ink);
margin-bottom: 28px;   /* 28px gap between h2 and following content (body, image, card) */
```

#### Section H3 — inline (`.cs-section h3`)
```css
font-size: 1.05rem;
font-weight: 600;
color: var(--ink);
margin: 24px 0 8px;
```

#### Sidebar Card H3 (`.sidebar-card h3`)
```css
font-size: 0.85rem;
font-weight: 700;
color: var(--ink);
margin-bottom: 12px;
```

#### Body / Paragraph
```css
font-size: 0.95rem;
color: var(--ink-mid);
line-height: 1.75;
margin-bottom: 16px;
```

#### Bold within body copy — `<strong>`

**Rule:** Bold = a sentence a skimmer should catch.

Use `<strong>` for:
- Key findings or research conclusions (e.g. *"a UI patch wouldn't fix a system-level issue"*)
- Product names and proper nouns on first meaningful reference (e.g. *"Rave Classic"*, *"Design VP and manager"*)
- Impact statements and outcomes (e.g. *"cutting workflow complexity by up to 40%"*)
- Direct quotes or attributions worth highlighting (e.g. *"We now have a problem with Medidata."*)
- Action phrases that define what was done (e.g. *"Instead of large group workshops, we ran individual calls"*)

**Do not bold:**
- Transitional phrases, conjunctions, or filler words
- Entire sentences — bold loses meaning if overused
- Words that are important to the sentence flow but not scan-worthy on their own

**Rendered weight:** `font-weight: 700` (Plus Jakarta Sans 700). Body default is `300`, so bold creates strong contrast without needing a colour change.

#### Caption (`.cs-caption`)
```css
font-size: 0.82rem;
color: var(--ink-light);
font-style: italic;
line-height: 1.6;
margin: 8px 0 16px;
```

#### Eyebrow / Section Label
```css
font-size: 0.72–0.75rem;
font-weight: 500;
letter-spacing: 0.1em;
text-transform: uppercase;
color: var(--ink-mid);
margin-bottom: 10–12px;
```

#### Nav Logo
```css
font-size: 1.1rem;
font-weight: 600;
color: var(--ink);
```

#### Nav Links
```css
font-size: 0.85rem;
font-weight: 400;
letter-spacing: 0.06em;
text-transform: uppercase;
color: var(--ink-mid);
```

#### Tags / Pills
```css
font-size: 0.75rem;
font-weight: 500;
color: var(--ink-mid);
padding: 4px 12px;
border-radius: 20px;
```

---

## Spacing System

All spacing values are multiples of **8px**.

| Step | Value | Usage |
|---|---|---|
| — | `4px` | Micro — badge padding, tiny internal gaps |
| xs | `8px` | Tag row gaps, small component spacing, peek-grid gap |
| sm | `16px` | H2 → paragraph gap, component internal padding, icon row gap |
| — | `20px` | Nav vertical padding, sidebar card padding |
| — | `24px` | Image/placeholder margins, h3 top margin, card image-to-title gap |
| **section** | **`48px`** | **Vertical gap before next section title (`.cs-section` `padding-top`)** |
| — | `40px` | Header bottom padding, footer padding |
| — | `48px` | Nav horizontal padding, two-column gap, work-section padding |
| — | `64px` | Peek section top/bottom padding |
| — | `72px` | Hero bottom padding (homepage) |
| — | `80px` | Grid wrapper bottom padding, footer top margin |
| — | `144px` | Hero top padding (homepage, above fold) |

---

## Layout Tokens

```css
--max:  1080px;   /* max content width */
--sb:   240px;    /* sidebar column width */
--pad:  40px;     /* horizontal page padding */
```

### Page wrap
```css
.wrap { max-width: 1080px; margin: 0 auto; padding: 0 40px; }
```

### Two-column layout (case studies)
```css
display: grid;
grid-template-columns: 1fr 240px;
gap: 48px;
align-items: start;
```

### Homepage work grid
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px 24px;
```

### Peek grid (case study footer)
```css
display: grid;
grid-template-columns: repeat(3, 1fr);   /* or repeat(4, 1fr) */
gap: 8px;
```

---

## Navigation

```css
position: fixed;
padding: 20px 48px;
background: rgba(245,245,245,0.82);
backdrop-filter: blur(12px);
/* border-bottom appears on scroll via .scrolled class */
```

---

## Border Radius

| Context | Value |
|---|---|
| Homepage work cards | `20px` |
| Section images, img-card, carousel track | `12px–16px` |
| Sidebar cards | `12px` |
| Tags / pills | `20px` |
| Icon boxes | `10px` |
| Small elements (badge, NDA label) | `4px–6px` |

---

## Horizontal Dividers

**Rule:** Do not add horizontal rules between page title and section titles, or between section headings. Spacing alone provides visual separation.

- `hr.section-rule` → `display: none` (hidden on all pages)
- `hr.persona-rule` → `display: none`
- `.info-panel-divider` → `display: none`
- `.cs-header` has no `border-bottom`
- `.cs-section` has no `border-bottom`

Borders are permitted only on: footer (`border-top`), nav on scroll (`border-bottom`), list items within components.

### Divider spacing rule

If a divider (`<hr>`) is used between sections it must be centred with **24px above and below**:

```css
hr.section-rule,
hr.persona-rule,
hr {
  border: none;
  border-top: 1px solid var(--rule);
  margin: 24px 0;      /* 24px top, 24px bottom */
}

/* Full-width dividers that span outside the wrap use auto sides */
hr.past-work-divider {
  margin: 24px auto;
}
```

This rule is already baked into every divider class across all pages. Do not override it with a larger or smaller margin without updating this file.

---

## Animation

Animations are subtle — professional portfolio, not a showreel.

---

### Page Entrance — `fadeUp`

Used on every page. Content fades up 20px into position on load. The nav is excluded by wrapping all post-nav content in `#page-content`.

**Named after:** the influence page, where this behaviour originated.

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

**CSS — page-level (case study pages):**
```css
#page-content {
  animation: fadeUp 0.8s 0.2s both;
}
```

**HTML — wrap all content after `</nav>`:**
```html
</nav>

<div id="page-content">
  <!-- all page content here -->
</div><!-- /#page-content -->
```

**Per-element stagger (influence page pattern):**
```css
.influence-hero  { opacity: 0; animation: fadeUp 0.8s 0.2s forwards; }
.work-header     { opacity: 0; animation: fadeUp 0.7s 0.6s forwards; }
```

---

### Case Study Header Stagger — Title + Narration

The preferred pattern for case study pages. The whole page fades in as a base layer, then the `h1` and audio/narration button stagger in on top — 0.2s apart. Gives a layered "page arrives, then title, then controls" feel.

**Live on:** `medidataedcredesign.html`

```css
/* Base layer — whole page enters together */
#page-content {
  animation: fadeUp 0.6s 0.1s both;
}

/* Title — arrives first */
.cs-header h1 {
  opacity: 0;
  animation: fadeUp 0.8s 0.2s forwards;
}

/* Narration / audio button — follows 0.2s after title */
.cs-header .cs-tags {
  opacity: 0;
  animation: fadeUp 0.7s 0.4s forwards;
}
```

**Why layered:** `#page-content` at `opacity: 0` means the sidebar and lower sections don't flash in while the title is still invisible. Everything moves as one wave, with the title and audio trailing slightly behind.

#### Rules
- Always use `#page-content` wrapper on case study pages — keeps the fixed nav from being affected by the transform
- Do not animate `body` directly — `position: fixed` children (the nav) shift with it
- Keep `0.2s` gap between staggered elements — tighter feels rushed, wider feels disconnected
- `forwards` fill-mode on child elements, `both` on the page wrapper
- If a page has no audio player, apply the same pattern to the next meaningful element (e.g. `.cs-eyebrow`)

---

### Scroll-in — work cards

```css
.card-item { opacity: 0; transform: translateY(32px); transition: opacity 0.55s ease, transform 0.55s ease; }
.card-item.in-view { opacity: 1; transform: translateY(0); }
```

---

## Custom Cursor

Two elements: `#cursor-dot` (6px) and `#cursor-ring` (30px).

```css
#cursor-dot  { width:6px; height:6px; background:var(--ink); border-radius:50%; position:fixed; top:0; left:0; pointer-events:none; z-index:9999; }
#cursor-ring { width:30px; height:30px; border:1.5px solid var(--ink); border-radius:50%; position:fixed; top:0; left:0; pointer-events:none; z-index:9998; opacity:0.5; }
```

JS positioning (centred on pointer):
```js
dot.style.transform  = `translate(${mx - 3}px, ${my - 3}px)`;   // 3 = half of 6px
ring.style.transform = `translate(${rx - 15}px, ${ry - 15}px)`;  // 15 = half of 30px
```

Hover state: dot grows to 10px, ring grows to 46px, opacity 0.3.
Click state: ring shrinks to 24px, opacity 0.8.

---

## SVG Tool Icons

Stored in `/images/icons/`. Used in the **IconRow** and **Tools sidebar card** components.

| File | Tool |
|---|---|
| `pen-paper.svg` | Pen & Paper |
| `figma.svg` | Figma |
| `storybook.svg` | Storybook |
| `slack.svg` | Slack |
| `loom.svg` | Loom |
| `zoom.svg` | Zoom |
| `lovable.svg` | Lovable |
| `notion.svg` | Notion |
| `screenflow.svg` | ScreenFlow |
| `github.svg` | GitHub |
| `pendo.svg` | Pendo |
| `axure.svg` | Axure |
| `condens.svg` | Condens |
| `gemini.svg` | Gemini |
| `confluence.svg` | Confluence |
| `claude.svg` | Claude (footer credit icon) |
| `sketch.svg` | Sketch |
| `miro.svg` | Miro |
| `zeplin.svg` | Zeplin |
| `quicktime.svg` | QuickTime |

### Adding a new icon
1. Export as `.svg`, optimise (remove unnecessary metadata)
2. Drop into `/images/icons/`
3. Add a row to the table above
4. Reference in the IconRow component as `<img src="images/icons/[name].svg" alt="[Tool]">`

---

## Read Time Badge

Every case study page displays a read time badge in the tag row beneath the page title. It uses the standard `.cs-tag` pill style with a ⏱ prefix.

```html
<span class="cs-tag read-time">⏱ 11 min read</span>
```

### Current read times

| Page | Word count | Read time |
|---|---|---|
| `medidataedcredesign.html` | 2,511 | ⏱ 11 min read |
| `clinical-risk-based-monitoring.html` | 2,964 | ⏱ 13 min read |
| `qualisflow-02.html` | 2,159 | ⏱ 9 min read |
| `lesleyrooney-games-sims-vfxworks.html` | 2,292 | ⏱ 10 min read |
| `games-simulations-films.html` | 1,847 | ⏱ 8 min read |

### How to update
Reading speed baseline: **238 wpm** (average adult).
Formula: `Math.ceil(wordCount / 238)`.

When significant content is added to a page, recount words by running:
```js
// In browser console on the live page:
const text = document.body.innerText;
const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
console.log(words, 'words →', Math.ceil(words / 238), 'min read');
```
Then update both the HTML badge and the table above.

---

## Component Patterns

### IconRow
Horizontal strip of tool logos with labels. Wraps on narrow viewports.
```css
display: flex; flex-wrap: wrap; gap: 16px;
```

### PeekGrid
Square-aspect thumbnail grid, 3×3 or 4×4. Hover scales up.
```css
grid-template-columns: repeat(3, 1fr); gap: 8px;
aspect-ratio: 1/1; border-radius: 12px;
```

### img-card

A content card that wraps images, videos, carousels, or hover-reveals. Provides a subtle background surface, rounded corners, and consistent internal spacing.

**CSS class:** `.img-card`

```css
.img-card {
  background: var(--faint);     /* #f5f3ef */
  border-radius: 16px;
  padding: 20px;
  border: none;
}
```

#### HTML structure (image)
```html
<div class="img-card">
  <p class="cs-caption">Caption above the image.</p>
  <img src="images/example.webp" alt="Description" style="width:100%; display:block; border-radius:8px;">
</div>
```

#### HTML structure (wrapping a carousel or video)
```html
<div class="img-card" style="padding: 20px; display: flex; flex-direction: column; gap: 24px; border: none;">
  <p class="cs-caption">Caption.</p>
  <!-- carousel or video goes here -->
</div>
```

#### Rules
- Inner images: `border-radius: 8px`
- `border: none` when the card wraps a carousel or video (removes double-border look)
- Always add `display: flex; flex-direction: column; gap: 24px` when stacking a caption + media inside

---

### Carousel

#### Standard carousel (prev/next controls + dots)
Use for 2–6 images where manual paging is appropriate. Wired by the shared carousel JS.

```html
<div class="carousel" data-carousel="[unique-name]">
  <div class="carousel-track">
    <div class="carousel-slide active">
      <img src="images/slide-1.webp" alt="Slide 1" style="width:100%; display:block; border-radius:8px;">
    </div>
    <div class="carousel-slide">
      <img src="images/slide-2.webp" alt="Slide 2" style="width:100%; display:block; border-radius:8px;">
    </div>
  </div>
  <div class="carousel-controls">
    <button class="carousel-btn prev">←</button>
    <div class="carousel-dots">
      <span class="dot active"></span>
      <span class="dot"></span>
    </div>
    <span class="carousel-counter">1 / 2</span>
    <button class="carousel-btn next">→</button>
  </div>
</div>
```

#### Autoplay fade carousel (LockedFadeCarousel)
Use for 3+ images of varying dimensions where page-jump would be visible. See **LockedFadeCarousel** section below for full CSS and rules.

### Post-it Note Cards

A row of three cards styled to look like physical post-it notes. Used to surface key research insights or process notes in a human, informal way. Each card has a slight rotation for a natural scattered feel.

**CSS classes:** `.postit-row`, `.postit`, `.postit--1` / `.postit--2` / `.postit--3`, `.postit-emoji`

#### Layout
```css
.postit-row {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  margin: 8px 0 32px;
}
@media (max-width: 680px) {
  .postit-row { flex-direction: column; }
  .postit--1, .postit--2, .postit--3 { transform: none; }
}
```

#### Card
```css
.postit {
  flex: 1;
  background: #FFFBCC;        /* light yellow — do not change */
  border-radius: 16px;
  padding: 24px 22px 28px;
  box-shadow: 1px 2px 6px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03);
  /* Shadow is intentionally subtle — do not increase */
}
```

#### Rotations (scattered effect)
```css
.postit--1 { transform: rotate(-2deg); }
.postit--2 { transform: rotate(1.5deg); }
.postit--3 { transform: rotate(-1deg); }
```

#### Emoji
```css
.postit-emoji {
  font-size: 2rem;
  line-height: 1;
  display: block;
  margin-bottom: 14px;
}
```

#### Text
```css
.postit p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--ink);
}
```

#### HTML structure
```html
<div class="postit-row">
  <div class="postit postit--1">
    <span class="postit-emoji">📁</span>
    <p>Text with optional <strong>bold emphasis</strong>.</p>
  </div>
  <div class="postit postit--2">
    <span class="postit-emoji">🧍</span>
    <p>Text. Optional <span class="highlight-pen">highlighted phrase</span>.</p>
  </div>
  <div class="postit postit--3">
    <span class="postit-emoji">🕵🏾‍♀️</span>
    <p>Text.</p>
  </div>
</div>
```

#### Rules
- Background: always `#FFFBCC` — do not substitute another colour
- Shadow: keep subtle (`0.05` / `0.03` opacity) — do not increase
- Rotations: alternating small angles only — do not exceed ±3deg
- Emoji: one per card, displayed at `2rem`, `14px` below to text
- On mobile: stacks vertically, rotations reset to `none`
- Highlighter pen effect on inline text: use `.highlight-pen` class (see below)

### Highlighter Pen

Inline text highlight that mimics a real highlighter marker stroke. Used sparingly for key phrases — maximum one highlight per card or paragraph.

```css
.highlight-pen {
  background: linear-gradient(
    104deg,
    transparent 0%,
    rgba(255, 220, 50, 0.55) 2%,
    rgba(255, 220, 50, 0.45) 96%,
    transparent 98%
  );
  background-repeat: no-repeat;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.05em 0.15em;
  border-radius: 2px;
}
```

Usage: `<span class="highlight-pen">text to highlight</span>`

---

### LockedFadeCarousel

A fade carousel variant where the container height is **locked** — the page never jumps between images of different sizes. Slides are stacked via `position: absolute` and crossfade using `opacity` transitions. Any image that doesn't fill the frame scales down automatically via `object-fit: contain`.

**When to use:** Any `data-fade` carousel with multiple images of differing dimensions where page jump would be visible.

#### HTML
```html
<div class="carousel" data-fade data-autoplay="4000"
     data-carousel="[name]"
     style="--carousel-ratio: 16/9;">
  <div class="carousel-track">
    <div class="carousel-slide active"><img src="…" alt="…"></div>
    <div class="carousel-slide"><img src="…" alt="…"></div>
  </div>
</div>
```

Set `--carousel-ratio` to match the content:
| Content type | Ratio |
|---|---|
| Widescreen screenshots, spreadsheets | `16/9` |
| Ecosystem/relationship diagrams | `4/3` |
| Square thumbnails | `1/1` |

#### CSS (global — applies to all `data-fade` carousels)
```css
.carousel[data-fade] .carousel-track {
  display: block;
  position: relative;
  aspect-ratio: var(--carousel-ratio, 16/9);
  overflow: hidden;
}
.carousel[data-fade] .carousel-slide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.8s ease;
  pointer-events: none;
}
.carousel[data-fade] .carousel-slide.active {
  opacity: 1;
  pointer-events: auto;
}
.carousel[data-fade] .carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
}
```

#### Rules
- Always set `--carousel-ratio` on the carousel element — do not rely on the default
- Do not add `display: none` to individual slides — opacity/position handles visibility
- No prev/next controls or dots needed — autoplay only (no controls markup required)
- Wrap in `.img-card` with caption above the carousel for full design system compliance

### Before/After Slider

Left/right drag handle to compare two states (e.g. redesign vs. legacy). Uses `clip-path: inset()` driven by pointer/touch position. Auto-sweeps on scroll-into-view; pauses when user drags; resumes 500ms after release.

#### Behaviour
- **Auto-sweep**: ping-pongs 10%→90%→10% with an ease-in-out curve, 4s per direction, 1.2s pause at each end
- **Drag**: mouse and touch; handle highlights blue (`#0070BF`) within 20px proximity
- **Before layer**: static images — supports 1 or 2 images; if 2, they cross-fade every 4s automatically (`.ba-before-reel`)
- **After layer**: looping `<video>` (or single `<img>`) clipped by the handle
- **Label pills**: sit above the slider inside `.ba-label-row`, black background, white uppercase text

#### HTML structure
```html
<div class="img-card" style="padding: 20px; border: none;">
  <!-- Label row: left pill = new design, right pill = old design -->
  <div class="ba-label-row">
    <span class="ba-pill before">Redesign — 2025</span>
    <span class="ba-pill after">Redesign — 2017</span>
  </div>

  <div class="ba-slider" data-ba-slider style="margin: 0;">

    <!-- BEFORE — bottom layer, sets height; use ba-before-reel for 2-image cycling -->
    <div class="ba-before">
      <div class="ba-before-reel" style="position:relative; aspect-ratio:848/504; overflow:hidden;">
        <img class="ba-reel-img" src="images/before-01.webp" alt="Before state A"
             style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:1;transition:opacity 0.8s ease;">
        <img class="ba-reel-img" src="images/before-02.webp" alt="Before state B"
             style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 0.8s ease;">
      </div>
    </div>

    <!-- AFTER — top layer, clipped by handle; use video or img -->
    <div class="ba-after">
      <video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block;">
        <source src="videos/after.mp4" type="video/mp4">
      </video>
    </div>

    <!-- HANDLE -->
    <div class="ba-handle">
      <div class="ba-grip">
        <span class="ba-arrow left"></span>
        <span class="ba-arrow right"></span>
      </div>
    </div>

  </div>
</div>
```

> For a single before image (no cycling), omit `.ba-before-reel` and use a plain `<img>` inside `.ba-before`.

#### CSS
```css
/* Slider container */
.ba-slider {
  position: relative; overflow: hidden; border-radius: 12px;
  cursor: ew-resize; user-select: none; touch-action: none;
  margin: 20px 0;
}

/* Before layer — sets height */
.ba-slider .ba-before { display: block; width: 100%; }

/* After layer — sits on top, clipped left of handle */
.ba-slider .ba-after {
  position: absolute; inset: 0; overflow: hidden;
  clip-path: inset(0 50% 0 0); /* handle starts at 50% */
}

/* Vertical handle line */
.ba-handle {
  position: absolute; top: 0; bottom: 0; left: 50%;
  width: 2px; background: #fff;
  transform: translateX(-50%);
  pointer-events: none;
  display: flex; align-items: center; justify-content: center;
}

/* Circular grip knob */
.ba-grip {
  width: 44px; height: 44px; border-radius: 50%;
  background: #fff; border: 1.5px solid rgba(0,0,0,0.12);
  display: flex; align-items: center; justify-content: center;
  gap: 3px; flex-shrink: 0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
}

/* Arrow chevrons inside grip */
.ba-arrow { width: 0; height: 0; border-style: solid; }
.ba-arrow.left  { border-width: 5px 7px 5px 0; border-color: transparent var(--ink-mid) transparent transparent; }
.ba-arrow.right { border-width: 5px 0 5px 7px; border-color: transparent transparent transparent var(--ink-mid); }

/* Hover/drag state — handle turns blue */
.ba-handle.ba-hover { background: #0070BF; }
.ba-handle.ba-hover .ba-grip { background: #0070BF; border-color: #0070BF; }
.ba-handle.ba-hover .ba-arrow.left  { border-color: transparent #fff transparent transparent; }
.ba-handle.ba-hover .ba-arrow.right { border-color: transparent transparent transparent #fff; }

/* Label row above slider */
.ba-label-row {
  display: flex; justify-content: space-between;
  margin-bottom: 10px;
}
.ba-pill {
  font-size: 0.68rem; font-weight: 600; letter-spacing: 0.07em;
  text-transform: uppercase; padding: 4px 10px; border-radius: 4px;
  background: #000; color: #fff; pointer-events: none;
}
```

#### JS
```javascript
// ── Before / After sliders
document.querySelectorAll('[data-ba-slider]').forEach(slider => {
  const after  = slider.querySelector('.ba-after');
  const handle = slider.querySelector('.ba-handle');
  let dragging = false;

  function setPos(clientX) {
    const rect = slider.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left    = pct + '%';
  }

  // Auto-sweep (ping-pong, ease-in-out)
  let userTouched = false, resumeTimer = null, rafId = null;
  let sweepStart = null, direction = 1;
  const SWEEP_DURATION = 4000, PAUSE_AT_END = 1200, RESUME_DELAY = 500;

  function cancelAutoSweep() { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }

  function scheduleResume() {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { userTouched = false; sweepStart = null; rafId = requestAnimationFrame(autoSweep); }, RESUME_DELAY);
  }

  function autoSweep(ts) {
    if (userTouched) return;
    if (!sweepStart) sweepStart = ts;
    const elapsed = ts - sweepStart;
    if (elapsed < SWEEP_DURATION) {
      const t = elapsed / SWEEP_DURATION;
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const pct = direction === 1 ? 10 + ease * 80 : 90 - ease * 80;
      after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left    = pct + '%';
      rafId = requestAnimationFrame(autoSweep);
    } else {
      setTimeout(() => { if (userTouched) return; direction *= -1; sweepStart = null; rafId = requestAnimationFrame(autoSweep); }, PAUSE_AT_END);
    }
  }

  // Hover highlight
  slider.addEventListener('mousemove', e => {
    const rect = slider.getBoundingClientRect();
    const handleX = rect.left + (parseFloat(handle.style.left || '50') / 100) * rect.width;
    handle.classList.toggle('ba-hover', Math.abs(e.clientX - handleX) < 20 || dragging);
  });
  slider.addEventListener('mouseleave', () => { if (!dragging) handle.classList.remove('ba-hover'); });

  // Drag (mouse + touch)
  slider.addEventListener('mousedown',  e => { dragging = true; userTouched = true; clearTimeout(resumeTimer); cancelAutoSweep(); handle.classList.add('ba-hover'); setPos(e.clientX); });
  slider.addEventListener('touchstart', e => { dragging = true; userTouched = true; clearTimeout(resumeTimer); cancelAutoSweep(); setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mousemove',  e => { if (dragging) setPos(e.clientX); });
  window.addEventListener('touchmove',  e => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mouseup',    () => { if (dragging) { dragging = false; scheduleResume(); } });
  window.addEventListener('touchend',   () => { if (dragging) { dragging = false; scheduleResume(); } });

  // Start sweep when 40% of slider is in viewport
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !userTouched) { sweepStart = null; rafId = requestAnimationFrame(autoSweep); }
      else { cancelAutoSweep(); }
    });
  }, { threshold: 0.4 }).observe(slider);
});

// ── Before image cycling (cross-fade every 4s)
document.querySelectorAll('.ba-before-reel').forEach(reel => {
  const imgs = reel.querySelectorAll('.ba-reel-img');
  if (imgs.length < 2) return;
  let cur = 0;
  setInterval(() => {
    imgs[cur].style.opacity = '0';
    cur = (cur + 1) % imgs.length;
    imgs[cur].style.opacity = '1';
  }, 4000);
});
```

#### Rules
- Always wrap inside `.img-card` with `.ba-label-row` above the slider
- `data-ba-slider` attribute is required — the JS targets this selector
- `.ba-before` sets the height — always give its inner element an explicit `aspect-ratio`
- `.ba-after` must be `position: absolute; inset: 0` and match the before dimensions
- Images: `.webp` at 2× resolution; video: `autoplay muted loop playsinline`
- `.ba-before-reel` cycling requires exactly 2 `.ba-reel-img` elements; first `opacity:1`, second `opacity:0`
- Handle starts at `left: 50%`; auto-sweep runs 10%–90% to avoid clipping edge content
- Do not use `clip-path` on the `.ba-slider` container itself — it would break the absolute-positioned after layer

### HoverReveal

Dark overlay with play icon appears on hover over a thumbnail. Clicking plays the video (or opens the Loom link). Uses `--ink` overlay at 92% opacity.

**CSS classes:** `.hover-reveal`, `.hr-base`, `.hr-overlay`, `.hr-play`, `.hr-play-icon`, `.hr-label`

#### HTML structure
```html
<div class="hover-reveal" id="[unique-id]" style="margin: 0; border-radius: 10px;">
  <div class="hr-base">
    <video id="[video-id]" muted loop playsinline preload="metadata"
           style="width:100%; display:block; border-radius:10px;">
      <source src="images/folder/video.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hr-overlay" style="border-radius: 10px;">
    <div class="hr-play"><span class="hr-play-icon"></span></div>
    <span class="hr-label">Hover label text ↗</span>
  </div>
</div>
```

#### Rules
- Use `preload="metadata"` for Loom/highlight videos; `preload="auto"` for scrubber-driven videos (system maps)
- The overlay hides on `:hover` via CSS — no JS needed for basic show/hide
- Always wrap inside an `.img-card` with a caption above for consistent spacing
- `border-radius: 10px` on both `.hover-reveal` and `.hr-overlay` to match inner media

---

### Hover-Play Video (inline autoplay on hover)

A plain `<video>` element that pauses by default and plays only when hovered. Uses the `data-hover-play` attribute, wired by shared JS.

No overlay or label — the video itself is the content.

```html
<video muted loop playsinline data-hover-play
       style="width:100%; display:block; border-radius:8px;">
  <source src="images/folder/video.mp4" type="video/mp4">
</video>
```

JS (already in shared script — no per-page code needed):
```js
document.querySelectorAll('video[data-hover-play]').forEach(vid => {
  vid.addEventListener('mouseenter', () => vid.play());
  vid.addEventListener('mouseleave', () => vid.pause());
});
```

#### Rules
- Always `muted loop playsinline` — never autoplay without mute
- Wrap in `.img-card` with caption for design-system compliance
- Use for product demo clips and experiment previews — not for the main HoverReveal pattern

---

### Laptop Mockup

A `<video>` or `<img>` overlaid on a Dell XPS 13 SVG frame. The laptop SVG sets the outer dimensions; the media is positioned absolutely to sit inside the screen area.

**Asset:** `images/Mockups/Dell XPS 13.svg`

```html
<div style="position: relative; display: block; width: 90%; margin: 0 auto;">
  <img src="images/Mockups/Dell XPS 13.svg"
       alt="Dell XPS 13 laptop mockup"
       style="width: 100%; display: block;">
  <video autoplay muted loop playsinline
         style="position: absolute;
                left: 7.74%; top: 0.77%;
                width: 84.73%; height: 91.39%;
                object-fit: cover;
                border-radius: 2px;">
    <source src="images/folder/screen-video.mp4" type="video/mp4">
  </video>
</div>
```

Screen position constants (do not change — calibrated to the SVG):
| Property | Value |
|---|---|
| `left` | `7.74%` |
| `top` | `0.77%` |
| `width` | `84.73%` |
| `height` | `91.39%` |

#### Rules
- Container width: `90%` with `margin: 0 auto` — keeps the mockup centred and slightly inset
- `border-radius: 2px` on the overlaid media to match the SVG screen corner
- Use `autoplay muted loop` for demo videos inside the frame
- To use a static image instead of a video, swap `<video>` for `<img>` with the same position/size styles

### Right Side Info Panel Card

The right-hand column on all case study pages. Displays at-a-glance project metadata: Team, What I did, Duration, Tools. Sits in a two-column grid alongside the main content column.

**Component name:** Right Side Info Panel Card
**CSS classes:** `.info-panel-col`, `.info-panel-card`, `.info-panel-list`

#### Layout
The column sits in the two-column grid defined by `.two-col`:
```css
.two-col {
  display: grid;
  grid-template-columns: 1fr var(--sb); /* var(--sb) = 240px */
  gap: 48px;
  align-items: start;
}
.info-panel-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;
}
```

On mobile the column stacks above the main content:
```css
@media (max-width: 768px) {
  .two-col { grid-template-columns: 1fr; }
  .info-panel-col { order: -1; padding-top: 0; }
}
```

#### Card
Each individual card within the panel:
```css
.info-panel-card {
  border: 1px solid var(--rule);
  border-radius: 12px;
  padding: 20px;
  background: transparent;
}
.info-panel-card h3 {
  font-family: var(--serif);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 12px;
}
```

#### List (inside each card)
```css
.info-panel-list { list-style: none; padding: 0; margin: 0; }
.info-panel-list li {
  font-size: 0.82rem;
  color: var(--ink-mid);
  line-height: 1.6;
  padding: 3px 0;
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.info-panel-list li::before {
  content: '✦';
  color: var(--ink);
  font-size: 0.65rem;
  flex-shrink: 0;
}
```

#### HTML structure
```html
<div class="info-panel-col">

  <div class="info-panel-card">
    <h3>Team</h3>
    <ul class="info-panel-list">
      <li>Role name 🇬🇧</li>
      <li><strong>Product Designer — Me 🇬🇧</strong></li>
    </ul>
  </div>

  <div class="info-panel-card">
    <h3>What I did 👩🏾‍💻</h3>
    <ul class="info-panel-list">
      <li>Activity</li>
    </ul>
  </div>

  <div class="info-panel-card">
    <h3>Duration</h3>
    <p style="font-size: 0.9rem; color: var(--ink-mid);">~X months</p>
  </div>

</div><!-- /.info-panel-col -->
```

#### Rules
- Gap between ✦ bullet and text: always `8px` (via `gap`, not spaces in `content`)
- Bullet colour: `var(--ink)` — never `--ink-light` or `--navy`
- `flex-shrink: 0` on `::before` prevents bullet collapsing on long lines
- Card background: `transparent` — inherits page fill (`#FDFDFC`)
- "Me" entry in Team list: always `<strong>` to distinguish the designer's own role
- Do not add a border-bottom divider between cards — gap alone provides separation

### AudioPlayer (EDC only)
Wired to `<audio>` element. Play/pause toggle, range input progress bar, timestamp display.

### NavNarrationButton
A persistent audio control that appears in the top navigation when a case study narration is playing **and** the inline audio player has been scrolled out of view. Fades out again when the inline player re-enters the viewport or audio ends.

Used on all case study pages that have an `<audio>` narration track.

#### Behaviour
- Hidden by default (`opacity: 0; pointer-events: none`)
- Becomes visible when **both** conditions are true: `audioStarted === true` AND `inlineVisible === false`
- Visibility is driven by `IntersectionObserver` watching `#audio-player` (threshold: `0.1`)
- Icon toggles between `⏸` (playing) and `▶` (paused)
- Clicking the nav button toggles play/pause, keeping the inline player button in sync

#### HTML (inside `<nav>`, wrapped in `.nav-right`)
```html
<nav id="nav">
  <a href="index.html" class="nav-logo">Lesley Rooney</a>
  <div class="nav-right">
    <div id="nav-audio-controls" aria-label="Audio controls">
      <button class="nav-audio-btn" id="nav-audio-toggle" aria-label="Pause narration">
        <span id="nav-audio-icon">⏸</span>
        <span>Narration</span>
      </button>
    </div>
    <ul class="nav-links">…</ul>
  </div>
</nav>
```

#### CSS
```css
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}
#nav-audio-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}
#nav-audio-controls.visible {
  opacity: 1;
  pointer-events: auto;
}
.nav-audio-btn {
  height: 28px;
  padding: 4px 10px 4px 4px;
  border-radius: 14px;
  background: var(--ink);
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 0.72rem;
  font-family: var(--sans);
  font-weight: 500;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  gap: 7px;
  transition: opacity 0.2s;
  flex-shrink: 0;
  white-space: nowrap;
}
.nav-audio-btn:hover { opacity: 0.7; }
#nav-audio-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f0f0f0;
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  flex-shrink: 0;
  line-height: 1;
}
```

#### JS (self-contained IIFE, added after inline audio player script)
```js
(function() {
  const audioEl   = document.getElementById('audioEl');
  const playBtn   = document.getElementById('audioPlayBtn');
  const progress  = document.getElementById('audioProgress');
  const current   = document.getElementById('audioCurrentTime');
  const durEl     = document.getElementById('audioDuration');
  const navCtrl   = document.getElementById('nav-audio-controls');
  const navToggle = document.getElementById('nav-audio-toggle');
  const navIcon   = document.getElementById('nav-audio-icon');
  if (!audioEl) return;
  audioEl.playbackRate = 1.3; // adjust per page (EDC: 1.2, others: 1.3)
  let audioStarted = false, inlineVisible = true;
  function fmt(s) { const m=Math.floor(s/60); return m+':'+(Math.floor(s%60)+'').padStart(2,'0'); }
  function syncNavControls() {
    if (!navCtrl) return;
    navCtrl.classList.toggle('visible', audioStarted && !inlineVisible);
    if (navToggle && navIcon) {
      if (audioEl.paused) { navIcon.textContent = '▶'; navToggle.setAttribute('aria-label','Resume narration'); }
      else { navIcon.textContent = '⏸'; navToggle.setAttribute('aria-label','Pause narration'); }
    }
  }
  const inlinePlayer = document.getElementById('audio-player');
  if (inlinePlayer && 'IntersectionObserver' in window) {
    new IntersectionObserver(function(entries) {
      inlineVisible = entries[0].isIntersecting;
      syncNavControls();
    }, { threshold: 0.1 }).observe(inlinePlayer);
  }
  audioEl.addEventListener('loadedmetadata', () => { if (durEl && audioEl.duration) durEl.textContent = fmt(audioEl.duration); });
  playBtn.addEventListener('click', () => {
    if (audioEl.paused) { audioEl.play(); playBtn.textContent = '⏸'; }
    else { audioEl.pause(); playBtn.textContent = '▶'; }
  });
  audioEl.addEventListener('play',  () => { audioStarted = true; syncNavControls(); });
  audioEl.addEventListener('pause', syncNavControls);
  audioEl.addEventListener('timeupdate', () => {
    if (audioEl.duration) { progress.value = (audioEl.currentTime / audioEl.duration) * 100; current.textContent = fmt(audioEl.currentTime); }
  });
  progress.addEventListener('input', () => { if (audioEl.duration) audioEl.currentTime = (progress.value / 100) * audioEl.duration; });
  audioEl.addEventListener('ended', () => { playBtn.textContent = '▶'; progress.value = 0; current.textContent = '0:00'; audioStarted = false; syncNavControls(); });
  if (navToggle) navToggle.addEventListener('click', () => {
    if (audioEl.paused) { audioEl.play(); playBtn.textContent = '⏸'; }
    else { audioEl.pause(); playBtn.textContent = '▶'; }
  });
})();
```

#### Playback rate by page
| Page | `playbackRate` |
|---|---|
| `medidataedcredesign.html` | `1.2` |
| `clinical-risk-based-monitoring.html` | `1.3` |
| `qualisflow-02.html` | `1.3` |
| `lesleyrooney-games-sims-vfxworks.html` | `1.3` |
| `games-simulations-films.html` | `1.3` |
| `homerenter.html` | `1.1` |

#### Special case — `lesleyrooney-games-sims-vfxworks.html`
This page also has a Vimeo showreel stop button (`#showreel-stop`) inside `.nav-right`. Order inside `.nav-right` is: narration button → nav links → showreel stop button.

---

### NDA Placeholder
Dark (`--ink`) background with lock emoji and "NDA" label. Used when screens are protected.
```css
background: var(--ink); border-radius: 12px; aspect-ratio: 16/9;
color: rgba(255,255,255,0.5);
```

---

### In-Page Quick Links (`.quick-links`)

A plain list of anchor links used to let readers jump to specific sections within a case study. No card background — links sit directly on the page surface.

**Usage:** placed at the end of a section (e.g. after HMW Goals) to signpost deep-dive sections below.

```html
<div class="quick-links">
  <p>🧑🏾‍💻 Quick links to deep dive into specific snapshot solutions</p>
  <ul>
    <li><a href="#section-id"><span class="link-text">Link label</span> <span class="arrow">→</span></a></li>
  </ul>
</div>
```

```css
.quick-links { margin: 24px 0; }
.quick-links p { font-size: 0.88rem; color: var(--ink-mid); margin-bottom: 12px; }
.quick-links ul { list-style: none; padding: 0; }
.quick-links li { font-size: 1rem; padding: 6px 0; }

/* Link: blue, semibold, no underline on the container */
.quick-links a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* Underline on text only — not the arrow */
.quick-links a .link-text {
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Arrow animates 8px forward on hover, eases back on mouse-out */
.quick-links a .arrow {
  display: inline-block;
  text-decoration: none;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
.quick-links a:hover .arrow { transform: translateX(8px); }
```

**Rules:**
- Always wrap the label text in `<span class="link-text">` and the arrow in `<span class="arrow">→</span>`
- Do not add a card background (`--faint`) or border — links sit bare on the page
- Arrow easing: `cubic-bezier(0.25, 1, 0.5, 1)` — decelerates into position, same curve on return

---

## Video Player — Hover Video with Control Bar (Scrubber + Countdown + Sound)

Used on case study pages for inline video demos (e.g. loom-reveal, exp-video on EDC).

### Behaviour
- Video is **muted by default** (browser autoplay policy requirement)
- On **mouseenter**: video plays; if user hasn't manually muted, sound unmutes automatically
- On **mouseleave**: video pauses, resets to 0:00, re-mutes; countdown resets to full duration
- **Control bar** fades in on hover — contains scrubber, countdown, and sound button in one row
- **Scrubber**: user can click or drag the dot anywhere along the track to jump to that position
- Sound icon reflects current mute state at all times

### Sound toggle — states
| State | Icon file | Alt text |
|---|---|---|
| Sound on | `images/icons/Sound on.svg` | Sound on |
| Sound off | `images/icons/Sound off.svg` | Sound off |

---

### Control bar — CSS

The control bar is a single row pinned to the bottom of the video. It appears on hover via opacity transition.

```css
/* Wrapper — video must be position:relative */
.video-wrap { position: relative; display: block; }

/* Control bar */
.vid-controls {
  position: absolute; bottom: 0; left: 0; right: 0;
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px;
  background: linear-gradient(transparent, rgba(0,0,0,0.45));
  border-radius: 0 0 8px 8px;
  opacity: 0; transition: opacity 0.2s;
  z-index: 10; pointer-events: none;
}
/* Show on hover of video-wrap or loom-reveal */
.video-wrap:hover .vid-controls,
#loom-reveal:hover .vid-controls,
.vid-controls.is-active { opacity: 1; pointer-events: auto; }

/* Scrubber track — takes remaining width */
.vid-track {
  flex: 1; position: relative; height: 4px;
  background: rgba(255,255,255,0.3); border-radius: 2px;
  cursor: pointer; transition: height 0.15s;
}
.vid-track:hover { height: 6px; }

/* Fill — progress indicator */
.vid-fill {
  position: absolute; left: 0; top: 0; height: 100%;
  background: #fff; border-radius: 2px; width: 0%;
  pointer-events: none;
}

/* Thumb — draggable dot */
.vid-thumb {
  position: absolute; top: 50%; left: 0%;
  transform: translate(-50%, -50%);
  width: 12px; height: 12px; background: #fff; border-radius: 50%;
  box-shadow: 0 1px 4px rgba(0,0,0,0.35); pointer-events: none;
}

/* Countdown label */
.vid-duration {
  font-size: 12px; line-height: 1; color: #fff;
  font-family: var(--sans); font-weight: 500; opacity: 0.9;
  white-space: nowrap; pointer-events: none;
  min-width: 32px; text-align: right;
}

/* Sound button */
.sound-toggle {
  width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
  background: rgba(255,255,255,0.15); border: none;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; padding: 0; transition: background 0.2s;
}
.sound-toggle:hover { background: rgba(255,255,255,0.3); }
.sound-toggle img {
  width: 18px; height: 18px; display: block;
  filter: brightness(0) invert(1);
}
```

---

### HTML structure

```html
<div class="video-wrap">
  <video id="[id]-video" muted loop playsinline
         style="width:100%; display:block; border-radius:8px;">
    <source src="images/folder/video.mp4" type="video/mp4">
  </video>

  <!-- Unified control bar -->
  <div class="vid-controls" id="[id]-controls">
    <div class="vid-track" id="[id]-track">
      <div class="vid-fill"  id="[id]-fill"></div>
      <div class="vid-thumb" id="[id]-thumb"></div>
    </div>
    <span class="vid-duration" id="[id]-duration"></span>
    <button class="sound-toggle" id="[id]-sound-btn" aria-label="Toggle sound">
      <img id="[id]-sound-icon" src="images/icons/Sound on.svg" alt="Sound on">
    </button>
  </div>
</div>
```

> **For loom-style hover-reveals** (inside `.hover-reveal`): place the `.vid-controls` div as a sibling of `.hr-overlay`, still inside the `.hover-reveal` wrapper. Add `#loom-reveal:hover .vid-controls` to the CSS hover rule.

---

### JS pattern

```javascript
(function() {
  const wrap     = document.querySelector('#[id]-video').closest('.video-wrap'); // or getElementById for loom
  const video    = document.getElementById('[id]-video');
  const btn      = document.getElementById('[id]-sound-btn');
  const icon     = document.getElementById('[id]-sound-icon');
  const duration = document.getElementById('[id]-duration');
  const track    = document.getElementById('[id]-track');
  const fill     = document.getElementById('[id]-fill');
  const thumb    = document.getElementById('[id]-thumb');
  if (!video || !wrap) return;

  let userMuted = false;

  function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }
  function setIcon(muted) {
    icon.src = muted ? 'images/icons/Sound off.svg' : 'images/icons/Sound on.svg';
    icon.alt = muted ? 'Sound off' : 'Sound on';
  }
  function updateBar() {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration * 100).toFixed(2) + '%';
    if (fill)  fill.style.width = pct;
    if (thumb) thumb.style.left = pct;
    if (duration) duration.textContent = fmt(video.duration - video.currentTime);
  }

  // Set initial duration
  video.addEventListener('loadedmetadata', function() {
    if (duration) duration.textContent = fmt(video.duration);
  });
  if (video.readyState >= 1 && duration) duration.textContent = fmt(video.duration);

  // Drive bar + countdown on every frame
  video.addEventListener('timeupdate', updateBar);

  // Drag scrubbing
  function scrubTo(e) {
    if (!video.duration) return;
    const rect = track.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = pct * video.duration;
    updateBar();
  }
  let dragging = false;
  track.addEventListener('mousedown', function(e) { e.stopPropagation(); dragging = true; scrubTo(e); });
  document.addEventListener('mousemove', function(e) { if (dragging) scrubTo(e); });
  document.addEventListener('mouseup',   function()  { dragging = false; });

  // Hover play / leave reset
  wrap.addEventListener('mouseenter', function() {
    video.muted = userMuted;
    video.play().catch(function() { video.muted = true; userMuted = true; setIcon(true); });
  });
  wrap.addEventListener('mouseleave', function() {
    if (dragging) return; // don't reset while user is scrubbing
    video.pause();
    video.currentTime = 0;
    video.muted = true;
    if (fill)  fill.style.width = '0%';
    if (thumb) thumb.style.left = '0%';
    if (duration) duration.textContent = fmt(video.duration);
    setIcon(userMuted);
  });

  // Sound toggle
  if (btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      userMuted = !userMuted;
      video.muted = userMuted;
      setIcon(userMuted);
    });
  }
})();
```

---

### Rules
- Replace `[id]` with the video's unique prefix (e.g. `loom`, `exp`)
- Always wrap video + controls in `.video-wrap` with `position: relative; display: block`
- Control bar is a **single unified row**: scrubber left, countdown centre-right, sound button far right
- Countdown shows **total duration at rest**, counts **down to 0:00** while playing, resets on `mouseleave`
- Scrubber thumb is **12×12px white circle**; track is **4px**, expands to 6px on hover
- Sound icon: **18×18px**, always white (`brightness(0) invert(1)`); button: **28×28px** rounded
- Do **not** reset video position while the user is dragging (`if (dragging) return` guard on mouseleave)
- `.vid-controls.is-active` class can be added via JS to keep bar visible programmatically
- Button size: **32×32px**, rounded, `rgba(0,0,0,0.5)` background

---

### Vertical Gap — Media to Body Copy

When body text follows directly after an `.img-card` or video block inside a `.cs-section` (which uses block layout, not flex), add `margin-top: 24px` to the first `<p>` to create the correct gap.

```html
<div class="img-card">...</div>
<p style="margin-top: 24px;">Body copy that follows media...</p>
```

**Rule:** Do not add this gap if the `.cs-section` already uses `display: flex; gap: 24px` — the gap token handles it automatically.

---

### Homepage Card — Image Hover Placeholder

When a work card has no hover video yet, use a duplicate `<img class="card-video">` pointing to the same thumbnail. The CSS hover pattern fades `card-thumb` out and `card-video` in — so the image stays visible on hover with no layout change. Replace with `<video class="card-video">` once the final preview clip is ready.

```html
<div class="card">
  <img class="card-thumb" src="images/[name]-thumb.webp" alt="[Title]">
  <!-- placeholder until hover video is ready — swap for <video> when available -->
  <img class="card-video" src="images/[name]-thumb.webp" alt="">
  <span class="card-new">New</span>
</div>
```

---

## Images

- Format: `.webp` preferred. `.jpg`/`.png` accepted for legacy assets
- Export at **2×** resolution for retina displays
- Stored in `/images/`
- Videos stored in `/videos/`

---

## Rules Summary

- Mobile-first CSS
- No jQuery — vanilla JS only
- No frameworks or npm packages without discussion
- All padding and gaps must be **multiples of 8px**
- H2 → paragraph gap: **16px**
- Card image-to-title gap: **24px**
- Section-to-section gap (before next title): **32px**
- Do not change the colour palette or typography without updating this file
- Do not add horizontal rules between section or page titles
