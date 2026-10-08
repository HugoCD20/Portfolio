/**
 * Test/mock data for the TEEO archive project detail page.
 *
 * Mirrors the portfolio i18n pattern: shared types live here,
 * Spanish locale in `project-teeo.es.ts` must export the same shape.
 */

export interface TeeoMeta {
  category: string;
  title: string;
  headline: string;
  lede: string;
  role: string;
  type: string;
  status: string;
  duration: string;
  coreStack: string;
  backToProjects: string;
  breadcrumbRoot: string;
  viewTelemetry: string;
  viewSource: string;
  jumpToSpec: string;
}

export interface TelemetryMetric {
  label: string;
  value: string;
  unit: string;
  hint: string;
  icon: string;
  accent: "primary" | "secondary" | "tertiary";
}

export interface TeeoTelemetry {
  windowTitle: string;
  clusterState: string;
  uptime: string;
  metrics: TelemetryMetric[];
  histogramTitle: string;
  histogramSample: string;
  histogramAvg: string;
  histogramBuffer: string;
  logTitle: string;
  logFormat: string;
  logFooterLeft: string;
  logFooterRight: string;
  tabs: { id: string; label: string }[];
  tlsNote: string;
  tlsCipher: string;
}

export interface AudienceCard {
  icon: string;
  title: string;
  body: string;
}

export interface TeeoAbout {
  kicker: string;
  title: string;
  lede: string;
  paragraph: string;
  closing: string;
  audiences: AudienceCard[];
}

export interface ProblemStep {
  index: string;
  title: string;
  bullets: string[];
}

export interface TeeoProblem {
  kicker: string;
  title: string;
  lede: string;
  steps: ProblemStep[];
}

export interface RoleCard {
  icon: string;
  tag: string;
  title: string;
  body: string;
}

export interface TeeoRole {
  kicker: string;
  title: string;
  lede: string;
  badge: string;
  cards: RoleCard[];
}

export interface Subsystem {
  id: string;
  icon: string;
  title: string;
  body: string;
  implLabel: string;
  impl: string;
  outcomeLabel: string;
  outcome: string;
}

export interface TeeoBuilt {
  kicker: string;
  title: string;
  lede: string;
  subsystems: Subsystem[];
}

export interface SolvedCase {
  challengeLabel: string;
  title: string;
  problem: string;
  solutionLabel: string;
  solution: string;
  impactLabel: string;
  impact: string;
}

export interface TeeoSolved {
  kicker: string;
  title: string;
  lede: string;
  cases: SolvedCase[];
}

export interface ArchTier {
  tier: string;
  title: string;
  subtitle: string;
  body: string;
  footer: string;
  core?: boolean;
}

export interface TeeoArchitecture {
  kicker: string;
  title: string;
  lede: string;
  tiers: ArchTier[];
  specs: { title: string; body: string }[];
}

export interface StackCategory {
  icon: string;
  title: string;
  tools: { name: string; note: string }[];
}

export interface TeeoStack {
  kicker: string;
  title: string;
  lede: string;
  categories: StackCategory[];
}

export interface ChallengeItem {
  id: string;
  title: string;
  body: string;
  result: string;
}

export interface TeeoChallenges {
  kicker: string;
  title: string;
  lede: string;
  items: ChallengeItem[];
}

export interface SecurityItem {
  icon: string;
  title: string;
  body: string;
}

export interface TeeoSecurity {
  kicker: string;
  title: string;
  lede: string;
  items: SecurityItem[];
}

export interface Kpi {
  label: string;
  value: string;
  body: string;
}

export interface TeeoResults {
  kicker: string;
  title: string;
  lede: string;
  kpis: Kpi[];
  qualitative: { icon: string; title: string; body: string }[];
}

export interface TeeoLearned {
  kicker: string;
  title: string;
  lede: string;
  items: { title: string; body: string }[];
}

export interface TeeoRoadmap {
  kicker: string;
  title: string;
  lede: string;
  items: { title: string; body: string }[];
}

export interface TeeoSummary {
  eyebrow: string;
  title: string;
  body: string;
  tags: string[];
  downloadLabel: string;
  contactLabel: string;
}

