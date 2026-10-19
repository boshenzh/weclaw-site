"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { BOOKING_URL, WECHAT_ID } from "@/lib/contact";
import { isEnglishPath } from "@/lib/locale-path";

const HIDDEN = /^\/(login|checkout)(\/|$)/;

export default function StickyContactBar() {
  const pathname = usePathname() || "/";
  const en = isEnglishPath(pathname);
  const [copied, setCopied] = useState(false);

  if (HIDDEN.test(pathname)) return null;

  async function copyWechat() {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-zinc-200 bg-white md:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2">
        <button
          type="button"
          onClick={copyWechat}
          data-fast-goal="wechat_copy"
          className="rounded-lg bg-zinc-950 px-3 py-3 text-sm font-semibold text-white"
        >
          {copied ? (en ? "Copied" : "已复制") : en ? "Add WeChat" : "加微信"}
        </button>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-fast-goal="book_call"
          className="rounded-lg bg-blue-600 px-3 py-3 text-center text-sm font-semibold text-white"
        >
          {en ? "Book" : "预约"}
        </a>
      </div>
    </div>
  );
}
