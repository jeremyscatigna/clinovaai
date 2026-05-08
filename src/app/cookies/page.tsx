import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "ClinovaAI cookie policy for essential, analytics, and advertising cookies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookie Policy"
      intro="This page explains the categories of cookies and similar technologies that may be used on the ClinovaAI website."
      sections={[
        {
          title: "Essential cookies",
          body: "These support site functionality, routing, security, booking-page operation, and attribution persistence.",
        },
        {
          title: "Analytics cookies",
          body: "These help us understand page performance, traffic sources, and how visitors move through the site.",
        },
        {
          title: "Advertising cookies",
          body: "Meta Pixel, Conversions API, and related identifiers may help measure ad performance and improve campaign relevance.",
        },
        {
          title: "Opting out",
          body: "You can restrict cookies in your browser settings. Some booking, attribution, or analytics features may work less accurately if cookies are disabled.",
        },
      ]}
    />
  );
}
