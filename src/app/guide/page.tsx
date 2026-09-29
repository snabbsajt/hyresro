import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { GuideCard } from "@/components/GuideCard";
import { guidesByGroup } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guider för hyresrätt",
  description:
    "Alla Hyresros guider grupperade efter behov: kontrakt, vägg, fönster, balkong och flytt.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "Guider för hyresrätt",
    description:
      "Alla Hyresros guider grupperade efter behov: kontrakt, vägg, fönster, balkong och flytt.",
    url: "/guide",
  },
};

export default function GuideIndexPage() {
  const groups = guidesByGroup();

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <Crumbs items={[{ label: "Guider" }]} />
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Guider
        </h1>
        <p className="max-w-2xl">
          Praktiska guider för att inreda hyresrätten utan onödiga hål. Grupperade
          efter vad ni vill göra — börja med kontraktet om ni är osäkra.
        </p>
        <p className="text-sm text-stone-400">
          <Link href="/produkter" className="underline underline-offset-2 hover:text-white">
            Alla produkter
          </Link>
          {" · "}
          <Link
            href="/guide/kolla-kontraktet"
            className="underline underline-offset-2 hover:text-white"
          >
            Så läser ni kontraktet
          </Link>
        </p>
      </header>

      {groups.map((grp) => (
        <section key={grp.id} className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">{grp.title}</h2>
            <p className="text-sm text-stone-400">{grp.blurb}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {grp.items.map((g) => (
              <GuideCard key={g.slug} href={g.href} title={g.title} blurb={g.blurb} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
