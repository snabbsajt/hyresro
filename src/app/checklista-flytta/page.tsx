import type { Metadata } from "next";
import Link from "next/link";
import { ContractNote } from "@/components/ContractNote";
import { Disclosure } from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Checklista: flytta in och ut",
  description:
    "Checklista för flytt in och ut i hyresrätt: dokumentera, ta ner fästen och återställ ytor.",
};

export default function ChecklistaFlyttaPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
          Checklista: flytta in och ut
        </h1>
        <p className="max-w-xl leading-relaxed text-stone-700">
          Fota allt innan du bär in möblerna – en noggrann dokumentation är ditt
          bästa skydd mot tvister och innehållen deposition vid utflyttningen.
          Gå igenom bostaden metodiskt, både när du flyttar in och ut.
        </p>
        <ContractNote />
      </header>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          När du flyttar in:
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-stone-800">
              Dokumentera befintliga skador.
            </strong>{" "}
            Gå igenom kontraktet tillsammans med hyresvärden och fotografera
            alla märken, repor och slitage.
          </li>
          <li>
            <strong className="font-medium text-stone-800">
              Kontrollera säkerheten.
            </strong>{" "}
            Verifiera att brandvarnare och brandfilt finns på plats och att
            befintliga upphängningar sitter säkert.
          </li>
          <li>
            <strong className="font-medium text-stone-800">
              Planera möbleringen direkt.
            </strong>{" "}
            Det minimerar onödigt håltagning i väggarna senare.
          </li>
        </ul>
        <p>
          Osäker på kontraktsvillkor?{" "}
          <Link
            href="/guide/kolla-kontraktet"
            className="text-sage-800 underline underline-offset-2"
          >
            Så läser ni kontraktet
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">
          När du flyttar ut:
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-stone-800">
              Ta ner fästena skonsamt.
            </strong>{" "}
            Demontera borrfria fästen enligt tillverkarens anvisningar så att
            underlaget inte skadas.
          </li>
          <li>
            <strong className="font-medium text-stone-800">
              Återställ ytorna.
            </strong>{" "}
            Spackla bara igen borrhål om avtalet kräver det. Fota sedan hela
            bostaden när den är tömd och slutstädad.
          </li>
        </ul>
      </section>

      <Disclosure compact />
    </div>
  );
}
