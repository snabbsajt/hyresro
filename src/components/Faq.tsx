type Item = { q: string; a: string };

export function Faq({ items }: { items: Item[] }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Vanliga frågor</h2>
      <dl className="divide-y divide-[#E3DFD9] border border-[#E3DFD9] bg-white">
        {items.map((item) => (
          <div key={item.q} className="px-3 py-2.5">
            <dt className="text-sm font-medium text-[#1A1A1A]">{item.q}</dt>
            <dd className="mt-1 text-sm text-stone-700">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
