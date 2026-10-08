"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type {
  TeeoAbout,
  TeeoArchitecture,
  TeeoBuilt,
  TeeoChallenges,
  TeeoExplore,
  TeeoLearned,
  TeeoMeta,
  TeeoPager,
  TeeoProblem,
  TeeoResults,
  TeeoRoadmap,
  TeeoRole,
  TeeoSecurity,
  TeeoSolved,
  TeeoStack,
  TeeoSubNav,
  TeeoSummary,
  TeeoTelemetry,
} from "@/data/project-teeo";
import TeeoHero from "../teeo/TeeoHero";
import TeeoTelemetryView from "../teeo/TeeoTelemetry";
import { TeeoAboutSection, TeeoProblemSection, TeeoRoleSection } from "../teeo/TeeoNarrative";
import {
  TeeoArchitectureSection,
  TeeoBuiltSection,
  TeeoSolvedSection,
  TeeoStackSection,
} from "../teeo/TeeoTechnical";
import {
  TeeoChallengesSection,
  TeeoExploreSection,
  TeeoLearnedSection,
  TeeoPagerSection,
  TeeoResultsSection,
  TeeoRoadmapSection,
  TeeoSecuritySection,
  TeeoSummarySection,
} from "../teeo/TeeoOutcome";

/**
 * Generic case-study content. Every project data module maps its
 * exports to this shape so all detail pages share one template
 * instead of duplicating section logic per project.
 */
export interface ProjectContent {
  meta: TeeoMeta;
  subNav: TeeoSubNav;
  telemetry: TeeoTelemetry;
  about: TeeoAbout;
  problem: TeeoProblem;
  role: TeeoRole;
  built: TeeoBuilt;
  solved: TeeoSolved;
  architecture: TeeoArchitecture;
  stack: TeeoStack;
  challenges: TeeoChallenges;
  security: TeeoSecurity;
  results: TeeoResults;
  learned: TeeoLearned;
  roadmap: TeeoRoadmap;
  summary: TeeoSummary;
  explore: TeeoExplore;
  pager: TeeoPager;
}

export function ProjectDetailPage({ content }: { content: ProjectContent }) {
  return (
    <div className="min-h-screen bg-surface font-mono text-on-surface">
      <TeeoHero meta={content.meta} nav={content.subNav} />
      <TeeoTelemetryView telemetry={content.telemetry} />
      <TeeoAboutSection about={content.about} />
      <TeeoProblemSection problem={content.problem} />
      <TeeoRoleSection role={content.role} />
      <TeeoBuiltSection built={content.built} />
      <TeeoSolvedSection solved={content.solved} />
      <TeeoArchitectureSection architecture={content.architecture} />
      <TeeoStackSection stack={content.stack} />
      <TeeoChallengesSection challenges={content.challenges} />
      <TeeoSecuritySection security={content.security} />
      <TeeoResultsSection results={content.results} />
      <TeeoLearnedSection learned={content.learned} />
      <TeeoRoadmapSection roadmap={content.roadmap} />
      <TeeoSummarySection summary={content.summary} />
      <TeeoExploreSection explore={content.explore} />
      <TeeoPagerSection pager={content.pager} />
    </div>
  );
}

/** Picks EN/ES content from the global toggle and renders the shared template. */
export function LocalizedProjectDetail({ en, es }: { en: ProjectContent; es: ProjectContent }) {
  const { lang } = useLanguage();
  return <ProjectDetailPage content={lang === "es" ? es : en} />;
}
