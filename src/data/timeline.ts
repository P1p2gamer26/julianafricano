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
    role: 'Ingeniería de Sistemas y Ciencia de Datos · 6.º semestre',
    desc: 'Estudiante de Ingeniería de Sistemas y Ciencia de Datos, con foco en programación avanzada, ML, datos y sistemas distribuidos.',
    tags: ['IA', 'Datos', 'Ingeniería'],
  },
  {
    period: 'Ago 2025 — Actualidad',
    title: 'Monitor de Programación Avanzada',
    role: 'Pontificia Universidad Javeriana',
    desc: 'Acompaño estudiantes en estructuras de datos y buenas prácticas en C++ y Java: sesiones de depuración, evaluación de talleres y material propio de repaso que varios usaron para aprobar (dos semestres).',
    tags: ['C++', 'Java', 'Mentoría'],
  },
  {
    period: 'Ene 2026 — Actualidad',
    title: 'SysteFarma',
    role: 'Cofundador técnico · Desarrollo freelance',
    desc: 'Cofundador técnico de la plataforma: cumplimiento regulatorio (Res. 591/2024, Res. 1403/2007), PGIRASA, auditorías, indicadores, contratos con firma electrónica, PQRSF con QR y módulo de rutas de evacuación. En producción con droguerías reales pagando por el servicio.',
    tags: ['Django', 'PostgreSQL', 'Nginx', 'DevOps'],
  },
  {
    period: '2026',
    title: 'Asistencia GABO',
    role: 'Sistema en producción · Colegio Gabriel García Márquez',
    desc: 'PWA offline-first de asistencia escolar para 1.200 estudiantes con sincronización automática y reportes por semestre.',
    tags: ['React', 'Spring Boot', 'PWA', 'PostgreSQL'],
  },
  {
    period: '2026',
    title: 'Bogotá DataJam · IDECA',
    role: 'Participante · Análisis territorial',
    desc: 'Análisis territorial del riesgo de suicidio y salud mental en Bogotá con datos abiertos del Distrito: cruce de fuentes, índices de riesgo y proyección temporal con SARIMA y Holt-Winters.',
    tags: ['Datos', 'Salud mental', 'SARIMA'],
  },
  {
    period: '2026',
    title: 'CODEFEST AD ASTRA',
    role: 'Hackathon IA/ML · Uniandes / FF.MM.',
    desc: 'Sistema de recuperación de información: embeddings en cascada (MiniLM → GTE → E5), índice FAISS y grafo de 224.101 nodos. F1@3 0.499 · NDCG@10 0.558.',
    tags: ['Python', 'FAISS', 'NLP', 'Hackathon'],
  },
  {
    period: 'Ene — Nov 2024',
    title: 'Cymetrical Metrología y Calibraciones S.A.S.',
    role: 'Desarrollador de automatización',
    desc: 'Motor de automatización masiva en VBA/Excel: genera carpetas, archivos y documentos corporativos desde una base de datos y plantillas. Eliminó errores de digitación y redujo los tiempos del área de documentación. Sigue en uso activo.',
    tags: ['VBA', 'Excel', 'Automatización'],
  },
  {
    period: '2017 — 2023',
    title: 'Inicios · Autodidacta',
    role: 'De HTML a Machine Learning',
    desc: 'Comencé con HTML y CSS, dominé JavaScript y llegué a React y Astro; entré a los datos y al ML con Python. Hasta construir sistemas completos para usuarios reales.',
    tags: ['Autodidacta', 'Web', 'Python', 'ML'],
  },
];