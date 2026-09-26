import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { site } from "@/config/site";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    "Inred hyresrätten utan onödiga hål. Guider, produkter och tips så lägenheten är i skick vid avflytt.",
};

const featured = products
  .filter((p) =>
    ["rullgardin-klamfaste", "tesa-skruv-tung", "hylla-no-drill"].includes(
      p.slug,
    ),
  )
  .slice(0, 3);

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

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6 py-6 sm:py-10">
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          Lägenheten i skick
        </h1>
        <p className="text-xl text-stone-700 sm:text-2xl">
          Inred hyresrätten utan onödiga hål.
        </p>
        <div className="grid gap-4 pt-2 sm:grid-cols-3">
          {entries.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="rounded-xl border border-stone-300 bg-white px-5 py-8 text-lg font-semibold text-sage-800 shadow-sm hover:border-sage-600 hover:bg-sage-50 sm:py-10"
            >
              {e.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">
          Utvalda produkter
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-stone-600">
          Kontrollera alltid villkoren i ert hyreskontrakt innan ni köper
          monteringsutrustning.
        </p>
      </section>
    </div>
  );
}
