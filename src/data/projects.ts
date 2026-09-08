export type Project = {
  name: string;
  tagline: string;
  desc: string;
  badges: string[];
  category: 'prod' | 'ai' | 'academic';
  repo?: string;
  url?: string;
  tech: string[];
  featured?: boolean;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    name: 'vision-analytics',
    tagline: 'Startup de visión por computadora para tiendas físicas',
    desc: 'Analítica con cámaras y video para retail: aforo, filas, zonas y cobertura de personal en tiempo real. Detección con YOLOv8 sobre cámaras RTSP (o video), panel web con métricas y recomendaciones diarias generadas por un LLM. Privacidad por diseño: procesa en local, sin guardar video.',
    badges: ['STARTUP', 'IA & VISIÓN', 'PRODUCCIÓN'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/vision-analytics',
    tech: ['YOLOv8', 'OpenCV', 'RTSP', 'supervision', 'LLM (Anthropic)', 'Django', 'React', 'PostgreSQL', 'Docker'],
    featured: true,
    gallery: [
      '/proyectos/camaras/super_caja-1.jpg',
      '/proyectos/camaras/tienda_iprox-1.jpg',
      '/proyectos/camaras/tienda_usa-1.jpg',
      '/proyectos/camaras/super_caja-2.jpg',
      '/proyectos/camaras/tienda_iprox-3.jpg',
    ],
  },
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
      '/proyectos/systefarma/systefarma-home.png',
      '/proyectos/systefarma/evidencia-sgc.jpg',
      '/proyectos/systefarma/acciones-sociales.jpg',
    ],
  },
  {
    name: 'Asistencia GABO',
    tagline: 'Asistencia offline-first para 1.200 estudiantes',
    desc: 'PWA de asistencia para el Colegio Gabriel García Márquez: marcación sin conexión con sincronización automática, planillas de horario, portal de acudientes y reportes. Escala a ~620.000 registros por semestre.',
    badges: ['EN PRODUCCIÓN', 'PWA', 'EDU'],
    category: 'prod',
    repo: 'https://github.com/P1p2gamer26/Asistencia_GABO',
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
    name: 'Sistema POS / Inventario',
    tagline: 'Punto de venta y trazabilidad de inventario',
    desc: 'POS con inventario por lotes, fechas de vencimiento, códigos de barras y cierre de caja. Pensado para el manejo de medicamentos y la trazabilidad sanitaria.',
    badges: ['FULL-STACK', 'PRODUCTO'],
    category: 'prod',
    repo: 'https://github.com/P1p2gamer26/SistemaPos',
    tech: ['Python', 'Django', 'JS', 'POS', 'Inventario'],
  },
  {
    name: 'CICD',
    tagline: 'Pipeline de integración y despliegue continuo',
    desc: 'CI/CD completo: build, pruebas automatizadas y despliegue con notificación de estado del pipeline.',
    badges: ['DEVOPS'],
    category: 'academic',
    repo: 'https://github.com/P1p2gamer26/CICD',
    tech: ['CI/CD', 'Git', 'Docker', 'GitHub Actions'],
  },
  {
    name: 'ProyectoIA3 · ProyectoIA4',
    tagline: 'Machine Learning supervisado y no supervisado',
    desc: 'Modelos de clasificación y regresión con scikit-learn sobre datasets reales.',
    badges: ['ML', 'PYTHON'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/ProyectoIA3',
    tech: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    name: 'TicTacToeIA',
    tagline: 'Tres en línea contra una máquina',
    desc: 'Juego implementado en Java con estrategias minimax y heurísticas para la IA.',
    badges: ['IA', 'JAVA'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/TicTacToeIA',
    tech: ['Java', 'Minimax', 'Algoritmos'],
  },
  {
    name: 'Zoo fantástico · Hotel Macondo',
    tagline: 'Proyectos académicos web',
    desc: 'Catálogo educativo y sistema de hotel con HTML/CSS/JS y persistencia en localStorage.',
    badges: ['WEB', 'CRUD'],
    category: 'academic',
    repo: 'https://github.com/P1p2gamer26',
    tech: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
  },
];