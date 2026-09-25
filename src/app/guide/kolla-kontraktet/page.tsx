import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Så läser ni hyreskontraktet innan ni sätter upp något",
  description:
    "Var i hyresavtalet reglerna står, vad som oftast gäller borr och fästen, och när ni ska fråga värden. Inte juridisk rådgivning.",
};

export default function KollaKontraktetPage() {
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
          Så läser ni kontraktet
        </h1>
        <p className="text-lg text-stone-600">
          Avtalet styr före generella tips. Hyreslagen är golvet. Ert kontrakt
          kan vara strängare.
        </p>
      </header>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">Var ni tittar</h2>
        <p>Gå igenom pappret eller PDF:en i den här ordningen:</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Förstasidans särskilda villkor.</li>
          <li>Bilagor — ofta “husordning” eller “trivselregler”.</li>
          <li>
            Rubriker som ändringar i lägenheten, ingrepp, underhåll eller skick
            vid avflytt.
          </li>
        </ol>
        <p>
          Hittar ni inget om borr eller tavlor är det ändå inte fritt fram.
          Vissa värdar tar upp det först vid besiktningen.
        </p>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          Vad som oftast står
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Borr och fast montering i vägg, tak eller karm.</li>
          <li>Målning och tapet — ibland tillåtet i neutrala kulörer.</li>
          <li>Persienner, rullgardiner och balkong.</li>
          <li>
            El: extra uttag, taklampa i betong. Sladdlösa grejer är en annan
            sak.
          </li>
        </ul>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          Vad lagen säger i korthet
        </h2>
        <p>
          Som hyresgäst har ni vårdplikt. Mindre hål för tavlor och hyllor
          räknas oftast som normalt slitage. Ni får på egen bekostnad måla,
          tapetsera och göra jämförliga åtgärder (12 kap. 24 a § jordabalken).
          Större ingrepp kräver samtycke.
        </p>
        <p>
          Det här är inte juridisk rådgivning. Läs mer hos{" "}
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
          Andra hand och inneboende
        </h2>
        <p>
          Står någon annan på kontraktet frågar ni den personen — och i många
          fall värden. Andrahandsregler är ofta striktare än förstahand.
        </p>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          Om det är oklart
        </h2>
        <p>
          Mejla värden. Skriv vad ni vill sätta upp och hur. Spara svaret.
          Inget svar är inte samma sak som ja.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-stone-800">Vidare</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/guide/borra-i-hyresratt"
              className="text-sage-800 underline underline-offset-2"
            >
              Får man borra i hyresrätt?
            </Link>
          </li>
          <li>
            <Link
              href="/guide/hylla-utan-borra"
              className="text-sage-800 underline underline-offset-2"
            >
              Hylla utan borr
            </Link>
          </li>
        </ul>
      </section>

      <Disclosure compact />
    </article>
  );
}
