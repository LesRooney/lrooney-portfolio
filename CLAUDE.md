# Lesley Rooney — Portfolio Site

Static portfolio site deployed on Netlify via GitHub.
Built with plain HTML, CSS, and vanilla JS. No framework. No build step.

## Repo
GitHub: lrooney-portfolio
Staging: https://heartfelt-kataifi-c94998.netlify.app
Production: https://lrooney.com (not yet live on custom domain)

## How deployment works
Push to GitHub main branch → Netlify auto-deploys. No manual steps needed.

## Folder structure
```
/                        — root
├── index.html           — homepage (work card grid + hero)
├── influence.html       — influence page
├── CLAUDE.md            — this file (not deployed)
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
| /medidataedcredesign | EDC-case-study-spec.md | ✅ Built |
| /contech-qflow | Qflow-case-study-spec.md | ✅ Built |
| /qualisflow-02 | Qflow-notifications-spec.md | Not yet built |
| /clinical-risk-based-monitoring | Risk-management-spec.md | Not yet built |
| /homerenter | HomeRenter-spec.md | Not yet built |
| /lesleyrooney-games-sims-vfxworks | Games-VFX-spec.md | Not yet built |

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

## Animation (being added — check current state of index.html before adding)
- Lenis for smooth scroll
- GSAP + ScrollTrigger for scroll-driven animations
- Animations should be subtle — professional portfolio, not a showreel
- On page load: hero text fades in with a stagger
- On scroll: work cards fade and slide up as they enter the viewport (`gsap.from`, `opacity: 0, y: 40`)

## Design system — named patterns

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
