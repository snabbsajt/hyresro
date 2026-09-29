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
  title: "Sätta upp hylla utan att borra i hyresrätt",
  description:
    "Hylla utan borr i hyresrätt: självhäftande hylla, spännstång i nisch, maxvikt och hur ni tar ner utan att färgen följer med.",
  alternates: { canonical: "/guide/hylla-utan-borra" },
  openGraph: {
    url: "/guide/hylla-utan-borra",
  },
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
            { href: "/losning/forvaring", label: "Förvaring" },
            { label: "Hylla utan att borra" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">
          Hylla utan att borra i hyresrätt
        </h1>
        <p className="max-w-2xl text-lg">
          Ja — på slät torr yta och under maxvikten. Tejphylla ger snabb väggplats; spännstång
          tar nisch utan lim. Tung last och TV hör hemma under{" "}
          <Link href="/guide/borra-i-hyresratt" className="underline underline-offset-2">
            får man borra?
          </Link>
          .
        </p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
          <Link href="/losning/forvaring" className="underline underline-offset-2 hover:text-white">
            Mer förvaring utan borr
          </Link>
          <Link href="/losning/badrum" className="underline underline-offset-2 hover:text-white">
            Fixa badrummet
          </Link>
          <Link href="/forvaring" className="underline underline-offset-2 hover:text-white">
            Alla förvaring
          </Link>
        </p>
      </header>

      {meta.answer ? <GuideAnswerBox answer={meta.answer} /> : null}
      <ContractBox />

      <section className="space-y-3">
        <p>
          Tejp och självhäftande fästen håller på färgad slät vägg eller kakelplatta. De släpper
          på papperstapet, strukturputs och i badrum där imma sitter kvar. Maxvikten på
          förpackningen gäller hela hyllan plus det ni ställer på den — inte bara själva brädan.
        </p>
        <p>
          Den vanligaste skadan vid avflytt är inte att hyllan ramlar, utan att färgen följer med
          när man sliter loss. Följ tillverkarens avdragningsmetod. Dra inte rakt ut från väggen.
          Vill ni slippa tejp helt: spännstång i nisch eller fristående hylla — se{" "}
          <Link href="/losning/forvaring" className="underline underline-offset-2">
            förvaring utan borr
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Innan ni börjar</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Slät målad vägg eller kakel. Inte papperstapet.</li>
          <li>Fukt i badrum släpper klistret över tid — räkna med kortare livslängd.</li>
          <li>Tunga saker och TV-fäste kräver skruv — det är en annan fråga.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Montera</h2>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Rengör ytan. Låt torka.</li>
          <li>Pressa enligt tillverkaren.</li>
          <li>Vänta den tid som står på förpackningen innan last.</li>
          <li>Vid flytt: följ avdragningsremsan — inte rakt ut från väggen.</li>
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
            q: "Håller en tejphylla i hyresrätt?",
            a: "På slät, torr yta och under maxvikt. Inte på tapet och sällan länge i fuktigt badrum.",
          },
          {
            q: "Hur tar man ner den utan att färgen följer med?",
            a: "Följ tillverkaren. De flesta tejp-system har en avdragningsmetod längs väggen — dra aldrig rakt ut.",
          },
          {
            q: "Kan man sätta TV på tejp?",
            a: "Nej. TV-fäste är ett ingrepp. Fråga värden.",
          },
          {
            q: "Alternativ utan tejp?",
            a: "Spännstång i nisch eller dörrpost, och fristående hyllor/klädhängare som flyttar med er.",
          },
        ]}
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Hylla, kroklist och spännstång — utan borr</h2>
        <p className="max-w-2xl text-sm text-stone-400">
          Tejphylla för slät vägg, kroklist när ni vill ha flera krokar, spännstång när ni vill
          slippa lim.
        </p>
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
          "Spännstång i nisch om tejpen känns osäker.",
        ]}
      />
    </article>
  );
}
