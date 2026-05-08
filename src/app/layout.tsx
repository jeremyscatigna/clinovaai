import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientEffects } from "@/components/client-effects";
import { MetaPixel } from "@/components/meta-pixel";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clinovaai.co"),
  applicationName: "ClinovaAI",
  title: {
    default: "ClinovaAI | Done-For-You AI Growth Systems for Clinics",
    template: "%s | ClinovaAI",
  },
  description:
    "ClinovaAI builds and manages AI systems for clinic front desk, follow-up, reviews, reactivation, social conversations, ads support, and retention.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/clinova-logo-mark.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icons/favicon-32.png",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: "https://clinovaai.co",
    siteName: "ClinovaAI",
    title: "ClinovaAI | Done-For-You AI Growth Systems for Clinics",
    description:
      "Fully managed AI growth systems for clinics. Built in Miami and London.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClinovaAI | Done-For-You AI Growth Systems for Clinics",
    description:
      "Fully managed AI growth systems for clinics. Built in Miami and London.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080C0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        {children}
        <ClientEffects />
        <MetaPixel />
      </body>
    </html>
  );
}
