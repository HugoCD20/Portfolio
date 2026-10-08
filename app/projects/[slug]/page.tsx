import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  LocalizedProjectDetail,
  type ProjectContent,
} from "@/components/projects/template/ProjectDetail";
import * as teeoEn from "@/data/project-teeo";
import * as teeoEs from "@/data/project-teeo.es";
import * as lettuceEn from "@/data/project-lettuce";
import * as lettuceEs from "@/data/project-lettuce.es";
import * as ragEn from "@/data/project-rag";
import * as ragEs from "@/data/project-rag.es";
import * as telecomEn from "@/data/project-telecom";
import * as telecomEs from "@/data/project-telecom.es";

const VALID_SLUGS = ["teeo-archive", "lettuce-vision", "rag-retrieval", "telecom-pipeline"] as const;
type Slug = (typeof VALID_SLUGS)[number];

interface ProjectEntry {
  en: ProjectContent;
  es: ProjectContent;
  title: string;
  description: string;
}

const PROJECTS: Record<Slug, ProjectEntry> = {
  "teeo-archive": {
    en: {
      meta: teeoEn.teeoMeta,
      subNav: teeoEn.teeoSubNav,
      telemetry: teeoEn.teeoTelemetry,
      about: teeoEn.teeoAbout,
      problem: teeoEn.teeoProblem,
      role: teeoEn.teeoRole,
      built: teeoEn.teeoBuilt,
      solved: teeoEn.teeoSolved,
      architecture: teeoEn.teeoArchitecture,
      stack: teeoEn.teeoStack,
      challenges: teeoEn.teeoChallenges,
      security: teeoEn.teeoSecurity,
      results: teeoEn.teeoResults,
      learned: teeoEn.teeoLearned,
      roadmap: teeoEn.teeoRoadmap,
      summary: teeoEn.teeoSummary,
      explore: teeoEn.teeoExplore,
      pager: teeoEn.teeoPager,
    },
    es: {
      meta: teeoEs.teeoMeta,
      subNav: teeoEs.teeoSubNav,
      telemetry: teeoEs.teeoTelemetry,
      about: teeoEs.teeoAbout,
      problem: teeoEs.teeoProblem,
      role: teeoEs.teeoRole,
      built: teeoEs.teeoBuilt,
      solved: teeoEs.teeoSolved,
      architecture: teeoEs.teeoArchitecture,
      stack: teeoEs.teeoStack,
      challenges: teeoEs.teeoChallenges,
      security: teeoEs.teeoSecurity,
      results: teeoEs.teeoResults,
      learned: teeoEs.teeoLearned,
      roadmap: teeoEs.teeoRoadmap,
      summary: teeoEs.teeoSummary,
      explore: teeoEs.teeoExplore,
      pager: teeoEs.teeoPager,
    },
    title: "Gestión de Archivos TEEO — Hugo David",
    description:
      "Case study: high-concurrency judicial archive with Laravel 12, Vue 3, PostgreSQL, Keycloak SSO, and sealed audit trails.",
  },
  "lettuce-vision": {
    en: {
      meta: lettuceEn.meta,
      subNav: lettuceEn.subNav,
      telemetry: lettuceEn.telemetry,
      about: lettuceEn.about,
      problem: lettuceEn.problem,
      role: lettuceEn.role,
      built: lettuceEn.built,
      solved: lettuceEn.solved,
      architecture: lettuceEn.architecture,
      stack: lettuceEn.stack,
      challenges: lettuceEn.challenges,
      security: lettuceEn.security,
      results: lettuceEn.results,
      learned: lettuceEn.learned,
      roadmap: lettuceEn.roadmap,
      summary: lettuceEn.summary,
      explore: lettuceEn.explore,
      pager: lettuceEn.pager,
    },
    es: {
      meta: lettuceEs.meta,
      subNav: lettuceEs.subNav,
      telemetry: lettuceEs.telemetry,
      about: lettuceEs.about,
      problem: lettuceEs.problem,
      role: lettuceEs.role,
      built: lettuceEs.built,
      solved: lettuceEs.solved,
      architecture: lettuceEs.architecture,
      stack: lettuceEs.stack,
      challenges: lettuceEs.challenges,
      security: lettuceEs.security,
      results: lettuceEs.results,
      learned: lettuceEs.learned,
      roadmap: lettuceEs.roadmap,
      summary: lettuceEs.summary,
      explore: lettuceEs.explore,
      pager: lettuceEs.pager,
    },
    title: "Lettuce Vision: Smart Hydroponics — Hugo David",
    description:
      "Case study: YOLOv8 canopy monitoring at 94.2% mAP@50 with 14ms edge inference for indoor vertical farming.",
  },
  "rag-retrieval": {
    en: {
      meta: ragEn.meta,
      subNav: ragEn.subNav,
      telemetry: ragEn.telemetry,
      about: ragEn.about,
      problem: ragEn.problem,
      role: ragEn.role,
      built: ragEn.built,
      solved: ragEn.solved,
      architecture: ragEn.architecture,
      stack: ragEn.stack,
      challenges: ragEn.challenges,
      security: ragEn.security,
      results: ragEn.results,
      learned: ragEn.learned,
      roadmap: ragEn.roadmap,
      summary: ragEn.summary,
      explore: ragEn.explore,
      pager: ragEn.pager,
    },
    es: {
      meta: ragEs.meta,
      subNav: ragEs.subNav,
      telemetry: ragEs.telemetry,
      about: ragEs.about,
      problem: ragEs.problem,
      role: ragEs.role,
      built: ragEs.built,
      solved: ragEs.solved,
      architecture: ragEs.architecture,
      stack: ragEs.stack,
      challenges: ragEs.challenges,
      security: ragEs.security,
      results: ragEs.results,
      learned: ragEs.learned,
      roadmap: ragEs.roadmap,
      summary: ragEs.summary,
      explore: ragEs.explore,
      pager: ragEs.pager,
    },
    title: "Intelligent Document Retrieval (RAG) — Hugo David",
    description:
      "Case study: pgvector semantic search with <18ms top-k retrieval and exact-page citations.",
  },
  "telecom-pipeline": {
    en: {
      meta: telecomEn.meta,
      subNav: telecomEn.subNav,
      telemetry: telecomEn.telemetry,
      about: telecomEn.about,
      problem: telecomEn.problem,
      role: telecomEn.role,
      built: telecomEn.built,
      solved: telecomEn.solved,
      architecture: telecomEn.architecture,
      stack: telecomEn.stack,
      challenges: telecomEn.challenges,
      security: telecomEn.security,
      results: telecomEn.results,
      learned: telecomEn.learned,
      roadmap: telecomEn.roadmap,
      summary: telecomEn.summary,
      explore: telecomEn.explore,
      pager: telecomEn.pager,
    },
    es: {
      meta: telecomEs.meta,
      subNav: telecomEs.subNav,
      telemetry: telecomEs.telemetry,
      about: telecomEs.about,
      problem: telecomEs.problem,
      role: telecomEs.role,
      built: telecomEs.built,
      solved: telecomEs.solved,
      architecture: telecomEs.architecture,
      stack: telecomEs.stack,
      challenges: telecomEs.challenges,
      security: telecomEs.security,
      results: telecomEs.results,
      learned: telecomEs.learned,
      roadmap: telecomEs.roadmap,
      summary: telecomEs.summary,
      explore: telecomEs.explore,
      pager: telecomEs.pager,
    },
    title: "Telecom & Network Metric Pipeline — Hugo David",
    description:
      "Case study: 1.2M daily syslog events with sub-500ms anomaly alerts over partitioned timeseries.",
  },
};

function isValidSlug(slug: string): slug is Slug {
  return (VALID_SLUGS as readonly string[]).includes(slug);
}

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidSlug(slug)) return {};
  return { title: PROJECTS[slug].title, description: PROJECTS[slug].description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isValidSlug(slug)) notFound();
  const entry = PROJECTS[slug];

  return (
    <div className="min-h-screen bg-surface font-mono text-on-surface antialiased">
      <Header />
      <main className="w-full bg-surface pt-16">
        <LocalizedProjectDetail en={entry.en} es={entry.es} />
      </main>
      <Footer />
    </div>
  );
}
