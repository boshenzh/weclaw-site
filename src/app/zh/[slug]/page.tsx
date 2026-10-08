import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GeoLandingPage from "@/components/GeoLandingPage";
import { allChineseGeoPages } from "@/lib/geo-pages";
import { geoDetailMetadata } from "@/lib/geo-metadata";

export function generateStaticParams() {
  return allChineseGeoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = allChineseGeoPages.find((item) => item.slug === slug);
  if (!page) return {};
  return geoDetailMetadata(page, `/zh/${page.slug}`);
}

export default async function ChinesePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = allChineseGeoPages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <GeoLandingPage page={page} basePath={`/zh/${page.slug}`} />;
}
