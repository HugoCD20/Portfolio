/**
 * Test/mock data for the RAG document retrieval project detail page.
 * Same template shape as `project-teeo.ts` (types imported, not redefined).
 */

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
} from "./project-teeo";

export const meta: TeeoMeta = {
  category: "Applied LLM & RAG · Semantic engine",
  title: "Intelligent Document Retrieval (RAG).",
  headline: "Top-k retrieval in <18ms over 250,000+ legal chunks with deterministic exact-page citations.",
  lede:
    "High-speed contextual Q&A over heterogeneous financial, legal, and operational documents: intelligent chunking, pgvector embeddings, and hallucination guardrails.",
  role: "AI Engineer & Backend Developer",
  type: "Applied R&D (Semantic search)",
  status: "v1.8 in Production",
  duration: "5 months (2024)",
  coreStack: "Python · FastAPI · pgvector",
  backToProjects: "Back to Projects",
  breadcrumbRoot: "Projects",
  viewTelemetry: "View Live Telemetry",
  viewSource: "View Source (Mirror)",
  jumpToSpec: "Jump to Spec Sheet",
};

export const subNav: TeeoSubNav = {
  overview: "Overview",
  problemRole: "Problem & Role",
  architecture: "Architecture",
  challenges: "Challenges",
  results: "Results",
  liveDemo: "Live Demo",
};

export const telemetry: TeeoTelemetry = {
  windowTitle: "rag-prod // hnsw-index-01 // live-retrieval",
  clusterState: "INDEX HEALTHY",
  uptime: "Up: 142d 08h 44m",
  metrics: [
    { label: "Top-k retrieval", value: "<18", unit: "ms HNSW", hint: "Across 250k+ chunks", icon: "timer", accent: "primary" },
    { label: "Indexed chunks", value: "250k+", unit: "embeddings", hint: "Legal + financial docs", icon: "balance", accent: "tertiary" },
    { label: "Inference cost", value: "-48", unit: "% vs baseline", hint: "Token compression on", icon: "speed", accent: "secondary" },
    { label: "Cited answers", value: "100", unit: "% with page", hint: "Zero uncited claims", icon: "verified", accent: "primary" },
  ],
  histogramTitle: "Realtime retrieval latency (last 24 query batches)",
  histogramSample: "Sample: 1 batch",
  histogramAvg: "Avg batch: 11.6ms retrieval",
  histogramBuffer: "Query queue saturation: 9% (Nominal)",
  logTitle: "RETRIEVAL_TRACE",
  logFormat: "JSON lines",
  logFooterLeft: "Hallucination blocks: 3 today",
  logFooterRight: "Workers: 6 / 6 active",
  tabs: [
    { id: "topology", label: "Retrieval Trace" },
    { id: "benchmarks", label: "Embedding Benchmark" },
    { id: "dlq", label: "Guardrail Log (3)" },
  ],
  tlsNote: "pgvector HNSW enforced",
  tlsCipher: "Cosine",
};

export const about: TeeoAbout = {
  kicker: "01 // Architectural context",
  title: "Answers staff can cite, not chatbots that invent.",
  lede: "Legal and finance teams drown in PDFs nobody can search semantically.",
  paragraph:
    "Infrastructure contracts, annexes, and SLA reports pile into the thousands of pages. Keyword search misses paraphrased clauses, and raw LLM chat invents confident-but-false citations.",
  closing:
    "This engine ingests heterogeneous documents once, embeds them into pgvector, and answers with exact page citations — every claim traceable, every number checkable.",
  audiences: [
    {
      icon: "account",
      title: "Legal Analysts",
      body: "Clause lookup with page numbers: penalty terms, uptime SLAs, annex references.",
    },
    {
      icon: "policy",
      title: "Compliance Officers",
      body: "Guardrailed answers that refuse when evidence is missing instead of hallucinating.",
    },
    {
      icon: "stats",
      title: "Operations Teams",
      body: "Contract Q&A in seconds during negotiations, not days of manual reading.",
    },
  ],
};

export const problem: TeeoProblem = {
  kicker: "02 // The problem space",
  title: "Why keyword search and raw chat both failed.",
  lede: "Paraphrased clauses hid from keywords; LLMs hallucinated the rest.",
  steps: [
    {
      index: "01",
      title: "The Structural Bottleneck",
      bullets: [
        "Thousands of heterogeneous PDFs with no uniform structure.",
        "Keyword search missed paraphrased or translated clauses.",
        "Analysts re-read the same annexes for every negotiation.",
      ],
    },
    {
      index: "02",
      title: "The Destructive Impact",
      bullets: [
        "Days spent hunting penalty clauses across contract versions.",
        "Raw LLM pilots cited pages that did not exist.",
        "Zero trust from legal in any automated answer.",
      ],
    },
    {
      index: "03",
      title: "The Architectural Mandate",
      bullets: [
        "Semantic embeddings with sub-20ms top-k retrieval.",
        "Deterministic synthesis bound to retrieved chunks only.",
        "Explicit exact-page citations on every factual claim.",
      ],
    },
  ],
};

