export type TimelineItem = {
  period: string;
  title: string;
  role: string;
  desc: string;
  tags: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: 'Actualidad',
    title: 'Pontificia Universidad Javeriana — Bogotá',
    role: 'Ingeniería de Sistemas · Computación',
    desc: 'Estudiante de Ingeniería de Computación cursando programación avanzada, estructuras de datos, machine learning y sistemas distribuidos. CEO del laboratorio de innovación LIDA UJAP.',
    tags: ['IA', 'Datos', 'Ingeniería', 'Liderazgo'],
  },
  {
    period: '2026',
    title: 'vision-analytics',
    role: 'Startup · Drives visión por computadora',
    desc: 'Fundador de una startup de analítica para tiendas físicas: YOLOv8 sobre cámaras RTSP, panel web en tiempo real y recomendaciones con LLM. Privacidad por diseño, procesamiento local.',
    tags: ['YOLOv8', 'RTSP', 'LLM', 'Startup'],
  },
  {
    period: '2026',
    title: 'SysteFarma',
    role: 'Desarrollo full-stack · Deploy en producción',
    desc: 'Plataforma de gestión sanitaria y operativa para droguerías colombianas, en producción con dominios reales, PostgreSQL y CDN.',
    tags: ['Django', 'PostgreSQL', 'Nginx', 'DevOps'],
  },
  {
    period: '2026',
    title: 'Asistencia GABO',
    role: 'Sistema en producción · Colegio Gabriel García Márquez',
    desc: 'PWA offline-first de asistencia escolar para 1.200 estudiantes con sincronización automática y reportes.',
    tags: ['React', 'Spring Boot', 'PWA', 'PostgreSQL'],
  },
  {
    period: '2026',
    title: 'LIDA UJAP · CEO',
    role: 'Laboratorio de Innovación y Desarrollo',
    desc: 'Liderazgo de un laboratorio estudiantil: coordinación de equipos, visión tecnológica y productos experimentales.',
    tags: ['Liderazgo', 'Innovación', 'Emprendimiento'],
  },
  {
    period: '2026',
    title: 'GO FEST 2026 · CodeFest',
    role: 'Innovación y hackathones',
    desc: 'Participación en el festival de emprendimiento e innovación de Bogotá y maratones de programación con Python e IA.',
    tags: ['Startups', 'Hackathon', 'IA'],
  },
  {
    period: '2017 — 2023',
    title: 'Inicios · Autodidacta',
    role: 'De HTML a Machine Learning',
    desc: 'Comencé con HTML y CSS, dominé JavaScript y llegué a React y Astro; entré a los datos y al ML con Python. Hasta construir sistemas completos para usuarios reales.',
    tags: ['Autodidacta', 'Web', 'Python', 'ML'],
  },
];