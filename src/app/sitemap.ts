import { MetadataRoute } from "next";
import { chineseBlogPages } from "@/lib/chinese-blog-pages";
import { enPages } from "@/lib/en-pages";
import { allChineseGeoPages } from "@/lib/geo-pages";

const baseUrl = "https://www.weclawd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/huodai-ai-assistant`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/zh`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/en`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.45 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/blog/what-is-openclaw`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/openclaw-setup-cost`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/openclaw-mega-cheatsheet-zh`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/llms.txt`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/llms-full.txt`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.5 },
  ];

  const en: MetadataRoute.Sitemap = enPages.map((page) => ({
    url: `${baseUrl}/en/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.42,
  }));

  const zh: MetadataRoute.Sitemap = allChineseGeoPages.map((page) => ({
    url: `${baseUrl}/zh/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.92,
  }));

  const blog: MetadataRoute.Sitemap = chineseBlogPages.map((page) => ({
    url: `${baseUrl}/blog/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.88,
  }));

  return [...core, ...zh, ...blog, ...en];
}
