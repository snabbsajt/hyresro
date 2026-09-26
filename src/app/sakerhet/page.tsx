import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";
import { ContractNote } from "@/components/ContractNote";
import { AdNote } from "@/components/AdNote";

export const metadata: Metadata = {
  title: "Säkerhet i hyresrätt",
  description:
    "Brandfilt, extra varnare på batteri och första hjälpen — saker ni kan ställa in utan att borra.",
};

export default async function Page() {
  const items = await getProductsByCategory("sakerhet");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ href: "/produkter", label: "Alla produkter" }, { label: "Säkerhet" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Kök och säkerhet</h1>
        <p className="max-w-2xl">
          Det som står löst eller på batteri kan ni ta med er. Brandfilt vid spisen, extra
          varnare och en väska med plåster kräver inte hål. Fast brandvarnare som värden redan
          satt upp rör ni inte.
        </p>
        <AdNote />
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
          <ContractNote />
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
