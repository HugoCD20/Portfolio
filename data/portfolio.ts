/**
 * Central typed mock data for the portfolio visual layer.
 *
 * Each section imports its slice from here so future CMS/API
 * integration only requires swapping these loaders, not the UI.
 */

export interface NavLink {
  label: string;
  href: string;
  key: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero", key: "home" },
  { label: "About", href: "#about", key: "about" },
  { label: "Technologies", href: "#technologies", key: "technologies" },
  { label: "Projects", href: "#projects", key: "projects" },
  { label: "Data & AI", href: "#data-ai", key: "data-ai" },
  { label: "Experience", href: "#experience", key: "experience" },
  { label: "Contact", href: "#contact", key: "contact" },
];

/* ---------------------------------- Hero --------------------------------- */

export const hero = {
  name: "Hugo David Nogueda Hernández",
  roleBadge: "Software Developer",
  tagline:
    "Full Stack Engineering · Applied Machine Learning · Distributed Infrastructure",
  pitch:
    "I engineer scalable web applications, robust APIs, data-driven pipelines, and intelligent systems. Focused on end-to-end craft from relational database indexing and container orchestration to micro-interactions in modern reactive interfaces.",
  statusTicker:
    "Building, learning and solving high-concurrency problems with technology.",
};

/* -------------------------------- Terminal ------------------------------- */

export interface TerminalSpec {
  label: string;
  value: string;
  tone: "primary" | "secondary" | "tertiary" | "plain";
}

export const terminalSpecs: TerminalSpec[] = [
  { label: "Host", value: "Hugo David · Systems & Full-Stack", tone: "plain" },
  { label: "OS", value: "Ubuntu LTS / Arch Hyprland", tone: "plain" },
  { label: "Core", value: "Laravel 10, Vue 3, React, Python", tone: "secondary" },
  { label: "Storage", value: "PostgreSQL, Redis, pgvector", tone: "plain" },
  { label: "R&D / ML", value: "YOLOv8, PyTorch, LangChain, Pandas", tone: "tertiary" },
  { label: "Deploy", value: "Docker Compose, Nginx, CI/CD", tone: "plain" },
  { label: "Uptime", value: "5+ years shipping continuous code", tone: "plain" },
  { label: "Status", value: "200 OK — Compiling scalable systems", tone: "secondary" },
];

/* --------------------------------- Social -------------------------------- */

export interface SocialChannel {
  label: string;
  href: string;
  short: string;
  kind: "github" | "linkedin" | "email";
}

