"use client";

import { useEffect, useState } from "react";
import type { TeeoTelemetry } from "@/data/project-teeo";
import { TeeoIcon } from "./TeeoUi";

const accentText: Record<string, string> = {
  primary: "text-on-surface",
  secondary: "text-tertiary",
  tertiary: "text-on-surface",
};

/** Mock telemetry console: tab switching + subtle live jitter, no backend. */
export default function TeeoTelemetry({ telemetry }: { telemetry: TeeoTelemetry }) {
  const [tab, setTab] = useState(telemetry.tabs[0]?.id ?? "topology");
  const [ingestion, setIngestion] = useState(telemetry.metrics[0]?.value ?? "8,412");

  useEffect(() => {
    if (tab !== telemetry.tabs[0]?.id) return;
    const id = window.setInterval(() => {
      const base = 8412;
      const variation = Math.floor(Math.random() * 240) - 120;
      setIngestion((base + variation).toLocaleString("en-US"));
    }, 2400);
    return () => window.clearInterval(id);
  }, [tab, telemetry.tabs]);

  const bars = [82, 76, 89, 94, 68, 74, 85, 79, 81, 91, 72, 83, 78, 86, 88, 77, 82, 70, 92, 96, 80, 75, 87, 71];

  return (
    <section id="telemetry-console" className="w-full scroll-mt-28 border-b border-surface-container-high/40 bg-surface-container-lowest/50 px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <div className="flex items-center justify-between gap-3 rounded-t-xl border border-b-0 border-surface-container-high bg-surface-container-high px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="inline-block h-3 w-3 rounded-full bg-error/70" />
              <span className="inline-block h-3 w-3 rounded-full bg-secondary/70" />
              <span className="inline-block h-3 w-3 rounded-full bg-tertiary/70" />
            </div>
            <span className="truncate font-mono text-[12px] text-on-surface-variant">{telemetry.windowTitle}</span>
          </div>
          <div className="flex shrink-0 items-center gap-2 font-mono text-[12px]">
            <span className="rounded border border-surface-container-high bg-surface-container-lowest px-2 py-0.5 text-secondary">
              {telemetry.clusterState}
            </span>
            <span className="hidden text-on-surface-variant sm:inline">{telemetry.uptime}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-b-xl border border-surface-container-high bg-surface-container-lowest p-4 shadow-2xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {telemetry.metrics.map((metric, i) => (
              <div key={metric.label} className="flex flex-col gap-1 rounded-lg border border-surface-container-high bg-surface-container p-4">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="font-mono text-[11px] font-bold uppercase">{metric.label}</span>
                  <TeeoIcon name={metric.icon} className="h-4 w-4 text-primary" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className={`font-sans text-[28px] font-bold tracking-tight ${accentText[metric.accent]}`}>
                    {i === 0 ? ingestion : metric.value}
                  </span>
                  <span className="font-mono text-[12px] text-on-surface-variant">{metric.unit}</span>
                </div>
                <span className="font-mono text-[12px] text-on-surface-variant">{metric.hint}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="flex flex-col gap-3 rounded-lg border border-surface-container-high bg-surface-container p-4 lg:col-span-7">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[12px] font-medium uppercase text-on-surface">
                  {telemetry.histogramTitle}
                </span>
                <span className="shrink-0 font-mono text-[12px] text-on-surface-variant">{telemetry.histogramSample}</span>
              </div>
              <div className="flex h-44 w-full items-end gap-1 px-1 pb-2 pt-4" role="img" aria-label={telemetry.histogramTitle}>
                {bars.map((height, i) => (
                  <div
                    key={i}
                    style={{ height: `${height}%` }}
                    className={`flex-1 rounded-t-sm transition-all ${
                      height >= 94 ? "bg-tertiary/90 hover:bg-tertiary" : "bg-primary/80 hover:bg-primary"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-surface-container-high/40 pt-2 font-mono text-[12px] text-on-surface-variant">
                <span>{telemetry.histogramAvg}</span>
                <span className="text-secondary">{telemetry.histogramBuffer}</span>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border border-surface-container-high bg-surface-container-low p-4 font-mono text-[12px] lg:col-span-5">
              <div className="mb-2 flex items-center justify-between border-b border-surface-container-high pb-2">
                <span className="flex items-center gap-1 font-medium text-on-surface">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
                  {telemetry.logTitle}
                </span>
                <span className="text-[11px] text-on-surface-variant">{telemetry.logFormat}</span>
              </div>
              <div className="flex flex-col gap-1.5 overflow-hidden text-[11px] leading-relaxed">
                {[
                  ["14:02:19.412", "[COMMIT]", "exp JDCI-05-2026 hash 8a2c..f14 ok 41ms"],
                  ["14:02:19.413", "[SEALED]", "acuerdo JDCI-11-2026 firmado ok 38ms"],
                  ["14:02:19.414", "[INDEX]", "trigram JDC-05-2026 batch=200 12ms"],
                  ["14:02:19.415", "[REPLICA]", "lag=0.2s verified 2/2 healthy"],
                  ["14:02:19.416", "[COMMIT]", "exp CA-07-2026 reencausado ok 44ms"],
                  ["14:02:19.418", "[CHART]", "acuerdos_semana=15 render 22ms"],
                ].map(([time, tag, rest]) => (
                  <div key={`${time}-${rest}`} className="truncate text-on-surface-variant">
                    <span className="text-outline">{time}</span> <span className="text-secondary">{tag}</span> {rest}
                  </div>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between gap-2 border-t border-surface-container-high pt-2 text-[11px] text-outline">
                <span>{telemetry.logFooterLeft}</span>
                <span>{telemetry.logFooterRight}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-surface-container-high/40 pt-3">
            <div className="flex items-center gap-1 rounded-lg border border-surface-container-high bg-surface-container-high p-1" role="tablist">
              {telemetry.tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={
                    tab === t.id
                      ? "rounded bg-surface-container px-3 py-1 font-mono text-[13px] font-medium text-on-surface"
                      : "rounded px-3 py-1 font-mono text-[13px] text-on-surface-variant transition-colors hover:text-on-surface"
                  }
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 font-mono text-[12px] text-on-surface-variant">
              <span>{telemetry.tlsNote}</span>
              <span className="text-secondary">{telemetry.tlsCipher}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
