import type { Metadata } from "next";
import Link from "next/link";
import { ContractNote } from "@/components/ContractNote";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Fästen utan att borra",
  description:
    "Borrfria fästen i hyresrätt: underlag, viktgräns och när tejp inte räcker.",
};

export default function FastenPage() {
  const items = getProductsByCategory("fasten");

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
          Fästen utan att borra
        </h1>
        <p className="max-w-xl leading-relaxed text-stone-700">
          Du kan hänga tavlor, speglar och hyllor i din hyresrätt utan att borra
          – och så lägenheten är i skick vid avflytt. Här är de borrfria metoder som
          faktiskt håller, och när du ändå bör lämna borrmaskinen fram.
        </p>
        <ContractNote />
      </header>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          Så väljer du rätt upphängning:
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-stone-800">
              Anpassa efter underlaget.
            </strong>{" "}
            Självhäftande lösningar och tejpskruvar kräver en helt slät och
            fettfri yta. På dörrar och listverk fungerar klämfästen bättre.
          </li>
          <li>
            <strong className="font-medium text-stone-800">
              Respektera viktgränsen.
            </strong>{" "}
            Kontrollera tillverkarens maxvikt per fäste – och använd hellre ett
            fäste för mycket än ett för lite.
          </li>
        </ul>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          När räcker de borrfria alternativen inte?
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-stone-800">
              Målade tapeter.
            </strong>{" "}
            Stark monteringstejp kan dra med sig ytskiktet när du tar ner
            fästet.
          </li>
          <li>
            <strong className="font-medium text-stone-800">Våtutrymmen.</strong>{" "}
            I badrum krävs fukttålig tejp eller lim, annars släpper fästet över
            tid.
          </li>
          <li>
            <strong className="font-medium text-stone-800">Tunga ting.</strong>{" "}
            Riktigt tunga speglar och hyllor kräver skruv och plugg för att
            sitta säkert.
          </li>
        </ul>
        <p>
          Osäker på vad du får göra i just din lägenhet? Läs guiderna{" "}
          <Link
            href="/guide/hylla-utan-borra"
            className="text-sage-800 underline underline-offset-2"
          >
            Hylla utan att borra
          </Link>{" "}
          och{" "}
          <Link
            href="/guide/borra-i-hyresratt"
            className="text-sage-800 underline underline-offset-2"
          >
            Får man borra i hyresrätt?
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Produkter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <Disclosure compact />
    </div>
  );
}
