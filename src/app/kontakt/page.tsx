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
      <p className="max-w-xl leading-relaxed">
        Frågor om sajten går hit. Köp, retur och reklamation tas med butiken ni handlade av.
      </p>
      <p className="max-w-xl text-sm text-stone-400">
        Knappen öppnar ert mejl mot {site.contactEmail}. Inget sparas på sidan.
      </p>
      <ContactForm />
    </article>
  );
}
