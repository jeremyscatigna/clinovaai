# ClinovaAI Copy, Calculator, SEO Pages, and Meta Ads Plan

## Objective

Reposition ClinovaAI without changing the current visual design direction.

The landing page should no longer feel like a single AI receptionist feature. It should position ClinovaAI as a done-for-you clinic growth agency powered by AI: we build, run, monitor, and optimise the front-end growth systems for clinics, instead of handing them software to manage.

Core positioning:

> ClinovaAI is the done-for-you AI growth system for clinics. We run your front desk, follow-up, reviews, reactivation, social conversations, ads support, and retention systems so you can focus on treatments.

Important constraints:

- Keep the current hero headline exactly: "Your clinic is losing $10,000 to $30,000 every month. We stop that."
- Do not reposition as SaaS.
- Do not narrow the market to one clinic vertical. Use "clinics", "aesthetic clinics", "medical aesthetics", "dental clinics", "wellness clinics", and "private healthcare clinics" where needed.
- Keep global ambition. Use "Built in Miami and London" instead of US-only or UK-only language.
- Keep public pricing hidden. Pricing is discussed on the closing call.
- Use GoHighLevel for booking, not Calendly. Every booking CTA should point to `/book-demo` when possible, with the direct GoHighLevel link as fallback.
- Keep the current structure and design language wherever possible. Change copy first, add only the sections/pages needed for conversion, SEO, and Meta ads.

Primary booking URL:

```text
https://api.leadconnectorhq.com/widget/booking/E6M09aZ0GebxIuwLiYnP
```

## Final Landing Page Structure

The current landing page structure stays intact:

1. Hero
2. Ticker
3. New calculator section
4. Problem
5. Solution / services
6. How it works
7. Pricing
8. Results / media proof section replacing Le Petit Parisien
9. Guarantee
10. FAQ
11. Final CTA
12. Footer

The design system should be reused for every new section. The calculator, video carousel, and micro-pages should feel native to the existing luxury/clinical style, not like widgets dropped into the page.

## Navigation Plan

Top navigation:

- Services -> `/#services`
- Calculator -> `/calculator`
- Pricing -> `/#pricing`
- About -> `/about`
- FAQ -> `/#faq`
- CTA button -> `/book-demo`

Do not add the brand kit to the public nav.

Footer navigation:

- AI Front Desk -> `/services/ai-front-desk`
- AI Reputation Engine -> `/services/ai-reputation-engine`
- AI Reactivation System -> `/services/ai-reactivation-system`
- AI Social Media Engine -> `/services/ai-social-media-engine`
- AI Ad Management -> `/services/ai-ad-management`
- AI Client Retention -> `/services/ai-client-retention`
- Website + AI Chatbot -> `/services/website-ai-chatbot`
- Calculator -> `/calculator`
- Book Demo -> `/book-demo`
- Founding Cohort -> `/founding-cohort`
- Privacy Policy -> `/privacy`
- Terms of Service -> `/terms`
- Cookie Policy -> `/cookies`
- Data Processing Agreement -> `/dpa`

## Section 1: Hero Copy

Purpose: preserve the proven revenue-loss hook while expanding the perceived offer from receptionist to managed growth system.

Eyebrow:

> DONE-FOR-YOU AI GROWTH SYSTEMS FOR CLINICS

Headline:

> Your clinic is losing $10,000 to $30,000 every month. We stop that.

Subheadline:

> ClinovaAI builds and manages your AI clinic's front desk, follow-up, reviews, reactivation, social conversations, ads support, and retention. No software to learn. No extra staff to hire. We install it, operate it, and optimise it for you.

Primary CTA:

> See What You're Losing

Link: `/calculator`

Secondary CTA:

> Book a 15-Min Demo

Link: `/book-demo`

Trust strip:

> Built in Miami and London · 30-day results guarantee · No software to learn · Fully managed for clinics

Hero proof metrics:

- 24/7 response coverage
- 60 sec average response target
- $10k-$30k monthly leakage stopped
- 30-day results guarantee

