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
  title: "Får man borra i hyresrätt?",
  description:
    "Vad som oftast gäller. Kontraktet styr. Alternativ utan borr. Inte juridisk rådgivning.",
  alternates: { canonical: "/guide/borra-i-hyresratt" },
};

export default async function BorraIHyresrattPage() {
  const meta = getGuide("borra-i-hyresratt")!;
  const products = (
    await Promise.all(meta.productSlugs.map((s) => getProduct(s)))
  ).filter(Boolean);

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/guide", label: "Guider" },
            { label: "Får man borra i hyresrätt?" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">Får man borra i hyresrätt?</h1>
        <p className="text-lg">
          Små hål för tavlor räknas oftast som normalt slitage.{" "}
          <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2">
            Kontraktet
          </Link>{" "}
          kan säga nej.
        </p>
      </header>

      {meta.answer ? <GuideAnswerBox answer={meta.answer} /> : null}
      <ContractBox />

      <section className="space-y-3 leading-relaxed">
        <p>
          Hyreslagen ger ett golv: ni ska vårda lägenheten och lämna den i skick, med normalt
          slitage. Ett par spikhål för tavlor brukar räknas dit. Kakel, bärande vägg, el,
          balkongräcke och TV-fäste gör det inte. Där är det värden som ska säga ja först.
        </p>
        <p>
          Många kontrakt är strängare än lagen. Står det att hål i vägg inte är tillåtna i
          särskilda villkor eller husordning gäller det, även om grannen borrar. Läs pappret.
          Fråga skriftligt om ni är osäkra. Vi är inte jurister.
        </p>
      </section>

      <section className="space-y-3 leading-relaxed">
        <h2 className="text-xl font-semibold">Mer om reglerna</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Vårdplikt. Lägenheten ska lämnas i skick, med normalt slitage.</li>
          <li>Avtalet kan vara strängare än lagen.</li>
          <li>Kakel, TV-fäste, el och balkong: fråga först.</li>
        </ul>
        <p>
          Läs mer hos{" "}
          <a
            href="https://www.hyresgastforeningen.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Hyresgästföreningen
          </a>
          .
        </p>
      </section>

      <Faq
        items={[
          {
            q: "Får man borra i hyresrätt?",
            a: "Ofta ja för små hål till tavlor. Kontraktet kan förbjuda det. Läs särskilda villkor och husordning först.",
          },
          {
            q: "Räknas hål som slitage?",
            a: "Mindre spikhål räknas oftast som normalt slitage. Större hål, kakel och TV-fäste gör det oftast inte.",
          },
          {
            q: "Måste man spackla igen?",
            a: "Lämna lägenheten i avtalets skick. Många värdar vill ha små hål igenspacklade. Fråga om ni är osäkra.",
          },
        ]}
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Utan borr när det räcker</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>

      <GuideNext slug="borra-i-hyresratt" />
    </article>
  );
}
