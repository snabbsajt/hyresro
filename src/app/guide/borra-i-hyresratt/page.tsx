import type { Metadata } from "next";
import Link from "next/link";
import { ContractNote } from "@/components/ContractNote";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Får man borra i hyresrätt?",
  description:
    "Kort om vad som oftast gäller när ni vill borra i en hyresrätt. Kontraktet styr. Alternativ utan borr när det räcker. Inte juridisk rådgivning.",
};

const related = products.filter((p) =>
  ["tesa-skruv-latt", "tesa-skruv-tung", "hylla-no-drill"].includes(p.slug),
);

export default function BorraIHyresrattPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm text-stone-500">
          <Link href="/" className="hover:underline">
            Hem
          </Link>{" "}
          / Guider
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
          Får man borra i hyresrätt?
        </h1>
        <BackLink />
        <p className="text-lg text-stone-600">
          Oftast: små hål för tavlor räknas som normalt slitage.{" "}
          <Link
            href="/guide/kolla-kontraktet"
            className="underline underline-offset-2 hover:text-stone-800"
          >
            Kontraktet
          </Link>{" "}
          kan säga nej. Större hål, kakel och el är en annan sak.
        </p>
        <ContractNote />
      </header>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">Kort svar</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Hyreslagen ger er vårdplikt. Lägenheten ska lämnas i skick, med
            hänsyn till normalt slitage.
          </li>
          <li>
            Mindre hål för tavlor och lätta hyllor godtas ofta. Det är praxis —
            inte en garanti.
          </li>
          <li>
            Avtalet eller husordningen kan vara strängare än lagen. Då gäller
            avtalet.
          </li>
          <li>
            Andra hand: fråga den som står på{" "}
            <Link
              href="/guide/kolla-kontraktet"
              className="underline underline-offset-2 hover:text-stone-800"
            >
              kontraktet
            </Link>
            , och ofta värden.
          </li>
        </ul>
        <p>
          Hyresro är inte jurist. Läs mer hos{" "}
          <a
            href="https://www.hyresgastforeningen.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-800 underline underline-offset-2"
          >
            Hyresgästföreningen
          </a>
          .
        </p>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          När ni bör fråga först
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Kakel, klinker, natursten, betong i bärande vägg.</li>
          <li>Många eller stora hål, skenor, TV-fäste, tunga hyllor.</li>
          <li>El: nya uttag, hål för kabel i vägg.</li>
          <li>Balkongräcke och fasad — nästan alltid värdens sak.</li>
        </ul>
        <p>
          Mejla värden. Skriv vad, var och hur. Spara svaret. Tystnad är inte
          ja.
        </p>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          Om ni ändå borrar
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Hitta regeln eller mejla värden först.</li>
          <li>Undvik kakel och rörstråk. En enkel rörsökare räcker långt.</li>
          <li>Små pluggar. Inte onödigt stora hål.</li>
          <li>Spara plugg och spackel till avflytt om värden kräver återställning.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">
          Utan borr när det räcker
        </h2>
        <p className="leading-relaxed text-stone-700">
          Tavla, krok och lätt hylla går ofta med tejp-skruv eller klämfäste.
          Kolla maxvikt och yta. Planera borttagning redan nu.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p className="text-sm">
          <Link
            href="/guide/hylla-utan-borra"
            className="text-sage-800 underline underline-offset-2"
          >
            Guide: hylla utan borr
          </Link>
          {" · "}
          <Link
            href="/guide/rullgardin-utan-borra"
            className="text-sage-800 underline underline-offset-2"
          >
            Rullgardin utan borr
          </Link>
        </p>
      </section>
    </article>
  );
}
