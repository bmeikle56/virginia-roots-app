import { getStory } from "@/lib/stories";

type StoryRouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: StoryRouteContext) {
  const { id } = await context.params;
  const story = getStory(id);

  if (!story) {
    return Response.json({ error: "Story not found" }, { status: 404 });
  }

  return Response.json(story);
}
