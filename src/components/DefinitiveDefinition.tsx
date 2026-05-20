import type { ReactNode } from "react";

export default function DefinitiveDefinition({
  children,
  label = "一句话定义",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <aside
      role="note"
      aria-label={label}
      className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50/60 px-5 py-4"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
        {label}
      </p>
      <p className="mt-1 text-base leading-7 text-zinc-900">{children}</p>
    </aside>
  );
}
