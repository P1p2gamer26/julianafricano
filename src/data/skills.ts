export type SkillGroup = {
  title: string;
  icon: 'code' | 'server' | 'brain' | 'chip' | 'db' | 'tools';
  items: { name: string; top?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
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
    title: 'Backend',
    icon: 'server',
    items: [
      { name: 'Python', top: true },
      { name: 'Django / DRF' },
      { name: 'Java 21' },
      { name: 'Spring Boot' },
      { name: 'Node.js' },
      { name: 'APIs REST / JWT' },
    ],
  },
  {
    title: 'Datos & IA',
    icon: 'brain',
    items: [
      { name: 'Machine Learning', top: true },
      { name: 'Redes neuronales' },
      { name: 'NumPy / Pandas' },
      { name: 'Matplotlib' },
      { name: 'OpenCV' },
      { name: 'scikit-learn' },
      { name: 'BigQuery' },
    ],
  },
  {
    title: 'IoT & Hardware',
    icon: 'chip',
    items: [
      { name: 'ESP32', top: true },
      { name: 'Arduino' },
      { name: 'Raspberry Pi' },
      { name: 'RFID / NFC (PN532)' },
      { name: 'Sensores' },
    ],
  },
  {
    title: 'Bases de datos',
    icon: 'db',
    items: [
      { name: 'PostgreSQL', top: true },
      { name: 'SQLite' },
      { name: 'IndexedDB (Dexie)' },
      { name: 'Modelado de datos' },
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