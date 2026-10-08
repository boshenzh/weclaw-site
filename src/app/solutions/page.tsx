import CategoryIndexPage, { categoryMetadata } from "@/components/CategoryIndexPage";

export function generateMetadata() {
  return categoryMetadata("solutions");
}

export default function Page() {
  return <CategoryIndexPage category="solutions" />;
}
