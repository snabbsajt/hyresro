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
        <p>
          Inget konto. Inget nyhetsbrev. Ingen egen statistik-cookie just nu.
        </p>
        <p>
          Sajten körs på Vercel. Där kan tekniska loggar uppstå för att sidan ska fungera. Vi
          säljer inte sådana uppgifter.
        </p>
        <p>
          Skriver ni via{" "}
          <Link href="/kontakt" className="underline underline-offset-2">
            kontaktformuläret
          </Link>{" "}
          öppnas ert mejlprogram mot {site.contactEmail}. Vi läser det för att kunna svara och
          sparar inte formuläret på sajten.
        </p>
        <p>
          När ni klickar vidare till en butik kan den butiken sätta egna kakor. Det styrs av
          deras villkor, inte av Hyresro.
        </p>
        <p>
          Vill ni att ett mejl ska raderas: skriv till samma adress.
        </p>
      </div>
      <p className="text-xs text-stone-500">
        {site.name} · {site.operator} · {site.contactEmail}
      </p>
    </article>
  );
}
