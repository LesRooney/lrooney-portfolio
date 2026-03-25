# Image Map — Source of Truth

All image and video asset paths used across the portfolio. Use this file to resolve paths and alt text without scanning directories.

**Rules:**
- Do not guess filenames or scan `/images/` unless a slot is marked `[MISSING]`
- Update this file when new assets are added or paths change
- Preferred format: `.webp` for images, `.mp4` for video

---

## Shared / Mockups

| Slot | Path | Alt text | Notes |
|---|---|---|---|
| Laptop frame | `images/Mockups/Dell XPS 13.svg` | Dell XPS 13 laptop mockup | Used in EDC (dd3) and HomeRenter |
| Browser toolbar | `images/Mockups/Toolbar.svg` | (aria-hidden) | Overlay on BA slider |
| Chrome toolbar white | `images/Mockups/Chrome ToolbarWhite.svg` | — | Available, not yet used |

---

## Homepage (`index.html`)

### Work card thumbnails

| Slot | Path | Alt text |
|---|---|---|
| EDC thumb | `images/medidata-edc-thumb.webp` | Medidata EDC Redesign |
| Risk thumb | `images/medidata-risk-thumb.jpg` | Medidata Risk Tool |
| Qualis air quality thumb | `images/qualis-airquality-thumb.webp` | Qualis Flow — Air Quality |
| Qualis alerts thumb | `images/qualis-alerts-thumb.webp` | Qualis Flow Alerts & IA |
| HomeRenter thumb | `images/homerenter-thumb.webp` | HomeRenter |
| Animation thumb | `images/animation-thumb.webp` | Animation |
| Games thumb | `images/games-thumb.webp` | Games, Simulations & Films |

### Work card hover videos

| Slot | Path | Notes |
|---|---|---|
| EDC hover placeholder | `images/medidata-edc-thumb.webp` | card-0 — static image placeholder, replace with video when ready |
| Risk hover video | `videos/medidata-risk-preview.mp4` | card-1 |
| Qualis air quality hover video | `videos/qualis-airquality-preview.mp4` | card-2 |
| Qualis alerts hover video | `videos/qualis-alerts-preview.mp4` | card-3 |
| HomeRenter hover video | `videos/homerenter-preview.mp4` | card-4 |
| Animation hover video | `videos/animation-preview.mp4` | card-5 |
| Games hover video | `videos/games-preview.mp4` | card-6 |

---

## `influence.html`

No images — text-only page.

---

## EDC Redesign (`medidataedcredesign.html`)

### Hero / BA Slider (DD01)
| Slot | Path | Alt text | Notes |
|---|---|---|---|
| BA after — redesign video | `images/EDCRedesign/EDC_leftSide_NewMovie.mp4` | — | Autoplay loop, BA slider right side |
| BA before — patient matrix | `images/EDCRedesign/MD_EDC_Before_patientMatrix.webp` | — | BA before reel, frame 1 |
| BA before — patient page | `images/EDCRedesign/MD_EDC_Before_patientPage.webp` | — | BA before reel, frame 2 |
| Browser toolbar overlay | `images/Mockups/Toolbar.svg` | (aria-hidden) | Pinned over BA slider |
| Enhancements video | `images/EDCRedesign/51 - Enhancing Data Entry with New Features and Icons_Small2.mp4` | — | Autoplay section video |
| Experiments hover video | `images/EDCRedesign/cutVersion.Experiments01_Shorter_Small.mp4` | — | data-hover-play in DD01 img-card |

### Outcomes carousel
| Slot | Path | Alt text |
|---|---|---|
| Praise | `images/EDCRedesign/MD_EDC_Praise.png` | EDC praise: Workday kudos and peer recognition |
| Outcome | `images/EDCRedesign/MD_EDC_Outcome.png` | EDC outcome: customer feedback and product analytics |
| Community feedback | `images/EDCRedesign/658ba4_d2621156a4a74d4f85a110ac66d05a33~mv2.png-2.avif` | EDC community feedback |

