/** Affiliate network configs shared by catalog scripts. Do not invent IDs. */

export const ADDREVENUE = {
  channel: "3469712",
  merchants: {
    ljusButiken: "986383",
    ljusgrossisten: "986665",
    kokochbad: "987907",
    fonsterfilm: "986347",
    boelle: "988151",
    solskyddsshoppen: "985467",
  },
};

/**
 * Wrap a destination URL in an Addrevenue tracking link.
 * @param {string} merchantName key in ADDREVENUE.merchants
 * @param {string} destinationUrl absolute https URL
 */
export function wrapAddrevenue(merchantName, destinationUrl) {
  const a = ADDREVENUE.merchants[merchantName];
  if (!a) {
    throw new Error(
      `Unknown Addrevenue merchant "${merchantName}". Known: ${Object.keys(ADDREVENUE.merchants).join(", ")}`,
    );
  }
  const u = encodeURIComponent(destinationUrl);
  return `https://addrevenue.io/t?a=${a}&c=${ADDREVENUE.channel}&m=SE&u=${u}`;
}

/** Amazon Associates SE — keep in sync with src/data/networks.ts */
export const AMAZON = {
  tag: "hyresro-21",
  storeHost: "www.amazon.se",
};

const AMAZON_HOST_RE = /^(?:www\.)?amazon\.se$/i;
const AMZN_HOST_RE = /^(?:amzn\.(?:to|eu)|a\.co)$/i;
const ASIN_PATH_RE = /\/(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})(?:[/?]|$)/i;

/** @param {string} url */
export function isAmazonUrl(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return AMAZON_HOST_RE.test(host) || AMZN_HOST_RE.test(host);
  } catch {
    return false;
  }
}

/** @param {string} url */
export function extractAmazonAsin(url) {
  const m = url.match(ASIN_PATH_RE);
  return m ? m[1].toUpperCase() : null;
}

/**
 * Ensure an Amazon.se / amzn product URL carries tag=hyresro-21.
 * Prefer clean https://www.amazon.se/dp/ASIN?tag=hyresro-21 when ASIN is parseable.
 * @param {string} url
 */
export function wrapAmazon(url) {
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

export const NETWORKS = {
  addrevenue: {
    wrap: wrapAddrevenue,
    merchants: ADDREVENUE.merchants,
  },
  amazon: {
    wrap: wrapAmazon,
    tag: AMAZON.tag,
  },
};
