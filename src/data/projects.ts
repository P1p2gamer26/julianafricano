export type Project = {
  name: string;
  tagline: string;
  desc: string;
  badges: string[];
  category: 'prod' | 'ai';
  repo?: string;
  url?: string;
  tech: string[];
  featured?: boolean;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    name: 'SysteFarma',
    tagline: 'Plataforma en producción para droguerías colombianas',
    desc: 'Cofundador técnico (desarrollo freelance): cumplimiento regulatorio Res. 591/2024 y 1403/2007, PGIRASA, auditorías, indicadores, contratos con firma electrónica, PQRSF con QR y módulo de rutas de evacuación. Droguerías reales pagan por el servicio.',
    badges: ['EN PRODUCCIÓN', 'FREELANCE', 'FULL-STACK'],
    category: 'prod',
    url: 'https://systefarma.com',
    repo: 'https://github.com/P1p2gamer26/Drogueria_try',
    tech: ['Python', 'Django 5', 'DRF', 'PostgreSQL', 'JWT', 'PWA', 'Nginx', 'Cloudflare'],
    featured: true,
    gallery: [
      '/proyectos/systefarma/hero.jpg',
      '/proyectos/systefarma/panel.jpg',
      '/proyectos/systefarma/modulos.jpg',
      '/proyectos/systefarma/normativa.jpg',
    ],
  },
  {
    name: 'Asistencia GABO',
    tagline: 'Asistencia offline-first para 1.200 estudiantes',
    desc: 'PWA de asistencia para el Colegio Gabriel García Márquez: marcación sin conexión con sincronización automática, planillas de horario, portal de acudientes y reportes. Escala a ~620.000 registros por semestre.',
    badges: ['EN PRODUCCIÓN', 'PWA', 'EDU'],
    category: 'prod',
    repo: 'https://github.com/P1p2gamer26/Asistencia_GABO',
    url: 'https://asistencia-ggm.onrender.com/',
    tech: ['React 18', 'TypeScript', 'Vite', 'Spring Boot 3', 'Java 21', 'PostgreSQL 16', 'Docker'],
    featured: true,
    gallery: [
      '/proyectos/gabo/dashboard.png',
      '/proyectos/gabo/asistencia.png',
      '/proyectos/gabo/calendario.png',
      '/proyectos/gabo/tablero.png',
    ],
  },
  {
    name: 'Vision Analytics',
    tagline: 'Proyecto de IA y visión por computadora para retail',
    desc: 'Analítica con cámaras y video para retail: aforo, filas, zonas y cobertura de personal en tiempo real. Detección con YOLOv8 sobre cámaras RTSP (o video), panel web con métricas y recomendaciones generadas por un LLM. Procesamiento local.',
    badges: ['IA & VISIÓN'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/vision-analytics',
    tech: ['YOLOv8', 'OpenCV', 'RTSP', 'supervision', 'LLM (Anthropic)', 'Django', 'React', 'PostgreSQL', 'Docker'],
    gallery: [
      '/proyectos/camaras/super_caja-1.jpg',
      '/proyectos/camaras/tienda_iprox-1.jpg',
      '/proyectos/camaras/tienda_usa-1.jpg',
      '/proyectos/camaras/super_caja-2.jpg',
      '/proyectos/camaras/tienda_iprox-3.jpg',
    ],
  },
  {
    name: 'DataJam · CODEFEST',
    tagline: 'Datos abiertos y recuperación de información',
    desc: 'Dos retos de 2026: el DataJam de Bogotá (riesgo de suicidio y salud mental con series temporales SARIMA/Holt-Winters sobre datos abiertos del Distrito) y el CODEFEST AD ASTRA (sistema de recuperación con FAISS y tres encoders en cascada, F1@3 0.499).',
    badges: ['DATOS', 'IA', 'RETRIEVAL'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/CODEFEST_2026-1',
    tech: ['Pandas', 'SARIMA', 'FAISS', 'HuggingFace', 'scikit-learn'],
  },
  {
    name: 'SketchRoute',
    tagline: 'Fotos de croquis convertidas en planos de evacuación',
    desc: 'Pipeline de OpenCV que vectoriza croquis dibujados a mano (paredes, puertas, muebles), editor con Fabric.js y rutas de evacuación/sanitarias automáticas con A* en el navegador. Exporta a PDF. En uso por droguerías para rutas sanitarias reales.',
    badges: ['VISIÓN', 'PYTHON', 'WEB'],
    category: 'ai',
    repo: 'https://github.com/CaroUjueta/SketchRoute',
    tech: ['Django 5', 'OpenCV', 'Fabric.js', 'A*', 'PDF'],
    gallery: [
      '/proyectos/sketchroute/editor-rutas.png',
      '/proyectos/sketchroute/lista.png',
    ],
  },
  {
    name: 'Sistema POS',
    tagline: 'Punto de venta e inventario con trazabilidad',
    desc: 'POS multi-tienda para droguerías: venta con FEFO, inventario por lotes y vencimientos, PWA offline-first con cola de ventas y deduplicación por UUID, y webhooks que lo integran con SysteFarma.',
    badges: ['EN PRODUCCIÓN', 'PWA', 'OFFLINE-FIRST'],
    category: 'prod',
    repo: 'https://github.com/P1p2gamer26/SistemaPos',
    tech: ['Python', 'Django', 'SPA', 'FEFO', 'Webhooks'],
    gallery: [
      '/proyectos/pos/pos-venta.png',
      '/proyectos/pos/pos-dashboard.png',
      '/proyectos/pos/pos-inventario.png',
      '/proyectos/pos/pos-ventas.png',
    ],
  },
];