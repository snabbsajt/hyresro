import type { Metadata } from "next";
import Link from "next/link";
import { ContractNote } from "@/components/ContractNote";
import { ProductCard } from "@/components/ProductCard";
import { Faq } from "@/components/Faq";
import { getProduct } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";

export const metadata: Metadata = {
  title: "Plisségardin utan att borra i hyresrätt",
  description:
    "Plissé med klämfäste: när den slår rullgardin, hur ni mäter och vad som gäller aluminiumbåge.",
};

export default async function PlissePage() {
  const hven = await getProduct("plissegardin-hven");
  const sonello = await getProduct("plisse-sonello-klam");
  const film = await getProduct("fonsterfilm-dcfix");

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/produkter", label: "Alla produkter" },
            { href: "/solskydd", label: "Solskydd" },
            { label: "Plisségardin utan att borra" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">Plisségardin utan att borra</h1>
        <p>Kläm i bågen. Ljus uppifrån, insyn nertill — utan skruv i karm.</p>
        <p className="flex flex-wrap gap-x-3 text-sm text-stone-500">
          <ContractNote />
        </p>
      </header>

      <section className="space-y-3">
        <p>
          Plissén sitter närmare glaset än en rullgardin. Upp/ner-modellen är poängen i
          hyresrätt: ni kan täcka underdelen mot gatan och låta dagsljus komma in överst. Det
          går inte lika rent med en vanlig rulle.
        </p>
        <p>
          Samma varning som för rullgardin: aluminiumbåge slirar. Och inte alla plisséer i
          butik har kläm — många skruvas i karmen. Läs monteringen, inte bara ordet plissé.
          Karmdjupet måste räcka till skenan. Mät innan ni beställer.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">När plissé slår rullgardin</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Insyn på nedre halvan, ljus på den övre.</li>
          <li>Litet fönster där en rulle ser klumpig ut.</li>
          <li>Ni vill kunna ta ner allt vid flytt utan hål.</li>
        </ul>
        <p>
          Behöver ni totalmörkt i sovrum är{" "}
          <Link href="/guide/rullgardin-utan-borra" className="underline underline-offset-2">
            mörkläggande rullgardin
          </Link>{" "}
          oftast bättre. Plissé ljusdämpar. Den stänger sällan ute allt ljus.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Mät</h2>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Bredd mellan bågens insidor, på tre höjder. Ta det minsta måttet.</li>
          <li>Karmdjup — skenan ska få plats utan att fönstret kämpar emot.</li>
          <li>Kolla att just den storleken säljs med kläm, inte skruvbeslag.</li>
        </ol>
      </section>

      <Faq
        items={[
          {
            q: "Kan man sätta plissé utan borr?",
            a: "Ja, om modellen har klämfäste och bågen tål trycket. Många plisséer skruvas — läs monteringen.",
          },
          {
            q: "Fungerar det på aluminium?",
            a: "Ofta dåligt. Ytan är slät och bågen fjädrar. Testa greppet innan ni köper.",
          },
          {
            q: "Räcker plissé som mörkläggning?",
            a: "Sällan. Den dämpar ljus och tar insyn. Sovrum nattetid vill oftast ha rullgardin.",
          },
        ]}
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Produkter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[hven, sonello, film].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>
    </article>
  );
}
