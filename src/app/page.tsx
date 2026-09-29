import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeaturedAffiliateGrid } from "@/components/FeaturedAffiliateGrid";
import { GuideCard } from "@/components/GuideCard";
import { site } from "@/config/site";
import { solutions } from "@/data/solutions";
import { getTrackedAffiliateProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: `${site.name} — Inred hyresrätten utan att borra`,
  description:
    "Guider och utvalda produkter som inte kräver hål i väggen. Solskydd, fästen, förvaring och belysning för hyresrätt.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Inred hyresrätten utan att borra`,
    description:
      "Guider och utvalda produkter som inte kräver hål i väggen. Solskydd, fästen, förvaring och belysning för hyresrätt.",
    url: "/",
    images: [{ url: "/hero.jpg", alt: "Hyresro — inred hyresrätten utan att borra" }],
  },
};

const problemCards = solutions.map((s) => ({
  href: s.href,
  title: s.cardTitle,
  blurb: s.cardBlurb,
}));

export default async function HomePage() {
  const tracked = await getTrackedAffiliateProducts();
  // Prefer no-drill categories that match site purpose; still all tracked.
  const preferredCats = new Set(["fasten", "solskydd", "forvaring", "belysning"]);
  const featuredPool = [
    ...tracked.filter((p) => preferredCats.has(p.category)),
    ...tracked.filter((p) => !preferredCats.has(p.category)),
  ];
  const featuredCards = featuredPool
    .map((p) => {
      const merchant = p.merchants[0];
      if (!merchant) return null;
      return {
        slug: p.slug,
        name: p.name,
        category: p.category,
        notes: p.notes,
        priceFromSek: p.priceFromSek,
        compareAtPriceSek: p.compareAtPriceSek,
        priceNote: p.priceNote,
        imageUrl: p.imageUrl,
        imageAlt: p.imageAlt,
        merchantName: merchant.name,
        merchantUrl: merchant.url,
        weightKg: p.weightKg,
        surfaces: p.surfaces,
        mountType: p.mountType,
        fitsFor: p.fitsFor,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x != null);

  return (
    <>
      <section className="hero-wallpaper">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hero-glass absolute inset-0" />
          <div className="hero-fade absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 sm:py-14 md:py-16 md:space-y-10">
          <div className="hero-copy max-w-2xl space-y-5 md:max-w-3xl">
            <h1 className="font-sans text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Inred hyresrätten utan att borra
            </h1>
            <p className="max-w-xl font-sans text-xl text-stone-100 sm:text-2xl">
              Guider och utvalda produkter som inte kräver hål i väggen.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-stone-100 sm:text-xl">
              Vad vill du göra?
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
              {problemCards.map((e) => (
                <GuideCard
                  key={e.href}
                  href={e.href}
                  title={e.title}
                  blurb={e.blurb}
                  className="problem-card"
                  badge="Lösning"
                  cta="Se lösningar"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-14 w-full max-w-6xl space-y-14 px-4 sm:px-6">
        <section className="max-w-2xl space-y-3">
          <h2 className="font-sans text-xl font-semibold">Vad är Hyresro?</h2>
          <p>
            Hyresro hjälper er att inreda och använda hyresrätten utan onödiga hål. Guiderna
            förklarar vad som oftast går, vad som kräver värdens ja, och hur produkterna fästs.
            Produkterna kommer från svenska återförsäljare.
          </p>
          <p>
            <Link href="/guide" className="text-sm font-medium underline underline-offset-2 hover:text-white">
              Alla guider
            </Link>
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
        </section>

        <section className="max-w-xl space-y-2 border-t border-white/10 pt-10">
          <p className="text-sm text-stone-400">
            <Link
              href="/guide/borra-i-hyresratt"
              className="font-medium text-stone-300 underline underline-offset-2 hover:text-white"
            >
              Osäker på vad du får göra?
            </Link>
            <span className="text-stone-500">
              {" "}
              — kort om vad som oftast gäller när ni vill borra eller fästa tungt.
            </span>
          </p>
        </section>
      </div>
    </>
  );
}
