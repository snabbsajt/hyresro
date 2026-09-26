import { affiliateHref } from "@/lib/affiliate";

const defaultClassName =
  "inline-block border border-white/35 bg-transparent px-3 py-1.5 text-sm font-medium text-stone-100 transition-colors hover:bg-white hover:!text-black";

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
