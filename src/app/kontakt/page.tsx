import type { Metadata } from "next";
import { Crumbs } from "@/components/Crumbs";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta Hyresro.",
};

export default function KontaktPage() {
  return (
    <article className="space-y-6">
      <Crumbs items={[{ label: "Kontakt" }]} />
      <h1 className="text-3xl font-semibold tracking-tight">Kontakt</h1>
      <p className="max-w-xl leading-relaxed text-stone-700">
        Frågor om sajten. Köp och reklamationsärenden tas med butiken ni handlat hos.
      </p>
      {site.contactEmail ? (
        <p className="text-sm text-stone-600">
          E-post: {site.contactEmail}
        </p>
      ) : (
        <p className="text-sm text-stone-600">
          E-postadress publiceras här när den är satt. Formuläret under öppnar ert eget mejlprogram.
        </p>
      )}
      <ContactForm />
    </article>
  );
}
