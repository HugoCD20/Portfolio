/**
 * Spanish (es) locale mirror of data/project-telecom.ts.
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
  category: "Pipelines de datos · Telemetría de red",
  title: "Pipeline de Métricas de Red y Telecom.",
  headline: "1.2M de eventos syslog diarios parseados con alertas de anomalía sub-500ms.",
  lede:
    "Ingesta automatizada sobre syslogs distribuidos con isolation forests de Scikit-learn para pérdida de paquetes y picos de latencia, sobre series particionadas en PostgreSQL.",
  role: "Desarrollador de Software e Ingeniero de Datos",
  type: "Pipeline en producción (Telemetría)",
  status: "v3.1 transmitiendo diario",
  duration: "5 meses (2023)",
  coreStack: "PostgreSQL · Pandas · FastAPI",
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
  windowTitle: "telecom-prod // anillo-ingesta-01 // parser-en-vivo",
  clusterState: "PARSER SANO",
  uptime: "Activo: 210d 16h 05m",
  metrics: [
    { label: "Volumen diario", value: "1.2M+", unit: "eventos/día", hint: "Vectorizado Pandas/Polars", icon: "speed", accent: "primary" },
    { label: "Tasa de anomalía", value: "0.02", unit: "% marcadas", hint: "Isolation forest", icon: "verified", accent: "secondary" },
    { label: "Latencia de alerta", value: "<500", unit: "ms flaps BGP", hint: "Objetivo < 1s SLA", icon: "timer", accent: "tertiary" },
    { label: "Salud del búfer", value: "512", unit: "MB anillo", hint: "Anillo Redis nominal", icon: "balance", accent: "primary" },
  ],
  histogramTitle: "Tasa de ingesta en tiempo real (últimas 24 ventanas)",
  histogramSample: "Muestra: 5 min",
  histogramAvg: "Throughput medio: 833 ev/min",
  histogramBuffer: "Saturación del anillo: 31% (Nominal)",
  logTitle: "COLA_INGESTA",
  logFormat: "Líneas syslog",
  logFooterLeft: "Rezago del parser: CERO",
  logFooterRight: "Workers: 8 / 8 activos",
  tabs: [
    { id: "topology", label: "Flujo de ingesta" },
    { id: "benchmarks", label: "Benchmark de detección" },
    { id: "dlq", label: "Cola de alertas (2)" },
  ],
  tlsNote: "Anillo Redis 512MB",
  tlsCipher: "Sincronizado",
};

export const about: TeeoAbout = {
  kicker: "01 // Contexto arquitectónico",
  title: "Escuchar cada nodo antes que los clientes.",
  lede: "Pérdidas y picos se esconden en millones de líneas que nadie lee.",
  paragraph:
    "Los nodos edge emiten syslogs sin fin: contadores, transiciones BGP, sondas de latencia. Los ingenieros NOC revisan muestras a mano y se enteran por tickets de clientes.",
  closing:
    "Este pipeline parsea cada línea, puntúa anomalías sin supervisión y dispara alertas BGP en medio segundo, con dashboard Vue en vivo para profundizar.",
  audiences: [
    {
      icon: "account",
      title: "Ingenieros NOC",
      body: "Feed de anomalías en vivo con nodo, métrica y severidad en vez de grep crudo.",
    },
    {
      icon: "policy",
      title: "Planeación de red",
      body: "Historial en series que distingue degradación crónica de fallas únicas por nodo.",
    },
    {
      icon: "stats",
      title: "Dirección",
      body: "Volumen diario y conteos que responden capacidad con datos.",
    },
  ],
};

export const problem: TeeoProblem = {
  kicker: "02 // El espacio del problema",
  title: "Por qué el grep por muestreo perdía outages reales.",
  lede: "El volumen vencía humanos; eventos raros vencían umbrales.",
  steps: [
    {
      index: "01",
      title: "El cuello de botella estructural",
      bullets: [
        "1.2M líneas diarias con formatos inconsistentes por nodo.",
        "Umbrales estáticos que gritaban siempre o perdían fallas nuevas.",
        "Sin almacén de series: historial en archivos rotados.",
      ],
    },
    {
      index: "02",
      title: "El impacto destructivo",
      bullets: [
        "Flaps BGP descubiertos horas tras el cambio de tráfico.",
        "Picos culpando apps cuando la red era la causa.",
        "Post-mortems reconstruidos desde archivos dispersos.",
      ],
    },
    {
      index: "03",
      title: "El mandato arquitectónico",
      bullets: [
        "Parseo vectorizado al ritmo del firehose completo.",
        "Detección no supervisada para fallas sin regla escrita.",
        "Series particionadas respaldando cada alerta con historial.",
      ],
    },
  ],
};

export const role: TeeoRole = {
  kicker: "03 // Alcance de responsabilidad",
  title: "Propiedad de ingeniería personal",
  lede: "Como Desarrollador de Software e Ingeniero de Datos, fui dueño del camino: syslogs crudos, parseo, modelos y dashboards.",
  badge: "Propiedad ingesta-a-alerta",
  cards: [
    {
      icon: "schema",
      tag: "Ingesta",
      title: "Flota de parsers syslog",
      body: "Parsers tolerantes que normalizan salidas heterogéneas a un solo esquema.",
    },
    {
      icon: "bolt",
      tag: "Procesamiento",
      title: "Jobs vectorizados",
      body: "Rutinas Pandas/Polars con el volumen diario completo y cero fugas de memoria.",
    },
    {
      icon: "fingerprint",
      tag: "Detección",
      title: "Modelos isolation forest",
      body: "Puntaje no supervisado de pérdidas y picos sin incidentes etiquetados.",
    },
    {
      icon: "storage",
      tag: "Almacén",
      title: "Series particionadas",
      body: "Tablas PostgreSQL particionadas: ventanas calientes rápidas e historial consultable.",
    },
    {
      icon: "monitoring",
      tag: "Serving",
      title: "Dashboards Vue y Streamlit",
      body: "Vistas en vivo que conectan alertas con historial por nodo.",
    },
    {
      icon: "emergency",
      tag: "Alertas",
      title: "Despacho sub-segundo",
      body: "Alertas BGP y de picos en menos de 500ms con ventanas de dedup.",
    },
  ],
};

export const built: TeeoBuilt = {
  kicker: "04 // Sistemas núcleo entregados",
  title: "Pilares arquitectónicos e implementación técnica",
  lede: "Cuatro subsistemas de líneas crudas a humanos alertados.",
  subsystems: [
    {
      id: "SUBSISTEMA 01",
      icon: "memory",
      title: "Parser tolerante a formatos",
      body: "Soporta dialectos syslog por firmware sin perder líneas ante campos raros.",
      implLabel: "Implementación:",
      impl: "Gramáticas por familia de nodo más cola de cuarentena para líneas imposibles.",
      outcomeLabel: "Resultado medido:",
      outcome: "1.2M líneas/día a 99.98% de parseo",
    },
    {
      id: "SUBSISTEMA 02",
      icon: "filter",
      title: "Motor vectorizado",
      body: "Volumen diario en rutinas columnares por lotes, no loops fila por fila.",
      implLabel: "Implementación:",
      impl: "Pipelines Pandas/Polars con I/O por chunks y batch sizes perfilados.",
      outcomeLabel: "Resultado medido:",
      outcome: "Corridas diarias sin fugas",
    },
    {
      id: "SUBSISTEMA 03",
      icon: "encryption",
      title: "Puntaje no supervisado",
      body: "Isolation forests que marcan pérdidas y picos que el manual jamás previó.",
      implLabel: "Implementación:",
      impl: "Bosques por métrica con ventanas rodantes de calibración y dedup.",
      outcomeLabel: "Resultado medido:",
      outcome: "0.02% marcadas, ruido casi cero",
    },
    {
      id: "SUBSISTEMA 04",
      icon: "tune",
      title: "Superficie de telemetría viva",
      body: "Vistas Vue y Streamlit con filtrado en vivo de alerta a historial.",
      implLabel: "Implementación:",
      impl: "Endpoints FastAPI sobre tablas particionadas más filtros vivos en Redis.",
      outcomeLabel: "Resultado medido:",
      outcome: "De alerta a causa en un minuto",
    },
  ],
};

export const solved: TeeoSolved = {
  kicker: "05 // Inmersiones de ingeniería",
  title: "Cómo se resolvieron los problemas difíciles",
  lede: "Caos de formatos, tormentas de alertas e historial lento — resueltos.",
  cases: [
    {
      challengeLabel: "Reto 01",
      title: "Firmwares que rompían parsers estrictos",
      problem: "Un update reordenó campos syslog y tumbó 12% de líneas en silencio.",
      solutionLabel: "La solución",
      solution:
        "Parseo por gramáticas por familia más cola de cuarentena que avisa con la muestra culpable adjunta.",
      impactLabel: "Impacto:",
      impact: "Parseo restaurado a 99.98%",
    },
    {
      challengeLabel: "Reto 02",
      title: "Tormentas en mantenimientos",
      problem: "Mantenimientos movían docenas de nodos y spameaban cientos de páginas.",
      solutionLabel: "La solución",
      solution:
        "Ventanas de mantenimiento más dedup: un incidente, una alerta, con rollup de nodos.",
      impactLabel: "Impacto:",
      impact: "Páginas en ventanas -94%",
    },
    {
      challengeLabel: "Reto 03",
      title: "Historial que expiraba",
      problem: "Comparar meses escaneaba toda la tabla y colgaba dashboards.",
      solutionLabel: "La solución",
      solution:
        "Series particionadas por día con rollups precomputados por nodo; lecturas pegan a resúmenes.",
      impactLabel: "Impacto:",
      impact: "Queries de mes: 38s → 900ms",
    },
  ],
};

export const architecture: TeeoArchitecture = {
  kicker: "06 // Topología del sistema",
  title: "Diagrama de arquitectura de alta fidelidad",
  lede: "De la emisión syslog al ingeniero alertado en una pasada.",
  tiers: [
    {
      tier: "NIVEL 1",
      title: "Nodos edge",
      subtitle: "Emisores syslog",
      body: "Nodos distribuidos con líneas de interfaz, BGP y sondas.",
      footer: "1.2M líneas/día",
    },
    {
      tier: "NIVEL 2 (NÚCLEO)",
      title: "Flota de parsers",
      subtitle: "Normalizar y validar",
      body: "Gramáticas por familia con cuarentena para líneas raras.",
      footer: "99.98% parseado",
      core: true,
    },
    {
      tier: "NIVEL 3",
      title: "Jobs de transform",
      subtitle: "Pandas / Polars",
      body: "Rutinas vectorizadas por lotes con chunks perfilados.",
      footer: "Corridas sin fugas",
    },
    {
      tier: "NIVEL 4",
      title: "Capa de detección",
      subtitle: "Isolation forests",
      body: "Puntaje no supervisado con calibración rodante.",
      footer: "Alertas <500ms",
    },
    {
      tier: "NIVEL 5",
      title: "Serving y almacén",
      subtitle: "Postgres + Redis",
      body: "Series particionadas más búferes de filtrado vivo.",
      footer: "Dashboards Vue",
    },
  ],
  specs: [
    {
      title: "Esquema de eventos",
      body: "Un esquema normalizado entre familias, preservando la línea cruda forense.",
    },
    {
      title: "Método de detección",
      body: "Isolation forests por métrica; sin incidentes etiquetados para fallas nuevas.",
    },
    {
      title: "Protocolo de despacho",
      body: "Ventanas de dedup que colapsan nodos en un solo incidente con contexto.",
    },
  ],
};

export const stack: TeeoStack = {
  kicker: "07 // Ecosistema técnico",
  title: "Stack tecnológico",
  lede: "Elegido por throughput de volumen y detección sin etiquetas.",
  categories: [
    {
      icon: "terminal",
      title: "Procesamiento",
      tools: [
        { name: "Pandas / Polars", note: "Transforms vectorizados" },
        { name: "Python", note: "Parsers y jobs" },
        { name: "FastAPI", note: "Endpoints de métricas" },
      ],
    },
    {
      icon: "sync",
      title: "Detección",
      tools: [
        { name: "Scikit-learn", note: "Isolation forests" },
        { name: "NumPy", note: "Ventanas de features" },
        { name: "Calibración", note: "Baselines rodantes" },
      ],
    },
    {
      icon: "database",
      title: "Almacén y caché",
      tools: [
        { name: "PostgreSQL", note: "Series particionadas" },
        { name: "Redis", note: "Anillo + filtros vivos" },
        { name: "Parquet", note: "Archivos fríos" },
      ],
    },
    {
      icon: "cloud",
      title: "Infra y entrega",
      tools: [
        { name: "Docker", note: "Contenedores de jobs" },
        { name: "Systemd", note: "Demonios de parser" },
        { name: "Nginx", note: "Proxy de dashboards" },
      ],
    },
    {
      icon: "stats",
      title: "Observabilidad",
      tools: [
        { name: "Dashboard Vue", note: "Drill-down en vivo" },
        { name: "Streamlit", note: "Análisis ad-hoc" },
        { name: "Acuses de alerta", note: "Prueba de despacho" },
      ],
    },
  ],
};

export const challenges: TeeoChallenges = {
  kicker: "08 // Casos borde extremos",
  title: "Obstáculos técnicos de alto impacto",
  lede: "Relojes desviados, tormentas de backfill y nodos muertos en silencio.",
  items: [
    {
      id: "INVESTIGACIÓN 01",
      title: "Relojes que fingían picos",
      body: "Derivas de reloj fabricaban picos fantasma. Corrección de offset NTP por nodo antes de puntuar.",
      result: "Picos fantasma eliminados",
    },
    {
      id: "INVESTIGACIÓN 02",
      title: "Tormentas de backfill tras outages",
      body: "Nodos reconectados volcaban horas de rezago y aplastaban parsers. Colas de replay con ritmo.",
      result: "Replay absorbido sin lag",
    },
    {
      id: "INVESTIGACIÓN 03",
      title: "Nodos muertos que parecían sanos",
      body: "Nodos caídos no enviaban nada y el silencio parecía salud. Detección de heartbeat como señal primera.",
      result: "Muertes silenciosas avisan en 60s",
    },
  ],
};

export const security: TeeoSecurity = {
  kicker: "09 // Confiabilidad endurecida",
  title: "Estándares de robustez carrier-grade",
  lede: "Telemetría en la que pagas guardias a las 3am sin dudar.",
  items: [
    {
      icon: "lock",
      title: "Ingesta consciente de pérdida",
      body: "Cada línea caída o en cuarentena se cuenta y se ve; la pérdida silenciosa avisa.",
    },
    {
      icon: "key",
      title: "Preservación cruda",
      body: "Eventos normalizados guardan su línea fuente para replay forense.",
    },
    {
      icon: "encrypted",
      title: "Retención particionada",
      body: "Tiers caliente, tibio y frío: historial consultable sin explotar costos.",
    },
    {
      icon: "bug",
      title: "Simulacros de falla",
      body: "Staging repite cambios de firmware y backfills para probar parsers y colas.",
    },
  ],
};

export const results: TeeoResults = {
  kicker: "10 // Impacto verificado en producción",
  title: "Resultados cuantitativos de escala y rendimiento",
  lede: "Medidos en 180 días continuos de ingesta.",
  kpis: [
    {
      label: "Volumen diario",
      value: "1.2M+",
      body: "Eventos parseados a diario sin fugas de memoria.",
    },
    {
      label: "Latencia de alerta",
      value: "<500ms",
      body: "Detección de flaps BGP de evento a página.",
    },
    {
      label: "Fidelidad de parseo",
      value: "99.98%",
      body: "Líneas normalizadas pese a formatos variantes.",
    },
    {
      label: "Velocidad histórica",
      value: "42x",
      body: "Queries de mes aceleradas con rollups.",
    },
  ],
  qualitative: [
    {
      icon: "verified",
      title: "Outages hallados primero",
      body: "NOC se entera por el pipeline, no por tickets de clientes.",
    },
    {
      icon: "terminal",
      title: "Post-mortems sin culpa",
      body: "Drill-down de alerta a historial dirime app-vs-red con datos.",
    },
    {
      icon: "group",
      title: "Planeación desbloqueada",
      body: "Rankings de nodos crónicos priorizan capacidad con evidencia.",
    },
  ],
};

export const learned: TeeoLearned = {
  kicker: "11 // Sabiduría de ingeniería",
  title: "Lecciones críticas e insights prácticos",
  lede: "Lo que 1.2M líneas diarias enseñan de data engineering.",
  items: [
    {
      title: "Parsea tolerante, cuenta estricto",
      body: "Gramáticas tolerantes más conteo exacto de pérdida vencen parsers rígidos.",
    },
    {
      title: "No supervisado vence reglas no escritas",
      body: "Nadie enumera cada falla; los bosques atraparon lo inimaginable.",
    },
    {
      title: "Precomputa las preguntas",
      body: "Rollups para las queries reales del NOC importaron más que índices genéricos.",
    },
  ],
};

export const roadmap: TeeoRoadmap = {
  kicker: "12 // Hoja de ruta",
  title: "Mejoras futuras de arquitectura",
  lede: "De paging reactivo a capacidad predictiva.",
  items: [
    {
      title: "Capa de forecasting",
      body: "Proyección de tendencias para anticipar capacidad semanas antes.",
    },
    {
      title: "Correlación topológica",
      body: "Alertas ligadas por topología para aislar la raíz automáticamente.",
    },
    {
      title: "Agentes eBPF",
      body: "Métricas kernel que complementan syslog con mayor fidelidad.",
    },
  ],
};

export const summary: TeeoSummary = {
  eyebrow: "Resumen ejecutivo para líderes de ingeniería",
  title: "De greps ciegos a alertas sub-segundo, resuelto.",
  body: "El pipeline convirtió 1.2M líneas diarias en páginas <500ms con 99.98% de parseo e historial 42x más veloz.",
  tags: ["PostgreSQL", "Pandas", "Scikit-learn", "FastAPI", "Redis"],
  downloadLabel: "Descargar caso de estudio PDF",
  contactLabel: "Contactar al desarrollador líder",
};

export const explore: TeeoExplore = {
  eyebrow: "14 // Verificación del proyecto",
  title: "Inspecciona el código y la telemetría",
  lede: "Revisa los parsers, repite un incidente o vuelve a la consola en vivo.",
  telemetryLabel: "Abrir consola de telemetría",
  sourceLabel: "Espejo en GitHub",
  rfcLabel: "Solicitar brief de arquitectura",
};

export const pager: TeeoPager = {
  prevLabel: "Proyecto anterior",
  prevTitle: "Recuperación RAG",
  prevSubtitle: "Motor semántico",
  indexLabel: "Ver todos los proyectos",
  nextLabel: "Proyecto siguiente",
  nextTitle: "Gestión de Archivos TEEO",
  nextSubtitle: "Archivo de alto cumplimiento",
};