export const role: TeeoRole = {
  kicker: "03 // Scope of responsibility",
  title: "Personal Engineering Ownership",
  lede: "Serving as AI Engineer & Backend Developer, I owned the pipeline from ingestion and chunking through to guarded synthesis and eval.",
  badge: "Solo ingestion-to-answer ownership",
  cards: [
    {
      icon: "schema",
      tag: "Ingestion",
      title: "Chunking & Normalization",
      body: "Layout-aware chunking for scanned PDFs, tables, and annexes with overlap tuned for recall.",
    },
    {
      icon: "bolt",
      tag: "Retrieval",
      title: "pgvector HNSW Index",
      body: "Embedding store with tuned HNSW parameters serving top-k nearest chunks in milliseconds.",
    },
    {
      icon: "fingerprint",
      tag: "Synthesis",
      title: "Citation-Bound Answers",
      body: "Deterministic prompts that may only use retrieved chunks, with page citations required per claim.",
    },
    {
      icon: "storage",
      tag: "Efficiency",
      title: "Token Compression",
      body: "Custom compression of retrieved context that cut inference costs nearly in half with no quality drop.",
    },
    {
      icon: "monitoring",
      tag: "Evaluation",
      title: "Retrieval Benchmarks",
      body: "Golden question set with recall@k tracking across embedding model upgrades.",
    },
    {
      icon: "emergency",
      tag: "Safety",
      title: "Hallucination Guardrails",
      body: "Refusal paths and citation verification that block uncited or off-evidence answers.",
    },
  ],
};

export const built: TeeoBuilt = {
  kicker: "04 // Core systems delivered",
  title: "Architectural Pillars & Technical Implementations",
  lede: "Four subsystems from PDF bytes to cited answers.",
  subsystems: [
    {
      id: "SUBSYSTEM 01",
      icon: "memory",
      title: "Intelligent Document Chunker",
      body: "Structure-aware splits that keep clauses, tables, and annex context intact across chunk boundaries.",
      implLabel: "Implementation:",
      impl: "Layout detection plus semantic overlap windows, with per-document chunk manifests.",
      outcomeLabel: "Measured Outcome:",
      outcome: "Recall@5 up 23 points vs naive splits",
    },
    {
      id: "SUBSYSTEM 02",
      icon: "filter",
      title: "HNSW Vector Retrieval",
      body: "Millisecond similarity search across a quarter-million chunk embeddings.",
      implLabel: "Implementation:",
      impl: "pgvector HNSW index with tuned ef_search and quantized vectors for hot partitions.",
      outcomeLabel: "Measured Outcome:",
      outcome: "Top-k in <18ms at 250k+ chunks",
    },
    {
      id: "SUBSYSTEM 03",
      icon: "encryption",
      title: "Token Compression Layer",
      body: "Squeezes retrieved context before synthesis without losing the sentences citations need.",
      implLabel: "Implementation:",
      impl: "Extractive pre-filter plus redundancy stripping ahead of the synthesis call.",
      outcomeLabel: "Measured Outcome:",
      outcome: "Inference costs down 48%",
    },
    {
      id: "SUBSYSTEM 04",
      icon: "tune",
      title: "Citation Guardrail Engine",
      body: "Verifies every factual claim against retrieved chunks and refuses when evidence is thin.",
      implLabel: "Implementation:",
      impl: "Post-synthesis claim checker with exact-page matching and refusal templates.",
      outcomeLabel: "Measured Outcome:",
      outcome: "100% of answers page-cited",
    },
  ],
};

export const solved: TeeoSolved = {
  kicker: "05 // Engineering deep dives",
  title: "How Hard Problems Were Decisively Solved",
  lede: "Scanned tables, paraphrases, and runaway costs — handled.",
  cases: [
    {
      challengeLabel: "Challenge 01",
      title: "Scanned Annex Tables Broke Chunking",
      problem: "OCR tables splintered mid-row, scattering penalty figures across useless fragments.",
      solutionLabel: "The Solution",
      solution:
        "Added table-aware chunking that keeps row groups together and attaches the annex header to every fragment for context.",
      impactLabel: "System Impact:",
      impact: "Table-question recall doubled",
    },
    {
      challengeLabel: "Challenge 02",
      title: "Paraphrased Clauses Evaded Search",
      problem: "Translated and reworded penalty clauses never matched the analyst's query terms.",
      solutionLabel: "The Solution",
      solution:
        "Moved from keyword to embedding retrieval with a domain-tuned model plus hybrid keyword fallback for exact codes.",
      impactLabel: "System Impact:",
      impact: "Paraphrase recall up 34 points",
    },
    {
      challengeLabel: "Challenge 03",
      title: "Synthesis Bills Exploded",
      problem: "Stuffing full chunks into every prompt made routine questions absurdly expensive.",
      solutionLabel: "The Solution",
      solution:
        "Built the compression layer: extractive filtering keeps citable sentences and drops filler before the LLM call.",
      impactLabel: "System Impact:",
      impact: "48% cheaper answers, same citations",
    },
  ],
};

