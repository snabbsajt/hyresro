import { site } from "@/config/site";

type Props = {
  compact?: boolean;
  className?: string;
};

export function Disclosure({ compact = false, className = "" }: Props) {
  if (compact) {
    return (
      <p className={`text-sm text-stone-500 ${className}`}>
        Sidan innehåller affiliate-länkar.{" "}
        <a href="/affiliate-info" className="underline underline-offset-2 hover:text-stone-700">
          Läs mer
        </a>
      </p>
    );
  }

  return (
    <p className={`text-sm text-stone-500 leading-relaxed ${className}`}>
      {site.disclosure}
    </p>
  );
}
