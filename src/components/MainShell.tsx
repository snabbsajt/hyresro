"use client";

import { usePathname } from "next/navigation";
import { BackLink } from "./BackLink";

export function MainShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const isHome = path === "/";

  return (
    <main
      className={
        isHome
          ? "w-full flex-1 pb-8"
          : "mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6"
      }
    >
      <BackLink />
      {children}
    </main>
  );
}
