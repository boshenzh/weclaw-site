import CategoryIndexPage, { categoryMetadata } from "@/components/CategoryIndexPage";

export function generateMetadata() {
  return categoryMetadata("use-cases");
}

export default function Page() {
  return <CategoryIndexPage category="use-cases" />;
}
