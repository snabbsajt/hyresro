/** Product category slug → site route (same paths as app/ and sitemap). */
export const CATEGORY_HREFS: Record<string, `/${string}`> = {
  solskydd: "/solskydd",
  fasten: "/fasten",
  forvaring: "/forvaring",
  belysning: "/belysning",
  sakerhet: "/sakerhet",
};

/** Short Swedish labels for aria/title (category page, not product). */
export const CATEGORY_LABELS: Record<string, string> = {
  solskydd: "solskydd",
  fasten: "fästen",
  forvaring: "förvaring",
  belysning: "belysning",
  sakerhet: "kök och säkerhet",
};

export function getCategoryHref(category: string): `/${string}` | undefined {
  return CATEGORY_HREFS[category];
}

export function getCategoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category;
}
