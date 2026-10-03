import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return [];
  return ["/", "/privacy", "/terms"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() }));
}
