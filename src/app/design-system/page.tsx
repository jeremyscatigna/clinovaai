import type { Metadata } from "next";
import { RawPage } from "@/components/raw-page";
import { brandKitPage } from "@/generated/pages";

export const metadata: Metadata = {
  title: "Design System",
  description: "ClinovaAI internal brand kit and design system.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystem() {
  return <RawPage css={brandKitPage.css} body={brandKitPage.body} />;
}
