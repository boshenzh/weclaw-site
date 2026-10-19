import Link from "next/link";
import { BOOKING_URL } from "@/lib/contact";
import { pricingCards } from "@/lib/pricing";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">简单透明的价格</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            ¥489、¥1,888、¥3,800 是客户选定 OpenClaw 时的安装与托管套餐，以本页标价为准。一次性设置含部署与 14 天专属客服；托管本身不是 14 天，14 天是密集响应期。企业陪跑不在这三档里，按工作流另报价，区间以
            <Link href="/enterprise" className="font-semibold text-zinc-950 underline">
              陪跑页
            </Link>
            为准。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingCards.map((plan) => {
            const href = plan.detailsHref ?? (plan.checkoutPlan ? `/api/stripe/checkout?plan=${plan.checkoutPlan}` : BOOKING_URL);
            return (
              <a
                key={plan.name}
                href={href}
                target={plan.detailsHref || plan.checkoutPlan ? undefined : "_blank"}
                rel={plan.checkoutPlan ? "nofollow" : plan.detailsHref ? undefined : "noopener noreferrer"}
                data-fast-goal={plan.checkoutPlan ? "checkout_start" : "pricing_card_click"}
                data-track-plan={plan.checkoutPlan}
                className={`relative block bg-white rounded-2xl border-2 p-8 ${
                  plan.recommended ? "border-blue-600 shadow-xl scale-105" : "border-zinc-200 hover:border-zinc-300"
                } transition-all`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">推荐</span>
                  </div>
                )}
                {plan.badge && (
                  <div className="absolute -top-4 right-8">
                    <span className="inline-flex items-center rounded-full bg-red-500 px-4 py-1.5 text-sm font-bold text-white shadow-lg">{plan.badge}</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-zinc-950 mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-4xl font-bold text-zinc-950">{plan.price}</span>
                    {plan.originalPrice && <span className="text-lg text-zinc-400 line-through">{plan.originalPrice}</span>}
                    {plan.price !== "联系咨询" && <span className="text-zinc-500">一次性</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.detailsHref && <div className="mt-2 text-sm font-semibold text-red-600">查看详情 →</div>}
              </a>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold text-zinc-950">100% 满意保证</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  如果你对配置不满意，我们将退款——不问理由。We’re here to help, not to nickel and dime.
                </p>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-fast-goal="book_call"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                预约咨询
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-zinc-600">
            上面三档是 OpenClaw 安装与托管的一次性设置费，含部署与 14 天专属客服，以本页标价为准。企业陪跑另报价，以
            <Link href="/enterprise" className="font-semibold text-zinc-950 underline">
              陪跑页
            </Link>
            为准。
          </p>
          <div className="bg-zinc-50 rounded-xl p-6 max-w-2xl mx-auto border border-zinc-200">
            <h3 className="text-lg font-semibold text-zinc-950 mb-3">持续维护（可选）</h3>
            <p className="text-sm text-zinc-600 mb-4">14 天后，您可以选择托管护理计划，获得持续监控、更新和技术支持。</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-zinc-200">
                <div className="font-semibold text-zinc-950 mb-2">基础设施成本</div>
                <div className="text-zinc-600">
                  • 云 VPS
                  <br />• Mac Mini 硬件（一次性）
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-zinc-200">
                <div className="font-semibold text-zinc-950 mb-2">托管护理计划</div>
                <div className="text-zinc-600">
                  具体价格请预约咨询讨论
                  <br />
                  包含持续监控、更新和支持
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
