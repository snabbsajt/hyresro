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
  merchants: Merchant[];
  notes: string;
  legalNote?: string;
};
