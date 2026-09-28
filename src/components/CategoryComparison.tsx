import type { Product } from "@/data/types";
import {
  buildCategoryComparison,
  type ComparisonBadge,
} from "@/lib/categoryComparison";
import { ProductPrice } from "./ProductPrice";
import { AffiliateLink } from "./AffiliateLink";

const categoryTitles: Record<string, string> = {
  solskydd: "solskydd",
  fasten: "fästen",
  forvaring: "förvaring",
  belysning: "belysning",
  sakerhet: "kök och säkerhet",
};

type Props = {
  products: Product[];
  /** Override for heading, e.g. "solskydd". Defaults from product.category. */
  categoryLabel?: string;
};

/**
 * Automatisk, kompakt produktjämförelse för en kategori.
 * Renderas bara när buildCategoryComparison returnerar picks (≥ COMPARISON_MIN_PRODUCTS).
 * Produktnamn länkar till #slug på samma sida (inga egna produktsidor i IA).
 */
export function CategoryComparison({ products, categoryLabel }: Props) {
  const comparison = buildCategoryComparison(products);
  if (!comparison) return null;

  const category = products[0]?.category ?? "";
  const label = categoryLabel ?? categoryTitles[category] ?? category;
  const { picks, totalCount, restCount } = comparison;

  return (
    <section className="space-y-3" aria-labelledby="category-comparison-heading">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h2
          id="category-comparison-heading"
          className="text-xl font-semibold tracking-tight"
        >
          Utvalda i {label}
        </h2>
        <p className="text-sm text-stone-500">
          Baserat på montering, pris och tillgänglighet — inte påhittade betyg.
        </p>
      </div>

      <ul className="glass-panel divide-y divide-white/10">
        {picks.map(({ product, why, badge }) => (
          <ComparisonRow
            key={product.slug}
            product={product}
            why={why}
            badge={badge}
          />
        ))}
      </ul>

      {restCount > 0 ? (
        <p className="text-sm text-stone-500">
          <a
            href="#produkter"
            className="underline underline-offset-2 decoration-white/25 transition-colors hover:text-stone-200 hover:decoration-white/50"
          >
            Se alla {totalCount} produkter nedan
          </a>
        </p>
      ) : null}
    </section>
  );
}

function ComparisonRow({
  product,
  why,
  badge,
}: {
  product: Product;
  why: string[];
  badge?: ComparisonBadge;
}) {
  const merchant = product.merchants[0];

  return (
    <li className="flex flex-col gap-2 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4">
      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {badge ? <Badge label={badge} /> : null}
          <a
            href={`#${product.slug}`}
            className="font-medium text-stone-100 underline underline-offset-2 decoration-white/30 transition-colors hover:text-white hover:decoration-white/60"
          >
            {product.name}
          </a>
          <a
            href={`#${product.slug}`}
            className="text-xs text-stone-500 transition-colors hover:text-stone-300"
          >
            Visa produkt
          </a>
        </div>
        {why.length > 0 ? (
          <p className="flex flex-wrap gap-1.5 text-xs text-stone-500">
            {why.map((signal) => (
              <span
                key={signal}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5"
              >
                {signal}
              </span>
            ))}
          </p>
        ) : null}
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 sm:flex-col sm:items-end sm:gap-y-1.5">
        <ProductPrice
          priceFromSek={product.priceFromSek}
          compareAtPriceSek={product.compareAtPriceSek}
          priceNote={product.priceNote}
          compact
        />
        {merchant ? (
          <AffiliateLink
            href={merchant.url}
            slug={product.slug}
            className="inline-block border border-white/25 bg-transparent px-2.5 py-1 text-xs font-medium text-stone-200 transition-colors hover:bg-white hover:!text-black"
          >
            Till {merchant.name}
          </AffiliateLink>
        ) : null}
      </div>
    </li>
  );
}

function Badge({ label }: { label: ComparisonBadge }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-stone-300">
      {label}
    </span>
  );
}
