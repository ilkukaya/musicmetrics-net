import type { MetadataRoute } from "next";
import { artists, charts, countries, insights, tracks } from "@/lib/data";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/charts", "/artists", "/tracks", "/countries", "/insights", "/about", "/contact", "/privacy", "/terms"];

  const dynamicRoutes = [
    ...charts.map((item) => `/charts/${item.slug}`),
    ...artists.map((item) => `/artists/${item.slug}`),
    ...tracks.map((item) => `/tracks/${item.slug}`),
    ...countries.map((item) => `/countries/${item.slug}`),
    ...insights.map((item) => `/insights/${item.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date()
  }));
}
