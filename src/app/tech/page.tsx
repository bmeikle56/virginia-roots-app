import type { Metadata } from "next";
import { SectionView } from "@/components/section-view";
import { sections } from "@/lib/sections";

export const metadata: Metadata = {
  title: sections.tech.label,
  description: sections.tech.description,
};

export default function TechPage() {
  return <SectionView section="tech" />;
}
