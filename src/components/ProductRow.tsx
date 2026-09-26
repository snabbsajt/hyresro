import type { Product } from "@/data/types";
import { AffiliateLink } from "./AffiliateLink";

export function ProductRow({ product }: { product: Product }) {
  const merchant = product.merchants[0];
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-[#E3DFD9] py-3">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-[#1A1A1A]">{product.name}</p>
        <p className="text-sm text-stone-600">
          {product.priceFromSek != null ? `Från ${product.priceFromSek} kr` : ""}
          {product.priceNote ? ` · ${product.priceNote}` : ""}
        </p>
      </div>
      {merchant ? (
        <AffiliateLink href={merchant.url} slug={product.slug}>
          {merchant.name}
        </AffiliateLink>
      ) : null}
    </li>
  );
}
