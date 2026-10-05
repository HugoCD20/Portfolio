import { ArrowDown, Download } from "lucide-react";
import { hero } from "@/data/portfolio";
import TerminalWidget from "./TerminalWidget";

export default function Hero() {
  return (
    <section id="hero" className="relative mx-auto max-w-7xl scroll-mt-16 px-6 pb-16 pt-12 lg:px-12">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-6 lg:col-span-7">
          <div className="flex items-center gap-2 rounded-full bg-surface-container-high/90 px-4 py-2 shadow-sm">
            <div className="relative flex items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-secondary opacity-75" />
            </div>
            <span className="font-mono text-[13px] font-bold tracking-tight text-secondary">
              AVAILABLE FOR ENGAGEMENTS
            </span>
            <span className="font-mono text-[13px] text-outline-variant">|</span>
            <span className="truncate font-mono text-[13px] text-on-surface-variant">
              Full Stack · Data & AI · DevOps
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline gap-2">
              <h1 className="font-sans text-[36px] font-bold leading-[44px] tracking-tight text-on-surface md:text-[56px] md:leading-[64px]">
                {hero.name}
              </h1>
              <span className="rounded bg-primary/10 px-2 py-1 font-mono text-[12px] font-bold uppercase tracking-wider text-primary">
                {hero.roleBadge}
              </span>
            </div>
            <p className="font-sans text-[22px] font-medium leading-[30px] tracking-tight text-primary">
              {hero.tagline}
            </p>
          </div>

          <p className="max-w-2xl font-mono text-[16px] leading-7 text-on-surface-variant">{hero.pitch}</p>

          <div className="flex w-full flex-wrap items-center gap-4 pt-1 sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-6 py-3 font-mono text-[12px] font-bold text-on-primary-container shadow-lg transition-all duration-200 hover:bg-primary hover:text-on-primary"
            >
              <span>EXPLORE FEATURED PROJECTS</span>
              <ArrowDown className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container-high px-6 py-3 font-mono text-[12px] font-bold text-on-surface transition-all duration-200 hover:bg-surface-container-highest"
            >
              <Download className="h-[18px] w-[18px]" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-surface-container-lowest/80 px-4 py-2 font-mono text-[13px] text-on-surface-variant">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="text-on-surface">Status:</span>
            <span className="truncate">{hero.statusTicker}</span>
          </div>
        </div>

        <div className="w-full lg:col-span-5">
          <TerminalWidget />
        </div>
      </div>
    </section>
  );
}
