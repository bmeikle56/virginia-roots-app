import { LeadStory, StoryList } from "@/components/story-list";
import { sections, type Section } from "@/lib/sections";
import { getStoriesBySection } from "@/lib/stories";

export function SectionView({ section }: { section: Section }) {
  const meta = sections[section];
  const items = getStoriesBySection(section);
  const [lead, ...rest] = items;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="max-w-3xl">
        <h1 className="font-serif text-4xl tracking-tight text-white sm:text-6xl">
          {meta.label}
        </h1>
        <p className="mt-4 text-lg leading-7 text-neutral-400">{meta.description}</p>
      </header>
      {lead ? (
        <div className="mt-10 border-t border-neutral-800 pt-8">
          <LeadStory story={lead} size="section" />
        </div>
      ) : (
        <p className="mt-10 text-neutral-400">No stories yet.</p>
      )}
      {rest.length > 0 ? (
        <div className="mt-12">
          <h2 className="mb-4 font-serif text-2xl text-white">
            More {meta.label.toLowerCase()}
          </h2>
          <StoryList stories={rest} />
        </div>
      ) : null}
    </div>
  );
}
