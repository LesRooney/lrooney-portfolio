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
- Password-protected cases use the site password: RooneyFlow
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
- Nav background: `rgba(253, 253, 252, 0.88)` with `backdrop-filter: blur(12px)`
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

## Owner
Lesley Rooney — Senior Product Designer
Contact: ley.rooney@gmail.com
LinkedIn: linkedin.com/in/lesleyrooneydesign
