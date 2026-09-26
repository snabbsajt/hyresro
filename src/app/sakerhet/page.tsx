import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";
import { ContractNote } from "@/components/ContractNote";

export const metadata: Metadata = {
  title: "Säkerhet i hyresrätt",
  description: "Brandfilt, brandvarnare och första hjälpen.",
};

export default async function Page() {
  const items = await getProductsByCategory("sakerhet");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ href: "/produkter", label: "Alla produkter" }, { label: "Säkerhet" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Kök och säkerhet</h1>
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
