import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">404</p>
      <h1 className="mt-3 max-w-xl font-serif text-4xl tracking-tight text-white sm:text-5xl">
        This page is not on the site.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-7 text-neutral-400">
        The story may have moved, or the link may be wrong.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center text-white underline underline-offset-4"
      >
        Back to the front page
      </Link>
    </div>
  );
}
