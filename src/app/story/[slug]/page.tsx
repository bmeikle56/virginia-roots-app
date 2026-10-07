import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { StoryList } from "@/components/story-list";
import { formatStoryDate } from "@/lib/format";
import { sections } from "@/lib/sections";
import { getRelatedStories, getStories, getStory } from "@/lib/stories";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);

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
    <div className="mx-auto max-w-2xl animate-pulse px-4 py-8 motion-reduce:animate-none sm:px-6 sm:py-12" aria-busy="true">
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
  const { slug } = await params;
  const story = getStory(slug);

  if (!story) {
    notFound();
  }

  const section = sections[story.section];
  const related = getRelatedStories(story);

  return (
    <article className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href={section.href}
        className="inline-flex min-h-11 items-center text-xs font-medium uppercase tracking-[0.16em] text-neutral-400 hover:text-white"
      >
        {section.label}
      </Link>
      <h1 className="mt-3 font-serif text-[2rem] leading-[1.12] tracking-tight text-white sm:text-5xl">
        {story.title}
      </h1>
      <p className="mt-5 font-serif text-xl italic leading-8 text-neutral-300">{story.dek}</p>
      <p className="mt-6 border-y border-neutral-800 py-3 text-sm text-neutral-400">
        {story.author}
        <span aria-hidden="true"> · </span>
        <time dateTime={story.publishedAt}>{formatStoryDate(story.publishedAt)}</time>
        <span aria-hidden="true"> · </span>
        {story.readMinutes} min read
      </p>
      <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-200">
        {story.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {related.length > 0 ? (
        <aside className="mt-14" aria-labelledby="related-heading">
          <h2 id="related-heading" className="mb-4 font-serif text-2xl text-white">
            More in {section.label}
          </h2>
          <StoryList stories={related} />
        </aside>
      ) : null}
    </article>
  );
}