## Section 2: Ticker Copy

Keep the ticker component. Update the items to communicate the full system:

- AI Front Desk
- Missed Call Recovery
- Instagram DM Booking
- Google Review Automation
- Dormant Client Reactivation
- No-Show Reduction
- AI Follow-Up Sequences
- Website AI Chatbot
- Meta Ads Support
- 30-Day Results Guarantee
- Built in Miami and London
- Done For You, Not DIY Software

## Section 3: New Calculator Section

Purpose: turn the generic revenue-loss claim into a personal number before the visitor reaches the rest of the page.

Placement: directly after the ticker, before the problem section.

Headline:

> Find out how much your clinic is losing right now.

Subheadline:

> Enter two numbers. Get a realistic monthly leakage estimate in seconds.

Calculator inputs:

- Missed calls or enquiries per day: slider from 0 to 30, default 8.
- Average treatment value: select options `$200`, `$300`, `$400`, `$500`, `$750`, `$1,000+`, default `$400`.

Formula:

```text
monthly_leakage = missed_enquiries_per_day * average_treatment_value * 30
annual_leakage = monthly_leakage * 12
```

Output copy:

> Your clinic could be losing approximately $XX,XXX per month.

Secondary output:

> That's $XXX,XXX per year before reactivation, reviews, no-show recovery, social DMs, and follow-up are even counted.

Supporting copy:

> This estimate only measures missed inbound demand. ClinovaAI also helps recover dormant clients, capture social enquiries, automate reviews, reduce no-shows, and follow up with leads until they book.

CTA:

> Show Me How To Fix This

Link: `/book-demo?source=calculator`

Tracking:

- `CalculatorStart` custom event when a user changes the first input.
- `CalculatorComplete` custom event when monthly leakage is calculated and visible.
- `Lead` event when the calculator CTA is clicked.

Standalone calculator page:

- Route: `/calculator`
- Same calculator component, but with more explanation and a CTA block.
- Meta title: "Clinic Revenue Leakage Calculator | ClinovaAI"
- Meta description: "Calculate how much revenue your clinic may be losing from missed calls, slow follow-up, no-shows, and unconverted enquiries."

## Section 4: Problem Copy

Eyebrow:

> THE REAL PROBLEM

Headline:

> Your clinic is leaking revenue from more than one place.

Intro:

> Missed calls are the obvious leak. But the real problem is bigger. Enquiries arrive through the phone, your website, Instagram, Facebook, email, WhatsApp, and old client lists. If no one is operating those channels every day, revenue disappears before it ever reaches your calendar.

Six leak cards:

1. Missed Calls

> A ready-to-book patient calls while your team is busy. No answer. No voicemail. They call the next clinic.

2. Slow Follow-Up

> A lead asks a question, then waits hours for a reply. By the time your team responds, the urgency is gone.

3. Ignored Social DMs

> Instagram and Facebook enquiries sit unread while competitors respond faster and book the appointment.

4. Dormant Clients

> Your database is full of past clients who would return if someone followed up with the right message at the right time.

5. Reviews Left To Chance

> Happy clients leave quietly. Unhappy clients leave publicly. Without a review system, reputation becomes random.

6. No-Shows And Drop-Offs

> A booking is not revenue until the patient arrives. Without confirmations, reminders, and recovery flows, gaps appear in the calendar.

Bottom line:

> The average clinic is not losing revenue because demand is missing. It is losing revenue because the front-end growth operation is not being run consistently. That is what ClinovaAI takes over.

## Section 5: Solution / Services Copy

Eyebrow:

> THE CLINOVA GROWTH SYSTEM

Headline:

> Six AI systems. One managed growth operation. Zero software for you to run.

Subheadline:

> ClinovaAI is not a dashboard you log into. It is a done-for-you agency service powered by AI. We build the workflows, connect the systems, monitor performance, and keep improving the engine every month.

Service blocks:

### 01. AI Front Desk

Title:

> Every call. Every message. Every enquiry. Answered.

Body:

> We set up AI call handling, missed-call text-back, SMS follow-up, email follow-up, web chat, and booking workflows so your clinic is reachable 24/7. The system qualifies enquiries, answers common questions, collects details, and routes serious patients toward a booking.

Impact line:

> Average target: under 60-second response across priority channels.

### 02. AI Follow-Up And Booking

Title:

> Leads are followed until they book, not until your team gets busy.

Body:

> Most clinics do not lose leads at the first message. They lose them in the gaps after the first message. We build multi-step follow-up sequences that keep conversations moving across SMS and email, handle reschedules, reduce no-shows, and push qualified leads back into the calendar.

Impact line:

> Built to convert missed and inbound enquiries into booked appointments.

### 03. AI Reputation Engine

Title:

> More 5-star reviews. Less public damage.

Body:

> After appointments, happy patients are guided toward a simple review flow. Negative feedback is captured privately so your team can respond before it becomes a public reputation issue. Your online trust becomes a system, not luck.

Impact line:

> Built to increase review velocity and protect local trust.

### 04. AI Reactivation System

Title:

> Your old clients are not gone. They are just untouched.

Body:

> We segment dormant clients, identify treatment opportunities, and send personalised reactivation campaigns through SMS and email. Past patients get the right comeback message based on their treatment history and timing.

Impact line:

> Built to recover revenue from relationships you already paid to acquire.

### 05. AI Social Media Engine

Title:

> Social conversations become booked appointments.

Body:

> We help turn Instagram, Facebook, and short-form content traffic into enquiries and bookings. The system supports content workflows, DM response, comment routing, and appointment conversion from social conversations.

Impact line:

> Built to make social a booking channel, not just a content feed.

### 06. AI Client Retention

Title:

> One-time patients become repeat patients.

Body:

> Post-treatment follow-ups, treatment plan reminders, birthday offers, seasonal campaigns, and loyalty sequences keep patients engaged after the first appointment. Every message is timed around the patient relationship.

Impact line:

> Built to increase lifetime value without adding manual admin.

Supporting infrastructure card:

> Website + AI Chatbot

> If your website is part of the leak, we can rebuild it into a conversion-focused booking asset with AI chat, clearer service journeys, and a smoother path from visitor to consultation.

## Section 6: How It Works Copy

Eyebrow:

> THREE STEPS, FULLY MANAGED

Headline:

> Sophisticated under the hood. Simple for your clinic.

Step 1:

> We map your clinic.

> In one onboarding call, we learn your treatments, tone, booking process, lead sources, calendar setup, and current bottlenecks. Then we define the first measurable targets.

Step 2:

> We build and connect the system.

> We connect the workflows around your current tools wherever possible: phone, calendar, website, CRM, SMS, email, and social channels. Your team does not need to learn new software.

Step 3:

> We run, monitor, and optimise it.

> Once live, we watch performance, improve the automations, review conversations, adjust follow-ups, and report on captured bookings, recovered revenue, response speed, reviews, and retention.

## Section 7: Stats Strip Copy

Use current stat-strip styling.

- 24/7: Always on. No holidays. No sick days.
- 60 sec: Target response speed across priority channels.
- 3.2x: Booking conversion uplift target from faster follow-up.
- 30 days: Measurable results, or we keep working free.

## Section 8: Pricing Copy

Keep the current three-card pricing design. Do not show prices publicly.

Eyebrow:

> SYSTEM TIERS

Headline:

> Pick the level of growth operation your clinic needs.

Subheadline:

> Pricing depends on your clinic, call volume, locations, current systems, and the level of support you need. On the demo call, we map the right system and give you a clear quote.

Tier 1:

> Growth Desk

Positioning:

> Stop the bleed.

Includes:

- Missed-call text-back automation
- Basic AI response system
- SMS follow-up to reduce no-shows and handle reschedules
- Review request automation
- Booking support workflows
- Basic reporting

Best for:

> Clinics losing revenue from missed calls and inconsistent follow-up.

CTA:

> Discuss Growth Desk

Tier 2:

