"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeBottomVideoFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 360;
      setIsVisible(scrollBottom);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (isDismissed) {
    return null;
  }

  return (
    <aside
      aria-label="货代 AI 员工视频演示"
      className={`fixed inset-x-4 bottom-16 z-40 mx-auto max-w-sm overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-950/15 md:left-auto md:right-6 md:mx-0 md:w-[380px] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-zinc-100 px-4 py-3">
        <div>
          <p className="text-xs font-semibold text-blue-700">2 分 45 秒演示</p>
          <h2 className="mt-0.5 text-sm font-semibold leading-5 text-zinc-950">
            看看 AI 员工如何自动调研客户、写开发信
          </h2>
        </div>
        <button
          type="button"
          aria-label="关闭视频浮窗"
          onClick={() => setIsDismissed(true)}
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
            <path d="M5.22 5.22a.75.75 0 0 1 1.06 0L10 8.94l3.72-3.72a.75.75 0 1 1 1.06 1.06L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06L8.94 10 5.22 6.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </button>
      </div>

      <video
        className="aspect-video w-full bg-zinc-950"
        controls
        muted
        playsInline
        preload="metadata"
        poster="/videos/freight-auto-outreach-poster.jpg"
      >
        <source src="/videos/freight-auto-outreach.mp4" type="video/mp4" />
      </video>

      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="text-xs leading-5 text-zinc-600">
          一行公司名到客户画像、匹配度和邮件草稿。
        </p>
        <Link
          href="/case/freight-auto-outreach"
          className="inline-flex flex-none items-center rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
        >
          查看案例
        </Link>
      </div>
    </aside>
  );
}
