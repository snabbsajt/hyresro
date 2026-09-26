import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
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
  "hylla-no-drill",
] as const;

const entries = [
  { href: "/guide/kolla-kontraktet", title: "Så läser ni kontraktet" },
  { href: "/guide/rullgardin-utan-borra", title: "Rullgardin utan att borra" },
  { href: "/guide/hylla-utan-borra", title: "Hylla utan att borra" },
] as const;

export default async function HomePage() {
  const products = await getCatalog();
  const featured = products
    .filter((p) => featuredSlugs.includes(p.slug as (typeof featuredSlugs)[number]))
    .slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="space-y-6 py-6 sm:py-10">
        <h1 className="font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
          Inred hyresrätten utan att borra
        </h1>
        <p className="max-w-xl font-sans text-xl text-stone-400 sm:text-2xl">
          Guider och utvalda produkter som inte kräver hål i väggen.
        </p>
        <div className="grid gap-4 pt-2 sm:grid-cols-3">
          {entries.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="group border border-white/15 bg-white px-5 py-8 font-sans text-lg font-semibold sm:py-10 hover:border-white"
            >
              <span className="text-[#1A1A1A]">{e.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold">Utvalda produkter</h2>
        <div className="grid gap-4 sm:grid-cols-3">
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
      </section>
    </div>
  );
}