> Revenue Desk

Positioning:

> Build the engine.

Includes:

- Everything in Growth Desk
- AI call handling and appointment booking
- Multi-step SMS and email follow-up
- Lead capture and qualification
- CRM and calendar integration
- AI Reputation Engine
- AI Reactivation System
- Booking optimisation
- Advanced reporting dashboard

Best for:

> Clinics ready to recover missed opportunities and create a consistent booking engine.

CTA:

> Discuss Revenue Desk

Tier 3:

> Clinic Dominance System

Positioning:

> Own your market.

Includes:

- Everything in Revenue Desk
- AI Social Media Engine
- AI Ad Management support
- AI Client Retention system
- Website conversion system with AI chatbot
- Multi-location support
- Custom integrations
- Priority support and ongoing optimisation

Best for:

> Clinics that want a complete front-end growth operation managed for them.

CTA:

> Discuss Clinic Dominance

Pricing note:

> Tailored to your clinic. We work within clear tiers, then configure the system around your clinic's workflow, treatment menu, patient volume, locations, and existing tools. No rigid one-size-fits-all package. No public price anchoring before we understand the business.

## Section 9: Results / Ads Gallery Replacement

Replace the Le Petit Parisien case study section.

New section purpose:

- Remove off-vertical proof.
- Show the creative direction of the launch campaign.
- Create a fast, visual, social-native proof section that supports Meta ad traffic.
- Use current sample videos only as placeholders until final ads are ready.

Eyebrow:

> LAUNCH CREATIVE

Headline:

> Built for the way clinics get attention now.

Subheadline:

> ClinovaAI is launching with short-form creative designed for Instagram Reels, TikTok-style discovery, and Meta ad traffic. The final campaign assets will live here as a fast, mobile-first gallery.

Gallery design:

- Pinterest-style masonry carousel.
- 9:16 vertical cards.
- Autoplay disabled by default for performance.
- Poster image loads first.
- Video loads only when card is visible or tapped.
- Use muted inline preview only after interaction or viewport threshold.
- Add captions below cards: "Missed calls", "DM booking", "Reviews", "Reactivation", "No-shows", "Growth system".

Media source folder:

```text
/Users/jeremyscatigna/Downloads/Clinova AI ADS
```

Current placeholder inventory:

- 21 local MP4 files.
- Treat as draft references, not final production assets.

Fast media strategy:

1. Upload final compressed assets to Cloudflare R2 behind a custom media domain, for example `https://media.clinovaai.co`.
2. Generate WebP/AVIF poster images for every video.
3. Keep local `public` assets limited to poster placeholders only if needed.
4. Store media metadata in a typed array: title, service angle, poster URL, MP4 URL, optional WebM URL, duration, alt text.
5. Lazy-load videos with `preload="none"`.
6. Never ship all MP4s inside the Next.js app bundle.

Recommended upgrade:

- If budget allows, use Cloudflare Stream instead of raw R2 MP4 delivery for adaptive streaming and thumbnails.
- If staying with R2, compress each MP4 aggressively and serve via Cloudflare cache.

CTA below gallery:

> Want this growth system running inside your clinic?

Button:

> Book Your 15-Min Demo

Link: `/book-demo?source=creative-gallery`

## Section 10: Guarantee Copy

Eyebrow:

> THE 30-DAY GUARANTEE

Headline:

> 30 days. Measurable improvement. Or we keep working free until you see it.

Body:

> Every ClinovaAI engagement starts with clear targets: captured bookings, response speed, recovered enquiries, review velocity, no-show reduction, or reactivation revenue. If we do not create measurable improvement within 30 days, we keep working at no charge until we do.

Second paragraph:

> No vague promises. No software excuses. We are accountable to outcomes, not effort.

## Section 11: FAQ Copy

Keep current FAQ styling. Expand to these questions:

### Is ClinovaAI software?

No. ClinovaAI is a done-for-you agency service powered by AI. We build, connect, monitor, and optimise the system for you. Your clinic does not need to learn another dashboard.

