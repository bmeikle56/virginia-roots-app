export const sections = {
  sports: {
    label: "Sports",
    href: "/sports",
    description:
      "Games, decisions, and the people who have to live with both.",
  },
  tech: {
    label: "Tech",
    href: "/tech",
    description:
      "Tools, companies, and the systems that decide how work actually gets done.",
  },
} as const;

export type Section = keyof typeof sections;

export function isSection(value: string): value is Section {
  return Object.hasOwn(sections, value);
}

export const navItems = [sections.sports, sections.tech];
