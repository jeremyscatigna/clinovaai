import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description: "ClinovaAI data processing overview for clinic partners.",
  alternates: { canonical: "/dpa" },
};

export default function DpaPage() {
  return (
    <LegalPage
      eyebrow="Data Processing"
      title="Data Processing Agreement"
      intro="This page outlines the data-processing principles ClinovaAI expects to follow when working with clinic partners. A final DPA should be attached to signed client agreements where required."
      sections={[
        {
          title: "Processing purpose",
          body: "ClinovaAI processes data to operate clinic growth workflows, booking support, follow-up, reporting, automation, and agreed support services.",
        },
        {
          title: "Clinic instructions",
          body: "Client data should be processed according to the clinic's documented instructions and the agreed service scope.",
        },
        {
          title: "Security",
          body: "Implementation should use access controls, auditability, vendor review, and reasonable technical safeguards appropriate to the workflow.",
        },
        {
          title: "Subprocessors",
          body: "Relevant subprocessors may include booking, messaging, CRM, analytics, hosting, and AI infrastructure providers. Specific vendors should be documented per client agreement.",
        },
      ]}
    />
  );
}