### What types of clinics is this for?

ClinovaAI is built for clinics with high-value appointments and inbound demand: aesthetic clinics, medical aesthetics, dental clinics, wellness clinics, private healthcare clinics, and multi-location clinic groups.

### Will my patients know they are talking to AI?

The system is configured around your tone and your preferred level of transparency. Some clinics want a seamless experience. Others prefer to disclose automation. We configure this during onboarding.

### How fast can this go live?

Most first systems can go live within days after onboarding, depending on the integrations required. More advanced systems with social, CRM, website, or multi-location workflows take longer, but we define the rollout clearly before work begins.

### Do I have to change my phone number, booking system, or CRM?

Usually no. We connect around your current tools wherever possible. If a tool is creating the bottleneck, we will tell you directly and recommend the simplest fix.

### What happens when the AI does not know the answer?

It does not guess. It captures the enquiry, asks for the right details, and escalates to your team with context. We also review real conversations and improve the system over time.

### What does the 30-day guarantee mean?

Before launch, we agree on measurable targets. If there is no measurable improvement within 30 days, we keep working at no charge until improvement is achieved.

### What about privacy and compliance?

Every implementation is built with auditability, access control, and claim safety in mind. We do not let automations make claims your clinic cannot support. For regulated workflows, we configure the system around your region, clinic policies, and legal requirements.

### Can this work for multiple locations?

Yes. The Clinic Dominance System supports multiple locations with location-specific workflows and unified reporting.

### What happens if I cancel?

You can cancel with notice based on the agreement. Your clinic data, reporting, and relevant assets are handed over. We earn the relationship through performance, not lock-in.

## Section 12: Final CTA Copy

Headline:

> Your clinic never has to miss demand again.

Subheadline:

> Book a 15-minute demo. We will calculate your current revenue leakage, show you what we would build for your clinic, and explain what measurable improvement should look like in the first 30 days.

CTA:

> Book Your 15-Min Demo

Link: `/book-demo`

Trust strip:

> No commitment · 15 minutes · Built in Miami and London · 30-day results guarantee

## Footer Copy

Brand paragraph:

> The done-for-you AI growth system for clinics. We run your front desk, follow-up, reviews, reactivation, social conversations, ads support, and retention systems, fully managed by AI and monitored by humans.

Location line:

> Built in Miami and London · Serving clinics globally

Copyright:

> © 2026 ClinovaAI. All rights reserved.

## New Pages Required

### `/calculator`

Purpose:

- Top-nav destination.
- Highest-intent educational conversion page.
- Used by Meta ads that lead with revenue leakage.

Page structure:

1. Hero: "Clinic Revenue Leakage Calculator"
2. Calculator component
3. Explanation of what the number includes and excludes
4. Six revenue leaks summary
5. CTA to `/book-demo`
6. FAQ about the estimate

### `/book-demo`

Purpose:

- Dedicated low-friction booking page for Meta ads and all CTAs.
- Reduce the friction of sending users away too early.
- Embed the GoHighLevel booking widget directly on the page instead of sending ad traffic to a third-party page immediately.

Page structure:

1. Short hero: "Book your 15-minute ClinovaAI demo"
2. GoHighLevel booking widget embed for `https://api.leadconnectorhq.com/widget/booking/E6M09aZ0GebxIuwLiYnP`
3. Three bullets: "We calculate leakage", "We map your system", "You get a clear next step"
4. Trust strip: "No commitment · 15 minutes · 30-day guarantee"
5. FAQ accordion below embed

Implementation notes:

- Keep the direct GoHighLevel booking link as fallback if the iframe fails.
- Use a responsive iframe embed with lazy loading.
- Persist UTMs and `fbclid` into the GoHighLevel widget URL query string where supported.
- Configure the Meta Pixel ID inside the GoHighLevel calendar/widget settings so booking interactions can also be attributed inside GoHighLevel.
- Add `/thank-you` as the post-booking redirect if GoHighLevel calendar settings allow a custom redirect after scheduling.
- All site CTAs should link to `/book-demo` by default, not directly to GoHighLevel, so the experience stays branded and tracking is controlled.
- If a CTA must leave the site directly, use the GoHighLevel URL and open it in a new tab.

