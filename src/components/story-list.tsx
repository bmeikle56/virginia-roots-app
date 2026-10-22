import Link from "next/link";
import { AuthorAvatar } from "@/components/author-avatar";
import { formatStoryDate } from "@/lib/format";
import { sections } from "@/lib/sections";
import type { Story } from "@/lib/stories";

export function LeadStory({
  story,
  size = "front",
}: {
  story: Story;
  size?: "front" | "section";
}) {
  const Title = size === "front" ? "h1" : "h2";
  const titleClass =
    size === "front"
      ? "text-[1.875rem] sm:text-5xl lg:text-[3.5rem]"
      : "text-3xl sm:text-4xl";
  const kicker =
    size === "front" ? `Top story · ${sections[story.section].label}` : "Latest";

  return (
    <Link
      href={`/story/${story.id}`}
      prefetch={true}
      className="group block max-w-4xl rounded-lg border border-neutral-800 bg-neutral-950 p-5 sm:p-6"
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
        {kicker}
      </p>
      <Title
        className={`mt-3 font-medium leading-[1.12] tracking-tight text-white group-hover:text-neutral-300 ${titleClass}`}
      >
        {story.title}
      </Title>
      <p className="mt-4 text-lg leading-7 text-neutral-300 sm:text-xl sm:leading-8">
        {story.dek}
      </p>
      <p className="mt-5 flex items-center gap-2.5 text-sm text-neutral-400">
        <AuthorAvatar name={story.author} />
        <span>
          <span className="font-bold text-white">{story.author}</span>
          <span aria-hidden="true"> · </span>
          <time dateTime={story.publishedAt}>{formatStoryDate(story.publishedAt)}</time>
          <span aria-hidden="true"> · </span>
          {story.readMinutes} min read
        </span>
      </p>
    </Link>
  );
}

export function StoryList({ stories }: { stories: Story[] }) {
  if (stories.length === 0) {
    return <p className="text-neutral-400">No stories in this section yet.</p>;
  }

  return (
    <ul className="flex flex-col gap-3">
      {stories.map((story) => (
        <li key={story.id}>
          <Link
            href={`/story/${story.id}`}
            prefetch={true}
            className="group block rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-5 sm:px-5"
          >
            <h3 className="text-2xl font-medium leading-tight tracking-tight text-white group-hover:text-neutral-300">
              {story.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-base leading-6 text-neutral-400">
              {story.dek}
            </p>
            <p className="mt-3 flex items-center gap-2.5 text-sm text-neutral-400">
              <AuthorAvatar name={story.author} />
              <span>
                <span className="font-bold text-white">{story.author}</span>
                <span aria-hidden="true"> · </span>
                <time dateTime={story.publishedAt}>{formatStoryDate(story.publishedAt)}</time>
                <span aria-hidden="true"> · </span>
                {story.readMinutes} min read
              </span>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
