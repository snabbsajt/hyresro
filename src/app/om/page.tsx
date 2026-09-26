import type { Metadata } from "next";
import Link from "next/link";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Om Hyresro",
  description:
    "Hyresro är en guide för den som bor i hyresrätt i Sverige. Inte hyresvärd, jurist eller butik.",
};

export default function OmPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
        Om Hyresro
      </h1>
      <BackLink />
      <div className="space-y-4 leading-relaxed text-stone-700">
        <p>
          Hyresro är en guide för den som bor i hyresrätt i Sverige. Vi samlar
          sätt att inreda och utrusta lägenheten utan onödiga hål, och vad som
          oftast gäller innan ni borrar.
        </p>
        <p>
          Vi är inte hyresvärd, inte jurist och inte butik. Råd på sajten
          ersätter inte{" "}
          <Link
            href="/guide/kolla-kontraktet"
            className="underline underline-offset-2 hover:text-stone-800"
          >
            kontraktet
          </Link>{" "}
          eller värdens besked. Vid tvekan: läs{" "}
          <Link
            href="/guide/kolla-kontraktet"
            className="underline underline-offset-2 hover:text-stone-800"
          >
            avtalet
          </Link>{" "}
          och fråga den som står som hyresvärd.
        </p>
        <p>
          Vissa länkar leder till butiker. Om ni handlar via dem kan Hyresro få
          provision. Priset för er ändras inte. Mer:{" "}
          <Link
            href="/affiliate-info"
            className="underline underline-offset-2 hover:text-stone-800"
          >
            Så finansieras sajten
          </Link>
          .
        </p>
        <p>
          Praxis kring slitage och ändringar finns hos{" "}
          <a
            href="https://www.hyresgastforeningen.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-stone-800"
          >
            Hyresgästföreningen
          </a>
          . Vi länkar dit när det behövs.
        </p>
      </div>
    </article>
  );
}
