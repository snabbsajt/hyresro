import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { site } from "@/config/site";
import { getCatalog } from "@/lib/catalog";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    "Inred hyresrätten utan onödiga hål. Guider, produkter och tips så lägenheten är i skick vid avflytt.",
};

const featuredSlugs = [
  "rullgardin-klamfaste",
  "tesa-skruv-tung",
  "hylla-no-drill",
] as const;

const entries = [
  {
    href: "/guide/kolla-kontraktet",
    title: "Så läser ni kontraktet",
  },
  {
    href: "/guide/rullgardin-utan-borra",
    title: "Rullgardin utan att borra",
  },
  {
    href: "/guide/hylla-utan-borra",
    title: "Hylla utan att borra",
  },
] as const;

export default async function HomePage() {
  const products = await getCatalog();
  const featured = products
    .filter((p) => featuredSlugs.includes(p.slug as (typeof featuredSlugs)[number]))
    .slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="space-y-6 py-6 sm:py-10">
        <h1 className="font-sans text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl">
          Lägenheten i skick
        </h1>
        <p className="font-sans text-xl text-stone-600 sm:text-2xl">
          Inred hyresrätten utan onödiga hål.
        </p>
        <div className="grid gap-4 pt-2 sm:grid-cols-3">
          {entries.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="border border-[#E2E0D8] bg-white px-5 py-8 font-sans text-lg font-semibold text-[#1A1A1A] hover:border-[#1A1A1A] sm:py-10"
            >
              {e.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold text-[#1A1A1A]">
          Utvalda produkter
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-stone-600">
          Kontrollera alltid villkoren i ert{" "}
          <Link
            href="/guide/kolla-kontraktet"
            className="underline underline-offset-2 hover:text-stone-800"
          >
            hyreskontrakt
          </Link>{" "}
          innan ni köper monteringsutrustning.
        </p>
      </section>
    </div>
  );
}