export const architecture: TeeoArchitecture = {
  kicker: "06 // System topology",
  title: "High-Fidelity Architecture Diagram",
  lede: "From PDF upload to cited answer in one guarded pass.",
  tiers: [
    {
      tier: "TIER 1",
      title: "Document Intake",
      subtitle: "PDFs & scans",
      body: "Upload, OCR, and layout detection for heterogeneous files.",
      footer: "Chunk manifests",
    },
    {
      tier: "TIER 2 (CORE)",
      title: "Embedding Index",
      subtitle: "pgvector HNSW",
      body: "Chunk vectors with tuned similarity search parameters.",
      footer: "<18ms top-k",
      core: true,
    },
    {
      tier: "TIER 3",
      title: "FastAPI Service",
      subtitle: "Retrieval API",
      body: "Query embedding, hybrid fallback, and context assembly.",
      footer: "Reranked top-k",
    },
    {
      tier: "TIER 4",
      title: "Synthesis Guard",
      subtitle: "LangChain + LLMs",
      body: "Citation-bound generation with refusal paths.",
      footer: "Strictly cited",
    },
    {
      tier: "TIER 5",
      title: "Analyst Surface",
      subtitle: "Q&A + traces",
      body: "Answers with page links and inspectable retrieval traces.",
      footer: "Auditable always",
    },
  ],
  specs: [
    {
      title: "Retrieval Algorithm",
      body: "Cosine similarity over HNSW with hybrid keyword fallback for exact document codes.",
    },
    {
      title: "Context Budget",
      body: "Compressed context per query with citable-sentence preservation guarantees.",
    },
    {
      title: "Safety Protocol",
      body: "Claim-level citation verification; refusal when evidence coverage is insufficient.",
    },
  ],
};

export const stack: TeeoStack = {
  kicker: "07 // Technical ecosystem",
  title: "Technology Stack",
  lede: "Chosen for retrieval speed and answer trustworthiness.",
  categories: [
    {
      icon: "terminal",
      title: "Retrieval",
      tools: [
        { name: "pgvector", note: "HNSW vector store" },
        { name: "Embeddings", note: "Domain-tuned vectors" },
        { name: "Hybrid search", note: "Keyword fallback" },
      ],
    },
    {
      icon: "sync",
      title: "Orchestration",
      tools: [
        { name: "LangChain", note: "RAG pipelines" },
        { name: "FastAPI", note: "Retrieval API" },
        { name: "Python", note: "Chunking & eval" },
      ],
    },
    {
      icon: "database",
      title: "Models",
      tools: [
        { name: "OpenAI / local LLMs", note: "Guarded synthesis" },
        { name: "Reranker", note: "Top-k refinement" },
        { name: "OCR", note: "Scan intake" },
      ],
    },
    {
      icon: "cloud",
      title: "Infra & Delivery",
      tools: [
        { name: "Docker", note: "Immutable deploys" },
        { name: "PostgreSQL", note: "Docs + vectors" },
        { name: "CI evals", note: "Recall gating" },
      ],
    },
    {
      icon: "stats",
      title: "Observability",
      tools: [
        { name: "Golden Q&A set", note: "Recall@k tracking" },
        { name: "Trace viewer", note: "Inspectable retrieval" },
        { name: "Cost meters", note: "Per-query budgets" },
      ],
    },
  ],
};

export const challenges: TeeoChallenges = {
  kicker: "08 // Extreme edge cases",
  title: "High-Consequence Technical Obstacles",
  lede: "Index growth, language mix, and stale documents.",
  items: [
    {
      id: "INVESTIGATION 01",
      title: "HNSW Slowdowns Past 200k Vectors",
      body: "Recall crept down as the index grew. Retuned ef_construction and introduced hot-partition quantization to hold latency flat.",
      result: "p99 retrieval back under 18ms",
    },
    {
      id: "INVESTIGATION 02",
      title: "Mixed-Language Clause Matching",
      body: "Spanish queries missed English-drafted annexes. Added cross-lingual embedding evaluation and query-side expansion.",
      result: "Cross-lingual recall +29 points",
    },
    {
      id: "INVESTIGATION 03",
      title: "Superseded Contracts Surfaced",
      body: "Old versions outranked current ones on similar wording. Added version-aware boosting with supersede metadata.",
      result: "Stale citations eliminated",
    },
  ],
};

