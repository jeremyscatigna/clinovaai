import type { Metadata } from "next";
import { BookingEmbed } from "@/components/marketing/booking-embed";
import { MarketingFooter } from "@/components/marketing/footer";
import { MarketingNav } from "@/components/marketing/nav";
import { MarketingStyles } from "@/components/marketing/marketing-styles";

export const metadata: Metadata = {
  title: "Book Your ClinovaAI Demo",
  description:
    "Book a 15-minute ClinovaAI demo. We calculate your clinic's leakage, map your growth system, and show the next step.",
  alternates: { canonical: "/book-demo" },
};

export default function BookDemoPage() {
  return (
    <>
      <MarketingStyles />
      <MarketingNav />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="eyebrow reveal">Book Your Demo</div>
            <h1 className="reveal reveal-delay-1">Book your 15-minute ClinovaAI demo.</h1>
            <p className="reveal reveal-delay-2">
              We will calculate your current revenue leakage, map what we would build for your clinic, and give
              you a clear picture of what measurable improvement should look like in the first 30 days.
            </p>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="calculator-grid">
              <div>
                <div className="eyebrow reveal">What Happens On The Call</div>
                <div className="leak-grid" style={{ gridTemplateColumns: "1fr", marginTop: 26 }}>
                  {[
                    ["We calculate leakage", "We estimate where revenue is disappearing across calls, messages, follow-up, reviews, and retention."],
                    ["We map your system", "We show which workflows your clinic needs first and which tools we can connect around."],
                    ["You get a clear next step", "You leave with the right tier, expected rollout, and what measurable improvement should look like."],
                  ].map(([title, copy]) => (
                    <div className="leak-card reveal" key={title}>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
              <BookingEmbed />
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
