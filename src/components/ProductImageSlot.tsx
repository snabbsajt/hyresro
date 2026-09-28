import type { ImageBackdrop } from "@/data/types";

const backdropClass: Record<ImageBackdrop, string> = {
  studio: "bg-white",
  dark: "bg-[#141414]",
  light: "bg-white",
};

type Props = {
  src?: string;
  alt: string;
  /** Defaults to a solid white surface; use imageBackdrop for exceptions. */
  backdrop?: ImageBackdrop;
};

/** Shared product image surface with a solid white default. */
export function ProductImageSlot({ src, alt, backdrop = "light" }: Props) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden ${backdropClass[backdrop]}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="sr-only">Ingen bild</span>
      )}
    </div>
  );
}
