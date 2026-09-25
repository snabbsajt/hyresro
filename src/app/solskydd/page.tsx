import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Solskydd för hyresrätt",
  description:
    "Rullgardiner och mörkläggning som går att montera utan borr. Produkter och kort guide.",
};

export default function SolskyddPage() {
  const items = getProductsByCategory("solskydd");

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
          Solskydd
        </h1>
        <p className="max-w-xl leading-relaxed text-stone-700">
          Rullgardin med klämfäste är ofta enklast i hyresrätt. Behöver ni
          mörkläggning finns det både kläm- och skruvvarianter.
        </p>
        <p className="text-sm text-stone-600">
          Läs{" "}
          <Link
            href="/guide/rullgardin-utan-borra"
            className="text-sage-800 underline underline-offset-2"
          >
            guiden om rullgardin utan borr
          </Link>
          .
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      <Disclosure compact />
    </div>
  );
}
