import { Download, Eye, FileText } from "lucide-react";
import { cvAssets } from "@/data/portfolio";

export default function ResumeCta() {
  return (
    <section id="resume" className="w-full scroll-mt-16 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low p-8 shadow-2xl lg:p-12">
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono text-[13px] text-primary">
                <FileText className="h-4 w-4" />
                <span>CURRICULUM VITAE & PORTFOLIO DOSSIER</span>
              </div>
              <h2 className="font-sans text-[30px] font-bold tracking-tight text-on-surface md:text-[40px] md:leading-[48px]">
                Want to examine my full technical trajectory?
              </h2>
              <p className="max-w-2xl font-mono text-[14px] leading-6 text-on-surface-variant">
                My detailed resume includes comprehensive architecture breakdowns of judicial document
                systems, benchmark statistics from hydroponic AI models, exhaustive list of
                open-source libraries, and verified employment references.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-[13px] text-on-surface-variant">
                <span>Format: PDF (A4)</span>
                <span>•</span>
                <span>English & Español</span>
                <span>•</span>
                <span className="text-secondary">ATS Compatible</span>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 lg:col-span-5">
              {cvAssets.map((cv) => (
                <div
                  key={cv.lang}
                  className="flex items-center justify-between gap-3 rounded-xl bg-surface-container-lowest/60 p-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-[12px] font-bold uppercase text-primary">
                      {cv.lang}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate font-mono text-[12px] font-bold text-on-surface">
                        {cv.label}
                      </div>
                      <div className="font-mono text-[11px] text-on-surface-variant">{cv.fileLabel}</div>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href={cv.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Preview ${cv.label} in browser`}
                      title={`Preview ${cv.label}`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-highest text-on-surface transition-colors hover:bg-surface-bright"
                    >
                      <Eye className="h-[18px] w-[18px]" />
                    </a>
                    <a
                      href={cv.href}
                      download={cv.downloadName}
                      aria-label={`Download ${cv.label}`}
                      title={`Download ${cv.label}`}
                      className="flex h-10 items-center gap-2 rounded-lg bg-primary-container px-4 font-mono text-[12px] font-bold text-on-primary-container shadow-lg transition-all hover:bg-primary hover:text-on-primary"
                    >
                      <Download className="h-[18px] w-[18px]" />
                      <span className="hidden sm:inline">PDF</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
