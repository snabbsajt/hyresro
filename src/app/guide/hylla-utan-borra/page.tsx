import type { Metadata } from "next";
import { ContractNote } from "@/components/ContractNote";
import { ProductCard } from "@/components/ProductCard";
import { Faq } from "@/components/Faq";
import { getProduct } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";

export const metadata: Metadata = {
  title: "Sätta upp hylla utan att borra",
  description:
    "Hylla utan borr i hyresrätt: yta, maxvikt och tejp-skruv. Inte juridisk rådgivning.",
};

export default async function HyllaUtanBorraPage() {
  const hylla = await getProduct("hylla-no-drill");
  const tesaTung = await getProduct("tesa-skruv-tung");
  const tesaLatt = await getProduct("tesa-skruv-latt");

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/produkter", label: "Alla produkter" },
            { href: "/fasten", label: "Fästen" },
            { label: "Hylla utan att borra" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">Hylla utan att borra</h1>
        <p className="text-stone-700">
          Fungerar om ytan är slät och ni håller maxvikten.
        </p>
        <p className="flex flex-wrap gap-x-3 text-sm text-stone-500">
          <ContractNote />
        </p>
      </header>
      <section className="space-y-3 text-stone-700">
        <h2 className="text-xl font-semibold">Innan ni börjar</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Slät målad vägg eller kakel. Inte papperstapet.</li>
          <li>Fukt i badrum släpper klistret över tid.</li>
          <li>Tunga saker och TV-fäste kräver skruv — det är en annan fråga.</li>
        </ul>
      </section>
      <section className="space-y-3 text-stone-700">
        <h2 className="text-xl font-semibold">Montera</h2>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Rengör ytan. Låt torka.</li>
          <li>Pressa enligt tillverkaren.</li>
          <li>Vänta den tid som står på förpackningen innan last.</li>
        </ol>
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
        <h2 className="text-xl font-semibold">Produkter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[hylla, tesaTung, tesaLatt].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>
    </article>
  );
}
