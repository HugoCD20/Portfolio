import type { TeeoArchitecture, TeeoBuilt, TeeoSolved, TeeoStack } from "@/data/project-teeo";
import { Kicker, TeeoIcon } from "./TeeoUi";

export function TeeoBuiltSection({ built }: { built: TeeoBuilt }) {
  return (
    <section className="w-full border-b border-surface-container-high/40 bg-surface-container-lowest/50 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex max-w-[760px] flex-col gap-2">
          <Kicker>{built.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold text-on-surface">{built.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{built.lede}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {built.subsystems.map((sub) => (
            <article key={sub.id} className="flex flex-col justify-between gap-4 rounded-xl border border-surface-container-high bg-surface-container p-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="rounded border border-surface-container-high bg-surface-container-highest px-2 py-0.5 font-mono text-[12px] text-secondary">
                    {sub.id}
                  </span>
                  <TeeoIcon name={sub.icon} className="h-5 w-5 text-outline" />
                </div>
                <h3 className="font-sans text-[20px] font-semibold text-on-surface">{sub.title}</h3>
                <p className="font-mono text-[13px] leading-5 text-on-surface-variant">{sub.body}</p>
                <p className="rounded border border-surface-container-high bg-surface-container-lowest p-3 font-mono text-[12px] text-on-surface-variant">
                  <span className="text-primary">{sub.implLabel}</span> {sub.impl}
                </p>
              </div>
              <p className="flex items-center justify-between gap-2 border-t border-surface-container-high/40 pt-3 font-mono text-[12px]">
                <span className="text-on-surface-variant">{sub.outcomeLabel}</span>
                <span className="font-medium text-secondary">{sub.outcome}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeeoSolvedSection({ solved }: { solved: TeeoSolved }) {
  return (
    <section className="w-full border-b border-surface-container-high/40 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex max-w-[700px] flex-col gap-2">
          <Kicker>{solved.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold text-on-surface">{solved.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{solved.lede}</p>
        </div>
        <div className="flex flex-col gap-6">
          {solved.cases.map((item) => (
            <article key={item.title} className="flex flex-col gap-6 rounded-xl border border-surface-container-high bg-surface-container p-6 lg:flex-row">
              <div className="flex flex-col gap-2 border-b border-surface-container-high pb-4 lg:w-1/3 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                <span className="font-mono text-[12px] uppercase text-error">{item.challengeLabel}</span>
                <h3 className="font-sans text-[20px] font-semibold text-on-surface">{item.title}</h3>
                <p className="font-mono text-[13px] leading-5 text-on-surface-variant">{item.problem}</p>
              </div>
              <div className="flex flex-col justify-center gap-3 lg:w-2/3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-secondary">
                  {item.solutionLabel}
                </span>
                <p className="font-mono text-[14px] leading-6 text-on-surface">{item.solution}</p>
                <p className="flex flex-wrap items-center justify-between gap-2 rounded bg-surface-container-high p-3 font-mono text-[12px]">
                  <span className="text-on-surface-variant">{item.impactLabel}</span>
                  <span className="text-secondary">{item.impact}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeeoArchitectureSection({ architecture }: { architecture: TeeoArchitecture }) {
  return (
    <section id="technical-architecture" className="w-full scroll-mt-28 border-b border-surface-container-high/40 bg-surface-container-lowest/40 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex max-w-[700px] flex-col gap-2">
          <Kicker>{architecture.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold text-on-surface">{architecture.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{architecture.lede}</p>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl border border-surface-container-high bg-surface-container-low p-6 shadow-2xl">
          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-5">
            {architecture.tiers.map((tier) => (
              <div
                key={tier.title}
                className={`flex flex-col justify-between gap-3 rounded-xl border bg-surface-container p-4 ${
                  tier.core ? "border-primary/50 shadow-lg shadow-primary/5" : "border-surface-container-high"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[12px] ${tier.core ? "font-bold text-primary" : "text-outline"}`}>
                    {tier.tier}
                  </span>
                  <span className={`h-2 w-2 rounded-full ${tier.core ? "animate-pulse bg-secondary" : "bg-secondary"}`} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-[16px] font-semibold text-on-surface">{tier.title}</h3>
                  <p className="font-mono text-[12px] text-on-surface-variant">{tier.subtitle}</p>
                  <p className="pt-2 font-mono text-[13px] leading-5 text-outline">{tier.body}</p>
                </div>
                <p className="border-t border-surface-container-high pt-2 font-mono text-[12px] text-primary">{tier.footer}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 border-t border-surface-container-high pt-4 md:grid-cols-3">
            {architecture.specs.map((spec) => (
              <div key={spec.title} className="flex flex-col gap-1">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-on-surface">
                  {spec.title}
                </span>
                <span className="font-mono text-[12px] leading-5 text-on-surface-variant">{spec.body}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeeoStackSection({ stack }: { stack: TeeoStack }) {
  return (
    <section className="w-full border-b border-surface-container-high/40 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex max-w-[700px] flex-col gap-2">
          <Kicker>{stack.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold text-on-surface">{stack.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{stack.lede}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {stack.categories.map((category) => (
            <div key={category.title} className="flex flex-col gap-3 rounded-xl border border-surface-container-high bg-surface-container p-4">
              <div className="flex items-center gap-2 text-primary">
                <TeeoIcon name={category.icon} className="h-5 w-5" />
                <span className="font-sans text-[16px] font-medium text-on-surface">{category.title}</span>
              </div>
              <div className="flex flex-col gap-2">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="rounded bg-surface-container-high p-2 font-mono text-[12px]">
                    <span className="font-semibold text-on-surface">{tool.name}</span>
                    <span className="block text-[11px] text-outline">{tool.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
