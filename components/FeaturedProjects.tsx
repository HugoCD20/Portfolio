import { ArrowRight } from "lucide-react";
import { featuredProjects, type AccentTone, type FeaturedProject } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";

const badgeClass: Record<AccentTone, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  tertiary: "bg-tertiary/10 text-tertiary",
};

const dotClass: Record<AccentTone, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
};

function ProjectInfo({ project }: { project: FeaturedProject }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-6 p-8 lg:p-10">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className={`rounded px-2.5 py-1 font-mono text-[10px] font-bold ${badgeClass[project.badgeTone]}`}>
            {project.badge}
          </span>
          <span className="font-mono text-[13px] text-on-surface-variant">{project.subtitle}</span>
        </div>
        <h3 className="font-sans text-[30px] font-bold leading-[38px] text-on-surface">{project.title}</h3>
        <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{project.description}</p>
        <div className="space-y-2 pt-2">
          {project.bullets.map((bullet) => (
            <div key={bullet} className="flex items-center gap-2 font-mono text-[12px] text-on-surface">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClass[project.badgeTone]}`} />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-surface-container-high px-2.5 py-1 font-mono text-[12px] text-on-surface"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={project.primaryCta.href}
            {...(project.primaryCta.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2.5 font-mono text-[12px] font-bold text-on-primary-container transition-colors hover:bg-primary"
          >
            <span>{project.primaryCta.label}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={project.secondaryCta.href}
            {...(project.secondaryCta.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="inline-flex items-center gap-2 rounded-lg bg-surface-container-high px-4 py-2.5 font-mono text-[12px] font-bold text-on-surface transition-colors hover:bg-surface-container-highest"
          >
            <span>{project.secondaryCta.label}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="w-full scroll-mt-16 bg-surface-container-lowest/70 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          index="03"
          eyebrow="Showcase repository"
          title="Featured Production Projects"
          description="Architectural deep dives into enterprise software, deep learning computer vision, and AI document retrieval."
        />

        <div className="space-y-12">
          {featuredProjects.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <div key={project.slug} className="overflow-hidden rounded-2xl bg-surface-container shadow-xl">
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                  <div className={flipped ? "order-1 lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
                    <ProjectInfo project={project} />
                  </div>
                  <div
                    className={`relative min-h-[300px] overflow-hidden lg:col-span-5 ${
                      flipped ? "order-2 lg:order-1" : ""
                    }`}
                  >
                    <ProjectVisual kind={project.visual} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