export const security: TeeoSecurity = {
  kicker: "09 // Hardened trust",
  title: "Evidence-Grade Reliability Standards",
  lede: "An uncited answer is treated as a system failure.",
  items: [
    {
      icon: "lock",
      title: "Evidence-Bound Synthesis",
      body: "The model may only use retrieved chunks; off-evidence content triggers refusal, not invention.",
    },
    {
      icon: "key",
      title: "Exact-Page Citations",
      body: "Every factual claim carries a document and page reference analysts can open directly.",
    },
    {
      icon: "encrypted",
      title: "PII-Aware Ingestion",
      body: "Sensitive spans flagged at intake with restricted retrieval scopes per analyst role.",
    },
    {
      icon: "bug",
      title: "Adversarial Evals",
      body: "Prompt-injection and jailbreak probes run in CI; any citation bypass blocks the release.",
    },
  ],
};

export const results: TeeoResults = {
  kicker: "10 // Verified production impact",
  title: "Quantitative Scale & Performance Results",
  lede: "Measured over 120 production days and 40k+ analyst questions.",
  kpis: [
    {
      label: "Retrieval speed",
      value: "<18ms",
      body: "Top-k HNSW lookup across 250,000+ chunk embeddings.",
    },
    {
      label: "Indexed corpus",
      value: "250k+",
      body: "Legal and financial chunks searchable in one query.",
    },
    {
      label: "Cost reduction",
      value: "-48%",
      body: "Inference spend cut via context compression.",
    },
    {
      label: "Citation coverage",
      value: "100%",
      body: "Factual answers shipped with exact-page references.",
    },
  ],
  qualitative: [
    {
      icon: "verified",
      title: "Negotiation Speed",
      body: "Penalty clause hunts dropped from days of reading to seconds of querying.",
    },
    {
      icon: "terminal",
      title: "Analyst Trust",
      body: "Page citations turned skeptics into daily users; every answer is checkable.",
    },
    {
      icon: "group",
      title: "Safer Automation",
      body: "Refusals on thin evidence beat confident hallucinations in every review.",
    },
  ],
};

export const learned: TeeoLearned = {
  kicker: "11 // Engineering wisdom",
  title: "Critical Lessons & Practical Insights",
  lede: "What legal Q&A teaches about applied LLMs.",
  items: [
    {
      title: "Chunking Is the Model",
      body: "Layout-aware splits moved recall more than any embedding upgrade. Respect document structure first.",
    },
    {
      title: "Refusal Is a Feature",
      body: "Saying 'insufficient evidence' built more trust than any fluency gain ever could.",
    },
    {
      title: "Measure Cost per Answer",
      body: "Compression made the economics work: budget per query is a first-class metric, not an afterthought.",
    },
  ],
};

export const roadmap: TeeoRoadmap = {
  kicker: "12 // The roadmap ahead",
  title: "Future Architecture Enhancements",
  lede: "From retrieval to proactive contract intelligence.",
  items: [
    {
      title: "Agentic Multi-Hop Q&A",
      body: "Chained retrieval across annexes for questions spanning multiple documents and versions.",
    },
    {
      title: "Clause Change Radar",
      body: "Automatic diffing of clause language across contract renewals with analyst alerts.",
    },
    {
      title: "Local-Model Tier",
      body: "Fully on-premise synthesis tier for matters that can never leave the building.",
    },
  ],
};

export const summary: TeeoSummary = {
  eyebrow: "Executive Summary for Engineering Leaders",
  title: "Unreadable Archives to Cited Answers, Solved.",
  body: "RAG retrieval turned 250k+ scattered chunks into <18ms cited answers, cutting inference costs 48% with 100% page-cited coverage.",
  tags: ["pgvector", "LangChain", "FastAPI", "HNSW", "Python"],
  downloadLabel: "Download Case Study PDF",
  contactLabel: "Contact Lead Developer",
};

export const explore: TeeoExplore = {
  eyebrow: "14 // Project verification",
  title: "Inspect Source & Live Telemetry",
  lede: "Browse the repository, replay a retrieval trace, or jump back to the live console.",
  telemetryLabel: "Launch Telemetry Console",
  sourceLabel: "GitHub Mirror",
  rfcLabel: "Request Architecture Brief",
};

export const pager: TeeoPager = {
  prevLabel: "Previous Project",
  prevTitle: "Lettuce Vision",
  prevSubtitle: "Smart Hydroponics",
  indexLabel: "View All Engineering Projects",
  nextLabel: "Next Project",
  nextTitle: "Telecom Pipeline",
  nextSubtitle: "Telemetry & Anomaly Detection",
};
