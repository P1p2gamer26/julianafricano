import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://P1p2gamer26.github.io',
  base: '/julianafricano',
  integrations: [sitemap()],
  output: 'static',
  build: {
    assets: '_assets',
  },
  compressHTML: true,
});