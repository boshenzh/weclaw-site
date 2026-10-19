import { englishCompareSlugSet } from "@/lib/english-compare";

const ENGLISH_HUBS = /^\/(solutions|industries|integrations|use-cases)(\/|$)/;

export function isEnglishPath(pathname: string) {
  if (pathname === "/en" || pathname.startsWith("/en/")) return true;
  if (ENGLISH_HUBS.test(pathname)) return true;
  if (!pathname.startsWith("/compare/")) return false;
  return englishCompareSlugSet.has(pathname.slice("/compare/".length));
}
