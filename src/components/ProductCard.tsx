import { existsSync } from "fs";
import path from "path";
import type { Product } from "@/data/types";
import { AffiliateLink } from "./AffiliateLink";

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
    <article className="overflow-hidden border border-white/12 bg-[#1a1a1a] [content-visibility:auto]">
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
      <div className="p-4">
        <h3 className="mb-2 font-medium text-stone-100">{product.name}</h3>
        {product.notes ? (
          <p className="mb-3 text-sm text-stone-400">{product.notes}</p>
        ) : null}
        {product.priceFromSek != null && (
          <p className="mb-3 text-sm text-stone-400">
            Från {product.priceFromSek} kr
            {product.priceNote ? ` · ${product.priceNote}` : ""}
          </p>
        )}
        {merchant ? (
          <AffiliateLink href={merchant.url} slug={product.slug}>
            {merchant.name}
          </AffiliateLink>
        ) : null}
      </div>
    </article>
  );
}
