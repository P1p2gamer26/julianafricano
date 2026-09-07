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
    role: 'Ingeniería de Computación e Ingeniería Eléctrica/Industrial',
    desc: 'Estudiante universitario cursando Programación Avanzada, Estructuras de Datos, Machine Learning, Sistemas Distribuidos y Desarrollo de Software. Formación constante en IA, datos y desarrollo web.',
    tags: ['IA', 'Datos', 'Desarrollo web', 'Ingeniería'],
  },
  {
    period: '2026',
    title: 'LIDA UJAP · CEO',
    role: 'Laboratorio de Innovación y Desarrollo',
    desc: 'Liderazgo de un laboratorio estudiantil de innovación: coordinación de equipos, definición de visión tecnológica y desarrollo de productos experimentales. "Developing the future."',
    tags: ['Liderazgo', 'Innovación', 'Emprendimiento'],
  },
  {
    period: '2026',
    title: 'SysteFarma',
    role: 'Desarrollo full-stack · Deploy en producción',
    desc: 'Diseñé y desplegué una plataforma web para gestión sanitaria y operativa de droguerías colombianas, hoy en producción con dominios reales, PostgreSQL y CDN.',
    tags: ['Django', 'PostgreSQL', 'Nginx', 'DevOps'],
  },
  {
    period: '2026',
    title: 'Asistencia GABO',
    role: 'Sistema en producción · Colegio Gabriel García Márquez',
    desc: 'Construí una PWA offline-first de asistencia escolar para 1.200 estudiantes con sincronización automática, roles, planillas de horario y reportes. Desplegable en múltiples plataformas.',
    tags: ['React', 'Spring Boot', 'PWA', 'PostgreSQL'],
  },
  {
    period: '2026',
    title: 'GO FEST 2026 · Ágora Bogotá',
    role: 'Festival de Emprendimiento e Innovación',
    desc: 'Asistí y reporté el festival de innovación más relevante del año en Colombia, profundizando en cómo construir startups con IA, fintech y métricas de negocio.',
    tags: ['Startups', 'IA', 'Innovación'],
  },
  {
    period: '2026',
    title: 'CodeFest 2026',
    role: 'Participante · Hackathon',
    desc: 'Participación en maratón de programación desarrollando soluciones con Python e IA en un formato de competencia y trabajo en equipo.',
    tags: ['Hackathon', 'Python', 'IA'],
  },
  {
    period: '2017 — 2023',
    title: 'Inicios · Aprendizaje autodidacta',
    role: 'De HTML a Machine Learning',
    desc: 'Comencé con HTML y CSS, dominé JavaScript, subí a React, Next.js y Astro; exploré IoT con ESP32, Arduino y Raspberry Pi; entré a los datos con NumPy, Pandas y Matplotlib y al ML con redes neuronales.',
    tags: ['Autodidacta', 'Web', 'IoT', 'ML'],
  },
];