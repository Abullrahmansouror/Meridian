import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected commercial, civil, industrial, and residential projects from Meridian Build Group — towers, plants, distribution centers, and infrastructure across the Mountain West.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        index="—"
        title="The record, project by project."
        lead="Two hundred and forty projects and counting. Here are the ones that had to perform under pressure — over live transit, on a deadline, without dropping below permit."
        imageId="1486406146926-c627a92ad1ab"
        stats={[
          { value: "240+", label: "Delivered" },
          { value: "4.2M", label: "Sq ft" },
          { value: "$1.9B", label: "Put in place" },
          { value: "3", label: "States" },
        ]}
      />
      <ProjectsExplorer />
      <CallToAction
        eyebrow="Your project next"
        title="Imagine yours on this list."
        body="The projects above had hard constraints and harder deadlines. Bring us yours."
      />
    </>
  );
}
