/**
 * Spanish (es) locale mirror of data/project-lettuce.ts.
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
  category: "Visión por computadora / IA · Agrotech",
  title: "Lettuce Vision: Hidroponía Inteligente.",
  headline: "Monitoreo autónomo de doseles con YOLOv8 ajustado: 94.2% mAP@50 en cámaras edge limitadas.",
  lede:
    "Diseñado para agricultura vertical interior de precisión: pipelines OpenCV monitorean doseles, detectan quemadura foliar, estiman biomasa y activan el rebalanceo de nutrientes.",
  role: "Ingeniero ML y Desarrollador Full-Stack",
  type: "I+D aplicada (Agrotech)",
  status: "v1.3 desplegado en edge",
  duration: "4 meses (2024)",
  coreStack: "Python · YOLOv8 · FastAPI",
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
  windowTitle: "lettuce-edge // dosel-cam-03 // inferencia-en-vivo",
  clusterState: "MODELO SANO",
  uptime: "Activo: 96d 04h 10m",
  metrics: [
    { label: "Precisión del modelo", value: "94.2", unit: "% mAP@50", hint: "Estable en 6 doseles", icon: "verified", accent: "secondary" },
    { label: "Inferencia edge", value: "14", unit: "ms FP16", hint: "Objetivo < 25ms por frame", icon: "timer", accent: "primary" },
    { label: "Doseles monitoreados", value: "6", unit: "zonas en vivo", hint: "A-01…B-03 transmitiendo", icon: "balance", accent: "tertiary" },
    { label: "Alertas abiertas", value: "1", unit: "¿quemadura?", hint: "A-03 en revisión", icon: "speed", accent: "primary" },
  ],
  histogramTitle: "Confianza por dosel en tiempo real (Zonas A-01 – B-03)",
  histogramSample: "Muestra: 1 frame",
  histogramAvg: "Confianza media: 0.91",
  histogramBuffer: "Saturación del búfer: 22% (Nominal)",
  logTitle: "COLA_INFERENCIA",
  logFormat: "Líneas JSON",
  logFooterLeft: "Frames perdidos: CERO",
  logFooterRight: "Workers: 4 / 4 activos",
  tabs: [
    { id: "topology", label: "Malla de doseles" },
    { id: "benchmarks", label: "Benchmark de inferencia" },
    { id: "dlq", label: "Cola de alertas (1)" },
  ],
  tlsNote: "Contenedor edge FastAPI",
  tlsCipher: "FP16",
};

export const about: TeeoAbout = {
  kicker: "01 // Contexto arquitectónico",
  title: "Ojos en cada hoja del cultivo.",
  lede: "La quemadura foliar y la deriva de nutrientes aparecen días antes de rondines humanos.",
  paragraph:
    "Las granjas verticales apilan doseles densos bajo luz y nutrientes controlados. El personal recorre filas con libreta, calificando a ojo: lento, subjetivo y ciego a señales tempranas de estrés.",
  closing:
    "Lettuce Vision pone una cámara sobre cada zona y un modelo tras cada frame: puntaje continuo, banderas de enfermedad y alertas webhook directas al personal.",
  audiences: [
    {
      icon: "account",
      title: "Personal de cultivo",
      body: "Puntajes en vivo por zona, con banderas claras cuando una zona necesita atención.",
    },
    {
      icon: "policy",
      title: "Agrónomos",
      body: "Historial de frames anotados para validar quemaduras y afinar recetas de nutrientes.",
    },
    {
      icon: "stats",
      title: "Operadores",
      body: "Tendencias de biomasa que conectan cambios de nutrientes con crecimiento en días.",
    },
  ],
};

export const problem: TeeoProblem = {
  kicker: "02 // El espacio del problema",
  title: "Por qué el monitoreo manual perdía el estrés temprano.",
  lede: "Rondines escasos, subjetivos y desconectados del control de nutrientes.",
  steps: [
    {
      index: "01",
      title: "El cuello de botella estructural",
      bullets: [
        "Revisiones una vez al día, a ojo, sin registro fotográfico.",
        "Quemadura detectada solo tras necrosis visible del borde.",
        "Ajustes de nutrientes por intuición, no por biomasa medida.",
      ],
    },
    {
      index: "02",
      title: "El impacto destructivo",
      bullets: [
        "Zonas enteras degradadas en cosecha por quemadura prevenible.",
        "Sobredosis de nutrientes que desperdicia insumos y estresa raíces.",
        "Sin dataset para aprender qué recetas sí funcionaron.",
      ],
    },
    {
      index: "03",
      title: "El mandato arquitectónico",
      bullets: [
        "Cámaras por zona con inferencia YOLOv8 continua.",
        "Dataset propio de la granja, no un benchmark genérico.",
        "Alertas cableadas al flujo del personal, no otra pestaña.",
      ],
    },
  ],
};

export const role: TeeoRole = {
  kicker: "03 // Alcance de responsabilidad",
  title: "Propiedad de ingeniería personal",
  lede: "Como Ingeniero ML y Desarrollador Full-Stack, fui dueño del ciclo: anotación, entrenamiento, despliegue edge y alertas.",
  badge: "Entrenamiento y despliegue propios",
  cards: [
    {
      icon: "schema",
      tag: "Dataset",
      title: "Dataset y pipeline de anotación",
      body: "Recolecté y anoté 8,400+ imágenes multiespectrales con etiquetas consistentes de dosel y lesión.",
    },
    {
      icon: "bolt",
      tag: "Modelo",
      title: "Ajuste fino de YOLOv8",
      body: "Cabezas de detección para doseles y quemadura, con aumento contra el brillo de lámparas.",
    },
    {
      icon: "fingerprint",
      tag: "Integridad visual",
      title: "Cadena OpenCV",
      body: "Normalización de balance de blancos, máscara de brillo y estimación de biomasa foliar.",
    },
    {
      icon: "storage",
      tag: "Serving",
      title: "Backend edge FastAPI",
      body: "Servicio de inferencia contenerizado con batching, runtime FP16 y workers supervisados.",
    },
    {
      icon: "monitoring",
      tag: "Observabilidad",
      title: "Telemetría y dashboards",
      body: "Paneles de confianza por zona, latencia de inferencia y acuses de alerta.",
    },
    {
      icon: "emergency",
      tag: "Operaciones",
      title: "Alertas webhook",
      body: "Despacho por umbrales al personal con snapshot anotado en cada alerta.",
    },
  ],
};

export const built: TeeoBuilt = {
  kicker: "04 // Sistemas núcleo entregados",
  title: "Pilares arquitectónicos e implementación técnica",
  lede: "Cuatro subsistemas de píxeles a acciones de nutrientes.",
  subsystems: [
    {
      id: "SUBSISTEMA 01",
      icon: "memory",
      title: "Fábrica del dataset",
      body: "Recolección versionada, revisión de anotaciones y recetas de aumento para luz interior.",
      implLabel: "Implementación:",
      impl: "Cola de revisión más aumento scripteado (brillo, blur, recorte) con ficha por release.",
      outcomeLabel: "Resultado medido:",
      outcome: "8,400+ imágenes anotadas",
    },
    {
      id: "SUBSISTEMA 02",
      icon: "filter",
      title: "Detector YOLOv8 ajustado",
      body: "Detección de doseles más quemadura en un solo modelo multi-cabeza.",
      implLabel: "Implementación:",
      impl: "Entrenamiento PyTorch con muestreo balanceado y compuerta mAP@50 antes de exportar.",
      outcomeLabel: "Resultado medido:",
      outcome: "94.2% mAP@50 en zonas reservadas",
    },
    {
      id: "SUBSISTEMA 03",
      icon: "encryption",
      title: "Inferencia edge FP16",
      body: "Puntaje en tiempo real en hardware limitado, sin viajes a la nube.",
      implLabel: "Implementación:",
      impl: "Workers FastAPI en Docker con runtime FP16 y batching por zona.",
      outcomeLabel: "Resultado medido:",
      outcome: "14ms mediana por frame",
    },
    {
      id: "SUBSISTEMA 04",
      icon: "tune",
      title: "Ciclo de alertas y nutrientes",
      body: "Caídas de confianza y lesiones disparan webhooks con evidencia anotada.",
      implLabel: "Implementación:",
      impl: "Motor de umbrales con cooldowns y acuses para evitar fatiga de alertas.",
      outcomeLabel: "Resultado medido:",
      outcome: "Respuesta del personal en un turno",
    },
  ],
};

export const solved: TeeoSolved = {
  kicker: "05 // Inmersiones de ingeniería",
  title: "Cómo se resolvieron los problemas difíciles",
  lede: "Brillo, deriva y presupuesto edge — resueltos.",
  cases: [
    {
      challengeLabel: "Reto 01",
      title: "El brillo LED cegaba al modelo",
      problem: "El brillo morado lavaba la textura foliar y desplomaba la precisión diurna.",
      solutionLabel: "La solución",
      solution:
        "Sumé frames con brillo al entrenamiento, con normalización de balance y máscara de brillo en la cadena OpenCV antes de inferir.",
      impactLabel: "Impacto:",
      impact: "Precisión diurna de vuelta a 93%+",
    },
    {
      challengeLabel: "Reto 02",
      title: "Quemadura confundida con sombras",
      problem: "El modelo marcaba sombras inocuas y erosionaba la confianza del personal.",
      solutionLabel: "La solución",
      solution:
        "Cabeza dedicada a lesiones con close-ups más regla de confirmación en dos frames antes de disparar webhooks.",
      impactLabel: "Impacto:",
      impact: "Falsas alertas reducidas 71%",
    },
    {
      challengeLabel: "Reto 03",
      title: "Sin presupuesto para la nube",
      problem: "El Wi-Fi del invernadero hacía la inferencia cloud lenta y frágil.",
      solutionLabel: "La solución",
      solution:
        "Exporté a FP16, agrupé frames por zona y mantuve el ciclo completo en el contenedor edge con búfer local.",
      impactLabel: "Impacto:",
      impact: "14ms sin dependencia de nube",
    },
  ],
};

export const architecture: TeeoArchitecture = {
  kicker: "06 // Topología del sistema",
  title: "Diagrama de arquitectura de alta fidelidad",
  lede: "De los fotones del dosel al webhook del personal sin salir del invernadero.",
  tiers: [
    {
      tier: "NIVEL 1",
      title: "Cámaras por zona",
      subtitle: "6 feeds de dosel",
      body: "Montajes fijos sobre A-01 a B-03 con capturas programadas.",
      footer: "Stills multiespectrales",
    },
    {
      tier: "NIVEL 2 (NÚCLEO)",
      title: "Inferencia edge",
      subtitle: "YOLOv8 FP16",
      body: "Batching por zona, cabezas de lesión y agregación de confianza.",
      footer: "~14ms por frame",
      core: true,
    },
    {
      tier: "NIVEL 3",
      title: "Backend FastAPI",
      subtitle: "Servicio contenerizado",
      body: "Ingesta de frames, orquestación y almacén de snapshots.",
      footer: "Workers en Docker",
    },
    {
      tier: "NIVEL 4",
      title: "Almacén de telemetría",
      subtitle: "Puntajes y frames",
      body: "Series de confianza más evidencia anotada por alerta.",
      footer: "Historial consultable",
    },
    {
      tier: "NIVEL 5",
      title: "Webhooks al personal",
      subtitle: "Alertas y dashboards",
      body: "Despacho por umbral con snapshots y acuses de entrega.",
      footer: "Respuesta en turno",
    },
  ],
  specs: [
    {
      title: "Framework de entrenamiento",
      body: "PyTorch con muestreo balanceado, compuerta mAP@50 y fichas de dataset versionadas.",
    },
    {
      title: "Cadena de visión",
      body: "Balance de blancos OpenCV, máscara de brillo y biomasa antes de detectar.",
    },
    {
      title: "Protocolo de serving",
      body: "Runtime FP16 en Docker con health checks y búfer local de frames.",
    },
  ],
};

export const stack: TeeoStack = {
  kicker: "07 // Ecosistema técnico",
  title: "Stack tecnológico",
  lede: "Elegido por velocidad de entrenamiento y frugalidad edge.",
  categories: [
    {
      icon: "terminal",
      title: "Entrenamiento ML",
      tools: [
        { name: "YOLOv8", note: "Cabezas dosel + lesión" },
        { name: "PyTorch", note: "Pipelines de entreno" },
        { name: "OpenCV", note: "Pre-procesado" },
      ],
    },
    {
      icon: "sync",
      title: "Serving",
      tools: [
        { name: "FastAPI", note: "API de inferencia" },
        { name: "Docker", note: "Contenedores edge" },
        { name: "Runtime FP16", note: "14ms inferencia" },
      ],
    },
    {
      icon: "database",
      title: "Datos y almacén",
      tools: [
        { name: "Python", note: "Pipelines y eval" },
        { name: "Pandas", note: "Agregación de puntajes" },
        { name: "Snapshots", note: "Evidencia de alerta" },
      ],
    },
    {
      icon: "cloud",
      title: "Infra y entrega",
      tools: [
        { name: "Docker", note: "Despliegues inmutables" },
        { name: "Nginx", note: "Proxy edge" },
        { name: "Webhooks", note: "Despacho al personal" },
      ],
    },
    {
      icon: "stats",
      title: "Observabilidad",
      tools: [
        { name: "Paneles de confianza", note: "Tracking por zona" },
        { name: "Medidores de latencia", note: "Presupuesto de frame" },
        { name: "Acuses de alerta", note: "Prueba de entrega" },
      ],
    },
  ],
};

export const challenges: TeeoChallenges = {
  kicker: "08 // Casos borde extremos",
  title: "Obstáculos técnicos de alto impacto",
  lede: "Luz, etiquetas y latencia en el borde del invernadero.",
  items: [
    {
      id: "INVESTIGACIÓN 01",
      title: "Deriva de anotación entre etiquetadores",
      body: "Dos etiquetadores dibujaban doseles distinto y envenenaban validaciones. Introduje auditorías ciegas y un set dorado de referencia.",
      result: "Acuerdo de etiqueta: 0.71 → 0.93 IoU",
    },
    {
      id: "INVESTIGACIÓN 02",
      title: "Cambio día vs noche",
      body: "Los frames nocturnos eran alienígenas para un modelo diurno. Muestreo por ciclo para que cada batch cubra ambos regímenes.",
      result: "Recall nocturno: 61% → 89%",
    },
    {
      id: "INVESTIGACIÓN 03",
      title: "Rezagos durante el riego",
      body: "La niebla empañaba frames y encolaba capturas viejas. Captura con compuerta de nitidez: solo frames nítidos infieren.",
      result: "Rezago obsoleto eliminado",
    },
  ],
};

export const security: TeeoSecurity = {
  kicker: "09 // Robustez endurecida",
  title: "Estándares de robustez de invernadero",
  lede: "El ciclo debe sobrevivir niebla, calor y Wi-Fi inestable.",
  items: [
    {
      icon: "lock",
      title: "Operación local primero",
      body: "El ciclo completo corre en hardware edge; caídas de nube jamás ciegan el invernadero.",
    },
    {
      icon: "key",
      title: "Evidencia anotada",
      body: "Cada alerta lleva snapshot y puntajes para verificar antes de actuar.",
    },
    {
      icon: "encrypted",
      title: "Datasets versionados",
      body: "Cada release fija su ficha de datos; regresiones trazan al entreno exacto.",
    },
    {
      icon: "bug",
      title: "Monitoreo de deriva",
      body: "Distribuciones de confianza por zona; cambios de luz disparan revalidación.",
    },
  ],
};

export const results: TeeoResults = {
  kicker: "10 // Impacto verificado en producción",
  title: "Resultados cuantitativos de escala y rendimiento",
  lede: "Medidos en un ciclo completo de cultivo tras el despliegue.",
  kpis: [
    {
      label: "Precisión del modelo",
      value: "94.2%",
      body: "mAP@50 en zonas reservadas, estable de día y noche.",
    },
    {
      label: "Velocidad de inferencia",
      value: "14ms",
      body: "Mediana FP16 en hardware edge limitado.",
    },
    {
      label: "Frames anotados",
      value: "8.4k+",
      body: "Dataset propio: doseles, brillo y lesiones.",
    },
    {
      label: "Tiempo de rondín",
      value: "-60%",
      body: "Rondines diarios reducidos a revisión de excepciones.",
    },
  ],
  qualitative: [
    {
      icon: "verified",
      title: "Intervenciones tempranas",
      body: "Alertas días antes de la necrosis visible salvan zonas completas.",
    },
    {
      icon: "terminal",
      title: "Aprendizaje de recetas",
      body: "Tendencias de biomasa conectan nutrientes con crecimiento real.",
    },
    {
      icon: "group",
      title: "Confianza del personal",
      body: "Alertas con evidencia convirtieron escépticos en usuarios diarios.",
    },
  ],
};

export const learned: TeeoLearned = {
  kicker: "11 // Sabiduría de ingeniería",
  title: "Lecciones críticas e insights prácticos",
  lede: "Lo que un invernadero enseña sobre ML aplicado.",
  items: [
    {
      title: "Adueña tu distribución",
      body: "Datasets genéricos fallaron bajo LEDs morados. Datos propios por ciclo vencieron cada truco de arquitectura.",
    },
    {
      title: "La alerta es un problema UX",
      body: "Confirmación en dos frames y cooldowns importaron más que otro punto de mAP.",
    },
    {
      title: "El presupuesto edge da claridad",
      body: "14ms y sin nube forzaron un pipeline magro: normalizar, detectar, confirmar, alertar.",
    },
  ],
};

export const roadmap: TeeoRoadmap = {
  kicker: "12 // Hoja de ruta",
  title: "Mejoras futuras de arquitectura",
  lede: "De la detección al cultivo en ciclo cerrado.",
  items: [
    {
      title: "Runtimes ONNX INT8",
      body: "Exportes cuantizados para Raspberry Pi y Jetson con aún menos watts.",
    },
    {
      title: "Índices multiespectrales",
      body: "Estrés temprano desde bandas extra antes de síntomas visibles.",
    },
    {
      title: "Ciclo cerrado de nutrientes",
      body: "Deltas de biomasa directo a dosificadores, con guardarraíles agronómicos.",
    },
  ],
};

export const summary: TeeoSummary = {
  eyebrow: "Resumen ejecutivo para líderes de ingeniería",
  title: "De libretas a inteligencia de dosel, resuelto.",
  body: "Lettuce Vision reemplazó el ojo diario con inferencia edge YOLOv8 a 94.2% mAP@50 y 14ms por frame, recortando rondines 60% en un ciclo completo.",
  tags: ["YOLOv8", "OpenCV", "PyTorch", "FastAPI", "Docker"],
  downloadLabel: "Descargar caso de estudio PDF",
  contactLabel: "Contactar al desarrollador líder",
};

export const explore: TeeoExplore = {
  eyebrow: "14 // Verificación del proyecto",
  title: "Inspecciona el código y la telemetría",
  lede: "Revisa el notebook, lee el benchmark o vuelve a la consola en vivo.",
  telemetryLabel: "Abrir consola de telemetría",
  sourceLabel: "Espejo en GitHub",
  rfcLabel: "Solicitar brief de arquitectura",
};

export const pager: TeeoPager = {
  prevLabel: "Proyecto anterior",
  prevTitle: "Gestión de Archivos TEEO",
  prevSubtitle: "Archivo de alto cumplimiento",
  indexLabel: "Ver todos los proyectos",
  nextLabel: "Proyecto siguiente",
  nextTitle: "Recuperación RAG",
  nextSubtitle: "Motor semántico",
};
