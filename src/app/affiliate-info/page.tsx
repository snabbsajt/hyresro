import type { Metadata } from "next";
import Link from "next/link";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Så finansieras sajten",
  description:
    "Hur Hyresro finansieras: vissa butikslänkar kan ge provision. Priset ändras inte.",
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
          Vissa länkar till butiker på Hyresro är reklam. Om ni klickar och
          handlar via dem kan vi få provision från återförsäljaren. Priset ni
          betalar ändras inte.
        </p>
        <p>
          Provisionen styr inte vilka produkter vi nämner. Vi rekommenderar
          lösningar som passar hyresrätt — inte för att någon betalar mer.
        </p>
        <p>
          Hyresro ger praktiska tips, inte juridisk rådgivning. Ert eget{" "}
          <Link
            href="/guide/kolla-kontraktet"
            className="underline underline-offset-2 hover:text-stone-800"
          >
            hyresavtal
          </Link>{" "}
          och hyresvärden avgör vad som gäller i er lägenhet.
        </p>
        <p>
          Frågor om länkarna? Titta vidare i menyn under Om Hyresro och
          Integritet.
        </p>
      </div>
    </article>
  );
}
