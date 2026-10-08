import CategoryIndexPage, { categoryMetadata } from "@/components/CategoryIndexPage";

export function generateMetadata() {
  return categoryMetadata("compare");
}

export default function Page() {
  return <CategoryIndexPage category="compare" />;
}
