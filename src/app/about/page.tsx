import type { Metadata } from "next";
import { RawPage } from "@/components/raw-page";
import { aboutPage } from "@/generated/pages";

export const metadata: Metadata = {
  title: "About ClinovaAI",
  description:
    "ClinovaAI was built by a Stanford-trained AI engineer with 12 years of software experience at companies like Zendesk.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About ClinovaAI | Built by an AI Engineer",
    description:
      "A decade of AI engineering expertise, installed into your clinic as a done-for-you receptionist system.",
    url: "/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About ClinovaAI",
  url: "https://clinovaai.co/about",
  isPartOf: {
    "@type": "WebSite",
    name: "ClinovaAI",
    url: "https://clinovaai.co",
  },
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <RawPage css={aboutPage.css} body={aboutPage.body} />
    </>
  );
}
