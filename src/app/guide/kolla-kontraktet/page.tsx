import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Så läser ni hyreskontraktet innan ni sätter upp något",
  description:
    "Var reglerna står, vad som oftast gäller borr och fästen, när ni ska fråga värden. Inte juridisk rådgivning.",
};

export default function KollaKontraktetPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ label: "Så läser ni kontraktet" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Så läser ni kontraktet</h1>
        <p className="text-stone-700">
          Avtalet styr före generella tips. Hyreslagen är golvet. Ert kontrakt kan vara strängare.
        </p>
      </header>
      <section className="space-y-3 text-stone-700">
        <h2 className="text-xl font-semibold">Var ni tittar</h2>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Förstasidans särskilda villkor.</li>
          <li>Bilagor — husordning eller trivselregler.</li>
          <li>Rubriker om ändringar, ingrepp, underhåll, skick vid avflytt.</li>
        </ol>
      </section>
      <section className="space-y-3 text-stone-700">
        <h2 className="text-xl font-semibold">Vad lagen säger i korthet</h2>
        <p>
          Vårdplikt. Mindre hål för tavlor räknas oftast som normalt slitage. Större ingrepp kräver samtycke.
          Inte juridisk rådgivning. Läs hos{" "}
          <a href="https://www.hyresgastforeningen.se/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            Hyresgästföreningen
          </a>
          .
        </p>
      </section>
      <Faq
        items={[
          {
            q: "Räcker det att läsa lagen?",
            a: "Nej. Kontraktet kan vara strängare. Börja där.",
          },
          {
            q: "Vem frågar man?",
            a: "Värden eller förvaltaren, skriftligt om det gäller ingrepp.",
          },
        ]}
      />
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/guide/borra-i-hyresratt" className="underline underline-offset-2">
            Får man borra i hyresrätt?
          </Link>
        </li>
        <li>
          <Link href="/guide/hylla-utan-borra" className="underline underline-offset-2">
            Hylla utan att borra
          </Link>
        </li>
      </ul>
    </article>
  );
}
