import CategoryIndexPage, { categoryMetadata } from "@/components/CategoryIndexPage";

export function generateMetadata() {
  return categoryMetadata("industries");
}

export default function Page() {
  return <CategoryIndexPage category="industries" />;
}
