import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://clinovaai.co",
      lastModified: new Date("2026-04-30"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://clinovaai.co/about",
      lastModified: new Date("2026-04-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
