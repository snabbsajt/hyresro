import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { GuideCard } from "@/components/GuideCard";
import { AdNote } from "@/components/AdNote";
import { site } from "@/config/site";
import { getCatalog } from "@/lib/catalog";

export const metadata: Metadata = {
  title: `${site.name} — Inred hyresrätten utan att borra`,
  description:
    "Guider och utvalda produkter som inte kräver hål i väggen. Solskydd, fästen, förvaring och belysning för hyresrätt.",
};

const featuredSlugs = [
  "rullgardin-klamfaste",
  "tesa-skruv-tung",
  "dorrhangare-rostfritt",
] as const;

const entries = [
  {
    href: "/guide/kolla-kontraktet",
    title: "Så läser ni kontraktet",
    blurb: "Vad ni får ändra — och vad ni bör fråga värden om.",
  },
  {
    href: "/guide/rullgardin-utan-borra",
    title: "Rullgardin utan att borra",
    blurb: "Klämmor och fästen som sitter utan hål i karmen.",
  },
  {
    href: "/guide/hylla-utan-borra",
    title: "Hylla utan att borra",
    blurb: "Stabil förvaring med limfästen och andra lösningar.",
  },
] as const;

const moreGuides = [
  { href: "/guide/plissegardin-utan-borra", title: "Plisségardin utan borr" },
  { href: "/guide/tavla-pa-gips", title: "Tavla på gips" },
  { href: "/guide/balkong-utan-borra", title: "Balkong utan borr" },
  { href: "/guide/borra-i-hyresratt", title: "Får man borra i hyresrätt?" },
] as const;

export default async function HomePage() {
  const products = await getCatalog();
  const featured = products
    .filter((p) => featuredSlugs.includes(p.slug as (typeof featuredSlugs)[number]))
    .slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="py-4 sm:py-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-5">
            <h1 className="font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
              Inred hyresrätten utan att borra
            </h1>
            <p className="max-w-xl font-sans text-xl text-stone-400 sm:text-2xl">
              Guider och utvalda produkter som inte kräver hål i väggen.
            </p>
            <div className="trust-row" aria-label="Snabbfakta">
              <span>Tydligt om affiliatelänkar</span>
              <span>Svenska butiker</span>
              <span>Utan onödiga hål</span>
            </div>
            <ul className="flex flex-wrap gap-2 pt-1">
              {moreGuides.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} className="guide-chip">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-sm border border-white/12">
            <Image
              src="/hero.jpg"
              alt="Lugnt hyresrum med rullgardin, hylla och lampa — inrett utan synliga borrhål"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] w-full object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {entries.map((e) => (
            <GuideCard key={e.href} href={e.href} title={e.title} blurb={e.blurb} />
          ))}
        </div>
      </section>

      <section className="max-w-2xl space-y-3">
        <h2 className="font-sans text-xl font-semibold">Vad är Hyresro?</h2>
        <p>
          Hyresro hjälper er att inreda och använda hyresrätten utan onödiga hål. Guiderna
          förklarar vad som oftast går, vad som kräver värdens ja, och hur produkterna fästs.
          Produkterna kommer från svenska återförsäljare. Vi är inte jurist och inte butik.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold">Utvalda produkter</h2>
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p>
          <Link href="/produkter" className="text-sm font-medium underline underline-offset-2 hover:text-white">
            Visa alla rekommenderade produkter
          </Link>
        </p>
        <p className="text-sm leading-relaxed text-stone-400">
          Kontrollera alltid villkoren i ert{" "}
          <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2 hover:text-white">
            hyreskontrakt
          </Link>{" "}
          innan ni köper monteringsutrustning.
        </p>
        <AdNote />
      </section>
    </div>
  );
}
