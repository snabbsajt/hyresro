import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { site } from "@/config/site";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    "Ett hyreskontrakt kräver att ni återställer bostaden vid utflyttning. Med rätt metoder undviker ni skador och behåller er deposition.",
};

const featured = products.filter((p) =>
  ["rullgardin-klamfaste", "tesa-skruv-tung", "hylla-no-drill", "brandfilt"].includes(
    p.slug,
  ),
);

const entries = [
  {
    href: "/guide/kolla-kontraktet",
    title: "Så läser ni kontraktet",
    body: "Förstå regler kring ändringar och underhåll innan ni påbörjar projekt.",
  },
  {
    href: "/guide/rullgardin-utan-borra",
    title: "Rullgardin utan att borra",
    body: "Montera solskydd säkert utan att skada fönsterkarmar eller väggar.",
  },
  {
    href: "/guide/hylla-utan-borra",
    title: "Hylla utan att borra",
    body: "Använd anpassade fästen och tejp för stabil upphängning utan hål.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          trygghet och kontroll i ert boende.
        </h1>
        <p className="text-lg text-stone-600">
          Lägenheten i skick, depositionen i fred.
        </p>
        <p className="max-w-xl leading-relaxed text-stone-700">
          Ett hyreskontrakt kräver att ni återställer bostaden vid utflyttning.
          Med rätt metoder undviker ni skador och behåller er deposition.
        </p>
        <div className="grid gap-3 pt-1 sm:grid-cols-3">
          {entries.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="rounded-lg border border-stone-200 bg-white p-4 hover:border-sage-600"
            >
              <span className="block text-sm font-semibold text-sage-800">
                {e.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-stone-600">
                {e.body}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">
          Utvalda produkter
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
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
