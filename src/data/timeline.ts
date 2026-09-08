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
    desc: 'Estudiante de Ingeniería de Computación cursando programación avanzada, estructuras de datos, machine learning y sistemas distribuidos.',
    tags: ['IA', 'Datos', 'Ingeniería'],
  },
  {
    period: '2026',
    title: 'SysteFarma',
    role: 'Plataforma en producción · Full-stack',
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
    title: 'DataJam · 2º puesto',
    role: 'Datos abiertos · Alcaldía de Bogotá · IDECA',
    desc: 'Segundo puesto en el DataJam, competencia de innovación pública con datos abiertos del Distrito organizada por la Secretaría General de la Alcaldía de Bogotá junto a IDECA y la Javeriana: diagnóstico basado en evidencia y propuesta de valor público.',
    tags: ['Datos', 'IA', 'Innovación pública'],
  },
  {
    period: '2026',
    title: 'GO FEST 2026 · CodeFest',
    role: 'Innovación y hackathones',
    desc: 'Participación en el festival de emprendimiento e innovación de Bogotá y maratones de programación con Python e IA.',
    tags: ['Hackathon', 'IA'],
  },
  {
    period: '2017 — 2023',
    title: 'Inicios · Autodidacta',
    role: 'De HTML a Machine Learning',
    desc: 'Comencé con HTML y CSS, dominé JavaScript y llegué a React y Astro; entré a los datos y al ML con Python. Hasta construir sistemas completos para usuarios reales.',
    tags: ['Autodidacta', 'Web', 'Python', 'ML'],
  },
];
