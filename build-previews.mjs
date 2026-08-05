#!/usr/bin/env node
/**
 * Builds every live-previewable project into dist/<slug>/, which the portfolio iframes.
 *
 * Two kinds of project:
 *   static - flat index.html + script.js + style.css. The build step is a copy.
 *   vite   - migrated off react-scripts (see the migration commit). npm install + vite build.
 *
 * The portfolio's only coupling to this repo is the resulting URL, stored per project in Sanity
 * as preview.embedUrl. Nothing here imports from the portfolio or vice versa.
 *
 * Changing the portfolio's domain? vercel.json's frame-ancestors lists exactly who may iframe
 * these previews, and it is currently the portfolio's .vercel.app host plus localhost:3000. A new
 * domain has to be added there or every preview goes blank - the browser blocks the frame and the
 * portfolio cannot detect it, because a cross-origin iframe reports nothing about why it failed.
 * Vercel preview deployments of the portfolio get generated hostnames and are NOT covered; add
 * https://*-<account>.vercel.app if you need previews to work from those too.
 */

import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'dist');

const STATIC = {
  'lessons-learned': 'modulo_1/bloco_3/sd-09-project-lessons-learned',
  'meme-generator': 'modulo_1/bloco_5/sd-09-project-meme-generator',
  'pixels-art': 'modulo_1/bloco_5/sd-09-project-pixels-art',
  'todo-list': 'modulo_1/bloco_5/sd-09-project-todo-list',
  'facebook-signup': 'modulo_1/bloco_6/sd-09-project-facebook-signup',
  'shopping-cart': 'modulo_1/bloco_9/sd-09-project-shopping-cart',
};

const VITE = {
  'movie-cards-library': 'modulo_2/bloco_11/sd-09-project-movie-cards-library',
  'movie-cards-library-stateful': 'modulo_2/bloco_12/sd-09-project-movie-cards-library-stateful',
  'movie-card-library-crud': 'modulo_2/bloco_13/sd-09-project-movie-card-library-crud',
  'frontend-online-store': 'modulo_2/bloco_14/sd-09-project-frontend-online-store',
  'react-testing-library': 'modulo_2/bloco_15/sd-09-project-react-testing-library',
  trybewallet: 'modulo_2/bloco_16/sd-09-project-trybewallet',
  'trivia-react-redux': 'modulo_2/bloco_17/sd-09-project-trivia-react-redux',
  'starwars-planets-search': 'modulo_2/bloco_18/sd-09-project-starwars-planets-search',
  'recipes-app': 'modulo_2/bloco_19/sd-09-project-recipes-app',
};

// Coursework leftovers that must not be served: config, CI, and the graders' own scripts.
const SKIP = new Set([
  '.github', '.trybe', '.git', 'node_modules', 'README.md', 'package.json', 'package-lock.json',
  '.eslintrc', '.eslintrc.json', '.eslintignore', '.stylelintrc.json', '.stylelintignore',
  '.editorconfig', '.codeclimate.yml', '.travis.yml', '.gitignore', 'exemplo.png',
]);

const run = (cmd, args, cwd) => {
  execFileSync(cmd, args, { cwd, stdio: 'inherit' });
};

function buildStatic(slug, rel) {
  const src = join(ROOT, 'projects', rel);
  const dest = join(OUT, slug);
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    if (SKIP.has(entry)) continue;
    cpSync(join(src, entry), join(dest, entry), { recursive: true });
  }
}

function buildVite(slug, rel) {
  const src = join(ROOT, 'projects', rel);
  // --legacy-peer-deps: these are npm-6-era dependency trees, and npm 7+ strict peer resolution
  // rejects them over lint plugins that have no bearing on the build (trivia-react-redux pairs
  // eslint 7 with eslint-plugin-sonarjs 0.5, which peers on eslint <=6).
  run('npm', ['install', '--no-audit', '--no-fund', '--loglevel=error', '--legacy-peer-deps'], src);
  run('npx', ['vite', 'build', '--outDir', join(OUT, slug), '--emptyOutDir'], src);
}

const only = process.argv[2]; // optional: build a single slug
const targets = [
  ...Object.entries(STATIC).map(([slug, rel]) => ({ slug, rel, build: buildStatic })),
  ...Object.entries(VITE).map(([slug, rel]) => ({ slug, rel, build: buildVite })),
].filter((t) => !only || t.slug === only);

if (only && targets.length === 0) {
  console.error(`unknown slug: ${only}`);
  process.exit(1);
}

if (!only) rmSync(OUT, { recursive: true, force: true });

const failed = [];
for (const { slug, rel, build } of targets) {
  if (!existsSync(join(ROOT, 'projects', rel))) {
    failed.push([slug, 'source directory missing']);
    continue;
  }
  console.log(`\n▶ ${slug}`);
  try {
    build(slug, rel);
  } catch (error) {
    // Keep going: one dead third-party API should not cost us the other fourteen previews.
    failed.push([slug, error.message.split('\n')[0]]);
  }
}

console.log(`\n${targets.length - failed.length}/${targets.length} built → dist/`);
if (failed.length) {
  console.log('\nfailed:');
  for (const [slug, why] of failed) console.log(`  ${slug} — ${why}`);
  process.exit(1);
}
