import Link from "next/link";
import { site } from "@/config/site";

export function ContractNote() {
  return (
    <Link
      href={site.contractPath}
      className="text-sm text-stone-500 underline underline-offset-2 hover:text-stone-800"
    >
      Så läser ni kontraktet
    </Link>
  );
}
