export type SkillGroup = {
  title: string;
  icon: 'code' | 'server' | 'brain' | 'chip' | 'db' | 'tools' | 'ai';
  items: { name: string; top?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend & Web',
    icon: 'code',
    items: [
      { name: 'React', top: true },
      { name: 'Next.js' },
      { name: 'Astro' },
      { name: 'JavaScript', top: true },
      { name: 'TypeScript' },
      { name: 'Vite' },
      { name: 'HTML5 / CSS3', top: true },
      { name: 'PWA / Service Workers' },
    ],
  },
  {
    title: 'Backend & Datos',
    icon: 'server',
    items: [
      { name: 'Python', top: true },
      { name: 'Django / DRF' },
      { name: 'Java 21' },
      { name: 'Spring Boot' },
      { name: 'Node.js' },
      { name: 'APIs REST / JWT' },
      { name: 'PostgreSQL', top: true },
      { name: 'SQLite' },
      { name: 'IndexedDB (Dexie)' },
      { name: 'Modelado de datos' },
    ],
  },
  {
    title: 'Ciencia de datos & BI',
    icon: 'db',
    items: [
      { name: 'Pandas', top: true },
      { name: 'EDA / Visualización' },
      { name: 'Power BI' },
      { name: 'scikit-learn' },
      { name: 'Series de tiempo (SARIMA)' },
      { name: 'SQL', top: true },
      { name: 'Jupyter' },
    ],
  },
  {
    title: 'IA & Visión',
    icon: 'brain',
    items: [
      { name: 'YOLOv8', top: true },
      { name: 'OpenCV' },
      { name: 'supervision' },
      { name: 'Cámaras RTSP', top: true },
      { name: 'Machine Learning' },
      { name: 'NumPy / Pandas' },
      { name: 'LLMs (Anthropic)' },
      { name: 'Hugging Face' },
      { name: 'LangChain' },
      { name: 'PyTorch' },
      { name: 'Whisper' },
    ],
  },
  {
    title: 'Herramientas de IA',
    icon: 'ai',
    items: [
      { name: 'ChatGPT', top: true },
      { name: 'Claude' },
      { name: 'GitHub Copilot' },
      { name: 'Cursor' },
    ],
  },
  {
    title: 'Infra & DevOps',
    icon: 'tools',
    items: [
      { name: 'Docker' },
      { name: 'Git / GitHub Actions' },
      { name: 'CI/CD' },
      { name: 'Nginx', top: true },
      { name: 'Cloudflare' },
      { name: 'VPS · Linux' },
      { name: 'Despliegue en producción' },
    ],
  },
];