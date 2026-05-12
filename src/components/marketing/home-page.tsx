import Link from "next/link";
import { adCreatives, faqItems, servicePages } from "@/lib/site";
import { BookingCta } from "./booking-cta";
import { RevenueCalculator } from "./calculator";
import { MarketingFooter } from "./footer";
import { MarketingNav } from "./nav";
import { MarketingStyles } from "./marketing-styles";

const leakCards = [
  {
    title: "Missed Calls",
    copy: "A ready-to-book patient calls while your team is busy. No answer. No voicemail. They call the next clinic.",
  },
  {
    title: "Slow Follow-Up",
    copy: "A lead asks a question, then waits hours for a reply. By the time your team responds, the urgency is gone.",
  },
  {
    title: "Ignored Social DMs",
    copy: "Instagram and Facebook enquiries sit unread while faster competitors turn the conversation into a booking.",
  },
  {
    title: "Dormant Clients",
    copy: "Your database is full of past clients who would return if someone followed up at the right time.",
  },
  {
    title: "Reviews Left To Chance",
    copy: "Happy clients leave quietly. Unhappy clients leave publicly. Without a review system, reputation becomes random.",
  },
  {
    title: "No-Shows And Drop-Offs",
    copy: "A booking is not revenue until the patient arrives. Without reminders and recovery flows, gaps appear in the calendar.",
  },
];

const pricingTiers = [
  {
    tier: "Tier 1 - Entry / ROI Focused",
    name: "Growth Desk",
    amount: "Discussed",
    period: "on call",
    setup: "Stop the bleed with missed enquiry recovery and basic follow-up.",
    features: [
      "Missed-call text-back automation",
      "Basic AI response system",
      "SMS follow-up to reduce no-shows and handle reschedules",
      "Review request automation",
      "Booking support workflows",
      "Basic reporting",
    ],
    note: "For clinics losing revenue from missed calls and inconsistent follow-up.",
    cta: "Discuss Growth Desk",
  },
  {
    tier: "Tier 2 - Core Revenue Driver",
    name: "Revenue Desk",
    amount: "Scoped",
    period: "to fit",
    setup: "Build the engine across calls, follow-up, reviews, reactivation, and reporting.",
    features: [
      "Everything in Growth Desk",
      "AI call handling and appointment booking",
      "Multi-step SMS and email follow-up",
      "Lead capture and qualification",
      "CRM and calendar integration",
      "AI Reputation Engine",
      "AI Reactivation System",
      "Advanced reporting dashboard",
    ],
    note: "For clinics ready to recover missed opportunities and create a consistent booking engine.",
    cta: "Discuss Revenue Desk",
    featured: true,
  },
  {
    tier: "Tier 3 - Premium / Authority Play",
    name: "Clinic Dominance System",
    amount: "Custom",
    period: "quote",
    setup: "Own your market with a complete managed front-end growth operation.",
    features: [
      "Everything in Revenue Desk",
      "AI Social Media Engine",
      "AI Ad Management support",
      "AI Client Retention system",
      "Website conversion system with AI chatbot",
      "Multi-location support",
      "Custom integrations",
      "Priority support and ongoing optimisation",
    ],
    note: "For clinics that want the entire front-end growth operation managed for them.",
    cta: "Discuss Clinic Dominance",
  },
];

