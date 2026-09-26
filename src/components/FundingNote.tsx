import Link from "next/link";

export function FundingNote() {
  return (
    <p className="border-l-2 border-stone-400 pl-3 text-sm text-stone-600">
      Vissa butikslänkar är reklam. Priset ändras inte.{" "}
      <Link
        href="/affiliate-info"
        className="underline underline-offset-2 hover:text-stone-800"
      >
        Så finansieras sajten
      </Link>
    </p>
  );
}
