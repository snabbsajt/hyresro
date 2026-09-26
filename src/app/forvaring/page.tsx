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
        <p className="max-w-2xl">
          Fristående ställ, spännstång i nisch och hylla på tejp. Balkonglåda kläms på räcke.
        </p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
          <Link href="/guide/hylla-utan-borra" className="underline underline-offset-2 hover:text-white">
            Hylla utan att borra
          </Link>
          <Link href="/guide/balkong-utan-borra" className="underline underline-offset-2 hover:text-white">
            Balkong utan att borra
          </Link>
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
