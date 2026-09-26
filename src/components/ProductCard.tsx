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
    <article className="overflow-hidden rounded-lg border border-stone-300 bg-white shadow-sm">
      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.imageAlt || product.name}
          className="aspect-[4/3] w-full object-cover"
        />
      ) : (
        <div
          className="aspect-[4/3] w-full bg-stone-100"
          aria-hidden
        />
      )}
      <div className="p-4">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-medium text-stone-900">{product.name}</h3>
          <span className="rounded-full bg-sage-100 px-2 py-0.5 text-xs text-sage-800">
            {mountLabel[product.mountType]}
          </span>
        </div>
        <p className="mb-3 text-sm text-stone-700">{product.notes}</p>
        {product.priceFromSek != null && (
          <p className="mb-3 text-sm text-stone-600">
            Från ca {product.priceFromSek} kr
          </p>
        )}
        {product.legalNote && <ContractNote className="mb-3" />}
        <ul className="flex flex-wrap gap-2">
          {product.merchants.map((m) => (
            <li key={m.name}>
              <AffiliateLink
                href={m.url}
                slug={product.slug}
                className="inline-block rounded border border-sage-600/40 bg-sage-50 px-2.5 py-1 text-sm text-sage-800 hover:bg-sage-100"
              >
                {m.name}
              </AffiliateLink>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
