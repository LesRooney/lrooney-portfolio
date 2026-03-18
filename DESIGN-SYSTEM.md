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
| `--paper` | `#F9F8F7` | Page background (html, body, nav backdrop base) |
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
margin-bottom: 16px;   /* 16px gap between h2 and following paragraph */
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

All spacing values are multiples of **8px**. The one deliberate exception is `28px` (section gap), which is a specified design token.

| Step | Value | Usage |
|---|---|---|
| — | `4px` | Micro — badge padding, tiny internal gaps |
| xs | `8px` | Tag row gaps, small component spacing, peek-grid gap |
| sm | `16px` | H2 → paragraph gap, component internal padding, icon row gap |
| — | `20px` | Nav vertical padding, sidebar card padding |
| — | `24px` | Image/placeholder margins, h3 top margin |
| **section** | **`28px`** | **Vertical gap before next section title (`.cs-section` `padding-top`)** |
| — | `32px` | Large grid gaps, sidebar column `padding-top`, card bottom margin |
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
background: rgba(249,248,247,0.92);
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
- `.sidebar-divider` → `display: none`
- `.cs-header` has no `border-bottom`
- `.cs-section` has no `border-bottom`

Borders are permitted only on: footer (`border-top`), nav on scroll (`border-bottom`), list items within components.

---

## Animation

```css
/* Page load fade-up (hero, header) */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Work cards scroll-in */
.card-item { opacity: 0; transform: translateY(32px); transition: opacity 0.55s ease, transform 0.55s ease; }
.card-item.in-view { opacity: 1; transform: translateY(0); }
```

Animations are subtle — professional portfolio, not a showreel.

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

### Carousel
Prev/next buttons, dot indicators, slide counter. Pure JS, no library.

### Before/After Slider
Drag handle to reveal before/after states. Uses `clip-path: inset()` driven by pointer position.

### HoverReveal
Dark overlay with play icon appears on hover over a thumbnail. Uses navy (now `--ink`) overlay at 92% opacity.

### AudioPlayer (EDC only)
Wired to `<audio>` element. Play/pause toggle, range input progress bar, timestamp display.

### NDA Placeholder
Dark (`--ink`) background with lock emoji and "NDA" label. Used when screens are protected.
```css
background: var(--ink); border-radius: 12px; aspect-ratio: 16/9;
color: rgba(255,255,255,0.5);
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
- All padding and gaps must be **multiples of 8px** (exception: `28px` section gap)
- H2 → paragraph gap: **16px**
- Section-to-section gap (before next title): **28px**
- Do not change the colour palette or typography without updating this file
- Do not add horizontal rules between section or page titles
