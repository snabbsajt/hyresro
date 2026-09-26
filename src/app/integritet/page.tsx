import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Integritet och kakor",
  description: "Hur Hyresro hanterar uppgifter och kakor.",
};

export default function IntegritetPage() {
  return (
    <article className="space-y-6">
      <Crumbs items={[{ label: "Integritet och kakor" }]} />
      <h1 className="text-3xl font-semibold tracking-tight">Integritet och kakor</h1>
      <div className="space-y-4 leading-relaxed text-stone-700">
        <p>Inget konto. Inget nyhetsbrev. Ingen egen statistik-cookie just nu.</p>
        <p>
          Sajten körs på Vercel. Där kan tekniska loggar uppstå för drift. Vi säljer inte sådana uppgifter.
        </p>
        <p>
          Meddelande via{" "}
          <Link href="/kontakt" className="underline underline-offset-2">
            kontaktformuläret
          </Link>{" "}
          används bara för att svara.
        </p>
        <p>
          Butikslänkar kan sätta kakor hos återförsäljaren.
        </p>
      </div>
      <p className="text-xs text-stone-500">
        {site.name} · {site.operator} · {site.contactEmail}
      </p>
    </article>
  );
}
