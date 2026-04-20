# Lesley Rooney — Portfolio Site

Static portfolio site deployed on Cloudflare Pages via GitHub.
Built with plain HTML, CSS, and vanilla JS. No framework. No build step.

## Repo
GitHub: lrooney-portfolio
Production: https://lrooney.com

## How deployment works
Push to GitHub main branch → Cloudflare Pages auto-deploys. No manual steps needed.

## Folder structure
```
/                        — root
├── index.html           — homepage (work card grid + hero)
├── influence.html       — influence page
├── password.html        — Cloudflare Pages password gate
├── coming-soon.html     — coming soon placeholder
├── CLAUDE.md            — this file (not deployed)
├── /functions           — Cloudflare Pages serverless functions
│   ├── _middleware.js   — password protection middleware
│   └── check-password.js — password validation endpoint
├── /specs               — case study build briefs (not deployed)
│   ├── EDC-case-study-spec.md
│   ├── Qflow-case-study-spec.md
│   ├── Qflow-notifications-spec.md
│   ├── Risk-management-spec.md
│   ├── HomeRenter-spec.md
│   └── Games-VFX-spec.md
├── /images              — all static images (.webp preferred)
├── /videos              — preview/hover videos
└── /styles              — CSS files
```

## Case study pages
Read the relevant spec file in /specs before building or editing any of these.

| Page URL | Spec file | Status |
|---|---|---|
| /medidataedcredesign | EDC-case-study-spec.md | ✅ Built · password protected |
| /contech-qflow | Qflow-case-study-spec.md | ✅ Built |
| /qualisflow-02 | Qflow-notifications-spec.md | ✅ Built · password protected |
| /clinical-risk-based-monitoring | Risk-management-spec.md | ✅ Built · password protected |
| /homerenter | HomeRenter-spec.md | ✅ Built |
| /lesleyrooney-games-sims-vfxworks | Games-VFX-spec.md | ✅ Built |

Note: `games-simulations-films.html` also exists as an alternate URL for the Games/VFX page.

## Shared components (build once, import across all case study pages)
Build these first before any case study pages.

- **IconRow** — horizontal strip of tool logos with labels
- **PeekGrid** — footer thumbnail grid, 8–9 square thumbnails, hover reveals a peek of the case study
- **Carousel** — image slideshow with prev/next arrows, used heavily in EDC and HomeRenter
- **LightboxGallery** — click image to open fullscreen with prev/next navigation, used in Games/VFX
- **HoverReveal** — hover a thumbnail to reveal a second image or video beneath
- **HoverAudio** — hover a thumbnail to play a short audio clip (2 min max)
- **AudioPlayer** — standalone audio player with play/pause and progress bar (EDC only — NotebookLM podcast)

## Design conventions
- Mobile-first CSS
- No jQuery — vanilla JS only
- Images: .webp format preferred, export at 2× for retina
- Fonts: match whatever is currently in index.html — do not change typography without asking
- Colour palette: do not change site colours without asking
- Do not add frameworks or npm packages without asking first

## NDA / password cases
- NDA cases: show a blurred placeholder image + lock icon. Do not display actual screens.
- The lock icon and "NDA" label are already used on the homepage cards — match that pattern
- Password protection is enforced server-side via Cloudflare Pages middleware (`/functions/_middleware.js`)
- Protected pages: `/medidataedcredesign`, `/clinical-risk-based-monitoring`, `/qualisflow-02`
- Auth is cookie-based (`cfp_auth=1`); unauthenticated visitors are redirected to `/password.html`

## Animation (check current state of index.html before adding or changing)
- Lenis for smooth scroll
- GSAP + ScrollTrigger for scroll-driven animations
- Animations should be subtle — professional portfolio, not a showreel

### h1 hero text
- Markup is manually split into `<span class="h1-word">` and `<span class="h1-char">` — no SplitText plugin (paid)
- "Hi," fades in at 180ms, "I'm" at 430ms, "Lesley" letter-by-letter: delay 710ms, duration 350ms, stagger 80ms per letter
- CSS: `.h1-word { display: inline-block; }` and `.h1-char { display: inline-block; }`
- **Do NOT add a ScrollTrigger fade-out on `.hero h1`** — this was tried and removed. The h1 sits too close to the top of the viewport; the trigger fires before scrollY=0 and leaves the h1 at ~0.5 opacity at the top of the page.

