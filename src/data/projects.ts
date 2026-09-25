import type { ImageMetadata } from 'astro';

import sfHero from '../assets/proyectos/systefarma/hero.jpg';
import sfPanel from '../assets/proyectos/systefarma/panel.jpg';
import sfModulos from '../assets/proyectos/systefarma/modulos.jpg';
import sfNormativa from '../assets/proyectos/systefarma/normativa.jpg';

import gaboDashboard from '../assets/proyectos/gabo/dashboard.png';
import gaboAsistencia from '../assets/proyectos/gabo/asistencia.png';
import gaboCalendario from '../assets/proyectos/gabo/calendario.png';
import gaboTablero from '../assets/proyectos/gabo/tablero.png';

import camSuperCaja1 from '../assets/proyectos/camaras/super_caja-1.jpg';
import camIprox1 from '../assets/proyectos/camaras/tienda_iprox-1.jpg';
import camUsa1 from '../assets/proyectos/camaras/tienda_usa-1.jpg';
import camSuperCaja2 from '../assets/proyectos/camaras/super_caja-2.jpg';
import camIprox3 from '../assets/proyectos/camaras/tienda_iprox-3.jpg';

import skEditor from '../assets/proyectos/sketchroute/editor-rutas.png';
import skLista from '../assets/proyectos/sketchroute/lista.png';

import posVenta from '../assets/proyectos/pos/pos-venta.png';
import posDashboard from '../assets/proyectos/pos/pos-dashboard.png';
import posInventario from '../assets/proyectos/pos/pos-inventario.png';
import posVentas from '../assets/proyectos/pos/pos-ventas.png';

export type CaseStudy = {
  role: string;
  problem: string;
  decisions: string[];
  metrics: string[];
};

export type Project = {
  name: string;
  tagline: string;
  desc: string;
  badges: string[];
  category: 'prod' | 'ai';
  repo?: string;
  url?: string;
  tech: string[];
  featured?: boolean;
  gallery?: ImageMetadata[];
  slug?: string;
  case?: CaseStudy;
};

