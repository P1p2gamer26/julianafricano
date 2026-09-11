import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const base = '/julianafricano';

function cvVersion(): string {
  try {
    const cvPath = join(process.cwd(), 'public', 'CV-Julian-Africano.pdf');
    const data = readFileSync(cvPath);
    return createHash('md5').update(data).digest('hex').slice(0, 10);
  } catch {
    return '1';
  }
}

export const site = {
  name: 'Julian Felipe Africano Preciado',
  alias: 'Julian Africano',
  role: 'Ingeniero de Sistemas · Ciencia de Datos · Full-Stack',
  location: 'Bogotá, Colombia',
  github: 'https://github.com/P1p2gamer26',
  linkedin: 'https://www.linkedin.com/in/julian-felipe-africano-44b84b281/',
  instagram: 'https://www.instagram.com/julianafricano/',
  talento: 'https://talento.javeriana.edu.co/account',
  base,
  host: 'https://P1p2gamer26.github.io',
  formEndpoint: 'https://formspree.io/f/REEMPLAZA_ESTE_ID_FORMS',
  cvHref: `${base}/CV-Julian-Africano.pdf?v=${cvVersion()}`,
};

export const img = (p: string) => `${site.base}${p}`;