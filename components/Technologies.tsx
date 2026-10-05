import { BrainCircuit, Cloud, Database, Monitor, Server } from "lucide-react";
import { techGroups, type AccentTone } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const groupIcons: Record<string, typeof Monitor> = {
  monitor: Monitor,
  server: Server,
  brain: BrainCircuit,
  database: Database,
  cloud: Cloud,
};

const accentText: Record<AccentTone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

export default function Technologies() {
  return (
    <section id="technologies" className="w-full scroll-mt-16 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex-1">
            <SectionHeading
              index="02"
              eyebrow="Technical stack"
              title="Ecosystem & Core Tooling"
            />
          </div>
          <div className="mb-12 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] font-bold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Core Production Stack
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-3 py-1 font-mono text-[10px] font-bold text-on-surface-variant">
              Secondary & Tooling
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, i) => {
            const Icon = groupIcons[group.icon] ?? Monitor;
            const wide = i === techGroups.length - 1;
            return (
              <div
                key={group.title}
                className={`flex flex-col justify-between rounded-xl bg-surface-container-low p-6 shadow-sm ${
                  wide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-surface-container-high/40 pb-4">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-[22px] w-[22px] ${accentText[group.accent]}`} />
                      <h3 className="font-sans text-[18px] font-semibold text-on-surface">{group.title}</h3>
                    </div>
                    <span className="font-mono text-[13px] text-on-surface-variant">{group.countLabel}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.coreTools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded bg-primary-container/20 px-2.5 py-1 font-mono text-[10px] font-bold text-primary-container"
                      >
                        {tool}
                      </span>
                    ))}
                    {group.secondaryTools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded bg-surface-container-high px-2.5 py-1 font-mono text-[10px] font-bold text-on-surface-variant"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-surface-container-high/30 pt-6 font-mono text-[12px] text-on-surface-variant">
                  <span>{group.footerLeft}</span>
                  <span className={`font-bold ${accentText[group.accent]}`}>{group.footerRight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
