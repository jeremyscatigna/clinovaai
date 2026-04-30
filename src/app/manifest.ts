import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ClinovaAI",
    short_name: "ClinovaAI",
    description: "The AI receptionist built for aesthetic clinics.",
    start_url: "/",
    display: "standalone",
    background_color: "#080C0B",
    theme_color: "#0C9E8F",
  };
}
