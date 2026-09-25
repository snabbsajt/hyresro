import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Fästen utan borr",
  description:
    "Tesa-skruvar och andra fästen för hyresrätt. Lätta och tunga alternativ utan borr.",
};

export default function FastenPage() {
  const fasten = getProductsByCategory("fasten");
  const extra = products.filter((p) =>
    ["hylla-no-drill", "brandfilt"].includes(p.slug),
  );

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
          Fästen
        </h1>
        <p className="max-w-xl leading-relaxed text-stone-700">
          Självhäftande skruvar och krokar för kakel, glas och målad vägg.
          Följ maxvikten och ta bort dem rätt vid flytt.
        </p>
        <p className="text-sm text-stone-600">
          Osäkra på borrning?{" "}
          <Link
            href="/guide/borra-i-hyresratt"
            className="text-sage-800 underline underline-offset-2"
          >
            Läs guiden
          </Link>
          . Kolla ditt kontrakt.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Fästen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {fasten.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Relaterat</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {extra.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <Disclosure compact />
    </div>
  );
}
