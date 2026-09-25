import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { site } from "@/config/site";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    "Dekorera hyreslägenheten utan att förstöra depositionen. Produkter utan borr, klara guider och en checklista inför flytt.",
};

const featured = products.filter((p) =>
  ["rullgardin-klamfaste", "tesa-skruv-tung", "hylla-no-drill", "brandfilt"].includes(
    p.slug,
  ),
);

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          {site.name}
        </h1>
        <p className="text-lg text-stone-600">{site.tagline}</p>
        <p className="max-w-xl leading-relaxed text-stone-700">
          Hyresro hjälper er att inreda hyresrätt utan onödiga hål i väggen.
          Vi samlar produkter utan borr, korta guider och praktiska tips — så
          lägenheten håller sig i skick.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href="/guide/borra-i-hyresratt"
            className="rounded-md bg-sage-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-sage-800"
          >
            Guide: borra i hyresrätt
          </Link>
          <Link
            href="/solskydd"
            className="rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
          >
            Se solskydd
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Utvalda produkter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-lg border border-stone-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-stone-800">Korta vägar</h2>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>
            <Link href="/guide/hylla-utan-borra" className="text-sage-800 underline-offset-2 hover:underline">
              Hylla utan borr
            </Link>
          </li>
          <li>
            <Link href="/guide/rullgardin-utan-borra" className="text-sage-800 underline-offset-2 hover:underline">
              Rullgardin utan borr
            </Link>
          </li>
          <li>
            <Link href="/fasten" className="text-sage-800 underline-offset-2 hover:underline">
              Fästen och tejp
            </Link>
          </li>
          <li>
            <Link href="/checklista-flytta" className="text-sage-800 underline-offset-2 hover:underline">
              Checklista inför flytt
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
