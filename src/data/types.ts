export type MountType = "no-drill" | "drill-ok" | "either";

export type Merchant = {
  name: string;
  url: string;
};

/** Image slot surface behind the product photo. Default: studio. */
export type ImageBackdrop = "studio" | "dark" | "light";

export type Product = {
  slug: string;
  name: string;
  category: string;
  mountType: MountType;
  surfaces: string[];
  weightKg?: number;
  /** Aktuellt/köppris i SEK (kampanjpris om butiken har kampanj). */
  priceFromSek?: number;
  /** Ordinarie pris när högre än priceFromSek — visas som jämförelsepris. */
  compareAtPriceSek?: number;
  /** t.ex. "2-pack", "per st", "2 för 249 kr" */
  priceNote?: string;
  merchants: Merchant[];
  notes: string;
  noteKey?: string;
  legalNote?: string;
  imageUrl?: string;
  imageAlt?: string;
  /**
   * Image slot surface. Default "studio" (soft warm gray) — contrasts with
   * both the dark site and light / transparent PNG products. No per-product
   * flag needed for typical light shots (e.g. white Oslo lamp).
   */
  imageBackdrop?: ImageBackdrop;
};
