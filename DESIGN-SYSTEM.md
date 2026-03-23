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

### Carousel
Prev/next buttons, dot indicators, slide counter. Pure JS, no library.

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
Drag handle to reveal before/after states. Uses `clip-path: inset()` driven by pointer position.

### HoverReveal
Dark overlay with play icon appears on hover over a thumbnail. Uses navy (now `--ink`) overlay at 92% opacity.

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
