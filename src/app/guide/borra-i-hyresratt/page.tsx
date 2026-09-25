import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Borra i hyresrätt — vad gäller?",
  description:
    "Kort guide om borrning i hyresrätt. Kolla kontraktet, fråga hyresvärden och välj alternativ utan borr när det går.",
};

const related = products.filter((p) =>
  ["tesa-skruv-latt", "tesa-skruv-tung", "hylla-no-drill"].includes(p.slug),
);

export default function BorraIHyresrattPage() {
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
          Borra i hyresrätt
        </h1>
        <p className="text-lg text-stone-600">
          Vad ni får göra beror på kontraktet och hyresvärden — inte på vad som
          står på nätet.
        </p>
      </header>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">Börja här</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Läs hyreskontraktet. Kolla ditt kontrakt.</li>
          <li>Fråga hyresvärden skriftligt om ni är osäkra.</li>
          <li>
            Titta på info från{" "}
            <a
              href="https://www.hyresgastforeningen.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-800 underline underline-offset-2"
            >
              Hyresgästföreningen
            </a>{" "}
            om förändringar i lägenheten.
          </li>
          <li>Välj lösningar utan borr när det räcker.</li>
        </ol>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          När borr kan vara rimligt
        </h2>
        <p>
          Små hål för tavelkrokar accepteras ofta, men det är inte en regel.
          Större ingrepp, kakel och bärande väggar är andra saker. Vid tvekan:
          fråga först.
        </p>
        <p>
          Hyresro ger ingen juridisk rådgivning. Vi pekar på vanliga alternativ
          och på att kontraktet styr.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">
          Alternativ utan borr
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <Disclosure compact />
    </article>
  );
}
