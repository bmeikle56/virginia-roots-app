import { SectionBand } from "@/components/section-band";
import { LeadStory } from "@/components/story-list";
import { getStories, getStoriesBySection, type Story } from "@/lib/stories";
import type { Section } from "@/lib/sections";

function storiesForSection(section: Section, leadId: string): Story[] {
  const items = getStoriesBySection(section);
  const rest = items.filter((story) => story.id !== leadId);
  return rest.length > 0 ? rest : items;
}

export default function HomePage() {
  const stories = getStories();
  const lead = stories[0];

  if (!lead) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-neutral-400">No stories yet.</p>
      </div>
    );
  }

  const sports = storiesForSection("sports", lead.id);
  const tech = storiesForSection("tech", lead.id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <LeadStory story={lead} />
      <div className="mt-12 sm:mt-16">
        <SectionBand section="sports" stories={sports} />
        <SectionBand section="tech" stories={tech} />
      </div>
    </div>
  );
}
