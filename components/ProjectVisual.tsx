import { FileLock2, ScanEye, ShieldCheck } from "lucide-react";
import type { ProjectVisualKind } from "@/data/portfolio";

/**
 * Local placeholder visuals for featured projects.
 * Pure CSS/SVG mocks — no external image dependencies.
 */

function ArchiveVisual() {
  return (
    <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden bg-surface-container-high p-6">
      <div className="space-y-2 font-mono text-[12px]">
        <div className="flex items-center justify-between border-b border-surface-container-highest pb-2">
          <span className="font-bold text-primary">EXPEDIENTE // TEEO-2024</span>
          <span className="rounded bg-secondary/10 px-2 py-0.5 text-[11px] text-secondary">SEALED</span>
        </div>
        {[
          ["EXP-08412 · Amparo directo", "indexed"],
          ["EXP-08413 · Recurso revisión", "indexed"],
          ["EXP-08414 · Juicio electoral", "hashing…"],
          ["EXP-08415 · Actuaría norte", "queued"],
        ].map(([name, state]) => (
          <div key={name} className="flex items-center justify-between rounded bg-surface-container-lowest/80 px-3 py-2">
            <span className="flex items-center gap-2 text-on-surface">
              <FileLock2 className="h-3.5 w-3.5 text-primary" />
              {name}
            </span>
            <span className="text-[11px] text-secondary">{state}</span>
          </div>
        ))}
        <div className="rounded border-l-2 border-secondary bg-surface-container-lowest/80 p-3 text-[11px] text-on-surface-variant">
          <span className="font-semibold text-secondary">SHA-256 chain:</span> 9f2c…a41b ✓ verified ·
          replica lag 0.2s
        </div>
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-lg bg-surface/90 p-4 backdrop-blur-md">
        <div>
          <div className="font-mono text-[13px] font-bold text-secondary">SYSTEM METRIC</div>
          <div className="font-mono text-[12px] text-on-surface">Audit Latency: 42ms | DB Pool: 64 Active</div>
        </div>
        <ShieldCheck className="h-6 w-6 text-secondary" />
      </div>
    </div>
  );
}

function VisionVisual() {
  return (
    <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden bg-surface-container-high p-6">
      <div className="grid flex-1 grid-cols-3 gap-2">
        {[
          { label: "CANOPY A-01", conf: "0.96", tone: "border-secondary" },
          { label: "CANOPY A-02", conf: "0.93", tone: "border-secondary" },
          { label: "CANOPY A-03", conf: "0.71 · tip-burn?", tone: "border-amber-400" },
          { label: "CANOPY B-01", conf: "0.97", tone: "border-secondary" },
          { label: "CANOPY B-02", conf: "0.95", tone: "border-secondary" },
          { label: "CANOPY B-03", conf: "0.88", tone: "border-primary" },
        ].map((cell) => (
          <div
            key={cell.label}
            className={`flex flex-col justify-between rounded border-2 border-dashed ${cell.tone} bg-gradient-to-br from-secondary/10 via-surface-container-lowest to-primary/10 p-2`}
          >
            <ScanEye className="h-4 w-4 text-secondary" />
            <div>
              <div className="font-mono text-[10px] font-bold text-on-surface">{cell.label}</div>
              <div className="font-mono text-[10px] text-secondary">{cell.conf}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-lg bg-surface/90 p-4 backdrop-blur-md">
        <div>
          <div className="font-mono text-[13px] font-bold text-secondary">MODEL INFERENCE</div>
          <div className="font-mono text-[12px] text-on-surface">mAP@50: 94.2% | Inference: 14ms (FP16)</div>
        </div>
        <ScanEye className="h-6 w-6 text-primary" />
      </div>
    </div>
  );
}

function RagVisual() {
  return (
    <div className="h-full min-h-[320px] space-y-3 bg-surface-container-lowest p-6 font-mono text-[12px] text-on-surface-variant">
      <div className="flex items-center justify-between border-b border-surface-container-high pb-2 font-bold text-tertiary">
        <span>VECTOR EMBEDDING QUERY</span>
        <span className="text-[11px] font-normal text-on-surface-variant">COSINE_SIMILARITY</span>
      </div>
      <div className="rounded bg-surface-container p-3 text-on-surface">
        <span className="font-bold text-primary">QUERY:</span> “Find clause 4.2 penalty clauses in 2023
        infrastructure contracts”
      </div>
      <div className="space-y-1.5 pt-1 text-[11px]">
        <div className="flex items-center justify-between text-secondary">
          <span>1. Doc #8412_Annex_A.pdf (p.14)</span>
          <span className="font-bold">0.962 match</span>
        </div>
        <div className="flex items-center justify-between text-on-surface">
          <span>2. Contract_MSA_Signed.pdf (p.8)</span>
          <span>0.914 match</span>
        </div>
        <div className="flex items-center justify-between text-on-surface-variant">
          <span>3. Telecom_SLA_Q3.pdf (p.21)</span>
          <span>0.887 match</span>
        </div>
      </div>
      <div className="rounded border-l-2 border-primary bg-surface-container-high p-3 text-[11px] text-on-surface-variant">
        <span className="font-semibold text-primary">SYNTHESIZED ANSWER:</span> Per Clause 4.2, SLA penalties
        trigger at &lt;99.9% uptime with 5% rebate credited to net monthly billing.
      </div>
    </div>
  );
}

function StreamVisual() {
  return (
    <div className="flex h-full min-h-[320px] flex-col justify-between bg-surface-container-lowest p-6">
      <div>
        <div className="flex items-center justify-between border-b border-surface-container-high pb-3">
          <span className="font-mono text-[13px] font-bold text-secondary">TELEMETRY INGESTION STREAM</span>
          <span className="rounded bg-secondary/10 px-2 py-0.5 font-mono text-[11px] text-secondary">
            LIVE PARSER
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
          {[
            ["Throughput", "1.2M/s"],
            ["Anomalies", "0.02%"],
            ["Drop Latency", "<3ms"],
          ].map(([k, v]) => (
            <div key={k} className="rounded bg-surface-container p-2">
              <div className="font-mono text-[11px] text-on-surface-variant">{k}</div>
              <div className="font-sans text-[18px] font-bold text-on-surface">{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 font-mono text-[11px] text-on-surface-variant">
        <span>Buffer: Redis Ring 512MB</span>
        <span className="text-secondary">Status: Synchronized</span>
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
