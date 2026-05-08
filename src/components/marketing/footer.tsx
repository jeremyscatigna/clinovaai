import Link from "next/link";
import { servicePages } from "@/lib/site";

export function MarketingFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo-mark" src="/brand/clinova-logo-mark.png" alt="ClinovaAI" width="62" height="62" />
            <p>
              The done-for-you AI growth system for clinics. We run your front desk, follow-up, reviews,
              reactivation, social conversations, ads support, and retention systems, fully managed by AI and
              monitored by humans.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              {servicePages.map((service) => (
                <Link className="footer-link" href={`/services/${service.slug}`} key={service.slug}>
                  {service.navTitle}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <Link className="footer-link" href="/about">
                About
              </Link>
              <Link className="footer-link" href="/#results">
                Results
              </Link>
              <Link className="footer-link" href="/#pricing">
                Pricing
              </Link>
              <Link className="footer-link" href="/calculator">
                Calculator
              </Link>
              <Link className="footer-link" href="/founding-cohort">
                Founding Cohort
              </Link>
              <Link className="footer-link" href="/book-demo">
                Book Demo
              </Link>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Legal</div>
            <div className="footer-links">
              <Link className="footer-link" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="footer-link" href="/terms">
                Terms of Service
              </Link>
              <Link className="footer-link" href="/cookies">
                Cookie Policy
              </Link>
              <Link className="footer-link" href="/dpa">
                Data Processing Agreement
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">Built in Miami and London · Serving clinics globally · © 2026 ClinovaAI</div>
          <div className="footer-tagline">Never Miss a Booking Again</div>
        </div>
      </div>
    </footer>
  );
}
