import type { Metadata } from "next";
import Link from "next/link";
import { ContractNote } from "@/components/ContractNote";
import { ProductCard } from "@/components/ProductCard";
import { Faq } from "@/components/Faq";
import { getProduct } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";

export const metadata: Metadata = {
  title: "Balkong utan att borra i hyresrätt",
  description:
    "Blomlåda på räcke, ljusslinga på sladd och vad som oftast kräver värdens godkännande.",
};

export default async function BalkongPage() {
  const laCo = await getProduct("blomlada-racke-co");
  const laCdon = await getProduct("blomlada-racke-cdon");
  const slinga = await getProduct("ljusslinga-sladd");

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/produkter", label: "Alla produkter" },
            { href: "/forvaring", label: "Förvaring" },
            { label: "Balkong utan att borra" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">Balkong utan att borra</h1>
        <p>Räcket är värdens. Kläm och sladd går. Skruv i betong eller räcke gör det oftast inte.</p>
        <p className="flex flex-wrap gap-x-3 text-sm text-stone-500">
          <ContractNote />
        </p>
      </header>

      <section className="space-y-3">
        <p>
          En blomlåda som hänger över räcket är den minst bråkiga vägen. Den lämnar inga hål.
          Kolla räckets tjocklek mot lådans mått, och att lådan inte hänger ut över gatan på ett
          sätt husordningen stoppar. Vatten ska rinna i lådan, inte längs fasaden.
        </p>
        <p>
          Insynsskydd, markis och allt som skruvas i bjälklag eller räcke är ett ingrepp. Där
          räcker inte "grannen har en". Mejla förvaltaren. Ljusslinga på batteri eller jordad
          utomhusskena mot befintligt uttag är en annan sak — dra inte ny el.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Det som oftast går</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Blomlåda som kläms på räcket.</li>
          <li>Krukor på golvet. Inga hål.</li>
          <li>Ljusslinga i befintligt uttag, avsedd för utomhus.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Det som oftast kräver ja</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Skruv i räcke, golv eller fasad.</li>
          <li>Markis, fast insynsskydd, parabol.</li>
          <li>El som inte redan finns på balkongen.</li>
        </ul>
        <p>
          <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2">
            Kontrakt och husordning
          </Link>{" "}
          först. Sedan frågan till värden.
        </p>
      </section>

      <Faq
        items={[
          {
            q: "Får man borra i balkongräcket?",
            a: "Räkna med nej tills värden sagt ja. Räcket är inte er vägg.",
          },
          {
            q: "Håller en låda som kläms på räcket?",
            a: "Ja om måttet stämmer och ni inte överlastar. Töm den på hösten så räcket slipper tjälen i blöt jord.",
          },
          {
            q: "Får man sätta ljusslinga?",
            a: "Sladd i befintligt uttag och produkt för utomhus är normalt okej. Ingen ny dosa, ingen skruv i betong.",
          },
        ]}
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Produkter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[laCo, laCdon, slinga].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>
    </article>
  );
}
