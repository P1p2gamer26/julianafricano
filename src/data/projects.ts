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
    desc: 'Gestión normativa y operativa para droguerías: registros GIRASA/SGC, documentación, avisos, reportes en PDF y notificaciones por WhatsApp. Desplegada con PostgreSQL, Nginx y Cloudflare.',
    badges: ['EN PRODUCCIÓN', 'FULL-STACK', 'SaaS'],
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
    name: 'DataJam · 2º puesto',
    tagline: 'Innovación pública con datos abiertos de Bogotá',
    desc: 'Segundo puesto en el DataJam: diagnóstico con datos públicos del Portal de Datos Abiertos de Bogotá y propuesta de valor para la ciudad. Competencia de la Secretaría General de la Alcaldía de Bogotá con IDECA y la Pontificia Universidad Javeriana.',
    badges: ['2º PUESTO', 'DATOS', 'IA'],
    category: 'ai',
    tech: ['Python', 'Pandas', 'Visualización', 'Datos Abiertos'],
    featured: true,
  },
  {
    name: 'SketchRoute',
    tagline: 'Rutas sanitarias y de evacuación en producción',
    desc: 'Convierte croquis de estructuras dibujados a mano en planos de evacuación editables con generación automática de rutas. Herramienta de trazado de rutas sanitarias y de escape para establecimientos, en producción.',
    badges: ['EN PRODUCCIÓN', 'VISIÓN', 'PYTHON'],
    category: 'ai',
    repo: 'https://github.com/CaroUjueta/SketchRoute',
    tech: ['Python', 'Visión por computadora', 'Procesamiento de imágenes', 'Rutas de escape'],
    featured: true,
  },
  {
    name: 'Sistema POS / Inventario',
    tagline: 'Punto de venta y trazabilidad de inventario',
    desc: 'POS con inventario por lotes, fechas de vencimiento, códigos de barras y cierre de caja. Pensado para el manejo de medicamentos y la trazabilidad sanitaria.',
    badges: ['FULL-STACK', 'PRODUCTO'],
    category: 'prod',
    repo: 'https://github.com/P1p2gamer26/SistemaPos',
    tech: ['Python', 'Django', 'JS', 'POS', 'Inventario'],
  },
];