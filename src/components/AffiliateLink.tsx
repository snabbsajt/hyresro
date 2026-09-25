import { affiliateHref } from "@/lib/affiliate";

type Props = {
  href: string;
  slug: string;
  children: React.ReactNode;
  className?: string;
};

export function AffiliateLink({ href, slug, children, className }: Props) {
  return (
    <a
      href={affiliateHref(href, slug)}
      rel="sponsored nofollow"
      target="_blank"
      className={className}
    >
      {children}
    </a>
  );
}
