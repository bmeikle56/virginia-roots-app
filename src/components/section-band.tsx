import Link from "next/link";
import { StoryList } from "@/components/story-list";
import { sections, type Section } from "@/lib/sections";
import type { Story } from "@/lib/stories";

export function SectionBand({
  section,
  stories,
}: {
  section: Section;
  stories: Story[];
}) {
  const meta = sections[section];

  return (
    <section
      aria-labelledby={`${section}-heading`}
      className="border-t border-neutral-800 py-10 sm:py-14"
    >
      <div className="grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12">
        <div className="flex items-center justify-between gap-4 md:block">
          <h2 id={`${section}-heading`} className="font-serif text-3xl text-white">
            {meta.label}
          </h2>
          <Link
            href={meta.href}
            className="inline-flex min-h-11 items-center text-sm text-neutral-400 underline-offset-4 hover:text-white hover:underline md:mt-3"
          >
            All {meta.label.toLowerCase()}
          </Link>
        </div>
        <StoryList stories={stories} />
      </div>
    </section>
  );
}
