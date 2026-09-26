import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";

export const metadata: Metadata = {
  title: "Belysning utan fast el",
  description: "Lampor, slinga och dimmer i sladd. Ingen ny elpunkt.",
  openGraph: {
    title: "Belysning utan fast el",
    description: "Lampor, slinga och dimmer i sladd. Ingen ny elpunkt.",
  },
};

export default async function Page() {
  const items = await getProductsByCategory("belysning");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ href: "/produkter", label: "Alla produkter" }, { label: "Belysning" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Belysning utan fast el</h1>
        <p className="max-w-2xl leading-relaxed text-stone-700">
          Golvlampa, klämlampa, slinga och dimmer i sladden. Ingen takdosa, ingen ny vägguttag.
          Summera watt på grenuttaget. Fast installation är värdens sak.
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
