/**
 * Spanish (es) locale mirror of data/project-rag.ts.
 * Must export the exact same names/shapes as the English module.
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
  category: "LLM aplicado y RAG · Motor semántico",
  title: "Recuperación Documental Inteligente (RAG).",
  headline: "Top-k en <18ms sobre 250,000+ fragmentos legales con citas deterministas de página exacta.",
  lede:
    "Preguntas-respuestas de alta velocidad sobre documentos heterogéneos financieros, legales y operativos: fragmentación inteligente, embeddings en pgvector y barandillas anti-alucinación.",
  role: "Ingeniero IA y Desarrollador Backend",
  type: "I+D aplicada (Búsqueda semántica)",
  status: "v1.8 en producción",
  duration: "5 meses (2024)",
  coreStack: "Python · FastAPI · pgvector",
  backToProjects: "Volver a proyectos",
  breadcrumbRoot: "Proyectos",
  viewTelemetry: "Ver telemetría en vivo",
  viewSource: "Ver código (Espejo)",
  jumpToSpec: "Ir a la ficha técnica",
};

export const subNav: TeeoSubNav = {
  overview: "Resumen",
  problemRole: "Problema y rol",
  architecture: "Arquitectura",
  challenges: "Retos",
  results: "Resultados",
  liveDemo: "Demo en vivo",
};

export const telemetry: TeeoTelemetry = {
  windowTitle: "rag-prod // indice-hnsw-01 // recuperacion-en-vivo",
  clusterState: "ÍNDICE SANO",
  uptime: "Activo: 142d 08h 44m",
  metrics: [
    { label: "Recuperación top-k", value: "<18", unit: "ms HNSW", hint: "Sobre 250k+ fragmentos", icon: "timer", accent: "primary" },
    { label: "Fragmentos indexados", value: "250k+", unit: "embeddings", hint: "Docs legales + financieros", icon: "balance", accent: "tertiary" },
    { label: "Costo de inferencia", value: "-48", unit: "% vs base", hint: "Compresión activa", icon: "speed", accent: "secondary" },
    { label: "Respuestas citadas", value: "100", unit: "% con página", hint: "Cero afirmaciones sueltas", icon: "verified", accent: "primary" },
  ],
  histogramTitle: "Latencia de recuperación en tiempo real (últimos 24 lotes)",
  histogramSample: "Muestra: 1 lote",
  histogramAvg: "Media del lote: 11.6ms",
  histogramBuffer: "Saturación de cola: 9% (Nominal)",
  logTitle: "TRAZA_RECUPERACION",
  logFormat: "Líneas JSON",
  logFooterLeft: "Bloqueos anti-alucinación: 3 hoy",
  logFooterRight: "Workers: 6 / 6 activos",
  tabs: [
    { id: "topology", label: "Traza de recuperación" },
    { id: "benchmarks", label: "Benchmark de embeddings" },
    { id: "dlq", label: "Bitácora guardarraíl (3)" },
  ],
  tlsNote: "HNSW pgvector activo",
  tlsCipher: "Coseno",
};

export const about: TeeoAbout = {
  kicker: "01 // Contexto arquitectónico",
  title: "Respuestas citables, no chatbots que inventan.",
  lede: "Equipos legales y financieros se ahogan en PDFs que nadie puede buscar semánticamente.",
  paragraph:
    "Contratos, anexos y reportes SLA se acumulan en miles de páginas. La búsqueda por palabras pierde cláusulas parafraseadas y el chat LLM crudo inventa citas falsas con confianza.",
  closing:
    "Este motor ingiere documentos una vez, los incrusta en pgvector y responde con citas de página exacta: cada afirmación trazable, cada número verificable.",
  audiences: [
    {
      icon: "account",
      title: "Analistas legales",
      body: "Búsqueda de cláusulas con página: penalizaciones, SLAs, referencias de anexos.",
    },
    {
      icon: "policy",
      title: "Oficiales de cumplimiento",
      body: "Respuestas con barandilla que se niegan sin evidencia en vez de alucinar.",
    },
    {
      icon: "stats",
      title: "Equipos operativos",
      body: "Q&A contractual en segundos durante negociaciones, no días de lectura.",
    },
  ],
};

export const problem: TeeoProblem = {
  kicker: "02 // El espacio del problema",
  title: "Por qué fallaron keywords y chat crudo.",
  lede: "Paráfrasis que evaden keywords; LLMs que alucinan el resto.",
  steps: [
    {
      index: "01",
      title: "El cuello de botella estructural",
      bullets: [
        "Miles de PDFs heterogéneos sin estructura uniforme.",
        "Keywords que pierden cláusulas parafraseadas o traducidas.",
        "Analistas releyendo anexos en cada negociación.",
      ],
    },
    {
      index: "02",
      title: "El impacto destructivo",
      bullets: [
        "Días cazando penalizaciones entre versiones de contrato.",
        "Pilotos LLM que citaban páginas inexistentes.",
        "Cero confianza legal en respuestas automáticas.",
      ],
    },
    {
      index: "03",
      title: "El mandato arquitectónico",
      bullets: [
        "Embeddings semánticos con top-k sub-20ms.",
        "Síntesis determinista atada solo a fragmentos recuperados.",
        "Citas explícitas de página en cada afirmación factual.",
      ],
    },
  ],
};

export const role: TeeoRole = {
  kicker: "03 // Alcance de responsabilidad",
  title: "Propiedad de ingeniería personal",
  lede: "Como Ingeniero IA y Desarrollador Backend, fui dueño del pipeline: ingesta, fragmentación, síntesis guardada y evaluación.",
  badge: "Propiedad ingesta-a-respuesta",
  cards: [
    {
      icon: "schema",
      tag: "Ingesta",
      title: "Fragmentación y normalización",
      body: "Chunking con layout para PDFs escaneados, tablas y anexos, con solape afinado.",
    },
    {
      icon: "bolt",
      tag: "Recuperación",
      title: "Índice HNSW pgvector",
      body: "Almacén de embeddings con HNSW afinado que sirve top-k en milisegundos.",
    },
    {
      icon: "fingerprint",
      tag: "Síntesis",
      title: "Respuestas atadas a cita",
      body: "Prompts deterministas que solo usan fragmentos recuperados, con cita obligatoria.",
    },
    {
      icon: "storage",
      tag: "Eficiencia",
      title: "Compresión de tokens",
      body: "Compresión propia del contexto que recortó costos casi a la mitad sin perder calidad.",
    },
    {
      icon: "monitoring",
      tag: "Evaluación",
      title: "Benchmarks de recuperación",
      body: "Set dorado de preguntas con tracking recall@k ante cada mejora de embeddings.",
    },
    {
      icon: "emergency",
      tag: "Seguridad",
      title: "Barandillas anti-alucinación",
      body: "Rutas de rechazo y verificación de citas que bloquean respuestas sin evidencia.",
    },
  ],
};

export const built: TeeoBuilt = {
  kicker: "04 // Sistemas núcleo entregados",
  title: "Pilares arquitectónicos e implementación técnica",
  lede: "Cuatro subsistemas de bytes PDF a respuestas citadas.",
  subsystems: [
    {
      id: "SUBSISTEMA 01",
      icon: "memory",
      title: "Fragmentador inteligente",
      body: "Cortes con estructura que preservan cláusulas, tablas y contexto de anexos.",
      implLabel: "Implementación:",
      impl: "Detección de layout más ventanas de solape semántico, con manifiesto por documento.",
      outcomeLabel: "Resultado medido:",
      outcome: "Recall@5 +23 puntos vs cortes ingenuos",
    },
    {
      id: "SUBSISTEMA 02",
      icon: "filter",
      title: "Recuperación vectorial HNSW",
      body: "Búsqueda por similitud en milisegundos sobre un cuarto de millón de embeddings.",
      implLabel: "Implementación:",
      impl: "Índice HNSW en pgvector con ef_search afinado y vectores cuantizados.",
      outcomeLabel: "Resultado medido:",
      outcome: "Top-k en <18ms con 250k+ fragmentos",
    },
    {
      id: "SUBSISTEMA 03",
      icon: "encryption",
      title: "Capa de compresión de tokens",
      body: "Exprime el contexto antes de sintetizar sin perder las frases que la cita necesita.",
      implLabel: "Implementación:",
      impl: "Pre-filtro extractivo más limpieza de redundancia antes de la llamada.",
      outcomeLabel: "Resultado medido:",
      outcome: "Costos de inferencia -48%",
    },
    {
      id: "SUBSISTEMA 04",
      icon: "tune",
      title: "Motor guardarraíl de citas",
      body: "Verifica cada afirmación contra fragmentos y se niega cuando la evidencia es pobre.",
      implLabel: "Implementación:",
      impl: "Chequeo post-síntesis con emparejamiento de página exacta y plantillas de rechazo.",
      outcomeLabel: "Resultado medido:",
      outcome: "100% de respuestas con página",
    },
  ],
};

export const solved: TeeoSolved = {
  kicker: "05 // Inmersiones de ingeniería",
  title: "Cómo se resolvieron los problemas difíciles",
  lede: "Tablas escaneadas, paráfrasis y costos disparados — resueltos.",
  cases: [
    {
      challengeLabel: "Reto 01",
      title: "Tablas escaneadas rompían el chunking",
      problem: "Tablas OCR partidas a media fila dispersaban penalizaciones en fragmentos inútiles.",
      solutionLabel: "La solución",
      solution:
        "Chunking consciente de tablas que mantiene grupos de filas y adjunta el encabezado del anexo a cada fragmento.",
      impactLabel: "Impacto:",
      impact: "Recall en tablas duplicado",
    },
    {
      challengeLabel: "Reto 02",
      title: "Paráfrasis que evadían la búsqueda",
      problem: "Cláusulas traducidas y reescritas jamás igualaban los términos del analista.",
      solutionLabel: "La solución",
      solution:
        "De keywords a embeddings con modelo afinado al dominio más fallback keyword para códigos exactos.",
      impactLabel: "Impacto:",
      impact: "Recall de paráfrasis +34 puntos",
    },
    {
      challengeLabel: "Reto 03",
      title: "Facturas de síntesis explotadas",
      problem: "Rellenar cada prompt con chunks completos volvía carísimas preguntas rutinarias.",
      solutionLabel: "La solución",
      solution:
        "Capa de compresión: filtrado extractivo que conserva frases citables y descarta relleno antes del LLM.",
      impactLabel: "Impacto:",
      impact: "Respuestas 48% más baratas, mismas citas",
    },
  ],
};

export const architecture: TeeoArchitecture = {
  kicker: "06 // Topología del sistema",
  title: "Diagrama de arquitectura de alta fidelidad",
  lede: "Del upload PDF a la respuesta citada en una pasada guardada.",
  tiers: [
    {
      tier: "NIVEL 1",
      title: "Ingesta documental",
      subtitle: "PDFs y escaneos",
      body: "Upload, OCR y detección de layout para archivos heterogéneos.",
      footer: "Manifiestos de chunks",
    },
    {
      tier: "NIVEL 2 (NÚCLEO)",
      title: "Índice de embeddings",
      subtitle: "pgvector HNSW",
      body: "Vectores con búsqueda de similitud afinada.",
      footer: "Top-k <18ms",
      core: true,
    },
    {
      tier: "NIVEL 3",
      title: "Servicio FastAPI",
      subtitle: "API de recuperación",
      body: "Embedding de query, fallback híbrido y ensamblaje de contexto.",
      footer: "Top-k re-rankeado",
    },
    {
      tier: "NIVEL 4",
      title: "Guardia de síntesis",
      subtitle: "LangChain + LLMs",
      body: "Generación atada a cita con rutas de rechazo.",
      footer: "Estrictamente citado",
    },
    {
      tier: "NIVEL 5",
      title: "Superficie analista",
      subtitle: "Q&A + trazas",
      body: "Respuestas con enlaces de página y trazas inspeccionables.",
      footer: "Siempre auditable",
    },
  ],
  specs: [
    {
      title: "Algoritmo de recuperación",
      body: "Similitud coseno sobre HNSW con fallback keyword para códigos exactos.",
    },
    {
      title: "Presupuesto de contexto",
      body: "Contexto comprimido por query preservando frases citables.",
    },
    {
      title: "Protocolo de seguridad",
      body: "Verificación de citas por afirmación; rechazo sin evidencia suficiente.",
    },
  ],
};

export const stack: TeeoStack = {
  kicker: "07 // Ecosistema técnico",
  title: "Stack tecnológico",
  lede: "Elegido por velocidad de recuperación y confiabilidad de respuesta.",
  categories: [
    {
      icon: "terminal",
      title: "Recuperación",
      tools: [
        { name: "pgvector", note: "Vector store HNSW" },
        { name: "Embeddings", note: "Vectores afinados" },
        { name: "Búsqueda híbrida", note: "Fallback keyword" },
      ],
    },
    {
      icon: "sync",
      title: "Orquestación",
      tools: [
        { name: "LangChain", note: "Pipelines RAG" },
        { name: "FastAPI", note: "API de recuperación" },
        { name: "Python", note: "Chunking y eval" },
      ],
    },
    {
      icon: "database",
      title: "Modelos",
      tools: [
        { name: "OpenAI / LLMs locales", note: "Síntesis guardada" },
        { name: "Reranker", note: "Refinado top-k" },
        { name: "OCR", note: "Ingesta de escaneos" },
      ],
    },
    {
      icon: "cloud",
      title: "Infra y entrega",
      tools: [
        { name: "Docker", note: "Despliegues inmutables" },
        { name: "PostgreSQL", note: "Docs + vectores" },
        { name: "Evals CI", note: "Compuerta de recall" },
      ],
    },
    {
      icon: "stats",
      title: "Observabilidad",
      tools: [
        { name: "Set dorado Q&A", note: "Tracking recall@k" },
        { name: "Visor de trazas", note: "Recuperación visible" },
        { name: "Medidores de costo", note: "Presupuesto por query" },
      ],
    },
  ],
};

export const challenges: TeeoChallenges = {
  kicker: "08 // Casos borde extremos",
  title: "Obstáculos técnicos de alto impacto",
  lede: "Crecimiento del índice, mezcla de idiomas y documentos obsoletos.",
  items: [
    {
      id: "INVESTIGACIÓN 01",
      title: "HNSW lento con 200k vectores",
      body: "El recall caía al crecer el índice. Reafinado de ef_construction y cuantización en particiones calientes.",
      result: "p99 de vuelta bajo 18ms",
    },
    {
      id: "INVESTIGACIÓN 02",
      title: "Cláusulas en idiomas mezclados",
      body: "Queries en español perdían anexos en inglés. Evaluación cross-lingual y expansión de query.",
      result: "Recall cross-lingual +29 puntos",
    },
    {
      id: "INVESTIGACIÓN 03",
      title: "Contratos superados que afloraban",
      body: "Versiones viejas rankeaban sobre vigentes por redacción similar. Boost por versión con metadata de superación.",
      result: "Citas obsoletas eliminadas",
    },
  ],
};

export const security: TeeoSecurity = {
  kicker: "09 // Confianza endurecida",
  title: "Estándares de confiabilidad probatoria",
  lede: "Una respuesta sin cita se trata como falla del sistema.",
  items: [
    {
      icon: "lock",
      title: "Síntesis atada a evidencia",
      body: "El modelo solo usa fragmentos recuperados; lo fuera de evidencia dispara rechazo.",
    },
    {
      icon: "key",
      title: "Citas de página exacta",
      body: "Cada afirmación lleva documento y página que el analista abre directo.",
    },
    {
      icon: "encrypted",
      title: "Ingesta consciente de PII",
      body: "Tramos sensibles marcados en ingesta con alcances restringidos por rol.",
    },
    {
      icon: "bug",
      title: "Evals adversariales",
      body: "Pruebas de inyección y jailbreak en CI; cualquier bypass bloquea el release.",
    },
  ],
};

export const results: TeeoResults = {
  kicker: "10 // Impacto verificado en producción",
  title: "Resultados cuantitativos de escala y rendimiento",
  lede: "Medidos en 120 días y 40k+ preguntas de analistas.",
  kpis: [
    {
      label: "Velocidad de recuperación",
      value: "<18ms",
      body: "Top-k HNSW sobre 250,000+ embeddings.",
    },
    {
      label: "Corpus indexado",
      value: "250k+",
      body: "Fragmentos legales y financieros en una query.",
    },
    {
      label: "Reducción de costo",
      value: "-48%",
      body: "Gasto de inferencia recortado con compresión.",
    },
    {
      label: "Cobertura de citas",
      value: "100%",
      body: "Respuestas factuales con página exacta.",
    },
  ],
  qualitative: [
    {
      icon: "verified",
      title: "Velocidad negociadora",
      body: "Cazar penalizaciones pasó de días leyendo a segundos preguntando.",
    },
    {
      icon: "terminal",
      title: "Confianza analista",
      body: "Citas de página convirtieron escépticos en usuarios diarios.",
    },
    {
      icon: "group",
      title: "Automatización segura",
      body: "Negarse sin evidencia venció a alucinar con confianza.",
    },
  ],
};

export const learned: TeeoLearned = {
  kicker: "11 // Sabiduría de ingeniería",
  title: "Lecciones críticas e insights prácticos",
  lede: "Lo que el Q&A legal enseña sobre LLMs aplicados.",
  items: [
    {
      title: "El chunking es el modelo",
      body: "Cortes con layout movieron el recall más que cualquier upgrade de embeddings.",
    },
    {
      title: "Negarse es funcionalidad",
      body: "Decir 'evidencia insuficiente' construyó más confianza que cualquier fluidez.",
    },
    {
      title: "Mide costo por respuesta",
      body: "La compresión hizo viable la economía: presupuesto por query como métrica primera.",
    },
  ],
};

export const roadmap: TeeoRoadmap = {
  kicker: "12 // Hoja de ruta",
  title: "Mejoras futuras de arquitectura",
  lede: "De la recuperación a la inteligencia contractual proactiva.",
  items: [
    {
      title: "Q&A agéntico multi-salto",
      body: "Recuperación encadenada entre anexos para preguntas multi-documento.",
    },
    {
      title: "Radar de cambios",
      body: "Diff automático de cláusulas entre renovaciones con alertas.",
    },
    {
      title: "Tier local",
      body: "Síntesis 100% on-premise para asuntos que jamás salen del edificio.",
    },
  ],
};

export const summary: TeeoSummary = {
  eyebrow: "Resumen ejecutivo para líderes de ingeniería",
  title: "De archivos ilegibles a respuestas citadas, resuelto.",
  body: "RAG convirtió 250k+ fragmentos dispersos en respuestas citadas <18ms, recortando inferencia 48% con 100% de cobertura de página.",
  tags: ["pgvector", "LangChain", "FastAPI", "HNSW", "Python"],
  downloadLabel: "Descargar caso de estudio PDF",
  contactLabel: "Contactar al desarrollador líder",
};

export const explore: TeeoExplore = {
  eyebrow: "14 // Verificación del proyecto",
  title: "Inspecciona el código y la telemetría",
  lede: "Revisa el repositorio, repite una traza o vuelve a la consola en vivo.",
  telemetryLabel: "Abrir consola de telemetría",
  sourceLabel: "Espejo en GitHub",
  rfcLabel: "Solicitar brief de arquitectura",
};

export const pager: TeeoPager = {
  prevLabel: "Proyecto anterior",
  prevTitle: "Lettuce Vision",
  prevSubtitle: "Hidroponía inteligente",
  indexLabel: "Ver todos los proyectos",
  nextLabel: "Proyecto siguiente",
  nextTitle: "Pipeline Telecom",
  nextSubtitle: "Telemetría y anomalías",
};
