import type { Metadata } from "next";
import { BookingCta } from "@/components/marketing/booking-cta";
import { RevenueCalculator } from "@/components/marketing/calculator";
import { MarketingFooter } from "@/components/marketing/footer";
import { MarketingNav } from "@/components/marketing/nav";
import { MarketingStyles } from "@/components/marketing/marketing-styles";

export const metadata: Metadata = {
  title: "Clinic Revenue Leakage Calculator",
  description:
    "Calculate how much revenue your clinic may be losing from missed calls, slow follow-up, no-shows, and unconverted enquiries.",
  alternates: { canonical: "/calculator" },
};

export default function CalculatorPage() {
  return (
    <>
      <MarketingStyles />
      <MarketingNav />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="eyebrow reveal">Clinic Revenue Leakage Calculator</div>
            <h1 className="reveal reveal-delay-1">See the number hiding inside missed demand.</h1>
            <p className="reveal reveal-delay-2">
              Use this calculator to estimate the monthly revenue that can leak through unanswered calls, slow
              follow-up, and high-intent enquiries that never make it into your calendar.
            </p>
          </div>
        </section>

        <section className="calculator">
          <div className="container">
            <div className="calculator-grid">
              <div className="calculator-copy">
                <div className="eyebrow reveal">Two Inputs</div>
                <h2 className="reveal reveal-delay-1">Enter your missed enquiries and treatment value.</h2>
                <p className="reveal reveal-delay-2">
                  This is a conservative inbound-demand estimate. It does not include dormant client
                  reactivation, review lift, no-show recovery, social DM conversion, or retention.
                </p>
              </div>
              <RevenueCalculator compact />
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="solution-header">
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
                What The Estimate Misses
              </div>
              <h2 className="reveal reveal-delay-1">The calculator only measures the first leak.</h2>
              <p className="reveal reveal-delay-2">
                ClinovaAI also targets dormant clients, social conversations, reviews, no-shows, and follow-up
                gaps. The true opportunity is usually larger than the missed-call number.
              </p>
              <div className="btn-row reveal reveal-delay-3" style={{ justifyContent: "center" }}>
                <BookingCta source="calculator_page">Book Your 15-Min Demo</BookingCta>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
