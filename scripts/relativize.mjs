// Post-build: rewrite root-absolute local refs in built HTML to relative paths
// so dist/ renders from any subpath (SiteViewer previews) or straight from disk.
// SEO/social URLs are absolute (https://…) and are left alone.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));

const rules = [
  [/(=")\/_astro\//g, '$1_astro/'],
  [/(=")\/images\//g, '$1images/'],
  [/href="\/favicon/g, 'href="favicon'],
  [/href="\/#/g, 'href="index.html#'],
  [/href="\/"/g, 'href="index.html"'],
  [/href="\/([a-z0-9-]+)\/?"/g, 'href="$1.html"'],
  [/(src|href)="\/([^/"][^"]*\.(?:png|jpe?g|webp|avif|svg|ico|pdf|xml|txt))"/g, '$1="$2"'],
];

let count = 0;
for (const file of await readdir(dist)) {
  if (!file.endsWith('.html')) continue;
  const path = join(dist, file);
  const before = await readFile(path, 'utf8');
  const after = rules.reduce((html, [re, rep]) => html.replace(re, rep), before);
  if (after !== before) {
    await writeFile(path, after);
    count++;
  }
}
console.log(`relativize: rewrote ${count} HTML file(s)`);
