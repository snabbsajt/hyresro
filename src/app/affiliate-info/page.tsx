import type { Metadata } from "next";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Så finansieras sajten",
  description:
    "Hur Hyresro finansieras: vissa butikslänkar är reklam. Priset ändras inte.",
};

export default function AffiliateInfoPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
        Så finansieras sajten
      </h1>
      <BackLink />
      <div className="space-y-4 leading-relaxed text-stone-700">
        <p>
          Hyresro är gratis att använda. En del länkar till butiker är reklam.
          Klickar ni er vidare och handlar kan vi få provision från butiken
          eller ett affiliatenätverk.
        </p>
        <p>
          Provisionen läggs inte på ert pris. Den påverkar inte vilka produkter
          som nämns i guiderna. Vi väljer efter hur grejen fästs, vad den tål
          och om den går att ta ner vid flytt — inte efter högst provision.
        </p>
        <p>
          Länkarna är märkta som reklam enligt marknadsföringslagen. Frågor om
          ett köp tas med butiken, inte med oss.
        </p>
      </div>
    </article>
  );
}
