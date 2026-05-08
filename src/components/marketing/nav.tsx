import Link from "next/link";
import { BookingCta } from "./booking-cta";

export function MarketingNav() {
  return (
    <nav className="nav" id="nav">
      <Link className="nav-logo" href="/" aria-label="ClinovaAI home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brand-logo-mark" src="/brand/clinova-logo-mark.png" alt="ClinovaAI" width="58" height="58" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" href="/#services">
          Services
        </Link>
        <Link className="nav-link" href="/calculator">
          Calculator
        </Link>
        <Link className="nav-link" href="/#pricing">
          Pricing
        </Link>
        <Link className="nav-link" href="/about">
          About
        </Link>
        <Link className="nav-link" href="/#faq">
          FAQ
        </Link>
        <BookingCta className="nav-cta" source="nav">
          Book Demo
        </BookingCta>
      </div>
    </nav>
  );
}
