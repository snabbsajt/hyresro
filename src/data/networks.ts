/** Affiliate network registry. Keep IDs in sync with scripts/networks.mjs. */

export const ADDREVENUE = {
  channel: "3469712",
  merchants: {
    ljusButiken: "986383",
    ljusgrossisten: "986665",
    kokochbad: "987907",
    fonsterfilm: "986347",
    boelle: "988151",
  },
} as const;

export type AddrevenueMerchant = keyof typeof ADDREVENUE.merchants;

/** Wrap a destination URL in an Addrevenue tracking link. */
export function wrapAddrevenue(
  merchantName: AddrevenueMerchant,
  destinationUrl: string,
): string {
  const a = ADDREVENUE.merchants[merchantName];
  const u = encodeURIComponent(destinationUrl);
  return `https://addrevenue.io/t?a=${a}&c=${ADDREVENUE.channel}&m=SE&u=${u}`;
}

/** Amazon Associates SE — Tracking ID / tag for hyresro.se */
export const AMAZON = {
  tag: "hyresro-21",
  storeHost: "www.amazon.se",
} as const;

const AMAZON_HOST_RE = /^(?:www\.)?amazon\.se$/i;
const AMZN_HOST_RE = /^(?:amzn\.(?:to|eu)|a\.co)$/i;
/** /dp/ASIN, /gp/product/ASIN, /gp/aw/d/ASIN */
const ASIN_PATH_RE = /\/(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})(?:[/?]|$)/i;

export function isAmazonUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return AMAZON_HOST_RE.test(host) || AMZN_HOST_RE.test(host);
  } catch {
    return false;
  }
}

/** Extract ASIN from amazon.se product paths when present. */
export function extractAmazonAsin(url: string): string | null {
  const m = url.match(ASIN_PATH_RE);
  return m ? m[1].toUpperCase() : null;
}

/**
 * Ensure an Amazon.se / amzn product URL carries tag=hyresro-21.
 * Prefer clean https://www.amazon.se/dp/ASIN?tag=hyresro-21 when ASIN is parseable;
 * otherwise set/replace tag= on the existing URL. Non-Amazon URLs are returned unchanged.
 */
export function wrapAmazon(url: string): string {
  if (!isAmazonUrl(url)) return url;

  const asin = extractAmazonAsin(url);
  if (asin) {
    return `https://${AMAZON.storeHost}/dp/${asin}?tag=${AMAZON.tag}`;
  }

  try {
    const u = new URL(url);
    if (AMAZON_HOST_RE.test(u.hostname)) {
      u.hostname = AMAZON.storeHost;
      u.protocol = "https:";
    }
    u.searchParams.set("tag", AMAZON.tag);
    return u.toString();
  } catch {
    return url;
  }
}
