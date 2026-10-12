"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";
import { BOOKING_URL } from "@/lib/contact";

function goalForHref(href: string) {
  if (href.includes("/api/stripe/checkout")) return "checkout_start";
  if (href.startsWith("mailto:")) return "email";
  if (href === BOOKING_URL || href.includes("feishu.cn/scheduler")) return "book_call";
  return null;
}

function planFromHref(href: string) {
  try {
    const url = new URL(href, "https://www.weclawd.com");
    return url.searchParams.get("plan");
  } catch {
    return null;
  }
}

function annotate(root: ParentNode) {
  const anchors = root.querySelectorAll<HTMLAnchorElement>("a[href]:not([data-fast-goal])");
  anchors.forEach((anchor) => {
    const href = anchor.getAttribute("href") || "";
    const goal = goalForHref(href);
    if (!goal) return;
    anchor.setAttribute("data-fast-goal", goal);
    if (goal === "checkout_start") {
      const plan = planFromHref(href);
      if (plan) anchor.setAttribute("data-track-plan", plan);
    }
  });
}

export default function CtaTracker() {
  useEffect(() => {
    annotate(document);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) annotate(node);
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const el = target.closest("[data-fast-goal]");
      if (!el) return;
      const goal = el.getAttribute("data-fast-goal");
      if (!goal) return;
      const plan = el.getAttribute("data-track-plan") || undefined;
      const props = plan ? { plan } : undefined;
      track(goal, props);
      if (goal === "checkout_start" && plan) {
        track("pricing_card_click", { plan });
        window.datafast?.("pricing_card_click", { plan });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
