import type { ImageBackdrop } from "@/data/types";

const backdropClass: Record<ImageBackdrop, string> = {
  studio:
    "bg-gradient-to-b from-stone-200 to-stone-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.06),inset_0_0_0_1px_rgba(0,0,0,0.04)]",
  dark: "bg-[#141414]",
  light: "bg-stone-100 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]",
};

type Props = {
  src?: string;
  alt: string;
  /** Defaults to studio — soft warm gray for light products & transparent PNGs. */
  backdrop?: ImageBackdrop;
};

/**
 * Shared product image surface. Studio backdrop by default so light photos
 * and transparent PNGs stay visible against both the dark site and white shots.
 */
export function ProductImageSlot({ src, alt, backdrop = "studio" }: Props) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden ${backdropClass[backdrop]}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-contain p-2.5"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="sr-only">Ingen bild</span>
      )}
    </div>
  );
}
