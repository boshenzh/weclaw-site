/** Drop a trailing brand so the root title template can append " | 喂龙虾" once. */
const BRAND_TAIL = /(?:\s*[|｜]\s*)(?:喂龙虾(?:\s*WeClawd)?|WeClawd(?:\s*喂龙虾)?)\s*$/u;

export function untitled(title: string) {
  let next = title.trim();
  for (let i = 0; i < 4; i += 1) {
    const stripped = next.replace(BRAND_TAIL, "").trim();
    if (stripped === next || stripped.length === 0) break;
    next = stripped;
  }
  return next;
}
