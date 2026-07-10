import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

const ROUTES = ["/", "/solutions", "/features", "/pricing", "/about", "/resources", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
