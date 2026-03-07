import { MetadataRoute } from "next";
import { artists, charts, countries, insights, tracks } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/charts", "/artists", "/tracks", "/countries", "/insights", "/search", "/compare", "/methodology", "/data-sources", "/about", "/contact", "/privacy", "/terms"];
  const dynamicRoutes = [
    ...artists.map((item) => `/artists/${item.slug}`),
    ...tracks.map((item) => `/tracks/${item.slug}`),
    ...charts.map((item) => `/charts/${item.slug}`),
    ...countries.map((item) => `/countries/${item.slug}`),
    ...insights.map((item) => `/insights/${item.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({ url: absoluteUrl(path), lastModified: new Date(), changeFrequency: "weekly", priority: path === "/" ? 1 : 0.7 }));
}
