/**
 * Spanish (es) locale mirror of data/portfolio.ts.
 *
 * Must export the exact same names/shapes as the English module.
 * The LanguageProvider enforces this with `Record<Lang, Content>`,
 * so a missing or mistyped export fails the build on purpose.
 * Shared types are imported (not redefined) to guarantee shape parity.
 */

import type {
  Benchmark,
  Credential,
  CvAsset,
  FeaturedProject,
  LearningGoal,
  NavLink,
  OtherProject,
  OtherProjectCategory,
  Pillar,
  PipelineStep,
  Role,
  SectionHeadingContent,
  SocialChannel,
  TechGroup,
  TerminalSpec,
} from "./portfolio";

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#hero", key: "home" },
  { label: "Sobre mí", href: "#about", key: "about" },
  { label: "Tecnologías", href: "#technologies", key: "technologies" },
  { label: "Proyectos", href: "#projects", key: "projects" },
  { label: "Datos e IA", href: "#data-ai", key: "data-ai" },
  { label: "Experiencia", href: "#experience", key: "experience" },
  { label: "Contacto", href: "#contact", key: "contact" },
];

export const hero = {
  name: "Hugo David",
  roleBadge: "Desarrollador de Software",
  tagline:
    "Ingeniería Full Stack · Machine Learning Aplicado · Infraestructura Distribuida",
  pitch:
    "Diseño aplicaciones web escalables, APIs robustas, pipelines basados en datos y sistemas inteligentes. Enfocado en el oficio de extremo a extremo: desde la indexación de bases de datos relacionales y la orquestación de contenedores hasta las micro-interacciones en interfaces reactivas modernas.",
  statusTicker:
    "Construyendo, aprendiendo y resolviendo problemas de alta concurrencia con tecnología.",
};

export const terminalSpecs: TerminalSpec[] = [
  { label: "Host", value: "Hugo David · Sistemas y Full-Stack", tone: "plain" },
  { label: "OS", value: "Ubuntu LTS / Arch Hyprland", tone: "plain" },
  { label: "Core", value: "Laravel 10, Vue 3, React, Python", tone: "secondary" },
  { label: "Storage", value: "PostgreSQL, Redis, pgvector", tone: "plain" },
  { label: "R&D / ML", value: "YOLOv8, PyTorch, LangChain, Pandas", tone: "tertiary" },
  { label: "Deploy", value: "Docker Compose, Nginx, CI/CD", tone: "plain" },
  { label: "Uptime", value: "5+ años desarrollando código continuo", tone: "plain" },
  { label: "Status", value: "200 OK — Compilando sistemas escalables", tone: "secondary" },
];

