# Risk Management — Audio Narration Script

---

Hey, thanks for listening. This is the Risk Management case study — a near-cancellation story that became one of the more strategically interesting projects I've worked on.

---

## About the Company

Medidata, founded in 1999 and now part of Dassault Systèmes, is a global technology company providing end-to-end B2B SaaS solutions for clinical trials within the life sciences industry. Their platform helps pharmaceutical, biotech, and contract research organisations modernise the discovery process by improving workflows, reducing errors, and accelerating the development of new therapies.

---

## The Stakes

After years of development and millions in investment, Medidata's RACT — the Risk Assessment Categorisation Tool — had only one mid-market customer and was nearing cancellation. Its convoluted, fragmented workflows led prospects to dismiss it in sales demos, believing Excel or SharePoint easily met their needs.

---

## What We Were Building

Renamed Risk Management and reimagined as a cloud-based project management tool, it gives Clinical Operations Teams — Study Leads, CRAs, and Data Managers — a faster way to collaborate, log mitigation steps, and make critical go/no-go calls. Work that used to take hours across multiple documents was reduced to minutes.

It brings together Key Risk Indicators and Quality Tolerance Limits. Think Moneyball — but applied to a clinical trial. The system uses historical patient, site, and timeline data as statistical inputs to generate clear probabilities of potential issues before they become serious. For example, based on past trials, a particular site may have a 75% likelihood of dropping out early because patient data-entry pace is predicted to slow week over week. If that happens, what can we do?

---

## The Goals

We had three core objectives. First: deliver a modern, integrated replacement for the outdated RACT tool within seven months, enabling growth in Risk-Based Quality Management and moving users beyond Excel. Second: provide a unified view of risk data, eliminating the need to navigate across multiple pages. Third: expand Medidata's design system with reusable components tailored to the new product, ensuring alignment with other applications and strengthening integration opportunities.

---

## Designing Through the Fog

I inherited a project already behind schedule, in a domain I had to learn quickly. Globally distributed team, fragmented customer data, and a culture that wanted to ship fast. So I had to find ways to slow things down enough to get it right, without losing momentum.

For domain knowledge: I attended TransCelerate conferences, watched Dan Sfera's YouTube channel for plain-English clinical trial explanations, and researched how competitors and regulatory bodies communicated clinical risk. I dug into historical design decisions with lead designers, and ran a listening tour through subject matter experts, stakeholders, sales calls, and client training sessions.

For trust and alignment: I used interactive prototypes to amplify design's voice in a PM-led organisation — letting stakeholders champion ideas in rooms I wasn't in. I turned acronym-heavy jargon into reference documents, and my honest "newbie" questions often helped engineers and business analysts too. Showing multiple solutions with pros and cons helped surface hidden constraints.

For execution: I led mini workshops and Slack threads to build UX validation into a "just ship it" culture. I adopted Axure for advanced high-fidelity prototypes — Figma for specs, Axure for interactions — which earned me genuine credibility with the engineering team and real access to users.

---

## The Solutions

The first release prioritised a data table over visualisations due to limited front-end resources. The design goal was a clear view of all risks — across categories — letting users compare status, trace origin, and work toward closing risks from a single, understandable view, without leaving the risk listing page.

Each risk included contextual details: descriptions, links to attached Quality Tolerance Limits, and Key Risk Indicators. I worked closely with the Product Director — formerly a risk manager — to figure out the right column order, moving the most important information to the left.

I also recommended merging two separate hover points into one, improving scannability, and added an info icon so users wouldn't miss hidden content.

A significant win was replacing a slide-up UI with a full-page modal. Testing showed the slide-up appeared abruptly, obscured grid content, and couldn't auto-focus the correct row. Despite initial pushback to reuse the existing pattern, the change gained support. Interviews revealed users didn't reference other risks while entering questions — so the modal didn't disrupt flow. And since risks were referenced by name for easier recall, not by number, I de-emphasised the numbering and highlighted names as deep links to detailed views. One click.

---

## What Came Next — RTSM

During the 2021 restructure, I stayed on thanks to credibility with the Risk Management Product Director. Rather than playing it safe, I volunteered to lead design on RTSM — Medidata's toughest and second-largest product. It had a reputation for being notoriously difficult for designers due to a lack of design maturity and limited front-end support.

I started by really listening — to all stakeholders, including developers. My advanced prototyping skills earned me genuine access to users, sales calls, and real conversations with engineers. I uncovered key lessons from a 2017 redesign: both its successes and its organisational and technical failures. Understanding that breakdown directly shaped my approach when I later joined the Rave EDC redesign team.

One of the fastest-adopted features I designed was an email alerts configuration for drug supplies. I found that consultants — often on client calls or multitasking — preferred configuring all alerts at once while referencing others. After testing several concepts, I landed on a dense checkbox map. Technically it could be considered cluttered, but it offered a clear overview of defaults and non-recommended alerts. Later, I highlighted changes and added a simple save button, moving away from autosave so people could easily see what they'd done. It taught me a key lesson: knowing when to break best-practice rules matters more than following them blindly.

---

## The Outcome

Risk Management launched in early 2021, successfully absorbing RACT functionality while integrating with other apps and scaling for enterprise adoption.

I designed a unified modal that saved users hours when finding and referencing information, and reduced engineering maintenance. The pattern was adopted into Medidata's design system.

Demo rejection rates dropped, leads increased, and the product went from near-cancellation to becoming the strategic foundation for a unified data, risk, and quality management offering within Clinical Data Studio.

---
