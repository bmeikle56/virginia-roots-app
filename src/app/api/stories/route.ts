import type { NextRequest } from "next/server";
import { isSection } from "@/lib/sections";
import { getStories, getStoriesBySection } from "@/lib/stories";

export async function GET(request: NextRequest) {
  const section = request.nextUrl.searchParams.get("section");

  if (section === null) {
    return Response.json(getStories());
  }

  if (!isSection(section)) {
    return Response.json({ error: "Unknown section" }, { status: 400 });
  }

  return Response.json(getStoriesBySection(section));
}
