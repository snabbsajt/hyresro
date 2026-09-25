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
        <h2 className="text-xl font-semibold text-stone-800">Kort svar</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Bäst ytor: kakel, glas, metall och slät målad vägg. Tapet och
            strukturputz håller sämre.
          </li>
          <li>
            Maxvikten på förpackningen gäller. Överlast är vanligaste orsaken
            till fall.
          </li>
          <li>
            Tejp-skruv (t.ex. Powerbond): fäste på väggen, hylla eller krok
            ovanpå. Bra för lätta till medeltunga grejer.
          </li>
          <li>
            Klämhylla: kläms mot något plant (hyllplan, skåpkant) — ingen tejp på
            väggen. Annat användningsområde.
          </li>
        </ul>
        <p>
          Hyresro är inte juridisk rådgivning. Kontraktet styr. Mer om vad som
          får ändras finns hos{" "}
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

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">Gör så här</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Rengör ytan. Fett, damm och kalk gör att tejpen släpper. Torka torrt.
          </li>
          <li>
            Tryck fast fästet enligt instruktion. Hela ytan ska sitta mot
            underlaget — inte bara kanterna.
          </li>
          <li>
            Vänta den tid tillverkaren anger innan ni hänger något. Ofta flera
            timmar, ibland ett dygn.
          </li>
          <li>
            Lasta inte fullt dag 1. Börja lätt. Öka vikten när ni sett att det
            sitter.
          </li>
        </ol>
        <p>
          Spara borttagningsinstruktionen till flytt. Fel metod river färg.
        </p>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          När det inte håller
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Tapet, struktur, gipsdamm och fuktiga ytor (många badrum).</li>
          <li>Tung TV, stora bokhyllor, speglar över maxvikten.</li>
          <li>Yta som fortfarande är kall eller fuktig efter städning.</li>
        </ul>
        <p>
          Då är det antingen annan förvaring, eller borr. Borr ={" "}
          <Link
            href="/guide/kolla-kontraktet"
            className="text-sage-800 underline underline-offset-2"
          >
            läs kontraktet
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
