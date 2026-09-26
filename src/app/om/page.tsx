import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/Disclosure";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Om Hyresro",
  description:
    "Hyresro hjälper er som bor i hyresrätt att inreda smart utan onödiga hål. Inte hyresvärd, jurist eller e-butik.",
};

export default function OmPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
        Om Hyresro
      </h1>
      <div className="space-y-4 leading-relaxed text-stone-700">
        <p>
          Hyresro hjälper er som bor i hyresrätt att inreda smart utan att göra
          onödiga hål i väggarna. Vi är varken hyresvärd, juridisk rådgivare
          eller e-butik. Vårt mål är att samla praktiska tips, idéer och
          produktförslag för ett tryggare boende. Vissa länkar på sajten kan ge
          oss en liten provision om ni handlar via dem. Kom dock alltid ihåg att
          ert eget{" "}
          <Link
            href="/guide/kolla-kontraktet"
            className="underline underline-offset-2 hover:text-stone-800"
          >
            hyreskontrakt
          </Link>{" "}
          är det som i första hand styr vad ni får göra i lägenheten. För mer information om praxis och rådande regler länkar vi
          även till{" "}
          <a
            href="https://www.hyresgastforeningen.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-800 underline underline-offset-2"
          >
            Hyresgästföreningen
          </a>
          .
        </p>
        <p className="text-sm text-stone-600">{site.tagline}</p>
      </div>
      <Disclosure />
    </article>
  );
}
