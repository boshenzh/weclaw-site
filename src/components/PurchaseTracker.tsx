"use client";

import { track } from "@vercel/analytics";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function PurchaseTracker() {
  const params = useSearchParams();
  const sessionId = params.get("session_id") || "";

  useEffect(() => {
    const key = `weclawd-purchase-${sessionId || "unknown"}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      // Private mode can block sessionStorage. Still record the event once per mount.
    }
    const props = sessionId ? { session_id: sessionId } : undefined;
    track("purchase", props);
    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      if (typeof window.datafast === "function") {
        window.datafast("purchase", props);
        window.clearInterval(timer);
      } else if (tries > 15) {
        window.clearInterval(timer);
      }
    }, 200);
    return () => window.clearInterval(timer);
  }, [sessionId]);

  return null;
}
