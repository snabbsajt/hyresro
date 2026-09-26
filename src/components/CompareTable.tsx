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
      <div className="overflow-x-auto border border-[#E3DFD9] bg-white">
        <table className="w-full min-w-[36rem] text-left text-sm">
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