### Research & planning
| Slot | Path | Alt text |
|---|---|---|
| Football collaboration video | `images/EDCRedesign/MD_AFootballCollaboration.mp4` | — |
| System maps & scrappy frameworks video | `images/EDCRedesign/SystemMaps&ScrappyFrameworks.mp4` | — |
| Research collection | `images/EDCRedesign/MD_ResearchCollection.webp` | Research collection: user interviews, stakeholder sessions, LinkedIn outreach, and Japan evaluations |

### Meet the Users — Personas carousel
| Slot | Path | Alt text |
|---|---|---|
| Ecosystem bubble diagram | `images/EDCRedesign/EDC_EcoSystem02.webp` | EDC ecosystem: all personas and their roles mapped as a bubble diagram |
| Clinical ecosystem diagram | `images/EDCRedesign/MD_ClinicalEcosystem.webp` | Clinical trial ecosystem: Study Trial Conduct diagram showing interconnected stakeholder circles |

### The Plan carousel
| Slot | Path | Alt text |
|---|---|---|
| Loom communication library | `images/EDCRedesign/MD_LoomCommunication.webp` | Loom communication library grid |
| Patients grid — permissions | `images/EDCRedesign/MD_NEXTLargeStage02.webp` | Patients grid — Data manager and power user permissions |
| Figma prototype loops | `images/EDCRedesign/MD_FigmaProtoTypeLoops.webp` | Figma prototype flow — patient grid states and transitions |

### Deep Dive 02 — Patient Filter
| Slot | Path | Alt text | Notes |
|---|---|---|---|
| Design system option video | `images/EDCRedesign/EDCPatientFilterNew_DesignSystem.mp4` | — | Autoplay loop, first img-card |
| Split screen video | `images/EDCRedesign/PatientFiltersSplit_AAA.mp4` | — | Autoplay loop, second img-card (4.6MB) |
| Filter ideas | `images/EDCRedesign/MD_EDC_DesignSystem_PatientFilter_Ideas.webp` | Patient filter design ideas | Carousel slide 1 |
| Filter implemented | `images/EDCRedesign/MD_EDC_DesignSystem_PatientFilter_implemented.webp` | Patient filter implemented | Carousel slide 2 |
| Filter sandbox | `images/EDCRedesign/MD_EDC_DesignSystem_PatientFilter_implementedSandbox.webp` | Patient filter sandbox | Carousel slide 3 |

### Deep Dive 03 — Synthetic Patients (AI feature)
| Slot | Path | Alt text | Notes |
|---|---|---|---|
| Laptop mockup frame | `images/Mockups/Dell XPS 13.svg` | Dell XPS 13 laptop mockup | Wrapper frame |
| AI feature video | `images/EDCRedesign/AI Feature3Small.mp4` | — | Overlaid on laptop screen; left:7.74% top:0.77% w:84.73% h:91.39% |

### Deep Dive 04 — Unresolvable Queries
| Slot | Path | Alt text |
|---|---|---|
| System Impact Map | `images/EDCRedesign/MD_SystemQueryissues01.webp` | System Impact Map: Unresolvable Queries in EDC |
| Patients grid — permissions | `images/EDCRedesign/MD_NEXTLargeStage02.webp` | Patients grid — Data manager and power user permissions |

### Available but not yet placed
| File | Notes |
|---|---|
| `images/EDCRedesign/SystemQueryIssue_A.webp` | Duplicate of MD_SystemQueryissues01 |
| `images/EDCRedesign/SystemQueryIssue_B.webp` | Removed from DD04 carousel — replaced by MD_NEXTLargeStage02 |
| `images/EDCRedesign/EDCPatientFilterNew_DesignSystemBigger.mov` | Larger version of design system video |
| `images/EDCRedesign/AI Feature3Small_BIG.mp4` | Larger version of AI feature video |
| `images/EDCRedesign/MD_DesignSystemSpreadSheetValueBuckets.webp` | Retired — removed from Engineering carousel |

---

## HomeRenter (`homerenter.html`)

