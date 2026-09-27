import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeaturedAffiliateGrid } from "@/components/FeaturedAffiliateGrid";
import { GuideCard } from "@/components/GuideCard";
import { AdNote } from "@/components/AdNote";
import { site } from "@/config/site";
import { getTrackedAffiliateProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: `${site.name} — Inred hyresrätten utan att borra`,
  description:
    "Guider och utvalda produkter som inte kräver hål i väggen. Solskydd, fästen, förvaring och belysning för hyresrätt.",
  alternates: { canonical: "/" },
};

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
  const tracked = await getTrackedAffiliateProducts();
  const featuredCards = tracked
    .map((p) => {
      const merchant = p.merchants[0];
      if (!merchant) return null;
      return {
        slug: p.slug,
        name: p.name,
        notes: p.notes,
        priceFromSek: p.priceFromSek,
        priceNote: p.priceNote,
        imageUrl: p.imageUrl,
        imageAlt: p.imageAlt,
        merchantName: merchant.name,
        merchantUrl: merchant.url,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x != null);

  return (
    <div className="space-y-14">
      <section className="hero-wallpaper relative -mx-4 overflow-hidden sm:-mx-6">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hero-glass absolute inset-0" />
          <div className="hero-fade absolute inset-0" />
        </div>

        <div className="relative z-10 space-y-8 px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-2xl space-y-5">
            <h1 className="font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
              Inred hyresrätten utan att borra
            </h1>
            <p className="max-w-xl font-sans text-xl text-stone-400 sm:text-2xl">
              Guider och utvalda produkter som inte kräver hål i väggen.
            </p>
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

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {entries.map((e) => (
              <GuideCard key={e.href} href={e.href} title={e.title} blurb={e.blurb} />
            ))}
          </div>
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
        <FeaturedAffiliateGrid products={featuredCards} count={3} />
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
