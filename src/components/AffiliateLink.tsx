import { affiliateHref } from "@/lib/affiliate";

const defaultClassName =
  "inline-block border border-[#1A1A1A] bg-[#1A1A1A] px-3 py-1.5 text-sm font-medium text-white hover:bg-black";

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
      rel="noopener noreferrer nofollow sponsored"
      target="_blank"
      className={className ?? defaultClassName}
    >
      {children}
    </a>
  );
}
