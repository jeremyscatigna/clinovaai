import type { Metadata } from "next";
import { BookingCta } from "@/components/marketing/booking-cta";
import { MarketingFooter } from "@/components/marketing/footer";
import { MarketingNav } from "@/components/marketing/nav";
import { MarketingStyles } from "@/components/marketing/marketing-styles";

export const metadata: Metadata = {
  title: "Founding Clinic Cohort",
  description:
    "Apply for the ClinovaAI founding clinic cohort for priority onboarding and direct access to the founding team.",
  alternates: { canonical: "/founding-cohort" },
};

export default function FoundingCohortPage() {
  return (
    <>
      <MarketingStyles />
      <MarketingNav />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="eyebrow reveal">Founding Clinic Cohort</div>
            <h1 className="reveal reveal-delay-1">Apply for priority ClinovaAI onboarding.</h1>
            <p className="reveal reveal-delay-2">
              We are selecting a small group of clinics for priority onboarding, direct access to the founding
              team, and early partner terms while the platform expands from Miami and London.
            </p>
            <div className="btn-row reveal reveal-delay-3">
              <BookingCta source="founding_cohort">Apply For The Cohort</BookingCta>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="service-detail-grid">
              {[
                ["Priority onboarding", "Your clinic moves first in the implementation queue with a sharper launch timeline."],
                ["Founder access", "You work directly with the team building the workflows, reporting, and optimisation process."],
                ["Case-study upside", "If the fit is right, we document the rollout and turn the outcome into usable proof for both sides."],
              ].map(([title, copy]) => (
                <div className="leak-card reveal" key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
