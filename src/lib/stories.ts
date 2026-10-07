import { sections, type Section } from "@/lib/sections";

export type Story = {
  slug: string;
  title: string;
  dek: string;
  section: Section;
  author: string;
  publishedAt: string;
  readMinutes: number;
  body: string[];
};

const stories: Story[] = [
  {
    slug: "midseason-standings",
    title: "The standings are the least interesting part of midseason",
    dek: "Wins are public. The sharper question is which teams are still choosing how they want to play, and which ones have already run out of choices.",
    section: "sports",
    author: "Lena Ortiz",
    publishedAt: "2026-10-06",
    readMinutes: 5,
    body: [
      "A midseason table looks decisive because it is a list of results. It is also a blunt instrument. Two teams can carry the same record into a week and be living in different seasons: one still auditioning a style, the other protecting a lead it does not fully trust.",
      "The useful reporting sits underneath the row. Who is closing games? Who is getting minutes that will not exist in the spring? Which injury is being described as day-to-day because the alternative would force a real lineup choice? Those details decide how a season turns, more than the number beside a name.",
      "Coaches talk about identity as if it arrives in a speech. It usually arrives when the rotation gets shorter and the opponent has already seen the first option on film. Midseason is when that film starts to matter more than the introductory version of a team.",
      "That is the piece worth writing. Not who is above the line this morning, but who still has a second idea.",
    ],
  },
  {
    slug: "browser-is-the-workplace",
    title: "The browser swallowed the workplace, quietly",
    dek: "The desktop icon did not disappear. It just started opening a tab, and most of the work moved in with it.",
    section: "tech",
    author: "Priya Shah",
    publishedAt: "2026-10-05",
    readMinutes: 5,
    body: [
      "Ask someone what application they work in and they will name a product. Watch them for an hour and they are in a browser. Documents, chat, design review, the admin screen nobody likes: each one is a tab that happens to have a logo.",
      "That shift is easy to miss because it did not come with a launch event. It arrived as links. A file is a URL. A meeting is a URL. A permission is a URL someone has to be granted before the page will admit them. The operating system still matters, but it matters as the thing that gets you to the browser and keeps the laptop from sleeping.",
      "For a publication, this changes the product story. The interesting question is no longer which native app won the quarter. It is which work still cannot survive a refresh, a flaky connection, or a tab someone closed by accident.",
      "The browser did not announce itself as the new office. It just became the place where the office already was.",
    ],
  },
  {
    slug: "on-device-models",
    title: "On-device models change who gets to experiment",
    dek: "When a model runs on the laptop in front of you, a newsroom can try an idea before it files a budget request.",
    section: "tech",
    author: "Noah Adler",
    publishedAt: "2026-10-04",
    readMinutes: 5,
    body: [
      "Cloud models made a certain kind of demo cheap and a certain kind of habit expensive. Every experiment had a meter on it. That is a reasonable way to run a platform. It is a poor way to find out whether a tool is useful on a Tuesday draft.",
      "On-device models flip the early part of that curve. A reporter can ask a messy question of their own notes, a producer can try three headline shapes, and an editor can see what a transcript looks like when it is summarized badly, which is often the more educational result. None of that requires a vendor call.",
      "The limit is honesty about what the machine is doing. A local model is still a model. It will invent a confident bridge between two facts that do not touch. The win is not that the checking goes away. The win is that the first attempt can happen in the room, on the material you already have.",
      "Smaller tools have a way of changing a workplace more than a keynote does, because people will actually use them before anyone writes a policy.",
    ],
  },
  {
    slug: "last-five-possessions",
    title: "The last five possessions are a different sport",
    dek: "The opening is a plan. The ending is a set of constraints, and the constraints are where games are actually decided.",
    section: "sports",
    author: "Marcus Webb",
    publishedAt: "2026-10-03",
    readMinutes: 4,
    body: [
      "A game script loves the start. Sets are called, matchups are fresh, and everyone can pretend the whiteboard survived contact. The end of a close game throws most of that out. Timeouts are gone, legs are heavier, and the defense has spent forty minutes learning what you trust.",
      "That is why late possessions deserve their own reporting, separate from the box score. A team that looks organized for three quarters can become a one-option team when the clock gets loud. Sometimes that option is a star. Sometimes it is whoever is still willing to catch the ball.",
      "Watch who the offense finds when the pretty version is covered. Watch who the defense is willing to leave. The last five possessions are not a highlight package. They are the roster, revealed.",
    ],
  },
  {
    slug: "speed-is-a-decision",
    title: "Feeling fast is a product decision",
    dek: "Speed is not what remains after the features are done. It is one of the features, and someone has to refuse the work that breaks it.",
    section: "tech",
    author: "Priya Shah",
    publishedAt: "2026-10-02",
    readMinutes: 4,
    body: [
      "People describe a slow app as a technical problem, which it often becomes. It usually starts as a series of yeses. Yes to one more panel, one more tracker, one more request that fires before the page knows what the reader came to see.",
      "Readers notice the result in their hands. A story that takes a breath before it appears feels uncertain, even when the words are fine. On a phone, that pause is the whole product. There is no patient desktop window waiting in the background.",
      "Teams that stay fast treat waiting as a bug with an owner. They keep the first screen small. They argue about what can load after the sentence the reader actually came for. That argument is editorial as much as it is engineering.",
      "An app feels quick because someone kept deciding that it should.",
    ],
  },
  {
    slug: "october-roster-math",
    title: "October is a spreadsheet with a crowd",
    dek: "The romance of a season opening sits on top of a colder document: who fits, who costs, and who can be asked to do two jobs.",
    section: "sports",
    author: "Camille Nguyen",
    publishedAt: "2026-10-01",
    readMinutes: 4,
    body: [
      "Opening week photographs well. The roster that produced it was built in rooms where the questions are narrower: If this player misses a month, who takes the minutes, and does that person already have a job? What does the second contract do to the third one?",
      "Fans experience those answers as vibes. A team feels deep, or thin, or strangely built. The construction is less mysterious than the broadcast makes it. Someone listed the roles, priced them, and accepted a hole they thought they could hide.",
      "October is a good time to write about that hole. The season has started, so the abstraction has a face, and it is still early enough that the front office's bet has not been confused with fate.",
    ],
  },
  {
    slug: "open-protocols-again",
    title: "Open protocols are back in the group chat",
    dek: "Feeds, logins, and payment links keep getting trapped inside products. The old idea of a shared standard is being asked to do new work.",
    section: "tech",
    author: "Evan Brooks",
    publishedAt: "2026-09-29",
    readMinutes: 4,
    body: [
      "Every few years a closed network becomes so good at distribution that publishing starts to mean posting there. Then the rules change, the reach drops, and people remember they do not own the hallway they have been walking down.",
      "Open protocols are the unglamorous alternative. They are slower to explain and easier to leave. That second quality is the point. A reading app, a newsletter, a small site: each one works better when the audience can move without asking a platform for permission.",
      "None of this is a purity test. Closed products are often where the audience already is, and ignoring them is a good way to write into an empty room. The useful stance is narrower. Use the networks, and keep a copy of the work somewhere that does not vanish when a product manager changes a tab.",
      "The group chat is interested again because the last decade made the cost of not owning the exit very easy to see.",
    ],
  },
  {
    slug: "recovery-is-the-game-plan",
    title: "Recovery days moved from the training room to the whiteboard",
    dek: "Rest used to be what you did around the sport. For a lot of teams, it is now one of the decisions that makes the sport possible.",
    section: "sports",
    author: "Lena Ortiz",
    publishedAt: "2026-09-28",
    readMinutes: 4,
    body: [
      "There was a time when sitting a healthy player required an apology. The schedule is denser now, the season is longer, and the available bodies are not. A maintenance day has become a lineup choice, which means it has become a story.",
      "The reporting problem is language. Teams say rest when they mean soreness, and soreness when they mean something they will not name until Friday. The honest version is usually simpler: someone decided that tomorrow's minutes were worth more than tonight's.",
      "That decision belongs in the game plan, not in a footnote. Who plays, who waits, and who is being saved for a week the staff has already circled: those choices are competitive strategy. They just happen to look like an empty chair.",
    ],
  },
];

export function getStories() {
  return [...stories].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getStoriesBySection(section: Section) {
  return getStories().filter((story) => story.section === section);
}

export function getRelatedStories(story: Story, limit = 3) {
  return getStoriesBySection(story.section)
    .filter((item) => item.slug !== story.slug)
    .slice(0, limit);
}

export function getSectionLabel(section: Section) {
  return sections[section].label;
}
