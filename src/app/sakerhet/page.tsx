import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";
import { ContractNote } from "@/components/ContractNote";

export const metadata: Metadata = {
  title: "Säkerhet i hyresrätt",
  description: "Brandfilt, brandvarnare och första hjälpen. Kolla vad värden redan kräver.",
  openGraph: {
    title: "Säkerhet i hyresrätt",
    description: "Brandfilt, brandvarnare och första hjälpen. Kolla vad värden redan kräver.",
  },
};

export default async function Page() {
  const items = await getProductsByCategory("sakerhet");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ href: "/produkter", label: "Alla produkter" }, { label: "Säkerhet" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Kök och säkerhet</h1>
        <p className="max-w-2xl leading-relaxed text-stone-700">
          Brandfilt vid spisen och extra varnare på batteri. Många värdar kräver redan fast brandvarnare —
          kolla vad som sitter innan ni köper mer. Fast montage i tak kan kräva samtycke.
        </p>
        <p className="text-sm text-stone-600">
          <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2">
            Så läser ni kontraktet
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
