import { Cog, FlaskConical, Layers, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    index: "01 // PILLAR",
    icon: Layers,
    tone: "text-primary",
    title: "End-to-End Systems",
    description:
      "Comprehensive mastery from schema modeling and API protocols down to CI/CD pipelines and client-state hydration.",
  },
  {
    index: "02 // PILLAR",
    icon: Cog,
    tone: "text-secondary",
    description:
      "Defensive coding conventions, clean modular abstraction, exhaustive edge-case logging, and low technical debt.",
    title: "Pragmatic Craft",
  },
  {
    index: "03 // PILLAR",
    icon: FlaskConical,
    tone: "text-tertiary",
    title: "Active R&D",
    description:
      "Continuous empirical experimentation with vector embeddings, neural object detection, and data ingestion architectures.",
  },
];

export default function About() {
  return (
    <section id="about" className="w-full scroll-mt-16 bg-surface-container-lowest/60 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          index="01"
          eyebrow="About me"
          title="The Engineering Philosophy & Background"
          description="Crafting durable digital infrastructure by uniting software ergonomics with deep systems architecture."
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <p className="font-mono text-[16px] leading-7 text-on-surface">
              I am a software developer who thrives at the intersection of product engineering and
              infrastructure. Rather than confining myself to a single layer, I relish understanding
              the full lifecycle—from database indexing and container orchestration to
              micro-interactions in Vue and React.
            </p>
            <p className="font-mono text-[14px] leading-6 text-on-surface-variant">
              My journey is currently expanding deeper into data analysis, machine learning, and
              computer vision—applying rigorous engineering to extract actionable intelligence from
              messy datasets. When deploying a feature, I care equally about sub-millisecond query
              optimization, type safety, ergonomic developer DX, and the end-user cognitive load.
            </p>
            <div className="space-y-2 rounded-xl bg-surface-container p-6">
              <div className="flex items-center gap-2 font-mono text-[13px] font-bold text-secondary">
                <ShieldCheck className="h-[18px] w-[18px]" />
                <span>Core Tenet: Production Pragmatism</span>
              </div>
              <p className="font-mono text-[12px] leading-5 text-on-surface-variant">
                Technology exists to solve real human and operational problems. I select tools based
                on predictability, benchmarked telemetry, and maintainability—not transient industry
                fads.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl bg-surface-container-low p-6 shadow-sm transition-colors hover:bg-surface-container"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className={`font-mono text-[13px] font-bold ${pillar.tone}`}>{pillar.index}</span>
                  <pillar.icon className={`h-5 w-5 ${pillar.tone}`} />
                </div>
                <h3 className="mb-1 font-sans text-[18px] font-semibold text-on-surface">{pillar.title}</h3>
                <p className="font-mono text-[12px] leading-5 text-on-surface-variant">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
