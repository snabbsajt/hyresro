import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";
import { getProduct } from "@/data/products";

export const metadata: Metadata = {
  title: "Hylla utan borr i hyresrätt",
  description:
    "Så sätter ni upp hylla utan att borra. Självhäftande fästen, klämhyllor och vad ni ska tänka på.",
};

export default function HyllaUtanBorraPage() {
  const hylla = getProduct("hylla-no-drill");
  const tesaLatt = getProduct("tesa-skruv-latt");
  const tesaTung = getProduct("tesa-skruv-tung");

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm text-stone-500">
          <Link href="/" className="hover:underline">
            Hem
          </Link>{" "}
          / Guider
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
          Hylla utan borr
        </h1>
        <p className="text-lg text-stone-600">
          Förvaring utan hål — om underlaget och vikten stämmer.
        </p>
      </header>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">Så gör ni</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Välj yta: kakel och slät målad vägg fungerar oftast bäst.</li>
          <li>Rengör och torka ytan innan ni sätter upp fästet.</li>
          <li>Följ maxvikten. Överlast är vanlig orsak till fall.</li>
          <li>Planera borttagning redan nu — spara instruktionen.</li>
        </ol>
        <p>
          Kolla ditt kontrakt. Mer om vad som får ändras finns hos{" "}
          <a
            href="https://www.hyresgastforeningen.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-800 underline underline-offset-2"
          >
            Hyresgästföreningen
          </a>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Produkter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[hylla, tesaTung, tesaLatt].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>

      <Disclosure compact />
    </article>
  );
}
