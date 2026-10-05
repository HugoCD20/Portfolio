import { BrainCircuit, Cpu, Database, Inbox, Lightbulb, Rocket, Search, Sparkles, Zap } from "lucide-react";
import { benchmarks, pipelineSteps, type AccentTone } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const stepIcons: Record<string, typeof Search> = {
  inbox: Inbox,
  sparkles: Sparkles,
  search: Search,
  lightbulb: Lightbulb,
  cpu: Cpu,
  rocket: Rocket,
};

const benchmarkIcons: Record<string, typeof Zap> = {
  brain: BrainCircuit,
  zap: Zap,
  database: Database,
};

const toneText: Record<AccentTone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

export default function DataAI() {
  return (
    <section id="data-ai" className="relative w-full scroll-mt-16 overflow-hidden bg-surface-container-lowest/80 py-20">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          index="05"
          eyebrow="Expanding frontier"
          title="Data, Analytics & Machine Learning"
          description="Bridging standard software engineering with empirical data science. Turning unstructured media and log streams into automated inference pipelines."
        />

        <div className="mb-12 rounded-2xl bg-surface-container p-6 shadow-lg lg:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-surface-container-high pb-6">
            <span className="font-mono text-[13px] font-bold text-secondary">
              END-TO-END PIPELINE ARCHITECTURE
            </span>
            <span className="hidden font-mono text-[13px] text-on-surface-variant sm:inline">
              Raw Data ➔ Actionable Intelligence
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center md:grid-cols-3 lg:grid-cols-6">
            {pipelineSteps.map((step) => {
              const Icon = stepIcons[step.icon] ?? Search;
              return (
                <div key={step.index} className="flex flex-col items-center space-y-2 rounded-lg bg-surface-container-low p-3">
                  <Icon className={`h-5 w-5 ${toneText[step.tone]}`} />
                  <span className="font-mono text-[10px] font-bold text-on-surface">{step.index}</span>
                  <span className="font-mono text-[11px] text-on-surface-variant">{step.detail}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {benchmarks.map((bench) => {
            const Icon = benchmarkIcons[bench.icon] ?? Zap;
            return (
              <div key={bench.kicker} className="space-y-2 rounded-xl bg-surface-container-low p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[13px] font-bold ${toneText[bench.tone]}`}>
                    {bench.kicker}
                  </span>
                  <Icon className={`h-5 w-5 ${toneText[bench.tone]}`} />
                </div>
                <div className="font-sans text-[36px] font-bold tracking-tight text-on-surface">
                  {bench.value}
                </div>
                <div className="font-mono text-[12px] leading-5 text-on-surface-variant">
                  {bench.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
