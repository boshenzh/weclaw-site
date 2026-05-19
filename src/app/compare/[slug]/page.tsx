import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GeoLandingPage from "@/components/GeoLandingPage";
import { allGeoPages, getGeoPage, type GeoPage } from "@/lib/geo-pages";

const category = "compare" as GeoPage["category"];
const siteUrl = "https://www.weclawd.com";

export function generateStaticParams() {
  return allGeoPages.filter((page) => page.category === category).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getGeoPage(category, slug);
  if (!page) return {};
  const url = `${siteUrl}/${category}/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: page.title,
      description: page.description,
      images: [{ url: "/logos/weclaw-logo.png", width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/logos/weclaw-logo.png"],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getGeoPage(category, slug);
  if (!page) notFound();
  return <GeoLandingPage page={page} />;
}
