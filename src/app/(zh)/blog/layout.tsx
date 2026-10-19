import ContactBlock from "@/components/ContactBlock";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="mx-auto max-w-4xl px-6 pb-24">
        <ContactBlock locale="zh" />
      </div>
    </>
  );
}