### `/thank-you`

Purpose:

- Clean conversion endpoint for Meta.
- Fires final booking conversion after GoHighLevel redirect or confirmed booking event.

Copy:

> Your demo is booked.

> Check your email for the calendar invite. Before the call, we will review your clinic's current leakage points so the demo is specific to your business.

CTA:

> Return Home

Tracking:

- Fire `Schedule` standard event if this page is reached after a confirmed booking.
- Fire server-side CAPI event if a GoHighLevel webhook confirms the booking.

### `/founding-cohort`

Purpose:

- Replacement proof mechanism until vertical case studies are ready.
- Useful for ads and retargeting.

Copy direction:

> Apply for the ClinovaAI Founding Clinic Cohort.

> We are selecting a small group of clinics for priority onboarding, direct access to the founding team, and locked-in early partner terms.

Important:

- Do not claim specific cohort size unless it is operationally true.
- Do not frame the offer around one country or one clinic vertical. Use clinics globally, built from Miami and London.

### SEO Micro Landing Pages

All micro-pages should be linked from the footer and used as ad destinations when the ad creative focuses on one pain point.

Routes:

- `/services/ai-front-desk`
- `/services/ai-reputation-engine`
- `/services/ai-reactivation-system`
- `/services/ai-social-media-engine`
- `/services/ai-ad-management`
- `/services/ai-client-retention`
- `/services/website-ai-chatbot`

Shared page structure:

1. Pain-specific hero
2. What the system does
3. Why clinics lose money without it
4. How ClinovaAI runs it for you
5. Example workflows
6. Results metrics to track
7. CTA to `/book-demo`
8. FAQ specific to the service

SEO targeting:

- Use "clinics" as the primary global term.
- Use specialty modifiers naturally: aesthetic clinics, medical aesthetics clinics, dental clinics, wellness clinics, private healthcare clinics.
- Avoid keyword stuffing.
- Each page should have unique metadata and one primary H1.

## Micro-Page Copy Direction

### AI Front Desk

H1:

> AI front desk for clinics that cannot afford to miss enquiries.

Core message:

> We answer, qualify, route, and book inbound enquiries across the channels that matter, without forcing your team to manage new software.

CTA:

> Build My AI Front Desk

### AI Reputation Engine

H1:

> Turn patient trust into a repeatable review system.

Core message:

> More happy patients should become public proof. More unhappy patients should be caught privately before the damage is public.

CTA:

> Build My Review Engine

### AI Reactivation System

H1:

> Your past clients are one of the fastest paths to new revenue.

Core message:

> We identify dormant patients, segment them by treatment history, and launch comeback campaigns that bring qualified patients back into the calendar.

CTA:

> Reactivate My Client List

### AI Social Media Engine

H1:

> Turn social attention into clinic bookings.

Core message:

> We support the workflows that turn comments, DMs, and content traffic into qualified appointment conversations.

CTA:

> Turn My Social Into Bookings

### AI Ad Management

H1:

> Make paid traffic easier to convert after the click.

Core message:

> Ads do not fail only because of creative. They fail because leads are not followed up fast enough. ClinovaAI connects ad traffic to booking workflows that respond immediately.

CTA:

> Fix My Ad Follow-Up

### AI Client Retention

H1:

> Keep patients engaged after the first treatment.

Core message:

> We build automated retention sequences around post-treatment care, reminders, rebooking windows, seasonal offers, and loyalty moments.

CTA:

> Improve My Retention

### Website + AI Chatbot

H1:

> A clinic website should book appointments, not just look expensive.

Core message:

> We build or upgrade clinic websites with clearer service journeys, AI chat, conversion copy, and booking paths designed to turn visitors into consultations.

CTA:

> Upgrade My Website

## Meta Ads Technical Plan

Reference requirements from Meta:

