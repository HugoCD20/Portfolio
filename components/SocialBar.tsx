import { Mail } from "lucide-react";
import { contactMeta, socialChannels } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const kindIcon: Record<string, React.ReactNode> = {
  github: <GithubIcon className="h-4 w-4 text-primary" />,
  linkedin: <LinkedinIcon className="h-4 w-4 text-primary" />,
  email: <Mail className="h-4 w-4 text-primary" />,
};

export default function SocialBar() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-12">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-surface-container-low p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
            Network channels:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {socialChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.kind === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-lg bg-surface-container px-4 py-1.5 text-on-surface transition-colors hover:bg-surface-container-high"
              >
                {kindIcon[channel.kind]}
                <span className="font-mono text-[13px]">{channel.short}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-[13px] text-on-surface-variant">
          <span className="h-2 w-2 rounded-full bg-secondary" />
          <span>{contactMeta.pgpShort}</span>
          <span className="text-outline-variant">/</span>
          <span>{contactMeta.timezone}</span>
        </div>
      </div>
    </div>
  );
}
