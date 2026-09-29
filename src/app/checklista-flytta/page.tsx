import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { ContractBox } from "@/components/ContractBox";
import { GuideAnswerBox } from "@/components/GuideAnswerBox";
import { GuideNext } from "@/components/GuideNext";
import { getGuide } from "@/data/guides";

export const metadata: Metadata = {
  title: "Checklista: flytta in och ut",
  description:
    "Checklista för flytt in och ut i hyresrätt: dokumentera, ta ner fästen och återställ ytor — så slipper ni bråk om depositionen.",
  alternates: { canonical: "/checklista-flytta" },
  openGraph: {
    url: "/checklista-flytta",
  },
};

export default function ChecklistaFlyttaPage() {
  const meta = getGuide("checklista-flytta")!;

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/guide", label: "Guider" },
            { label: "Checklista vid flytt" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">
          Checklista: flytta in och ut
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed">
          Fota allt innan ni bär in möblerna. En noggrann dokumentation är ert bästa skydd
          mot tvister om skicket vid avflytt.
        </p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
          <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2 hover:text-white">
            Så läser ni kontraktet
          </Link>
          <Link href="/guide/borra-i-hyresratt" className="underline underline-offset-2 hover:text-white">
            Får man borra?
          </Link>
        </p>
      </header>

      {meta.answer ? <GuideAnswerBox answer={meta.answer} /> : null}
      <ContractBox blurb="Läs kontraktets regler om skick vid avflytt innan ni tar ner eller spacklar." />

      <section className="space-y-3 leading-relaxed">
        <h2 className="text-xl font-semibold">När ni flyttar in</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-stone-200">Dokumentera befintliga skador.</strong>{" "}
            Gå igenom{" "}
            <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2">
              kontraktet
            </Link>{" "}
            och fotografera märken, repor och slitage — gärna med datum i bilden.
          </li>
          <li>
            <strong className="font-medium text-stone-200">Kontrollera säkerheten.</strong>{" "}
            Brandvarnare och brandfilt på plats; befintliga upphängningar som sitter säkert.
          </li>
          <li>
            <strong className="font-medium text-stone-200">Planera möbleringen.</strong>{" "}
            Det minimerar onödig håltagning senare.
          </li>
        </ul>
      </section>

      <section className="space-y-3 leading-relaxed">
        <h2 className="text-xl font-semibold">När ni flyttar ut</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-stone-200">Ta ner fästena skonsamt.</strong>{" "}
            Tejp-krokar, klämfästen och tejphyllor enligt tillverkarens avdragning — inte rakt
            ut från väggen.
          </li>
          <li>
            <strong className="font-medium text-stone-200">Återställ ytorna.</strong>{" "}
            Spackla bara igen borrhål om avtalet kräver det. Fota sedan hela bostaden när den
            är tömd och slutstädad.
          </li>
        </ul>
      </section>

      <GuideNext
        slug="checklista-flytta"
        tips={[
          "Datum i fotona hjälper om värden ifrågasätter skicket.",
          "Lämna aldrig kvar klämgardiner och tejphyllor som «fast» inredning.",
        ]}
      />
    </div>
  );
}
