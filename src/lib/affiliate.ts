import { isAmazonUrl, wrapAmazon } from "@/data/networks";

/**
 * Bygger affiliate-URL.
 * Amazon.se / amzn: säkerställ tag=hyresro-21 (idempotent).
 * Addrevenue m.fl. wrapas redan i products.ts.
 * Senare: Adtraction subid (t.ex. product slug) kan läggas till här.
 */
export function affiliateHref(rawUrl: string, slug: string): string {
  void slug;
  if (isAmazonUrl(rawUrl)) {
    return wrapAmazon(rawUrl);
  }
  return rawUrl;
}
