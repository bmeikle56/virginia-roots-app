import type { Metadata } from "next";
import { SectionView } from "@/components/section-view";
import { sections } from "@/lib/sections";

export const metadata: Metadata = {
  title: sections.sports.label,
  description: sections.sports.description,
};

export default function SportsPage() {
  return <SectionView section="sports" />;
}
