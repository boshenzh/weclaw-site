import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GeoLandingPage from "@/components/GeoLandingPage";
import { allChineseGeoPages } from "@/lib/geo-pages";

const siteUrl = "https://www.weclawd.com";

export function generateStaticParams() {
  return allChineseGeoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = allChineseGeoPages.find((item) => item.slug === slug);
  if (!page) return {};
  const url = `${siteUrl}/zh/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url, languages: { "zh-CN": url } },
    openGraph: {
      type: "website",
      locale: "zh_CN",
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

export default async function ChinesePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = allChineseGeoPages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <GeoLandingPage page={page} basePath={`/zh/${page.slug}`} />;
}
