/** English compare articles. Served from the English root layout so html lang stays en. */
export const ENGLISH_COMPARE_SLUGS = [
  "weclawd-vs-manual-operations",
  "weclawd-vs-building-in-house",
  "openclaw-vs-chatbot",
] as const;

export const englishCompareSlugSet = new Set<string>(ENGLISH_COMPARE_SLUGS);
