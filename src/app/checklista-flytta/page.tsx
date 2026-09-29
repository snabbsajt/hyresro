import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { ContractBox } from "@/components/ContractBox";
import { GuideNext } from "@/components/GuideNext";

export const metadata: Metadata = {
  title: "Checklista: flytta in och ut",
  description:
    "Checklista för flytt in och ut i hyresrätt: dokumentera, ta ner fästen och återställ ytor.",
  alternates: { canonical: "/checklista-flytta" },
};

export default function ChecklistaFlyttaPage() {
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
        <p className="max-w-xl leading-relaxed">
          Fota allt innan du bär in möblerna – en noggrann dokumentation är ditt
          bästa skydd mot tvister om skicket vid avflytt.
          Gå igenom bostaden metodiskt, både när du flyttar in och ut.
        </p>
      </header>

      <ContractBox blurb="Läs kontraktets regler om skick vid avflytt innan ni tar ner eller spacklar." />

      <section className="space-y-3 leading-relaxed">
        <h2 className="text-xl font-semibold">När du flyttar in</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-stone-200">Dokumentera befintliga skador.</strong>{" "}
            Gå igenom{" "}
            <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2">
              kontraktet
            </Link>{" "}
            tillsammans med hyresvärden och fotografera alla märken, repor och slitage.
          </li>
          <li>
            <strong className="font-medium text-stone-200">Kontrollera säkerheten.</strong>{" "}
            Verifiera att brandvarnare och brandfilt finns på plats och att befintliga
            upphängningar sitter säkert.
          </li>
          <li>
            <strong className="font-medium text-stone-200">Planera möbleringen direkt.</strong>{" "}
            Det minimerar onödig håltagning i väggarna senare.
          </li>
        </ul>
      </section>

      <section className="space-y-3 leading-relaxed">
        <h2 className="text-xl font-semibold">När du flyttar ut</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-stone-200">Ta ner fästena skonsamt.</strong>{" "}
            Demontera borrfria fästen enligt tillverkarens anvisningar så att underlaget inte
            skadas.
          </li>
          <li>
            <strong className="font-medium text-stone-200">Återställ ytorna.</strong>{" "}
            Spackla bara igen borrhål om avtalet kräver det. Fota sedan hela bostaden när den
            är tömd och slutstädad.
          </li>
        </ul>
      </section>

      <GuideNext slug="checklista-flytta" />
    </div>
  );
}
