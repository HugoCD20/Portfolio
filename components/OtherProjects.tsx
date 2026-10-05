"use client";

import { useState } from "react";
import { Database, ExternalLink, Gauge, Share2, SquareTerminal, Star } from "lucide-react";
import {
  otherProjectFilters,
  otherProjects,
  type AccentTone,
  type OtherProjectCategory,
} from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const cardIcons: Record<string, typeof Gauge> = {
  gauge: Gauge,
  terminal: SquareTerminal,
  share: Share2,
  database: Database,
};

const toneText: Record<AccentTone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

export default function OtherProjects() {
  const [filter, setFilter] = useState<"all" | OtherProjectCategory>("all");
  const visible = otherProjects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex-1">
            <SectionHeading
              index="04"
              eyebrow="Auxiliary labs"
              title="Open Source & Systems Tooling"
            />
          </div>
          <div className="mb-12 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects">
            {otherProjectFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                aria-pressed={filter === f.value}
                className={
                  filter === f.value
                    ? "rounded bg-primary-container px-3 py-1 font-mono text-[10px] font-bold text-on-primary-container"
                    : "rounded bg-surface-container-high px-3 py-1 font-mono text-[10px] font-bold text-on-surface-variant transition-colors hover:text-on-surface"
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visible.map((project) => {
            const Icon = cardIcons[project.icon] ?? Gauge;
            return (
              <div
                key={project.title}
                className="flex flex-col justify-between space-y-4 rounded-xl bg-surface-container-low p-6 shadow-sm transition-colors hover:bg-surface-container"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <Icon className={`h-6 w-6 ${toneText[project.tone]}`} />
                    <div className="flex items-center gap-1 font-mono text-[13px]">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                  <h4 className="font-sans text-[18px] font-semibold text-on-surface">{project.title}</h4>
                  <p className="font-mono text-[12px] leading-5 text-on-surface-variant">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-surface-container-high px-2 py-0.5 font-mono text-[11px] text-on-surface"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 font-mono text-[13px] ${toneText[project.tone]} hover:opacity-80`}
                  >
                    <span>View Source</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
