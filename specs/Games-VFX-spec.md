# Games, Simulations & VFX — Component & Content Spec
## lrooney.com/lesleyrooney-games-sims-vfxworks

This document maps every section of the current Wix page into components and media placeholders for the Netlify rebuild. Use it as the build brief.

---

## Notes Before You Build

This page is structurally unlike all the other case studies. It's not a narrative — it's a **portfolio gallery** organised into seven discrete project sections, each containing multiple zoomable images and GIFs. There are no hover audio interactions, no audio players, no carousels in the standard sense. The dominant pattern is `<ZoomableImage>` (press to zoom / lightbox) used throughout.

Several sections end with a **"Show More"** expand that hides additional images — confirmed visible in the scrape for Walter Mitty (implied), The Last Game, Beetle Car, Mari Challenge, Hugo, ACT-UK Simulation, and the Hard Surface personal project. The games section at the bottom also has a "Show More." This means **not all images are fully visible** in the scrape — the image counts below may be incomplete. Lesley will need to verify total image count per section.

This is also the most GIF-heavy page of all six — at least 15 animated GIFs confirmed, with more potentially hidden behind "Show More."

There's a notable **YouTube link** in the intro copy for The Last Game, GI Joe 2, Enders Game, and Hugo — these should be preserved as external links on the new site.

The showreel section references a 2013 texturing reel but no embed was captured in the scrape — this likely requires a video embed (YouTube or Vimeo).

No `<IconRow>` component — tools are listed as text labels with small logo images (30×30px) rather than a proper icon strip. The logos are very small and some rendered as SVG placeholders. On the new site, replace with a proper `<IconRow>` using correctly sized SVGs.

---

## Page Sections (in order)

---

### 1. HERO IMAGE

**Type:** Full-width image
**Dimensions:** 980×424px
**Placeholder:** `[IMAGE: games-vfx-hero.jpg — 980×424px, VFX/games context]`

---

### 2. PAGE TITLE

**Type:** H2
**Content:** Previous Professional Work in Games, Commercials, and Films

---

### 3. TOOLS

**Type:** Icon row with small logo images
**Heading:** Tools

**Tools listed (with logo images at 30×30px):**
- Photoshop `[SVG placeholder — no image captured]`
- Mari `[SVG placeholder]`
- After Effects `[SVG placeholder]`
- 3DS Max `[SVG placeholder]`
- Cinema 4D `[SVG placeholder]`
- UV Headus `[IMAGE: uvheadus-logo.jpg — 30×30px]`
- Sony Vegas `[IMAGE: sonyvegas-logo.png — 30×30px]`
- Shot Gun `[IMAGE: shotgun-logo.png — 29×30px]`
- Unity `[SVG placeholder]`

