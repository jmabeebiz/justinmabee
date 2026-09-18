import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://justinmabee.com',
  // Flatten every page to the dist root so one set of relative paths works
  // on the live domain, under a subpath, or opened from disk.
  build: { format: 'file' },
  integrations: [sitemap()],
});
