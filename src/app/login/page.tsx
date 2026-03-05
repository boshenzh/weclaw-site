"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const sp = useSearchParams();
  const next = sp.get("next") || "/checkout";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const res = await fetch("/api/auth/request-link", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, next }),
    });

    if (!res.ok) {
      const t = await res.text();
      setError(t || "登录失败");
      setStatus("error");
      return;
    }

    setStatus("sent");
  }

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">登录</h1>
      <p className="mt-3 text-sm text-zinc-600">
        输入邮箱，我们会发一个一次性登录链接给你。
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-900">邮箱</label>
          <input
            className="mt-2 w-full rounded-lg border px-3 py-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
          />
        </div>

        <button
          className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60"
          disabled={status === "loading"}
          type="submit"
        >
          {status === "loading" ? "发送中…" : "发送登录链接"}
        </button>

        {status === "sent" && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
            已发送。请去邮箱点登录链接。
          </div>
        )}
        {status === "error" && error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            {error}
          </div>
        )}
      </form>

      <p className="mt-6 text-xs text-zinc-500">
        登录即表示你同意我们的服务条款与隐私政策（占位）。
      </p>
    </div>
  );
}
