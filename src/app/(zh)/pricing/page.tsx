import type { Metadata } from "next";
import PricingSection from "@/components/PricingSection";
import ContactBlock from "@/components/ContactBlock";

const title = "价格";
const description = "客户选定 OpenClaw 时的安装与托管标价：¥489、¥1,888、¥3,800。企业陪跑另报价，以陪跑页为准。";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.weclawd.com/pricing" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.weclawd.com/pricing",
    title,
    description,
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <PricingSection />
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <ContactBlock locale="zh" />
      </section>
    </main>
  );
}
