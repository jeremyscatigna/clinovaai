import type { Metadata } from "next";
import Link from "next/link";
import { MarketingFooter } from "@/components/marketing/footer";
import { MarketingNav } from "@/components/marketing/nav";
import { MarketingStyles } from "@/components/marketing/marketing-styles";
import { ScheduleTracker } from "@/components/marketing/schedule-tracker";

export const metadata: Metadata = {
  title: "Demo Booked",
  description: "Your ClinovaAI demo is booked.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <ScheduleTracker />
      <MarketingStyles />
      <MarketingNav />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="eyebrow reveal">Demo Booked</div>
            <h1 className="reveal reveal-delay-1">Your demo is booked.</h1>
            <p className="reveal reveal-delay-2">
              Check your email for the calendar invite. Before the call, we will review your clinic&apos;s current
              leakage points so the demo is specific to your business.
            </p>
            <div className="btn-row reveal reveal-delay-3">
              <Link className="btn-primary" href="/">
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