export const socialChannels: SocialChannel[] = [
  { label: "GitHub", href: "https://github.com/HugoCD20", short: "github.com/HugoCD20", kind: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hugo-david-nogueda-hern%C3%A1ndez-0064a52b3/", short: "linkedin.com/in/hugodavid", kind: "linkedin" },
  { label: "Email", href: "mailto:cdhugo9@gmail.com", short: "cdhugo9@gmail.com", kind: "email" },
];

export const contactMeta = {
  email: "contact@hugodavid.dev",
  pgp: "84BA 9D01 32FC 8871 4A99 104D E932 77B0 4F92 B8AA",
  pgpShort: "PGP: 0x4F92B8",
  timezone: "Timezone: UTC-6 (Available Globally)",
  responseSla: "Typical Response Time: < 24 hours",
  location: "Open to Remote & Hybrid Engagements",
};

/* ------------------------------ Technologies ----------------------------- */

export type AccentTone = "primary" | "secondary" | "tertiary";

export interface TechGroup {
  title: string;
  icon: string;
  countLabel: string;
  coreTools: string[];
  secondaryTools: string[];
  footerLeft: string;
  footerRight: string;
  accent: AccentTone;
}

export const techGroups: TechGroup[] = [
  {
    title: "Frontend UI",
    icon: "monitor",
    countLabel: "7 tools",
    coreTools: ["Vue.js 3 (Core)", "React (Core)", "TypeScript (Core)"],
    secondaryTools: ["Next.js", "Tailwind CSS", "Pinia / Redux", "Vite & Webpack"],
    footerLeft: "Client State & Reactive Ergonomics",
    footerRight: "98% DX",
    accent: "primary",
  },
  {
    title: "Backend & APIs",
    icon: "server",
    countLabel: "6 tools",
    coreTools: ["Laravel 10 (Core)", "Python (Core)", "FastAPI"],
    secondaryTools: ["PHP 8.2+", "Node.js / Express", "REST & WebSockets"],
    footerLeft: "High-Throughput Clean Architecture",
    footerRight: "Sub-ms APIs",
    accent: "secondary",
  },
  {
    title: "Data & AI",
    icon: "brain",
    countLabel: "8 tools",
    coreTools: ["Python (Core)", "Pandas & NumPy", "YOLOv8 & OpenCV"],
    secondaryTools: ["Scikit-learn", "LangChain & RAG", "PyTorch", "Matplotlib & Seaborn"],
    footerLeft: "Inference, Vision & Semantic Pipelines",
    footerRight: "Active R&D",
    accent: "tertiary",
  },
  {
    title: "Data Stores",
    icon: "database",
    countLabel: "5 systems",
    coreTools: ["PostgreSQL (Core)", "Redis (Cache/PubSub)", "pgvector (AI Store)"],
    secondaryTools: ["MySQL / MariaDB", "Prisma ORM"],
    footerLeft: "ACID compliance & Index optimization",
    footerRight: "EXPLAIN ANALYZE",
    accent: "primary",
  },
  {
    title: "DevOps, Cloud & Infra",
    icon: "cloud",
    countLabel: "7 platforms",
    coreTools: ["Docker & Compose (Core)", "Linux / Bash (Core)", "GitHub Actions CI/CD"],
    secondaryTools: ["Nginx Reverse Proxy", "Cloudflare CDN & WAF", "SSL/TLS Hardening", "Systemd daemon services"],
    footerLeft: "Immutable container deployment pipelines & server telemetry",
    footerRight: "Zero-Downtime Releases",
    accent: "secondary",
  },
];

/* ---------------------------- Featured projects -------------------------- */

export type ProjectVisualKind = "archive" | "vision" | "rag" | "stream";

export interface ProjectCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface FeaturedProject {
  slug: string;
  badge: string;
  badgeTone: AccentTone;
  subtitle: string;
  title: string;
  description: string;
  bullets: string[];
  stack: string[];
  primaryCta: ProjectCta;
  secondaryCta: ProjectCta;
  visual: ProjectVisualKind;
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "teeo-archive",
    badge: "ENTERPRISE SYSTEM",
    badgeTone: "primary",
    subtitle: "High-Compliance Archive",
    title: "Gestión de Archivos TEEO",
    description:
      "Enterprise-grade Document Management & Archival System built for high-concurrency judicial workflows. Handles millions of legal records, digitized expediente metadata, granular role-based access control, cryptographic verification, and sub-second full-text index searches.",
    bullets: [
      "Integrated Keycloak SSO with enterprise multi-department authorization.",
      "Real-time audit log streaming with automated hash chaining.",
      "Containerized stack with automated database replica failovers.",
    ],
    stack: ["Laravel 10", "Vue.js 3", "PostgreSQL", "Docker Compose", "Redis Cache", "Keycloak SSO"],
    primaryCta: { label: "REQUEST ARCHITECTURE BRIEF", href: "#contact" },
    secondaryCta: { label: "GitHub Mirror", href: "https://github.com", external: true },
    visual: "archive",
  },
  {
    slug: "lettuce-vision",
    badge: "COMPUTER VISION / AI",
    badgeTone: "secondary",
    subtitle: "Agritech Intelligence",
    title: "Lettuce Vision: Smart Hydroponics",
    description:
      "Autonomous computer vision system engineered for precision indoor vertical farming. Utilizing YOLOv8 fine-tuned models and custom OpenCV image processing pipelines to monitor lettuce crop canopies, detect tip-burn diseases, estimate leaf surface biomass, and trigger automated nutrient balancing.",
    bullets: [
      "Trained custom dataset of 8,400+ annotated multispectral crop images.",
      "Real-time video edge inference via FastAPI backend container.",
      "Integrated alerts dispatching Webhook telemetry to cultivation staff.",
    ],
    stack: ["Python", "YOLOv8", "OpenCV", "PyTorch", "FastAPI", "Docker"],
    primaryCta: { label: "EXPLORE NOTEBOOK / CODE", href: "https://github.com", external: true },
    secondaryCta: { label: "View Benchmark", href: "#data-ai" },
    visual: "vision",
  },
  {
    slug: "rag-retrieval",
    badge: "APPLIED LLM & RAG",
    badgeTone: "tertiary",
    subtitle: "Semantic Engine",
    title: "Intelligent Document Retrieval (RAG)",
    description:
      "High-speed contextual ingestion and question-answering system over heterogeneous multi-page financial, legal, and operational documents. Features intelligent chunking, semantic vector embeddings in pgvector, and deterministic citation synthesis.",
    bullets: [
      "pgvector similarity search returning top-k nearest chunks in <18ms.",
      "Custom token compression reducing LLM inference costs by 48%.",
      "Strict hallucination guardrails with explicit exact-page citations.",
    ],
    stack: ["Python", "FastAPI", "pgvector", "LangChain", "OpenAI / Local LLMs"],
    primaryCta: { label: "VIEW REPOSITORY", href: "https://github.com", external: true },
    secondaryCta: { label: "Live Architecture", href: "#contact" },
    visual: "rag",
  },
  {
    slug: "telecom-pipeline",
    badge: "DATA PIPELINES",
    badgeTone: "secondary",
    subtitle: "Telemetry & Anomaly Detection",
    title: "Telecom & Network Metric Pipeline",
    description:
      "Automated high-throughput data engineering ingestion pipeline parsing distributed edge node syslogs. Employs Scikit-learn isolation forests for unsupervised packet drop and latency spike anomaly detection, backed by PostgreSQL partitioned timeseries tables.",
    bullets: [
      "Processed 1.2M raw metric event logs daily with Pandas/Polars scripts.",
      "Automated alerting for BGP route flap anomalies under 500ms.",
      "Dynamic Vue & Streamlit visualization dashboard with live filtering.",
    ],
    stack: ["PostgreSQL", "Pandas", "Scikit-learn", "Redis", "Vue.js", "FastAPI"],
    primaryCta: { label: "VIEW SOURCE", href: "https://github.com", external: true },
    secondaryCta: { label: "Telemetry Demo", href: "#contact" },
    visual: "stream",
  },
];

