import type { Product } from "@/data/types";
import {
  buildCategoryComparison,
  type ComparisonBadge,
} from "@/lib/categoryComparison";
import { ProductPrice } from "./ProductPrice";
import { AffiliateLink } from "./AffiliateLink";
import { ProductTitleAffiliateLink } from "./ProductTitleAffiliateLink";

const categoryTitles: Record<string, string> = {
  belysning: "belysning",
  fasten: "fästen",
  forvaring: "förvaring",
  sakerhet: "kök och säkerhet",
  solskydd: "solskydd",
};

type Props = {
  products: Product[];
  /** Override for heading, e.g. "solskydd". Defaults from product.category. */
  categoryLabel?: string;
};

/**
 * Automatisk, kompakt produktjämförelse för en kategori.
 * Renderas bara när buildCategoryComparison returnerar picks (≥ COMPARISON_MIN_PRODUCTS).
 * Produktnamn länkar till handlarens spårade affiliatelänk, precis som CTA:n.
 */
export function CategoryComparison({ products, categoryLabel }: Props) {
  const comparison = buildCategoryComparison(products);
  if (!comparison) return null;

  const category = products[0]?.category ?? "";
  const label = categoryLabel ?? categoryTitles[category] ?? category;
  const { picks, totalCount, restCount } = comparison;

  return (
    <section className="space-y-3" aria-labelledby="category-comparison-heading">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-x-3">
        <h2
          id="category-comparison-heading"
          className="text-xl font-semibold tracking-tight"
        >
          Utvalda i {label}
        </h2>
        <p className="text-sm text-stone-500 md:shrink-0 md:text-right">
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
    <li className="px-3 py-3 md:px-4">
      {/*
        Mobile: stacked flex column (badge+name → chips → price+CTA).
        Desktop (md+): 4-col grid via md:contents on wrappers so badge-slot,
        name+chips, price and CTA each occupy a fixed column — names align.
      */}
      <div className="flex flex-col gap-2 md:grid md:grid-cols-[6rem_minmax(0,1fr)_auto_minmax(9rem,auto)] md:items-center md:gap-x-3 md:gap-y-1">
        <div className="flex min-w-0 items-center gap-2 md:contents">
          <div
            className="hidden shrink-0 md:flex md:w-full md:items-center"
            aria-hidden={badge ? undefined : true}
          >
            {badge ? <Badge label={badge} /> : null}
          </div>

          <div className="min-w-0 space-y-1.5">
            <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
              {badge ? (
                <span className="md:hidden">
                  <Badge label={badge} />
                </span>
              ) : null}
              <ProductTitleAffiliateLink
                name={product.name}
                href={merchant?.url}
                slug={product.slug}
                className="font-medium text-stone-100 decoration-white/40 underline-offset-2 transition-colors hover:text-white hover:underline"
              />
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
        </div>

        <div className="flex items-center justify-between gap-3 md:contents">
          <div className="min-w-0 md:justify-self-end md:text-right">
            <ProductPrice
              priceFromSek={product.priceFromSek}
              compareAtPriceSek={product.compareAtPriceSek}
              priceNote={product.priceNote}
              compact
            />
          </div>
          {merchant ? (
            <AffiliateLink
              href={merchant.url}
              slug={product.slug}
              className="inline-flex min-w-[9rem] shrink-0 items-center justify-center border border-white/25 bg-transparent px-2.5 py-1 text-xs font-medium text-stone-200 transition-colors hover:bg-white hover:!text-black"
            >
              Till butik
            </AffiliateLink>
          ) : (
            <span className="hidden min-w-[9rem] md:block" aria-hidden />
          )}
        </div>
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
