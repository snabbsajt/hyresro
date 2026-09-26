import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { Crumbs } from "@/components/Crumbs";
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
    <div className="space-y-12">
      <header className="space-y-3">
        <Crumbs items={[{ label: "Alla produkter" }]} />
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Alla rekommenderade produkter
        </h1>
        <p className="max-w-xl text-stone-600">
          Samma urval som på kategorisidorna. En länk per rad. Pris är ungefärligt och kan ändras i butiken.
        </p>
      </header>
      {sections.map((s) =>
        s.items.length === 0 ? null : (
          <section key={s.key} className="space-y-4">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.items.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        ),
      )}
    </div>
  );
}