### work cards (IntersectionObserver, not GSAP)
- Cards start: `opacity: 0; transform: translateY(32px); transition: opacity 0.55s ease, transform 0.55s ease`
- IntersectionObserver adds `in-view` class: `opacity: 1; transform: translateY(0)`
- Custom per-card stagger delays (not a uniform formula):
  - Row 1: card 0 → 0ms, card 1 → 180ms, card 2 → 350ms
  - Row 2: card 3 → 0ms, card 4 → 170ms, card 5 → 350ms

### bfcache / hash-navigation fixes
- `pageshow` event handler handles bfcache restore (`e.persisted`): removes `#pt-overlay`, scrolls to top, clears GSAP props on `.hero`, `.hero h1`, `.h1-word`, `.h1-char`, `.hero-intro`, `.intro-block`, then calls `ScrollTrigger.refresh()`
- Hash navigation fix (e.g. clicking "Work" from a case study → `/#work`): on DOMContentLoaded, any `.intro-block` elements that are already above the viewport (start position above current scroll) get `in-view` class added immediately, bypassing IntersectionObserver

## Design system — named patterns

### top nav

Two behaviours, one shared style system.

**Shared font styles (both variants):**
- Logo: `font-family: var(--serif); font-size: 1rem; font-weight: 600; color: var(--ink); text-decoration: none;`
- Links: `font-size: 0.8rem; font-weight: 500; color: var(--ink); letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; transition: opacity 0.2s;`
- Links hover: `opacity: 0.5`
- Nav background: `rgba(253, 253, 252, 0.30)` with `backdrop-filter: blur(20px)` and `-webkit-backdrop-filter: blur(20px)`
- Border bottom: `1px solid var(--rule)`

**Variant 1 — Homepage scroll nav (`#home-nav`)**
- `position: fixed; top: 0; left: 0; right: 0; z-index: 100`
- Hidden on load (`opacity: 0; pointer-events: none`)
- Fades in (no slide) via GSAP when scrollY reaches 260px — triggered when "Hi, I'm Lesley" h1 is no longer visible
- Fades out when scrolling back up past that point
- Links: Influence · About · Get in Touch (no Work link on homepage)
- Hidden on mobile (`display: none` below 900px)
- Inner layout: `max-width: var(--max); height: 56px; display: flex; align-items: center; justify-content: space-between; padding: 0 48px`

**Variant 2 — Case study persistent nav (`#nav`)**
- `position: fixed; top: 0; left: 0; right: 0; z-index: 100`
- Always visible (no scroll trigger)
- Links: Work · Influence · About · Get in Touch
- May include optional audio controls (`#nav-audio-controls`) — narration play/pause pill, shown only on EDC page
- CSS classes: `.nav-logo`, `.nav-links`, `.nav-right`

### image card (aka img-card rules, apply to ALL case study pages)
- `padding: 20px` on all sides
- No border (`border: none` — borders were removed from the design system)
- `border-radius: 16px`, `background: var(--faint)`
- `.img-card .cs-caption` → `margin: 0 0 20px; font-size: 0.82rem`
- `.img-card img` → `border-radius: 8px`

**Scroll-reveal animation (required on all case study pages)**
Every `.img-card` fades in and slides up when it enters the viewport. Add to each page's `<style>` block:
```css
/* scroll-reveal */
.img-card {
  opacity: 0;
  transform: translateY(56px);
  transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
.img-card.in-view {
  opacity: 1;
  transform: translateY(0);
}
```
Add to each page's JS (before `</script>` or as a new `<script>` before `</body>`):
```js
// scroll-reveal
(function() {
  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.img-card').forEach(function(el) {
    revealObs.observe(el);
  });
})();
```
- Threshold `0.08` — triggers when 8% of the card is visible
- Animates once only (`unobserve` after trigger)
- Currently live on: `medidataedcredesign.html`, `contech-qflow.html`, `homerenter.html`, `clinical-risk-based-monitoring.html`

