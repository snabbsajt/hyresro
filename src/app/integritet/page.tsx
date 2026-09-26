import type { Metadata } from "next";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Integritet",
  description:
    "Hyresro har inget konto och inget nyhetsbrev. Om tekniska loggar och cookies.",
};

export default function IntegritetPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
        Integritet
      </h1>
      <BackLink />
      <div className="space-y-4 leading-relaxed text-stone-700">
        <p>Hyresro har inget konto att skapa och inget nyhetsbrev.</p>
        <p>
          Sidan körs på Vercel. Där kan tekniska loggar uppstå (till exempel IP
          och tidpunkt) för att sajten ska fungera och för att hitta fel. Vi
          säljer inte sådana uppgifter.
        </p>
        <p>
          Just nu sätter vi inga egna cookies för statistik eller profilering.
          Klickar ni en butikslänk kan den butiken eller dess samarbetspartner
          sätta egna kakor. Det styrs av deras villkor.
        </p>
        <p>
          Vill ni veta mer om en konkret butik: läs deras integritetstext innan
          ni handlar.
        </p>
      </div>
    </article>
  );
}
