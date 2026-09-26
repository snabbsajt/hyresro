export type MountType = "no-drill" | "drill-ok" | "either";

export type Merchant = {
  name: string;
  url: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  mountType: MountType;
  surfaces: string[];
  weightKg?: number;
  priceFromSek?: number;
  /** t.ex. "2-pack", "per st", "2 för 249 kr" */
  priceNote?: string;
  merchants: Merchant[];
  notes: string;
  noteKey?: string;
  legalNote?: string;
  imageUrl?: string;
  imageAlt?: string;
};
