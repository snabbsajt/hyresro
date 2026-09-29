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
  title: "Sätta upp hylla utan att borra",
  description:
    "Hylla utan borr i hyresrätt: yta, maxvikt och tejp-skruv. Inte juridisk rådgivning.",
  alternates: { canonical: "/guide/hylla-utan-borra" },
};

export default async function HyllaUtanBorraPage() {
  const meta = getGuide("hylla-utan-borra")!;
  const products = (
    await Promise.all(meta.productSlugs.map((s) => getProduct(s)))
  ).filter(Boolean);

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/guide", label: "Guider" },
            { href: "/fasten", label: "Fästen" },
            { label: "Hylla utan att borra" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">Hylla utan att borra</h1>
        <p>Fungerar om ytan är slät och ni håller maxvikten.</p>
      </header>

      {meta.answer ? <GuideAnswerBox answer={meta.answer} /> : null}
      <ContractBox />

      <section className="space-y-3">
        <p>
          Tejp och självhäftande skruv håller på färgad slät vägg eller kakelplatta. De släpper
          på papperstapet, strukturputt och i badrum där imma sitter kvar. Maxvikten på
          förpackningen gäller hela hyllan plus det ni ställer på den — inte bara själva
          brädan.
        </p>
        <p>
          Den vanligaste skadan vid avflytt är inte att hyllan ramlar, utan att färgen följer
          med när man sliter loss. Tesa och Command har egna avdragningsremsor. Använd dem.
          Dra inte rakt ut från väggen.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Innan ni börjar</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Slät målad vägg eller kakel. Inte papperstapet.</li>
          <li>Fukt i badrum släpper klistret över tid.</li>
          <li>Tunga saker och TV-fäste kräver skruv — det är en annan fråga.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Montera</h2>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Rengör ytan. Låt torka.</li>
          <li>Pressa enligt tillverkaren.</li>
          <li>Vänta den tid som står på förpackningen innan last.</li>
        </ol>
        <p>
          En tavla är lättare än en hylla. Se{" "}
          <Link href="/guide/tavla-pa-gips" className="underline underline-offset-2">
            tavla på gips
          </Link>{" "}
          om det är ramar ni vill upp.
        </p>
      </section>

      <Faq
        items={[
          {
            q: "Håller en tejphylla?",
            a: "På slät, torr yta och under maxvikt. Inte på tapet och sällan i fuktigt badrum.",
          },
          {
            q: "Hur tar man ner den?",
            a: "Följ tillverkaren. Tesa och Command har egna sätt så färgen inte följer med.",
          },
          {
            q: "Kan man sätta TV på tejp?",
            a: "Nej. TV-fäste är ett ingrepp. Fråga värden.",
          },
        ]}
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Hyllor som sitter — utan borr</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>

      <GuideNext
        slug="hylla-utan-borra"
        tips={[
          "Maxvikten gäller hylla + innehåll — inte bara brädan.",
          "Använd tillverkarens avdragningsmetod vid flytt.",
        ]}
      />
    </article>
  );
}
