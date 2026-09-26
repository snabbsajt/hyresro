import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";

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
          Sajten körs på Vercel. Där kan tekniska loggar uppstå (till exempel IP och tidpunkt)
          för drift och felsökning. Vi säljer inte sådana uppgifter.
        </p>
        <p>
          Skickar ni meddelande via{" "}
          <Link href="/kontakt" className="underline underline-offset-2">
            kontaktformuläret
          </Link>{" "}
          behandlar vi namn, e-post och meddelande för att kunna svara. Uppgifterna sparas inte i ett
          eget register på sajten. Vill ni att ett mejl raderas: skriv det i ett nytt meddelande.
        </p>
        <p>
          Klickar ni en butikslänk kan butiken eller dess nätverk sätta egna kakor. Det styrs av deras villkor.
        </p>
        <p>
          Ansvarig för sajten och kontaktuppgifter enligt e-handelslagen anges på{" "}
          <Link href="/kontakt" className="underline underline-offset-2">
            kontaktsidan
          </Link>{" "}
          när de är ifyllda.
        </p>
      </div>
    </article>
  );
}
