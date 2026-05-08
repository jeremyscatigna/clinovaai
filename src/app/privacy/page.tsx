import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ClinovaAI privacy policy for website visitors, prospects, and clinic partners.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This page explains what data ClinovaAI may collect through the website, booking flow, advertising tools, and client communications."
      sections={[
        {
          title: "Data we collect",
          body: "We may collect information you submit directly, technical website data, booking details, and advertising attribution data.",
          bullets: ["Name, email, phone, clinic details, and booking information", "Page views, device data, IP address, and browser data", "UTM parameters, fbclid, Meta Pixel activity, and booking-source data"],
        },
        {
          title: "Tools we use",
          body: "The website may use Meta Pixel, Meta Conversions API, GoHighLevel booking widgets, analytics tools, and essential site cookies.",
        },
        {
          title: "How we use data",
          body: "We use data to respond to enquiries, schedule demos, improve marketing performance, measure ad conversions, and operate ClinovaAI services.",
        },
        {
          title: "Your rights",
          body: "Depending on your region, you may request access, correction, deletion, or restriction of your personal data. Contact ClinovaAI to make a request.",
        },
      ]}
    />
  );
}
