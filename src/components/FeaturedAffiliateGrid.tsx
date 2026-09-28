"use client";

import { useMemo, useState, useEffect } from "react";
import type { ImageBackdrop } from "@/data/types";
import { AffiliateLink } from "./AffiliateLink";
import { ProductPrice } from "./ProductPrice";
import { ProductCategoryTitleLink } from "./ProductCategoryTitleLink";
import { ProductImageSlot } from "./ProductImageSlot";

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
  imageBackdrop?: ImageBackdrop;
  merchantName: string;
  merchantUrl: string;
};

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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
    setPicked(shuffle(products).slice(0, Math.min(count, products.length)));
  }, [products, count]);

  const shown = useMemo(() => {
    if (picked) return picked;
    // SSR / first paint: stable first N so layout doesn't jump empty
    return products.slice(0, Math.min(count, products.length));
  }, [picked, products, count]);

  if (shown.length === 0) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
      {shown.map((p) => (
        <article
          key={p.slug}
          className="overflow-hidden border border-white/12 bg-[#1c1b19] [content-visibility:auto]"
        >
          <ProductImageSlot
            src={p.imageUrl}
            alt={p.imageAlt || p.name}
            backdrop={p.imageBackdrop}
          />
          <div className="px-4 py-3">
            <h3 className="mb-1.5 font-medium" style={{ color: "#d6d0c4" }}>
              <ProductCategoryTitleLink name={p.name} category={p.category} />
            </h3>
            {p.notes ? (
              <p className="mb-2.5 text-sm text-stone-400">{p.notes}</p>
            ) : null}
            <ProductPrice
              priceFromSek={p.priceFromSek}
              compareAtPriceSek={p.compareAtPriceSek}
              priceNote={p.priceNote}
            />
            <AffiliateLink href={p.merchantUrl} slug={p.slug}>
              {p.merchantName}
            </AffiliateLink>
          </div>
        </article>
      ))}
    </div>
  );
}
