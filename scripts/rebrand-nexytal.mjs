import { readFile, writeFile, readdir, stat } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TARGET_DIRS = ['src', 'public', 'scripts'];
const EXT = new Set(['.js', '.jsx', '.json', '.php', '.md', '.txt', '.mjs', '.sql', '.env']);

const REPLACEMENTS = [
  ['Nexytal', 'Nexytal'],
  ['Nexytal', 'Nexytal'],
  ['Nexytal', 'Nexytal'],
  ['nexytal.com', 'nexytal.com'],
  ['formations@nexytal.com', 'contact@nexytal.com'],
  ['contact@nexytal.com', 'contact@nexytal.com'],
  ['Nexytal', 'Nexytal'],
  ['nexytal', 'nexytal'],
];

async function walk(dir, files = []) {
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    const info = await stat(full);
    if (info.isDirectory()) {
      if (name === 'node_modules' || name === 'dist') continue;
      await walk(full, files);
    } else if (EXT.has(extname(name))) {
      files.push(full);
    }
  }
  return files;
}

let totalFiles = 0;
let totalReplacements = 0;

for (const dir of TARGET_DIRS) {
  const base = join(ROOT, dir);
  const files = await walk(base);
  for (const file of files) {
    let content = await readFile(file, 'utf8');
    let changed = false;
    for (const [from, to] of REPLACEMENTS) {
      if (content.includes(from)) {
        const count = content.split(from).length - 1;
        content = content.split(from).join(to);
        totalReplacements += count;
        changed = true;
      }
    }
    if (changed) {
      await writeFile(file, content, 'utf8');
      totalFiles += 1;
    }
  }
}

// .env at root
try {
  const envPath = join(ROOT, '.env');
  let content = await readFile(envPath, 'utf8');
  let changed = false;
  for (const [from, to] of REPLACEMENTS) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }
  if (changed) await writeFile(envPath, content, 'utf8');
} catch {
  // optional
}

console.log(`Updated ${totalFiles} files, ${totalReplacements} replacements.`);
