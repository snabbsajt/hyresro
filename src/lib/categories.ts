/** Product category slug → site route (same paths as app/ and sitemap). */
export const CATEGORY_HREFS: Record<string, `/${string}`> = {
  belysning: "/belysning",
  fasten: "/fasten",
  forvaring: "/forvaring",
  sakerhet: "/sakerhet",
  solskydd: "/solskydd",
};

/** Short Swedish labels for aria/title (category page, not product). */
export const CATEGORY_LABELS: Record<string, string> = {
  belysning: "belysning",
  fasten: "fästen",
  forvaring: "förvaring",
  sakerhet: "kök och säkerhet",
  solskydd: "solskydd",
};

export function getCategoryHref(category: string): `/${string}` | undefined {
  return CATEGORY_HREFS[category];
}

export function getCategoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category;
}
