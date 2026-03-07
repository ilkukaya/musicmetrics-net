import { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function buildMetadata(title: string, description: string, path = "/"): Metadata {
  const url = `${siteConfig.domain}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} social preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage]
    }
  };
}
