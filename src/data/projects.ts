export type Project = {
  name: string;
  tagline: string;
  desc: string;
  badges: string[];
  category: 'prod' | 'academic' | 'iot' | 'ai';
  repo?: string;
  url?: string;
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'SysteFarma',
    tagline: 'Plataforma web para droguerías colombianas',
    desc: 'Sistema integral de gestión normativa y operativa para droguerías: registros sanitarios GIRASA/SGC, documentación, notificaciones por WhatsApp y Telegram, reportes en PDF y una app móvil tipo PWA. Arquitectura Django REST + frontend SPA vanilla, desplegada en producción con PostgreSQL, Gunicorn, Nginx y Cloudflare.',
    badges: ['PRODUCCIÓN', 'FULL-STACK', 'SaaS'],
    category: 'prod',
    url: 'https://systefarma.com',
    repo: 'https://github.com/P1p2gamer26/Drogueria_try',
    tech: ['Python', 'Django 5', 'DRF', 'PostgreSQL', 'JWT', 'PWA', 'Nginx', 'Cloudflare', 'Gunicorn'],
    featured: true,
  },
  {
    name: 'Asistencia GABO',
    tagline: 'Asistencia escolar offline-first para 1.200 estudiantes',
    desc: 'PWA de registro de asistencia para el Colegio Gabriel García Márquez: marcación sin conexión con sincronización automática, planilla de horarios, portal de acudientes y reportes en Excel. Escalado para ~620.000 registros por semestre con backend en Spring Boot y PostgreSQL.',
    badges: ['PRODUCCIÓN', 'PWA', 'EDU'],
    category: 'prod',
    repo: 'https://github.com/P1p2gamer26/Asistencia_GABO',
    tech: ['React 18', 'TypeScript', 'Vite', 'Spring Boot 3', 'Java 21', 'PostgreSQL 16', 'Docker', 'GitHub Actions'],
    featured: true,
  },
  {
    name: 'Sistema POS / Inventario',
    tagline: 'Punto de venta y trazabilidad de inventario',
    desc: 'Sistema de punto de venta con control de inventario por lotes, fechas de vencimiento, códigos de barras y cierre de caja. Diseñado para el manejo de medicamentos y la trazabilidad exigida por la normativa sanitaria.',
    badges: ['FULL-STACK', 'PRODUCTO'],
    category: 'prod',
    repo: 'https://github.com/P1p2gamer26/SistemaPos',
    tech: ['Python', 'Django', 'JS', 'dB', 'POS', 'Inventario'],
  },
  {
    name: 'Termopilas IoT',
    tagline: 'Control de acceso con RFID / NFC',
    desc: 'Sistema de control de acceso con tarjetas RFID/NFC sobre ESP32 que consume una API para permitir o negar la entrada. Incluye una librería Arduino propia para el módulo PN532 (SPI/I2C).',
    badges: ['HARDWARE', 'RFID'],
    category: 'iot',
    repo: 'https://github.com/JAfricanoT/termopilas-iot',
    tech: ['ESP32', 'C++', 'Arduino', 'PN532', 'RFID', 'NFC', 'REST API'],
    featured: true,
  },
  {
    name: 'CICD',
    tagline: 'Pipeline de integración y despliegue continuo',
    desc: 'Implementación de un pipeline CI/CD completo: build, pruebas automatizadas y despliegue. Integración con repositorios de GitHub y notificación de estado del pipeline.',
    badges: ['DEVOPS'],
    category: 'academic',
    repo: 'https://github.com/P1p2gamer26/CICD',
    tech: ['CI/CD', 'Git', 'Docker', 'DevOps'],
  },
  {
    name: 'ProyectoIA3 · ProyectoIA4',
    tagline: 'Machine Learning y aprendizaje supervisado',
    desc: 'Implementación de modelos de aprendizaje automático supervisado y no supervisado con scikit-learn: clasificación, regresión y análisis de resultados sobre datasets reales.',
    badges: ['ML', 'PYTHON'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/ProyectoIA3',
    tech: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'ML'],
  },
  {
    name: 'TicTacToeIA',
    tagline: 'Tres en línea contra una máquina',
    desc: 'Juego de tres en línea implementado en Java con algoritmos de decisión para la IA, mostrando la evolución de estrategias mínimax y heurísticas.',
    badges: ['IA', 'JAVA'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/TicTacToeIA',
    tech: ['Java', 'Minimax', 'Algoritmos'],
  },
  {
    name: 'gaussapp-front',
    tagline: 'Frontend para calculadora de sistemas de ecuaciones',
    desc: 'Aplicación web con JavaScript que resuelve sistemas de ecuaciones lineales por método de Gauss. Frontend académico con UI interactiva.',
    badges: ['WEB', 'JS'],
    category: 'academic',
    repo: 'https://github.com/JAfricanoT/gaussapp-front',
    tech: ['JavaScript', 'HTML/CSS', 'Algoritmos'],
  },
  {
    name: 'nanoWallet',
    tagline: 'Billetera digital en Python',
    desc: 'Prototipo de billetera digital/cripto desarrollado en Python con manejo de transacciones, estructura de datos y persistencia.',
    badges: ['PYTHON', 'FINTECH'],
    category: 'academic',
    repo: 'https://github.com/JAfricanoT/nanoWallet',
    tech: ['Python', 'Web3', 'Fintech'],
  },
  {
    name: 'reservacion-ktl',
    tagline: 'Sistema de reservas en Python',
    desc: 'Aplicación académica de reservas (hotel/espacios) con lógica de negocio en Python, capas de datos y validaciones.',
    badges: ['PYTHON', 'CRUD'],
    category: 'academic',
    repo: 'https://github.com/JAfricanoT/reservacion-ktl',
    tech: ['Python', 'CRUD'],
  },
  {
    name: 'Archfrican',
    tagline: 'Toolkit personal y automatización',
    desc: 'Colección de scripts de shell y dotfiles para automatizar mi entorno de desarrollo y tareas repetitivas.',
    badges: ['SHELL', 'TOOLS'],
    category: 'academic',
    repo: 'https://github.com/JAfricanoT/Archfrican',
    tech: ['Shell', 'Zsh', 'Automación'],
  },
  {
    name: 'vision-analytics',
    tagline: 'Visión por computadora y analítica',
    desc: 'Prototipo de análisis visual con OpenCV: procesamiento de imágenes y video para extraer métricas útiles en aplicaciones de monitoreo.',
    badges: ['VISIÓN', 'OPENCV'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/vision-analytics',
    tech: ['Python', 'OpenCV', 'NumPy'],
  },
  {
    name: 'Zoo fantástico · Hotel Macondo',
    tagline: 'Proyectos académicos web',
    desc: 'Proyectos base de desarrollo web con HTML/CSS/JS: catálogo educativo y sistema de hotel con formularios y persistencia en localStorage.',
    badges: ['WEB', 'CRUD'],
    category: 'academic',
    repo: 'https://github.com/P1p2gamer26',
    tech: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
  },
  {
    name: 'mc-simulaciones · 3dcube',
    tagline: 'Experimentos CSS/JS 3D',
    desc: 'Experimentos con CSS 3D y JavaScript: cubo 3D giratorio y simulaciones interactivas para aprender matemáticas y diseño en el navegador.',
    badges: ['CSS3D', 'JS'],
    category: 'academic',
    repo: 'https://github.com/JAfricanoT',
    tech: ['CSS', 'JavaScript', 'Canvas'],
  },
];