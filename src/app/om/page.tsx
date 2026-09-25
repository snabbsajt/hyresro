import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Om Hyresro",
  description:
    "Hyresro samlar praktiska tips för att inreda hyresrätt utan att riskera depositionen.",
};

export default function OmPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
        Om {site.name}
      </h1>
      <div className="space-y-4 leading-relaxed text-stone-700">
        <p>
          {site.name} är en svensk sajt om att inreda hyresrätt utan onödiga
          skador. Tagline: {site.tagline}
        </p>
        <p>
          Vi samlar produkter, korta guider och checklistor. Tonen är saklig.
          Vi ger ingen juridisk rådgivning — kolla ditt kontrakt och fråga
          hyresvärden vid behov.
        </p>
        <p>
          Kontakt:{" "}
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
