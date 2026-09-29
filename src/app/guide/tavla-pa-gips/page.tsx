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
  title: "Hänga tavla på gips i hyresrätt utan att borra",
  description:
    "Tejp-krok på gipsvägg i hyresrätt: vikt, yta och hur ni tar ner utan att färgen följer med.",
  alternates: { canonical: "/guide/tavla-pa-gips" },
  openGraph: {
    url: "/guide/tavla-pa-gips",
  },
};

export default async function TavlaPage() {
  const meta = getGuide("tavla-pa-gips")!;
  const products = (
    await Promise.all(meta.productSlugs.map((s) => getProduct(s)))
  ).filter(Boolean);

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/guide", label: "Guider" },
            { href: "/losning/hanga-upp", label: "Hänga upp" },
            { label: "Tavla på gips" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">
          Tavla på gips utan att borra
        </h1>
        <p className="max-w-2xl text-lg">
          Ja — på slät målad gips och under maxvikten. Tejp-krok räcker till de flesta ramar.
          Spegel, TV och tapet är andra frågor.
        </p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
          <Link href="/losning/hanga-upp" className="underline underline-offset-2 hover:text-white">
            Hänga upp saker
          </Link>
          <Link href="/fasten" className="underline underline-offset-2 hover:text-white">
            Alla fästen
          </Link>
          <Link href="/guide/hylla-utan-borra" className="underline underline-offset-2 hover:text-white">
            Hylla utan borr
          </Link>
        </p>
      </header>

      {meta.answer ? <GuideAnswerBox answer={meta.answer} /> : null}
      <ContractBox />

      <section className="space-y-3">
        <p>
          Gips tål en tejp-krok. Den tål inte att ni struntar i maxvikten. Command anger vikt
          per remsa — räkna ramen plus glas. En förpackning märkt 5 kg gäller inte fem kilo om
          ni bara sätter en av fyra remsor. Följ antalet som står på lappen.
        </p>
        <p>
          Spårlöst är ett säljord. Sanningen är: på slät, härdad färg och om ni drar remsan
          längs väggen enligt tillverkaren lämnar det sällan märke. På färsk färg, kalkfärg och
          tapet följer ytskiktet med. Testa bakom en dörr först om väggen känns osäker.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Gör så här</h2>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Torka väggen. Ingen damm, ingen fukt.</li>
          <li>Tryck fast remsan mot krok och vägg. Vänta den tid tillverkaren anger.</li>
          <li>Vid flytt: dra remsan längs väggen, inte rakt ut.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">När tejpen inte räcker</h2>
        <p>
          Spegel med tjockt glas, stor tavla över soffan, hylla med böcker. Då är det skruv i
          regel eller ett ja från värden. Små hål för tavlor räknas oftast som slitage — men{" "}
          <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2">
            kontraktet kan säga nej
          </Link>
          . Läs först. Mer i{" "}
          <Link href="/guide/borra-i-hyresratt" className="underline underline-offset-2">
            får man borra?
          </Link>
          .
        </p>
      </section>

      <Faq
        items={[
          {
            q: "Håller tejp-krok på gips?",
            a: "På slät, torr, målad gips och under angiven vikt. Inte på tapet.",
          },
          {
            q: "Blir det märken?",
            a: "Ofta inte om ni drar remsan rätt. Färsk färg och svag tapet släpper.",
          },
          {
            q: "Kan man hänga en spegel?",
            a: "Bara om vikten och antalet remsor räcker med marginal. Annars skruv och värdens besked.",
          },
        ]}
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Krokar till tavlan — utan spik</h2>
        <p className="max-w-2xl text-sm text-stone-400">
          Lätt och tung tejp-krok plus enkelkrok för hall och kök. Alla från katalogen.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>

      <GuideNext
        slug="tavla-pa-gips"
        tips={[
          "Räkna ram + glas mot maxvikten på förpackningen.",
          "Testa bakom en dörr om väggen känns osäker.",
          "Dra remsan längs väggen vid flytt — aldrig rakt ut.",
        ]}
      />
    </article>
  );
}
