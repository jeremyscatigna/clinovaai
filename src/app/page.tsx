import type { Metadata } from "next";
import { HomePage } from "@/components/marketing/home-page";

export const metadata: Metadata = {
  title: "Done-For-You AI Growth Systems for Clinics",
  description:
    "ClinovaAI builds and manages AI systems for clinic front desk, follow-up, reviews, reactivation, social conversations, ads support, and retention.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ClinovaAI | Done-For-You AI Growth Systems for Clinics",
    description:
      "Stop losing clinic revenue to missed enquiries, slow follow-up, dormant clients, weak reviews, and no-shows.",
    url: "/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ClinovaAI",
  url: "https://clinovaai.co",
  areaServed: "Worldwide",
  serviceType: "Done-for-you AI growth systems for clinics",
  description:
    "Done-for-you AI systems for clinic front desk, follow-up, reviews, reactivation, social conversations, ads support, and retention.",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <HomePage />
    </>
  );
}
