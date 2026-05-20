export default function TldrBox({
  bullets,
  label = "TL;DR",
}: {
  bullets: string[];
  label?: string;
}) {
  if (!bullets || bullets.length === 0) return null;
  return (
    <aside
      role="note"
      aria-label={label}
      className="my-8 rounded-2xl border border-amber-200 bg-amber-50/70 px-6 py-5"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{label}</p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-800">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </aside>
  );
}
