/**
 * Spanish (es) locale mirror of data/project-teeo.ts.
 * Must export the exact same names/shapes as the English module.
 * Shared types are imported (not redefined) to guarantee shape parity.
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

export const teeoMeta: TeeoMeta = {
  category: "Sistemas empresariales y archivo judicial",
  title: "Gestión de Archivos TEEO.",
  headline: "Archivo judicial de alta concurrencia con miles de consultas diarias y auditoría verificable.",
  lede:
    "Construido para reemplazar el seguimiento en papel con una plataforma contenerizada Laravel + Vue: acceso por roles, firmas electrónicas, gráficas de datos y conmutación automática de réplicas de BD.",
  role: "Desarrollador Full-Stack Líder",
  type: "Núcleo en producción (Judicial)",
  status: "v2.4 en producción",
  duration: "6 meses (2024)",
  coreStack: "Laravel 12 · Vue 3 · PostgreSQL",
  backToProjects: "Volver a proyectos",
  breadcrumbRoot: "Proyectos",
  viewTelemetry: "Ver telemetría en vivo",
  viewSource: "Ver código (Espejo)",
  jumpToSpec: "Ir a la ficha técnica",
};

export const teeoSubNav: TeeoSubNav = {
  overview: "Resumen",
  problemRole: "Problema y rol",
  architecture: "Arquitectura",
  challenges: "Retos",
  results: "Resultados",
  liveDemo: "Demo en vivo",
};

export const teeoTelemetry: TeeoTelemetry = {
  windowTitle: "teeo-prod // nodo-archivo-02 // telemetría-en-vivo",
  clusterState: "CLÚSTER ESTABLE",
  uptime: "Activo: 184d 11h 22m",
  metrics: [
    { label: "Consultas / min", value: "8,412", unit: "q/min", hint: "+6.1% ventana pico", icon: "speed", accent: "primary" },
    { label: "Latencia búsqueda P95", value: "182", unit: "ms", hint: "Objetivo < 250ms SLA", icon: "timer", accent: "secondary" },
    { label: "Retraso réplica", value: "0.2", unit: "s", hint: "2/2 réplicas sanas", icon: "balance", accent: "tertiary" },
    { label: "Cobertura auditoría", value: "100", unit: "% sellado", hint: "Cadena hash verificada", icon: "verified", accent: "primary" },
  ],
  histogramTitle: "Consultas de expedientes en tiempo real (JDC / JDCI / CA / JNI)",
  histogramSample: "Muestra: 1s",
  histogramAvg: "Carga media del nodo: 1.4k q/min",
  histogramBuffer: "Saturación del búfer: 18% (Nominal)",
  logTitle: "COLA_AUDITORIA_EN_VIVO",
  logFormat: "Líneas JSON",
  logFooterLeft: "Contrapresión: CERO",
  logFooterRight: "Workers: 8 / 8 activos",
  tabs: [
    { id: "topology", label: "Topología del archivo" },
    { id: "benchmarks", label: "Benchmark de consultas" },
    { id: "dlq", label: "Cola de fallos (0)" },
  ],
  tlsNote: "SSO Keycloak obligatorio",
  tlsCipher: "TLS 1.3",
};

export const teeoAbout: TeeoAbout = {
  kicker: "01 // Contexto arquitectónico",
  title: "La columna vertebral del seguimiento judicial.",
  lede: "Los juicios electorales no pueden permitirse expedientes perdidos ni acuerdos sin firma.",
  paragraph:
    "Las oficinas de justicia electoral gestionan miles de expedientes entre áreas: promociones, turnados, reencauzamientos y acuerdos firmados. Históricamente esto vivía en hojas de cálculo y carpetas compartidas sin trazabilidad.",
  closing:
    "El mandato de TEEO fue pragmático: un archivo único con búsqueda, acceso por roles con Keycloak, acuerdos firmados y gráficas que responden en segundos.",
  audiences: [
    {
      icon: "account",
      title: "Operación jurisdiccional",
      body: "Visibilidad en vivo: qué expediente está creado, turnado, reencauzado o ya resuelto.",
    },
    {
      icon: "policy",
      title: "Cumplimiento y transparencia",
      body: "Bitácora sellada con hash encadenado: cualquier alteración rompe la verificación.",
    },
    {
      icon: "stats",
      title: "Dirección y análisis",
      body: "Gráficas de acuerdos y conteos de resolución para reportes operativos semanales.",
    },
  ],
};

export const teeoProblem: TeeoProblem = {
  kicker: "02 // El espacio del problema",
  title: "Por qué el control en carpetas colapsó con la carga.",
  lede: "Los flujos manuales causaban pérdida silenciosa, duplicados y reportes lentos.",
  steps: [
    {
      index: "01",
      title: "El cuello de botella estructural",
      bullets: [
        "Metadatos dispersos en hojas de cálculo y carpetas de red.",
        "Sin fuente única de verdad para las transiciones de estado.",
        "Registros sensibles compartidos sin restricciones por rol.",
      ],
    },
    {
      index: "02",
      title: "El impacto destructivo",
      bullets: [
        "Horas semanales conciliando qué acuerdos ya se resolvieron.",
        "Resoluciones sin firma o duplicadas en picos de promociones.",
        "Sin trazabilidad probatoria para revisiones de transparencia.",
      ],
    },
    {
      index: "03",
      title: "El mandato arquitectónico",
      bullets: [
        "Archivo centralizado con búsqueda full-text sobre metadatos.",
        "SSO con Keycloak y autorización granular por área.",
        "Stack contenerizado con failover automático de réplicas.",
      ],
    },
  ],
};

export const teeoRole: TeeoRole = {
  kicker: "03 // Alcance de responsabilidad",
  title: "Propiedad de ingeniería personal",
  lede: "Como Desarrollador Full-Stack Líder, fui dueño de la plataforma desde el modelado y Keycloak hasta la orquestación y las gráficas.",
  badge: "Arquitectura propia e implementación núcleo",
  cards: [
    {
      icon: "schema",
      tag: "Diseño del motor",
      title: "Arquitectura y modelado de datos",
      body: "Definí el ciclo de vida del expediente, el esquema relacional y la estrategia de índices para búsqueda sub-segundo.",
    },
    {
      icon: "bolt",
      tag: "Sistemas núcleo",
      title: "API Laravel y colas",
      body: "Construí endpoints REST, jobs de ingesta documental y flujos de acuerdos firmados.",
    },
    {
      icon: "fingerprint",
      tag: "Integridad de datos",
      title: "Auth y trazabilidad",
      body: "Integré SSO con Keycloak y bitácora append-only con hash encadenado como evidencia.",
    },
    {
      icon: "storage",
      tag: "Capa de almacenamiento",
      title: "PostgreSQL y réplicas",
      body: "Configuré topología primaria-réplica con failover automático y pool de conexiones.",
    },
    {
      icon: "monitoring",
      tag: "SRE y observabilidad",
      title: "Telemetría y dashboards",
      body: "Entregué gráficas de acuerdos, paneles de latencia y alertas de lag de réplica.",
    },
    {
      icon: "emergency",
      tag: "Resiliencia",
      title: "Docker y CI/CD",
      body: "Stack contenerizado con pipelines de GitHub Actions y despliegues compose sin downtime.",
    },
  ],
};

export const teeoBuilt: TeeoBuilt = {
  kicker: "04 // Sistemas núcleo entregados",
  title: "Pilares arquitectónicos e implementación técnica",
  lede: "Cuatro subsistemas que mantienen el archivo rápido, sellado y operable.",
  subsystems: [
    {
      id: "SUBSISTEMA 01",
      icon: "memory",
      title: "Motor de ciclo de vida del expediente",
      body: "Máquina de estados: creado, turnado, reencauzado y resuelto, con transiciones guardadas por rol.",
      implLabel: "Implementación:",
      impl: "Transiciones de estado en Laravel + policies; cada cambio emite una fila de auditoría inmutable.",
      outcomeLabel: "Resultado medido:",
      outcome: "Cero saltos de estado inválidos en producción",
    },
    {
      id: "SUBSISTEMA 02",
      icon: "filter",
      title: "Búsqueda full-text de metadatos",
      body: "Búsqueda sub-segundo por código de expediente, partes y texto de acuerdos con índices trigram.",
      implLabel: "Implementación:",
      impl: "Índices GIN/trigram en PostgreSQL con ranking y filtros por área.",
      outcomeLabel: "Resultado medido:",
      outcome: "P95 < 200ms con 100k+ registros",
    },
    {
      id: "SUBSISTEMA 03",
      icon: "encryption",
      title: "Cadena de auditoría sellada",
      body: "Cada entrada audita el hash de la anterior: ediciones silenciosas rompen la cadena al instante.",
      implLabel: "Implementación:",
      impl: "Bitácora encadenada SHA-256 verificada por un worker con conciencia del lag.",
      outcomeLabel: "Resultado medido:",
      outcome: "Resistencia probatoria a manipulación",
    },
    {
      id: "SUBSISTEMA 04",
      icon: "tune",
      title: "Failover de réplicas y respaldos",
      body: "Promoción automática de réplica caliente más dumps cifrados nocturnos a almacenamiento.",
      implLabel: "Implementación:",
      impl: "Topología Docker con health checks, archivado WAL y simulacros de restauración.",
      outcomeLabel: "Resultado medido:",
      outcome: "RPO < 5 min, RTO < 2 min",
    },
  ],
};

export const teeoSolved: TeeoSolved = {
  kicker: "05 // Inmersiones de ingeniería",
  title: "Cómo se resolvieron los problemas difíciles",
  lede: "Casos borde operativos reales y las soluciones que los neutralizaron.",
  cases: [
    {
      challengeLabel: "Reto 01",
      title: "Reportes lentos antes de sesiones",
      problem: "El personal exportaba hojas de cálculo y contaba resoluciones a mano horas antes.",
      solutionLabel: "La solución",
      solution:
        "Contadores pre-agregados por tipo de expediente y semana, recalculados con colas en cada cambio de estado y servidos desde un dashboard Vue cacheado.",
      impactLabel: "Impacto:",
      impact: "Preparación de sesiones de horas a segundos",
    },
    {
      challengeLabel: "Reto 02",
      title: "Acceso no autorizado a archivos sensibles",
      problem: "Las carpetas compartidas exponían cada caso a cada área sin trazabilidad.",
      solutionLabel: "La solución",
      solution:
        "Realm Keycloak con roles por área mapeados a policies de Laravel; cada lectura sensible escribe auditoría.",
      impactLabel: "Impacto:",
      impact: "100% de lecturas sensibles ahora atribuidas",
    },
    {
      challengeLabel: "Reto 03",
      title: "Deriva de réplicas en picos de carga",
      problem: "Las réplicas se atrasaban minutos respecto al primario en ventanas de ingesta masiva.",
      solutionLabel: "La solución",
      solution:
        "Separación de conexiones lectura/escritura, réplicas con pool y telemetría de lag para avisar antes de servir listas obsoletas.",
      impactLabel: "Impacto:",
      impact: "Lag bajo 0.5s en pico",
    },
  ],
};

export const teeoArchitecture: TeeoArchitecture = {
  kicker: "06 // Topología del sistema",
  title: "Diagrama de arquitectura de alta fidelidad",
  lede: "Trayectoria de extremo a extremo: del navegador al almacenamiento sellado.",
  tiers: [
    {
      tier: "NIVEL 1",
      title: "Cliente Vue 3",
      subtitle: "Expedientes y gráficas reactivas",
      body: "Vistas por rol, búsqueda full-text y dashboards de acuerdos.",
      footer: "Vite / Pinia",
    },
    {
      tier: "NIVEL 2 (NÚCLEO)",
      title: "API Laravel 12",
      subtitle: "Policies + colas",
      body: "Endpoints REST, máquina de estados y flujos de firma.",
      footer: "~40ms mediana",
      core: true,
    },
    {
      tier: "NIVEL 3",
      title: "PostgreSQL",
      subtitle: "Primario + réplicas",
      body: "Auditoría particionada, índices trigram y conexiones con pool.",
      footer: "Cero pérdida de datos",
    },
    {
      tier: "NIVEL 4",
      title: "Keycloak SSO",
      subtitle: "Realm y roles",
      body: "Autorización por área, refresco de tokens y revocación de sesiones.",
      footer: "Alcance estricto",
    },
    {
      tier: "NIVEL 5",
      title: "Docker y Nginx",
      subtitle: "Compose + proxy",
      body: "Proxy inverso, terminación TLS y despliegues sin downtime.",
      footer: "RTO < 2 min",
    },
  ],
  specs: [
    {
      title: "Formato de serialización",
      body: "JSON sobre REST con validación estricta FormRequest y recursos API.",
    },
    {
      title: "Consenso y replicación",
      body: "Replicación streaming de PostgreSQL, 2 réplicas y promoción automática ante fallo.",
    },
    {
      title: "Protocolo de failover",
      body: "Health checks re-enrutan lecturas en menos de 30s sin perder firmas.",
    },
  ],
};

export const teeoStack: TeeoStack = {
  kicker: "07 // Ecosistema técnico",
  title: "Stack tecnológico",
  lede: "Elegido por predictibilidad, mantenibilidad y confiabilidad judicial.",
  categories: [
    {
      icon: "terminal",
      title: "Backend",
      tools: [
        { name: "Laravel 12", note: "API y motor de ciclo" },
        { name: "PHP 8.2+", note: "Tipos estrictos y colas" },
        { name: "Keycloak", note: "SSO y roles por área" },
      ],
    },
    {
      icon: "sync",
      title: "Frontend",
      tools: [
        { name: "Vue.js 3", note: "Expedientes y dashboards" },
        { name: "TypeScript", note: "Clientes API tipados" },
        { name: "Tailwind CSS", note: "Sistema de diseño" },
      ],
    },
    {
      icon: "database",
      title: "Almacén y caché",
      tools: [
        { name: "PostgreSQL", note: "Archivo e índice auditor" },
        { name: "Redis", note: "Caché de consultas y sesiones" },
        { name: "pgvector", note: "Futura búsqueda semántica" },
      ],
    },
    {
      icon: "cloud",
      title: "Infra y orquestación",
      tools: [
        { name: "Docker Compose", note: "Despliegues inmutables" },
        { name: "Nginx", note: "Proxy inverso y TLS" },
        { name: "GitHub Actions", note: "Pipelines CI/CD" },
      ],
    },
    {
      icon: "stats",
      title: "Observabilidad",
      tools: [
        { name: "Dashboard auditor", note: "Paneles de latencia y lag" },
        { name: "Verificador hash", note: "Chequeos nocturnos" },
        { name: "Simulacros backup", note: "Ensayos de restauración" },
      ],
    },
  ],
};

export const teeoChallenges: TeeoChallenges = {
  kicker: "08 // Casos borde extremos",
  title: "Obstáculos técnicos de alto impacto",
  lede: "Bloat de índices, consultas N+1 y estampidas de caché en picos.",
  items: [
    {
      id: "INVESTIGACIÓN 01",
      title: "Búsquedas lentas con 100k expedientes",
      body: "Los LIKE con comodín escaneaban tablas completas al cruzar seis cifras. El profiling apuntó a falta de trigram y filtros sin alcance.",
      result: "Búsqueda P95: 1.8s → 180ms",
    },
    {
      id: "INVESTIGACIÓN 02",
      title: "N+1 en listados de expedientes",
      body: "Las listas disparaban cientos de queries perezosas. Se introdujo eager loading con selects acotados y conteos cacheados.",
      result: "Queries por página: 240 → 9",
    },
    {
      id: "INVESTIGACIÓN 03",
      title: "Estampidas de caché tras deploy",
      body: "La caché fría tras cada release llevaba todo a la BD. Se agregó calentamiento por etapas y coalescencia en dockets calientes.",
      result: "Pico p99 de deploy eliminado",
    },
  ],
};

export const teeoSecurity: TeeoSecurity = {
  kicker: "09 // Seguridad endurecida",
  title: "Confiabilidad y cumplimiento de grado judicial",
  lede: "Como los expedientes son prueba legal, el pipeline asume cero confianza en cada salto.",
  items: [
    {
      icon: "lock",
      title: "SSO Keycloak y mínimo privilegio",
      body: "Cada sesión es autenticada por realm; los roles por área gobiernan cada acción y vista.",
    },
    {
      icon: "key",
      title: "Acuerdos firmados",
      body: "Las resoluciones llevan firma electrónica; un borrador sin firma jamás pasa a resuelto.",
    },
    {
      icon: "encrypted",
      title: "Respaldos cifrados en reposo",
      body: "Dumps nocturnos cifrados AES-256 antes de salir del host, con simulacros mensuales.",
    },
    {
      icon: "bug",
      title: "Simulacros de fallo",
      body: "Staging mata réplicas y proxies periódicamente para probar que el failover sella escrituras.",
    },
  ],
};

export const teeoResults: TeeoResults = {
  kicker: "10 // Impacto verificado en producción",
  title: "Resultados cuantitativos de escala y rendimiento",
  lede: "Mediciones de 90 días continuos en producción tras el despliegue.",
  kpis: [
    {
      label: "Latencia de búsqueda",
      value: "180ms",
      body: "Búsqueda P95 de metadatos, antes eran segundos en carpetas.",
    },
    {
      label: "Consultas diarias",
      value: "12k+",
      body: "Consultas diarias servidas sin rezago en semanas pico.",
    },
    {
      label: "Cobertura auditora",
      value: "100%",
      body: "Transiciones selladas en bitácora encadenada, sin huecos.",
    },
    {
      label: "Tiempo de reporte",
      value: "-92%",
      body: "Reportes de acuerdos de horas en Excel a gráficas en vivo.",
    },
  ],
  qualitative: [
    {
      icon: "verified",
      title: "Auditorías confiables",
      body: "Transparencia obtiene pruebas selladas en segundos, no días de arqueología.",
    },
    {
      icon: "terminal",
      title: "Replay instantáneo",
      body: "Cualquier línea de tiempo muestra quién turnó o resolvió cada expediente.",
    },
    {
      icon: "group",
      title: "Onboarding veloz",
      body: "Vistas por rol permiten operar con seguridad desde el día uno.",
    },
  ],
};

export const teeoLearned: TeeoLearned = {
  kicker: "11 // Sabiduría de ingeniería",
  title: "Lecciones críticas e insights prácticos",
  lede: "Lo que la carga real enseña sobre sistemas pragmáticos en producción.",
  items: [
    {
      title: "Modela el ciclo de vida primero",
      body: "Definir creado → turnado → reencauzado → resuelto evitó estados inválidos y bugs de reporte.",
    },
    {
      title: "Indexa la query que sí ejecutas",
      body: "Los índices genéricos fallaron con patrones reales. El trigram sobre campos buscados importó más que la caché.",
    },
    {
      title: "La infra aburrida gana",
      body: "Compose, Nginx y simulacros de restore superaron orquestaciones exóticas: deploys predecibles.",
    },
  ],
};

export const teeoRoadmap: TeeoRoadmap = {
  kicker: "12 // Hoja de ruta",
  title: "Mejoras futuras de arquitectura",
  lede: "Evoluciones planeadas hacia búsqueda semántica y analítica profunda.",
  items: [
    {
      title: "Búsqueda semántica de cláusulas",
      body: "Embeddings con pgvector para hallar resoluciones y cláusulas similares entre años.",
    },
    {
      title: "Dashboards Power BI directivos",
      body: "Datamarts estrella para rezago, throughput y antigüedad de resolución.",
    },
    {
      title: "Especificación formal de retención",
      body: "Política documentada de ciclo y purga con prueba criptográfica de destrucción.",
    },
  ],
};

export const teeoSummary: TeeoSummary = {
  eyebrow: "Resumen ejecutivo para líderes de ingeniería",
  title: "De carpetas a archivo sellado, resuelto.",
  body: "TEEO reemplazó hojas dispersas con un archivo sellado Laravel + Vue que sirve 12k+ consultas diarias a 180ms P95, con 100% de auditoría y reportes 92% más rápidos.",
  tags: ["Laravel 12", "Vue 3", "PostgreSQL", "Keycloak", "Docker"],
  downloadLabel: "Descargar caso de estudio PDF",
  contactLabel: "Contactar al desarrollador líder",
};

export const teeoExplore: TeeoExplore = {
  eyebrow: "14 // Verificación del proyecto",
  title: "Inspecciona el código y la telemetría",
  lede: "Explora el espejo del repositorio, pide el brief de arquitectura o vuelve a la consola.",
  telemetryLabel: "Abrir consola de telemetría",
  sourceLabel: "Espejo en GitHub",
  rfcLabel: "Solicitar brief de arquitectura",
};

export const teeoPager: TeeoPager = {
  prevLabel: "Proyecto anterior",
  prevTitle: "Lettuce Vision",
  prevSubtitle: "Hidroponía inteligente",
  indexLabel: "Ver todos los proyectos",
  nextLabel: "Proyecto siguiente",
  nextTitle: "Recuperación RAG",
  nextSubtitle: "Motor semántico",
};
