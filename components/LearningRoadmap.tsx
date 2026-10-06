"use client";

import { BarChart3, Container, Database, ScanEye } from "lucide-react";
import { useContent } from "./LanguageProvider";
import type { AccentTone } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const goalIcons: Record<string, typeof Database> = {
  database: Database,
  eye: ScanEye,
  chart: BarChart3,
  container: Container,
};

const toneStyles: Record<AccentTone, { tag: string; bar: string; text: string }> = {
  primary: { tag: "bg-primary/10 text-primary", bar: "bg-primary", text: "text-primary" },
  secondary: { tag: "bg-secondary/10 text-secondary", bar: "bg-secondary", text: "text-secondary" },
  tertiary: { tag: "bg-tertiary/10 text-tertiary", bar: "bg-tertiary", text: "text-tertiary" },
};

export default function LearningRoadmap() {
  const { headings, learningGoals, ui } = useContent();
  const heading = headings.learning;

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          index={heading.index}
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {learningGoals.map((goal) => {
            const Icon = goalIcons[goal.icon] ?? Database;
            const tone = toneStyles[goal.tone];
            return (
              <div
                key={goal.title}
                className="flex flex-col justify-between space-y-4 rounded-xl bg-surface-container p-6 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold ${tone.tag}`}>
                      {goal.tag}
                    </span>
                    <Icon className={`h-5 w-5 ${tone.text}`} />
                  </div>
                  <h4 className="font-sans text-[18px] font-semibold text-on-surface">{goal.title}</h4>
                  <p className="font-mono text-[12px] leading-5 text-on-surface-variant">{goal.description}</p>
                </div>
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between font-mono text-[11px] text-on-surface-variant">
                    <span>{ui.progressLabel}</span>
                    <span className={`font-bold ${tone.text}`}>{goal.progress}%</span>
                  </div>
                  <div
                    className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-high"
                    role="progressbar"
                    aria-valuenow={goal.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${goal.title} progress`}
                  >
                    <div className={`h-full rounded-full ${tone.bar}`} style={{ width: `${goal.progress}%` }} />
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
