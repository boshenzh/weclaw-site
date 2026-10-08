import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GeoLandingPage from "@/components/GeoLandingPage";
import { allGeoPages, getGeoPage, type GeoPage } from "@/lib/geo-pages";
import { geoDetailMetadata } from "@/lib/geo-metadata";
import { englishCompareSlugSet } from "@/lib/english-compare";

const category = "compare" as GeoPage["category"];

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return allGeoPages
    .filter((page) => page.category === category && !englishCompareSlugSet.has(page.slug))
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getGeoPage(category, slug);
  if (!page) return {};
  return geoDetailMetadata(page, `/${category}/${page.slug}`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getGeoPage(category, slug);
  if (!page) notFound();
  return <GeoLandingPage page={page} />;
}
