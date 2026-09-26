import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { CompareTable } from "@/components/CompareTable";
import { getProductsByCategory } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";
import { ContractNote } from "@/components/ContractNote";

export const metadata: Metadata = {
  title: "Solskydd utan att borra",
  description:
    "Jämför rullgardin med kläm, plissé och fönsterfilm. Utan skruv i karm.",
  openGraph: {
    title: "Solskydd utan att borra",
    description:
      "Jämför rullgardin med kläm, plissé och fönsterfilm. Utan skruv i karm.",
  },
};

export default async function SolskyddPage() {
  const items = await getProductsByCategory("solskydd");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ href: "/produkter", label: "Alla produkter" }, { label: "Solskydd" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Solskydd utan att borra</h1>
        <p className="max-w-2xl text-stone-700">
          Klämfäste sitter i bågen. Mät bredd innan köp. Skruvhål i karm räknas ofta som onormalt slitage.
        </p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
          <Link href="/guide/rullgardin-utan-borra" className="underline underline-offset-2 hover:text-stone-800">
            Rullgardin utan att borra
          </Link>
          <ContractNote />
        </p>
      </header>
      <CompareTable
        caption="Vilken typ ska ni välja"
        rows={[
          {
            name: "Rullgardin — Bolga mörkläggande",
            bestFor: "Sova, mörklägga, vanligt fönster",
            watch: "Kontrollera att er storlek har klämfäste, inte skruv.",
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
