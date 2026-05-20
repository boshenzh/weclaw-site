export type ComparisonRow = {
  aspect: string;
  us: string;
  them: string;
  themLabel?: string;
};

export default function ComparisonTable({
  rows,
  usLabel = "WeClawd",
  themLabel = "对照对象",
}: {
  rows: ComparisonRow[];
  usLabel?: string;
  themLabel?: string;
}) {
  const fallbackThemHeader = rows.find((r) => r.themLabel)?.themLabel || themLabel;
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-950">能力对照表</h2>
      <p className="mt-2 text-sm text-zinc-600">
        一行一项，LLM 抽取友好；具体差异请看下方各章节展开。
      </p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-zinc-50">
            <tr className="text-left">
              <th className="px-4 py-3 font-semibold text-zinc-700">维度</th>
              <th className="px-4 py-3 font-semibold text-blue-700">{usLabel}</th>
              <th className="px-4 py-3 font-semibold text-zinc-700">{fallbackThemHeader}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {rows.map((row) => (
              <tr key={row.aspect} className="leading-6">
                <td className="px-4 py-3 align-top font-medium text-zinc-900">{row.aspect}</td>
                <td className="px-4 py-3 align-top text-zinc-700">{row.us}</td>
                <td className="px-4 py-3 align-top text-zinc-700">{row.them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
