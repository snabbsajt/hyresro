import type { Product } from "@/data/types";
import { hasTrackedAffiliate } from "@/lib/catalog";

/** Visa jämförelse först när kategorin har minst så här många produkter. */
export const COMPARISON_MIN_PRODUCTS = 3;

/** Max antal produkter i jämförelseblocket (resten via CTA till listan). */
export const COMPARISON_TOP_N = 4;

export type ComparisonBadge = "Vårt tips" | "Prisvärd" | "Bra just nu";

export type ComparisonPick = {
  product: Product;
  /** Korta, ärliga signaler från riktiga fält — inte påhittade betyg. */
  why: string[];
  badge?: ComparisonBadge;
};

export type CategoryComparisonResult = {
  picks: ComparisonPick[];
  totalCount: number;
  restCount: number;
};

/**
 * Bygger en kompakt, ärlig produktjämförelse från katalogdata.
 * Future-proof: nya produkter i products.ts med samma category ingår automatiskt.
 *
 * Sortordning (transparent, ingen fake ranking):
 * 1. Tracked affiliate först
 * 2. mountType === "no-drill"
 * 3. Lägre priceFromSek (saknat pris sist)
 * 4. Har bild
 * 5. Har compareAtPriceSek (kampanj) som mjuk bonus
 */
export function buildCategoryComparison(
  products: Product[],
  options?: { minProducts?: number; topN?: number },
): CategoryComparisonResult | null {
  const minProducts = options?.minProducts ?? COMPARISON_MIN_PRODUCTS;
  const topN = options?.topN ?? COMPARISON_TOP_N;

  if (products.length < minProducts) return null;

  const ranked = [...products].sort(compareProductsHonestly);
  const top = ranked.slice(0, Math.min(topN, ranked.length));
  const cheapestSlug = findCheapestSlug(top);

  const picks: ComparisonPick[] = top.map((product, index) => ({
    product,
    why: buildWhySignals(product),
    badge: pickBadge(product, index, cheapestSlug),
  }));

  return {
    picks,
    totalCount: products.length,
    restCount: Math.max(0, products.length - top.length),
  };
}

function compareProductsHonestly(a: Product, b: Product): number {
  const trackedDiff =
    (hasTrackedAffiliate(a) ? 0 : 1) - (hasTrackedAffiliate(b) ? 0 : 1);
  if (trackedDiff !== 0) return trackedDiff;

  const mountDiff = mountRank(a.mountType) - mountRank(b.mountType);
  if (mountDiff !== 0) return mountDiff;

  const priceA = a.priceFromSek ?? Number.POSITIVE_INFINITY;
  const priceB = b.priceFromSek ?? Number.POSITIVE_INFINITY;
  if (priceA !== priceB) return priceA - priceB;

  const imageDiff = (a.imageUrl ? 0 : 1) - (b.imageUrl ? 0 : 1);
  if (imageDiff !== 0) return imageDiff;

  const saleDiff = (hasCampaign(a) ? 0 : 1) - (hasCampaign(b) ? 0 : 1);
  if (saleDiff !== 0) return saleDiff;

  return a.name.localeCompare(b.name, "sv");
}

function mountRank(mountType: Product["mountType"]): number {
  if (mountType === "no-drill") return 0;
  if (mountType === "either") return 1;
  return 2;
}

function hasCampaign(product: Product): boolean {
  return (
    product.compareAtPriceSek != null &&
    product.priceFromSek != null &&
    product.compareAtPriceSek > product.priceFromSek
  );
}

function findCheapestSlug(products: Product[]): string | undefined {
  let best: Product | undefined;
  for (const p of products) {
    if (p.priceFromSek == null) continue;
    if (!best || (best.priceFromSek != null && p.priceFromSek < best.priceFromSek)) {
      best = p;
    }
  }
  return best?.slug;
}

/**
 * Badge baserad på sortskäl — max en per rad, inga fake “bäst i test”.
 * Toppval = “Vårt tips”; kampanj = “Bra just nu”; lägsta pris bland utvalda = “Prisvärd”.
 */
function pickBadge(
  product: Product,
  index: number,
  cheapestSlug: string | undefined,
): ComparisonBadge | undefined {
  if (index === 0) return "Vårt tips";
  if (hasCampaign(product)) return "Bra just nu";
  if (cheapestSlug && product.slug === cheapestSlug) return "Prisvärd";
  return undefined;
}

function buildWhySignals(product: Product): string[] {
  const signals: string[] = [];

  if (product.mountType === "no-drill") signals.push("Utan borr");
  else if (product.mountType === "either") signals.push("Lös / batteri");

  if (hasCampaign(product)) signals.push("Kampanj");

  const merchant = product.merchants[0]?.name;
  if (merchant) signals.push(merchant);

  // Portabel belysning syns i namn/notes — ärlig etikett utan påhittade claims
  const blob = `${product.name} ${product.notes}`.toLowerCase();
  if (blob.includes("portabel")) signals.push("Portabel");
  if (blob.includes("självhäftande") || blob.includes("sjalvhaftande")) {
    if (!signals.includes("Utan borr")) signals.push("Självhäftande");
  }

  // Max 3 chips så raden håller sig kort
  return signals.slice(0, 3);
}
