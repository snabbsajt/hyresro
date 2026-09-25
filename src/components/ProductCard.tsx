import type { Product } from "@/data/types";
import { AffiliateLink } from "./AffiliateLink";
import { ContractNote } from "./ContractNote";

const mountLabel: Record<Product["mountType"], string> = {
  "no-drill": "Utan borr",
  "drill-ok": "Med borr",
  either: "Med eller utan borr",
};

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-medium text-stone-800">{product.name}</h3>
        <span className="rounded-full bg-sage-100 px-2 py-0.5 text-xs text-sage-800">
          {mountLabel[product.mountType]}
        </span>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-stone-600">{product.notes}</p>
      {product.priceFromSek != null && (
        <p className="mb-3 text-sm text-stone-500">
          Från ca {product.priceFromSek} kr
        </p>
      )}
      {product.legalNote && (
        <p className="mb-3 text-xs text-stone-500">{product.legalNote && <ContractNote className="mb-3" />}
      <ul className="flex flex-wrap gap-2">
        {product.merchants.map((m) => (
          <li key={m.name}>
            <AffiliateLink
              href={m.url}
              slug={product.slug}
              className="inline-block rounded border border-sage-600/30 bg-sage-50 px-2.5 py-1 text-sm text-sage-800 hover:bg-sage-100"
            >
              {m.name}
            </AffiliateLink>
          </li>
        ))}
      </ul>
    </article>
  );
}
