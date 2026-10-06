"use client";

import { useState } from "react";
import { FileText, Menu, Terminal, X } from "lucide-react";
import { LanguageToggle, useContent } from "./LanguageProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { navLinks, ui } = useContent();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/80 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-6 lg:px-12">
        <div className="flex min-w-0 items-center gap-4">
          <a href="#hero" className="group flex shrink-0 items-center gap-2">
            <span className="whitespace-nowrap font-sans text-[18px] font-semibold tracking-tight text-on-surface">
              hugo.david<span className="text-primary"> /</span>
              <span className="font-normal text-on-surface-variant">dev</span>
            </span>
          </a>
          <div className="hidden items-center gap-2 rounded-full bg-surface-container-high px-4 py-2 xl:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
              {ui.availableBadge}
            </span>
          </div>
        </div>

        <nav className="hidden min-w-0 items-center gap-0.5 lg:flex xl:gap-1" aria-label={ui.primaryNav}>
          {navLinks.map((link, i) => (
            <a
              key={link.key}
              href={link.href}
              aria-current={i === 0 ? "page" : undefined}
              className={
                i === 0
                  ? "whitespace-nowrap rounded-lg bg-primary-container px-2 py-1 font-semibold text-on-primary-container"
                  : "whitespace-nowrap rounded-lg px-2 py-1 font-mono text-[13px] text-on-surface-variant transition-colors hover:text-on-surface"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          <a
            href="#resume"
            className="hidden items-center gap-2 whitespace-nowrap rounded-lg bg-primary-container px-4 py-2 font-mono text-[12px] font-bold text-on-primary-container shadow-[0_0_16px_rgba(56,189,248,0.25)] transition-all hover:bg-primary hover:text-on-primary md:inline-flex"
          >
            <FileText className="h-4 w-4" />
            <span>{ui.downloadCv}</span>
          </a>
          <button
            type="button"
            aria-label={ui.openTerminalPanel}
            className="hidden h-9 w-9 items-center justify-center rounded-lg bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface sm:flex"
          >
            <Terminal className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-surface-container-high/40 px-6 py-4 lg:hidden" aria-label={ui.mobileNav}>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 font-mono text-[13px] text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
