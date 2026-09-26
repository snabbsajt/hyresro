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
      <p className="text-sm text-stone-600">
        {site.operator}
        <br />
        E-post: {site.contactEmail}
      </p>
      <ContactForm />
    </article>
  );
}
