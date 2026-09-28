import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { CategoryComparison } from "@/components/CategoryComparison";
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
  alternates: { canonical: "/solskydd" },
};

export default async function SolskyddPage() {
  const items = await getProductsByCategory("solskydd");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ href: "/produkter", label: "Alla produkter" }, { label: "Solskydd" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Solskydd utan att borra</h1>
        <p className="max-w-2xl">
          Klämfäste sitter i bågen. Mät bredd innan köp. Skruvhål i karm räknas ofta som
          onormalt slitage.
        </p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
          <Link href="/guide/rullgardin-utan-borra" className="underline underline-offset-2 hover:text-white">
            Rullgardin utan att borra
          </Link>
          <Link href="/guide/plissegardin-utan-borra" className="underline underline-offset-2 hover:text-white">
            Plisségardin utan att borra
          </Link>
          <ContractNote />
        </p>
      </header>
      <CategoryComparison products={items} categoryLabel="solskydd" />
      <div id="produkter" className="grid scroll-mt-24 gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