export interface TeeoExplore {
  eyebrow: string;
  title: string;
  lede: string;
  telemetryLabel: string;
  sourceLabel: string;
  rfcLabel: string;
}

export interface TeeoPager {
  prevLabel: string;
  prevTitle: string;
  prevSubtitle: string;
  indexLabel: string;
  nextLabel: string;
  nextTitle: string;
  nextSubtitle: string;
}

export interface TeeoSubNav {
  overview: string;
  problemRole: string;
  architecture: string;
  challenges: string;
  results: string;
  liveDemo: string;
}

export const teeoMeta: TeeoMeta = {
  category: "Enterprise systems & judicial archive",
  title: "Gestión de Archivos TEEO.",
  headline: "A high-concurrency judicial archive serving thousands of daily case queries with verifiable audit trails.",
  lede:
    "Built to replace paper-bound expediente tracking with a containerized Laravel + Vue platform: role-based access, electronic signatures, data charts, and automatic DB replica failover.",
  role: "Lead Full-Stack Developer",
  type: "Production core (Judicial)",
  status: "v2.4 in Production",
  duration: "6 months (2024)",
  coreStack: "Laravel 12 · Vue 3 · PostgreSQL",
  backToProjects: "Back to Projects",
  breadcrumbRoot: "Projects",
  viewTelemetry: "View Live Telemetry",
  viewSource: "View Source (Mirror)",
  jumpToSpec: "Jump to Spec Sheet",
};

export const teeoSubNav: TeeoSubNav = {
  overview: "Overview",
  problemRole: "Problem & Role",
  architecture: "Architecture",
  challenges: "Challenges",
  results: "Results",
  liveDemo: "Live Demo",
};

export const teeoTelemetry: TeeoTelemetry = {
  windowTitle: "teeo-prod // archive-node-02 // live-telemetry",
  clusterState: "CLUSTER STABLE",
  uptime: "Up: 184d 11h 22m",
  metrics: [
    { label: "Queries / min", value: "8,412", unit: "q/min", hint: "+6.1% peak window", icon: "speed", accent: "primary" },
    { label: "P95 search latency", value: "182", unit: "ms", hint: "Target < 250ms SLA", icon: "timer", accent: "secondary" },
    { label: "Replica lag", value: "0.2", unit: "s", hint: "2/2 replicas healthy", icon: "balance", accent: "tertiary" },
    { label: "Audit coverage", value: "100", unit: "% sealed", hint: "Hash chain verified", icon: "verified", accent: "primary" },
  ],
  histogramTitle: "Realtime case queries (Expedientes JDC / JDCI / CA / JNI)",
  histogramSample: "Sample: 1s",
  histogramAvg: "Avg node load: 1.4k q/min",
  histogramBuffer: "Replica buffer saturation: 18% (Nominal)",
  logTitle: "AUDIT_INGEST_TAIL",
  logFormat: "JSON lines",
  logFooterLeft: "Backpressure status: ZERO",
  logFooterRight: "Workers: 8 / 8 active",
  tabs: [
    { id: "topology", label: "Archive Topology" },
    { id: "benchmarks", label: "Query Benchmark" },
    { id: "dlq", label: "Dead Letter Queue (0)" },
  ],
  tlsNote: "Keycloak SSO enforced",
  tlsCipher: "TLS 1.3",
};

export const teeoAbout: TeeoAbout = {
  kicker: "01 // Architectural context",
  title: "Building the spine for judicial case tracking.",
  lede: "Electoral trials cannot afford lost files, unclear ownership, or unsigned resolutions.",
  paragraph:
    "Electoral justice offices juggle thousands of expedientes across departments: filings, reassignments (turnados), re-routings (reencauzamientos), and signed agreements. Historically this lived in spreadsheets and shared folders with no audit trail.",
  closing:
    "The mandate for TEEO was pragmatic: one searchable archive, strict role-based access via Keycloak, signed agreements, and charts that answer operational questions in seconds.",
  audiences: [
    {
      icon: "account",
      title: "Court Operations",
      body: "Live docket visibility: which expediente is created, turned, re-routed, or already resolved.",
    },
    {
      icon: "policy",
      title: "Compliance & Transparency",
      body: "Sealed audit log with hash chaining so any tampered record invalidates verification.",
    },
    {
      icon: "stats",
      title: "Leadership & Analysts",
      body: "Agreement charts and resolution counts feeding weekly operational reports.",
    },
  ],
};

