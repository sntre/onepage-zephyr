// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import tailwindcss from '@tailwindcss/vite';

// The canonical site URL is read from an env var so forks only need to
// change one value (see `.env.example` / `SITE_URL`).
const SITE_URL = process.env.SITE_URL || 'https://nefa.io';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap(),
    // Runs last so it compresses the final static output (HTML/CSS/JS/SVG).
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeComments: true,
        },
      },
      Image: false, // Images are optimized by Astro's <Image /> at build time.
      JavaScript: true,
      SVG: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
