import Link from "next/link";
import { ArrowLeft, ArrowRight, ChartColumn, CodeXml, Terminal } from "lucide-react";
import type { TeeoMeta, TeeoSubNav } from "@/data/project-teeo";

interface Props {
  meta: TeeoMeta;
  nav: TeeoSubNav;
}

const metaLabels = ["Role", "Type", "Status", "Duration", "Core Stack"];

export default function TeeoHero({ meta, nav }: Props) {
  const metaValues = [meta.role, meta.type, meta.status, meta.duration, meta.coreStack];

  return (
    <section id="overview" className="relative w-full scroll-mt-28 overflow-hidden border-b border-surface-container-high/40 px-6 py-12 lg:px-12 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[340px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]"
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-container-high bg-surface-container-high px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
            {meta.category}
          </span>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-on-surface-variant transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{meta.backToProjects}</span>
          </Link>
        </div>

        <div className="flex max-w-[960px] flex-col gap-3">
          <h1 className="font-sans text-[36px] font-bold leading-[44px] tracking-tight text-on-surface md:text-[56px] md:leading-[64px]">
            {meta.title}
          </h1>
          <p className="font-sans text-[20px] font-medium leading-snug text-on-surface/90 md:text-[24px]">
            {meta.headline}
          </p>
          <p className="max-w-[840px] font-mono text-[14px] leading-6 text-on-surface-variant">{meta.lede}</p>
        </div>

        <dl className="grid grid-cols-2 gap-3 rounded-xl border border-surface-container-high/40 bg-surface-container/70 p-4 backdrop-blur-md md:grid-cols-3 lg:grid-cols-5">
          {metaValues.map((value, i) => (
            <div key={metaLabels[i]} className="flex min-w-0 flex-col gap-1">
              <dt className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                {metaLabels[i]}
              </dt>
              <dd className="truncate font-mono text-[13px] font-medium text-on-surface" title={value}>
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#telemetry-console"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-5 py-2.5 font-mono text-[12px] font-bold text-on-primary-container shadow-lg transition-colors hover:bg-primary hover:text-on-primary"
          >
            <ChartColumn className="h-[18px] w-[18px]" />
            <span>{meta.viewTelemetry}</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-surface-container-high bg-surface-container-high px-5 py-2.5 font-mono text-[12px] font-bold text-on-surface transition-colors hover:bg-surface-container-highest"
          >
            <Terminal className="h-[18px] w-[18px]" />
            <span>{meta.viewSource}</span>
          </a>
          <a
            href="#technical-architecture"
            className="ml-auto hidden items-center gap-1.5 font-mono text-[13px] text-on-surface-variant transition-colors hover:text-on-surface md:inline-flex"
          >
            <span>{meta.jumpToSpec}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <nav
          aria-label="Project sections"
          className="flex flex-wrap items-center gap-1 self-start rounded-lg bg-surface-container-low/60 p-1"
        >
          {[
            { label: nav.overview, href: "#overview" },
            { label: nav.problemRole, href: "#problem-role" },
            { label: nav.architecture, href: "#technical-architecture" },
            { label: nav.challenges, href: "#challenges" },
            { label: nav.results, href: "#results" },
          ].map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={i === 0 ? "page" : undefined}
              className={
                i === 0
                  ? "rounded bg-surface-container-high px-3 py-1 font-mono text-[13px] font-medium text-on-surface"
                  : "rounded px-3 py-1 font-mono text-[13px] text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Source code"
            className="flex h-8 w-8 items-center justify-center rounded text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
          >
            <CodeXml className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </section>
  );
}
