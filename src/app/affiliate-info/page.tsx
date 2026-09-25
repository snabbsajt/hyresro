import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Om länkarna",
  description:
    "Affiliate-länkar på Hyresro: information enligt marknadsföringslagen.",
};

export default function AffiliateInfoPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
        Om länkarna
      </h1>
      <div className="space-y-4 leading-relaxed text-stone-700">
        <Disclosure />
        <p>
          I enlighet med marknadsföringslagen vill vi informera om att sajten
          innehåller köplänkar som kallas affiliate-länkar. När ni klickar på en
          sådan länk och genomför ett köp kan vi få ersättning från
          återförsäljaren. Detta medför ingen extra kostnad för er som
          besökare. Provisionen påverkar inte vilka produkter vi väljer att
          skriva om eller rekommendera på sajten. Vi gör inte anspråk på att
          vara ett oberoende testlaboratorium, utan lyfter fram lösningar som
          underlättar inredning i hyresrätt.
        </p>
      </div>
    </article>
  );
}
