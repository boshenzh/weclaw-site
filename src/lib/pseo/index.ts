/**
 * Programmatic SEO content modules.
 *
 * Add a page by appending a GeoPage wrapped in `withPseoShell`:
 * - `/compare/[slug]` → `compare-pages.ts` (`pseoComparePages`)
 * - `/zh/[slug]` cross-border → `industry-pages.ts`
 * - `/zh/[slug]` category and selection → `howto-pages.ts`
 * - `/zh/[slug]` WeCom / Feishu / DingTalk → `platform-pages.ts`
 * - `/zh/[slug]` Shenzhen on-site or remote → `location-pages.ts`
 * - later batches are spread from `batch3-pages.ts`, `batch4-pages.ts`, and `batch5-pages.ts`
 *
 * Do not add a new page.tsx. `pseoChinesePages` and `pseoComparePages` are
 * spread into `src/lib/geo-pages.ts`, which feeds the dynamic routes,
 * `/compare` and `/zh` indexes, `sitemap.ts`, and both llms files.
 *
 * Shared tone and citation live in `shell.ts`.
 */
import { pseoChinesePages as industryPages } from "@/lib/pseo/industry-pages";
import { pseoHowtoPages } from "@/lib/pseo/howto-pages";
import { pseoLocationPages } from "@/lib/pseo/location-pages";
import { pseoPlatformPages } from "@/lib/pseo/platform-pages";
import { batch5ChinesePages } from "@/lib/pseo/batch5-pages";

export { pseoComparePages } from "@/lib/pseo/compare-pages";

export const pseoChinesePages = [
  ...industryPages,
  ...pseoHowtoPages,
  ...pseoPlatformPages,
  ...pseoLocationPages,
  ...batch5ChinesePages,
];
