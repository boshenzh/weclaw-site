import type { Metadata } from "next";
import type { GeoPage } from "@/lib/geo-pages";
import { untitled } from "@/lib/page-title";
import { alternatesFor, absoluteUrl } from "@/lib/seo";

export function geoDetailMetadata(page: GeoPage, path: string): Metadata {
  const url = absoluteUrl(path);
  const english = !/[\u4e00-\u9fff]/.test(page.h1);
  const title = untitled(page.title);
  return {
    title,
    description: page.description,
    keywords: page.keywords,
    alternates: alternatesFor(path),
    openGraph: {
      type: "website",
      locale: english ? "en_US" : "zh_CN",
      url,
      title,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      site: "@boshenzh",
      creator: "@boshenzh",
      title,
      description: page.description,
    },
  };
}
