"use client";

import { useState, type FormEvent } from "react";
import { AtSign, Check, Clock, Copy, Lock, MapPin, Send, ShieldCheck } from "lucide-react";
import { useContent } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";

type SubmitState = "idle" | "sending" | "sent";

export default function Contact() {
  const { headings, contactMeta, contactContent } = useContent();
  const heading = headings.contact;
  const [copied, setCopied] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactMeta.email);
    } catch {
      /* Clipboard API unavailable (permissions/HTTP) — still show feedback. */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitState !== "idle") return;
    setSubmitState("sending");
    // Visual-only mock: no backend wired yet; simulates transmission.
    window.setTimeout(() => setSubmitState("sent"), 900);
  }

  return (
    <section id="contact" className="w-full scroll-mt-16 bg-surface-container-lowest/90 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          index={heading.index}
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-4 rounded-xl bg-surface-container p-6 shadow-sm">
              <h3 className="font-sans text-[18px] font-semibold text-on-surface">
                {contactContent.directTitle}
              </h3>
              <div className="space-y-3 font-mono text-[12px]">
                <div className="flex items-center justify-between gap-2 rounded-lg bg-surface-container-high p-3">
                  <div className="flex min-w-0 items-center gap-2 text-on-surface">
                    <AtSign className="h-[18px] w-[18px] shrink-0 text-primary" />
                    <span className="min-w-0 break-all">{contactMeta.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex shrink-0 items-center gap-1 font-bold uppercase text-primary hover:text-primary-fixed"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>{contactContent.copiedLabel}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>{contactContent.copyLabel}</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-surface-container-high p-3 text-on-surface">
                  <MapPin className="h-[18px] w-[18px] text-secondary" />
                  <span>{contactMeta.location}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-surface-container-high p-3 text-on-surface">
                  <Clock className="h-[18px] w-[18px] text-tertiary" />
                  <span>{contactMeta.responseSla}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 rounded-xl bg-surface-container p-6 font-mono text-[13px] text-on-surface-variant shadow-sm">
              <div className="flex items-center gap-2 font-bold text-on-surface">
                <Lock className="h-4 w-4 text-secondary" />
                <span>{contactContent.encryptedTitle}</span>
              </div>
              <p className="break-all text-[12px] text-outline">
                {contactContent.fingerprintLabel} {contactMeta.pgp}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-surface-container p-8 shadow-sm lg:col-span-7">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-mono text-[13px] text-on-surface-variant">
                    {contactContent.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={contactContent.namePlaceholder}
                    className="w-full rounded-lg bg-surface-container-lowest px-4 py-2.5 font-mono text-[12px] text-on-surface shadow-inner focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-mono text-[13px] text-on-surface-variant">
                    {contactContent.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={contactContent.emailPlaceholder}
                    className="w-full rounded-lg bg-surface-container-lowest px-4 py-2.5 font-mono text-[12px] text-on-surface shadow-inner focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="subject" className="font-mono text-[13px] text-on-surface-variant">
                  {contactContent.topicLabel}
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg bg-surface-container-lowest px-4 py-2.5 font-mono text-[12px] text-on-surface shadow-inner focus:outline-none focus:ring-1 focus:ring-primary"
                  defaultValue={contactContent.topicValues[0]}
                >
                  {contactContent.topics.map((topic, i) => (
                    <option key={contactContent.topicValues[i]} value={contactContent.topicValues[i]}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-[13px] text-on-surface-variant">
                  {contactContent.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={contactContent.messagePlaceholder}
                  className="w-full resize-none rounded-lg bg-surface-container-lowest px-4 py-2.5 font-mono text-[12px] text-on-surface shadow-inner focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <span className="flex items-center gap-1 font-mono text-[11px] text-on-surface-variant">
                  <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                  <span>{contactContent.sslNote}</span>
                </span>
                <button
                  type="submit"
                  disabled={submitState !== "idle"}
                  className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-mono text-[12px] font-bold shadow-lg transition-all ${
                    submitState === "sent"
                      ? "bg-secondary text-on-secondary"
                      : "bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary"
                  }`}
                >
                  <span>
                    {submitState === "idle"
                      ? contactContent.sendIdle
                      : submitState === "sending"
                        ? contactContent.sending
                        : contactContent.sent}
                  </span>
                  <Send className="h-[18px] w-[18px]" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
