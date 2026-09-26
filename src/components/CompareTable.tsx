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

      <ul className="divide-y divide-[#E3DFD9] border border-[#E3DFD9] bg-white md:hidden">
        {rows.map((r) => (
          <li key={r.name} className="px-3 py-2.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-[#1A1A1A]">{r.name}</p>
              <p className="shrink-0 text-sm text-stone-600">
                {r.fromSek != null ? `${r.fromSek} kr` : ""}
              </p>
            </div>
            <p className="mt-1 text-sm text-stone-700">{r.bestFor}</p>
            <p className="text-sm text-stone-500">{r.watch}</p>
          </li>
        ))}
      </ul>

      <div className="hidden border border-[#E3DFD9] bg-white md:block">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[#E3DFD9] text-stone-500">
            <tr>
              <th className="px-3 py-2 font-medium">Typ</th>
              <th className="px-3 py-2 font-medium">Passar när</th>
              <th className="px-3 py-2 font-medium">Se upp med</th>
              <th className="px-3 py-2 font-medium">Från</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-b border-[#E3DFD9] last:border-0">
                <td className="px-3 py-3 font-medium text-[#1A1A1A]">{r.name}</td>
                <td className="px-3 py-3 text-stone-700">{r.bestFor}</td>
                <td className="px-3 py-3 text-stone-700">{r.watch}</td>
                <td className="whitespace-nowrap px-3 py-3 text-stone-700">
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