| Slot | Path | Alt text |
|---|---|---|
| Laptop frame | `images/dell-xps-13.svg` | Dell XPS 13 laptop frame |
| Traffic sources map | `images/traffic-sources-map.png` | Traffic sources map showing referral sources and drop-off points |
| Competitor analysis 1 | `images/competitor-analysis-1.png` | Competitor pricing and property range comparison |
| Competitor analysis 2 | `images/competitor-analysis-2.png` | Competitor pricing and property range comparison |
| Rightmove bar chart | `images/Homerenter/StuffOnRightmove.webp` | Rightmove bar chart comparing HomeRenter, I Am The Agent, and House Simple by property type |
| Website latest properties | `images/homerenter-website-latest-props.png` | HomeRenter website latest properties section |
| Landlord creation flow 1 | `images/landlord-creation-flow-1.png` | Landlord property creation flow diagram |
| LL landing comparison | `images/ll-landing-comparison.png` | Landlord landing page A/B/C variants |
| Ad banner half | `images/Homerenter/LL_Let_prop_freeBannerHalf.png` | Ad variants: Landlords enjoy a free 30 day listing on Rightmove and Zoopla |
| LL landing full | `images/ll-landing-page-full.png` | Landing page redesign concept |
| FAQs redesign | `images/faqs-redesign-annotated.png` | FAQs page redesign with annotations |
| Mobile UI gif | `images/iphones-small.gif` | Mobile UI animation showing the redesigned HomeRenter experience |
| Landlord journey 1 | `images/Homerenter/LL_journ01.webp` | Landlord journey map in Trello — steps 0 to 3 |
| Landlord journey 2 | `images/Homerenter/LL_journ02.webp` | Landlord journey map in Trello — steps 4 to 8 |

---

## Games, Simulations & VFX (`lesleyrooney-games-sims-vfxworks.html`)

### Tool icon chips (`images/logos/`)

| Slot | Path | Alt text |
|---|---|---|
| Photoshop | `images/logos/photoshop.svg` | Photoshop |
| Mari | `images/logos/Mari.svg` | Mari |
| After Effects | `images/logos/after-effects-2019.svg` | After Effects |
| 3DS Max | `images/logos/3ds-max-2.svg` | 3DS Max |
| Cinema 4D | `images/logos/Cinema4.svg` | Cinema 4D |
| Headus UV Layout | `images/logos/Headus_UVlayout.webp` | UV Headus |
| Unity | `images/logos/unity.svg` | Unity |

### Showreel

| Slot | Path / URL | Notes |
|---|---|---|
| Showreel 2013 | Vimeo embed `https://player.vimeo.com/video/67950765` | `#showreel-iframe` — not a local asset |

### Walter Mitty

| Slot | Path | Alt text |
|---|---|---|
| Road texture 1 | `images/gfx/WalterMitty_01.jpg` | Walter Mitty road texture |
| Texture work 2 | `images/gfx/WalterMitty_012.jpg` | Walter Mitty texture work |

### Last Game

| Slot | Path | Alt text | Notes |
|---|---|---|---|
| Clip movie | `images/gfx/LastGame%20ClipMovie.mp4` | — | Section video |
| Movie slot 01 | `images/gfx/LastGame_Movie_Slot01.mp4` | — | Slot video |
| Commercial clip slot 02 | `images/gfx/LastGame_CommercialClip_Slot02.mp4` | — | Slot video |
| Shop front slot 03 | `images/gfx/LastGamr_C1_ShopFront_Slot03.jpg` | Last Game shop front textures | |
| Environment slot 4 | `images/gfx/LastGame_Screen10_Slot4.jpg` | Last Game environment | |
| Scene slot 06 | `images/gfx/LastGame_Screen01_Slot06.jpg` | Last Game scene | |
| Scene slot 05 (carousel active) | `images/gfx/LastGame_Screen02_Slot05.jpg` | Last Game scene | |
| Screen slot 08 C3 | `images/gfx/LastGame_C3_Screen11_Slot08.jpg` | Last Game screen | |
| Screen slot 08 C4 | `images/gfx/LastGame_C4_Screen09_Slot08.jpg` | Last Game screen | |
| Screen slot 08 C5 | `images/gfx/LastGame_C5_Screen08_Slot08.jpg` | Last Game screen | |

