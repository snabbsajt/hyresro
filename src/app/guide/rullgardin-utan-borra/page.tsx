import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Faq } from "@/components/Faq";
import { getProduct } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";
import { GuideAnswerBox } from "@/components/GuideAnswerBox";
import { ContractBox } from "@/components/ContractBox";
import { GuideNext } from "@/components/GuideNext";
import { getGuide } from "@/data/guides";

export const metadata: Metadata = {
  title: "Rullgardin utan att borra i hyresrätt",
  description:
    "Så sätter ni upp rullgardin med klämfäste. Mått, båge, aluminium och när skruv i karm kräver att ni läser kontraktet.",
  alternates: { canonical: "/guide/rullgardin-utan-borra" },
  openGraph: {
    url: "/guide/rullgardin-utan-borra",
  },
};

export default async function RullgardinUtanBorraPage() {
  const meta = getGuide("rullgardin-utan-borra")!;
  const products = (
    await Promise.all(meta.productSlugs.map((s) => getProduct(s)))
  ).filter(Boolean);

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/guide", label: "Guider" },
            { href: "/solskydd", label: "Solskydd" },
            { label: "Rullgardin utan att borra" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">Rullgardin utan att borra</h1>
        <p>Klämfäste i fönsterbågen. Inga hål i vägg — om bågen tål klämmorna.</p>
      </header>

      {meta.answer ? <GuideAnswerBox answer={meta.answer} /> : null}
      <ContractBox />

      <section className="space-y-3">
        <p>
          Klämfästet trycks fast mellan bågens överkant och listen. Det är därför trä och PVC
          brukar fungera, medan aluminium ofta slirar — ytan är slät och bågen fjädrar. Testa
          med handen först: ger listen efter är kläm en dålig idé.
        </p>
        <p>
          Märken på karmen kommer nästan alltid från att man drar åt för hårt eller lämnar
          klemman år efter år mot lackad list. Lägg en tunn filtbit eller den skyddstejp som
          följer med, och ta ner gardinen när ni flyttar — låt den inte sitta som en fast
          installation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Mät</h2>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Läs produktens måttanvisning. Butikerna mäter olika.</li>
          <li>Bredd: glaset eller bågens insida — inte hela karmen på gissning.</li>
          <li>Höjd: från klämmorna ner till där tyget ska sluta.</li>
        </ol>
        <p>
          Vill ni kunna släppa in ljus upptill och täcka nertill är{" "}
          <Link href="/guide/plissegardin-utan-borra" className="underline underline-offset-2">
            plissé med upp/ner
          </Link>{" "}
          oftast enklare än rullgardin.
        </p>
      </section>

      <Faq
        items={[
          {
            q: "Går det utan att borra?",
            a: "Ja, om ni köper modell med klämfäste och bågen tål trycket. Inte alla storlekar har kläm — läs produkttexten, inte bara bilden.",
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
        <h2 className="text-xl font-semibold">Rullgardiner med kläm — utan skruv</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>

      <GuideNext
        slug="rullgardin-utan-borra"
        tips={[
          "Mät bågens insida innan köp — butikerna mäter olika.",
          "Testa greppet på aluminium innan ni beställer.",
        ]}
      />
    </article>
  );
}
