import { Briefcase, GraduationCap } from "lucide-react";
import { credentials, roles, type AccentTone } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const toneText: Record<AccentTone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

export default function Experience() {
  return (
    <section id="experience" className="w-full scroll-mt-16 bg-surface-container-lowest/60 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          index="07"
          eyebrow="Career path"
          title="Experience & Academic Background"
          description="Proven history delivering production software coupled with a rigorous foundation in computational theory."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <h3 className="flex items-center gap-2 font-sans text-[22px] font-semibold text-on-surface">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>Engineering Track Record</span>
            </h3>
            <div className="space-y-6">
              {roles.map((role) => (
                <div key={role.title} className="space-y-3 rounded-xl bg-surface-container p-6 shadow-sm">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h4 className="font-sans text-[18px] font-bold text-on-surface">{role.title}</h4>
                    <span className="font-mono text-[13px] font-bold text-secondary">{role.period}</span>
                  </div>
                  <div className="font-mono text-[12px] text-primary">{role.org}</div>
                  <p className="font-mono text-[12px] leading-5 text-on-surface-variant">{role.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-surface-container-high px-2 py-0.5 font-mono text-[11px] text-on-surface"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 lg:col-span-5">
            <h3 className="flex items-center gap-2 font-sans text-[22px] font-semibold text-on-surface">
              <GraduationCap className="h-5 w-5 text-tertiary" />
              <span>Education & Credentials</span>
            </h3>
            <div className="space-y-6">
              {credentials.map((cred) => (
                <div key={cred.title} className="space-y-2 rounded-xl bg-surface-container p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[13px] font-bold ${toneText[cred.tone]}`}>
                      {cred.kicker}
                    </span>
                    <span className="font-mono text-[13px] text-on-surface-variant">{cred.status}</span>
                  </div>
                  <h4 className="font-sans text-[18px] font-semibold text-on-surface">{cred.title}</h4>
                  <p className="font-mono text-[12px] leading-5 text-on-surface-variant">{cred.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
