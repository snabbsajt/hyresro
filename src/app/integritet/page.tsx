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
      <div className="max-w-2xl space-y-4 leading-relaxed">
        <h2 className="text-xl font-semibold">Personuppgiftsansvarig</h2>
        <p>
          {site.name}. Privatperson, Stockholm. E-post:{" "}
          <a href={`mailto:${site.contactEmail}`} className="underline underline-offset-2">
            {site.contactEmail}
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold">Vad vi behandlar</h2>
        <p>
          Inget konto. Inget nyhetsbrev. Ingen egen statistik-cookie just nu. Om ni skriver till
          oss via{" "}
          <Link href="/kontakt" className="underline underline-offset-2">
            kontaktformuläret
          </Link>{" "}
          öppnas ert mejlprogram mot adressen ovan. Då får vi namn, er e-post och meddelandet.
          Det används bara för att svara. Rättslig grund: berättigat intresse att hantera
          förfrågan. Vi sparar inte formuläret på sajten. Mejl raderas när ärendet är klart,
          senast inom ett år om det inte behövs längre för att visa vad som sagts.
        </p>

        <h2 className="text-xl font-semibold">Tekniska loggar</h2>
        <p>
          Sajten körs på Vercel. Där kan IP-adress, tidpunkt och sökväg loggas för drift och
          säkerhet. Vercel är personuppgiftsbiträde för den driften. Vi säljer inte loggar.
        </p>

        <h2 className="text-xl font-semibold">Kakor och butikslänkar</h2>
        <p>
          Hyresro sätter ingen egen cookie för analys just nu. När ni klickar vidare till en
          butik kan den butiken, och i framtiden ett affiliatenätverk, sätta kakor för att räkna
          klick och köp. Det styrs av deras villkor.
        </p>

        <h2 className="text-xl font-semibold">Era rättigheter</h2>
        <p>
          Ni kan begära tillgång, rättelse eller radering av mejl vi har fått från er. Skriv
          till samma adress. Klagomål på personuppgiftshantering kan lämnas till Integritetsskyddsmyndigheten.
        </p>
      </div>
    </article>
  );
}
