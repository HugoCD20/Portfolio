import { ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:contact@hugodavid.dev" },
  { label: "RSS / Status", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <div className="mb-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-sans text-[18px] font-semibold text-on-surface">Hugo David</span>
              <span className="font-mono text-[13px] text-on-surface-variant">· Software Developer</span>
            </div>
            <p className="font-mono text-[13px] italic text-on-surface-variant">
              “Designed & built with curiosity.”
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="font-mono text-[13px] text-on-surface-variant transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-surface-container-low/50 px-4 pt-4 sm:flex-row">
          <div className="font-mono text-[10px] font-bold text-on-surface-variant">
            © 2024 Hugo David. All rights reserved. Substrate v2.4
          </div>
          <a
            href="#hero"
            className="flex items-center gap-1 font-mono text-[10px] font-bold text-on-surface-variant transition-colors hover:text-on-surface"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
