import type { APIRoute } from 'astro';

// Generated at build time so the sitemap URL always matches the configured
// `site` (see astro.config.mjs / SITE_URL env var) instead of a hardcoded
// domain that would drift on every fork.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
