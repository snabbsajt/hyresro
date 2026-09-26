import Link from "next/link";
import { site } from "@/config/site";

/** Quiet affiliate disclosure — commercial intent clear without a mid-page “Annons.” banner. */
export function AdNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-stone-500 ${className}`}>
      {site.disclosure}{" "}
      <Link
        href="/om#annonsering"
        className="underline underline-offset-2 hover:text-stone-300"
      >
        Läs mer
      </Link>
    </p>
  );
}
