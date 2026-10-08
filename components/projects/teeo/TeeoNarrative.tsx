import type { TeeoAbout, TeeoProblem, TeeoRole } from "@/data/project-teeo";
import { Kicker, TeeoIcon } from "./TeeoUi";

export function TeeoAboutSection({ about }: { about: TeeoAbout }) {
  return (
    <section className="w-full border-b border-surface-container-high/40 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-3 lg:col-span-4">
          <Kicker>{about.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold leading-[36px] tracking-tight text-on-surface">
            {about.title}
          </h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{about.lede}</p>
        </div>
        <div className="flex flex-col gap-6 font-mono text-[14px] leading-6 text-on-surface-variant lg:col-span-8">
          <p>{about.paragraph}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {about.audiences.map((card) => (
              <div key={card.title} className="rounded-lg border border-surface-container-high bg-surface-container p-4">
                <TeeoIcon name={card.icon} className="mb-2 h-6 w-6 text-primary" />
                <h3 className="mb-1 font-sans text-[16px] font-medium text-on-surface">{card.title}</h3>
                <p className="font-mono text-[13px] leading-5 text-on-surface-variant">{card.body}</p>
              </div>
            ))}
          </div>
          <p>{about.closing}</p>
        </div>
      </div>
    </section>
  );
}

export function TeeoProblemSection({ problem }: { problem: TeeoProblem }) {
  return (
    <section id="problem-role" className="w-full scroll-mt-28 border-b border-surface-container-high/40 bg-surface-container-lowest/40 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex max-w-[720px] flex-col gap-2">
          <Kicker tone="text-error">{problem.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold leading-[36px] text-on-surface">{problem.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{problem.lede}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {problem.steps.map((step, i) => (
            <div
              key={step.title}
              className={`flex flex-col gap-3 rounded-xl border bg-surface-container p-6 ${
                i === 2 ? "border-primary/30 shadow-lg shadow-primary/5" : "border-surface-container-high"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg font-mono text-[13px] font-bold ${
                  i === 2 ? "bg-primary-container text-on-primary" : "bg-error-container text-on-error"
                }`}
              >
                {step.index}
              </span>
              <h3 className="font-sans text-[20px] font-medium text-on-surface">{step.title}</h3>
              <ul className="flex list-disc flex-col gap-2 pl-4 font-mono text-[13px] leading-5 text-on-surface-variant">
                {step.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeeoRoleSection({ role }: { role: TeeoRole }) {
  return (
    <section className="w-full border-b border-surface-container-high/40 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex max-w-[700px] flex-col gap-2">
            <Kicker>{role.kicker}</Kicker>
            <h2 className="font-sans text-[28px] font-semibold text-on-surface">{role.title}</h2>
            <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{role.lede}</p>
          </div>
          <span className="flex items-center gap-2 self-start rounded-lg bg-surface-container p-2 font-mono text-[13px] text-on-surface">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {role.badge}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {role.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 rounded-xl border border-surface-container-high bg-surface-container/60 p-4 transition-colors hover:border-primary/50"
            >
              <div className="mb-1 flex items-center gap-2 text-primary">
                <TeeoIcon name={card.icon} className="h-5 w-5" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider">{card.tag}</span>
              </div>
              <h3 className="font-sans text-[16px] font-medium text-on-surface">{card.title}</h3>
              <p className="font-mono text-[13px] leading-5 text-on-surface-variant">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
