import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AuthorAvatar } from "@/components/author-avatar";
import { StoryList } from "@/components/story-list";
import { formatStoryDate } from "@/lib/format";
import { sections } from "@/lib/sections";
import { getRelatedStories, getStories, getStory } from "@/lib/stories";

type StoryPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getStories().map((story) => ({ id: story.id }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { id } = await params;
  const story = getStory(id);

  if (!story) {
    return { title: "Story not found" };
  }

  return {
    title: story.title,
    description: story.dek,
  };
}

export default function StoryPage({ params }: StoryPageProps) {
  return (
    <Suspense fallback={<StoryFallback />}>
      <StoryContent params={params} />
    </Suspense>
  );
}

function StoryFallback() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-8 motion-reduce:animate-none sm:px-6 sm:py-12" aria-busy="true">
      <div className="h-3 w-16 bg-neutral-800" />
      <div className="mt-5 h-10 max-w-xl bg-neutral-800" />
      <div className="mt-3 h-10 max-w-lg bg-neutral-800" />
      <div className="mt-6 h-6 max-w-2xl bg-neutral-900" />
      <div className="mt-8 space-y-3">
        <div className="h-4 w-full bg-neutral-900" />
        <div className="h-4 w-full bg-neutral-900" />
        <div className="h-4 w-4/5 bg-neutral-900" />
      </div>
      <p className="sr-only">Loading story</p>
    </div>
  );
}

async function StoryContent({ params }: StoryPageProps) {
  const { id } = await params;
  const story = getStory(id);

  if (!story) {
    notFound();
  }

  const section = sections[story.section];
  const related = getRelatedStories(story);

  return (
    <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href={section.href}
        className="inline-flex min-h-11 items-center font-mono text-xs font-medium uppercase tracking-[0.14em] text-neutral-400 hover:text-white"
      >
        {section.label}
      </Link>
      <h1 className="mt-3 text-[2rem] font-medium leading-[1.12] tracking-tight text-white sm:text-5xl">
        {story.title}
      </h1>
      <p className="mt-5 text-xl leading-8 text-neutral-300">{story.dek}</p>
      <div className="mt-6 flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-400">
        <AuthorAvatar name={story.author} size="md" />
        <p>
          <span className="font-bold text-white">{story.author}</span>
          <span aria-hidden="true"> · </span>
          <time dateTime={story.publishedAt}>{formatStoryDate(story.publishedAt)}</time>
          <span aria-hidden="true"> · </span>
          {story.readMinutes} min read
        </p>
      </div>
      <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-200">
        {story.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {related.length > 0 ? (
        <aside className="mt-14" aria-labelledby="related-heading">
          <h2 id="related-heading" className="mb-4 text-2xl font-medium tracking-tight text-white">
            More in {section.label}
          </h2>
          <StoryList stories={related} />
        </aside>
      ) : null}
    </article>
  );
}
