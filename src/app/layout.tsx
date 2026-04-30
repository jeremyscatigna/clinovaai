import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientEffects } from "@/components/client-effects";

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
    default: "ClinovaAI | The AI Receptionist Built for Aesthetic Clinics",
    template: "%s | ClinovaAI",
  },
  description:
    "ClinovaAI installs done-for-you AI receptionist systems into aesthetic clinics and med spas across the UK.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://clinovaai.co",
    siteName: "ClinovaAI",
    title: "ClinovaAI | Never Miss a Booking Again",
    description:
      "Done-for-you AI receptionist systems for aesthetic clinics, med spas, and cosmetic practices.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClinovaAI | Never Miss a Booking Again",
    description:
      "Done-for-you AI receptionist systems for aesthetic clinics, med spas, and cosmetic practices.",
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
    <html lang="en-GB" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        {children}
        <ClientEffects />
      </body>
    </html>
  );
}