- Meta Pixel browser events for page views and standard events.
- Meta Conversions API for server-side events and more reliable attribution.
- Browser/server event deduplication using a shared `event_id`.
- Domain verification and event testing in Meta Events Manager.
- Landing pages must be fast, relevant to the ad, transparent, and not misleading.

### Required Environment Variables

```text
NEXT_PUBLIC_META_PIXEL_ID=1889417841726527
META_ACCESS_TOKEN=
META_DATASET_ID=
META_TEST_EVENT_CODE=
NEXT_PUBLIC_SITE_URL=https://clinovaai.co
GHL_BOOKING_URL=https://api.leadconnectorhq.com/widget/booking/E6M09aZ0GebxIuwLiYnP
GHL_WEBHOOK_SIGNING_KEY=
```

### Tracking Events

All pages:

- `PageView`

Landing page:

- `ViewContent` after hero is visible
- `Lead` when primary CTA or booking CTA is clicked
- `Contact` when final CTA is clicked

Calculator:

- `CalculatorStart` custom event
- `CalculatorComplete` custom event with estimated monthly leakage value
- `Lead` when the calculator CTA is clicked

Book demo page:

- `ViewContent` when booking embed is visible
- `Lead` when the GoHighLevel embed is visible or interacted with
- `Schedule` only after confirmed booking, preferably via GoHighLevel redirect or webhook

Service pages:

- `ViewContent` with `content_name` set to the service page
- `Lead` on CTA click

Thank-you page:

- `Schedule`

### Browser + Server Event Strategy

Browser:

- Add Meta Pixel base script in `layout.tsx`.
- Track route changes in a client analytics component.
- Generate `event_id` for important events and pass it to both Pixel and CAPI.

Server:

- Add `/api/meta/events` route handler.
- Send server-side events to Meta Conversions API.
- Include event name, event time, event ID, URL, user agent, IP address, fbp, fbc, and hashed email/phone only when available and consented.

Deduplication:

- For high-value events, send both browser and server events with the same `event_id`.
- Meta deduplicates when event name and event ID match.

GoHighLevel:

- Short term: fire `Lead` when a user reaches `/book-demo` or clicks the GoHighLevel booking CTA.
- Better: configure the GoHighLevel calendar redirect to `/thank-you` after booking and fire `Schedule`.
- Best: add a GoHighLevel workflow/webhook to confirm scheduled events server-side and send CAPI `Schedule`.
- Configure the same Meta Pixel ID inside the GoHighLevel calendar/widget settings. This gives GoHighLevel visibility into booking-widget activity while the site still tracks pre-booking page behaviour.
- Avoid double-counting final bookings. If GoHighLevel fires `Schedule` directly and the site also fires `Schedule` on `/thank-you`, use a clear event strategy before launch: either let GoHighLevel own confirmed booking events, or deduplicate with event IDs if server-side confirmation is added.

### UTM Plan

Persist these query parameters in first-party storage:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `fbclid`

Attach them to:

- GoHighLevel booking widget URL query parameters where supported
- CAPI custom data
- Internal CTA links

Recommended Meta URL parameter template:

```text
utm_source=meta&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

### Meta Ads Page Map

Cold traffic:

- Revenue leakage ad -> `/calculator`
- Missed calls ad -> `/services/ai-front-desk`
- Reviews ad -> `/services/ai-reputation-engine`
- Dormant clients ad -> `/services/ai-reactivation-system`
- Social DMs ad -> `/services/ai-social-media-engine`
- Ads follow-up ad -> `/services/ai-ad-management`
- Full platform ad -> `/`

Warm retargeting:

- Calculator users -> `/book-demo`
- Service-page viewers -> matching service page or `/book-demo`
- Video viewers -> `/founding-cohort`
- Pricing viewers -> `/book-demo`

Conversion traffic:

- Direct booking ads -> `/book-demo`
- Retargeting ads -> `/book-demo?source=retargeting`

### Meta Ads Compliance Notes

Avoid copy that directly shames or implies personal attributes about the viewer. Safer ad phrasing:

- Use: "Many clinics miss high-intent enquiries after hours."
- Avoid: "Your clinic is badly managed."
- Use: "See how much revenue could be leaking through missed enquiries."
- Avoid: "You are losing patients because your staff is slow."

Landing page claims:

- Keep strong claims tied to calculator assumptions.
- Avoid unverifiable guaranteed revenue numbers.
- Keep the 30-day guarantee tied to measurable improvement, not guaranteed dollar outcomes.

## Performance Plan

Targets:

- Static pages wherever possible.
- No local MP4 bundles on the landing page.
- Calculator is lightweight React only.
- Video gallery uses poster-first lazy loading.
- GoHighLevel booking embed isolated to `/book-demo`, not loaded globally.
- Meta Pixel loaded carefully, not blocking render.

Implementation details:

- Use Next.js App Router static generation for all content pages.
- Use `next/image` for posters.
- Use `<video preload="none" muted playsInline>` only inside lazy client components.
- Use CSS scroll-snap for carousel behaviour instead of heavy carousel libraries.
- Keep third-party scripts limited to Pixel, GoHighLevel embed only on booking page, and optional consent tooling.

## Legal Pages Needed Before Ads

Meta traffic and global clinic positioning require basic legal/compliance pages:

- `/privacy`
- `/terms`
- `/cookies`
- `/dpa`

These can start as clear templates but should be reviewed before heavy ad spend.

Privacy page must mention:

- Meta Pixel and Conversions API
- GoHighLevel booking widget
- Analytics and advertising cookies
- Contact form/booking data
- Data retention
- User rights by region

Cookie page must include:

- Essential cookies
- Analytics cookies
- Advertising cookies
- How to opt out

DPA page should be prepared if clinics ask about patient data handling.

## Implementation Order

### Phase 1: Copy + Routes

1. Update landing page copy in the generator.
2. Add calculator section to homepage.
3. Add `/calculator`.
4. Add `/book-demo`.
5. Replace Le Petit Parisien with launch creative gallery shell.
6. Update footer links.
7. Update sitemap and robots.

### Phase 2: SEO Micro-Pages

1. Create shared service-page component.
2. Create seven service pages.
3. Add unique metadata and schema per page.
4. Link all pages from footer and sitemap.

### Phase 3: Meta Ads Infrastructure

1. Add Meta Pixel base script.
2. Add analytics helper and event map.
3. Add UTM persistence.
4. Add CAPI route handler.
5. Add GoHighLevel redirect or webhook strategy.
6. Add `/thank-you`.
7. Test in Meta Events Manager.

### Phase 4: Media Pipeline

1. Generate poster frames for the draft MP4s.
2. Compress final videos.
3. Upload final videos and posters to Cloudflare R2 or Cloudflare Stream.
4. Add media metadata file.
5. Connect the landing page carousel to remote media.

### Phase 5: Launch QA

1. Run `npm run lint`.
2. Run `npm run build`.
3. Lighthouse homepage, calculator, book-demo, and one service page.
4. Test mobile layout for every new page.
5. Verify Pixel browser events.
6. Verify CAPI events with test event code.
7. Verify GoHighLevel booking embed, Pixel settings, and thank-you flow.
8. Verify sitemap includes all public pages.

## Acceptance Criteria

- Homepage keeps the current design but copy now sells a full done-for-you clinic growth agency.
- Hero headline remains exactly: "Your clinic is losing $10,000 to $30,000 every month. We stop that."
- Calculator exists on homepage and `/calculator`.
- Top nav includes Calculator and About.
- `/book-demo` exists with GoHighLevel embed and low-friction booking copy.
- Le Petit Parisien proof is gone.
- Launch creative gallery is in place and ready for R2/Stream-hosted 9:16 media.
- Footer links to all SEO micro-pages.
- Public prices are not shown.
- Copy says "Built in Miami and London."
- Site has Meta Pixel/CAPI implementation plan ready for build.
- Legal pages are planned before ad launch.
- Performance remains fast: no heavy local videos on initial homepage load.
