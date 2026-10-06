"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import * as en from "@/data/portfolio";
import * as es from "@/data/portfolio.es";

export type Lang = "en" | "es";
export type Content = typeof en;

/** Compile-time parity check: the Spanish module must mirror the English one. */
const locales: Record<Lang, Content> = { en, es };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: Content;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  content: locales.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // English is the default language.
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, content: locales[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}

export function useContent(): Content {
  return useLanguage().content;
}

/** Segmented EN | ES toggle. Place it in the header actions row. */
export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const options: Lang[] = ["en", "es"];

  return (
    <div
      className="flex items-center rounded-lg bg-surface-container p-0.5"
      role="group"
      aria-label="Language / Idioma"
    >
      {options.map((option) => {
        const active = lang === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={active}
            aria-label={option === "en" ? "Switch to English" : "Cambiar a español"}
            className={
              active
                ? "rounded-md bg-primary-container px-2.5 py-1 font-mono text-[10px] font-bold text-on-primary-container"
                : "rounded-md px-2.5 py-1 font-mono text-[10px] font-bold text-on-surface-variant transition-colors hover:text-on-surface"
            }
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
