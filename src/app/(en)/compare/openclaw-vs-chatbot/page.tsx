import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GeoLandingPage from "@/components/GeoLandingPage";
import { getGeoPage } from "@/lib/geo-pages";
import { geoDetailMetadata } from "@/lib/geo-metadata";

const slug = "openclaw-vs-chatbot";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const page = getGeoPage("compare", slug);
  if (!page) return {};
  return geoDetailMetadata(page, `/compare/${slug}`);
}

export default function Page() {
  const page = getGeoPage("compare", slug);
  if (!page) notFound();
  return <GeoLandingPage page={page} />;
}