export const teeoProblem: TeeoProblem = {
  kicker: "02 // The problem space",
  title: "Why folder-based tracking collapsed under caseload.",
  lede: "Manual flows caused silent data loss, duplicated records, and slow agreement reporting.",
  steps: [
    {
      index: "01",
      title: "The Structural Bottleneck",
      bullets: [
        "Case metadata scattered across spreadsheets and network folders.",
        "No single source of truth for expediente state transitions.",
        "Sensitive records shared without role restrictions.",
      ],
    },
    {
      index: "02",
      title: "The Destructive Impact",
      bullets: [
        "Hours wasted weekly reconciling which agreements were resolved.",
        "Unsigned or duplicated resolutions during peak filing periods.",
        "No provable audit trail for transparency reviews.",
      ],
    },
    {
      index: "03",
      title: "The Architectural Mandate",
      bullets: [
        "Centralized archive with full-text search over expediente metadata.",
        "Keycloak SSO with granular department authorization.",
        "Containerized stack with automatic DB replica failover.",
      ],
    },
  ],
};

export const teeoRole: TeeoRole = {
  kicker: "03 // Scope of responsibility",
  title: "Personal Engineering Ownership",
  lede: "Serving as Lead Full-Stack Developer, I owned the platform from schema design and Keycloak integration through to container orchestration and charts.",
  badge: "Solo architecture & core implementation",
  cards: [
    {
      icon: "schema",
      tag: "Engine design",
      title: "Architecture & Data Modeling",
      body: "Defined expediente lifecycle states, relational schema, and index strategy for sub-second metadata search.",
    },
    {
      icon: "bolt",
      tag: "Core systems",
      title: "Laravel API & Queues",
      body: "Built REST endpoints, background jobs for document ingestion, and signed-agreement workflows.",
    },
    {
      icon: "fingerprint",
      tag: "Data integrity",
      title: "Auth & Audit Trail",
      body: "Integrated Keycloak SSO and append-only audit logs with hash chaining for tamper evidence.",
    },
    {
      icon: "storage",
      tag: "Storage layer",
      title: "PostgreSQL & Replicas",
      body: "Configured primary-replica topology with automated failover and pooled connections.",
    },
    {
      icon: "monitoring",
      tag: "SRE & Observability",
      title: "Telemetry & Dashboards",
      body: "Shipped agreement charts, query latency panels, and replica lag alerts.",
    },
    {
      icon: "emergency",
      tag: "Resilience",
      title: "Docker & CI/CD",
      body: "Containerized stack with GitHub Actions pipelines and zero-downtime compose rollouts.",
    },
  ],
};

export const teeoBuilt: TeeoBuilt = {
  kicker: "04 // Core systems delivered",
  title: "Architectural Pillars & Technical Implementations",
  lede: "Four purpose-built subsystems that keep the archive fast, sealed, and operable.",
  subsystems: [
    {
      id: "SUBSYSTEM 01",
      icon: "memory",
      title: "Expediente Lifecycle Engine",
      body: "State machine covering creado, turnado, reencauzado, and resuelto with guarded transitions per role.",
      implLabel: "Implementation:",
      impl: "Laravel state transitions + policy gates, every change emits an immutable audit row.",
      outcomeLabel: "Measured Outcome:",
      outcome: "Zero invalid state jumps in production",
    },
    {
      id: "SUBSYSTEM 02",
      icon: "filter",
      title: "Full-Text Metadata Search",
      body: "Sub-second search across expediente codes, parties, and agreement text with trigram indexes.",
      implLabel: "Implementation:",
      impl: "PostgreSQL GIN/trigram indexes with ranked results and department-scoped filters.",
      outcomeLabel: "Measured Outcome:",
      outcome: "P95 < 200ms on 100k+ records",
    },
    {
      id: "SUBSYSTEM 03",
      icon: "encryption",
      title: "Sealed Audit Hash Chain",
      body: "Each audit entry hashes the previous one, so silent edits break the chain immediately.",
      implLabel: "Implementation:",
      impl: "SHA-256 chained log verified by a background worker with replica-lag awareness.",
      outcomeLabel: "Measured Outcome:",
      outcome: "Provable tamper resistance",
    },
    {
      id: "SUBSYSTEM 04",
      icon: "tune",
      title: "Replica Failover & Backups",
      body: "Automatic promotion of a hot replica plus nightly encrypted dumps to object storage.",
      implLabel: "Implementation:",
      impl: "Health-checked Docker Compose topology with WAL archiving and restore drills.",
      outcomeLabel: "Measured Outcome:",
      outcome: "RPO < 5 min, RTO < 2 min",
    },
  ],
};

