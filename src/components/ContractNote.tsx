import Link from "next/link";
import { site } from "@/config/site";

type Props = { className?: string };

export function ContractNote({ className = "" }: Props) {
  return (
    <p className={`text-xs text-stone-500 ${className}`.trim()}>
      <Link
        href={site.contractPath}
        className="text-sage-800 underline underline-offset-2 hover:text-sage-600"
      >
        Så läser ni kontraktet
      </Link>{" "}
      innan ni sätter upp något på vägg.
    </p>
  );
}
