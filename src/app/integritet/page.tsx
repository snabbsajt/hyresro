import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Integritet",
  description:
    "Hur Hyresro hanterar integritet: inget konto, ingen publicerad e-post, anonymiserad driftstatistik.",
};

export default function IntegritetPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
        Integritet
      </h1>
        <BackLink />
      <div className="space-y-4 leading-relaxed text-stone-700">
        <p>
          Vi värnar om er personliga integritet och samlar därför inte in mer
          uppgifter än nödvändigt. Ni behöver inte skapa något konto för att
          använda sajten. Webbhotellet och vår tekniska leverantör kan dock
          logga anonymiserad besöksstatistik för drift och säkerhet. Vi skickar
          inga nyhetsbrev och har ingen publicerad e-postadress på
          webbplatsen.
        </p>
      </div>
      <Disclosure />
    </article>
  );
}