### Beetle Car

| Slot | Path | Alt text |
|---|---|---|
| Movie clip 1 | `images/gfx/BettleCar_MovieClip.mp4` | — |
| Movie clip 2 | `images/gfx/BettleCar_MovieClip02.mp4` | — |
| Image 01 | `images/gfx/BettleCar_Image01.jpg` | Beetle Car render |
| Image split 01-4 | `images/gfx/BettleCar_ImageSplit%2001_4.jpg` | Beetle Car split view |
| Textures | `images/gfx/BettleCar_Textures.jpg` | Beetle Car textures |
| Image 07 (carousel active) | `images/gfx/BettleCar_Image07.jpg` | Beetle Car |
| Image 08 | `images/gfx/BettleCar_Image08.jpg` | Beetle Car |
| Image 12 | `images/gfx/BettleCar_Image12.jpg` | Beetle Car |
| Image split 01-2 | `images/gfx/BettleCar_ImageSplit%2001_2.jpg` | Beetle Car split view |
| Image split 01-2A | `images/gfx/BettleCar_ImageSplit%2001_2A.jpg` | Beetle Car split view |
| Image split 01-4 (carousel) | `images/gfx/BettleCar_ImageSplit%2001_4.jpg` | Beetle Car split view |
| Textures (carousel) | `images/gfx/BettleCar_Textures.jpg` | Beetle Car textures |
| Textures 02 | `images/gfx/BettleCar_Textures%2002.jpg` | Beetle Car textures |
| Textures large | `images/gfx/BettleCar_Textures_Large.jpg` | Beetle Car textures large |
| Textures large 02 | `images/gfx/BettleCar_TexturesLarge%2002.jpg` | Beetle Car textures large |
| Textures large 03 | `images/gfx/BettleCar_TexturesLarge%2003.jpg` | Beetle Car textures large |
| Muddy renders | `images/gfx/beetle-muddy-renders.jpg` | Beetle Car muddy renders |

### Mari Challenge

| Slot | Path | Alt text |
|---|---|---|
| Hero large | `images/gfx/MariChallenge_HeroLargeImage.jpg` | Mari Challenge — Hero render |
| Split screen large | `images/gfx/MariChallenge_SplitScreenLarge.png` | Mari Challenge split screen |
| Competition slot 01 video | `images/gfx/MariCompetition_Slot01.mp4` | — |
| Image face video | `images/gfx/MariChallenge-ImageFace.mp4` | — |
| Screenshot slot 02 | `images/gfx/MariCompetition_MariScreenShot01_Slot02.png` | Mari Competition screenshot |
| Textures | `images/gfx/MariChallenge_Textures.png` | Mari Challenge textures |
| Split screen 01 | `images/gfx/MariCompetition_SplitScreen01.png` | Mari Competition split screen |
| Masks 01 (carousel active) | `images/gfx/MariChallenge_Masks01.png` | Mari Challenge masks |
| 01 | `images/gfx/MariChallenge_01.png` | Mari Challenge |
| 02 | `images/gfx/MariChallenge_02.png` | Mari Challenge |
| 03 | `images/gfx/MariChallenge_03.png` | Mari Challenge |
| 04 | `images/gfx/MariChallenge_04.png` | Mari Challenge |
| Diffuse bump 01 | `images/gfx/MariChallenge-diffuse-bump01_Split.png` | Mari Challenge diffuse bump |
| Diffuse bump 02 | `images/gfx/MariChallenge-diffuse-bump02_Split.png` | Mari Challenge diffuse bump |
| Diffuse bump 03 | `images/gfx/MariChallenge-diffuse-bump03_Split.png` | Mari Challenge diffuse bump |
| Diffuse bump 04 | `images/gfx/MariChallenge-diffuse-bump04_Split.png` | Mari Challenge diffuse bump |
| Diffuse bump 05 | `images/gfx/MariChallenge-diffuse-bump05_Split.png` | Mari Challenge diffuse bump |
| Diffuse bump 07 | `images/gfx/MariChallenge-diffuse-bump07_Split.png` | Mari Challenge diffuse bump |
| Diffuse bump 08 | `images/gfx/MariChallenge-diffuse-bump08_Split.png` | Mari Challenge diffuse bump |
| Diffuse bump 09 | `images/gfx/MariChallenge-diffuse-bump09_Split.png` | Mari Challenge diffuse bump |

