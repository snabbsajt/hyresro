"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type Props = {
  initialQuery?: string;
  /** Compact icon+field for header; full for /sok */
  variant?: "header" | "page";
  autoFocus?: boolean;
};

export function SearchForm({
  initialQuery = "",
  variant = "page",
  autoFocus = false,
}: Props) {
  const router = useRouter();
  const [q, setQ] = useState(initialQuery);
  const [open, setOpen] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = q.trim();
    if (!trimmed) {
      router.push("/sok");
      return;
    }
    router.push(`/sok?q=${encodeURIComponent(trimmed)}`);
    setOpen(false);
  }

  if (variant === "header") {
    return (
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-stone-200 hover:bg-white/10 hover:text-white"
          aria-label="Sök"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        </button>
        {open ? (
          <form
            onSubmit={onSubmit}
            className="absolute right-0 top-full z-50 mt-1 flex w-[min(18rem,calc(100vw-2rem))] items-center gap-1 rounded-md border border-white/15 bg-[rgba(12,12,12,0.94)] p-1.5 shadow-lg backdrop-blur-md"
            style={{ WebkitBackdropFilter: "blur(14px)" }}
          >
            <label className="sr-only" htmlFor="header-sok">
              Sök produkter och guider
            </label>
            <input
              id="header-sok"
              type="search"
              name="q"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Sök produkter, guider…"
              autoFocus
              className="min-w-0 flex-1 rounded border-0 bg-transparent px-2 py-1.5 text-base text-stone-100 placeholder:text-stone-500 outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded bg-white/10 px-2.5 py-1.5 text-sm font-medium text-stone-100 hover:bg-white/15"
            >
              Sök
            </button>
          </form>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-xl gap-2" role="search">
      <label className="sr-only" htmlFor="sok-q">
        Sök produkter och guider
      </label>
      <input
        id="sok-q"
        type="search"
        name="q"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Sök efter produkt, guide, yta…"
        autoFocus={autoFocus}
        className="min-w-0 flex-1 rounded-md border border-white/15 bg-white/5 px-3 py-2.5 text-base text-stone-100 placeholder:text-stone-500 outline-none focus:border-white/30"
      />
      <button
        type="submit"
        className="shrink-0 rounded-md bg-[var(--accent-warm)] px-4 py-2.5 text-sm font-semibold text-[#1a1410] hover:brightness-105"
      >
        Sök
      </button>
    </form>
  );
}