### postit note (aka postit-over-image)
When a caption needs to sit over/below an image as a sticky note:
1. Wrap the image/video card in a `position: relative` container with enough `margin-bottom` to clear the postit (typically `margin-bottom: [postit-bottom-offset + postit-height]px`)
2. Place the postit absolutely inside that wrapper:
```html
<div style="position: relative; display: flex; justify-content: center; margin-bottom: 260px;">
  <div class="img-card" style="width: 70%; padding: 20px; box-sizing: border-box;">
    <!-- image or video here -->
  </div>
  <div class="postit postit--2" style="position: absolute; bottom: -248px; right: 10%; width: 260px; z-index: 2;">
    <p><strong>Key phrase</strong> rest of caption text.</p>
  </div>
</div>
```
- Use `.postit--1` through `.postit--5` for subtle rotation variants
- `right: 10%` positions it bottom-right; adjust as needed
- Bold the key phrase with `<strong>` inside the `<p>`
- To override a class rotation, add `transform: rotate(Ndeg)` inline (e.g. to flip direction)
- To align two side-by-side postits at the same height, use matching `bottom: -Npx` values (not `top:`)
- For postits that should overlap the bottom edge of the image, use a negative `bottom` value smaller than the image height

### info card (persona / list card)
Used for "Meet the Users" persona sections and grouped list cards (e.g. Sites, Client Side).
- `background: #E7F2FE` — matches the business outcomes card colour from EDC redesign
- `border-radius: 16px; padding: 16px 20px`
- Label: `<p class="persona-section-label">` — small uppercase label above the list
- List: `<ul class="persona-list">` — no bullet, emoji + bold name + dash + description

```html
<div style="background: #E7F2FE; border-radius: 16px; padding: 16px 20px;">
  <p class="persona-section-label">Section Label</p>
  <ul class="persona-list">
    <li>🧑🏻‍⚕️ <strong>Role Name</strong> — Description of what they do.</li>
  </ul>
</div>
```

### postit (standard row layout)
```html
<div class="postit-row">
  <div class="postit postit--1"><span class="postit-emoji">🧍</span><p>Text</p></div>
  <div class="postit postit--2"><span class="postit-emoji">📊</span><p>Text</p></div>
  <div class="postit postit--3"><span class="postit-emoji">💡</span><p>Text</p></div>
</div>
```
Rotation: --1 = -2deg, --2 = 1.5deg, --3 = -1deg, --4 = 0.8deg, --5 = -1.5deg

### section eyebrow (optional section title)
Used above H2s or content blocks to label a section — e.g. "Deep Dive 01", "Sites", "Client Side".

```css
font-size: 0.75rem;
font-weight: 500;
letter-spacing: 0.1em;
text-transform: uppercase;
color: var(--ink-mid);
margin-bottom: 10px;
```

CSS class: `.cs-eyebrow` (also `.dd-label`, `.persona-section-label` on the EDC page — all share identical styles)

```html
<p class="cs-eyebrow">Section Label</p>
<h2>Section Title</h2>
```

### body copy font weight (typography pattern)
Two modes, used consistently across all case study pages:

**1. First-sentence bold** — for introductory / overview paragraphs:
```html
<p><strong>First sentence goes here, ending at the full stop.</strong> The rest of the paragraph continues in normal weight.</p>
```

**2. Key-phrase bold** — for analytical / reflective paragraphs, bold specific terms mid-sentence:
```html
<p>Intro clause, then <strong>the key insight or finding is bolded like this,</strong> and the rest stays normal weight.</p>
```
- Never bold an entire paragraph — always leave some normal-weight text for contrast
- Bold the most important clause, fact, or outcome — not decoration
- Both modes can appear in the same section

### square-hover (nav / footer link hover indicator)
A 12×12px black square that morphs from invisible dot → horizontal line → full square on hover. Used on the homepage `#home-nav` "About Me" trigger and all four footer links.

**Animation sequence (0.28s, ease-out):**
1. Invisible 1×1px dot appears (opacity 0 → 1)
2. Expands to 12×1px horizontal line
3. Grows to full 12×12px square, decelerating into final size

**Keyframes (defined once in index.html `<style>`):**
```css
@keyframes squareMorph {
  0%   { transform: translateY(-50%) scaleX(0.083) scaleY(0.083); opacity: 0; }
  18%  { transform: translateY(-50%) scaleX(0.083) scaleY(0.083); opacity: 1; }
  58%  { transform: translateY(-50%) scaleX(1)     scaleY(0.083); opacity: 1; }
  100% { transform: translateY(-50%) scaleX(1)     scaleY(1);     opacity: 1; }
}
```

**Apply to any link or trigger with `::before`:**
```css
.your-element {
  position: relative; /* required */
}
.your-element::before {
  content: '';
  position: absolute;
  right: calc(100% + 4px); /* 4px gap to the left of the element */
  top: 50%;
  transform: translateY(-50%) scaleX(0.083) scaleY(0.083);
  transform-origin: center center;
  width: 12px;
  height: 12px;
  background: var(--ink);
  border-radius: 4px;
  opacity: 0;
}
.your-element:hover::before {
  animation: squareMorph 0.28s ease-out forwards;
}
```

