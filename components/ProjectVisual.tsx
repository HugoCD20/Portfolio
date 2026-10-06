"use client";

import { FileLock2, ScanEye, ShieldCheck } from "lucide-react";
import { useContent } from "./LanguageProvider";
import type { ProjectVisualKind } from "@/data/portfolio";

/**
 * Local placeholder visuals for featured projects.
 * Pure CSS/SVG mocks — no external image dependencies.
 * All display strings come from the active locale.
 */

const visionTones = [
  "border-secondary",
  "border-secondary",
  "border-amber-400",
  "border-secondary",
  "border-secondary",
  "border-primary",
];

const ragTones = ["text-secondary", "text-on-surface", "text-on-surface-variant"];

function ArchiveVisual() {
  const { archive } = useContent().projectVisuals;

  return (
    <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden bg-surface-container-high p-6">
      <div className="space-y-2 font-mono text-[12px]">
        <div className="flex items-center justify-between border-b border-surface-container-highest pb-2">
          <span className="font-bold text-primary">{archive.title}</span>
          <span className="rounded bg-secondary/10 px-2 py-0.5 text-[11px] text-secondary">
            {archive.sealed}
          </span>
        </div>
        {archive.files.map((file) => (
          <div key={file.name} className="flex items-center justify-between gap-2 rounded bg-surface-container-lowest/80 px-3 py-2">
            <span className="flex min-w-0 items-center gap-2 text-on-surface">
              <FileLock2 className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="min-w-0 break-words">{file.name}</span>
            </span>
            <span className="shrink-0 text-[11px] text-secondary">{file.state}</span>
          </div>
        ))}
        <div className="rounded border-l-2 border-secondary bg-surface-container-lowest/80 p-3 text-[11px] text-on-surface-variant">
          <span className="font-semibold text-secondary">{archive.hashLabel}</span> {archive.hashValue}
        </div>
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 rounded-lg bg-surface/90 p-4 backdrop-blur-md">
        <div className="min-w-0">
          <div className="font-mono text-[13px] font-bold text-secondary">{archive.metricTitle}</div>
          <div className="font-mono text-[12px] leading-snug text-on-surface">{archive.metricBody}</div>
        </div>
        <ShieldCheck className="h-6 w-6 shrink-0 text-secondary" />
      </div>
    </div>
  );
}

function VisionVisual() {
  const { vision } = useContent().projectVisuals;

  return (
    <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden bg-surface-container-high p-6">
      <div className="grid flex-1 grid-cols-3 gap-2">
        {vision.cells.map((cell, i) => (
          <div
            key={cell.label}
            className={`flex flex-col justify-between rounded border-2 border-dashed ${visionTones[i % visionTones.length]} bg-gradient-to-br from-secondary/10 via-surface-container-lowest to-primary/10 p-2`}
          >
            <ScanEye className="h-4 w-4 shrink-0 text-secondary" />
            <div className="min-w-0">
              <div className="break-words font-mono text-[10px] font-bold leading-tight text-on-surface">{cell.label}</div>
              <div className="break-words font-mono text-[10px] leading-tight text-secondary">{cell.detail}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 rounded-lg bg-surface/90 p-4 backdrop-blur-md">
        <div className="min-w-0">
          <div className="font-mono text-[13px] font-bold text-secondary">{vision.metricTitle}</div>
          <div className="font-mono text-[12px] leading-snug text-on-surface">{vision.metricBody}</div>
        </div>
        <ScanEye className="h-6 w-6 shrink-0 text-primary" />
      </div>
    </div>
  );
}

function RagVisual() {
  const { rag } = useContent().projectVisuals;

  return (
    <div className="h-full min-h-[320px] space-y-3 bg-surface-container-lowest p-6 font-mono text-[12px] text-on-surface-variant">
      <div className="flex items-center justify-between border-b border-surface-container-high pb-2 font-bold text-tertiary">
        <span>{rag.title}</span>
        <span className="text-[11px] font-normal text-on-surface-variant">{rag.algo}</span>
      </div>
      <div className="rounded bg-surface-container p-3 text-on-surface">
        <span className="font-bold text-primary">{rag.queryLabel}</span> {rag.query}
      </div>
      <div className="space-y-1.5 pt-1 text-[11px]">
        {rag.results.map((result, i) => (
          <div key={result.doc} className={`flex items-center justify-between gap-2 ${ragTones[i % ragTones.length]}`}>
            <span className="min-w-0 break-words">{result.doc}</span>
            <span className={`shrink-0 ${i === 0 ? "font-bold" : ""}`}>{result.score}</span>
          </div>
        ))}
      </div>
      <div className="rounded border-l-2 border-primary bg-surface-container-high p-3 text-[11px] text-on-surface-variant">
        <span className="font-semibold text-primary">{rag.answerLabel}</span> {rag.answer}
      </div>
    </div>
  );
}

function StreamVisual() {
  const { stream } = useContent().projectVisuals;

  return (
    <div className="flex h-full min-h-[320px] flex-col justify-between bg-surface-container-lowest p-6">
      <div>
        <div className="flex items-center justify-between border-b border-surface-container-high pb-3">
          <span className="font-mono text-[13px] font-bold text-secondary">{stream.title}</span>
          <span className="rounded bg-secondary/10 px-2 py-0.5 font-mono text-[11px] text-secondary">
            {stream.live}
          </span>
        </div>
        <div className="py-4">
          <svg className="h-28 w-full overflow-visible text-primary" viewBox="0 0 400 120">
            <defs>
              <linearGradient id="streamGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,90 Q 50,40 100,70 T 200,30 T 300,55 T 400,20 L 400,120 L 0,120 Z"
              fill="url(#streamGrad)"
            />
            <path
              d="M 0,90 Q 50,40 100,70 T 200,30 T 300,55 T 400,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <circle cx="200" cy="30" r="4" className="fill-secondary" />
            <circle cx="400" cy="20" r="4" className="fill-primary" />
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-2 text-center">
          {stream.stats.map((stat) => (
            <div key={stat.k} className="min-w-0 rounded bg-surface-container p-2">
              <div className="break-words font-mono text-[11px] leading-tight text-on-surface-variant">{stat.k}</div>
              <div className="font-sans text-[18px] font-bold text-on-surface">{stat.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 pt-4 font-mono text-[11px] text-on-surface-variant">
        <span className="min-w-0 break-words">{stream.buffer}</span>
        <span className="shrink-0 text-secondary">{stream.status}</span>
      </div>
    </div>
  );
}

export default function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  switch (kind) {
    case "archive":
      return <ArchiveVisual />;
    case "vision":
      return <VisionVisual />;
    case "rag":
      return <RagVisual />;
    case "stream":
      return <StreamVisual />;
  }
}
