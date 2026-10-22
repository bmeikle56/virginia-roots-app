"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/sections";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      {open ? (
        <path
          d="M5 5l12 12M17 5L5 17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ) : (
        <path
          d="M3 6h16M3 11h16M3 16h16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  function closeMenu() {
    setOpenPath(null);
  }

  function toggleMenu() {
    setOpenPath(open ? null : pathname);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-black pt-[env(safe-area-inset-top)]">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center px-4 md:flex md:gap-10">
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          <MenuIcon open={open} />
        </button>
        <Link
          href="/"
          className="justify-self-center text-lg font-medium tracking-tight text-white sm:text-2xl md:justify-self-auto md:text-[1.7rem]"
          onClick={closeMenu}
        >
          Virginia Roots
        </Link>
        <span className="md:hidden" aria-hidden="true" />
        <nav aria-label="Sections" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 items-center border-b-2 text-sm ${
                  active
                    ? "border-white text-white"
                    : "border-transparent text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="h-0.5 bg-white" />
      <div className="mt-px h-px bg-neutral-400" />
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-b border-neutral-800 bg-black md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-neutral-800 last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                  className={`flex min-h-12 items-center text-lg ${
                    active ? "text-white" : "text-neutral-400"
                  }`}
                >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
