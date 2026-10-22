import { sections, type Section } from "@/lib/sections";

export type Story = {
  id: string;
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
    id: "is-the-wizards-front-office-good",
    title: "Is the Wizards front office good?",
    dek: "The bet was placed and called. This year, the players Will Dawkins bet on will decide his fate.",
    section: "sports",
    author: "Braeden Meikle",
    publishedAt: "2026-10-21",
    readMinutes: 2,
    body: [
      "The Wizards have been historically bad for the past three seasons.",
      "This is by design. In the modern era, intense tanking to gamble for premium draft picks is the only way to craft a championship roster.",
      "The fans are happy. Jaded from decades of middling results and a rosters devoid of talent, the Washington fanbase clamored for a new front office to properly rebuild the roster. And finally in June 2023, meddling Wizards owner Ted Leonsis finally folded, poaching Will Dawkins from the prospering Thunder.",
      "In a league with only one round of critical drafting, Dawkins has demonstrated shrewd ability to accurately assess talent securing three consecutive blue chip talents in the top six so far in his tenure. He's demonstrated aggression swigging big and trading for motivated players on bad contracts. He's shown risk betting on a head coach renowned for player development.",
      "But now the Wizards are expected to win.",
      "With discourse dominated by brazen tanking across the league this past season, commissioner Adam Silver had seen enough. Silver first tried levying trivial fines, but that did little to deter teams. Eager to manufacture league equilibrium, Silver quickly shifting to change the structured lottery system for the upcoming year. The new lottery system siphons lottery balls from the weakest teams to better teams in an effort to make the league competitive.",
      "With these lottery changes forcing Washington's hand, Silver and the fans expect Dawkins' Wizards to compete and to win.",
      "The Washington fanbase remains apprehensive.",
      "Washington Commanders general manager Adam Peters was hired just two years ago and like Dawkins, he was extolled as a talented young mind. Both fit the same archetype of general manager with their confident temperament and calculated reticence. On the football field in Washington, Peters is a year ahead in his operation. But compounding draft and free agency mistakes, subpar coaching, and a permeating injury bug have Peters skating on thin ice.",
      "For now, Dawkins is making the right decisions. But the bet was placed and called, so let's run the board out. This year, players he bet on will decide his fate.",
    ],
  },
  {
    id: "browser-is-the-workplace",
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
    id: "on-device-models",
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
    id: "speed-is-a-decision",
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
    id: "open-protocols-again",
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
];

export function getStories() {
  return [...stories].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getStory(id: string) {
  return stories.find((story) => story.id === id);
}

export function getStoriesBySection(section: Section) {
  return getStories().filter((story) => story.section === section);
}

export function getRelatedStories(story: Story, limit = 3) {
  return getStoriesBySection(story.section)
    .filter((item) => item.id !== story.id)
    .slice(0, limit);
}

export function getSectionLabel(section: Section) {
  return sections[section].label;
}
