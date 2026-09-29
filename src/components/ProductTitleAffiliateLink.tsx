import { AffiliateLink } from "./AffiliateLink";

type Props = {
  name: string;
  href?: string;
  slug: string;
  className?: string;
};

/** Product names link to the merchant using the same tracked affiliate link as the CTA. */
export function ProductTitleAffiliateLink({
  name,
  href,
  slug,
  className,
}: Props) {
  if (!href) return <span className={className}>{name}</span>;

  return (
    <AffiliateLink
      href={href}
      slug={slug}
      className={[
        "group/title inline text-inherit no-underline transition-colors",
        "hover:text-stone-100 hover:no-underline",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {name}
    </AffiliateLink>
  );
}