### GI Joe 2

| Slot | Path | Alt text |
|---|---|---|
| Helicopter turnaround video | `images/gfx/GiJoe2_HelicopterLarge%20Turnaround_View.m4v` | — |
| Suitcase film movie | `images/gfx/GI%20Joe%20SuitcaseFilmMovie.mp4` | — |
| Suitcase 02 video | `images/gfx/GiJoe2_Suitcase02.mp4` | — |
| Suitcase | `images/gfx/GiJoe2_Suitcase.jpg` | GI Joe 2 suitcase texture |
| Helicopter film | `images/gfx/GiJoe2_HelicopterFilm.jpg` | GI Joe 2 helicopter film shot |
| Helicopter 02 (carousel active) | `images/gfx/GiJoe2_HelicopterFilm02.jpg` | GI Joe 2 helicopter |
| Helicopter 04 | `images/gfx/GiJoe2_HelicopterFil04.jpg` | GI Joe 2 helicopter |
| Helicopter 03 | `images/gfx/GiJoe2_HelicopterFilm%2003.jpg` | GI Joe 2 helicopter |
| Sword turnaround video | `images/gfx/GI_Joe_swordTurnaround.mp4` | — |

### Ender's Game

| Slot | Path | Alt text |
|---|---|---|
| Shuttle drop movie | `images/gfx/EnderGame_ShuttleDrop_Movie.mp4` | — |
| Shuttle 01 | `images/gfx/EnderGame_Shuttle01.jpg` | Enders Game shuttle render |
| Shuttle 03 | `images/gfx/EnderGame_Shuttle03.png` | Enders Game shuttle detail |
| Shuttle 04 | `images/gfx/EnderGame_Shuttle04.jpg` | Enders Game shuttle view |
| Shuttle 05 | `images/gfx/EnderGame_Shuttle05.jpg` | Enders Game shuttle view |
| Shuttle 06 | `images/gfx/EnderGame_Shuttle06.jpg` | Enders Game shuttle view |
| Film shot | `images/gfx/EnderGame_Shuttle_FilmShot.jpg` | Enders Game film shot |

### Hugo

| Slot | Path | Alt text |
|---|---|---|
| Train (section banner) | `images/gfx/Hugo_Train.jpg` | Hugo — Train render |
| Look dev | `images/gfx/hugo-lookdev.jpg` | Hugo look dev renders and Mari grab |
| Mari clock asset render | `images/gfx/hugo-AssetRender_Mari%20Clock%2002.jpg` | Hugo Mari clock asset render |
| Ceiling render 04 | `images/gfx/hugo-CeilingRender04.jpg` | Hugo ceiling render detail |
| Clock 02 slot 03 | `images/gfx/Hugo_clock02_slot03.jpg` | Hugo clock texture work |
| Asset render | `images/gfx/hugo-AssetRender.jpg` | Hugo asset render |
| Ceiling render | `images/gfx/hugo-CeilingRender.jpg` | Hugo ceiling render |

### ACT-UK Simulation Centre