export const teeoSolved: TeeoSolved = {
  kicker: "05 // Engineering deep dives",
  title: "How Hard Problems Were Decisively Solved",
  lede: "Real operational edge cases and the fixes that neutralized them.",
  cases: [
    {
      challengeLabel: "Challenge 01",
      title: "Slow Agreement Reporting Before Hearings",
      problem: "Staff exported spreadsheets and counted resolutions by hand hours before sessions.",
      solutionLabel: "The Solution",
      solution:
        "Pre-aggregated agreement counters by expediente type and week, refreshed with queued rollups on every state change, served from a cached Vue dashboard.",
      impactLabel: "System Impact:",
      impact: "Hearing prep reduced from hours to seconds",
    },
    {
      challengeLabel: "Challenge 02",
      title: "Unauthorized Access to Sensitive Files",
      problem: "Shared folders exposed every case to every department with no traceability.",
      solutionLabel: "The Solution",
      solution:
        "Keycloak realm with department roles mapped to Laravel policies; every read of a sensitive file writes an audit entry.",
      impactLabel: "System Impact:",
      impact: "100% of sensitive reads now attributed",
    },
    {
      challengeLabel: "Challenge 03",
      title: "Replica Drift During Peak Filings",
      problem: "Read replicas lagged minutes behind primary during bulk ingestion windows.",
      solutionLabel: "The Solution",
      solution:
        "Split read/write connections, added pooled replicas, and surfaced lag in telemetry so the UI warns before serving stale lists.",
      impactLabel: "System Impact:",
      impact: "Replica lag held under 0.5s at peak",
    },
  ],
};

export const teeoArchitecture: TeeoArchitecture = {
  kicker: "06 // System topology",
  title: "High-Fidelity Architecture Diagram",
  lede: "End-to-end trajectory from browser interaction down to sealed archival storage.",
  tiers: [
    {
      tier: "TIER 1",
      title: "Vue 3 Client",
      subtitle: "Reactive dockets & charts",
      body: "Role-aware views, full-text search, and agreement dashboards.",
      footer: "Vite / Pinia",
    },
    {
      tier: "TIER 2 (CORE)",
      title: "Laravel 12 API",
      subtitle: "Policies + queues",
      body: "REST endpoints, state machine, signed-agreement workflows.",
      footer: "~40ms median",
      core: true,
    },
    {
      tier: "TIER 3",
      title: "PostgreSQL",
      subtitle: "Primary + replicas",
      body: "Partitioned audit tables, trigram indexes, pooled connections.",
      footer: "Zero data loss",
    },
    {
      tier: "TIER 4",
      title: "Keycloak SSO",
      subtitle: "Realm & roles",
      body: "Department authorization, token refresh, session revocation.",
      footer: "Strictly scoped",
    },
    {
      tier: "TIER 5",
      title: "Docker & Nginx",
      subtitle: "Compose + proxy",
      body: "Reverse proxy, TLS termination, zero-downtime rollouts.",
      footer: "RTO < 2 min",
    },
  ],
  specs: [
    {
      title: "Data Serialization Format",
      body: "JSON over REST with strict FormRequest validation and API resource shaping.",
    },
    {
      title: "Consensus & Replication",
      body: "PostgreSQL streaming replication, 2 replicas, automatic promotion on health-check failure.",
    },
    {
      title: "Failover Protocol",
      body: "Container health probes re-route reads in under 30s without dropping signed writes.",
    },
  ],
};

