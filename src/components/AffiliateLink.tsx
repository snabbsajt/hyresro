import { affiliateHref } from "@/lib/affiliate";

const defaultClassName = "cta-btn";

type Props = {
  href: string;
  slug: string;
  children: React.ReactNode;
  className?: string;
  /** Merchant display name — drives "Se pris hos …" when usePriceLabel. */
  merchantName?: string;
  /** Use filled CTA with "Se pris hos [butik]". Default true when merchantName set. */
  usePriceLabel?: boolean;
};

export function AffiliateLink({
  href,
  slug,
  children,
  className,
  merchantName,
  usePriceLabel,
}: Props) {
  const priceLabel =
    usePriceLabel !== false && merchantName
      ? `Se pris hos ${merchantName.replace(/\.se$/i, "")}`
      : null;

  return (
    <a
      href={affiliateHref(href, slug)}
      rel="noopener noreferrer nofollow sponsored"
      target="_blank"
      className={className ?? (priceLabel ? defaultClassName : undefined) ?? defaultClassName}
    >
      {priceLabel ? (
        <span className="flex flex-col items-start gap-0.5 leading-tight">
          <span className="font-semibold">{priceLabel}</span>
          <span className="text-[0.7rem] font-normal opacity-80">{merchantName}</span>
        </span>
      ) : (
        children
      )}
    </a>
  );
}
