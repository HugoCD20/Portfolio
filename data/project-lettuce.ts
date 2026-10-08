/**
 * Test/mock data for the Lettuce Vision project detail page.
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
  category: "Computer vision / AI · Agritech",
  title: "Lettuce Vision: Smart Hydroponics.",
  headline: "Autonomous canopy monitoring with fine-tuned YOLOv8 at 94.2% mAP@50 on constrained edge cameras.",
  lede:
    "Built for precision indoor vertical farming: custom OpenCV pipelines track canopy growth, flag tip-burn disease, estimate leaf biomass, and trigger nutrient rebalancing.",
  role: "ML Engineer & Full-Stack Developer",
  type: "Applied R&D (Agritech)",
  status: "v1.3 Deployed on edge",
  duration: "4 months (2024)",
  coreStack: "Python · YOLOv8 · FastAPI",
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
  windowTitle: "lettuce-edge // canopy-cam-03 // live-inference",
  clusterState: "MODEL HEALTHY",
  uptime: "Up: 96d 04h 10m",
  metrics: [
    { label: "Model precision", value: "94.2", unit: "% mAP@50", hint: "Held across 6 canopies", icon: "verified", accent: "secondary" },
    { label: "Edge inference", value: "14", unit: "ms FP16", hint: "Target < 25ms per frame", icon: "timer", accent: "primary" },
    { label: "Canopies tracked", value: "6", unit: "zones live", hint: "A-01…B-03 streaming", icon: "balance", accent: "tertiary" },
    { label: "Open alerts", value: "1", unit: "tip-burn?", hint: "A-03 under review", icon: "speed", accent: "primary" },
  ],
  histogramTitle: "Realtime canopy confidence (Zones A-01 – B-03)",
  histogramSample: "Sample: 1 frame",
  histogramAvg: "Avg confidence: 0.91",
  histogramBuffer: "Edge buffer saturation: 22% (Nominal)",
  logTitle: "INFERENCE_TAIL",
  logFormat: "JSON lines",
  logFooterLeft: "Dropped frames: ZERO",
  logFooterRight: "Workers: 4 / 4 active",
  tabs: [
    { id: "topology", label: "Canopy Grid" },
    { id: "benchmarks", label: "Inference Benchmark" },
    { id: "dlq", label: "Alert Queue (1)" },
  ],
  tlsNote: "FastAPI edge container",
  tlsCipher: "FP16",
};

export const about: TeeoAbout = {
  kicker: "01 // Architectural context",
  title: "Giving growers eyes on every leaf.",
  lede: "Tip-burn and nutrient drift show up days before human scouting catches them.",
  paragraph:
    "Indoor vertical farms stack dense lettuce canopies under tightly controlled light and nutrients. Staff walk rows with clipboards, scoring growth by eye — slow, subjective, and blind to early stress signals.",
  closing:
    "Lettuce Vision puts a camera over every zone and a model behind every frame: continuous canopy scoring, disease flags, and webhook alerts straight to cultivation staff.",
  audiences: [
    {
      icon: "account",
      title: "Cultivation Staff",
      body: "Live canopy scores per zone, with plain-language flags when a zone needs attention.",
    },
    {
      icon: "policy",
      title: "Agronomists",
      body: "Annotated frame history to validate tip-burn calls and tune nutrient recipes.",
    },
    {
      icon: "stats",
      title: "Farm Operators",
      body: "Biomass trend charts that connect nutrient changes to growth within days.",
    },
  ],
};

export const problem: TeeoProblem = {
  kicker: "02 // The problem space",
  title: "Why manual scouting missed early stress.",
  lede: "Human rounds were sparse, subjective, and disconnected from nutrient controls.",
  steps: [
    {
      index: "01",
      title: "The Structural Bottleneck",
      bullets: [
        "Canopy checks happened once daily, by eye, with no photo record.",
        "Tip-burn spotted only after leaf edges visibly necrosed.",
        "Nutrient adjustments based on gut feel, not measured biomass.",
      ],
    },
    {
      index: "02",
      title: "The Destructive Impact",
      bullets: [
        "Entire zones downgraded at harvest from preventable tip-burn.",
        "Over-dosed nutrients wasted inputs and stressed roots.",
        "No dataset to learn which recipes actually worked.",
      ],
    },
    {
      index: "03",
      title: "The Architectural Mandate",
      bullets: [
        "Per-zone cameras with continuous YOLOv8 canopy inference.",
        "Annotated dataset owned by the farm, not a generic benchmark.",
        "Alerts wired to staff workflows, not another dashboard tab.",
      ],
    },
  ],
};

export const role: TeeoRole = {
  kicker: "03 // Scope of responsibility",
  title: "Personal Engineering Ownership",
  lede: "Serving as ML Engineer & Full-Stack Developer, I owned the loop from dataset annotation and model training through to edge deployment and alerts.",
  badge: "Solo model training & edge deployment",
  cards: [
    {
      icon: "schema",
      tag: "Dataset",
      title: "Dataset & Annotation Pipeline",
      body: "Collected and annotated 8,400+ multispectral crop images with consistent canopy and lesion labels.",
    },
    {
      icon: "bolt",
      tag: "Model",
      title: "YOLOv8 Fine-Tuning",
      body: "Fine-tuned detection heads for canopy instances and tip-burn spots with augmentation for grow-light glare.",
    },
    {
      icon: "fingerprint",
      tag: "Vision integrity",
      title: "OpenCV Processing Chain",
      body: "Custom pre-processing: white-balance normalization, glare masking, and leaf-surface biomass estimation.",
    },
    {
      icon: "storage",
      tag: "Serving",
      title: "FastAPI Edge Backend",
      body: "Containerized inference service with frame batching, FP16 runtime, and health-checked workers.",
    },
    {
      icon: "monitoring",
      tag: "Observability",
      title: "Telemetry & Dashboards",
      body: "Per-zone confidence panels, inference latency tracking, and alert delivery receipts.",
    },
    {
      icon: "emergency",
      tag: "Operations",
      title: "Webhook Alerting",
      body: "Threshold-based dispatch to cultivation staff with annotated snapshot attached to every alert.",
    },
  ],
};

export const built: TeeoBuilt = {
  kicker: "04 // Core systems delivered",
  title: "Architectural Pillars & Technical Implementations",
  lede: "Four subsystems from pixels to nutrient actions.",
  subsystems: [
    {
      id: "SUBSYSTEM 01",
      icon: "memory",
      title: "Canopy Dataset Factory",
      body: "Versioned collection, annotation review, and augmentation recipes tuned for indoor grow lights.",
      implLabel: "Implementation:",
      impl: "Label review queue plus scripted augmentation (glare, blur, crop) with dataset cards per release.",
      outcomeLabel: "Measured Outcome:",
      outcome: "8,400+ annotated images shipped",
    },
    {
      id: "SUBSYSTEM 02",
      icon: "filter",
      title: "Fine-Tuned YOLOv8 Detector",
      body: "Canopy instance detection plus tip-burn spotting in a single multi-head model.",
      implLabel: "Implementation:",
      impl: "PyTorch training with class-balanced sampling and mAP@50 gating before any edge export.",
      outcomeLabel: "Measured Outcome:",
      outcome: "94.2% mAP@50 on held-out zones",
    },
    {
      id: "SUBSYSTEM 03",
      icon: "encryption",
      title: "FP16 Edge Inference Service",
      body: "Real-time frame scoring on constrained camera hardware without cloud round-trips.",
      implLabel: "Implementation:",
      impl: "Dockerized FastAPI workers with FP16 runtime and per-zone frame batching.",
      outcomeLabel: "Measured Outcome:",
      outcome: "14ms median inference per frame",
    },
    {
      id: "SUBSYSTEM 04",
      icon: "tune",
      title: "Alert & Nutrient Loop",
      body: "Confidence drops and lesion flags trigger webhooks with annotated evidence attached.",
      implLabel: "Implementation:",
      impl: "Threshold engine with cooldowns plus delivery receipts to avoid alert fatigue.",
      outcomeLabel: "Measured Outcome:",
      outcome: "Staff response within one shift",
    },
  ],
};

export const solved: TeeoSolved = {
  kicker: "05 // Engineering deep dives",
  title: "How Hard Problems Were Decisively Solved",
  lede: "Glare, drift, and edge budgets — handled.",
  cases: [
    {
      challengeLabel: "Challenge 01",
      title: "Grow-Light Glare Blinded the Model",
      problem: "Purple LED glare washed out leaf texture and tanked daytime precision.",
      solutionLabel: "The Solution",
      solution:
        "Added glare-heavy frames to the training set with white-balance normalization and glare masking in the OpenCV chain before inference.",
      impactLabel: "System Impact:",
      impact: "Daytime precision recovered to 93%+",
    },
    {
      challengeLabel: "Challenge 02",
      title: "Tip-Burn Confused with Shadows",
      problem: "Early models flagged harmless shadows, eroding staff trust in alerts.",
      solutionLabel: "The Solution",
      solution:
        "Introduced a dedicated lesion head trained on close-up spots plus a two-frame confirmation rule before any webhook fires.",
      impactLabel: "System Impact:",
      impact: "False alerts cut by 71%",
    },
    {
      challengeLabel: "Challenge 03",
      title: "Edge Budget Allowed No Cloud",
      problem: "Greenhouse Wi-Fi made cloud inference too laggy and fragile for live use.",
      solutionLabel: "The Solution",
      solution:
        "Exported the model to FP16, batched frames per zone, and kept the full loop on the edge container with local buffering.",
      impactLabel: "System Impact:",
      impact: "14ms inference with zero cloud dependency",
    },
  ],
};

export const architecture: TeeoArchitecture = {
  kicker: "06 // System topology",
  title: "High-Fidelity Architecture Diagram",
  lede: "From canopy photons to staff webhooks without leaving the greenhouse.",
  tiers: [
    {
      tier: "TIER 1",
      title: "Zone Cameras",
      subtitle: "6 canopy feeds",
      body: "Fixed mounts over zones A-01 through B-03 with scheduled captures.",
      footer: "Multispectral stills",
    },
    {
      tier: "TIER 2 (CORE)",
      title: "Edge Inference",
      subtitle: "YOLOv8 FP16",
      body: "Per-zone batching, lesion heads, and confidence aggregation.",
      footer: "~14ms per frame",
      core: true,
    },
    {
      tier: "TIER 3",
      title: "FastAPI Backend",
      subtitle: "Container service",
      body: "Frame intake, inference orchestration, and snapshot storage.",
      footer: "Dockerized workers",
    },
    {
      tier: "TIER 4",
      title: "Telemetry Store",
      subtitle: "Scores & frames",
      body: "Confidence series plus annotated evidence for every alert.",
      footer: "Queryable history",
    },
    {
      tier: "TIER 5",
      title: "Staff Webhooks",
      subtitle: "Alerts & dashboards",
      body: "Threshold dispatch with snapshots and delivery receipts.",
      footer: "Response in-shift",
    },
  ],
  specs: [
    {
      title: "Training Framework",
      body: "PyTorch with class-balanced sampling, mAP@50 gating, and versioned dataset cards.",
    },
    {
      title: "Vision Chain",
      body: "OpenCV white-balance, glare masking, and biomass estimation ahead of detection.",
    },
    {
      title: "Serving Protocol",
      body: "FP16 edge runtime in Docker with health checks and local frame buffering.",
    },
  ],
};

export const stack: TeeoStack = {
  kicker: "07 // Technical ecosystem",
  title: "Technology Stack",
  lede: "Chosen for training velocity and edge frugality.",
  categories: [
    {
      icon: "terminal",
      title: "ML Training",
      tools: [
        { name: "YOLOv8", note: "Canopy + lesion heads" },
        { name: "PyTorch", note: "Training pipelines" },
        { name: "OpenCV", note: "Pre-processing chain" },
      ],
    },
    {
      icon: "sync",
      title: "Serving",
      tools: [
        { name: "FastAPI", note: "Inference API" },
        { name: "Docker", note: "Edge containers" },
        { name: "FP16 runtime", note: "14ms inference" },
      ],
    },
    {
      icon: "database",
      title: "Data & Storage",
      tools: [
        { name: "Python", note: "Pipelines & eval" },
        { name: "Pandas", note: "Score aggregation" },
        { name: "Snapshots", note: "Alert evidence" },
      ],
    },
    {
      icon: "cloud",
      title: "Infra & Delivery",
      tools: [
        { name: "Docker", note: "Immutable deploys" },
        { name: "Nginx", note: "Edge proxy" },
        { name: "Webhooks", note: "Staff dispatch" },
      ],
    },
    {
      icon: "stats",
      title: "Observability",
      tools: [
        { name: "Confidence panels", note: "Per-zone tracking" },
        { name: "Latency meters", note: "Frame budgets" },
        { name: "Alert receipts", note: "Delivery proof" },
      ],
    },
  ],
};

export const challenges: TeeoChallenges = {
  kicker: "08 // Extreme edge cases",
  title: "High-Consequence Technical Obstacles",
  lede: "Light, labels, and latency at the greenhouse edge.",
  items: [
    {
      id: "INVESTIGATION 01",
      title: "Annotation Drift Across Labelers",
      body: "Two labelers drew canopy bounds differently, silently poisoning validation splits. Introduced blind re-label audits and a golden reference set.",
      result: "Label agreement: 0.71 → 0.93 IoU",
    },
    {
      id: "INVESTIGATION 02",
      title: "Night vs Day Distribution Shift",
      body: "Night-cycle frames looked alien to a day-trained model. Added cycle-aware sampling so every batch spans both lighting regimes.",
      result: "Night recall: 61% → 89%",
    },
    {
      id: "INVESTIGATION 03",
      title: "Frame Backlogs During Watering",
      body: "Mist bursts blurred frames and queued stale captures. Added blur-gated capture so only sharp frames enter inference.",
      result: "Stale backlog eliminated",
    },
  ],
};

export const security: TeeoSecurity = {
  kicker: "09 // Hardened reliability",
  title: "Greenhouse-Grade Robustness Standards",
  lede: "The loop must survive mist, heat, and flaky Wi-Fi.",
  items: [
    {
      icon: "lock",
      title: "Local-First Operation",
      body: "Full inference loop runs on edge hardware; cloud outages never blind the greenhouse.",
    },
    {
      icon: "key",
      title: "Annotated Evidence",
      body: "Every alert ships its snapshot and scores, so staff verify before acting on plants.",
    },
    {
      icon: "encrypted",
      title: "Versioned Datasets",
      body: "Each model release pins its dataset card, so regressions trace to exact training data.",
    },
    {
      icon: "bug",
      title: "Drift Monitoring",
      body: "Confidence distributions tracked per zone; lighting changes trigger re-validation, not silent decay.",
    },
  ],
};

export const results: TeeoResults = {
  kicker: "10 // Verified production impact",
  title: "Quantitative Scale & Performance Results",
  lede: "Measured across one full growing cycle after deployment.",
  kpis: [
    {
      label: "Model precision",
      value: "94.2%",
      body: "mAP@50 on held-out canopy zones, stable day and night.",
    },
    {
      label: "Inference speed",
      value: "14ms",
      body: "Median FP16 frame time on constrained edge hardware.",
    },
    {
      label: "Annotated frames",
      value: "8.4k+",
      body: "Farm-owned dataset covering canopies, glare, and lesions.",
    },
    {
      label: "Scouting time",
      value: "-60%",
      body: "Daily manual rounds reduced to exception review.",
    },
  ],
  qualitative: [
    {
      icon: "verified",
      title: "Earlier Interventions",
      body: "Tip-burn flags arrive days before visible necrosis, saving whole zones.",
    },
    {
      icon: "terminal",
      title: "Recipe Learning",
      body: "Biomass trends finally connect nutrient changes to growth outcomes.",
    },
    {
      icon: "group",
      title: "Staff Confidence",
      body: "Snapshot-backed alerts turned skeptics into daily users within two weeks.",
    },
  ],
};

export const learned: TeeoLearned = {
  kicker: "11 // Engineering wisdom",
  title: "Critical Lessons & Practical Insights",
  lede: "What a greenhouse teaches about applied ML.",
  items: [
    {
      title: "Own Your Data Distribution",
      body: "Generic plant datasets failed under purple LEDs. Farm-collected, cycle-aware data beat every architecture tweak.",
    },
    {
      title: "Alerts Are a UX Problem",
      body: "Two-frame confirmation plus cooldowns mattered more than another point of mAP for staff trust.",
    },
    {
      title: "Edge Budgets Force Clarity",
      body: "14ms and no cloud forced a lean pipeline: normalize, detect, confirm, alert — nothing decorative.",
    },
  ],
};

export const roadmap: TeeoRoadmap = {
  kicker: "12 // The roadmap ahead",
  title: "Future Architecture Enhancements",
  lede: "From detection to closed-loop growing.",
  items: [
    {
      title: "ONNX INT8 runtimes",
      body: "Quantized exports for Raspberry Pi and Jetson class hardware at even lower wattage.",
    },
    {
      title: "Multispectral stress indices",
      body: "Beyond RGB: early stress signals from additional spectral bands before visible symptoms.",
    },
    {
      title: "Nutrient closed loop",
      body: "Connecting biomass deltas directly to dosing controllers with agronomist guardrails.",
    },
  ],
};

export const summary: TeeoSummary = {
  eyebrow: "Executive Summary for Engineering Leaders",
  title: "Clipboards to Canopy Intelligence, Solved.",
  body: "Lettuce Vision replaced daily eyeballing with edge YOLOv8 inference at 94.2% mAP@50 and 14ms per frame, cutting scouting time 60% across a full growing cycle.",
  tags: ["YOLOv8", "OpenCV", "PyTorch", "FastAPI", "Docker"],
  downloadLabel: "Download Case Study PDF",
  contactLabel: "Contact Lead Developer",
};

export const explore: TeeoExplore = {
  eyebrow: "14 // Project verification",
  title: "Inspect Source & Live Telemetry",
  lede: "Browse the notebook, read the benchmark, or jump back to the live console.",
  telemetryLabel: "Launch Telemetry Console",
  sourceLabel: "GitHub Mirror",
  rfcLabel: "Request Architecture Brief",
};

export const pager: TeeoPager = {
  prevLabel: "Previous Project",
  prevTitle: "Gestión de Archivos TEEO",
  prevSubtitle: "High-Compliance Archive",
  indexLabel: "View All Engineering Projects",
  nextLabel: "Next Project",
  nextTitle: "RAG Retrieval",
  nextSubtitle: "Semantic Engine",
};
