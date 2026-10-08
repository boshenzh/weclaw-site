import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GeoLandingPage from "@/components/GeoLandingPage";
import { allGeoPages, getGeoPage, type GeoPage } from "@/lib/geo-pages";
import { geoDetailMetadata } from "@/lib/geo-metadata";

const category = "solutions" as GeoPage["category"];

export function generateStaticParams() {
  return allGeoPages.filter((page) => page.category === category).map((page) => ({ slug: page.slug }));
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
