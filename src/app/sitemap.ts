import { MetadataRoute } from "next";
import { allChineseGeoPages, allGeoPages } from "@/lib/geo-pages";

const baseUrl = "https://www.weclawd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/freight-ai-assistant`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/huodai-ai-assistant`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/solutions`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/industries`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/integrations`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/use-cases`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/compare`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/zh`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/#pricing`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/#how-it-works`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/#faq`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/what-is-openclaw`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/openclaw-setup-cost`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/openclaw-mega-cheatsheet-zh`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/llms.txt`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/llms-full.txt`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.5 },
  ];

  const geo: MetadataRoute.Sitemap = allGeoPages.map((page) => ({
    url: `${baseUrl}/${page.category}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: page.category === "solutions" ? 0.9 : 0.8,
  }));

  const zh: MetadataRoute.Sitemap = allChineseGeoPages.map((page) => ({
    url: `${baseUrl}/zh/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.92,
  }));

  return [...core, ...geo, ...zh];
}
