import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { CompareTable } from "@/components/CompareTable";
import { getProductsByCategory } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";

export const metadata: Metadata = {
  title: "Solskydd utan att borra",
  description:
    "Jämför rullgardin med kläm, plissé och fönsterfilm. Utan skruv i karm.",
};

export default async function SolskyddPage() {
  const items = await getProductsByCategory("solskydd");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ href: "/produkter", label: "Alla produkter" }, { label: "Solskydd" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Solskydd utan att borra</h1>
      </header>
      <section className="space-y-3 leading-relaxed text-stone-700">
        <ul className="list-disc space-y-2 pl-5">
          <li>Klämfästen på fönsterbågen utan verktyg.</li>
          <li>Mät bredd innan köp.</li>
          <li>Skruvhål i karm räknas ofta som onormalt slitage.</li>
        </ul>
        <p>
          Guide:{" "}
          <Link href="/guide/rullgardin-utan-borra" className="underline underline-offset-2">
            Rullgardin utan att borra
          </Link>
        </p>
      </section>
      <CompareTable
        caption="Vilken typ ska ni välja"
        rows={[
          {
            name: "Rullgardin — Bolga mörkläggande",
            bestFor: "Sova, mörklägga, vanligt fönster",
            watch: "Bågen måste tåla klämman. Mät karmdjup.",
            fromSek: 199,
          },
          {
            name: "Plisségardin — Hven upp/ner",
            bestFor: "Insyn och ljus upp/ner",
            watch: "Bekräfta att just den modellen har klämfäste.",
            fromSek: 275,
          },
          {
            name: "Fönsterfilm — D-C-FIX solskydd",
            bestFor: "Glas utan list, sol på kök/badrum",
            watch: "Testa liten yta. Kan lämna lim om den sitter länge.",
            fromSek: 200,
          },
          {
            name: "Gardinstång — GARDINIA spännstång",
            bestFor: "Nisch eller fönster mellan två väggar",
            watch: "Kräver motstånd på båda sidor. Inte på lös list.",
            fromSek: 167,
          },
        ]}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
