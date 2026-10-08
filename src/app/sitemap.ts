import { MetadataRoute } from "next";
import { chineseBlogPages } from "@/lib/chinese-blog-pages";
import { enPages } from "@/lib/en-pages";
import { allChineseGeoPages, allGeoPages, chineseComparePages, SITE_LAST_UPDATE, type GeoPage } from "@/lib/geo-pages";
import { REDIRECT_PATHS } from "@/lib/related-geo";

const baseUrl = "https://www.weclawd.com";

/** Content dates. Not the time the sitemap was requested. */
const CONTENT_DATES = {
  home: "2026-09-28",
  enterprise: "2026-05-30",
  huodaiCase: "2026-05-30",
  freightCase: "2026-06-01",
  huodaiLanding: "2026-05-30",
  about: "2026-05-30",
  legal: "2026-05-19",
  whatIsOpenclaw: "2026-05-30",
  setupCostBlog: "2026-05-30",
  cheatsheet: "2026-05-19",
  enPages: "2026-05-20",
  englishGeo: SITE_LAST_UPDATE,
} as const;

function at(day: string) {
  return new Date(`${day}T00:00:00.000Z`);
}

function pageDate(page: { updatedAt?: string }) {
  return page.updatedAt || SITE_LAST_UPDATE;
}

function maxDay(days: string[]) {
  return days.reduce((latest, day) => (day > latest ? day : latest), SITE_LAST_UPDATE);
}

const chineseCompareSlugs = new Set(chineseComparePages.map((page) => page.slug));

const englishCategories: GeoPage["category"][] = ["solutions", "industries", "integrations", "use-cases"];

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: at(CONTENT_DATES.home), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/enterprise`, lastModified: at(CONTENT_DATES.enterprise), changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/case/huodai-baojia-speed-to-lead`, lastModified: at(CONTENT_DATES.huodaiCase), changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/case/freight-auto-outreach`, lastModified: at(CONTENT_DATES.freightCase), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/huodai-ai-assistant`, lastModified: at(CONTENT_DATES.huodaiLanding), changeFrequency: "weekly", priority: 0.95 },
    {
      url: `${baseUrl}/zh`,
      lastModified: at(maxDay(allChineseGeoPages.map(pageDate))),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    { url: `${baseUrl}/en`, lastModified: at(CONTENT_DATES.enPages), changeFrequency: "monthly", priority: 0.45 },
    { url: `${baseUrl}/about`, lastModified: at(CONTENT_DATES.about), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: at(CONTENT_DATES.legal), changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: at(CONTENT_DATES.legal), changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/blog/what-is-openclaw`, lastModified: at(CONTENT_DATES.whatIsOpenclaw), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/openclaw-setup-cost`, lastModified: at(CONTENT_DATES.setupCostBlog), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/openclaw-mega-cheatsheet-zh`, lastModified: at(CONTENT_DATES.cheatsheet), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: at(CONTENT_DATES.whatIsOpenclaw), changeFrequency: "weekly", priority: 0.7 },
  ];

  const zh: MetadataRoute.Sitemap = allChineseGeoPages.map((page) => ({
    url: `${baseUrl}/zh/${page.slug}`,
    lastModified: at(pageDate(page)),
    changeFrequency: "weekly",
    priority: 0.92,
  }));

  const blog: MetadataRoute.Sitemap = chineseBlogPages.map((page) => ({
    url: `${baseUrl}/blog/${page.slug}`,
    lastModified: at(page.updatedAt),
    changeFrequency: "monthly",
    priority: 0.88,
  }));

  const comparePages = allGeoPages.filter(
    (page) => page.category === "compare" && !REDIRECT_PATHS.has(`/compare/${page.slug}`),
  );
  const compare: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/compare`,
      lastModified: at(maxDay(comparePages.map(pageDate))),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...comparePages.map((page) => ({
      url: `${baseUrl}/compare/${page.slug}`,
      lastModified: at(pageDate(page)),
      changeFrequency: "monthly" as const,
      priority: chineseCompareSlugs.has(page.slug) ? 0.85 : 0.6,
    })),
  ];

  const englishSections: MetadataRoute.Sitemap = englishCategories.flatMap((category) => {
    const pages = allGeoPages.filter(
      (page) => page.category === category && !REDIRECT_PATHS.has(`/${category}/${page.slug}`),
    );
    const updated = maxDay(pages.map(() => CONTENT_DATES.englishGeo));
    return [
      {
        url: `${baseUrl}/${category}`,
        lastModified: at(updated),
        changeFrequency: "monthly" as const,
        priority: 0.55,
      },
      ...pages.map((page) => ({
        url: `${baseUrl}/${category}/${page.slug}`,
        lastModified: at(pageDate(page)),
        changeFrequency: "monthly" as const,
        priority: 0.64,
      })),
    ];
  });

  const en: MetadataRoute.Sitemap = enPages.map((page) => ({
    url: `${baseUrl}/en/${page.slug}`,
    lastModified: at(CONTENT_DATES.enPages),
    changeFrequency: "monthly",
    priority: 0.42,
  }));

  return [...core, ...zh, ...blog, ...compare, ...englishSections, ...en];
}