/* ----------------------------- Other projects ---------------------------- */

export type OtherProjectCategory = "backend" | "devops" | "data-ai";

export interface OtherProject {
  title: string;
  description: string;
  stack: string[];
  stars: number;
  icon: string;
  tone: AccentTone;
  category: OtherProjectCategory;
  href: string;
}

export const otherProjectFilters: { label: string; value: "all" | OtherProjectCategory }[] = [
  { label: "ALL", value: "all" },
  { label: "BACKEND", value: "backend" },
  { label: "DEVOPS", value: "devops" },
  { label: "DATA & AI", value: "data-ai" },
];

export const otherProjects: OtherProject[] = [
  {
    title: "API Rate Limiter & Edge Proxy",
    description:
      "Lightweight token-bucket rate limiter engineered in Go with Nginx and Redis cluster backing. Mitigates distributed DDoS bursts.",
    stack: ["Go", "Redis", "Nginx"],
    stars: 48,
    icon: "gauge",
    tone: "primary",
    category: "backend",
    href: "https://github.com",
  },
  {
    title: "Automated GitOps Engine",
    description:
      "Zero-downtime deployment runner executing multi-container Docker compose rollbacks upon failed health-probe hooks.",
    stack: ["Bash", "Docker", "CI/CD"],
    stars: 34,
    icon: "terminal",
    tone: "secondary",
    category: "devops",
    href: "https://github.com",
  },
  {
    title: "E-Commerce Micro-services",
    description:
      "Decoupled ordering, inventory, and payment micro-services communicating via RabbitMQ message broker with Laravel & Vue.",
    stack: ["Laravel", "RabbitMQ", "Postgres"],
    stars: 61,
    icon: "share",
    tone: "tertiary",
    category: "backend",
    href: "https://github.com",
  },
  {
    title: "Synthetic Data Generator",
    description:
      "NumPy and Faker based high-volume tabular dataset synthesizer for stress-testing ML training pipelines and database indices.",
    stack: ["Python", "NumPy", "Pandas"],
    stars: 29,
    icon: "database",
    tone: "primary",
    category: "data-ai",
    href: "https://github.com",
  },
];

/* -------------------------------- Data & AI ------------------------------ */

export interface PipelineStep {
  index: string;
  title: string;
  detail: string;
  icon: string;
  tone: AccentTone;
}

export const pipelineSteps: PipelineStep[] = [
  { index: "01 / RAW DATA", title: "Raw Data", detail: "APIs, SQL & Syslogs", icon: "inbox", tone: "primary" },
  { index: "02 / CLEANING", title: "Cleaning", detail: "Pandas & Imputation", icon: "sparkles", tone: "primary" },
  { index: "03 / EDA", title: "EDA", detail: "Statistical Profiling", icon: "search", tone: "secondary" },
  { index: "04 / VISUALIZE", title: "Visualize", detail: "Matplotlib & Dash", icon: "lightbulb", tone: "secondary" },
  { index: "05 / ML & YOLO", title: "ML & YOLO", detail: "PyTorch & Inference", icon: "cpu", tone: "tertiary" },
  { index: "06 / INSIGHTS", title: "Insights", detail: "Automated Decisions", icon: "rocket", tone: "tertiary" },
];

export interface Benchmark {
  kicker: string;
  value: string;
  description: string;
  icon: string;
  tone: AccentTone;
}

export const benchmarks: Benchmark[] = [
  {
    kicker: "COMPUTER VISION BENCHMARK",
    value: "94.2%",
    description:
      "Lettuce Vision Model Precision (mAP@50) deployed on constrained edge camera hardware.",
    icon: "brain",
    tone: "secondary",
  },
  {
    kicker: "VECTOR RETRIEVAL SPEED",
    value: "< 18ms",
    description:
      "HNSW indexed pgvector similarity retrieval across 250,000+ legal text chunk embeddings.",
    icon: "zap",
    tone: "primary",
  },
  {
    kicker: "DATA PIPELINE VOLUME",
    value: "1.2M+",
    description:
      "Structured records transformed daily through vectorized pandas routines with zero memory leaks.",
    icon: "database",
    tone: "tertiary",
  },
];

