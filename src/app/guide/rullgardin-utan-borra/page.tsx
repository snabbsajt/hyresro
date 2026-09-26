import type { Metadata } from "next";
import Link from "next/link";
import { ContractNote } from "@/components/ContractNote";
import { ProductCard } from "@/components/ProductCard";
import { Faq } from "@/components/Faq";
import { getProduct } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";

export const metadata: Metadata = {
  title: "Rullgardin utan att borra i hyresrätt",
  description:
    "Så sätter ni upp rullgardin med klämfäste. Mått, båge och när skruv i karm kräver att ni läser kontraktet.",
};

export default async function RullgardinUtanBorraPage() {
  const klam = await getProduct("rullgardin-klamfaste");
  const mork = await getProduct("morklaggning-klam");
  const plisse = await getProduct("plissegardin-hven");

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/produkter", label: "Alla produkter" },
            { href: "/solskydd", label: "Solskydd" },
            { label: "Rullgardin utan att borra" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">Rullgardin utan att borra</h1>
        <p className="text-stone-700">
          Klämfäste i fönsterbågen. Inga hål i vägg — om bågen tål klämmorna.
        </p>
        <p className="flex flex-wrap gap-x-3 text-sm text-stone-500">
          <ContractNote />
        </p>
      </header>
      <section className="space-y-3 text-stone-700">
        <h2 className="text-xl font-semibold">Kort svar</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Klämfäste sitter på bågen, inte i väggen.</li>
          <li>Trä och PVC fungerar oftast. Aluminium kan slira.</li>
          <li>
            Skruv i karm:{" "}
            <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2">
              läs kontraktet
            </Link>{" "}
            först.
          </li>
        </ul>
      </section>
      <section className="space-y-3 text-stone-700">
        <h2 className="text-xl font-semibold">Mät</h2>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Läs produktens måttanvisning. Butikerna mäter olika.</li>
          <li>Bredd: glaset eller bågens insida — inte hela karmen på gissning.</li>
          <li>Höjd: från klämmorna ner till där tyget ska sluta.</li>
        </ol>
      </section>
      <Faq
        items={[
          {
            q: "Går det utan att borra?",
            a: "Ja, om ni köper modell med klämfäste och bågen tål trycket. Inte alla storlekar har kläm.",
          },
          {
            q: "Hur mäter man?",
            a: "Följ butikens anvisning. Mät ofta glasets bredd eller bågens insida, inte hela karmen.",
          },
          {
            q: "Får man skruva i karmen?",
            a: "Det är oftast ett ingrepp. Läs kontraktet och fråga värden innan.",
          },
        ]}
      />
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Produkter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[klam, mork, plisse].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>
    </article>
  );
}
