import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/catalog";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Belysning utan fast el",
  description: "Lampor, slinga, dimmer i sladd och grenuttag — ingen ny dosa.",
};

export default async function Page() {
  const items = await getProductsByCategory("belysning");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Belysning utan fast el</h1>
        <BackLink />
        <p className="max-w-xl text-stone-700">
          Sladd och golv. Inte ny takdosa. Dimmer sitter i sladden, inte i väggen.
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
