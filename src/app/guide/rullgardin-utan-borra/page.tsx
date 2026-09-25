import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";
import { getProduct } from "@/data/products";

export const metadata: Metadata = {
  title: "Rullgardin utan borr",
  description:
    "Montera rullgardin med klämfäste. Mått, fönstertyper och produkter som passar hyresrätt.",
};

export default function RullgardinUtanBorraPage() {
  const klam = getProduct("rullgardin-klamfaste");
  const mork = getProduct("morklaggningsrullgardin");

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
          Rullgardin utan borr
        </h1>
        <p className="text-lg text-stone-600">
          Klämfäste i fönsterbågen — vanligt val i hyresrätt.
        </p>
      </header>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">Mät och montera</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Mät fönsterbågens bredd och höjd enligt produktens anvisning.</li>
          <li>Kontrollera att bågen tål klämfäste (trä/PVC fungerar oftast).</li>
          <li>Montera enligt instruktion — dra inte åt så hårt att listen skadas.</li>
          <li>Testa upp- och nedrullning innan ni lämnar fönstret.</li>
        </ol>
        <p>
          Behöver ni skruva i karm eller vägg? Kolla ditt kontrakt först. Se
          också{" "}
          <Link
            href="/guide/borra-i-hyresratt"
            className="text-sage-800 underline underline-offset-2"
          >
            guiden om borrning
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Produkter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[klam, mork].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>

      <Disclosure compact />
    </article>
  );
}