**Notes:**
- `scaleX(0.083)` = 1px of the 12px element (1/12 ≈ 0.083)
- The saved slide-in variant (square travels from left) is stored as commented-out CSS in index.html — search `SAVED: slide-in behaviour` to restore
- For hover text dimming: use `color` transition (not `opacity`) so the square colour is unaffected by parent opacity

### work card hover (homepage grid)
On hover, cards scale up ~10px and lift slightly:
```css
.card-item { position: relative; }
.card-item:hover { z-index: 2; } /* ensure scaled card renders above neighbours */
.card-item:hover .card {
  box-shadow: 0 16px 48px rgba(20,20,18,0.14);
  transform: translateY(-3px) scale(1.034); /* ~10px on a 296px card */
}
.card { transition: box-shadow 0.3s ease, transform 0.3s ease, filter 0.35s ease, opacity 0.35s ease; }
```

### work section top fade (homepage)
The `.work-section` uses `mask-image` to fade in from transparent at the top edge — content becomes fully visible 4px above the `.work-header`. Reversible: remove the two labelled lines to undo.
```css
/* ── WORK SECTION TOP FADE — reversible, remove the two lines below to undo ── */
.work-section {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 44px);
  mask-image: linear-gradient(to bottom, transparent 0px, black 44px);
}
```
- `.work-header` sits at `padding-top: 48px`, so 44px = fully visible 4px before the header
- Adjust the `44px` stop to change where full opacity is reached

### password page — individual character boxes
Each character of the password gets its own input. Real characters are stored in `realValues[]`; display shows `*` after a 1000ms delay. Case-insensitive check is done server-side in `functions/check-password.js`.

**HTML structure — wrap each input in `.char-wrap` (required for caret positioning):**
```html
<div class="char-inputs" id="charInputs">
  <div class="char-wrap"><input type="text" class="char-box" maxlength="1" autocomplete="off" inputmode="text" spellcheck="false" aria-label="Character 1"></div>
  <!-- repeat × 10 -->
</div>
```

**CSS:**
```css
.char-inputs { display: flex; gap: 6px; margin-bottom: 10px; justify-content: flex-start; }
.char-wrap { position: relative; flex-shrink: 0; }
.char-box {
  width: 42px; height: 52px;
  border: 1.5px solid var(--rule); border-radius: 12px;
  background: var(--paper); font-size: 1.3rem; font-weight: 500;
  text-align: center; color: var(--ink); outline: none;
  caret-color: transparent; /* custom GSAP caret replaces native */
  transition: border-color 0.15s, background 0.15s;
}
.char-box:focus { border-color: var(--blue); border-width: 2px; background: #fff; }
.char-box.error-state { border-color: var(--red); border-width: 2px; }
```

### password page — GSAP blinking caret
A custom `2px × 22px` blue vertical line blinks inside whichever char-box is active. GSAP is loaded via CDN on `password.html` (not bundled with the rest of the site).

**CSS:**
```css
.pw-caret {
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 2px; height: 22px; background: #2563eb;
  border-radius: 2px; pointer-events: none;
}
```

**JS pattern:**
```js
const caret = document.createElement('div');
caret.className = 'pw-caret';
let caretTween = null;
let blurTimer = null;

function showCaret(box) {
  clearTimeout(blurTimer); // cancel any pending hide (focus moved between boxes)
  if (caret.parentElement) caret.parentElement.removeChild(caret);
  if (caretTween) caretTween.kill();
  box.parentElement.appendChild(caret); // appends to .char-wrap
  caretTween = gsap.to(caret, { opacity: 0, duration: 0.5, repeat: -1, yoyo: true, ease: 'none' });
}

function hideCaret() {
  blurTimer = setTimeout(function() { // defer so focus-to-next-box cancels this
    if (caretTween) { caretTween.kill(); caretTween = null; }
    if (caret.parentElement) caret.parentElement.removeChild(caret);
  }, 0);
}
```
- Wire up: `box.addEventListener('focus', () => { box.select(); showCaret(box); })`
- Wire up: `box.addEventListener('blur', hideCaret)`
- **Critical:** attach all event listeners first, then call `boxes[0].focus()` — if focus fires before listeners are attached, `showCaret` will not trigger

