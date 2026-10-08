import type { Metadata } from "next";
import CategoryIndexPage from "@/components/CategoryIndexPage";

const siteUrl = "https://www.weclawd.com";
const title = "对比｜WorkBuddy、聊天产品和私有运行时";
const description =
  "按采购问题比较 WorkBuddy、通用聊天产品和私有运行时。看清数据在谁那边、谁值守，再决定要不要继续现有产品或做私有部署。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/compare` },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: `${siteUrl}/compare`,
    title,
    description,
  },
};

export default function Page() {
  return <CategoryIndexPage category="compare" locale="zh" />;
}
