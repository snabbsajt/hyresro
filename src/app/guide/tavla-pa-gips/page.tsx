import type { Metadata } from "next";
import Link from "next/link";
import { ContractNote } from "@/components/ContractNote";
import { ProductCard } from "@/components/ProductCard";
import { Faq } from "@/components/Faq";
import { getProduct } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";

export const metadata: Metadata = {
  title: "Hänga tavla på gips i hyresrätt utan att borra",
  description:
    "Command och Tesa på gipsvägg: vikt, yta och hur ni tar ner utan att färgen följer med.",
};

export default async function TavlaPage() {
  const command = await getProduct("command-tavel");
  const tesaLatt = await getProduct("tesa-skruv-latt");
  const tesaTung = await getProduct("tesa-skruv-tung");

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/produkter", label: "Alla produkter" },
            { href: "/fasten", label: "Fästen" },
            { label: "Tavla på gips" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">Tavla på gips utan att borra</h1>
        <p>Remsa på slät målad gips. Inte spegel, inte TV, inte tapet.</p>
        <p className="flex flex-wrap gap-x-3 text-sm text-stone-500">
          <ContractNote />
        </p>
      </header>

      <section className="space-y-3">
        <p>
          Gips tål en tejp-krok. Den tål inte att ni struntar i maxvikten. Command anger vikt
          per remsa — räkna ramen plus glas. En förpackning märkt 5 kg gäller inte fem kilo om
          ni bara sätter en av fyra remsor. Följ antalet som står på lappen.
        </p>
        <p>
          Spårlöst är ett säljord. Sanningen är: på slät, härdad färg och om ni drar remsan
          längs väggen enligt 3M lämnar det sällan märke. På färsk färg, kalkfärg och tapet
          följer ytskiktet med. Testa bakom en dörr först om väggen känns osäker.
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
          . Läs först.
        </p>
      </section>

      <Faq
        items={[
          {
            q: "Håller Command på gips?",
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
        <h2 className="text-xl font-semibold">Produkter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[command, tesaLatt, tesaTung].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>
    </article>
  );
}