export function HomePage() {
  return (
    <>
      <MarketingStyles />
      <MarketingNav />

      <section className="hero" id="hero">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-inner">
          <div className="eyebrow reveal">Done-For-You AI Growth Systems For Clinics</div>
          <h1 className="hero-title reveal reveal-delay-1">
            Your clinic is losing<br />
            <em>$10,000 to $30,000 every month.</em>
            <br />
            We stop that.
          </h1>
          <p className="hero-sub reveal reveal-delay-2">
            ClinovaAI builds and manages the AI systems that run your clinic&apos;s front desk, follow-up,
            reviews, reactivation, social conversations, ads support, and retention. No software to learn. No
            extra staff to hire. We install it, operate it, and optimise it for you.
          </p>
          <div className="btn-row reveal reveal-delay-3">
            <Link className="btn-primary" href="/calculator" data-track-event="ViewContent" data-track-content="hero_calculator">
              See What You&apos;re Losing
            </Link>
            <BookingCta className="btn-outline" source="hero">
              Book a 15-Min Demo
            </BookingCta>
          </div>
          <div className="hero-proof reveal reveal-delay-4">
            <div className="hero-proof-item">
              <div className="hero-proof-num">
                <span>24/7</span>
              </div>
              <div className="hero-proof-label">
                response coverage
                <br />
                across priority channels
              </div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-num">
                60<span>s</span>
              </div>
              <div className="hero-proof-label">
                target response time
                <br />
                for new enquiries
              </div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-num">
                <span>$10k</span>
              </div>
              <div className="hero-proof-label">
                to $30k monthly
                <br />
                leakage stopped
              </div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-num">
                30<span>days</span>
              </div>
              <div className="hero-proof-label">
                measurable results
                <br />
                or we work free
              </div>
            </div>
          </div>
          <p className="final-cta-note reveal reveal-delay-4">
            Built in Miami and London · 30-day results guarantee · No software to learn · Fully managed for clinics
          </p>
        </div>
      </section>

      <div className="ticker-strip">
        <div className="ticker-inner">
          {[
            "AI Front Desk",
            "Missed Call Recovery",
            "Instagram DM Booking",
            "Google Review Automation",
            "Dormant Client Reactivation",
            "No-Show Reduction",
            "AI Follow-Up Sequences",
            "Website AI Chatbot",
            "Meta Ads Support",
            "30-Day Results Guarantee",
            "Built in Miami and London",
            "Done For You, Not DIY Software",
          ].map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="calculator" id="calculator">
        <div className="container">
          <div className="calculator-grid">
            <div className="calculator-copy">
              <div className="eyebrow reveal">Revenue Leakage Calculator</div>
              <h2 className="reveal reveal-delay-1">Find out how much your clinic is losing right now.</h2>
              <p className="reveal reveal-delay-2">
                Enter two numbers. Get a realistic monthly leakage estimate in seconds. This only measures
                missed inbound demand. The real number gets bigger when you include dormant clients, reviews,
                no-shows, social DMs, and slow follow-up.
              </p>
            </div>
            <RevenueCalculator />
          </div>
        </div>
      </section>

      <section className="problem" id="problem">
        <div className="container">
          <div className="solution-header">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
              The Real Problem
            </div>
            <h2 className="reveal reveal-delay-1">
              Your clinic is leaking revenue from more than one place.
            </h2>
            <p className="reveal reveal-delay-2">
              Missed calls are the obvious leak. But enquiries also arrive through your website, Instagram,
              Facebook, email, WhatsApp, and old client lists. If no one operates those channels every day,
              revenue disappears before it reaches your calendar.
            </p>
          </div>
          <div className="leak-grid">
            {leakCards.map((card, index) => (
              <div className={`leak-card reveal reveal-delay-${Math.min(index, 4)}`} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            ))}
          </div>
          <div className="pricing-guarantee reveal pricing-tailored">
            <strong>The math is brutal.</strong>
            Demand is not missing. The front-end growth operation is not being run consistently. That is what
            ClinovaAI takes over.
          </div>
        </div>
      </section>

      <section className="solution" id="services">
        <div className="container">
          <div className="solution-header">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
              The Clinova Growth System
            </div>
            <h2 className="reveal reveal-delay-1">
              Six AI systems. One managed growth operation. Zero software for you to run.
            </h2>
            <p className="reveal reveal-delay-2">
              ClinovaAI is not a dashboard you log into. It is a done-for-you agency service powered by AI. We
              build the workflows, connect the systems, monitor performance, and keep improving the engine every
              month.
            </p>
          </div>
          <div className="services-grid">
            {servicePages.slice(0, 6).map((service, index) => (
              <div className={`service-card reveal reveal-delay-${Math.min(index, 4)}`} key={service.slug}>
                <div className="service-number">{String(index + 1).padStart(2, "0")} - Managed System</div>
                <h3>{service.navTitle}</h3>
                <p>{service.description}</p>
                <Link className="footer-link" href={`/services/${service.slug}`}>
                  Learn more
                </Link>
              </div>
            ))}
          </div>
          <div className="infrastructure-grid" style={{ marginTop: 22 }}>
            <div className="infrastructure-card reveal">
              <h3>Website + AI Chatbot</h3>
              <p>
                If your website is part of the leak, we can rebuild it into a conversion-focused booking asset
                with AI chat, clearer service journeys, and a smoother path from visitor to consultation.
              </p>
            </div>
            <div className="infrastructure-card reveal reveal-delay-1">
              <h3>Unified Reporting</h3>
              <p>
                Calls captured, bookings made, reviews collected, dormant clients reactivated, ad follow-up, and
                retention activity in one performance view.
              </p>
            </div>
            <div className="infrastructure-card reveal reveal-delay-2">
              <h3>Human Monitoring</h3>
              <p>
                AI runs the workflows. Humans monitor the outcomes, review conversations, and keep the system
                improving after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="container">
          <div className="how-header">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
              Three Steps, Fully Managed
            </div>
            <h2 className="reveal reveal-delay-1">Sophisticated under the hood. Simple for your clinic.</h2>
            <p className="reveal reveal-delay-2">
              We handle the build, integrations, monitoring, optimisation, and reporting. Your team keeps doing
              what already works.
            </p>
          </div>
          <div className="steps-grid">
            {[
              ["We map your clinic.", "In one onboarding call, we learn your treatments, tone, booking process, lead sources, calendar setup, and current bottlenecks. Then we define the first measurable targets."],
              ["We build and connect the system.", "We connect the workflows around your current tools wherever possible: phone, calendar, website, CRM, SMS, email, and social channels. Your team does not need to learn new software."],
              ["We run, monitor, and optimise it.", "Once live, we watch performance, improve the automations, review conversations, adjust follow-ups, and report on captured bookings, recovered revenue, response speed, reviews, and retention."],
            ].map(([title, copy], index) => (
              <div className={`step-card reveal reveal-delay-${index}`} key={title}>
                <div className="step-num">{String(index + 1).padStart(2, "0")}</div>
                <div className="step-label">Step {index + 1}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container">
          <div className="trust-grid">
            {[
              ["24/7", "Always on. No holidays. No sick days."],
              ["60s", "Target response speed across priority channels."],
              ["3.2×", "Booking conversion uplift target from faster follow-up."],
              ["30days", "Measurable results, or we keep working free."],
            ].map(([value, label], index) => (
              <div className={`trust-card reveal reveal-delay-${index}`} key={value}>
                <div className="trust-value">{value}</div>
                <div className="trust-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="pricing" id="pricing">
        <div className="container">
          <div className="pricing-header">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
              System Tiers
            </div>
            <h2 className="reveal reveal-delay-1">
              Pick the level of growth operation your clinic needs.
            </h2>
            <p className="reveal reveal-delay-2">
              Pricing depends on your clinic, call volume, locations, current systems, and the level of support
              you need. On the demo call, we map the right system and give you a clear quote.
            </p>
          </div>
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <div className={`pricing-card reveal reveal-delay-${index} ${tier.featured ? "featured" : ""}`} key={tier.name}>
                {tier.featured ? <div className="pricing-badge">Most Popular</div> : null}
                <div className="pricing-tier">{tier.tier}</div>
                <div className="pricing-name">{tier.name}</div>
                <div className="pricing-price">
                  <div className="pricing-amount">{tier.amount}</div>
                  <div className="pricing-period"> {tier.period}</div>
                </div>
                <div className="pricing-setup">{tier.setup}</div>
                <hr className="pricing-divider" />
                <ul className="pricing-features">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="pricing-card-note">{tier.note}</p>
                <BookingCta className={`pricing-cta ${tier.featured ? "featured-cta" : ""}`} source={`pricing_${tier.name}`}>
                  {tier.cta}
                </BookingCta>
              </div>
            ))}
          </div>
          <div className="pricing-guarantee reveal pricing-tailored">
            <strong>Tailored to your clinic.</strong>
            We work within clear tiers, then configure the system around your clinic&apos;s workflow, treatment
            menu, patient volume, locations, and existing tools. No rigid one-size-fits-all package. No public
            price anchoring before we understand the business.
          </div>
        </div>
      </section>

      <section className="case-study" id="results">
        <div className="container-wide">
          <div className="case-study-inner creative-gallery-shell">
            <div className="creative-gallery-header">
              <div className="case-eyebrow reveal">Ad Creative Library</div>
              <h2 className="reveal reveal-delay-1">
                <em>The campaign</em>
                <br />
                in motion.
              </h2>
              <p className="reveal reveal-delay-2">
                A mobile-first gallery of ClinovaAI launch creatives, built for Meta ads, Reels, and the way
                clinic owners actually stop scrolling.
              </p>
            </div>

            <div className="media-masonry reveal reveal-delay-2">
                {adCreatives.map((creative, index) => (
                  <div className="media-card" key={creative.src}>
                    <div className="media-video-frame">
                      <video
                        src={creative.src}
                        controls
                        muted
                        playsInline
                        preload="none"
                        aria-label={`ClinovaAI ad creative: ${creative.title}`}
                      />
                    </div>
                    <div className="media-card-caption">
                      <h3>{creative.title}</h3>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                ))}
            </div>

            <div className="creative-gallery-cta reveal reveal-delay-3">
              <BookingCta className="btn-primary" source="creative_gallery">
                Book Your 15-Min Demo
              </BookingCta>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee" id="guarantee">
        <div className="container">
          <div className="guarantee-inner">
            <div className="guarantee-badge reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/30dayguarantee.png" alt="30-day results guarantee" width="320" height="320" />
            </div>
            <div className="guarantee-copy">
              <div className="eyebrow reveal">The 30-Day Guarantee</div>
              <h2 className="reveal reveal-delay-1">
                30 days. Measurable improvement.
                <br />
                <em>Or we keep working free until you see it.</em>
              </h2>
              <p className="reveal reveal-delay-2">
                Every ClinovaAI engagement starts with clear targets: captured bookings, response speed, recovered
                enquiries, review velocity, no-show reduction, or reactivation revenue. If we do not create
                measurable improvement within 30 days, we keep working at no charge until we do.
              </p>
              <p className="reveal reveal-delay-3">
                No vague promises. No software excuses. We are accountable to outcomes, not effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="container">
          <div className="faq-header">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
              FAQ
            </div>
            <h2 className="reveal reveal-delay-1">Questions clinics ask before we build.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div className={`faq-item reveal reveal-delay-${Math.min(index, 4)}`} data-faq key={item.question}>
                <div className="faq-q">
                  {item.question}
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">
                  <div className="faq-a-inner">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" id="final-cta">
        <div className="container">
          <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
            Get Started
          </div>
          <h2 className="reveal reveal-delay-1">
            Your clinic never
            <br />
            <em>has to miss demand again.</em>
          </h2>
          <p className="reveal reveal-delay-2">
            Book a 15-minute demo. We will calculate your current revenue leakage, show you what we would build
            for your clinic, and explain what measurable improvement should look like in the first 30 days.
          </p>
          <div className="btn-row reveal reveal-delay-3">
            <BookingCta className="btn-primary" source="final_cta" style={{ fontSize: 13, padding: "18px 40px" }}>
              Book Your 15-Min Demo
            </BookingCta>
          </div>
          <p className="final-cta-note reveal reveal-delay-4">
            No commitment · 15 minutes · Built in Miami and London · 30-day results guarantee
          </p>
        </div>
      </section>

      <MarketingFooter />
    </>
  );
}