| Slot | Path | Alt text |
|---|---|---|
| Aldermans gif video | `images/gfx/act-uk-aldermans-gif_Slot01.mp4` | — |
| Sim centre 1 | `images/gfx/act-uk-sim-centre-1_Slot04.jpg` | ACT-UK simulation centre |
| Screenshot 1 | `images/gfx/act-uk-screenshot-1_Slot02.jpg` | ACT-UK in-engine screenshot |
| Env split slot 07 | `images/gfx/act-uk-sim-centre-4%20Split_Slot07.jpg` | ACT-UK environment split view |
| Textures A | `images/gfx/act-uk-textures-a.jpg` | ACT-UK texture maps |
| Screenshot 2 (carousel active) | `images/gfx/act-uk-screenshot-2_Slot03.jpg` | ACT-UK training screenshot |
| Sim centre 2 | `images/gfx/act-uk-sim-centre-2_Slot05.jpg` | ACT-UK simulation centre 2 |
| Sim centre 3 | `images/gfx/act-uk-sim-centre-3_Slot06.jpg` | ACT-UK simulation centre 3 |
| Ground texture 01–15 | `images/gfx/act-uk-sim-centre-GroundTexture01_Slot08.jpg` → `GroundTexture15.jpg` | ACT-UK ground texture (1–15) | 15 slides |
| Cinema4D texture 01 | `images/gfx/act-uk-sim-centre-GroundTextureCinema4D%2001.jpg` | ACT-UK Cinema4D texture |
| Cinema4D texture 02 | `images/gfx/act-uk-sim-centre-GroundTextureCinema4D%2002.jpg` | ACT-UK Cinema4D texture 2 |
| Zbrush example | `images/gfx/act-uk-sim-centre-ZbrushExample.jpg` | ACT-UK Zbrush example |
| Texture | `images/gfx/act-uk-sim-centre-texture.jpg` | ACT-UK texture |
| Textures 3 | `images/gfx/act-uk-textures-3.jpg` | ACT-UK colour maps activity 5 |
| Textures B | `images/gfx/act-uk-textures-b.jpg` | ACT-UK colour maps B |
| Textures C | `images/gfx/act-uk-textures-c.jpg` | ACT-UK colour maps C |
| Trench head | `images/gfx/act-uk-trench-head.jpg` | ACT-UK trench head |
| Trench | `images/gfx/act-uk-trench.jpg` | ACT-UK trench |

### Game Pitch Environments

| Slot | Path | Alt text |
|---|---|---|
| Env 01 | `images/gfx/game-pitch-env-01.png` | Game pitch environment modelling |
| Env 02 | `images/gfx/game-pitch-env-02.png` | Game pitch environment modelling |
| Env 03 | `images/gfx/game-pitch-env-03.png` | Game pitch environment modelling |

### Slum House

| Slot | Path | Alt text |
|---|---|---|
| Reference | `images/gfx/slum-house-Reference.jpg` | Slum House reference |
| Movie video | `images/gfx/slum-house-Movie.mp4` | — |
| Modelling 2 video | `images/gfx/slum-house-modelling-2.mp4` | — |
| Concrete | `images/gfx/slum-house-concrete.jpg` | Slum House concrete texture |
| Brush work | `images/gfx/slum-house-brushwork.jpeg` | Slum House brush work |

### Games / Animation Work

| Slot | Path | Alt text |
|---|---|---|
| Prop animation video | `images/gfx/games-prop-animation.mp4` | — |
| Animation slot 01 video | `images/gfx/GameWork_Animation_slot01.mp4` | — |
| Game work environment slot 02 | `images/gfx/GameWork_Slot02.jpg` | Game work environment |
| Game texture slot 02 | `images/gfx/Game_texture_slot02.jpg` | Game texture work |
| Cartoon boxcar | `images/gfx/games-cartoon-boxcar.jpg` | Cartoon stylised boxcar |
| VFX hero 2 (carousel active) | `images/gfx/games-vfx-hero-2.png` | Games VFX hero 2 |
| VFX hero 3 | `images/gfx/games-vfx-hero-3.png` | Games VFX hero 3 |
| Zombie engine grab | `images/gfx/658ba4_023dc16377bb459b829633b2c489923d~mv2.jpg` | Zombie game engine screen grab |
| Game work animation gif | `images/gfx/GameWork_Slot03.gif` | Game work animation clip |
| Level of detail gif | `images/gfx/Game_LoDClip.gif` | Game level of detail clip |

### Peek grid (footer)
Reuses homepage card thumbnails — see Homepage section above.

