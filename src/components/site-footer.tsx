import Link from "next/link";
import { navItems } from "@/lib/sections";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-neutral-800 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="font-serif text-xl text-white">
            Virginia Roots
          </Link>
          <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-400">
            Free reporting on sports and technology. No account required.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-neutral-400 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
