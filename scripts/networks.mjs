/** Affiliate network configs shared by catalog scripts. Do not invent IDs. */

export const ADDREVENUE = {
  channel: "3469712",
  // Add merchant IDs only after Jonathan provides live deep links.
  merchants: {},
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

export const NETWORKS = {
  addrevenue: {
    wrap: wrapAddrevenue,
    merchants: ADDREVENUE.merchants,
  },
};