### password page — entrance animation
Intro text, character boxes, and submit button stagger in from slightly above their resting position on page load:
```css
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.intro-text       { opacity: 0; animation: slideDown 0.45s ease-out 0.1s forwards; }
.char-inputs      { opacity: 0; animation: slideDown 0.45s ease-out 0.3s forwards; }
button[type="submit"] { opacity: 0; animation: slideDown 0.45s ease-out 0.5s forwards; }
```
Stagger order: intro text (0.1s) → char boxes (0.3s) → button (0.5s). All slide from behind the "Password required" h1.

### vertical divider (two-column layout)
Used to separate two side-by-side content blocks (e.g. persona columns) with a 24px gap on each side:
```html
<div style="display: flex; gap: 0; align-items: flex-start;">
  <div style="flex: 1; padding-right: 24px;"><!-- left content --></div>
  <div style="width: 1px; background: var(--rule); align-self: stretch; flex-shrink: 0;"></div>
  <div style="flex: 1; padding-left: 24px;"><!-- right content --></div>
</div>
```

### CSS specificity — eyebrow labels inside deep-dive sections
`.dd-label`, `.persona-section-label`, and `.cs-eyebrow` all share the same styles (0.75rem, uppercase, `var(--ink-mid)`). But inside `.deep-dive` or `.cs-section`, a broad `p` rule (specificity 0,1,1) can override a class-only rule (0,1,0). Fix by doubling up the selector:
```css
p.dd-label, .deep-dive p.dd-label { font-size: 0.75rem; ... }
p.persona-section-label { font-size: 0.75rem; ... }
```

### video-wrap (hover-to-play with controls)
Hover plays video, shows scrubber + duration + sound toggle. Sound icon = 24px.
```html
<div class="video-wrap">
  <video id="my-video" muted loop playsinline style="width:100%; border-radius:8px; display:block;">
    <source src="path/to/video.mp4" type="video/mp4">
  </video>
  <div class="vid-controls" id="my-controls">
    <div class="vid-track" id="my-track">
      <div class="vid-fill" id="my-fill" style="width:0%"></div>
      <div class="vid-thumb" id="my-thumb" style="left:0%"></div>
    </div>
    <span class="vid-duration" id="my-duration">0:00</span>
    <button class="sound-toggle" id="my-sound-btn" aria-label="Toggle sound">
      <img id="my-sound-icon" src="images/icons/Sound on.svg" alt="Sound on">
    </button>
  </div>
</div>
```
IDs must be unique per page. JS auto-initialises all `.video-wrap` elements.

### before/after slider (BA slider)
Drag-to-reveal comparison between two images or a video (after) vs image(s) (before). Auto-sweeps on load; pauses on interaction, resumes 500ms after release. Used on: `medidataedcredesign.html`, `clinical-risk-based-monitoring.html`.

**CSS:**
```css
.ba-slider {
  position: relative; overflow: hidden; border-radius: 12px;
  cursor: ew-resize; user-select: none; touch-action: none; margin: 20px 0;
}
.ba-slider .ba-before { display: block; width: 100%; }
.ba-slider .ba-after {
  position: absolute; inset: 0; overflow: hidden; clip-path: inset(0 50% 0 0);
}
.ba-handle {
  position: absolute; top: 0; bottom: 0; left: 50%;
  width: 2px; background: #fff; transform: translateX(-50%);
  pointer-events: none; display: flex; align-items: center; justify-content: center;
}
.ba-grip {
  width: 44px; height: 44px; border-radius: 50%; background: #fff;
  border: 1.5px solid rgba(0,0,0,0.12); display: flex; align-items: center;
  justify-content: center; gap: 3px; box-shadow: 0 2px 12px rgba(0,0,0,0.18);
}
.ba-arrow { width: 0; height: 0; border-style: solid; }
.ba-arrow.left  { border-width: 5px 7px 5px 0; border-color: transparent var(--ink-mid) transparent transparent; }
.ba-arrow.right { border-width: 5px 0 5px 7px; border-color: transparent transparent transparent var(--ink-mid); }
.ba-label-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
.ba-pill {
  font-size: 0.68rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase;
  padding: 4px 10px; border-radius: 4px; background: #000; color: #fff; pointer-events: none;
}
.ba-handle.ba-hover { background: #0070BF; }
.ba-handle.ba-hover .ba-grip { background: #0070BF; border-color: #0070BF; }
.ba-handle.ba-hover .ba-arrow.left  { border-color: transparent #fff transparent transparent; }
.ba-handle.ba-hover .ba-arrow.right { border-color: transparent transparent transparent #fff; }
```

