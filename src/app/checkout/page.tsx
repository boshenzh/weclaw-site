"use client";

import { useEffect, useState } from "react";

const plans = [
  { id: "managed", name: "托管部署" },
  { id: "personal_pc", name: "个人部署（远程）" },
  { id: "care", name: "托管护理计划（订阅）" },
];

export default function CheckoutPage() {
  const [plan, setPlan] = useState(plans[0].id);
  const [promoCode, setPromoCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("plan");
    if (q && plans.some((p) => p.id === q)) {
      setPlan(q);
    }
  }, []);

  async function startCheckout() {
    setLoading(true);
    setError(null);

    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ plan, promoCode: promoCode.trim() || null }),
    });

    if (!res.ok) {
      const t = await res.text();
      setError(t || "创建支付失败");
      setLoading(false);
      return;
    }

    const data = (await res.json()) as { url: string };
    window.location.href = data.url;
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">付款</h1>
      <p className="mt-3 text-sm text-zinc-600">
        选择套餐，输入邀请码（Stripe Promotion Code）即可享受折扣。
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label className="block text-sm font-medium text-zinc-900">套餐</label>
          <select
            className="mt-2 w-full rounded-lg border px-3 py-2"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            {plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-900">邀请码（可选）</label>
          <input
            className="mt-2 w-full rounded-lg border px-3 py-2"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="例如 WECLAW50"
          />
          <p className="mt-2 text-xs text-zinc-500">
            这里使用 Stripe 的 Promotion Code。无效码会在 Stripe 结账页提示。
          </p>
        </div>

        <button
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          onClick={startCheckout}
          disabled={loading}
        >
          {loading ? "跳转中…" : "去 Stripe 付款"}
        </button>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
