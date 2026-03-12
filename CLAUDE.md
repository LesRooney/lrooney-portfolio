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

## Case study pages (not yet built)
Read the relevant spec file in /specs before building or editing any of these.

| Page URL | Spec file |
|---|---|
| /medidataedcredesign | EDC-case-study-spec.md |
| /contech-qflow | Qflow-case-study-spec.md |
| /qualisflow-02 | Qflow-notifications-spec.md |
| /clinical-risk-based-monitoring | Risk-management-spec.md |
| /homerenter | HomeRenter-spec.md |
| /lesleyrooney-games-sims-vfxworks | Games-VFX-spec.md |

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

## Owner
Lesley Rooney — Senior Product Designer
Contact: ley.rooney@gmail.com
LinkedIn: linkedin.com/in/lesleyrooneydesign
