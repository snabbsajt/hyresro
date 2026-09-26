import type { Metadata } from "next";
import { Crumbs } from "@/components/Crumbs";
import { ContactForm } from "@/components/ContactForm";

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
        Frågor om sajten. Köp tas med butiken.
      </p>
      <ContactForm />
    </article>
  );
}
