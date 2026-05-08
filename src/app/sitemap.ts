import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-08");

  return [
    {
      url: "https://clinovaai.co",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://clinovaai.co/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://clinovaai.co/calculator",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://clinovaai.co/book-demo",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://clinovaai.co/founding-cohort",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...servicePages.map((service) => ({
      url: `https://clinovaai.co/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...["privacy", "terms", "cookies", "dpa"].map((slug) => ({
      url: `https://clinovaai.co/${slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.35,
    })),
  ];
}
