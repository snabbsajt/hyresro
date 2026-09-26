import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";
import { ContractNote } from "@/components/ContractNote";

export const metadata: Metadata = {
  title: "Förvaring utan att borra",
  description: "Hyllor, spännstång och balkonglåda utan hål i vägg.",
  openGraph: {
    title: "Förvaring utan att borra",
    description: "Hyllor, spännstång och balkonglåda utan hål i vägg.",
  },
};

export default async function Page() {
  const items = await getProductsByCategory("forvaring");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ href: "/produkter", label: "Alla produkter" }, { label: "Förvaring" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Förvaring utan att borra</h1>
        <p className="max-w-2xl leading-relaxed text-stone-700">
          Fristående ställ, spännstång i nisch och hylla på tejp. Vägghylla kräver slät yta och angiven maxvikt.
          Balkonglåda kläms på räcke — kolla kontraktet innan ni hänger något utåt.
        </p>
        <p className="text-sm text-stone-600">
          Guide:{" "}
          <Link href="/guide/hylla-utan-borra" className="underline underline-offset-2">
            Hylla utan att borra
          </Link>
        </p>
        <ContractNote />
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