export const projects: Project[] = [
  {
    name: 'SysteFarma',
    tagline: 'Plataforma en producción para droguerías colombianas',
    desc: 'Cofundador técnico y desarrollador full-stack: cumplimiento regulatorio Res. 591/2024 y 1403/2007, PGIRASA, auditorías, indicadores, contratos con firma electrónica, PQRSF con QR y módulo de rutas de evacuación. Droguerías reales pagan por el servicio.',
    badges: ['EN PRODUCCIÓN', 'COFUNDADOR', 'FULL-STACK'],
    category: 'prod',
    url: 'https://systefarma.com',
    repo: 'https://github.com/P1p2gamer26/Drogueria_try',
    tech: ['Python', 'Django 5', 'DRF', 'PostgreSQL', 'JWT', 'PWA', 'Nginx', 'Cloudflare'],
    featured: true,
    gallery: [sfHero, sfPanel, sfModulos, sfNormativa],
    slug: 'systefarma',
    case: {
      role: 'Cofundador técnico y desarrollador full-stack, en solitario desde enero de 2026.',
      problem:
        'Las droguerías colombianas deben cumplir la Res. 591/2024 y 1403/2007 (PGIRASA, auditorías, indicadores, PQRSF) con procesos en papel. SysteFarma digitaliza ese cumplimiento normativo de punta a punta.',
      decisions: [
        'Backend en Django 5 + DRF con auth JWT; frontend SPA manual en HTML/CSS/JS vanilla, sin framework, para mantener el bundle liviano.',
        'Producción en un VPS de OVHcloud con Gunicorn (3 workers) detrás de Nginx, PostgreSQL local y Cloudflare como CDN/SSL.',
        'Deploy automático: push a main dispara GitHub Actions, que hace SSH al VPS, corre migraciones y reinicia Gunicorn.',
        'Media protegida contra IDOR: en vez de servir /media/ público, las URLs se firman y Nginx las resuelve con X-Accel-Redirect.',
        'PQRSF y encuestas de satisfacción con código QR público; contratos con firma electrónica; módulo propio de rutas de evacuación.',
        'Suite de 345 funciones de test sobre SQLite en memoria para no depender de la base de producción en CI.',
      ],
      metrics: ['[por completar] droguerías activas pagando el servicio', '[por completar] usuarios registrados', '[por completar] uptime del VPS'],
    },
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
    gallery: [gaboDashboard, gaboAsistencia, gaboCalendario, gaboTablero],
  },
  {
    name: 'Vision Analytics',
    tagline: 'Proyecto de IA y visión por computadora para retail',
    desc: 'Analítica con cámaras y video para retail: aforo, filas, zonas y cobertura de personal en tiempo real. Detección con YOLOv8 sobre cámaras RTSP (o video), panel web con métricas y recomendaciones generadas por un LLM. Procesamiento local.',
    badges: ['IA & VISIÓN'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/vision-analytics',
    tech: ['YOLOv8', 'OpenCV', 'RTSP', 'supervision', 'LLM (Anthropic)', 'Django', 'React', 'PostgreSQL', 'Docker'],
    gallery: [camSuperCaja1, camIprox1, camUsa1, camSuperCaja2, camIprox3],
  },
  {
    name: 'DataJam · CODEFEST',
    tagline: 'Datos abiertos y recuperación de información',
    desc: 'Dos retos de 2026: el DataJam de Bogotá (riesgo de suicidio y salud mental con series temporales SARIMA/Holt-Winters sobre datos abiertos del Distrito) y el CODEFEST AD ASTRA (sistema de recuperación con FAISS y tres encoders en cascada, F1@3 0.499).',
    badges: ['DATOS', 'IA', 'RETRIEVAL'],
    category: 'ai',
    repo: 'https://github.com/P1p2gamer26/CODEFEST_2026-1',
    tech: ['Pandas', 'SARIMA', 'FAISS', 'HuggingFace', 'scikit-learn'],
  },
  {
    name: 'SketchRoute',
    tagline: 'Desarrollador principal · fotos de croquis convertidas en planos de evacuación',
    desc: 'Pipeline de OpenCV que vectoriza croquis dibujados a mano (paredes, puertas, muebles), editor con Fabric.js y rutas de evacuación/sanitarias automáticas con A* en el navegador. Exporta a PDF. En uso por droguerías para rutas sanitarias reales.',
    badges: ['VISIÓN', 'PYTHON', 'WEB'],
    category: 'ai',
    repo: 'https://github.com/CaroUjueta/SketchRoute',
    url: 'https://rutas.systefarma.com',
    tech: ['Django 5', 'OpenCV', 'Fabric.js', 'A*', 'PDF'],
    gallery: [skEditor, skLista],
    slug: 'rutas',
    case: {
      role: 'Desarrollador principal (107 de 122 commits del repo, junto a Caro Ujueta en el diseño del editor).',
      problem:
        'Convertir la foto de un croquis dibujado a mano en un plano de evacuación y rutas sanitarias utilizable, sin que el usuario toque un programa de CAD.',
      decisions: [
        'Pipeline de visión en 5 módulos sobre OpenCV: corrección de perspectiva, segmentación de color en HSV (paredes en negro, puertas en azul, vanos en verde, muebles en rojo), detección de líneas con Hough, extracción de recintos como ciclos del grafo de muros, y corte real de la pared donde cae cada puerta.',
        'Editor 100% en el navegador con Fabric.js: el ruteo de flechas de evacuación (A*) y la exportación a PDF corren del lado del cliente, sin round-trip al servidor.',
        'Las apps Django de routing/signaling/export del repo son stubs reservados para una futura versión en servidor; hoy toda la lógica vive en canvas.js.',
        '41 funciones de test y un directorio qa/ con scripts de diagnóstico dedicados (segmentación, grid, serialización) para depurar el pipeline de visión.',
      ],
      metrics: ['[por completar] planos generados en producción', '[por completar] droguerías usando rutas sanitarias reales'],
    },
  },
  {
    name: 'Sistema POS',
    tagline: 'Punto de venta e inventario con trazabilidad',
    desc: 'POS multi-tienda para droguerías: venta con FEFO, inventario por lotes y vencimientos, PWA offline-first con cola de ventas y deduplicación por UUID, y webhooks que lo integran con SysteFarma.',
    badges: ['EN PRODUCCIÓN', 'PWA', 'OFFLINE-FIRST'],
    category: 'prod',
    repo: 'https://github.com/P1p2gamer26/SistemaPos',
    url: 'https://pos.systefarma.com',
    tech: ['Python', 'Django', 'SPA', 'FEFO', 'Webhooks'],
    gallery: [posVenta, posDashboard, posInventario, posVentas],
    slug: 'pos',
    case: {
      role: 'Desarrollador único del producto, diseñado como servicio independiente que se integra con SysteFarma por webhooks.',
      problem:
        'Las droguerías necesitan vender sin depender de la conexión a internet, con trazabilidad de lotes y vencimientos (FEFO: first-expired, first-out) y sin arriesgar una venta ya cobrada si el servidor está caído.',
      decisions: [
        'El stock nunca se edita directamente: es la suma de movimientos de stock inmutables por lote, así que cada ajuste queda auditado.',
        'Aislamiento multi-tienda: todo modelo hereda un modelo base de tenant y cada endpoint filtra por la tienda del JWT.',
        'Venta atómica con FEFO: transacción con select_for_update() sobre los lotes para evitar condiciones de carrera al vender en paralelo.',
        'Offline-first: service worker + IndexedDB replican el catálogo; las ventas sin red se encolan con un UUID generado en el cliente y el servidor deduplica al sincronizar.',
        'Una venta offline siempre se acepta al sincronizar —la plata ya entró—; si deja stock negativo se genera un movimiento de AJUSTE en vez de rechazar la venta.',
        'Webhooks salientes hacia SysteFarma firmados con HMAC-SHA256 y reintentos con backoff exponencial, para no perder eventos si el otro servicio está caído.',
        'Recuperación ante desastre: se descartó el failover activo-activo (replicación multi-máster) por complejidad; en su lugar, backups horarios a un bucket S3-compatible y un runbook de restore con RTO ≤ 1 hora.',
        '96 funciones de test, incluyendo aislamiento multi-tienda y deduplicación offline por UUID.',
      ],
      metrics: ['[por completar] ventas procesadas en producción', '[por completar] tiendas activas en el POS'],
    },
  },
];
