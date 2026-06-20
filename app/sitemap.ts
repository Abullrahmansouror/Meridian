import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

const base = "https://meridianbuildgroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = ["", "/about", "/services", "/projects", "/process", "/careers", "/contact"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })
  );

  const projectPages = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...projectPages];
}
