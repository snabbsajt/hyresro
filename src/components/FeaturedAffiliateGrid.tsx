"use client";

import { useMemo, useState, useEffect } from "react";
import { getFitsFor } from "@/lib/fitsFor";
import type { Product } from "@/data/types";
import { AffiliateLink } from "./AffiliateLink";
import { ProductPrice } from "./ProductPrice";
import { ProductTitleAffiliateLink } from "./ProductTitleAffiliateLink";

export type FeaturedCard = {
  slug: string;
  name: string;
  category: string;
  notes?: string;
  priceFromSek?: number;
  compareAtPriceSek?: number;
  priceNote?: string;
  imageUrl?: string;
  imageAlt?: string;
  merchantName: string;
  merchantUrl: string;
  weightKg?: number;
  surfaces?: string[];
  mountType?: string;
  fitsFor?: string;
};

function asProductLike(p: FeaturedCard): Product {
  return {
    slug: p.slug,
    name: p.name,
    category: p.category,
    mountType: (p.mountType as Product["mountType"]) || "no-drill",
    surfaces: p.surfaces ?? [],
    notes: p.notes ?? "",
    merchants: [],
    weightKg: p.weightKg,
    fitsFor: p.fitsFor,
  };
}

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Prefer a mix across categories (no-drill-relevant) rather than three lamps. */
function diversify(items: FeaturedCard[], count: number): FeaturedCard[] {
  const byCat = new Map<string, FeaturedCard[]>();
  for (const p of shuffle(items)) {
    const list = byCat.get(p.category) ?? [];
    list.push(p);
    byCat.set(p.category, list);
  }
  const preferred = ["fasten", "solskydd", "forvaring", "belysning", "sakerhet"];
  const picked: FeaturedCard[] = [];
  const used = new Set<string>();
  let guard = 0;
  while (picked.length < count && guard < items.length * 2) {
    guard += 1;
    let added = false;
    for (const cat of preferred) {
      if (picked.length >= count) break;
      const list = byCat.get(cat);
      if (!list || list.length === 0) continue;
      const next = list.shift()!;
      if (used.has(next.slug)) continue;
      used.add(next.slug);
      picked.push(next);
      added = true;
    }
    if (!added) break;
  }
  if (picked.length < count) {
    for (const p of shuffle(items)) {
      if (picked.length >= count) break;
      if (used.has(p.slug)) continue;
      used.add(p.slug);
      picked.push(p);
    }
  }
  return picked;
}

type Props = {
  products: FeaturedCard[];
  count?: number;
};

export function FeaturedAffiliateGrid({ products, count = 3 }: Props) {
  const [picked, setPicked] = useState<FeaturedCard[] | null>(null);

  useEffect(() => {
    if (products.length === 0) {
      setPicked([]);
      return;
    }
    setPicked(diversify(products, Math.min(count, products.length)));
  }, [products, count]);

  const shown = useMemo(() => {
    if (picked) return picked;
    return products.slice(0, Math.min(count, products.length));
  }, [picked, products, count]);

  if (shown.length === 0) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
      {shown.map((p) => {
        const passar = getFitsFor(asProductLike(p));
        return (
          <article
            key={p.slug}
            className="product-card overflow-hidden border border-white/12 [content-visibility:auto]"
          >
            {p.imageUrl ? (
              <div className="product-card-image">
                <img
                  src={p.imageUrl}
                  alt={p.imageAlt || p.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <div className="product-card-image bg-[#e8e4dc]" aria-hidden />
            )}
            <div className="px-4 py-3">
              <h3 className="mb-1.5 font-medium" style={{ color: "#2a2620" }}>
                <ProductTitleAffiliateLink
                  name={p.name}
                  href={p.merchantUrl}
                  slug={p.slug}
                  className="group/title inline text-inherit no-underline transition-colors hover:text-stone-800 hover:no-underline"
                />
              </h3>
              <p className="mb-2 space-y-0.5 text-sm text-stone-600">
                <span className="block truncate">
                  <span className="font-medium text-stone-700">Passar för:</span>{" "}
                  <span className="passar-for">{passar}</span>
                </span>
                {p.weightKg != null ? (
                  <span className="block">
                    <span className="font-medium text-stone-700">Tål:</span>{" "}
                    {p.weightKg} kg
                  </span>
                ) : null}
              </p>
              {p.notes ? (
                <p className="mb-2.5 text-sm text-stone-600">{p.notes}</p>
              ) : null}
              <ProductPrice
                priceFromSek={p.priceFromSek}
                compareAtPriceSek={p.compareAtPriceSek}
                priceNote={p.priceNote}
              />
              <AffiliateLink
                href={p.merchantUrl}
                slug={p.slug}
                merchantName={p.merchantName}
              >
                {p.merchantName}
              </AffiliateLink>
            </div>
          </article>
        );
      })}
    </div>
  );
}
