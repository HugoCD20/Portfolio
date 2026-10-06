"use client";

import { Terminal } from "lucide-react";
import { useContent } from "./LanguageProvider";

const toneClass: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  plain: "text-on-surface",
};

/** Interactive CLI neofetch widget (right column of the hero). */
export default function TerminalWidget() {
  const { terminalSpecs } = useContent();

  return (
    <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-2xl">
      <div className="flex items-center justify-between gap-2 bg-surface-container-high px-4 py-2.5">
        <div className="flex shrink-0 items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-error/70" />
          <span className="inline-block h-3 w-3 rounded-full bg-amber-500/70" />
          <span className="inline-block h-3 w-3 rounded-full bg-secondary/70" />
        </div>
        <div className="flex min-w-0 items-center gap-1 truncate font-mono text-[13px] text-on-surface-variant">
          <Terminal className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">workstation: ~/hugo-env</span>
        </div>
        <div className="w-10 shrink-0 text-right">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
        </div>
      </div>

      <div className="space-y-3 bg-surface-container-lowest/95 p-6 font-mono text-[13px] text-on-surface">
        <div className="flex flex-wrap items-center gap-2 text-on-surface-variant">
          <span className="text-secondary">hugo@workstation</span>
          <span className="text-outline">:</span>
          <span className="text-primary">~</span>
          <span className="text-on-surface">$</span>
          <span className="text-on-surface">neofetch --dev-profile</span>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-2 text-[12px] leading-5 min-[420px]:grid-cols-12">
          <div className="select-none pt-1 font-bold leading-none text-primary min-[420px]:col-span-4">
            <pre className="font-mono text-[11px] leading-tight">
{`  /\\_/\\
 ( o.o )
  > ^ <
[HD-NODE]
======---
SYS: LINUX
ARCH: x86
NET: UP`}
            </pre>
          </div>
          <div className="space-y-1 min-[420px]:col-span-8">
            {terminalSpecs.map((spec) => (
              <div key={spec.label}>
                <span className="font-bold text-primary">{spec.label}:</span>{" "}
                <span className={toneClass[spec.tone] ?? "text-on-surface"}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 pt-2 text-on-surface-variant">
          <span className="text-secondary">hugo@workstation</span>
          <span className="text-outline">:</span>
          <span className="text-primary">~/projects</span>
          <span className="text-on-surface">$</span>
          <span className="inline-block h-4 w-2 animate-pulse bg-primary" />
        </div>
      </div>
    </div>
  );
}
