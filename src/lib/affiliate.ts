/**
 * Bygger affiliate-URL.
 * Just nu returneras rå-URL oförändrad.
 * Senare: Adtraction subid (t.ex. product slug) läggs till här.
 */
export function affiliateHref(rawUrl: string, slug: string): string {
  // TODO: Adtraction — lägg till subid=slug när tracking är på plats
  void slug;
  return rawUrl;
}
