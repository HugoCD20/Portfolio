import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, LayoutGrid, Mail } from "lucide-react";
import type {
  TeeoChallenges,
  TeeoExplore,
  TeeoLearned,
  TeeoPager,
  TeeoResults,
  TeeoRoadmap,
  TeeoSecurity,
  TeeoSummary,
} from "@/data/project-teeo";
import { Kicker, TeeoIcon } from "./TeeoUi";

export function TeeoChallengesSection({ challenges }: { challenges: TeeoChallenges }) {
  return (
    <section id="challenges" className="w-full scroll-mt-28 border-b border-surface-container-high/40 bg-surface-container-lowest/50 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex max-w-[700px] flex-col gap-2">
          <Kicker tone="text-error">{challenges.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold text-on-surface">{challenges.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{challenges.lede}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {challenges.items.map((item) => (
            <article key={item.id} className="flex flex-col justify-between gap-4 rounded-xl border border-surface-container-high bg-surface-container p-6">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[12px] text-primary">{item.id}</span>
                <h3 className="font-sans text-[20px] font-semibold text-on-surface">{item.title}</h3>
                <p className="font-mono text-[13px] leading-5 text-on-surface-variant">{item.body}</p>
              </div>
              <p className="rounded border border-surface-container-high bg-surface-container-high p-3 font-mono text-[12px] text-secondary">
                {item.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeeoSecuritySection({ security }: { security: TeeoSecurity }) {
  return (
    <section className="w-full border-b border-surface-container-high/40 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-3 lg:col-span-4">
          <Kicker tone="text-secondary">{security.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold text-on-surface">{security.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{security.lede}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
          {security.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 rounded-xl border border-surface-container-high bg-surface-container p-4">
              <div className="flex items-center gap-2">
                <TeeoIcon name={item.icon} className="h-5 w-5 text-primary" />
                <span className="font-sans text-[16px] font-medium text-on-surface">{item.title}</span>
              </div>
              <p className="font-mono text-[13px] leading-5 text-on-surface-variant">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeeoResultsSection({ results }: { results: TeeoResults }) {
  return (
    <section id="results" className="w-full scroll-mt-28 border-b border-surface-container-high/40 bg-surface-container-lowest/60 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex max-w-[700px] flex-col gap-2">
          <Kicker tone="text-secondary">{results.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold text-on-surface">{results.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{results.lede}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.kpis.map((kpi) => (
            <div key={kpi.label} className="flex flex-col gap-2 rounded-xl border border-surface-container-high bg-surface-container p-6">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                {kpi.label}
              </span>
              <span className="font-sans text-[40px] font-bold leading-none text-secondary">{kpi.value}</span>
              <p className="font-mono text-[13px] leading-5 text-on-surface-variant">{kpi.body}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 rounded-xl border border-surface-container-high bg-surface-container p-6 md:grid-cols-3">
          {results.qualitative.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <h3 className="flex items-center gap-2 font-sans text-[16px] font-medium text-on-surface">
                <TeeoIcon name={item.icon} className="h-[18px] w-[18px] text-secondary" />
                {item.title}
              </h3>
              <p className="font-mono text-[13px] leading-5 text-on-surface-variant">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeeoLearnedSection({ learned }: { learned: TeeoLearned }) {
  return (
    <section className="w-full border-b border-surface-container-high/40 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-3 lg:col-span-4">
          <Kicker>{learned.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold text-on-surface">{learned.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{learned.lede}</p>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-8">
          {learned.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-1 rounded-xl border border-surface-container-high bg-surface-container p-4">
              <h3 className="font-sans text-[16px] font-semibold text-on-surface">{item.title}</h3>
              <p className="font-mono text-[13px] leading-5 text-on-surface-variant">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeeoRoadmapSection({ roadmap }: { roadmap: TeeoRoadmap }) {
  return (
    <section className="w-full border-b border-surface-container-high/40 bg-surface-container-lowest/50 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex max-w-[700px] flex-col gap-2">
          <Kicker tone="text-secondary">{roadmap.kicker}</Kicker>
          <h2 className="font-sans text-[28px] font-semibold text-on-surface">{roadmap.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{roadmap.lede}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {roadmap.items.map((item, i) => (
            <div key={item.title} className="flex flex-col gap-2 rounded-xl border border-surface-container-high bg-surface-container p-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-high font-mono text-[13px] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-sans text-[16px] font-semibold text-on-surface">{item.title}</h3>
              <p className="font-mono text-[13px] leading-5 text-on-surface-variant">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeeoSummarySection({ summary }: { summary: TeeoSummary }) {
  return (
    <section className="w-full border-b border-surface-container-high/40 px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-2xl border border-surface-container-high bg-surface-container/70 p-6 lg:flex-row">
        <div className="flex max-w-[720px] flex-col gap-3">
          <span className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-secondary" />
            {summary.eyebrow}
          </span>
          <h2 className="font-sans text-[28px] font-semibold text-on-surface">{summary.title}</h2>
          <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{summary.body}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {summary.tags.map((tag) => (
              <span key={tag} className="rounded border border-surface-container-high bg-surface-container-high px-2.5 py-1 font-mono text-[12px] text-on-surface">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 lg:w-auto">
          <a
            href="/cv/hugo-david-cv-en.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-6 py-3.5 text-center font-mono text-[12px] font-bold text-on-primary-container shadow-lg transition-colors hover:bg-primary hover:text-on-primary"
          >
            <Download className="h-5 w-5" />
            <span>{summary.downloadLabel}</span>
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-container-high bg-surface-container-high px-6 py-3.5 text-center font-mono text-[12px] font-bold text-on-surface transition-colors hover:bg-surface-container-highest"
          >
            <Mail className="h-5 w-5" />
            <span>{summary.contactLabel}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TeeoExploreSection({ explore }: { explore: TeeoExplore }) {
  return (
    <section className="w-full border-b border-surface-container-high/40 bg-surface-container-lowest/60 px-6 py-12 text-center lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-[840px] flex-col items-center gap-5">
        <Kicker>{explore.eyebrow}</Kicker>
        <h2 className="font-sans text-[28px] font-semibold text-on-surface">{explore.title}</h2>
        <p className="font-mono text-[14px] leading-6 text-on-surface-variant">{explore.lede}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#telemetry-console"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-5 py-3.5 font-mono text-[12px] font-bold text-on-primary-container shadow-lg transition-colors hover:bg-primary hover:text-on-primary"
          >
            <span>{explore.telemetryLabel}</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-surface-container-high bg-surface-container-high px-5 py-3.5 font-mono text-[12px] font-bold text-on-surface transition-colors hover:bg-surface-container-highest"
          >
            <span>{explore.sourceLabel}</span>
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-surface-container-high bg-surface-container-high px-5 py-3.5 font-mono text-[12px] font-bold text-on-surface transition-colors hover:bg-surface-container-highest"
          >
            <span>{explore.rfcLabel}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TeeoPagerSection({ pager }: { pager: TeeoPager }) {
  return (
    <nav aria-label="Project navigation" className="w-full bg-surface-container-lowest px-6 py-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 md:grid-cols-3">
        <span className="flex items-center gap-4 rounded-xl border border-surface-container-high bg-surface-container p-4 opacity-60">
          <ArrowLeft className="h-6 w-6 shrink-0 text-outline" />
          <span className="flex min-w-0 flex-col">
            <span className="font-mono text-[11px] font-bold uppercase text-outline">{pager.prevLabel}</span>
            <span className="truncate font-sans text-[16px] font-medium text-on-surface">{pager.prevTitle}</span>
            <span className="truncate font-mono text-[12px] text-on-surface-variant">{pager.prevSubtitle}</span>
          </span>
        </span>
        <Link
          href="/#projects"
          className="flex items-center justify-center gap-2 rounded-xl border border-surface-container-high bg-surface-container-high p-4 text-center font-sans text-[16px] font-medium text-on-surface transition-colors hover:text-primary"
        >
          <LayoutGrid className="h-5 w-5" />
          <span>{pager.indexLabel}</span>
        </Link>
        <span className="flex items-center justify-between gap-4 rounded-xl border border-surface-container-high bg-surface-container p-4 text-right opacity-60">
          <span className="ml-auto flex min-w-0 flex-col">
            <span className="font-mono text-[11px] font-bold uppercase text-outline">{pager.nextLabel}</span>
            <span className="truncate font-sans text-[16px] font-medium text-on-surface">{pager.nextTitle}</span>
            <span className="truncate font-mono text-[12px] text-on-surface-variant">{pager.nextSubtitle}</span>
          </span>
          <ArrowRight className="h-6 w-6 shrink-0 text-outline" />
        </span>
      </div>
    </nav>
  );
}
