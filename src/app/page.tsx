import type { Metadata } from "next";
import { RawPage } from "@/components/raw-page";
import { landingPage } from "@/generated/pages";

export const metadata: Metadata = {
  title: "The AI Receptionist Built for Aesthetic Clinics",
  description:
    "ClinovaAI installs done-for-you AI receptionist systems into aesthetic clinics and med spas. Stop losing bookings to missed calls.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ClinovaAI | The AI Receptionist Built for Aesthetic Clinics",
    description:
      "Stop losing bookings to missed calls. ClinovaAI builds, installs, and manages AI receptionist systems for aesthetic clinics.",
    url: "/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ClinovaAI",
  url: "https://clinovaai.co",
  areaServed: "Worldwide",
  serviceType: "AI receptionist systems for aesthetic clinics",
  description:
    "Done-for-you AI receptionist systems for aesthetic clinics, med spas, and cosmetic practices.",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <RawPage css={landingPage.css} body={landingPage.body} />
    </>
  );
}
