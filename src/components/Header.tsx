"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Logo } from "./Logo";
import { navItems } from "./nav";
import { NavPanel } from "./NavPanel";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpenId, setDesktopOpenId] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    queueMicrotask(() => buttonRef.current?.focus());
  }, []);

  const closeDesktop = useCallback(() => {
    setDesktopOpenId(null);
  }, []);

  useEffect(() => {
    if (!mobileOpen && !desktopOpenId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileOpen) closeMobile();
        if (desktopOpenId) closeDesktop();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, desktopOpenId, closeMobile, closeDesktop]);

  useEffect(() => {
    if (!desktopOpenId) return;
    const onPointer = (e: MouseEvent) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(e.target as Node)
      ) {
        closeDesktop();
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [desktopOpenId, closeDesktop]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header className="glass-bar sticky top-0 z-50 border-b border-stone-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0"
          onClick={() => {
            closeMobile();
            closeDesktop();
          }}
        >
          <Logo />
        </Link>

        <nav
          ref={desktopNavRef}
          className="hidden md:block"
          aria-label="Huvudmeny"
          onMouseLeave={closeDesktop}
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item, index) => {
              const open = desktopOpenId === item.id;
              return (
                <li
                  key={item.id}
                  className="relative flex items-center gap-1"
                  onMouseEnter={() => setDesktopOpenId(item.id)}
                >
                  {index > 0 && (
                    <span className="select-none px-1 text-stone-400" aria-hidden>
                      |
                    </span>
                  )}
                  <button
                    type="button"
                    className={`px-2 py-1.5 text-sm font-medium text-stone-800 hover:text-stone-950 ${
                      open ? "text-stone-950" : ""
                    }`}
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() =>
                      setDesktopOpenId((cur) => (cur === item.id ? null : item.id))
                    }
                  >
                    {item.label}
                  </button>
                  {open && (
                    <div className="absolute left-0 top-full z-50 pt-1">
                      <NavPanel
                        item={item}
                        onNavigate={closeDesktop}
                        className="min-w-[14rem] shadow-sm"
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-stone-800 hover:bg-stone-200 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
          onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-[57px] z-40 bg-stone-900/20 md:hidden"
            aria-label="Stäng meny"
            onClick={closeMobile}
          />
          <nav
            id={menuId}
            className="glass-bar fixed inset-x-0 top-[57px] z-50 max-h-[calc(100dvh-57px)] overflow-y-auto border-t border-stone-300 md:hidden"
            aria-label="Huvudmeny"
          >
            <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
              {navItems.map((item) => {
                const expanded = mobileExpanded === item.id;
                return (
                  <li key={item.id} className="border-b border-stone-200 last:border-b-0">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-stone-800"
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileExpanded((cur) => (cur === item.id ? null : item.id))
                      }
                    >
                      <span>{item.label}</span>
                      <span className="text-lg leading-none text-stone-500" aria-hidden>
                        {expanded ? "\u2212" : "+"}
                      </span>
                    </button>
                    {expanded && (
                      <ul className="pb-3 pl-3">
                        {item.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block py-2 text-sm text-stone-700 hover:text-stone-950"
                              onClick={closeMobile}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