**HTML structure:**
```html
<div class="ba-label-row">
  <span class="ba-pill before">Before Label</span>
  <span class="ba-pill after">After Label</span>
</div>
<div class="ba-slider" data-ba-slider style="margin: 0;">
  <!-- BEFORE — bottom layer, sets height -->
  <div class="ba-before">
    <img src="path/to/before.webp" alt="Before" style="width:100%; display:block;">
  </div>
  <!-- AFTER — top layer, clipped by handle; can be a video -->
  <div class="ba-after">
    <video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block;">
      <source src="path/to/after.mp4" type="video/mp4">
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
```

**Notes:**
- `data-ba-slider` attribute is the JS initialisation hook — JS auto-finds all `[data-ba-slider]` elements
- Before layer can also use a `ba-before-reel` with multiple `ba-reel-img` images that auto-crossfade (used in EDC)
- Auto-sweep: glides 10%→90%→10% over 4s, pauses 1.2s at each end; any user touch cancels sweep and resumes after 500ms

### device hero mockup (SVG frame + video screen + toolbar overlay)
Used to show a product screenshot inside a realistic laptop frame. Three layers stacked with `position: absolute`.

**Pattern (clinical-risk-based-monitoring.html):**
```html
<div style="position: relative; display: block; line-height: 0;">
  <!-- 1. Laptop SVG frame — sets container size -->
  <img src="images/Mockups/Microsoft Surface Book.svg" alt="Microsoft Surface Book laptop frame" style="width: 100%; display: block;">
  <!-- 2. Video screen — absolutely positioned inside the screen cutout -->
  <video autoplay loop muted playsinline
    style="position: absolute; left: 12.01%; top: calc(2.50% + 28px); width: 76.20%; height: 91.18%; object-fit: contain; border-radius: 4px;">
    <source src="path/to/screen.mp4" type="video/mp4">
  </video>
  <!-- 3. Toolbar SVG overlay — sits above the video, pointer-events: none -->
  <img src="images/Mockups/Toolbar.svg" alt=""
    style="position: absolute; left: 12.01%; top: calc(2.50% + 28px); width: 76.20%; height: auto; display: block; pointer-events: none;">
</div>
```

**Notes:**
- `line-height: 0` on the wrapper removes the descender gap below the inline SVG image
- Video and Toolbar overlay share the same `left`, `top`, and `width` values — always move them together as a unit
- `top: calc(2.50% + 28px)` — the pixel offset accounts for the browser chrome bar in the SVG frame
- `height: 91.18%` on the video fills the screen area; use `object-fit: contain` to avoid cropping
- When nudging position, use `calc()` to add pixel offsets to the percentage (e.g. `calc(12.01% + 4px)`)

### back to work button (page footer)
Replaces the PeekGrid footer on pages where a full peek grid isn't appropriate. Used on: `lesleyrooney-games-sims-vfxworks.html`, `medidataedcredesign.html`.

```css
.back-to-work-wrap {
  border-top: 1px solid var(--rule);
  padding: 56px 40px 80px;
  max-width: var(--max);
  margin: 0 auto;
}
.back-to-work-link {
  display: inline-flex; align-items: center; gap: 10px; margin-left: 30px;
  font-family: var(--sans); font-size: 1rem; font-weight: 700;
  color: #2563eb; text-decoration: none; letter-spacing: 0.02em;
  border-bottom: 1px solid #2563eb; padding-bottom: 2px; transition: color 0.2s ease;
}
.back-to-work-link:hover { color: #1d4ed8; }
.back-to-work-arrow { display: inline-block; transition: transform 0.25s ease; }
.back-to-work-link:hover .back-to-work-arrow { transform: translateX(-10px); }
@media (max-width: 600px) { .back-to-work-wrap { padding: 40px 24px 60px; } }
```

```html
<div class="back-to-work-wrap">
  <a href="index.html" class="back-to-work-link">
    <span class="back-to-work-arrow">←</span> Back to work
  </a>
</div>
```

## Owner
Lesley Rooney — Senior Product Designer
Contact: ley.rooney@gmail.com
LinkedIn: linkedin.com/in/lesleyrooneydesign