/* --------------------------------- Learning ------------------------------ */

export interface LearningGoal {
  tag: string;
  title: string;
  description: string;
  progress: number;
  icon: string;
  tone: AccentTone;
}

export const learningGoals: LearningGoal[] = [
  {
    tag: "SQL INTERNALS",
    title: "Advanced SQL & Query Optimization",
    description:
      "Deep diving into query plan cost estimators, partial indexing strategies, window functions, and pgvector HNSW tuning for high scale.",
    progress: 85,
    icon: "database",
    tone: "primary",
  },
  {
    tag: "DEEP LEARNING",
    title: "Edge Vision & ONNX Runtimes",
    description:
      "Quantization (INT8), ONNX model graph export, and deploying low-latency computer vision models on embedded Raspberry Pi and Jetson chips.",
    progress: 70,
    icon: "eye",
    tone: "secondary",
  },
  {
    tag: "ANALYTICS",
    title: "Power BI & Enterprise BI",
    description:
      "Crafting DAX expressions, semantic Star Schemas, and executive dashboards bridging raw PostgreSQL datamarts with stakeholder reporting.",
    progress: 60,
    icon: "chart",
    tone: "tertiary",
  },
  {
    tag: "CLOUD NATIVE",
    title: "Kubernetes & Terraform",
    description:
      "Declarative Infrastructure as Code (IaC), managing pod autoscaling policies, Helm charts, and resilient cluster networking.",
    progress: 50,
    icon: "container",
    tone: "primary",
  },
];

/* ----------------------------------- CV ---------------------------------- */

export interface CvAsset {
  lang: "en" | "es";
  label: string;
  fileLabel: string;
  /** Public URL served from /public/cv (drop the real PDFs there). */
  href: string;
  /** Suggested filename when the browser saves the file. */
  downloadName: string;
}

export const cvAssets: CvAsset[] = [
  {
    lang: "en",
    label: "English CV",
    fileLabel: "PDF · A4",
    href: "/cv/hugo-david-cv-en.pdf",
    downloadName: "HugoDavid-CV-EN.pdf",
  },
  {
    lang: "es",
    label: "CV en español",
    fileLabel: "PDF · A4",
    href: "/cv/hugo-david-cv-es.pdf",
    downloadName: "HugoDavid-CV-ES.pdf",
  },
];

/* -------------------------------- Experience ----------------------------- */

export interface Role {
  title: string;
  period: string;
  org: string;
  description: string;
  stack: string[];
}

export const roles: Role[] = [
  {
    title: "Lead Full-Stack Developer",
    period: "2022 — PRESENT",
    org: "Institutional & Enterprise Systems",
    description:
      "Architected high-concurrency document archival platforms serving thousands of daily judicial queries. Decreased database query latency by 45% via index restructuring and caching strategies. Implemented Keycloak single-sign-on (SSO) and continuous deployment pipelines using Docker and GitHub Actions.",
    stack: ["Laravel 10", "Vue 3", "PostgreSQL", "Docker"],
  },
  {
    title: "Software Developer & Data Engineer",
    period: "2020 — 2022",
    org: "Cloud Solutions & Telemetry",
    description:
      "Designed REST APIs, background task queues, and data extraction pipelines. Formatted messy unstructured data into standardized relational tables for analytical reporting. Collaborated with cross-functional teams to integrate responsive frontend dashboards with backend microservices.",
    stack: ["Python", "FastAPI", "React", "MySQL", "Linux"],
  },
];

export interface Credential {
  kicker: string;
  status: string;
  title: string;
  description: string;
  tone: AccentTone;
}

export const credentials: Credential[] = [
  {
    kicker: "DEGREE",
    status: "Graduated with Honors",
    title: "B.S. in Computer Science & Software Engineering",
    description:
      "Core coursework in Data Structures, Relational Database Theory, Distributed Systems, Compiler Design, and Mathematical Statistics.",
    tone: "tertiary",
  },
  {
    kicker: "SPECIALIZATION",
    status: "Verified",
    title: "Applied Machine Learning & Computer Vision",
    description:
      "Deep convolutional networks, object detection (YOLO), PyTorch model training pipelines, and data augmentation workflows.",
    tone: "secondary",
  },
  {
    kicker: "CERTIFICATION",
    status: "Advanced",
    title: "PostgreSQL High Performance & Administration",
    description:
      "Partitioning schemes, connection pool tuning with PgBouncer, replication topology, and write-ahead log (WAL) durability.",
    tone: "primary",
  },
];
