# EDC Redesign — Audio Narration Script

*Friendly, conversational narration for listeners who prefer audio over reading. Written in first person, as spoken by Lesley.*

---

Hey, thanks for listening. I'm going to walk you through one of my biggest and most complex projects — the Medidata EDC redesign.

---

## A bit of context

Medidata is a global leader in clinical trial software. Their flagship product, Rave Classic, has been around since 2000 and is used by pharmaceutical companies and clinical research teams all over the world to collect and manage patient data during drug trials.

The thing is — by the time I joined this project, Rave Classic was running on ageing Microsoft technology approaching end of life. A redesign launched back in 2017, called Rave EDC, was meant to replace it. But here's the tricky part: even years later, customers were still using Classic. Some were migrating as late as mid-2025. The two products were essentially competing with each other inside the same company.

And the new version? Not exactly beloved. Users were frustrated. Complaints were piling up. People had found workarounds just to get through their day. Meanwhile, competitors were catching up fast with cleaner, more modern integrated platforms.

Something had to change.

---

## What EDC actually is

Before I get into the work — just a quick explainer if you're not familiar with the space.

EDC stands for Electronic Data Capture. It's cloud-based software that clinical trial teams use to enter, review and manage patient data. Think of it like a very specialised, highly regulated data entry and workflow system. Study teams use it every day — sometimes for hours at a stretch — to record medical results, resolve data queries, and track patient progress across a trial.

The people using it fall into two broad groups. At the trial site you've got nurses, clinicians, data clerks, and Clinical Research Coordinators — the CRCs — who are sometimes hands-on with patients and entering patient data constantly. Then on the sponsor side, the people running and overseeing the trial, you have Clinical Research Associates — CRAs — who monitor sites and make sure everything's compliant, and Data Managers who clean and validate the data before it goes anywhere near a statistician. These are busy, expert professionals. The software is their daily tool, not something they dip in and out of.

It's not glamorous software. But it matters enormously. Accuracy here directly affects whether a drug gets approved.

---

## My role in this

I led the data pages — that's the patient record, which is a large and central section of the redesign. I worked alongside my design partner in a deliberate divide-and-conquer model: we each owned different areas, explored independently, then synced regularly to coordinate findings and make sure the designs held together.

After our Lead Designer left in 2023, our scope expanded to study listing pages, getting stuff implemented and resolveing just in time solutions like global filters. I also independently led AI features, Electronic Health Record integration, and a number of other areas that tied into the wider platform ecosystem.

---

## The problems we were solving

When we dug into the research — internal stakeholders, sales, engineering and more — a few clear themes came through.

The biggest one: users kept losing track of where they were and what still needed doing. The moment they clicked into a patient record, all their task context disappeared. They'd have to navigate back, reapply filters, find their place again or export out reports to navigate the system. Repeat, all day.

Performance was also a real issue. Slow load times pushed people toward workarounds or, in some cases, toward competitors.

Data was scattered. Users were re-entering the same patient information in multiple places because the system didn't connect the dots for them leaving gaps for errors.

Accessibility had been overlooked. The interface was hard to scan quickly, and keyboard navigation didn't match how people actually worked — which really matters when you're doing fast, repetitive data entry.

And there was a density problem too. Each redesign iteration had made the interface feel more spacious — which sounds nice, but actually meant users could see less data at a glance. They wanted information-dense views. They were power users, not casual browsers.

---

## What we were trying to achieve

Coming out of that research, we shaped a few clear goals.

We wanted to restore the task awareness that Rave Classic users had always loved — that sense of knowing at a glance where you are and what still needs doing.

We wanted to make the interface genuinely faster to use. Fewer clicks. Less hunting. Less friction in the daily grind.

We needed to make room for the future — AI features, Electronic Health Record (EHR) integration, connected patient records — without the interface feeling bolted together.

And honestly? We needed to make it look like progress. Clients needed to see the improvement immediately. The sales demo moment had to be obvious.

---

## How we approached it

This was a big, complicated project with a lot of moving parts — a large international team, multiple product streams running in parallel, and real technical constraints including a migration from Angular to React, legacy APIs, and strict backend limits.

We didn't just talk to end users. We ran individual calls with sales, marketing, solution experts, and engineering. That format — one-on-one, not workshops — got us more honest, unfiltered insight. And what we consistently heard was that clients saw us as stagnant and new competitors were were emerging from unexpected places , like patient eSource companies.  They needed to see momentum.

I worked closely with engineering from the start, which made a real difference. Sharing research clips rather than just conclusions meant the team felt part of the process, not just handed specs. We caught blind spots early. We ran short syncs to surface blockers before they became constraints. And we used functional prototypes instead of static mockups wherever we could.

---

## What changed

The redesign rolled out in phases through 2025 and 2026. Early signals have been positive.

Users now have a persistent left-side panel showing task status at a glance — no more losing context when drilling into a record. That alone has cut unnecessary navigation significantly. Usability studies and beta pilots pointed to around 40–50% fewer clicks for common workflows.

Core features that were hard to find are now easier to discover.I have no hard evidence of that but it's what I noticed during task observation during usuability studies.

We removed legacy features that hadn't been used in years — reducing years of design and engineering debt in one go and making the system lighter to maintain going forward.

The redesign also made the Classic-to-new migration story clearer. One platform, with a consistent experience. That's a much easier conversation in a sales demo.

And perhaps the thing I'm most proud of: the project demonstrated the ROI of embedded research. Fewer rework cycles. Fewer post-release fixes. A clearer picture of where engineering effort would have the most impact.

---

## The honest bit

This wasn't a smooth ride. The 2022 pitch landed lukewarm. Executive buy-in only came once we had interactive prototypes and concrete productivity improvements to show 

Reddit has been… characteristically blunt about some of the structural changes outside the core EDC environment. That feedback is real and worth sitting with.

And working in a heavily regulated, technically complex domain means that some of the things I'd want to fix simply couldn't be fixed in this round — backend constraints, migration dependencies, things that take years to untangle.

But the direction is right. And the foundation is there now for the next phase.

---

Thanks for listening. If you want to dig into the specifics — the design decisions, the deep dives, the before and after — head back to the written version. There's a lot more detail there.

*— Lesley*
