export type LangCode = 'es' | 'en';

export const LANGUAGES: { code: LangCode; label: string; htmlLang: string }[] = [
  { code: 'es', label: 'Español', htmlLang: 'es-CO' },
  { code: 'en', label: 'English', htmlLang: 'en' },
];

export const DEFAULT_LANG: LangCode = 'es';

export const translations: Record<string, Record<LangCode, string>> = {
  'meta.title': {
    es: '{name} — {role}',
    en: '{name} — {role}',
  },
  'meta.role': {
    es: 'Ingeniero de Sistemas · Ciencia de Datos · Full-Stack',
    en: 'Systems Engineer · Data Science · Full-Stack',
  },
  'meta.desc': {
    es: 'Portafolio profesional de Julian Felipe Africano Preciado: Ingeniero de Sistemas, desarrollador Full-Stack e IA. Plataformas en producción como SysteFarma. Bogotá, Colombia.',
    en: 'Professional portfolio of Julian Felipe Africano Preciado: Systems Engineer, Full-Stack & AI developer. Production platforms like SysteFarma. Bogotá, Colombia.',
  },

  'nav.navAria': {
    es: 'Navegación principal',
    en: 'Main navigation',
  },
  'nav.logoAria': {
    es: 'Inicio',
    en: 'Home',
  },
  'nav.inicio': {
    es: 'Inicio',
    en: 'Home',
  },
  'nav.sobre': {
    es: 'Sobre mí',
    en: 'About',
  },
  'nav.stack': {
    es: 'Stack',
    en: 'Stack',
  },
  'nav.proyectos': {
    es: 'Proyectos',
    en: 'Projects',
  },
  'nav.trayectoria': {
    es: 'Trayectoria',
    en: 'Journey',
  },
  'nav.contacto': {
    es: 'Contáctame',
    en: 'Contact me',
  },
  'nav.menuOpen': {
    es: 'Abrir menú',
    en: 'Open menu',
  },
  'nav.themeGroup': {
    es: 'Cambiar tema',
    en: 'Change theme',
  },
  'theme.morado': {
    es: 'Tema morado',
    en: 'Purple theme',
  },
  'theme.claro': {
    es: 'Tema claro',
    en: 'Light theme',
  },
  'theme.oscuro': {
    es: 'Tema oscuro',
    en: 'Dark theme',
  },
  'lang.selectAria': {
    es: 'Cambiar idioma',
    en: 'Change language',
  },

  'hero.status': {
    es: 'Disponible para nuevos proyectos',
    en: 'Available for new projects',
  },
  'hero.title': {
    es: 'Ingeniero de <span class="grad-text">Sistemas</span> y <span class="grad-text">Ciencia de Datos</span><br />Full-Stack · IA · Visión por computadora',
    en: '<span class="grad-text">Systems</span> Engineer &amp; <span class="grad-text">Data Science</span><br />Full-Stack · AI · Computer Vision',
  },
  'hero.lead': {
    es: 'Construyo productos de punta a punta y he desplegado <strong>plataformas en producción</strong> como SysteFarma — que desarrollo como <strong>freelance</strong> — y Asistencia GABO. De la idea al deploy en producción.',
    en: 'I build end-to-end products and have shipped <strong>production platforms</strong> such as SysteFarma — which I develop as a <strong>freelancer</strong> — and Asistencia GABO. From idea to production deploy.',
  },
  'hero.cta.proyectos': {
    es: 'Ver proyectos',
    en: 'View projects',
  },
  'hero.cta.cv': {
    es: 'Descargar CV',
    en: 'Download CV',
  },
  'hero.cta.contacto': {
    es: 'Contáctame',
    en: 'Contact me',
  },
  'hero.meta.sistemas': {
    es: 'Sistemas · Datos · IA',
    en: 'Systems · Data · AI',
  },
  'hero.meta.formulario': {
    es: 'Escríbeme por el formulario',
    en: 'Write to me via the form',
  },
  'hero.photoAlt': {
    es: 'Retrato de Julian Felipe Africano Preciado',
    en: 'Portrait of Julian Felipe Africano Preciado',
  },

  'about.eyebrow': {
    es: 'Sobre mí',
    en: 'About',
  },
  'about.title': {
    es: 'Ingeniería de Sistemas y <span class="grad-text">Ciencia de Datos</span>',
    en: 'Systems Engineering &amp; <span class="grad-text">Data Science</span>',
  },
  'about.subtitle': {
    es: 'Estudiante de Ingeniería de Sistemas y Ciencia de Datos en la Javeriana, con plataformas desplegadas en producción.',
    en: 'Systems Engineering & Data Science student at Javeriana, with platforms shipped to production.',
  },
  'about.box': {
    es: 'He desplegado plataformas web en producción: <strong>SysteFarma</strong>, desarrollada como <strong>freelance</strong>, y <strong>Asistencia GABO</strong>, un sistema de asistencia escolar para 1.200 estudiantes.',
    en: 'I have shipped web platforms to production: <strong>SysteFarma</strong>, developed as a <strong>freelancer</strong>, and <strong>Asistencia GABO</strong>, a school attendance system for 1,200 students.',
  },
  'about.focus': {
    es: 'Mi enfoque: <strong>productos que funcionan de verdad</strong>. Backend sólido, frontend cuidado y la mano del ingeniero que lleva un proyecto hasta el deploy.',
    en: 'My focus: <strong>products that genuinely work</strong>. Solid backend, polished frontend, and the engineer\'s touch that takes a project all the way to deploy.',
  },
  'about.j0.label': {
    es: 'HTML → React · Astro',
    en: 'HTML → React · Astro',
  },
  'about.j0.tag': {
    es: 'web',
    en: 'web',
  },
  'about.j0.text': {
    es: 'del cero a interfaces modernas.',
    en: 'from scratch to modern interfaces.',
  },
  'about.j1.label': {
    es: 'Python · Django',
    en: 'Python · Django',
  },
  'about.j1.tag': {
    es: 'backend',
    en: 'backend',
  },
  'about.j1.text': {
    es: 'APIs y sistemas en producción.',
    en: 'APIs and systems in production.',
  },
  'about.j2.label': {
    es: 'Pandas · Power BI · SARIMA',
    en: 'Pandas · Power BI · SARIMA',
  },
  'about.j2.tag': {
    es: 'datos',
    en: 'data',
  },
  'about.j2.text': {
    es: 'decisiones con evidencia.',
    en: 'decisions backed by evidence.',
  },
  'about.j3.label': {
    es: 'YOLOv8 · OpenCV',
    en: 'YOLOv8 · OpenCV',
  },
  'about.j3.tag': {
    es: 'visión',
    en: 'vision',
  },
  'about.j3.text': {
    es: 'analítica por cámaras para retail.',
    en: 'camera analytics for retail.',
  },
  'about.j4.label': {
    es: 'PostgreSQL · Docker · CI/CD',
    en: 'PostgreSQL · Docker · CI/CD',
  },
  'about.j4.tag': {
    es: 'deploy',
    en: 'deploy',
  },
  'about.j4.text': {
    es: 'hasta el servidor real.',
    en: 'all the way to the real server.',
  },

  'stack.eyebrow': {
    es: 'Stack',
    en: 'Stack',
  },
  'stack.title': {
    es: 'Tecnologías con las que <span class="grad-text">construyo</span>',
    en: 'Technologies I <span class="grad-text">build with</span>',
  },
  'stack.subtitle': {
    es: 'Del frontend al modelo de visión, de la base de datos al servidor en producción. Un stack para resolver problemas de punta a punta.',
    en: 'From the frontend to the vision model, from the database to the production server. One stack to solve end-to-end problems.',
  },
  'stack.count': {
    es: '{n} habilidades',
    en: '{n} skills',
  },
  'stack.groups.0.title': {
    es: 'Frontend & Web',
    en: 'Frontend & Web',
  },
  'stack.groups.1.title': {
    es: 'Backend & Datos',
    en: 'Backend & Data',
  },
  'stack.groups.2.title': {
    es: 'Ciencia de datos & BI',
    en: 'Data Science & BI',
  },
  'stack.groups.3.title': {
    es: 'IA & Visión',
    en: 'AI & Vision',
  },
  'stack.groups.4.title': {
    es: 'Herramientas de IA',
    en: 'AI Tools',
  },
  'stack.groups.5.title': {
    es: 'Infra & DevOps',
    en: 'Infra & DevOps',
  },
  'stack.items.Modelado de datos': {
    es: 'Modelado de datos',
    en: 'Data modeling',
  },
  'stack.items.EDA / Visualización': {
    es: 'EDA / Visualización',
    en: 'EDA / Visualization',
  },
  'stack.items.Series de tiempo (SARIMA)': {
    es: 'Series de tiempo (SARIMA)',
    en: 'Time series (SARIMA)',
  },
  'stack.items.Cámaras RTSP': {
    es: 'Cámaras RTSP',
    en: 'RTSP cameras',
  },
  'stack.items.Despliegue en producción': {
    es: 'Despliegue en producción',
    en: 'Production deployment',
  },
  'stack.items.APIs de IA': {
    es: 'APIs de IA',
    en: 'AI APIs',
  },
  'stack.items.Agentes & workflows': {
    es: 'Agentes & workflows',
    en: 'Agents & workflows',
  },

  'projects.eyebrow': {
    es: 'Proyectos',
    en: 'Projects',
  },
  'projects.title': {
    es: 'Trabajo que ya está <span class="grad-text">rodando</span>',
    en: 'Work already <span class="grad-text">in motion</span>',
  },
  'projects.subtitle': {
    es: 'Productos en producción y misiones de IA aplicada. Capturas reales, no mockups.',
    en: 'Production products and applied AI missions. Real screenshots, not mockups.',
  },
  'projects.badge.prod': {
    es: 'Producción',
    en: 'Production',
  },
  'projects.badge.ai': {
    es: 'IA & Visión',
    en: 'AI & Vision',
  },
  'projects.url': {
    es: 'Sitio',
    en: 'Site',
  },
  'projects.repoAria': {
    es: 'Código en GitHub: {name}',
    en: 'GitHub code: {name}',
  },
  'projects.capture': {
    es: 'Captura {n} de {total} del proyecto {name}',
    en: 'Screenshot {n} of {total} of the {name} project',
  },
  'projects.prev': {
    es: 'Captura anterior',
    en: 'Previous capture',
  },
  'projects.next': {
    es: 'Captura siguiente',
    en: 'Next capture',
  },
  'projects.close': {
    es: 'Cerrar visor',
    en: 'Close viewer',
  },
  'projects.lightbox.aria': {
    es: 'Visor de capturas',
    en: 'Screenshot viewer',
  },
  'projects.0.tagline': {
    es: 'Plataforma en producción para droguerías colombianas',
    en: 'Production platform for Colombian drugstores',
  },
  'projects.0.desc': {
    es: 'Cofundador técnico (desarrollo freelance): cumplimiento regulatorio Res. 591/2024 y 1403/2007, PGIRASA, auditorías, indicadores, contratos con firma electrónica, PQRSF con QR y módulo de rutas de evacuación. Droguerías reales pagan por el servicio.',
    en: 'Technical co-founder (freelance development): regulatory compliance Res. 591/2024 and 1403/2007, PGIRASA, audits, KPIs, e-signature contracts, PQRSF with QR, and an evacuation routes module. Real drugstores pay for the service.',
  },
  'projects.1.tagline': {
    es: 'Asistencia offline-first para 1.200 estudiantes',
    en: 'Offline-first attendance for 1,200 students',
  },
  'projects.1.desc': {
    es: 'PWA de asistencia para el Colegio Gabriel García Márquez: marcación sin conexión con sincronización automática, planillas de horario, portal de acudientes y reportes. Escala a ~620.000 registros por semestre.',
    en: 'Attendance PWA for Colegio Gabriel García Márquez: offline check-in with automatic sync, timetable sheets, guardian portal, and reports. Scales to ~620,000 records per semester.',
  },
  'projects.2.tagline': {
    es: 'Proyecto de IA y visión por computadora para retail',
    en: 'AI & computer vision project for retail',
  },
  'projects.2.desc': {
    es: 'Analítica con cámaras y video para retail: aforo, filas, zonas y cobertura de personal en tiempo real. Detección con YOLOv8 sobre cámaras RTSP (o video), panel web con métricas y recomendaciones generadas por un LLM. Procesamiento local.',
    en: 'Camera and video analytics for retail: occupancy, queues, zones, and staff coverage in real time. YOLOv8 detection on RTSP cameras (or video), a web panel with metrics and LLM-generated recommendations. Local processing.',
  },
  'projects.3.tagline': {
    es: 'Datos abiertos y recuperación de información',
    en: 'Open data and information retrieval',
  },
  'projects.3.desc': {
    es: 'Dos retos de 2026: el DataJam de Bogotá (riesgo de suicidio y salud mental con series temporales SARIMA/Holt-Winters sobre datos abiertos del Distrito) y el CODEFEST AD ASTRA (sistema de recuperación con FAISS y tres encoders en cascada, F1@3 0.499).',
    en: 'Two 2026 challenges: the Bogotá DataJam (suicide risk and mental health with SARIMA/Holt-Winters time series on open District data) and CODEFEST AD ASTRA (retrieval system with FAISS and three cascaded encoders, F1@3 0.499).',
  },
  'projects.4.tagline': {
    es: 'Fotos de croquis convertidas en planos de evacuación',
    en: 'Sketch photos turned into evacuation floor plans',
  },
  'projects.4.desc': {
    es: 'Pipeline de OpenCV que vectoriza croquis dibujados a mano (paredes, puertas, muebles), editor con Fabric.js y rutas de evacuación/sanitarias automáticas con A* en el navegador. Exporta a PDF. En uso por droguerías para rutas sanitarias reales.',
    en: 'An OpenCV pipeline that vectorizes hand-drawn sketches (walls, doors, furniture), an editor with Fabric.js, and automatic evacuation/sanitary routes with A* in the browser. Exports to PDF. In use by drugstores for real sanitary routes.',
  },
  'projects.5.tagline': {
    es: 'Punto de venta e inventario con trazabilidad',
    en: 'Point of sale and inventory with traceability',
  },
  'projects.5.desc': {
    es: 'POS multi-tienda para droguerías: venta con FEFO, inventario por lotes y vencimientos, PWA offline-first con cola de ventas y deduplicación por UUID, y webhooks que lo integran con SysteFarma.',
    en: 'Multi-store POS for drugstores: FEFO sales, batch inventory with expirations, offline-first PWA with a sales queue and UUID deduplication, and webhooks that integrate it with SysteFarma.',
  },

  'experience.eyebrow': {
    es: 'Trayectoria',
    en: 'Journey',
  },
  'experience.title': {
    es: 'Mi camino en <span class="grad-text">ingeniería</span> y código',
    en: 'My path through <span class="grad-text">engineering</span> and code',
  },
  'experience.subtitle': {
    es: 'Un camino autodidacta que terminó en sistemas en producción para organizaciones reales.',
    en: 'A self-taught journey that ended in production systems for real organizations.',
  },
  'experience.0.period': {
    es: 'Actualidad',
    en: 'Now',
  },
  'experience.0.title': {
    es: 'Pontificia Universidad Javeriana — Bogotá',
    en: 'Pontificia Universidad Javeriana — Bogotá',
  },
  'experience.0.role': {
    es: 'Ingeniería de Sistemas y Ciencia de Datos · 6.º semestre',
    en: 'Systems Engineering & Data Science · 6th semester',
  },
  'experience.0.desc': {
    es: 'Estudiante de Ingeniería de Sistemas y Ciencia de Datos, con foco en programación avanzada, ML, datos y sistemas distribuidos.',
    en: 'Systems Engineering & Data Science student, focused on advanced programming, ML, data, and distributed systems.',
  },
  'experience.1.period': {
    es: 'Ago 2025 — Actualidad',
    en: 'Aug 2025 — Present',
  },
  'experience.1.title': {
    es: 'Monitor de Programación Avanzada',
    en: 'Advanced Programming Tutor',
  },
  'experience.1.role': {
    es: 'Pontificia Universidad Javeriana',
    en: 'Pontificia Universidad Javeriana',
  },
  'experience.1.desc': {
    es: 'Acompaño estudiantes en estructuras de datos y buenas prácticas en C++ y Java: sesiones de depuración, evaluación de talleres y material propio de repaso que varios usaron para aprobar (dos semestres).',
    en: 'I mentor students in data structures and best practices in C++ and Java: debugging sessions, workshop grading, and my own review material that many used to pass (two semesters).',
  },
  'experience.2.period': {
    es: 'Ene 2026 — Actualidad',
    en: 'Jan 2026 — Present',
  },
  'experience.2.title': {
    es: 'SysteFarma',
    en: 'SysteFarma',
  },
  'experience.2.role': {
    es: 'Cofundador técnico · Desarrollo freelance',
    en: 'Technical co-founder · Freelance development',
  },
  'experience.2.desc': {
    es: 'Cofundador técnico de la plataforma: cumplimiento regulatorio (Res. 591/2024, Res. 1403/2007), PGIRASA, auditorías, indicadores, contratos con firma electrónica, PQRSF con QR y módulo de rutas de evacuación. En producción con droguerías reales pagando por el servicio.',
    en: 'Technical co-founder of the platform: regulatory compliance (Res. 591/2024, Res. 1403/2007), PGIRASA, audits, KPIs, e-signature contracts, PQRSF with QR, and evacuation routes module. In production with real drugstores paying for the service.',
  },
  'experience.3.period': {
    es: '2026',
    en: '2026',
  },
  'experience.3.title': {
    es: 'Asistencia GABO',
    en: 'Asistencia GABO',
  },
  'experience.3.role': {
    es: 'Sistema en producción · Colegio Gabriel García Márquez',
    en: 'Production system · Colegio Gabriel García Márquez',
  },
  'experience.3.desc': {
    es: 'PWA offline-first de asistencia escolar para 1.200 estudiantes con sincronización automática y reportes por semestre.',
    en: 'Offline-first school attendance PWA for 1,200 students with automatic sync and per-semester reports.',
  },
  'experience.4.period': {
    es: '2026',
    en: '2026',
  },
  'experience.4.title': {
    es: 'Bogotá DataJam · IDECA',
    en: 'Bogotá DataJam · IDECA',
  },
  'experience.4.role': {
    es: 'Participante · Análisis territorial',
    en: 'Participant · Territorial analysis',
  },
  'experience.4.desc': {
    es: 'Análisis territorial del riesgo de suicidio y salud mental en Bogotá con datos abiertos del Distrito: cruce de fuentes, índices de riesgo y proyección temporal con SARIMA y Holt-Winters.',
    en: 'Territorial analysis of suicide risk and mental health in Bogotá with open District data: cross-referencing sources, risk indices, and time projection with SARIMA and Holt-Winters.',
  },
  'experience.5.period': {
    es: '2026',
    en: '2026',
  },
  'experience.5.title': {
    es: 'CODEFEST AD ASTRA',
    en: 'CODEFEST AD ASTRA',
  },
  'experience.5.role': {
    es: 'Hackathon IA/ML · Uniandes / FF.MM.',
    en: 'AI/ML hackathon · Uniandes / FF.MM.',
  },
  'experience.5.desc': {
    es: 'Sistema de recuperación de información: embeddings en cascada (MiniLM → GTE → E5), índice FAISS y grafo de 224.101 nodos. F1@3 0.499 · NDCG@10 0.558.',
    en: 'Information retrieval system: cascaded embeddings (MiniLM → GTE → E5), a FAISS index, and a 224,101-node graph. F1@3 0.499 · NDCG@10 0.558.',
  },
  'experience.6.period': {
    es: 'Ene — Nov 2024',
    en: 'Jan — Nov 2024',
  },
  'experience.6.title': {
    es: 'Cymetrical Metrología y Calibraciones S.A.S.',
    en: 'Cymetrical Metrología y Calibraciones S.A.S.',
  },
  'experience.6.role': {
    es: 'Desarrollador de automatización',
    en: 'Automation developer',
  },
  'experience.6.desc': {
    es: 'Motor de automatización masiva en VBA/Excel: genera carpetas, archivos y documentos corporativos desde una base de datos y plantillas. Eliminó errores de digitación y redujo los tiempos del área de documentación. Sigue en uso activo.',
    en: 'Massive automation engine in VBA/Excel: generates folders, files, and corporate documents from a database and templates. Eliminated typing errors and cut documentation-area times. Still in active use.',
  },
  'experience.7.period': {
    es: '2017 — 2023',
    en: '2017 — 2023',
  },
  'experience.7.title': {
    es: 'Inicios · Autodidacta',
    en: 'Beginnings · Self-taught',
  },
  'experience.7.role': {
    es: 'De HTML a Machine Learning',
    en: 'From HTML to Machine Learning',
  },
  'experience.7.desc': {
    es: 'Comencé con HTML y CSS, dominé JavaScript y llegué a React y Astro; entré a los datos y al ML con Python. Hasta construir sistemas completos para usuarios reales.',
    en: 'I started with HTML and CSS, mastered JavaScript, and worked up to React and Astro; I moved into data and ML with Python. Up to building complete systems for real users.',
  },
  'experience.tags.Datos': {
    es: 'Datos',
    en: 'Data',
  },
  'experience.tags.Ingeniería': {
    es: 'Ingeniería',
    en: 'Engineering',
  },
  'experience.tags.Mentoría': {
    es: 'Mentoría',
    en: 'Mentoring',
  },
  'experience.tags.Salud mental': {
    es: 'Salud mental',
    en: 'Mental health',
  },
  'experience.tags.Autodidacta': {
    es: 'Autodidacta',
    en: 'Self-taught',
  },
  'experience.tags.Automatización': {
    es: 'Automatización',
    en: 'Automation',
  },

  'contact.eyebrow': {
    es: 'Contacto',
    en: 'Contact',
  },
  'contact.title': {
    es: '¿Tienes un proyecto <span class="grad-text">en mente</span>?',
    en: 'Have a project <span class="grad-text">in mind</span>?',
  },
  'contact.text': {
    es: '¿Una plataforma full-stack, visión por computadora para tu tienda o una idea que necesita un ingeniero? Hablemos.',
    en: 'A full-stack platform, computer vision for your store, or an idea that needs an engineer? Let\'s talk.',
  },
  'contact.name': {
    es: 'Nombre',
    en: 'Name',
  },
  'contact.ph.name': {
    es: 'Tu nombre',
    en: 'Your name',
  },
  'contact.message': {
    es: 'Mensaje',
    en: 'Message',
  },
  'contact.ph.message': {
    es: 'Cuéntame sobre tu proyecto…',
    en: 'Tell me about your project…',
  },
  'contact.submit': {
    es: 'Enviar mensaje',
    en: 'Send message',
  },
  'contact.sending': {
    es: 'Enviando…',
    en: 'Sending…',
  },
  'contact.status.invalid': {
    es: 'Por favor completa todos los campos correctamente.',
    en: 'Please fill in all fields correctly.',
  },
  'contact.status.ok': {
    es: '¡Mensaje enviado! Te responderé pronto.',
    en: 'Message sent! I\'ll get back to you soon.',
  },
  'contact.status.server': {
    es: 'No se pudo enviar. Inténtalo de nuevo.',
    en: 'Couldn\'t send. Try again.',
  },
  'contact.status.network': {
    es: 'Error de conexión. Inténtalo de nuevo o escríbeme por LinkedIn.',
    en: 'Connection error. Try again or message me on LinkedIn.',
  },
  'contact.divider': {
    es: 'o escríbeme directo',
    en: 'or write to me directly',
  },
  'contact.cv': {
    es: 'Descargar CV',
    en: 'Download CV',
  },
  'contact.linkedin': {
    es: 'Conectar en LinkedIn',
    en: 'Connect on LinkedIn',
  },

  'footer.built': {
    es: 'Hecho con',
    en: 'Built with',
  },
};