/**
 * Génère public/sitemap.xml à partir des routes statiques + fiches formation.
 * Usage: npm run generate:sitemap
 */
import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BASE = 'https://nexytal.com';

const STATIC_ROUTES = [
  { loc: '/accueil', priority: '1.0', changefreq: 'weekly' },
  { loc: '/formations', priority: '0.9', changefreq: 'weekly' },
  { loc: '/alternance', priority: '0.8', changefreq: 'monthly' },
  { loc: '/financements', priority: '0.8', changefreq: 'monthly' },
  { loc: '/entreprise', priority: '0.7', changefreq: 'monthly' },
  { loc: '/a-propos', priority: '0.7', changefreq: 'monthly' },
  { loc: '/blog', priority: '0.7', changefreq: 'weekly' },
  { loc: '/contact', priority: '0.8', changefreq: 'monthly' },
  { loc: '/implantations', priority: '0.8', changefreq: 'monthly' },
  { loc: '/certification', priority: '0.8', changefreq: 'monthly' },
  { loc: '/carrieres', priority: '0.7', changefreq: 'monthly' },
  { loc: '/bilan-de-competences', priority: '0.8', changefreq: 'monthly' },
  { loc: '/ressources', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ressources-ia', priority: '0.7', changefreq: 'monthly' },
  { loc: '/nous-rejoindre', priority: '0.7', changefreq: 'monthly' },
  { loc: '/faq', priority: '0.6', changefreq: 'monthly' },
  { loc: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
  { loc: '/politique-de-confidentialite', priority: '0.3', changefreq: 'yearly' },
  { loc: '/conditions-generales', priority: '0.3', changefreq: 'yearly' },
  { loc: '/reglement-interieur', priority: '0.3', changefreq: 'yearly' },
];

function urlEntry({ loc, priority, changefreq }) {
  return `  <url>
    <loc>${BASE}${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function main() {
  let formationIds = [];
  let ressourcesPaths = [];

  try {
    const ressourcesMod = await import(pathToFileURL(join(ROOT, 'src/data/ressources.js')).href);
    ressourcesPaths = ressourcesMod.getAllRessourcesTopicPaths?.().map((t) => t.path) ?? [];
    ressourcesPaths = [
      '/ressources',
      ...ressourcesMod.ressourcesSections.map((s) => `/ressources/${s.id}`),
      ...ressourcesPaths,
    ];
  } catch {
    /* skip */
  }

  try {
    const index = JSON.parse(await readFile(join(ROOT, 'src/data/json/formations-index.json'), 'utf8'));
    formationIds = Object.keys(index);
  } catch {
    for (const f of ['formation.json', 'formation-courtes.json', 'formations-certifiantes.json']) {
      try {
        const data = JSON.parse(await readFile(join(ROOT, 'src/data/json', f), 'utf8'));
        formationIds.push(...Object.keys(data));
      } catch {
        /* skip */
      }
    }
  }

  const entries = [
    ...STATIC_ROUTES.map(urlEntry),
    ...ressourcesPaths.map((loc) =>
      urlEntry({ loc, priority: '0.7', changefreq: 'monthly' }),
    ),
    ...formationIds.map((id) =>
      urlEntry({ loc: `/formation/${id}`, priority: '0.7', changefreq: 'monthly' })
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

  const out = join(ROOT, 'public', 'sitemap.xml');
  await writeFile(out, xml, 'utf8');
  console.log(`✓ Sitemap: ${entries.length} URLs → ${out}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
