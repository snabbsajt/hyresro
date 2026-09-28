import { existsSync } from "fs";
import path from "path";
import type { Product } from "@/data/types";
import { AffiliateLink } from "./AffiliateLink";
import { ProductPrice } from "./ProductPrice";
import { ProductCategoryTitleLink } from "./ProductCategoryTitleLink";

type Props = {
  product: Product;
};

function resolveImageUrl(product: Product): string | undefined {
  const fromCsv = product.imageUrl?.trim();
  if (fromCsv) return fromCsv;
  const localPath = path.join(
    process.cwd(),
    "public",
    "products",
    `${product.slug}.jpg`,
  );
  if (existsSync(localPath)) return `/products/${product.slug}.jpg`;
  return undefined;
}

export async function ProductCard({ product }: Props) {
  const merchant = product.merchants[0];
  const imageUrl = resolveImageUrl(product);

  return (
    <article
      id={product.slug}
      className="scroll-mt-24 overflow-hidden border border-white/12 bg-[#1c1b19] [content-visibility:auto]"
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={product.imageAlt || product.name}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="aspect-[4/3] w-full bg-[#141414]" aria-hidden />
      )}
      <div className="px-4 py-3">
        <h3 className="mb-1.5 font-medium" style={{ color: "#d6d0c4" }}>
          <ProductCategoryTitleLink
            name={product.name}
            category={product.category}
          />
        </h3>
        {product.notes ? (
          <p className="mb-2.5 text-sm text-stone-400">{product.notes}</p>
        ) : null}
        <ProductPrice
          priceFromSek={product.priceFromSek}
          compareAtPriceSek={product.compareAtPriceSek}
          priceNote={product.priceNote}
        />
        {merchant ? (
          <AffiliateLink href={merchant.url} slug={product.slug}>
            {merchant.name}
          </AffiliateLink>
        ) : null}
      </div>
    </article>
  );
}
