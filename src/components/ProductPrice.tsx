type Props = {
  priceFromSek?: number;
  compareAtPriceSek?: number;
  priceNote?: string;
  /** Compact row layout (list) vs card */
  compact?: boolean;
};

function formatSek(n: number): string {
  return n.toLocaleString("sv-SE");
}

export function ProductPrice({
  priceFromSek,
  compareAtPriceSek,
  priceNote,
  compact = false,
}: Props) {
  if (priceFromSek == null) return null;

  const onSale =
    compareAtPriceSek != null && compareAtPriceSek > priceFromSek;

  const note = priceNote ? ` · ${priceNote}` : "";

  if (!onSale) {
    return (
      <p
        className={
          compact ? "text-sm text-stone-400" : "mb-2.5 text-sm text-stone-400"
        }
      >
        Från {formatSek(priceFromSek)} kr{note}
      </p>
    );
  }

  return (
    <p
      className={
        compact
          ? "flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm"
          : "mb-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-1"
      }
    >
      <span
        className={
          compact
            ? "font-medium text-[#d2ccc2]"
            : "text-base font-medium text-[#d6d0c4]"
        }
      >
        {formatSek(priceFromSek)} kr
      </span>
      <span className="text-stone-500">
        <span className="sr-only">ordinarie pris </span>
        <span aria-hidden="true">ord. </span>
        <del>{formatSek(compareAtPriceSek)} kr</del>
      </span>
      <span
        className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-1.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-stone-400"
      >
        Kampanj
      </span>
      {priceNote ? <span className="text-stone-500">{note}</span> : null}
    </p>
  );
}
