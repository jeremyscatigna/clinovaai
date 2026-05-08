import Link from "next/link";
import { bookingPagePath } from "@/lib/site";

type BookingCtaProps = {
  children: React.ReactNode;
  className?: string;
  source?: string;
  style?: React.CSSProperties;
};

export function BookingCta({ children, className = "btn-primary", source, style }: BookingCtaProps) {
  const href = source ? `${bookingPagePath}?source=${encodeURIComponent(source)}` : bookingPagePath;

  return (
    <Link
      className={className}
      href={href}
      style={style}
      data-track-event="Lead"
      data-track-content={source ?? "booking_cta"}
    >
      {children}
    </Link>
  );
}
