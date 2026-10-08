import CategoryIndexPage, { categoryMetadata } from "@/components/CategoryIndexPage";

export function generateMetadata() {
  return categoryMetadata("integrations");
}

export default function Page() {
  return <CategoryIndexPage category="integrations" />;
}