**Component needed:** `<IconRow>`
**Notes:** The Wix tool logos are a mix — some rendered as SVG placeholders (meaning the logo wasn't loaded) and some as tiny 30×30 images. Replace all with properly sized SVG icons on the new site. Shotgun is now called **ShotGrid** (rebranded by Autodesk in 2021) — confirm with Lesley whether to update the label. UV Headus and Sony Vegas may be harder to source SVG logos for; text labels with a generic icon are an acceptable fallback.

---

### 4. SHOWREEL 2013

**Type:** Video embed
**Heading:** Showreel 2013
**Description:**
> My texturing showreel showcasing VFX work from hero pieces to background assets

**Component needed:** `<VideoEmbed>` — YouTube or Vimeo embed
**Placeholder:** `[VIDEO: showreel-2013 — texturing showreel, confirm YouTube/Vimeo URL with Lesley]`
**Notes:** No video was captured in the scrape — the embed either failed to load or is embedded via Wix's video widget. Lesley will need to provide the video URL.

---

### 5. PROFESSIONAL WORK: WALTER MITTY

**Type:** Section header + body text + zoomable image gallery
**Heading:** Professional Work: Walter Mitty
**Description:** Textures improvement on road bits.

**Component needed:** `<LightboxGallery>` — 3 confirmed images, "press to zoom" on each. Additional images may be hidden behind "Show More."

**Placeholders:**
- `[IMAGE: walter-mitty-01.jpg — 980×668px, road texture work, press to zoom]`
- `[IMAGE: walter-mitty-02.jpg — 980×649px, press to zoom]`
- `[IMAGE: walter-mitty-03.jpg — 980×670px, press to zoom]`

**Notes:** The Wix layout implies a "Show More" may be present here. Confirm total image count with Lesley.

---

### 6. PROFESSIONAL WORK: THE LAST GAME (Nike)

**Type:** Section header + body text + mixed image/GIF gallery
**Heading:** Professional Work: The Last Game
**Description:**
> Creating textures for the commercial [The Last Game](https://www.youtube.com/watch?v=CJ2xU9GUPVY) using [Mari](https://www.foundry.com/products/mari).

**External links to preserve:**
- YouTube: https://www.youtube.com/watch?v=CJ2xU9GUPVY
- Mari product page: https://www.foundry.com/products/mari

**Component needed:** `<LightboxGallery>` — 9 confirmed items (mix of images and GIFs), each "press to zoom." Additional images hidden behind "Show More."

**Placeholders:**
- `[IMAGE: last-game-dock-shot.jpg — 980×588px, labelled "Dock shot", dock wall and props textures, press to zoom]`
- `[GIF: last-game-mari-screenshot.gif — 640×360px, labelled "Mari Screen shot", press to zoom]`
- `[IMAGE: last-game-windmill.jpg — 980×642px, labelled "Windmill textures and adjustments to stone wall textures", press to zoom]`
- `[IMAGE: last-game-shopfront.png — 980×649px, labelled "Shop front textures", press to zoom]`
- `[IMAGE: last-game-shop-pavement.jpg — 980×642px, labelled "Shop and pavement textures", press to zoom]`
- `[GIF: last-game-animation.gif — 960×540px, press to zoom]`
- `[IMAGE: last-game-wall.jpg — 980×618px, labelled "Wall textures", press to zoom]`
- `[IMAGE: last-game-09.jpg — 980×642px, press to zoom]`
- `[IMAGE: last-game-10.jpg — 980×601px, press to zoom]`

**Notes:** "Show More" confirmed — additional images exist beyond these 9. Confirm full count with Lesley.

---

### 7. PERSONAL WORK: BEETLE CAR

**Type:** Section header + body text + mixed image/GIF gallery
**Heading:** Personal Work: Beetle Car
**Description:**
> Downloaded internet model with additional modelling details. Created UV and all texturing using Cinema 4D, Headus UVLayout, 3ds Max, ZBrush and VRay for rendering.

**Component needed:** `<LightboxGallery>` — 9 confirmed items, each "press to zoom." Additional images behind "Show More."

**Placeholders:**
- `[GIF: beetle-muddy-animation.gif — 316×248px, labelled "Muddy look — Same asset with alternative texture look", press to zoom]`
- `[IMAGE: beetle-muddy-still.jpg — 432×292px, labelled "Muddy look", press to zoom]`
- `[IMAGE: beetle-rusty-still.jpg — 720×486px, labelled "Rusty look — Same asset with alternative texture look", press to zoom]`
- `[GIF: beetle-rusty-animation.gif — 420×272px, labelled "Rusty Look", press to zoom]`
- `[IMAGE: beetle-texture-renders.jpg — 980×980px, labelled "Different textures for renders — Rusty textures with AO, colour and specular maps", press to zoom]` *(2× source: _d_1475_1475)*
- `[IMAGE: beetle-photoshop-textures.jpg — 980×392px, labelled "Photoshop textures — Created in large resolution, then optimised down for rendering", press to zoom]` *(2× source: _d_3686_1475)*
- `[IMAGE: beetle-rusty-renders.jpg — 980×764px, labelled "Rusty look — Different rendered views", press to zoom]`
- `[IMAGE: beetle-muddy-frontback.jpg — 710×822px, labelled "Muddy look — Front and back view", press to zoom]`
- `[IMAGE: beetle-muddy-top.jpg — 690×451px, labelled "Muddy look — Top view of beetle car", press to zoom]`

**Notes:** "Show More" confirmed — more images exist. Confirm full count with Lesley.

---

### 8. PERSONAL WORK: MARI CHALLENGE

**Type:** Section header + body text + mixed image/GIF gallery
**Heading:** Personal Work: Mari Challenge Work
**Description:**
> Screenshots of textures created for [Mari competition](https://www.foundry.com/products/mari). Model provided by Jakob Kousholts

**External link to preserve:**
- Mari competition: https://www.foundry.com/products/mari

**Component needed:** `<LightboxGallery>` — 8 confirmed items, each "press to zoom." Additional images behind "Show More."

**Placeholders:**
- `[GIF: mari-challenge-face-detail.gif — 428×360px, labelled "Detail of face — Separated textures for greater adjustability", press to zoom]`
- `[IMAGE: mari-challenge-flat-textures.png — 980×411px, labelled "Flat images of textures", press to zoom]`
- `[IMAGE: mari-challenge-face-detail.png — 980×1415px, labelled "Details of face — Mari Screen shot with bump map", press to zoom]` *(very tall: 2× source _d_1521_2196)*
- `[IMAGE: mari-challenge-mask.png — 980×786px, labelled "Mask texturing for paintwork", press to zoom]`
- `[GIF: mari-challenge-05.gif — 352×360px, press to zoom]`
- `[IMAGE: mari-challenge-diffuse-bump.png — 980×1440px, labelled "Diffuse and bump/displacement map", press to zoom]` *(very tall: 2× source _d_1454_2136)*
- `[IMAGE: mari-challenge-diffuse-detail.png — 980×693px, labelled "Detail of diffuse texturing", press to zoom]`
- `[IMAGE: mari-challenge-diffuse-tall.png — 980×1573px, labelled "Diffuse and bump/displacement map", press to zoom]` *(very tall: 2× source _d_1246_2000)*
- `[IMAGE: mari-challenge-diffuse-detail-2.png — 980×681px, labelled "Detail of diffuse texturing", press to zoom]`

**Notes:** "Show More" confirmed. Several images are extremely tall (980×1440, 980×1573, 980×1415) — same display decision needed as the tall images in HomeRenter. Full scroll, lightbox-only, or crop with expand? Confirm with Lesley.

---

### 9. PROFESSIONAL WORK: GI JOE 2

**Type:** Section header + body text + mixed image/GIF gallery
**Heading:** Professional Work: GI Joe 2
**Sub-heading:** VFX texturing for GI Joe 2. Mari, Photoshop

**Description:**
> Collaborative textures for hero asset helicopter for [GI Joe 2](https://www.youtube.com/watch?v=mKNpy-tGwxE). Created diffuse (colour), designs, displacement and bump for the helicopter. Complete texture creation for hero asset suitcase and sword. Various mid range props.

**External link to preserve:**
- YouTube: https://www.youtube.com/watch?v=mKNpy-tGwxE

**Component needed:** `<LightboxGallery>` — 9 confirmed items, each "press to zoom."

**Placeholders:**
- `[IMAGE: gijoe-hero.jpg — 750×422px, VFX texturing overview]`
- `[GIF: gijoe-01.gif — 320×208px, press to zoom]`
- `[IMAGE: gijoe-02.jpg — 957×526px, press to zoom]`
- `[IMAGE: gijoe-cobra-chopper.jpg — 964×684px, labelled "cobraChopper", press to zoom]`
- `[IMAGE: gijoe-04.png — 980×520px, press to zoom]`
- `[IMAGE: gijoe-05.jpg — 980×645px, press to zoom]`
- `[IMAGE: gijoe-06.jpg — 980×615px, press to zoom]`
- `[IMAGE: gijoe-hero-2.jpg — 750×422px]`
- `[GIF: gijoe-02-animation.gif — dimensions not captured]`

**Notes:** No "Show More" detected on this section. Confirm complete image count with Lesley.

---

### 10. PROFESSIONAL WORK: ENDERS GAME

**Type:** Section header + body text + zoomable image gallery
**Heading:** Professional Work: Enders Game
**Description:**
> Textures for hero asset space shuttle in [Enders Game](https://www.youtube.com/watch?v=2UNWLgY-wuo)

**External link to preserve:**
- YouTube: https://www.youtube.com/watch?v=2UNWLgY-wuo

**Component needed:** `<LightboxGallery>` — 7 confirmed items, each "press to zoom."

**Placeholders:**
- `[IMAGE: enders-game-01.jpg — 850×364px, space shuttle establishing shot]`
- `[IMAGE: enders-game-shuttle-textures.jpg — 980×542px, labelled "Textures for shuttle", press to zoom]`
- `[IMAGE: enders-game-03.png — 980×633px, press to zoom]`
- `[IMAGE: enders-game-04.jpg — 980×563px, press to zoom]`
- `[IMAGE: enders-game-05.jpg — 980×563px, press to zoom]`
- `[IMAGE: enders-game-06.jpg — 980×555px, press to zoom]`
- `[IMAGE: enders-game-07.jpg — 980×433px, press to zoom]`

**Notes:** No "Show More" detected. Confirm with Lesley.

---

### 11. PROFESSIONAL WORK: HUGO

**Type:** Section header + body text + zoomable image gallery
**Heading:** Professional Work: Hugo
**Description:**
> Creating textures for various props and assets including hero pieces for the film [Hugo](https://www.youtube.com/watch?v=Hv3obL9HqyY), collaborative texture creation on trains.

**External link to preserve:**
- YouTube: https://www.youtube.com/watch?v=Hv3obL9HqyY

**Component needed:** `<LightboxGallery>` — 9 confirmed items, each "press to zoom." Additional images behind "Show More."

**Placeholders:**
- `[IMAGE: hugo-lookdev-marigrab.jpg — 980×1103px, labelled "Look dev renders (not done by me) and screen grab from Mari", press to zoom]` *(tall: 2× source _d_2112_2376)*
- `[IMAGE: hugo-station-clock.jpg — 961×680px, labelled "Station Clock — Look dev render done by Simon. Textures supplied by myself", press to zoom]`
- `[IMAGE: hugo-mari-screengrab.jpg — 958×528px, labelled "Screen grab from Mari", press to zoom]`
- `[IMAGE: hugo-film-screenshot.jpg — 934×527px, labelled "Screen Shot — Screen shot from film Hugo", press to zoom]`
- `[IMAGE: hugo-screenshot-2.jpg — 929×514px, labelled "Screen Shot", press to zoom]`
- `[IMAGE: hugo-render.jpg — 980×521px, labelled "Render — Look dev render (not done by me). Textures supplied by me and another artist, working collaboratively, in a short timescale", press to zoom]`
- `[IMAGE: hugo-film-props.jpg — 912×523px, labelled "Film screen shot — Various prop texturing", press to zoom]`
- `[IMAGE: hugo-props-screenshot.jpg — 921×552px, labelled "Screen Shot — Screen shot from film showing texturing work on props", press to zoom]`
- `[IMAGE: hugo-film-shot-mari.jpg — 980×462px, labelled "Film shot — Screen shot from Mari", press to zoom]` *(2× source _d_3060_1443)*

**Notes:** "Show More" confirmed — more images exist. The `980×1103` image is tall — same display decision as other tall images.

---

### 12. PROFESSIONAL WORK: COVENTRY ACT-UK SIMULATION CENTRE

**Type:** Section header + body text + mixed image/GIF gallery
**Heading:** Professional Work: Coventry ACT-UK Simulation Centre

**Description:**
> Modernising training for the UK construction industry was the goal behind the £8.7M ACT-UK simulation Centre, a project that became one of Makemedia's first major simulation breakthroughs, establishing the company within that sector.
>
> Our four-person team built five stages of a housing development, from initial excavation and foundations through to fully finished homes. My early focus was on reviewing extensive reference material so I could accurately model assets in 3ds Max and create terrain textures using Cinema 4D, BodyPaint and ZBrush. I produced diffuse, specular and normal maps and supplied textures for the wider team, including our architectural consultant.
>
> Accuracy was essential. Brick dimensions, trench profiles and measurements all needed to match real-world standards. After setting the visual benchmark, I shifted into scheduling, workflow planning, assembling scenes in-engine and refining pipelines to keep the team aligned and delivery smooth.
>
> The project went on to win a Presagis Best Visualisation Award and played a key role in establishing Makemedia — later [Make Real](https://makereal.co.uk/team/) — as a recognised name in the industry.

**External link to preserve:**
- Make Real: https://makereal.co.uk/team/

**Component needed:** `<LightboxGallery>` — 9 confirmed items, each "press to zoom." Additional images behind "Show More."

**Placeholders:**
- `[IMAGE: act-uk-aldermans-green-photo.jpg — 980×558px, labelled "Aldermans Green — Makemedia founder standing in front of screen", press to zoom]`
- `[GIF: act-uk-aldermans-green-footage.gif — 360×188px, labelled "Aldermans Green — mobile phone footage of director moving around location", press to zoom]`
- `[IMAGE: act-uk-teaching-screen.jpg — 980×735px, labelled "Standing in front of the teaching screen", press to zoom]`
- `[IMAGE: act-uk-manoeuvring.jpg — 980×631px, labelled "Aldermans — Photos taken while manoeuvring around Alderman's Green", press to zoom]`
- `[IMAGE: act-uk-texture-maps-1.jpg — 980×980px, labelled "Texture maps — Colour maps from Bodypaint, Timeslice activity 4", press to zoom]` *(2× source _d_2048_2048)*
- `[IMAGE: act-uk-texture-maps-2.jpg — 980×980px, labelled "Texture — Colour maps from Bodypaint, Timeslice activity 4", press to zoom]` *(2× source _d_2048_2048)*
- `[IMAGE: act-uk-screen-example.jpg — 980×735px, labelled "Screen example", press to zoom]`
- `[IMAGE: act-uk-training-example.jpg — 980×652px, labelled "Example training", press to zoom]`
- `[IMAGE: act-uk-texture-maps-3.jpg — 980×594px, labelled "Texture — Colour maps from Bodypaint, Timeslice activity 5", press to zoom]` *(2× source _d_4224_2559)*

**Notes:** "Show More" confirmed — more images exist. This section has strong narrative copy and an award mention — one of the more substantive non-case-study sections on the site.

---

### 13. PROFESSIONAL GAME PITCH: UNRELEASED PROJECT

**Type:** Section header + body text + zoomable image gallery
**Heading:** Professional Game Pitch: Unreleased Project
**Description:**
> Hard surface environment modelling and UVing rooms for games texturing following feedback and technical changes.

**Component needed:** `<LightboxGallery>` — 3 confirmed items, each "press to zoom."

**Placeholders:**
- `[IMAGE: game-pitch-env-01.jpg — 980×588px, labelled "Game environment modelling", press to zoom]`
- `[IMAGE: game-pitch-env-02.jpg — 980×588px, labelled "Game environment modelling", press to zoom]`
- `[IMAGE: game-pitch-env-03.jpg — 980×588px, labelled "Game environment modelling", press to zoom]`

**Notes:** No "Show More" on this section. All three images are the same dimensions — likely different angles/rooms of the same environment.

---

### 14. PERSONAL PROJECT: HARD SURFACE ENVIRONMENT TEXTURING & MODELLING

**Type:** Section header + body text + mixed image/GIF gallery
**Heading:** Personal Project: Hard Surface Environment Texturing & Modelling
**Description:** Just for fun. Simple modeling.

**Component needed:** `<LightboxGallery>` — 11 confirmed items, each "press to zoom." Additional images behind "Show More."

**Placeholders:**
- `[IMAGE: slum-house-reference.jpg — 980×736px, labelled "Slum House Reference", press to zoom]`
- `[IMAGE: slum-house-textures.jpg — 980×710px, labelled "Slum House textures and modelling — Screenshot from Mari", press to zoom]`
- `[GIF: slum-house-texture-layers.gif — 320×240px, labelled "Layers of separated textures — Showing the breakup of textures for greater control", press to zoom]`
- `[GIF: slum-house-modelling.gif — 640×360px, labelled "Modelling the environment — UV map objects evenly ready for texturing", press to zoom]`
- `[GIF: slum-house-colour-bump.gif — 320×240px, labelled "Colour and bump map", press to zoom]`
- `[IMAGE: slum-house-zbrush-wip.jpg — 980×846px, labelled "WIP Zbrush", press to zoom]`
- `[IMAGE: slum-house-concrete-zbrush.jpg — 980×841px, labelled "WIP Concrete Zbrush", press to zoom]`
- `[IMAGE: slum-house-concrete-wip.jpg — 980×649px, labelled "WIP Concrete — Done in Brush", press to zoom]`
- `[IMAGE: slum-house-brushwork.jpeg — 980×939px, labelled "Inspecified — WIP Brush work", press to zoom]` *(2× source _d_1253_1200)*

**Notes:** "Show More" confirmed — more images exist. Note the label typo "Inspecified" (likely "Unspecified") — flag to Lesley to correct or keep as-is.

---

### 15. PROFESSIONAL GAMES WORK: TEXTURING, MODELLING & ANIMATIONS

**Type:** Section header + body text + mixed image/GIF gallery
**Heading:** Professional Games Work: Texturing, Modelling & Animations
**Description:**
> Level of details, prop asset creation, and animation from various released, unreleased products.

**Component needed:** `<LightboxGallery>` — 9 confirmed items, each "press to zoom." Additional images behind "Show More."

**Placeholders:**
- `[GIF: games-prop-animation.gif — 306×238px, labelled "In game dynamic prop animation — Hand animated objects. Modelled, textured and animated by myself to give the sense of dynamic movement when kicked by characters.", press to zoom]`
- `[IMAGE: games-lod-prop-simulation.jpg — 884×706px, labelled "Level of detail prop for simulation — Created for Aldermen Green simulation project", press to zoom]`
- `[GIF: games-lod-props.gif — 360×272px, labelled "Level of detail props — Game work", press to zoom]`
- `[IMAGE: games-zombie-texturing.jpeg — 980×735px, labelled "Unpublished Zombie game — Texturing", press to zoom]`
- `[GIF: games-zombie-ingame.gif — 640×360px, labelled "Zombie Game — In game screen shots", press to zoom]`
- `[IMAGE: games-zombie-engine.jpg — 875×682px, labelled "Zombie game engine screen grab — In game screen grab", press to zoom]`
- `[IMAGE: games-zombie-ingame-shot.jpeg — 980×734px, labelled "Zombie game in game screen shot", press to zoom]`
- `[IMAGE: games-zombie-engine-2.jpg — 869×660px, labelled "Zombie game engine screen grab — Texture work. In game screen grab", press to zoom]`
- `[IMAGE: games-cartoon-boxcar.jpg — 801×539px, labelled "Cartoon stylised boxcar texture test", press to zoom]`

**Notes:** "Show More" confirmed — more images exist. Note: the zombie game label "Unpublised" (typo) — flag to Lesley to correct or keep.

---

### 16. FOOTER — OTHER CASE STUDIES PEEK GRID

**Type:** Hover-reveal thumbnail grid
**Heading:** You can hover to take a sneak peek 👀 or use my password on restricted cases.
**Component needed:** `<PeekGrid>` — 8 thumbnails

**Placeholders:**
- `[IMAGE: peek-thumb-1.jpg — 317×316px]`
- `[IMAGE: peek-thumb-2.jpg — 317×316px]`
- `[IMAGE: peek-thumb-3.jpg — 316×316px]`
- `[IMAGE: peek-thumb-4.jpg — 317×316px]`
- `[IMAGE: peek-thumb-5.jpg — 317×316px]`
- `[IMAGE: peek-thumb-6.jpg — 316×316px]`
- `[IMAGE: peek-thumb-7.png — 317×316px]`
- `[IMAGE: peek-thumb-8.jpg — 317×316px]`

---

## Component Summary

| Component | Count | Notes |
|---|---|---|
| `<LightboxGallery>` | 11 sections | The dominant pattern on this page — every project section uses it |
| `<VideoEmbed>` | 1 | Showreel 2013 — URL needed from Lesley |
| `<IconRow>` | 1 | Tools section — replace Wix 30×30 logos with proper SVGs |
| `<PeekGrid>` | 1 | 8 thumbnails footer |
| Animated GIFs (within galleries) | 15+ confirmed | More behind "Show More" |
| "Show More" expand | ~7 sections | See note below |

---

## ⚠️ "Show More" — Incomplete Image Inventory

At least 7 sections have a Wix "Show More" interaction hiding additional images. The scrape only captured the visible-above-fold images in each section. **The image counts in this spec are minimums, not totals.**

Sections with confirmed "Show More":
- The Last Game (9 visible, more hidden)
- Beetle Car (9 visible, more hidden)
- Mari Challenge (9 visible, more hidden)
- Hugo (9 visible, more hidden)
- ACT-UK Simulation Centre (9 visible, more hidden)
- Hard Surface Personal Project (9 visible, more hidden)
- Professional Games Work (9 visible, more hidden)

**Before building:** Lesley should manually expand each "Show More" on the live Wix site and do a full image export. On the new Netlify site, decide whether to keep the expand/collapse pattern or display all images upfront in the lightbox gallery.

---

## Tall Images — Display Decision Needed

Several images in this page are very tall (portrait orientation, some over 1400px height):

| Image | Dimensions | Section |
|---|---|---|
| mari-challenge-face-detail.png | 980×1415px | Mari Challenge |
| mari-challenge-diffuse-bump.png | 980×1440px | Mari Challenge |
| mari-challenge-diffuse-tall.png | 980×1573px | Mari Challenge |
| hugo-lookdev-marigrab.jpg | 980×1103px | Hugo |

Recommended approach: show a cropped preview in the gallery grid, open full image in lightbox. Confirm with Lesley.

---

## YouTube Links to Preserve

| Project | URL |
|---|---|
| The Last Game (Nike) | https://www.youtube.com/watch?v=CJ2xU9GUPVY |
| GI Joe 2 | https://www.youtube.com/watch?v=mKNpy-tGwxE |
| Enders Game | https://www.youtube.com/watch?v=2UNWLgY-wuo |
| Hugo | https://www.youtube.com/watch?v=Hv3obL9HqyY |

---

## Images & GIFs to Export from Wix

This page has the largest media library of all six pages. Only confirmed-visible items are listed — see "Show More" note above for hidden images.

| Filename (suggested) | Wix fragment | Dimensions | Type |
|---|---|---|---|
| games-vfx-hero.jpg | 62a512a5... | 980×424 | jpg |
| walter-mitty-01.jpg | c45c3e9e... | 980×668 | jpg |
| walter-mitty-02.jpg | 693de38a... | 980×649 | jpg |
| walter-mitty-03.jpg | ba9c3231... | 980×670 | jpg |
| last-game-dock-shot.jpg | 9d5b3783... | 980×588 | jpg |
| last-game-mari-screenshot.gif | 96d629be... | 640×360 | gif |
| last-game-windmill.jpg | 28faee3c... | 980×642 | jpg |
| last-game-shopfront.png | 7f853cfd... | 980×649 | png |
| last-game-shop-pavement.jpg | 523e277b... | 980×642 | jpg |
| last-game-animation.gif | 606f2af5... | 960×540 | gif |
| last-game-wall.jpg | 42df6df9... | 980×618 | jpg |
| last-game-09.jpg | ce4066bf... | 980×642 | jpg |
| last-game-10.jpg | 13fa3148... | 980×601 | jpg |
| beetle-muddy-animation.gif | 7c100f09... | 316×248 | gif |
| beetle-muddy-still.jpg | f94719fe... | 432×292 | jpg |
| beetle-rusty-still.jpg | 5fdd88fb... | 720×486 | jpg |
| beetle-rusty-animation.gif | c053c4df... | 420×272 | gif |
| beetle-texture-renders.jpg | 70235caa... _d_1475_1475 | 980×980 | jpg (2×) |
| beetle-photoshop-textures.jpg | bfe19df6... _d_3686_1475 | 980×392 | jpg (2×) |
| beetle-rusty-renders.jpg | 704c4d30... | 980×764 | jpg |
| beetle-muddy-frontback.jpg | 6cefa2fd... | 710×822 | jpg |
| beetle-muddy-top.jpg | 26a7abda... | 690×451 | jpg |
| mari-challenge-face-detail.gif | 08cf5643... | 428×360 | gif |
| mari-challenge-flat-textures.png | d266ea99... | 980×411 | png |
| mari-challenge-face-detail.png | bc2fa960... _d_1521_2196 | 980×1415 | png (2×, tall) |
| mari-challenge-mask.png | 3a085f59... | 980×786 | png |
| mari-challenge-05.gif | ffbffc7d... | 352×360 | gif |
| mari-challenge-diffuse-bump.png | c9b0905b... _d_1454_2136 | 980×1440 | png (2×, tall) |
| mari-challenge-diffuse-detail.png | 58501928... | 980×693 | png |
| mari-challenge-diffuse-tall.png | 6babf7c1... _d_1246_2000 | 980×1573 | png (2×, tall) |
| mari-challenge-diffuse-detail-2.png | 9eec04dd... | 980×681 | png |
| gijoe-hero.jpg | 90b26554... | 750×422 | jpg |
| gijoe-01.gif | b25ac865... | 320×208 | gif |
| gijoe-02.jpg | 6549f85a... | 957×526 | jpg |
| gijoe-cobra-chopper.jpg | c1024dcb... | 964×684 | jpg |
| gijoe-04.png | 97d849a2... | 980×520 | png |
| gijoe-05.jpg | 40fb5d42... | 980×645 | jpg |
| gijoe-06.jpg | 0034564937... | 980×615 | jpg |
| gijoe-hero-2.jpg | b85f2198... | 750×422 | jpg |
| gijoe-02-animation.gif | b2a0813b... | unknown | gif |
| enders-game-01.jpg | b864c7ca... | 850×364 | jpg |
| enders-game-shuttle.jpg | de4aa16f... | 980×542 | jpg |
| enders-game-03.png | b4bd23c1... | 980×633 | png |
| enders-game-04.jpg | 1a0abd3e... | 980×563 | jpg |
| enders-game-05.jpg | e1f4a007... | 980×563 | jpg |
| enders-game-06.jpg | 79421d32... | 980×555 | jpg |
| enders-game-07.jpg | ff5a4d02... | 980×433 | jpg |
| hugo-lookdev.jpg | e018cfac... _d_2112_2376 | 980×1103 | jpg (2×, tall) |
| hugo-station-clock.jpg | 1a86d04d... | 961×680 | jpg |
| hugo-mari-grab.jpg | 8ee1fea7... | 958×528 | jpg |
| hugo-film-screenshot.jpg | e9bd4df9... | 934×527 | jpg |
| hugo-screenshot-2.jpg | 069cb789... | 929×514 | jpg |
| hugo-render.jpg | 5305ad2b... | 980×521 | jpg |
| hugo-film-props.jpg | a6dfc243... | 912×523 | jpg |
| hugo-props-screenshot.jpg | 5eb4c524... | 921×552 | jpg |
| hugo-film-shot-mari.jpg | a082e720... _d_3060_1443 | 980×462 | jpg (2×) |
| act-uk-aldermans-photo.jpg | 93f27e05... | 980×558 | jpg |
| act-uk-aldermans-gif.gif | 3d1577fd... | 360×188 | gif |
| act-uk-teaching-screen.jpg | e9bf58ec... | 980×735 | jpg |
| act-uk-manoeuvring.jpg | 3e1cc646... | 980×631 | jpg |
| act-uk-textures-1.jpg | 5c107ce7... _d_2048_2048 | 980×980 | jpg (2×) |
| act-uk-textures-2.jpg | 1026dafe... _d_2048_2048 | 980×980 | jpg (2×) |
| act-uk-screen-example.jpg | 9d6f3e34... | 980×735 | jpg |
| act-uk-training-example.jpg | d0d00682... | 980×652 | jpg |
| act-uk-textures-3.jpg | 7b92fe99... _d_4224_2559 | 980×594 | jpg (2×) |
| game-pitch-env-01.jpg | a2b074f1... | 980×588 | jpg |
| game-pitch-env-02.jpg | 00686c16... | 980×588 | jpg |
| game-pitch-env-03.jpg | 7d41eda8... | 980×588 | jpg |
| slum-house-reference.jpg | 9a544a41... | 980×736 | jpg |
| slum-house-textures.jpg | b86351ee... | 980×710 | jpg |
| slum-house-texture-layers.gif | 61b6a12e... | 320×240 | gif |
| slum-house-modelling.gif | 9209ccb1... | 640×360 | gif |
| slum-house-colour-bump.gif | d03a686e... | 320×240 | gif |
| slum-house-zbrush.jpg | e18eac48... | 980×846 | jpg |
| slum-house-concrete-zbrush.jpg | b01f9b73... | 980×841 | jpg |
| slum-house-concrete-wip.jpg | 27134178... | 980×649 | jpg |
| slum-house-brushwork.jpeg | dddd2bfd... _d_1253_1200 | 980×939 | jpeg (2×) |
| games-prop-animation.gif | ef2070c6... | 306×238 | gif |
| games-lod-prop.jpg | 5bcf9a36... | 884×706 | jpg |
| games-lod-props.gif | 6e0651f2... | 360×272 | gif |
| games-zombie-texturing.jpeg | 9ec73175... | 980×735 | jpeg |
| games-zombie-ingame.gif | 39b2e72b... | 640×360 | gif |
| games-zombie-engine.jpg | 023dc163... | 875×682 | jpg |
| games-zombie-ingame-shot.jpeg | ea7f25cb... | 980×734 | jpeg |
| games-zombie-engine-2.jpg | 822ad44b... | 869×660 | jpg |
| games-cartoon-boxcar.jpg | b1980ecb... | 801×539 | jpg |

**Minimum confirmed export count: ~80 files.** Likely 100+ once "Show More" sections are expanded.

---

## Updated Cross-Case Component Comparison (All 6 Pages)

| Feature | EDC | Qflow Air | Qflow Notifs | Risk Mgmt | HomeRenter | Games/VFX |
|---|---|---|---|---|---|---|
| Carousels | 6 | 1 | 0 | 0 | 3 | 0 |
| HoverReveal | 4 | 2 | 0 | 0 | 0 | 0 |
| HoverAudio | 0 | 2 | 0 | 1 | 0 | 0 |
| Audio player | 1 | 0 | 0 | 0 | 0 | 0 |
| ZoomableImage | 0 | 2 | 0 | 0 | 2 | 0 |
| LightboxGallery | 0 | 2 | 0 | 0 | 0 | **11** |
| VideoEmbed | 0 | 0 | 0 | 0 | 0 | **1** |
| Animated GIFs | ~3 | ~10 | 5 | 0 | 1 | **15+** |
| IconRow | 1 | 1 | 1 | 1 | 0 | 1 |
| PeekGrid footer | 9 | 11 | 8 | 9 | 0 | 8 |
| Show More expand | 0 | 1 | 0 | 0 | 0 | **7** |
| Laptop frame device | 0 | 0 | 4× | 1× | 1× | 0 |
| Empty SVG slots | 0 | 0 | 0 | ~12 | 0 | 0 |
| Static images (min) | 27+ | 12 | 12 | 12 | 10 | **80+** |

---

## Open Questions for Lesley

- [ ] **Showreel 2013:** What is the YouTube or Vimeo URL for the texturing showreel?
- [ ] **"Show More" sections:** Please expand all 7 sections on the live Wix site and do a full image export before migrating — the scrape only captured above-fold images.
- [ ] **Tall portrait images** (Mari Challenge ×3, Hugo ×1): Confirm display preference — lightbox-only with cropped preview, full scroll height, or "show more" toggle?
- [ ] **Shotgun → ShotGrid:** The tool is now rebranded as ShotGrid by Autodesk. Update the label, or keep as Shotgun?
- [ ] **"Inspecified" label** in the Hard Surface section: Typo for "Unspecified" — correct it?
- [ ] **"Unpublised" label** in the Games section: Typo for "Unpublished" — correct it?
- [ ] **Footer peek grid:** 8 thumbnails here, same as Qflow notifications. Some thumbnails appear shared across pages. Confirm which case studies each links to and whether to standardise the grid count.
- [ ] **`<LightboxGallery>` vs `<ZoomableImage>`:** On the case study pages, "press to zoom" is handled by `<ZoomableImage>` for single images and `<LightboxGallery>` for groups. Should this page use a unified gallery component per section, or individual zoomable images? Recommend gallery with navigation arrows so users can step through without closing.
- [ ] **Display approach:** Given the sheer volume of images, consider whether some sections should show a compact grid (e.g. 3-column thumbnails) rather than a linear stack. The Walter Mitty, Game Pitch, and Hard Surface sections could benefit from this.
