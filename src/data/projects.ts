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
    name: 'SysteFarma',
    tagline: 'Plataforma en producción para droguerías colombianas',
    desc: 'Gestiona la documentación normativa y operativa de droguerías (GIRASA/SGC): avisos, reportes en PDF y notificaciones por WhatsApp. La desarrollo y mantengo como freelance, desplegada con PostgreSQL, Nginx y Cloudflare.',
    badges: ['EN PRODUCCIÓN', 'FREELANCE', 'FULL-STACK', 'SaaS'],
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
  {
    name: 'CODEFEST 2026',
    tagline: 'Recuperación de información con búsqueda vectorial',
    desc: 'Sistema de recuperación: indexación con embeddings en cascada (MiniLM → GTE → E5), grafo de 224.101 nodos y 754.876 aristas. F1@3 0.499, NDCG@10 0.558 y 189 tests.',
    badges: ['IA', 'NLP', 'HACKATHON'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/CODEFEST_2026-1',
    tech: ['Python', 'FAISS', 'HuggingFace', 'Streamlit', 'Retrieval'],
  },
  {
    name: 'Proyecto IA 4',
    tagline: 'ML para la salud pública de Bogotá',
    desc: 'Clasificación de riesgo de conducta suicida con datos abiertos de la Secretaría Distrital de Salud (~254.000 casos 2012–2026): EDA, Random Forest, SVM y MLP.',
    badges: ['IA', 'ML', 'DATOS'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/ProyectoIA4',
    tech: ['Python', 'Pandas', 'scikit-learn'],
  },
  {
    name: 'Huntrix Marrakech',
    tagline: 'Juego de mesa Marrakech en tiempo real',
    desc: 'Multijugador online por turnos del juego Marrakech: lobby, chat y ranking con WebSockets en una sola sesión, clientes de escritorio con JavaFX.',
    badges: ['TIEMPO REAL', 'MULTIJUGADOR'],
    category: 'academic',
    repo: 'https://github.com/P1p2gamer26/Huntrix_Fis',
    tech: ['Java', 'Spring Boot', 'WebSockets', 'JavaFX'],
  },
  {
    name: 'Automatización Documental',
    tagline: 'Paquetes normativos generados en masa',
    desc: 'Motor VBA que genera masivamente los paquetes documentales PGIRASA/SGC/PIP para los clientes de Cymetrical Metrología y Calibraciones (droguerías, laboratorios, salud). En uso real.',
    badges: ['EN PRODUCCIÓN', 'AUTOMATIZACIÓN'],
    category: 'prod',
    repo: 'https://github.com/P1p2gamer26/Automatizacion_Formatos_Pgiraza-SGC',
    tech: ['VBA', 'Excel', 'Word', 'PGIRASA', 'SGC'],
  },
  {
    name: 'Ecommerce Android',
    tagline: 'Tienda móvil con Jetpack Compose',
    desc: 'App de e-commerce en Kotlin con Compose: catálogo, carrito y navegación tipada con Material 3.',
    badges: ['MOBILE', 'KOTLIN', 'COMPOSE'],
    category: 'academic',
    repo: 'https://github.com/P1p2gamer26/Taller1-Ecommerce-Android',
    tech: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Coil'],
  },
];