import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";

export const metadata: Metadata = {
  title: "Om oss och annonsering",
  description: "Vad Hyresro är och hur affiliatelänkar fungerar.",
};

export default function OmPage() {
  return (
    <article className="space-y-6">
      <Crumbs items={[{ label: "Om oss och annonsering" }]} />
      <h1 className="text-3xl font-semibold tracking-tight">Om oss och annonsering</h1>
      <div className="space-y-4 leading-relaxed text-stone-700">
        <p>
          Hyresro är en fristående guide för den som bor i hyresrätt i Sverige.
          Vi samlar sätt att inreda utan onödiga hål, och vad som oftast gäller innan ni borrar.
        </p>
        <p>
          Vi är inte hyresvärd, inte jurist och inte butik. Texten ersätter inte{" "}
          <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2">
            kontraktet
          </Link>{" "}
          eller värdens besked.
        </p>
        <h2 className="text-xl font-semibold text-[#1A1A1A]">Finansiering</h2>
        <p>
          Vissa länkar på sajten är affiliatelänkar (reklam enligt marknadsföringslagen).
          Klickar ni vidare till en återförsäljare och handlar kan vi få provision.
          Det ändrar inte priset ni betalar. Köpet sluts med butiken, inte med Hyresro.
        </p>
        <p>
          Vi väljer produkter efter hur de fästs och om de går att ta ner — inte efter högst provision.
        </p>
      </div>
    </article>
  );
}
