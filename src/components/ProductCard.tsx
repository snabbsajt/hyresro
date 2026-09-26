import Link from "next/link";
import type { Product } from "@/data/types";
import { getNote } from "@/lib/notes";
import { AffiliateLink } from "./AffiliateLink";

const mountLabel: Record<Product["mountType"], string> = {
  "no-drill": "Utan borr",
  "drill-ok": "Med borr",
  either: "Med eller utan borr",
};

type Props = {
  product: Product;
};

export async function ProductCard({ product }: Props) {
  const note = product.noteKey ? await getNote(product.noteKey) : undefined;

  return (
    <article className="overflow-hidden rounded-lg border border-stone-300 bg-white shadow-sm">
      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.imageAlt || product.name}
          className="aspect-[4/3] w-full object-cover"
        />
      ) : null}
      <div className="p-4">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-medium text-stone-900">{product.name}</h3>
          <span className="rounded-full border border-stone-300 bg-stone-100 px-2 py-0.5 text-xs text-stone-700">
            {mountLabel[product.mountType]}
          </span>
        </div>
        <p className="mb-3 text-sm text-stone-700">{product.notes}</p>
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
        <ul className="flex flex-wrap gap-2">
          {product.merchants.map((m) => (
            <li key={m.name}>
              <AffiliateLink href={m.url} slug={product.slug}>
                {m.name}
              </AffiliateLink>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
