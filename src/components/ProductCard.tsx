import { existsSync } from "fs";
import path from "path";
import type { Product } from "@/data/types";
import { getFitsFor } from "@/lib/fitsFor";
import { AffiliateLink } from "./AffiliateLink";
import { ProductPrice } from "./ProductPrice";
import { ProductTitleAffiliateLink } from "./ProductTitleAffiliateLink";

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
  const passar = getFitsFor(product);

  return (
    <article
      id={product.slug}
      className="product-card scroll-mt-24 overflow-hidden border border-white/12 [content-visibility:auto]"
    >
      {imageUrl ? (
        <div className="product-card-image">
          <img
            src={imageUrl}
            alt={product.imageAlt || product.name}
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
            name={product.name}
            href={merchant?.url}
            slug={product.slug}
            className="group/title inline text-inherit no-underline transition-colors hover:text-stone-800 hover:no-underline"
          />
        </h3>
        <p className="mb-2 space-y-0.5 text-sm text-stone-600">
          <span className="block truncate">
            <span className="font-medium text-stone-700">Passar för:</span>{" "}
            <span className="passar-for">{passar}</span>
          </span>
          {product.weightKg != null ? (
            <span className="block">
              <span className="font-medium text-stone-700">Tål:</span>{" "}
              {product.weightKg} kg
            </span>
          ) : null}
        </p>
        {product.notes ? (
          <p className="mb-2.5 text-sm text-stone-600">{product.notes}</p>
        ) : null}
        <ProductPrice
          priceFromSek={product.priceFromSek}
          compareAtPriceSek={product.compareAtPriceSek}
          priceNote={product.priceNote}
        />
        {merchant ? (
          <AffiliateLink
            href={merchant.url}
            slug={product.slug}
            merchantName={merchant.name}
          >
            {merchant.name}
          </AffiliateLink>
        ) : null}
      </div>
    </article>
  );
}
