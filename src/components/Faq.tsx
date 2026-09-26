type Item = { q: string; a: string };

export function Faq({ items }: { items: Item[] }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Vanliga frågor</h2>
      <dl className="glass-panel divide-y divide-white/10">
        {items.map((item) => (
          <div key={item.q} className="px-3 py-2.5">
            <dt className="text-sm font-medium text-stone-100">{item.q}</dt>
            <dd className="mt-0.5 text-sm leading-relaxed text-stone-400">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
