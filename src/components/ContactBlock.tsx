"use client";

import { useState } from "react";
import { BOOKING_URL, CONTACT_EMAIL, WECHAT_ID } from "@/lib/contact";

export default function ContactBlock({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const en = locale === "en";
  const [copied, setCopied] = useState(false);

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
    <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm" aria-label={en ? "Contact" : "联系"}>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-950">{en ? "Contact" : "直接联系"}</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-600">
        {en
          ? "Add WeChat, book a Feishu call, or email. The same person answers all three."
          : "加微信、预约飞书，或发邮件。三边都是同一个人回复。"}
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-[9rem_1fr] sm:items-start">
        <div
          data-qr-slot="wechat"
          className="flex h-36 w-36 items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-3 text-center text-xs leading-5 text-zinc-500"
        >
          {en ? "WeChat QR image goes here" : "微信二维码稍后放在这里"}
        </div>
        <div className="space-y-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{en ? "WeChat ID" : "微信号"}</div>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <code className="rounded-md bg-zinc-100 px-2 py-1 text-sm font-semibold text-zinc-950">{WECHAT_ID}</code>
              <button
                type="button"
                onClick={copyWechat}
                data-fast-goal="wechat_copy"
                className="rounded-lg bg-zinc-950 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                {copied ? (en ? "Copied" : "已复制") : en ? "Copy WeChat ID" : "复制微信号"}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-fast-goal="book_call"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              {en ? "Book a Feishu call" : "预约飞书会议"}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              data-fast-goal="email"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              {en ? `Email ${CONTACT_EMAIL}` : `发邮件 ${CONTACT_EMAIL}`}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
