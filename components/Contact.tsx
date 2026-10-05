"use client";

import { useState, type FormEvent } from "react";
import { AtSign, Check, Clock, Copy, Lock, MapPin, Send, ShieldCheck } from "lucide-react";
import { contactMeta } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

type SubmitState = "idle" | "sending" | "sent";

export default function Contact() {
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
          index="08"
          eyebrow="Get in touch"
          title="Let's build something resilient together."
          description="Whether you need a full-stack engineer for a high-concurrency platform, a computer vision pipeline, or a robust data architecture consultation."
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-4 rounded-xl bg-surface-container p-6 shadow-sm">
              <h3 className="font-sans text-[18px] font-semibold text-on-surface">Direct Coordinates</h3>
              <div className="space-y-3 font-mono text-[12px]">
                <div className="flex items-center justify-between rounded-lg bg-surface-container-high p-3">
                  <div className="flex items-center gap-2 text-on-surface">
                    <AtSign className="h-[18px] w-[18px] text-primary" />
                    <span>{contactMeta.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex items-center gap-1 font-bold uppercase text-primary hover:text-primary-fixed"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
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
                <span>Encrypted Communications</span>
              </div>
              <p className="break-all text-[12px] text-outline">Fingerprint: {contactMeta.pgp}</p>
            </div>
          </div>

          <div className="rounded-xl bg-surface-container p-8 shadow-sm lg:col-span-7">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-mono text-[13px] text-on-surface-variant">
                    Your Name / Organization *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    className="w-full rounded-lg bg-surface-container-lowest px-4 py-2.5 font-mono text-[12px] text-on-surface shadow-inner focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-mono text-[13px] text-on-surface-variant">
                    Your Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    className="w-full rounded-lg bg-surface-container-lowest px-4 py-2.5 font-mono text-[12px] text-on-surface shadow-inner focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="subject" className="font-mono text-[13px] text-on-surface-variant">
                  Topic / Area of Collaboration
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg bg-surface-container-lowest px-4 py-2.5 font-mono text-[12px] text-on-surface shadow-inner focus:outline-none focus:ring-1 focus:ring-primary"
                  defaultValue="fullstack"
                >
                  <option value="fullstack">Full-Stack Application Development</option>
                  <option value="data-ai">Data Engineering & Computer Vision (AI)</option>
                  <option value="devops">DevOps, Docker & Cloud Infrastructure</option>
                  <option value="consultation">System Architecture Consultation</option>
                  <option value="other">General Inquiries / Say Hello</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-[13px] text-on-surface-variant">
                  Project Scope / Technical Challenge *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your stack, timeline, and architectural challenges..."
                  className="w-full resize-none rounded-lg bg-surface-container-lowest px-4 py-2.5 font-mono text-[12px] text-on-surface shadow-inner focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <span className="flex items-center gap-1 font-mono text-[11px] text-on-surface-variant">
                  <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                  <span>Protected with SSL & Anti-Spam Tokens</span>
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
                      ? "SEND MESSAGE"
                      : submitState === "sending"
                        ? "TRANSMITTING..."
                        : "MESSAGE TRANSMITTED (200 OK)"}
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