export const teeoStack: TeeoStack = {
  kicker: "07 // Technical ecosystem",
  title: "Technology Stack",
  lede: "Selected for predictability, maintainability, and judicial-grade reliability.",
  categories: [
    {
      icon: "terminal",
      title: "Backend",
      tools: [
        { name: "Laravel 12", note: "API & lifecycle engine" },
        { name: "PHP 8.2+", note: "Strict types & queues" },
        { name: "Keycloak", note: "SSO & department roles" },
      ],
    },
    {
      icon: "sync",
      title: "Frontend",
      tools: [
        { name: "Vue.js 3", note: "Dockets & dashboards" },
        { name: "TypeScript", note: "Typed API clients" },
        { name: "Tailwind CSS", note: "Design system" },
      ],
    },
    {
      icon: "database",
      title: "Storage & Cache",
      tools: [
        { name: "PostgreSQL", note: "Archive & audit index" },
        { name: "Redis", note: "Query & session cache" },
        { name: "pgvector", note: "Future semantic search" },
      ],
    },
    {
      icon: "cloud",
      title: "Infra & Orchestration",
      tools: [
        { name: "Docker Compose", note: "Immutable deploys" },
        { name: "Nginx", note: "Reverse proxy & TLS" },
        { name: "GitHub Actions", note: "CI/CD pipelines" },
      ],
    },
    {
      icon: "stats",
      title: "Observability",
      tools: [
        { name: "Audit Dashboard", note: "Latency & lag panels" },
        { name: "Log Chain Verifier", note: "Nightly hash checks" },
        { name: "Backup Drills", note: "Restore rehearsals" },
      ],
    },
  ],
};

export const teeoChallenges: TeeoChallenges = {
  kicker: "08 // Extreme edge cases",
  title: "High-Consequence Technical Obstacles",
  lede: "Index bloat, N+1 queries, and cold-cache stampedes under filing surges.",
  items: [
    {
      id: "INVESTIGATION 01",
      title: "Search Slowdowns Past 100k Expedientes",
      body: "Wildcard LIKE queries scanned full tables once the archive crossed six figures. Profiling pointed to missing trigram coverage and unscoped filters.",
      result: "P95 search: 1.8s → 180ms",
    },
    {
      id: "INVESTIGATION 02",
      title: "N+1 Queries on Docket Lists",
      body: "Docket views fired hundreds of lazy queries for relations. Introduced eager loading with constrained selects and cached counts.",
      result: "Queries per page: 240 → 9",
    },
    {
      id: "INVESTIGATION 03",
      title: "Cache Stampedes After Deploy",
      body: "Cold caches after rollout funneled every request to the DB. Added staged cache warming and request coalescing on hot dockets.",
      result: "Deploy p99 spike eliminated",
    },
  ],
};

export const teeoSecurity: TeeoSecurity = {
  kicker: "09 // Hardened security",
  title: "Judicial-Grade Reliability & Compliance Standards",
  lede: "Because case files serve as legal proof, the pipeline assumes zero trust at every hop.",
  items: [
    {
      icon: "lock",
      title: "Keycloak SSO & Least Privilege",
      body: "Every session is realm-authenticated; department roles gate each expediente action and view.",
    },
    {
      icon: "key",
      title: "Signed Agreements",
      body: "Resolutions carry electronic signatures; unsigned drafts can never transition to resuelto.",
    },
    {
      icon: "encrypted",
      title: "Encrypted Backups at Rest",
      body: "Nightly dumps are AES-256 encrypted before leaving the host, with restore drills each month.",
    },
    {
      icon: "bug",
      title: "Seeded Failure Drills",
      body: "Staging kills replicas and proxies on schedule to prove failover keeps writes sealed.",
    },
  ],
};

