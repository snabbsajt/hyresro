import type { Metadata } from "next";
import Link from "next/link";
import { ContractNote } from "@/components/ContractNote";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";
import { getProduct } from "@/data/products";

export const metadata: Metadata = {
  title: "Sätta upp hylla utan att borra",
  description:
    "Hylla utan borr i hyresrätt: yta, maxvikt, tejp-skruv och klämhylla. Kort guide. Inte juridisk rådgivning.",
};

export default function HyllaUtanBorraPage() {
  const hylla = getProduct("hylla-no-drill");
  const tesaTung = getProduct("tesa-skruv-tung");
  const tesaLatt = getProduct("tesa-skruv-latt");

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
          Hylla utan att borra
        </h1>
        <p className="text-lg text-stone-600">
          Förvaring utan hål i väggen — om ytan är rätt och ni håller er under
          maxvikten.
        </p>
        <ContractNote />
      </header>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          Viktigt att tänka på innan ni börjar
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-stone-800">
              Underlag och fäste:
            </strong>{" "}
            Självhäftande lösningar kräver en ren, slät och fast yta, till
            exempel målad betong, gips eller kakel. De fäster inte på
            papperstapet (eftersom tapeten släpper från väggen), porösa ytor
            eller dammiga väggar.
          </li>
          <li>
            <strong className="font-medium text-stone-800">Fukt:</strong> I
            badrum gör den höga luftfuktigheten att klistret med tiden förlorar
            sin fästförmåga.
          </li>
          <li>
            <strong className="font-medium text-stone-800">Maxvikt:</strong>{" "}
            Självhäftande lösningar klarar oftast bara ett par kilos belastning.
            För tyngre hyllor är klämkonstruktioner mellan golv och tak ett bra
            alternativ, medan tunga möbler och TV-apparater alltid kräver skruv
            och plugg.
          </li>
          <li>
            <strong className="font-medium text-stone-800">Hyresavtal:</strong>{" "}
            Kontrollera alltid ert{" "}
            <Link
              href="/guide/kolla-kontraktet"
              className="underline underline-offset-2 hover:text-stone-800"
            >
              hyreskontrakt
            </Link>{" "}
            eller fråga fastighetsägaren om ni är osäkra på vad som gäller för
            er bostad.
          </li>
        </ul>
        <p>
          Hyresro är inte juridisk rådgivning. Mer om vad som får ändras finns
          hos{" "}
          <a
            href="https://www.hyresgastforeningen.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-800 underline underline-offset-2"
          >
            Hyresgästföreningen
          </a>
          .{" "}
          <Link
            href="/guide/kolla-kontraktet"
            className="text-sage-800 underline underline-offset-2"
          >
            Läs kontraktet
          </Link>{" "}
          och{" "}
          <Link
            href="/guide/borra-i-hyresratt"
            className="text-sage-800 underline underline-offset-2"
          >
            guiden om borr
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          Steg för steg: Så monterar ni självhäftande produkter
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <strong className="font-medium text-stone-800">Rengör ytan:</strong>{" "}
            Torka av väggen noggrant med isopropanol eller ett fettlösande
            rengöringsmedel.
          </li>
          <li>
            <strong className="font-medium text-stone-800">Låt torka:</strong> Se
            till att ytan är helt torr innan ni sätter igång.
          </li>
          <li>
            <strong className="font-medium text-stone-800">Pressa fast:</strong>{" "}
            Tryck den självhäftande produkten hårt mot väggen under den tid som
            tillverkaren rekommenderar.
          </li>
          <li>
            <strong className="font-medium text-stone-800">Låt härda:</strong>{" "}
            Vänta den angivna tiden (ofta 12–24 timmar) innan ni belastar
            upphängningen.
          </li>
          <li>
            <strong className="font-medium text-stone-800">Belasta rätt:</strong>{" "}
            Montera hyllan och se till att vikten fördelas jämnt.
          </li>
        </ol>
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