export const socialChannels: SocialChannel[] = [
  { label: "GitHub", href: "https://github.com", short: "github.com/hugodavid", kind: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", short: "linkedin.com/in/hugodavid", kind: "linkedin" },
  { label: "Correo", href: "mailto:contact@hugodavid.dev", short: "contact@hugodavid.dev", kind: "email" },
];

export const contactMeta = {
  email: "contact@hugodavid.dev",
  pgp: "84BA 9D01 32FC 8871 4A99 104D E932 77B0 4F92 B8AA",
  pgpShort: "PGP: 0x4F92B8",
  timezone: "Zona horaria: UTC-6 (Disponible globalmente)",
  responseSla: "Tiempo de respuesta típico: < 24 horas",
  location: "Abierto a colaboraciones remotas e híbridas",
};

export const techGroups: TechGroup[] = [
  {
    title: "UI Frontend",
    icon: "monitor",
    countLabel: "7 herramientas",
    coreTools: ["Vue.js 3 (Core)", "React (Core)", "TypeScript (Core)"],
    secondaryTools: ["Next.js", "Tailwind CSS", "Pinia / Redux", "Vite & Webpack"],
    footerLeft: "Estado del cliente y ergonomía reactiva",
    footerRight: "98% DX",
    accent: "primary",
  },
  {
    title: "Backend y APIs",
    icon: "server",
    countLabel: "6 herramientas",
    coreTools: ["Laravel 10 (Core)", "Python (Core)", "FastAPI"],
    secondaryTools: ["PHP 8.2+", "Node.js / Express", "REST & WebSockets"],
    footerLeft: "Arquitectura limpia de alto rendimiento",
    footerRight: "APIs sub-milisegundo",
    accent: "secondary",
  },
  {
    title: "Datos e IA",
    icon: "brain",
    countLabel: "8 herramientas",
    coreTools: ["Python (Core)", "Pandas & NumPy", "YOLOv8 & OpenCV"],
    secondaryTools: ["Scikit-learn", "LangChain & RAG", "PyTorch", "Matplotlib & Seaborn"],
    footerLeft: "Pipelines de inferencia, visión y semántica",
    footerRight: "I+D activa",
    accent: "tertiary",
  },
  {
    title: "Almacenes de datos",
    icon: "database",
    countLabel: "5 sistemas",
    coreTools: ["PostgreSQL (Core)", "Redis (Cache/PubSub)", "pgvector (AI Store)"],
    secondaryTools: ["MySQL / MariaDB", "Prisma ORM"],
    footerLeft: "Cumplimiento ACID y optimización de índices",
    footerRight: "EXPLAIN ANALYZE",
    accent: "primary",
  },
  {
    title: "DevOps, Nube e Infra",
    icon: "cloud",
    countLabel: "7 plataformas",
    coreTools: ["Docker & Compose (Core)", "Linux / Bash (Core)", "GitHub Actions CI/CD"],
    secondaryTools: ["Nginx Reverse Proxy", "Cloudflare CDN & WAF", "Endurecimiento SSL/TLS", "Servicios daemon Systemd"],
    footerLeft: "Pipelines inmutables de despliegue y telemetría de servidores",
    footerRight: "Despliegues sin downtime",
    accent: "secondary",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "teeo-archive",
    badge: "SISTEMA EMPRESARIAL",
    badgeTone: "primary",
    subtitle: "Archivo de alto cumplimiento",
    title: "Gestión de Archivos TEEO",
    description:
      "Sistema de gestión y seguimiento de juicios electorales. Maneja miles de registros legales, con protección de datos sensibles, control de acceso por roles, y firmas electrónicas.",
    bullets: [
      "Sistema de autentificación mediante keycloak.",
      "Análisis de datos y gráficas.",
      "Stack contenerizado con conmutación automática de réplicas de BD.",
    ],
    stack: ["Laravel 12", "Vue.js 3", "PostgreSQL", "Docker Compose", "Keycloak"],
    primaryCta: { label: "SOLICITAR RESUMEN DE ARQUITECTURA", href: "#contact" },
    secondaryCta: { label: "Ver más", href: "/#projects", external: true },
    visual: "archive",
  },
  {
    slug: "lettuce-vision",
    badge: "VISIÓN POR COMPUTADORA / IA",
    badgeTone: "secondary",
    subtitle: "Inteligencia agrotech",
    title: "Lettuce Vision: Hidroponía Inteligente",
    description:
      "Sistema autónomo de visión por computadora diseñado para agricultura vertical interior de precisión. Utiliza modelos YOLOv8 ajustados y pipelines personalizados de procesamiento de imágenes con OpenCV para monitorear doseles de lechuga, detectar quemadura foliar, estimar biomasa y activar el balanceo automático de nutrientes.",
    bullets: [
      "Dataset propio de 8,400+ imágenes multiespectrales anotadas.",
      "Inferencia de video en edge en tiempo real con backend FastAPI.",
      "Alertas integradas con telemetría Webhook al personal de cultivo.",
    ],
    stack: ["Python", "YOLOv8", "OpenCV", "PyTorch", "FastAPI", "Docker"],
    primaryCta: { label: "EXPLORAR NOTEBOOK / CÓDIGO", href: "https://github.com", external: true },
    secondaryCta: { label: "Ver benchmark", href: "#data-ai" },
    visual: "vision",
  },
  {
    slug: "rag-retrieval",
    badge: "LLM APLICADO Y RAG",
    badgeTone: "tertiary",
    subtitle: "Motor semántico",
    title: "Recuperación Documental Inteligente (RAG)",
    description:
      "Sistema de ingesta contextual y preguntas-respuestas de alta velocidad sobre documentos heterogéneos financieros, legales y operativos. Incluye fragmentación inteligente, embeddings semánticos en pgvector y síntesis determinista de citas.",
    bullets: [
      "Búsqueda por similitud en pgvector con top-k en <18ms.",
      "Compresión propia de tokens que reduce costos de inferencia 48%.",
      "Barandillas estrictas anti-alucinación con citas de página exacta.",
    ],
    stack: ["Python", "FastAPI", "pgvector", "LangChain", "OpenAI / LLMs locales"],
    primaryCta: { label: "VER REPOSITORIO", href: "https://github.com", external: true },
    secondaryCta: { label: "Arquitectura en vivo", href: "#contact" },
    visual: "rag",
  },
  {
    slug: "telecom-pipeline",
    badge: "PIPELINES DE DATOS",
    badgeTone: "secondary",
    subtitle: "Telemetría y detección de anomalías",
    title: "Pipeline de Métricas de Red y Telecom",
    description:
      "Pipeline automatizado de ingesta de datos de alto rendimiento que procesa syslogs de nodos edge distribuidos. Emplea isolation forests de Scikit-learn para detección no supervisada de pérdida de paquetes y picos de latencia, sobre tablas de series temporales particionadas en PostgreSQL.",
    bullets: [
      "1.2M de eventos de métricas procesados a diario con Pandas/Polars.",
      "Alertas automáticas de anomalías BGP en menos de 500ms.",
      "Dashboard dinámico en Vue y Streamlit con filtrado en vivo.",
    ],
    stack: ["PostgreSQL", "Pandas", "Scikit-learn", "Redis", "Vue.js", "FastAPI"],
    primaryCta: { label: "VER CÓDIGO", href: "https://github.com", external: true },
    secondaryCta: { label: "Demo de telemetría", href: "#contact" },
    visual: "stream",
  },
];

export const otherProjectFilters: { label: string; value: "all" | OtherProjectCategory }[] = [
  { label: "TODOS", value: "all" },
  { label: "BACKEND", value: "backend" },
  { label: "DEVOPS", value: "devops" },
  { label: "DATOS E IA", value: "data-ai" },
];

export const otherProjects: OtherProject[] = [
  {
    title: "Limitador de API y Proxy Edge",
    description:
      "Limitador de tasa por token bucket en Go con Nginx y clúster Redis. Mitiga ráfagas distribuidas de DDoS.",
    stack: ["Go", "Redis", "Nginx"],
    stars: 48,
    icon: "gauge",
    tone: "primary",
    category: "backend",
    href: "https://github.com",
  },
  {
    title: "Motor GitOps Automatizado",
    description:
      "Ejecutor de despliegues sin downtime con reversiones de contenedores Docker ante fallos de health-checks.",
    stack: ["Bash", "Docker", "CI/CD"],
    stars: 34,
    icon: "terminal",
    tone: "secondary",
    category: "devops",
    href: "https://github.com",
  },
  {
    title: "Microservicios E-Commerce",
    description:
      "Microservicios desacoplados de pedidos, inventario y pagos comunicados vía RabbitMQ con Laravel y Vue.",
    stack: ["Laravel", "RabbitMQ", "Postgres"],
    stars: 61,
    icon: "share",
    tone: "tertiary",
    category: "backend",
    href: "https://github.com",
  },
  {
    title: "Generador de Datos Sintéticos",
    description:
      "Sintetizador tabular de alto volumen con NumPy y Faker para pruebas de estrés de pipelines ML e índices de BD.",
    stack: ["Python", "NumPy", "Pandas"],
    stars: 29,
    icon: "database",
    tone: "primary",
    category: "data-ai",
    href: "https://github.com",
  },
];

export const pipelineSteps: PipelineStep[] = [
  { index: "01 / DATOS CRUDOS", title: "Datos crudos", detail: "APIs, SQL y syslogs", icon: "inbox", tone: "primary" },
  { index: "02 / LIMPIEZA", title: "Limpieza", detail: "Pandas e imputación", icon: "sparkles", tone: "primary" },
  { index: "03 / EDA", title: "EDA", detail: "Perfilado estadístico", icon: "search", tone: "secondary" },
  { index: "04 / VISUALIZACIÓN", title: "Visualización", detail: "Matplotlib y Dash", icon: "lightbulb", tone: "secondary" },
  { index: "05 / ML Y YOLO", title: "ML y YOLO", detail: "PyTorch e inferencia", icon: "cpu", tone: "tertiary" },
  { index: "06 / HALLAZGOS", title: "Hallazgos", detail: "Decisiones automatizadas", icon: "rocket", tone: "tertiary" },
];

export const benchmarks: Benchmark[] = [
  {
    kicker: "REFERENCIA DE VISIÓN POR COMPUTADORA",
    value: "94.2%",
    description:
      "Precisión del modelo Lettuce Vision (mAP@50) desplegado en cámaras edge con hardware limitado.",
    icon: "brain",
    tone: "secondary",
  },
  {
    kicker: "VELOCIDAD DE BÚSQUEDA VECTORIAL",
    value: "< 18ms",
    description:
      "Recuperación por similitud con índice HNSW en pgvector sobre 250,000+ fragmentos legales.",
    icon: "zap",
    tone: "primary",
  },
  {
    kicker: "VOLUMEN DEL PIPELINE",
    value: "1.2M+",
    description:
      "Registros estructurados transformados a diario con rutinas pandas vectorizadas y cero fugas de memoria.",
    icon: "database",
    tone: "tertiary",
  },
];

export const learningGoals: LearningGoal[] = [
  {
    tag: "INTERNOS DE SQL",
    title: "SQL avanzado y optimización de consultas",
    description:
      "Profundizando en estimadores de costo, indexación parcial, window functions y ajuste HNSW de pgvector a gran escala.",
    progress: 85,
    icon: "database",
    tone: "primary",
  },
  {
    tag: "DEEP LEARNING",
    title: "Visión en edge y runtimes ONNX",
    description:
      "Cuantización (INT8), exportación de grafos ONNX y despliegue de modelos de visión de baja latencia en Raspberry Pi y Jetson.",
    progress: 70,
    icon: "eye",
    tone: "secondary",
  },
  {
    tag: "ANALÍTICA",
    title: "Power BI y BI empresarial",
    description:
      "Expresiones DAX, esquemas estrella semánticos y dashboards ejecutivos entre datamarts PostgreSQL y reportes.",
    progress: 60,
    icon: "chart",
    tone: "tertiary",
  },
  {
    tag: "CLOUD NATIVO",
    title: "Kubernetes y Terraform",
    description:
      "Infraestructura declarativa como código (IaC), autoescalado de pods, charts Helm y redes resilientes.",
    progress: 50,
    icon: "container",
    tone: "primary",
  },
];

export const cvAssets: CvAsset[] = [
  {
    lang: "en",
    label: "CV en inglés",
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

export const ui = {
  availableBadge: "Disponible para proyectos",
  downloadCv: "Descargar CV",
  openTerminalPanel: "Abrir panel de terminal",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  primaryNav: "Principal",
  mobileNav: "Móvil",
  networkChannels: "Canales de red:",
  statusLabel: "Estado:",
  availabilityPill: "DISPONIBLE PARA PROYECTOS",
  roleSummary: "Full Stack · Datos e IA · DevOps",
  exploreProjects: "EXPLORAR PROYECTOS DESTACADOS",
  downloadResume: "DESCARGAR CV",
  coreStackBadge: "Stack principal de producción",
  secondaryToolingBadge: "Secundario y herramientas",
  viewSource: "Ver código",
  pipelineTitle: "ARQUITECTURA DEL PIPELINE DE EXTREMO A EXTREMO",
  pipelineSubtitle: "Datos crudos ➔ Inteligencia accionable",
  progressLabel: "Progreso",
  engineeringTrack: "Trayectoria en ingeniería",
  educationCreds: "Educación y credenciales",
};

export const headings: Record<string, SectionHeadingContent> = {
  about: {
    index: "01",
    eyebrow: "Sobre mí",
    title: "Filosofía de ingeniería y trayectoria",
    description:
      "Construyendo infraestructura digital duradera uniendo la ergonomía del software con la arquitectura profunda de sistemas.",
  },
  technologies: {
    index: "02",
    eyebrow: "Stack técnico",
    title: "Ecosistema y herramientas principales",
  },
  projects: {
    index: "03",
    eyebrow: "Repositorio destacado",
    title: "Proyectos destacados en producción",
    description:
      "Análisis arquitectónicos de software empresarial, visión por computadora con deep learning y recuperación documental con IA.",
  },
  labs: {
    index: "04",
    eyebrow: "Laboratorios auxiliares",
    title: "Open Source y herramientas de sistemas",
  },
  dataAi: {
    index: "05",
    eyebrow: "Frontera en expansión",
    title: "Datos, analítica y Machine Learning",
    description:
      "Uniendo la ingeniería de software estándar con la ciencia de datos empírica. Convirtiendo medios no estructurados y flujos de logs en pipelines de inferencia automatizados.",
  },
  learning: {
    index: "06",
    eyebrow: "Hoja de ruta activa",
    title: "Lo que estoy mejorando actualmente",
    description:
      "Metas estructuradas de aprendizaje continuo en ejecución sobre internos de bases de datos, deep learning e infraestructura cloud.",
  },
  experience: {
    index: "07",
    eyebrow: "Trayectoria profesional",
    title: "Experiencia y formación académica",
    description:
      "Historial probado entregando software en producción con una base rigurosa en teoría computacional.",
  },
  contact: {
    index: "08",
    eyebrow: "Contacto",
    title: "Construyamos algo resiliente juntos.",
    description:
      "Ya sea que necesites un ingeniero full-stack para una plataforma de alta concurrencia, un pipeline de visión por computadora o consultoría de arquitectura de datos.",
  },
};

export const aboutContent = {
  paragraph1:
    "Soy un desarrollador de software que prospera en la intersección entre la ingeniería de producto y la infraestructura. En lugar de limitarme a una sola capa, disfruto comprender el ciclo completo: desde la indexación de bases de datos y la orquestación de contenedores hasta las micro-interacciones en Vue y React.",
  paragraph2:
    "Mi camino se expande hacia el análisis de datos, el machine learning y la visión por computadora, aplicando ingeniería rigurosa para extraer inteligencia accionable de datasets desordenados. Al desplegar una funcionalidad, me importan por igual la optimización de consultas, la seguridad de tipos, el DX y la carga cognitiva del usuario final.",
  tenetTitle: "Principio central: pragmatismo en producción",
  tenetBody:
    "La tecnología existe para resolver problemas humanos y operativos reales. Elijo herramientas por su predictibilidad, telemetría comprobada y mantenibilidad, no por modas pasajeras.",
  pillars: [
    {
      index: "01 // PILAR",
      title: "Sistemas de extremo a extremo",
      description:
        "Dominio integral desde el modelado de esquemas y protocolos API hasta pipelines CI/CD e hidratación de estado en cliente.",
    },
    {
      index: "02 // PILAR",
      title: "Oficio pragmático",
      description:
        "Código defensivo, abstracción modular limpia, registro exhaustivo de casos borde y baja deuda técnica.",
    },
    {
      index: "03 // PILAR",
      title: "I+D activa",
      description:
        "Experimentación empírica continua con embeddings vectoriales, detección neuronal de objetos y arquitecturas de ingesta.",
    },
  ] as Pillar[],
};

export const resumeContent = {
  kicker: "CURRICULUM VITAE & PORTFOLIO DOSSIER",
  title: "¿Quieres examinar mi trayectoria técnica completa?",
  description:
    "Mi CV detallado incluye análisis arquitectónicos de sistemas documentales judiciales, estadísticas de benchmark de modelos IA hidropónicos, lista exhaustiva de librerías open-source y referencias laborales verificadas.",
  formatLabel: "Formato: PDF (A4)",
  langsLabel: "English y Español",
  atsLabel: "Compatible con ATS",
};

export const contactContent = {
  directTitle: "Coordenadas directas",
  encryptedTitle: "Comunicaciones cifradas",
  fingerprintLabel: "Huella:",
  copyLabel: "Copiar",
  copiedLabel: "¡Copiado!",
  nameLabel: "Tu nombre / Organización *",
  namePlaceholder: "p. ej. Alex Rivera",
  emailLabel: "Tu correo electrónico *",
  emailPlaceholder: "alex@empresa.com",
  topicLabel: "Tema / Área de colaboración",
  topics: [
    "Desarrollo de aplicaciones Full-Stack",
    "Ingeniería de datos y visión por computadora (IA)",
    "DevOps, Docker e infraestructura cloud",
    "Consultoría de arquitectura de sistemas",
    "Consultas generales / Saludar",
  ],
  topicValues: ["fullstack", "data-ai", "devops", "consultation", "other"],
  messageLabel: "Alcance del proyecto / Reto técnico *",
  messagePlaceholder: "Cuéntame sobre tu stack, tiempos y retos arquitectónicos...",
  sslNote: "Protegido con SSL y tokens anti-spam",
  sendIdle: "ENVIAR MENSAJE",
  sending: "TRANSMITIENDO...",
  sent: "MENSAJE TRANSMITIDO (200 OK)",
};

export const footerContent = {
  roleSuffix: "· Desarrollador de Software",
  quote: "«Diseñado y construido con curiosidad.»",
  backToTop: "Volver arriba",
  copyright: "© 2024 Hugo David. Todos los derechos reservados. Substrate v2.4",
  links: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Correo", href: "mailto:contact@hugodavid.dev" },
    { label: "RSS / Estado", href: "#" },
  ],
};

export const projectVisuals = {
  archive: {
    title: "EXPEDIENTE // TEEO-2024",
    sealed: "SELLADO",
    files: [
      { name: "JDC-05-2026", state: "creado" },
      { name: "JDCI-11-2026", state: "Turnado" },
      { name: "CA-07-2026", state: "Reencausado" },
      { name: "JNI-02-2026", state: "creado" },
    ],
    hashLabel: "Cadena SHA-256:",
    hashValue: "9f2c…a41b ✓ verificado · réplica 0.2s",
    metricTitle: "MÉTRICA DEL SISTEMA",
    metricBody: "Latencia auditoría: 42ms | Pool BD: 64 activas",
  },
  vision: {
    cells: [
      { label: "DOSEL A-01", detail: "0.96" },
      { label: "DOSEL A-02", detail: "0.93" },
      { label: "DOSEL A-03", detail: "0.71 · ¿quemadura?" },
      { label: "DOSEL B-01", detail: "0.97" },
      { label: "DOSEL B-02", detail: "0.95" },
      { label: "DOSEL B-03", detail: "0.88" },
    ],
    metricTitle: "INFERENCIA DEL MODELO",
    metricBody: "mAP@50: 94.2% | Inferencia: 14ms (FP16)",
  },
  rag: {
    title: "CONSULTA DE EMBEDDINGS VECTORIALES",
    algo: "COSINE_SIMILARITY",
    queryLabel: "CONSULTA:",
    query: "«Buscar la cláusula 4.2 de penalizaciones en contratos de infraestructura 2023»",
    results: [
      { doc: "1. Doc #8412_Anexo_A.pdf (p.14)", score: "0.962 coincidencia" },
      { doc: "2. Contrato_MSA_Firmado.pdf (p.8)", score: "0.914 coincidencia" },
      { doc: "3. Telecom_SLA_Q3.pdf (p.21)", score: "0.887 coincidencia" },
    ],
    answerLabel: "RESPUESTA SINTETIZADA:",
    answer:
      "Según la Cláusula 4.2, las penalizaciones aplican con uptime <99.9%, con 5% de reembolso al neto mensual.",
  },
  stream: {
    title: "FLUJO DE INGESTA DE TELEMETRÍA",
    live: "PARSER EN VIVO",
    stats: [
      { k: "Rendimiento", v: "1.2M/s" },
      { k: "Anomalías", v: "0.02%" },
      { k: "Latencia de caída", v: "<3ms" },
    ],
    buffer: "Búfer: Anillo Redis 512MB",
    status: "Estado: Sincronizado",
  },
};

export const roles: Role[] = [
  {
    title: "Desarrollador Full-Stack Líder",
    period: "2022 — PRESENTE",
    org: "Sistemas institucionales y empresariales",
    description:
      "Diseñé plataformas de archivo documental de alta concurrencia con miles de consultas judiciales diarias. Reduje la latencia de consultas 45% con reestructuración de índices y caché. Implementé SSO con Keycloak y pipelines de despliegue continuo con Docker y GitHub Actions.",
    stack: ["Laravel 10", "Vue 3", "PostgreSQL", "Docker"],
  },
  {
    title: "Desarrollador de Software e Ingeniero de Datos",
    period: "2020 — 2022",
    org: "Soluciones en la nube y telemetría",
    description:
      "Diseñé APIs REST, colas de tareas en segundo plano y pipelines de extracción. Transformé datos no estructurados en tablas relacionales para reportes analíticos. Colaboré con equipos multifuncionales integrando dashboards con microservicios backend.",
    stack: ["Python", "FastAPI", "React", "MySQL", "Linux"],
  },
];

export const credentials: Credential[] = [
  {
    kicker: "TÍTULO",
    status: "Graduado con honores",
    title: "Licenciatura en Computación e Ingeniería de Software",
    description:
      "Estructuras de datos, teoría de bases relacionales, sistemas distribuidos, compiladores y estadística matemática.",
    tone: "tertiary",
  },
  {
    kicker: "ESPECIALIZACIÓN",
    status: "Verificado",
    title: "Machine Learning Aplicado y Visión por Computadora",
    description:
      "Redes convolucionales profundas, detección de objetos (YOLO), pipelines de entrenamiento en PyTorch y aumento de datos.",
    tone: "secondary",
  },
  {
    kicker: "CERTIFICACIÓN",
    status: "Avanzado",
    title: "PostgreSQL de Alto Rendimiento y Administración",
    description:
      "Particionamiento, ajuste de pools con PgBouncer, topologías de replicación y durabilidad del WAL.",
    tone: "primary",
  },
];

