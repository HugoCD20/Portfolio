/**
 * Test/mock data for the Telecom pipeline project detail page.
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
  category: "Data pipelines · Network telemetry",
  title: "Telecom & Network Metric Pipeline.",
  headline: "1.2M daily syslog events parsed from edge nodes with sub-500ms anomaly alerts.",
  lede:
    "Automated ingestion over distributed syslogs with Scikit-learn isolation forests for packet-drop and latency-spike detection, backed by partitioned PostgreSQL timeseries.",
  role: "Software Developer & Data Engineer",
  type: "Production pipeline (Telemetry)",
  status: "v3.1 Streaming daily",
  duration: "5 months (2023)",
  coreStack: "PostgreSQL · Pandas · FastAPI",
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
  windowTitle: "telecom-prod // ingest-ring-01 // live-parser",
  clusterState: "PARSER HEALTHY",
  uptime: "Up: 210d 16h 05m",
  metrics: [
    { label: "Daily volume", value: "1.2M+", unit: "events/day", hint: "Pandas/Polars vectorized", icon: "speed", accent: "primary" },
    { label: "Anomaly rate", value: "0.02", unit: "% flagged", hint: "Isolation forest scored", icon: "verified", accent: "secondary" },
    { label: "Alert latency", value: "<500", unit: "ms BGP flaps", hint: "Target < 1s SLA", icon: "timer", accent: "tertiary" },
    { label: "Buffer health", value: "512", unit: "MB ring", hint: "Redis ring nominal", icon: "balance", accent: "primary" },
  ],
  histogramTitle: "Realtime ingest rate (last 24 parser windows)",
  histogramSample: "Sample: 5 min",
  histogramAvg: "Avg throughput: 833 ev/min",
  histogramBuffer: "Ring saturation: 31% (Nominal)",
  logTitle: "INGEST_TAIL",
  logFormat: "Syslog lines",
  logFooterLeft: "Parser lag: ZERO",
  logFooterRight: "Workers: 8 / 8 active",
  tabs: [
    { id: "topology", label: "Ingest Stream" },
    { id: "benchmarks", label: "Detection Benchmark" },
    { id: "dlq", label: "Alert Queue (2)" },
  ],
  tlsNote: "Redis ring 512MB",
  tlsCipher: "Synchronized",
};

export const about: TeeoAbout = {
  kicker: "01 // Architectural context",
  title: "Hearing every edge node before customers do.",
  lede: "Packet loss and latency spikes hide in millions of syslog lines nobody reads.",
  paragraph:
    "Distributed edge nodes emit endless syslogs: interface counters, BGP transitions, latency probes. NOC engineers grep samples by hand and learn about outages from customer tickets.",
  closing:
    "This pipeline parses every line automatically, scores anomalies unsupervised, and pushes BGP and latency alerts in under half a second — with a live Vue dashboard for drill-down.",
  audiences: [
    {
      icon: "account",
      title: "NOC Engineers",
      body: "Live anomaly feed with node, metric, and severity instead of raw grep sessions.",
    },
    {
      icon: "policy",
      title: "Network Planners",
      body: "Partitioned timeseries history showing chronic vs one-off degradation per node.",
    },
    {
      icon: "stats",
      title: "Leadership",
      body: "Daily volume and incident counts answering capacity questions with data.",
    },
  ],
};

export const problem: TeeoProblem = {
  kicker: "02 // The problem space",
  title: "Why sampled greps missed real outages.",
  lede: "Volume defeated humans; rare events defeated thresholds.",
  steps: [
    {
      index: "01",
      title: "The Structural Bottleneck",
      bullets: [
        "1.2M daily log lines across nodes with inconsistent formats.",
        "Static thresholds either screamed constantly or missed novel failures.",
        "No timeseries store: history lived in rotated flat files.",
      ],
    },
    {
      index: "02",
      title: "The Destructive Impact",
      bullets: [
        "BGP route flaps discovered hours after traffic shifted.",
        "Latency spikes blamed on apps while the network was at fault.",
        "Post-mortems rebuilt timelines from scattered archives.",
      ],
    },
    {
      index: "03",
      title: "The Architectural Mandate",
      bullets: [
        "Vectorized parsing that keeps up with full firehose volume.",
        "Unsupervised detection for failures nobody wrote a rule for.",
        "Partitioned timeseries backing every alert with history.",
      ],
    },
  ],
};

export const role: TeeoRole = {
  kicker: "03 // Scope of responsibility",
  title: "Personal Engineering Ownership",
  lede: "Serving as Software Developer & Data Engineer, I owned the path from raw syslogs and parsing through to detection models and dashboards.",
  badge: "Solo ingestion-to-alert ownership",
  cards: [
    {
      icon: "schema",
      tag: "Ingestion",
      title: "Syslog Parsing Fleet",
      body: "Format-tolerant parsers normalizing heterogeneous edge node output into one event schema.",
    },
    {
      icon: "bolt",
      tag: "Processing",
      title: "Vectorized Transform Jobs",
      body: "Pandas/Polars routines processing the full daily volume with zero memory leaks.",
    },
    {
      icon: "fingerprint",
      tag: "Detection",
      title: "Isolation Forest Models",
      body: "Unsupervised scoring for packet drops and latency spikes without labeled incidents.",
    },
    {
      icon: "storage",
      tag: "Storage",
      title: "Partitioned Timeseries",
      body: "PostgreSQL partitioned tables keeping hot windows fast and history queryable.",
    },
    {
      icon: "monitoring",
      tag: "Serving",
      title: "Vue & Streamlit Dashboards",
      body: "Live filtering views connecting alerts back to node-level metric history.",
    },
    {
      icon: "emergency",
      tag: "Alerting",
      title: "Sub-Second Dispatch",
      body: "BGP flap and spike alerts out the door in under 500ms with dedup windows.",
    },
  ],
};

export const built: TeeoBuilt = {
  kicker: "04 // Core systems delivered",
  title: "Architectural Pillars & Technical Implementations",
  lede: "Four subsystems from raw lines to paged humans.",
  subsystems: [
    {
      id: "SUBSYSTEM 01",
      icon: "memory",
      title: "Format-Tolerant Log Parser",
      body: "Handles firmware-variant syslog dialects without dropping lines on unknown fields.",
      implLabel: "Implementation:",
      impl: "Grammar-per-node-family parsers with a quarantine queue for unparseable lines.",
      outcomeLabel: "Measured Outcome:",
      outcome: "1.2M lines/day at 99.98% parse rate",
    },
    {
      id: "SUBSYSTEM 02",
      icon: "filter",
      title: "Vectorized Transform Engine",
      body: "Daily volume crunched in batched columnar routines instead of row-by-row loops.",
      implLabel: "Implementation:",
      impl: "Pandas/Polars pipelines with chunked I/O and memory-profiled batch sizes.",
      outcomeLabel: "Measured Outcome:",
      outcome: "Zero-leak full-volume daily runs",
    },
    {
      id: "SUBSYSTEM 03",
      icon: "encryption",
      title: "Unsupervised Anomaly Scorer",
      body: "Isolation forests flagging drops and spikes the rulebook never anticipated.",
      implLabel: "Implementation:",
      impl: "Per-metric forests with rolling calibration windows and alert dedup.",
      outcomeLabel: "Measured Outcome:",
      outcome: "0.02% flag rate, near-zero noise",
    },
    {
      id: "SUBSYSTEM 04",
      icon: "tune",
      title: "Live Telemetry Surface",
      body: "Vue and Streamlit views with live filtering from alert back to node history.",
      implLabel: "Implementation:",
      impl: "FastAPI metric endpoints over partitioned tables plus Redis-backed live filters.",
      outcomeLabel: "Measured Outcome:",
      outcome: "Alert-to-cause in under a minute",
    },
  ],
};

export const solved: TeeoSolved = {
  kicker: "05 // Engineering deep dives",
  title: "How Hard Problems Were Decisively Solved",
  lede: "Format chaos, alert storms, and slow history — handled.",
  cases: [
    {
      challengeLabel: "Challenge 01",
      title: "Firmware Variants Broke Strict Parsers",
      problem: "One vendor's firmware update silently reordered syslog fields, dropping 12% of lines.",
      solutionLabel: "The Solution",
      solution:
        "Replaced strict positional parsing with grammar-per-family parsers plus a quarantine queue that pages with the offending sample attached.",
      impactLabel: "System Impact:",
      impact: "Parse rate restored to 99.98%",
    },
    {
      challengeLabel: "Challenge 02",
      title: "Alert Storms During Maintenance",
      problem: "Planned maintenance flapped dozens of nodes and paged the NOC hundreds of times.",
      solutionLabel: "The Solution",
      solution:
        "Added maintenance-window awareness with dedup: one incident, one alert, with affected-node rollup attached.",
      impactLabel: "System Impact:",
      impact: "Pages during windows down 94%",
    },
    {
      challengeLabel: "Challenge 03",
      title: "History Queries Timed Out",
      problem: "Month-range comparisons scanned the entire events table and stalled dashboards.",
      solutionLabel: "The Solution",
      solution:
        "Partitioned timeseries by day with per-node rollups precomputed, so history reads hit summaries first.",
      impactLabel: "System Impact:",
      impact: "Month queries: 38s → 900ms",
    },
  ],
};

export const architecture: TeeoArchitecture = {
  kicker: "06 // System topology",
  title: "High-Fidelity Architecture Diagram",
  lede: "From edge syslog emission to paged engineer in one streaming pass.",
  tiers: [
    {
      tier: "TIER 1",
      title: "Edge Nodes",
      subtitle: "Syslog emitters",
      body: "Distributed nodes shipping interface, BGP, and probe lines.",
      footer: "1.2M lines/day",
    },
    {
      tier: "TIER 2 (CORE)",
      title: "Parser Fleet",
      subtitle: "Normalize & validate",
      body: "Grammar-per-family parsing with quarantine for odd lines.",
      footer: "99.98% parsed",
      core: true,
    },
    {
      tier: "TIER 3",
      title: "Transform Jobs",
      subtitle: "Pandas / Polars",
      body: "Vectorized batch routines with memory-profiled chunks.",
      footer: "Zero-leak runs",
    },
    {
      tier: "TIER 4",
      title: "Detection Layer",
      subtitle: "Isolation forests",
      body: "Unsupervised scoring with rolling calibration.",
      footer: "<500ms alerts",
    },
    {
      tier: "TIER 5",
      title: "Serving & Storage",
      subtitle: "Postgres + Redis",
      body: "Partitioned timeseries plus live filter buffers.",
      footer: "Vue dashboards",
    },
  ],
  specs: [
    {
      title: "Event Schema",
      body: "One normalized schema across node families with raw-line preservation for forensics.",
    },
    {
      title: "Detection Method",
      body: "Per-metric isolation forests; no labeled incidents required to catch novel failures.",
    },
    {
      title: "Dispatch Protocol",
      body: "Dedup windows collapse flapping nodes into single incidents with rollup context.",
    },
  ],
};

export const stack: TeeoStack = {
  kicker: "07 // Technical ecosystem",
  title: "Technology Stack",
  lede: "Chosen for volume throughput and detection without labels.",
  categories: [
    {
      icon: "terminal",
      title: "Processing",
      tools: [
        { name: "Pandas / Polars", note: "Vectorized transforms" },
        { name: "Python", note: "Parsers & jobs" },
        { name: "FastAPI", note: "Metric endpoints" },
      ],
    },
    {
      icon: "sync",
      title: "Detection",
      tools: [
        { name: "Scikit-learn", note: "Isolation forests" },
        { name: "NumPy", note: "Feature windows" },
        { name: "Calibration", note: "Rolling baselines" },
      ],
    },
    {
      icon: "database",
      title: "Storage & Cache",
      tools: [
        { name: "PostgreSQL", note: "Partitioned series" },
        { name: "Redis", note: "Ring + live filters" },
        { name: "Parquet", note: "Cold archives" },
      ],
    },
    {
      icon: "cloud",
      title: "Infra & Delivery",
      tools: [
        { name: "Docker", note: "Job containers" },
        { name: "Systemd", note: "Parser daemons" },
        { name: "Nginx", note: "Dashboard proxy" },
      ],
    },
    {
      icon: "stats",
      title: "Observability",
      tools: [
        { name: "Vue dashboard", note: "Live drill-down" },
        { name: "Streamlit", note: "Ad-hoc analysis" },
        { name: "Alert receipts", note: "Dispatch proof" },
      ],
    },
  ],
};

export const challenges: TeeoChallenges = {
  kicker: "08 // Extreme edge cases",
  title: "High-Consequence Technical Obstacles",
  lede: "Clock skew, backfill storms, and silent node death.",
  items: [
    {
      id: "INVESTIGATION 01",
      title: "Clock Skew Faked Latency Spikes",
      body: "Drifted node clocks manufactured phantom spikes. Added NTP-offset correction per node before any scoring.",
      result: "Phantom spikes eliminated",
    },
    {
      id: "INVESTIGATION 02",
      title: "Backfill Storms After Outages",
      body: "Reconnecting nodes dumped hours of backlog at once, crushing the parser fleet. Added rate-shaped replay queues.",
      result: "Replay absorbed without lag",
    },
    {
      id: "INVESTIGATION 03",
      title: "Silent Nodes Looked Healthy",
      body: "Dead nodes sent nothing, and nothing-alerted looked fine. Added heartbeat-gap detection as a first-class signal.",
      result: "Silent deaths now page in 60s",
    },
  ],
};

export const security: TeeoSecurity = {
  kicker: "09 // Hardened reliability",
  title: "Carrier-Grade Robustness Standards",
  lede: "Telemetry you can page on at 3am without second-guessing.",
  items: [
    {
      icon: "lock",
      title: "Loss-Aware Ingestion",
      body: "Every dropped or quarantined line is counted and visible; silent loss is a pageable event.",
    },
    {
      icon: "key",
      title: "Raw-Line Preservation",
      body: "Normalized events keep their raw source line for forensic replay and dispute resolution.",
    },
    {
      icon: "encrypted",
      title: "Partitioned Retention",
      body: "Hot, warm, and cold tiers keep history queryable without letting storage costs explode.",
    },
    {
      icon: "bug",
      title: "Fault Injection Drills",
      body: "Staging replays firmware changes and outage backfills to prove parsers and queues hold.",
    },
  ],
};

export const results: TeeoResults = {
  kicker: "10 // Verified production impact",
  title: "Quantitative Scale & Performance Results",
  lede: "Measured across 180 production days of continuous ingestion.",
  kpis: [
    {
      label: "Daily volume",
      value: "1.2M+",
      body: "Raw metric events parsed daily with zero memory leaks.",
    },
    {
      label: "Alert latency",
      value: "<500ms",
      body: "BGP flap detection from event to dispatched page.",
    },
    {
      label: "Parse fidelity",
      value: "99.98%",
      body: "Lines normalized despite firmware-variant formats.",
    },
    {
      label: "History speed",
      value: "42x",
      body: "Month-range queries accelerated via precomputed rollups.",
    },
  ],
  qualitative: [
    {
      icon: "verified",
      title: "Outages Found First",
      body: "NOC learns about flaps from the pipeline, not from customer tickets.",
    },
    {
      icon: "terminal",
      title: "Blameless Post-Mortems",
      body: "Alert-to-history drill-down settles app-vs-network debates with data.",
    },
    {
      icon: "group",
      title: "Planners Unblocked",
      body: "Chronic-node rankings finally prioritize capacity spend on evidence.",
    },
  ],
};

export const learned: TeeoLearned = {
  kicker: "11 // Engineering wisdom",
  title: "Critical Lessons & Practical Insights",
  lede: "What 1.2M daily lines teach about data engineering.",
  items: [
    {
      title: "Parse Leniently, Count Strictly",
      body: "Tolerant grammars plus exact loss accounting beat strict parsers that silently dropped the weird stuff.",
    },
    {
      title: "Unsupervised Beats Unwritten Rules",
      body: "Nobody can enumerate every failure mode; isolation forests caught what the rulebook never imagined.",
    },
    {
      title: "Precompute the Questions",
      body: "Rollups for the queries NOC actually runs mattered more than any generic index tuning.",
    },
  ],
};

export const roadmap: TeeoRoadmap = {
  kicker: "12 // The roadmap ahead",
  title: "Future Architecture Enhancements",
  lede: "From reactive paging to predictive capacity.",
  items: [
    {
      title: "Forecasting Layer",
      body: "Trend projection on rollups to flag capacity exhaustion weeks before it bites.",
    },
    {
      title: "Topology-Aware Correlation",
      body: "Linking node alerts through network topology to isolate root-cause devices automatically.",
    },
    {
      title: "eBPF Telemetry Agents",
      body: "Kernel-level metric emission to complement syslog parsing with higher-fidelity signals.",
    },
  ],
};

export const summary: TeeoSummary = {
  eyebrow: "Executive Summary for Engineering Leaders",
  title: "Blind Greps to Sub-Second Alerts, Solved.",
  body: "The pipeline turned 1.2M daily syslog lines into <500ms anomaly pages at 99.98% parse fidelity, with month-history queries 42x faster.",
  tags: ["PostgreSQL", "Pandas", "Scikit-learn", "FastAPI", "Redis"],
  downloadLabel: "Download Case Study PDF",
  contactLabel: "Contact Lead Developer",
};

export const explore: TeeoExplore = {
  eyebrow: "14 // Project verification",
  title: "Inspect Source & Live Telemetry",
  lede: "Browse the parsers, replay an incident, or jump back to the live console.",
  telemetryLabel: "Launch Telemetry Console",
  sourceLabel: "GitHub Mirror",
  rfcLabel: "Request Architecture Brief",
};

export const pager: TeeoPager = {
  prevLabel: "Previous Project",
  prevTitle: "RAG Retrieval",
  prevSubtitle: "Semantic Engine",
  indexLabel: "View All Engineering Projects",
  nextLabel: "Next Project",
  nextTitle: "Gestión de Archivos TEEO",
  nextSubtitle: "High-Compliance Archive",
};
