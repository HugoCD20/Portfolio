"use client";

import { Cog, FlaskConical, Layers, ShieldCheck } from "lucide-react";
import { useContent } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";

const pillarIcons = [Layers, Cog, FlaskConical];
const pillarTones = ["text-primary", "text-secondary", "text-tertiary"];

export default function About() {
  const { headings, aboutContent } = useContent();
  const heading = headings.about;

  return (
    <section id="about" className="w-full scroll-mt-16 bg-surface-container-lowest/60 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          index={heading.index}
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <p className="font-mono text-[16px] leading-7 text-on-surface">{aboutContent.paragraph1}</p>
            <p className="font-mono text-[14px] leading-6 text-on-surface-variant">
              {aboutContent.paragraph2}
            </p>
            <div className="space-y-2 rounded-xl bg-surface-container p-6">
              <div className="flex items-center gap-2 font-mono text-[13px] font-bold text-secondary">
                <ShieldCheck className="h-[18px] w-[18px]" />
                <span>{aboutContent.tenetTitle}</span>
              </div>
              <p className="font-mono text-[12px] leading-5 text-on-surface-variant">
                {aboutContent.tenetBody}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {aboutContent.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i % pillarIcons.length];
              const tone = pillarTones[i % pillarTones.length];
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl bg-surface-container-low p-6 shadow-sm transition-colors hover:bg-surface-container"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className={`font-mono text-[13px] font-bold ${tone}`}>{pillar.index}</span>
                    <Icon className={`h-5 w-5 ${tone}`} />
                  </div>
                  <h3 className="mb-1 font-sans text-[18px] font-semibold text-on-surface">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-[12px] leading-5 text-on-surface-variant">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
