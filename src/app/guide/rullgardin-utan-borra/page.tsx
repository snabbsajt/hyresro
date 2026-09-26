import type { Metadata } from "next";
import Link from "next/link";
import { ContractNote } from "@/components/ContractNote";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";
import { getProduct } from "@/data/products";

export const metadata: Metadata = {
  title: "Rullgardin utan att borra i hyresrätt",
  description:
    "Så sätter ni upp rullgardin med klämfäste i hyresrätt. Mått, fönsterbåge, mörkläggning och när skruvar i karm kräver att ni läser kontraktet.",
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
          Rullgardin utan att borra
        </h1>
        <p className="text-lg text-stone-600">
          Klämfäste i fönsterbågen. Inga hål i vägg. Det är standardvalet i
          hyresrätt — om bågen tål klämmorna.
        </p>
        <ContractNote />
      </header>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">Kort svar</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Klämfäste (ibland “clamp” eller “utan skruv”) sitter på bågen, inte
            i väggen.
          </li>
          <li>Trä- och PVC-bågar fungerar oftast. Aluminium kan slira.</li>
          <li>
            Skruvar i karm eller vägg är ett annat beslut —{" "}
            <Link
              href="/guide/kolla-kontraktet"
              className="underline underline-offset-2 hover:text-stone-800"
            >
              läs kontraktet
            </Link>{" "}
            först.
          </li>
          <li>
            Mörkläggning finns både med klämfäste och med skruv. Välj efter
            hur ni får montera.
          </li>
        </ul>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">Mät rätt</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Läs produktens måttanvisning. IKEA och Jysk mäter inte likadant.
          </li>
          <li>
            Bredd: oftast glasets bredd eller bågens insida. Inte hela karmen
            om ni inte vet att fästet ska sitta där.
          </li>
          <li>Höjd: från där klämmorna sitter ner till där tyget ska sluta.</li>
          <li>Skriv ner två mått. Beställ inte på ögonmått.</li>
        </ol>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">Montera</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Torka bågen. Fett gör att klämmor slirar.</li>
          <li>
            Sätt klämmorna enligt instruktion. Dra inte så hårt att listen
            spricker.
          </li>
          <li>Klicka i rullen. Testa upp och ner några gånger.</li>
          <li>
            Kolla att fönstret fortfarande går att öppna och att tyget inte
            skaver på handtaget.
          </li>
        </ol>
        <p>
          Tar ni bort gardinen vid flytt: spara klämmorna. Märken i lacken på
          bågen är ovanliga om ni inte överdragit.
        </p>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          När klämfäste inte räcker
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Mycket breda fönster — en rulle blir sladdrig.</li>
          <li>Båge i metall utan grepp.</li>
          <li>Takfönster och vissa altandörrar.</li>
        </ul>
        <p>
          Då är det antingen två rullar, plisségardin med annan fästmetod, eller
          skruv. Skruv ={" "}
          <Link
            href="/guide/kolla-kontraktet"
            className="text-sage-800 underline underline-offset-2"
          >
            läs kontraktet
          </Link>{" "}
          och ev.{" "}
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
          {[klam, mork].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>

      <Disclosure compact />
    </article>
  );
}
