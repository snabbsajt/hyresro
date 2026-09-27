/** Affiliate network registry. Keep IDs in sync with scripts/networks.mjs. */

export const ADDREVENUE = {
  channel: "3469712",
  // Add merchant IDs only after Jonathan provides live deep links.
  merchants: {},
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
