import type { Metadata } from "next";
import { ProductRow } from "@/components/ProductRow";
import { Crumbs } from "@/components/Crumbs";
import { AdNote } from "@/components/AdNote";
import { getCatalog } from "@/lib/catalog";
import type { Product } from "@/data/types";

export const metadata: Metadata = {
  title: "Alla rekommenderade produkter",
  description:
    "Hela Hyresros katalog: solskydd, fästen, förvaring, belysning och säkerhet.",
};

const categoryOrder: { key: string; title: string }[] = [
  { key: "solskydd", title: "Sol och fönster" },
  { key: "fasten", title: "Fästen" },
  { key: "forvaring", title: "Förvaring" },
  { key: "belysning", title: "Ljus och el" },
  { key: "sakerhet", title: "Kök och säkerhet" },
];

type Section = { key: string; title: string; items: Product[] };

export default async function Page() {
  const all = await getCatalog();
  const used = new Set<string>();
  const sections: Section[] = categoryOrder.map(({ key, title }) => {
    const items = all
      .filter((p) => p.category === key)
      .sort((a, b) => a.name.localeCompare(b.name, "sv"));
    items.forEach((p) => used.add(p.slug));
    return { key, title, items };
  });
  const rest = all
    .filter((p) => !used.has(p.slug))
    .sort((a, b) => a.name.localeCompare(b.name, "sv"));
  if (rest.length) sections.push({ key: "ovrigt", title: "Övrigt", items: rest });

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <Crumbs items={[{ label: "Alla produkter" }]} />
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Alla rekommenderade produkter
        </h1>
        <AdNote />
      </header>
      {sections.map((s) =>
        s.items.length === 0 ? null : (
          <section key={s.key} className="space-y-2">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <ul>
              {s.items.map((p) => (
                <ProductRow key={p.slug} product={p} />
              ))}
            </ul>
          </section>
        ),
      )}
    </div>
  );
}
