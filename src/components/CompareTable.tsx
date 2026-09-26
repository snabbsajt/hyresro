type Row = {
  name: string;
  bestFor: string;
  watch: string;
  fromSek?: number;
};

export function CompareTable({
  caption,
  rows,
}: {
  caption: string;
  rows: Row[];
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{caption}</h2>

      <ul className="glass-panel divide-y divide-white/10 md:hidden">
        {rows.map((r) => (
          <li key={r.name} className="px-3 py-2.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-stone-100">{r.name}</p>
              <p className="shrink-0 text-sm text-stone-400">
                {r.fromSek != null ? `${r.fromSek} kr` : ""}
              </p>
            </div>
            <p className="mt-1 text-sm text-stone-300">{r.bestFor}</p>
            <p className="text-sm text-stone-500">{r.watch}</p>
          </li>
        ))}
      </ul>

      <div className="glass-panel hidden md:block">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-white/10 text-stone-400">
            <tr>
              <th className="px-3 py-2 font-medium">Typ</th>
              <th className="px-3 py-2 font-medium">Passar när</th>
              <th className="px-3 py-2 font-medium">Se upp med</th>
              <th className="px-3 py-2 font-medium">Från</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-b border-white/10 last:border-0">
                <td className="px-3 py-3 font-medium text-stone-100">{r.name}</td>
                <td className="px-3 py-3 text-stone-300">{r.bestFor}</td>
                <td className="px-3 py-3 text-stone-300">{r.watch}</td>
                <td className="whitespace-nowrap px-3 py-3 text-stone-300">
                  {r.fromSek != null ? `${r.fromSek} kr` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
