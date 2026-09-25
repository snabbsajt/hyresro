import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Integritet",
  description:
    "Kort information om hur Hyresro hanterar integritet och cookies.",
};

export default function IntegritetPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
        Integritet
      </h1>
      <div className="space-y-4 leading-relaxed text-stone-700">
        <p>
          {site.name} samlar i dagsläget ingen personlig data via formulär.
          Kontakt sker via e-post till {site.email}.
        </p>
        <p>
          Webbplatsen kan använda nödvändig teknik för drift och statistik.
          Om cookies eller analysverktyg läggs till uppdateras den här sidan.
        </p>
        <p>
          Affiliate-partners kan sätta egna cookies när ni klickar vidare till
          deras butik. Se respektive butiks integritetspolicy.
        </p>
        <p>
          Frågor om personuppgifter:{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-sage-800 underline underline-offset-2"
          >
            {site.email}
          </a>
        </p>
      </div>
    </article>
  );
}
