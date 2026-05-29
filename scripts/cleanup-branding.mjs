/**
 * Nettoyage branding : suppression références Alt, Qualiopi et mentions organisme de formation.
 * Usage: node scripts/cleanup-branding.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const JSON_FILES = [
  'src/data/json/faq.json',
  'src/data/json/formation.json',
  'src/data/json/formation-courtes.json',
  'src/data/json/formations-certifiantes.json',
  'src/data/json/bilan.json',
  'src/data/json/apropos.json',
  'src/data/json/legals.json',
];

const REPLACEMENTS = [
  [/Organisme certifié Qualiopi/gi, 'Nexytal'],
  [/organisme certifié Qualiopi/gi, 'Nexytal'],
  [/certifié Qualiopi/gi, 'certifié'],
  [/certification Qualiopi/gi, 'certification qualité'],
  [/Certification Qualiopi/gi, 'Certification qualité'],
  [/démarche Qualiopi/gi, 'démarche qualité'],
  [/Démarche qualité Qualiopi/gi, 'Démarche qualité'],
  [/Référentiel Qualiopi/gi, 'Référentiel qualité'],
  [/référentiel Qualiopi/gi, 'référentiel qualité'],
  [/FAQ Qualiopi/gi, 'FAQ qualité'],
  [/Qualiopi &/g, 'Qualité &'],
  [/ & Qualiopi/g, ' & qualité'],
  [/Qualiopi,/g, 'qualité,'],
  [/Qualiopi /g, ''],
  [/Qualiopi\./g, 'Nexytal.'],
  [/Qualiopi/g, ''],
  [/Nexytal \(Qualiopi\)/g, 'Nexytal'],
  [/Nexytal est certifié au titre des actions de formation\./g, 'Nexytal s\'engage sur une démarche qualité exigeante.'],
  [/Organisme de formation certifié/gi, 'Groupe Nexytal'],
  [/organisme de formation/gi, 'Nexytal'],
  [/centre de formation/gi, 'Nexytal'],
  [/ALT–RH CONSULTING/g, 'NEXYTAL'],
  [/Alt Formation/g, 'Nexytal'],
  [/Alt Formations/g, 'Nexytal'],
  [/alt-formations/g, 'nexytal'],
  [/alt_formations/g, 'nexytal'],
];

function cleanContent(content) {
  let out = content;
  for (const [pattern, replacement] of REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  // Nettoyage espaces doubles résiduels dans JSON strings
  out = out.replace(/  +/g, ' ');
  out = out.replace(/Certifications, RNCP, RS & /g, 'Certifications, RNCP & RS — ');
  return out;
}

function removeQualiopiFaqEntries(content) {
  try {
    const data = JSON.parse(content);
    if (Array.isArray(data.categories)) {
      data.categories = data.categories.map((cat) => {
        if (cat.categorie?.includes('Qualiopi') || cat.categorie?.includes('qualiopi')) {
          cat.categorie = cat.categorie.replace(/Qualiopi/gi, 'qualité').replace(/ & qualité/g, '');
        }
        if (Array.isArray(cat.questions)) {
          cat.questions = cat.questions.filter(
            (q) => !/qualiopi/i.test(`${q.q} ${q.a}`) || !/^Qu'est-ce que la certification/i.test(q.q),
          );
          cat.questions = cat.questions.filter((q) => !/qualiopi/i.test(`${q.q} ${q.a}`));
        }
        return cat;
      });
      return JSON.stringify(data, null, 4);
    }
  } catch {
    /* fallback string replace */
  }
  return content;
}

for (const rel of JSON_FILES) {
  const filePath = join(root, rel);
  try {
    let content = readFileSync(filePath, 'utf8');
    content = cleanContent(content);
    if (rel.includes('faq.json')) {
      content = removeQualiopiFaqEntries(content);
    }
    if (rel.includes('apropos.json')) {
      const data = JSON.parse(content);
      if (data.certificationsAgrements?.items) {
        data.certificationsAgrements.items = data.certificationsAgrements.items.filter(
          (item) => !/qualiopi/i.test(item.nom),
        );
      }
      content = JSON.stringify(data, null, 2);
    }
    writeFileSync(filePath, content, 'utf8');
    console.log('✓', rel);
  } catch (e) {
    console.warn('⚠', rel, e.message);
  }
}

console.log('Done.');
