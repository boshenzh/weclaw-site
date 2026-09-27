/**
 * Programmatic SEO content modules.
 *
 * Next batch: append a GeoPage to `pseoComparePages` or `pseoChinesePages`.
 * Do not add a new page.tsx. These arrays are spread into `src/lib/geo-pages.ts`,
 * which already feeds:
 * - `/compare/[slug]` and `/zh/[slug]`
 * - `/compare` and `/zh` index cards
 * - `sitemap.ts`
 * - `/llms.txt` and `/llms-full.txt`
 *
 * Compare slugs in this batch use `/compare/...`.
 * Cross-border slugs use `/zh/...`.
 * Shared tone and citation live in `shell.ts` (`withPseoShell`).
 */
export { pseoComparePages } from "@/lib/pseo/compare-pages";
export { pseoChinesePages } from "@/lib/pseo/industry-pages";