| Slot | Path | Notes |
|---|---|---|
| Peek 1 | `images/medidata-edc-thumb.webp` | Links to EDC case study |
| Peek 2 | `images/qualis-airquality-thumb.webp` | Links to Qflow |
| Peek 3 | `images/qualis-alerts-thumb.webp` | Links to Qflow notifications |
| Peek 4 | `images/homerenter-thumb.webp` | Links to HomeRenter |
| Peek 5 | `images/animation-thumb.webp` | Links to Risk / Animation |
| Peek 6 (blurred) | `images/medidata-edc-thumb.webp` | Blurred — more work placeholder |
| Peek 7 (blurred) | `images/qualis-airquality-thumb.webp` | Blurred — more work placeholder |
| Peek 8 (blurred) | `images/animation-thumb.webp` | Blurred — more work placeholder |

---

## Qflow Air Quality (`contech-qflow.html`)

### Workshop & Scoping
| Slot | Path | Alt text | Notes |
|---|---|---|---|
| Low-fi experiment video | `images/Qflow_Airquality/13 - EARLY_MIDTEST.mp4` | Low fidelity layout experiment | Autoplay loop, left column |
| Dashboard screenshot | `images/Qflow_Airquality/Desktop HD.png` | Qflow Air Quality — Activities view with pollution graph and Gantt work packages | Right column, paired with video above |
| Sketchbook | `images/Qflow_Airquality/notesADS_Drawings.png` | Sketchbook — handwritten wireframes and design notes from early exploration | Full-width below the two-column layout |

### Illustrations
| Slot | Path | Alt text | Notes |
|---|---|---|---|
| 404 page illustration | `images/Qflow_Airquality/404.svg` | Qflow 404 page illustration | Design system section |
| Email / alert illustration | `images/Qflow_Airquality/RunMaskManWarning.svg` | Email illustration inspired by brainstorming session with product owner and founder | Paired with 404 |
| Construction vehicle | `images/Qflow_Airquality/ConVehicle 01.svg` | Construction vehicle illustration | Row of 4 |
| Resourcing scene | `images/Qflow_Airquality/ResourcingScene 01.svg` | Resourcing scene illustration | Row of 4 |
| Crane hydraulic | `images/Qflow_Airquality/CraneHydraulic 01.svg` | Crane hydraulic illustration | Row of 4 |
| Group talking | `images/Qflow_Airquality/GroupTalkingLrg 02.svg` | Group talking illustration | Row of 4 |

### Design system gallery
| Slot | Path | Alt text | Notes |
|---|---|---|---|
| Colours GIF | `images/Qflow_Airquality/Zeroheights-01.gif` | Qflow design system — colours | Zeroheight export |
| Illustrations guide GIF | `images/Qflow_Airquality/Zeroheights-02.gif` | Qflow design system — guide to illustrations | Zeroheight export |
| Modals GIF | `images/Qflow_Airquality/Zeroheights-03.gif` | Qflow design system — modals dos and don'ts | Zeroheight export |
| Iconography GIF | `images/Qflow_Airquality/Zeroheights-04.gif` | Qflow design system — iconography | Zeroheight export |
| Full overview GIF | `images/Qflow_Airquality/Zeroheights-05.gif` | Qflow design system — full overview | Zeroheight export |
| Sketch style guide GIF | `images/Qflow_Airquality/Zeroheights-06.gif` | Qflow design system — sketch style guide | Zeroheight export |

### Team photos
| Slot | Path | Alt text |
|---|---|---|
| Booth solo | `images/Qflow_Airquality/QFlow_marketing.webp` | Lesley at the Qflow exhibition stand |
| Conference collage | `images/Qflow_Airquality/QFlow_PhotoGroup02.webp` | Qflow conference booth collage |
| Team group | `images/Qflow_Airquality/QFlow_PhotoGroup.webp` | Qflow team photo |

---

## Pages with no images yet — see PLACEHOLDER_LOG.md

| Page | File | Status |
|---|---|---|
| Clinical Risk-Based Monitoring | `clinical-risk-based-monitoring.html` | 10 image placeholders outstanding |
| Qualis Flow 02 | `qualisflow-02.html` | 10 image placeholders outstanding |
| Games, Simulations & Films (alt) | `games-simulations-films.html` | No images placed — placeholder CSS only |
