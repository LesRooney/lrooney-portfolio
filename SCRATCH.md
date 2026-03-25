# Scratch — Current Build State

Temporary working notes. Wipe and rewrite as focus shifts. Do not commit.

---

## Currently working on

`medidataedcredesign.html` — refinements and content edits.

---

## Open questions / decisions pending

- [ ] `games-simulations-films.html` — is this replacing or running alongside `lesleyrooney-games-sims-vfxworks.html`? Both exist.
- [ ] `clinical-risk-based-monitoring.html` — 10 images still needed (see PLACEHOLDER_LOG.md)
- [ ] `qualisflow-02.html` — 10 images still needed (see PLACEHOLDER_LOG.md)
- [ ] Audio src missing on: `clinical-risk-based-monitoring.html`, `qualisflow-02.html`, `lesleyrooney-games-sims-vfxworks.html`, `games-simulations-films.html`
- [ ] Loom hover video `#loom-reveal` — poster/static image behaviour removed (was causing issues). Revisit when a clean static frame is available.
- [ ] `medidataedcredesign.html` — loom-reveal play/pause button state (should show pause when playing) — not yet resolved, parked.

---

## Next up

- Drop images into `clinical-risk-based-monitoring.html` and `qualisflow-02.html`
- Add final hover video for card-0 (EDC) on homepage — replace `<img class="card-video">` placeholder with `<video>`
- Design system MD files: BA slider pattern still to be documented

---

## Decisions made this session (2026-03-24)

- **Video control bar**: Replaced simple bottom timeline + floating sound button on `exp-video` and `loom-video` with unified `.vid-controls` bar (draggable scrubber + countdown + sound toggle). Hidden at rest, appears on hover. Pattern documented in DESIGN-SYSTEM.md.
- **Countdown timer**: Duration counts DOWN while playing (not up). Resets to empty on mouseleave.
- **Homepage card-0 hover**: Added `<img class="card-video">` static image placeholder (same src as thumb) until final hover video is ready.
- **loom-video static poster**: Attempted — removed as it caused rendering issues. Video shows first frame at rest.
- **DD04 carousel**: `SystemQueryIssue_B.webp` (Story of query object) replaced with `MD_NEXTLargeStage02.webp` (Patients grid).
- **Engineering carousel**: Confirmed 3 slides: MD_LoomCommunication → MD_NEXTLargeStage02 → MD_FigmaProtoTypeLoops. `MD_DesignSystemSpreadSheetValueBuckets.webp` retired.
- **Outcomes section**: "User outcomes" h3 renamed to "User Benefits".
- **DD01 caption**: Updated to "Hover to listen to scrappy design experiments, excerpted from a compilation capturing successes and failures during concept testing."
- **All Brains section**: Removed "After the mixed reception of the 2017 redesign," from body copy.
- **Football video section**: Added `margin-top: 24px` to first `<p>` after the `.img-card` video.
- **Sidebar duration**: `~2.5 years (Multi-phased releases and dependencies. Last release 2026)`
- Added `MD_RaveEDCDiscoveryStatic.webp` as EDC image asset (used briefly as loom poster, now available but unplaced).
