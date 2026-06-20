import { featuredProjects } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Selected work"
            index="02"
            title="Projects that had to perform"
            lead="A tower over live transit. A million square feet before peak season. A plant that never dropped below permit. The hard ones."
            className="lg:max-w-2xl"
          />
          <Reveal delay={0.1}>
            <ButtonLink href="/projects" variant="outline">
              All 240+ projects
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