export const teeoResults: TeeoResults = {
  kicker: "10 // Verified production impact",
  title: "Quantitative Scale & Performance Results",
  lede: "Measurements collected over 90 continuous production days after rollout.",
  kpis: [
    {
      label: "Search latency",
      value: "180ms",
      body: "P95 expediente metadata search, down from multi-second folder hunts.",
    },
    {
      label: "Daily queries",
      value: "12k+",
      body: "Daily case queries served without backlog during peak filing weeks.",
    },
    {
      label: "Audit coverage",
      value: "100%",
      body: "State transitions sealed in the hash-chained log with zero gaps.",
    },
    {
      label: "Reporting time",
      value: "-92%",
      body: "Agreement reporting reduced from hours of spreadsheets to live charts.",
    },
  ],
  qualitative: [
    {
      icon: "verified",
      title: "Trusted Audits",
      body: "Transparency reviews pull sealed proofs in seconds instead of days of folder archaeology.",
    },
    {
      icon: "terminal",
      title: "Instant Docket Replay",
      body: "Any expediente timeline can be replayed to show exactly who turned or resolved it.",
    },
    {
      icon: "group",
      title: "Faster Onboarding",
      body: "Role-scoped views let new clerks work safely on day one without tribal spreadsheet knowledge.",
    },
  ],
};

export const teeoLearned: TeeoLearned = {
  kicker: "11 // Engineering wisdom",
  title: "Critical Lessons & Practical Insights",
  lede: "What surviving real caseload taught about pragmatic production systems.",
  items: [
    {
      title: "Model the Lifecycle First",
      body: "Nailing creado → turnado → reencauzado → resuelto transitions early prevented an entire class of invalid states and reporting bugs.",
    },
    {
      title: "Index for the Query You Actually Run",
      body: "Generic indexes looked fine until production search patterns arrived. Trigram coverage on real search fields mattered more than any cache tweak.",
    },
    {
      title: "Boring Infrastructure Wins",
      body: "Compose, Nginx, and nightly restore drills beat exotic orchestration: predictable deploys kept a small team shipping safely.",
    },
  ],
};

export const teeoRoadmap: TeeoRoadmap = {
  kicker: "12 // The roadmap ahead",
  title: "Future Architecture Enhancements",
  lede: "Planned evolutions toward semantic search and deeper analytics.",
  items: [
    {
      title: "Semantic Clause Search",
      body: "Using pgvector embeddings to find similar resolutions and clauses across years of agreements.",
    },
    {
      title: "Power BI Leadership Dashboards",
      body: "Star-schema datamarts feeding executive views on backlog, throughput, and resolution aging.",
    },
    {
      title: "Formal Retention Specification",
      body: "Documented lifecycle and purge policy with cryptographic proof of compliant destruction.",
    },
  ],
};

export const teeoSummary: TeeoSummary = {
  eyebrow: "Executive Summary for Engineering Leaders",
  title: "Paper Folders to Sealed Archive, Solved.",
  body: "TEEO replaced scattered spreadsheets with a sealed Laravel + Vue archive serving 12k+ daily case queries at 180ms P95, with 100% audit coverage and 92% faster agreement reporting.",
  tags: ["Laravel 12", "Vue 3", "PostgreSQL", "Keycloak", "Docker"],
  downloadLabel: "Download Case Study PDF",
  contactLabel: "Contact Lead Developer",
};

export const teeoExplore: TeeoExplore = {
  eyebrow: "14 // Project verification",
  title: "Inspect Source & Live Telemetry",
  lede: "Explore the repository mirror, read the architecture brief, or jump back to the live console.",
  telemetryLabel: "Launch Telemetry Console",
  sourceLabel: "GitHub Mirror",
  rfcLabel: "Request Architecture Brief",
};

export const teeoPager: TeeoPager = {
  prevLabel: "Previous Project",
  prevTitle: "Lettuce Vision",
  prevSubtitle: "Smart Hydroponics",
  indexLabel: "View All Engineering Projects",
  nextLabel: "Next Project",
  nextTitle: "RAG Retrieval",
  nextSubtitle: "Semantic Engine",
};
