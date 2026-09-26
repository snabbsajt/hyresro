import Link from "next/link";
import type { Product } from "@/data/types";
import { getNote } from "@/lib/notes";
import { AffiliateLink } from "./AffiliateLink";

type Props = {
  product: Product;
};

export async function ProductCard({ product }: Props) {
  const note = product.noteKey ? await getNote(product.noteKey) : undefined;
  const merchant = product.merchants[0];

  return (
    <article className="overflow-hidden border border-[#E2E0D8] bg-white">
      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.imageAlt || product.name}
          className="aspect-[4/3] w-full object-cover"
        />
      ) : (
        <div className="aspect-[4/3] w-full bg-[#EBEAE6]" aria-hidden />
      )}
      <div className="p-4">
        <h3 className="mb-2 font-medium text-[#1A1A1A]">{product.name}</h3>
        {product.notes ? (
          <p className="mb-3 text-sm text-stone-600">{product.notes}</p>
        ) : null}
        {product.priceFromSek != null && (
          <p className="mb-3 text-sm text-stone-600">
            Från ca {product.priceFromSek} kr
          </p>
        )}
        {note && (
          <p className="mb-3 text-xs text-stone-500">
            <Link
              href={note.href}
              className="underline underline-offset-2 hover:text-stone-800"
            >
              {note.text}
            </Link>
          </p>
        )}
        {merchant ? (
          <AffiliateLink href={merchant.url} slug={product.slug}>
            {merchant.name}
          </AffiliateLink>
        ) : null}
      </div>
    </article>
  );
}
