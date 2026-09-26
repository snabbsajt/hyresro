"use client";

import { usePathname, useRouter } from "next/navigation";

export function BackLink() {
  const router = useRouter();
  const path = usePathname();
  if (!path || path === "/") return null;

  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
      }}
      className="text-sm text-stone-500 hover:text-stone-800"
    >
      ← Tillbaka
    </button>
  );
}
