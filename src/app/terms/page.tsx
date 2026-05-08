import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ClinovaAI website and service terms.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      intro="These terms provide a practical starting point for using the ClinovaAI website and booking a demo. They should be reviewed before large-scale paid traffic."
      sections={[
        {
          title: "Website use",
          body: "The website content is provided for general business information and does not create a client relationship until a separate agreement is signed.",
        },
        {
          title: "Service proposals",
          body: "Any implementation scope, guarantee, pricing, timelines, and deliverables are confirmed in writing after a clinic assessment.",
        },
        {
          title: "No guaranteed revenue claim",
          body: "ClinovaAI guarantees measurable improvement as defined in the client agreement. Public estimates and calculator outputs are directional and based on user-provided inputs.",
        },
        {
          title: "Intellectual property",
          body: "ClinovaAI branding, website content, design assets, and service materials remain the property of ClinovaAI unless otherwise agreed in writing.",
        },
      ]}
    />
  );
}
