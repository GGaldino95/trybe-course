#!/usr/bin/env node
/**
 * Builds every live-previewable project into dist/<slug>/, which the portfolio iframes.
 *
 * Two kinds of project:
 *   static - flat index.html + script.js + style.css. The build step is a copy.
 *   vite   - migrated off react-scripts (see the migration commit). npm install + vite build.
 *
 * The portfolio's only coupling to this repo is the resulting URL, stored per project in Sanity
 * as preview.embedUrl - https://trybe-course.vercel.app/<slug>/. Nothing here imports from the
 * portfolio or vice versa.
 *
 * Changing the portfolio's domain? vercel.json's frame-ancestors lists exactly who may iframe
 * these previews, currently https://gabrielgaldinodev.vercel.app plus localhost:3000. A new domain
 * has to be added there or every preview goes blank - the browser blocks the frame, and the
 * portfolio cannot detect it, because a cross-origin iframe reports nothing about why it failed.
 * Vercel preview deployments of the portfolio get generated hostnames and are NOT covered; add
 * https://*-<account>.vercel.app if you need previews to work from those too.
 */

import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
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

  // These repos keep their README screenshots at the project root and their real assets in
  // subfolders, so a root-level image nothing references is documentation - and expensive:
  // meme-generator.gif alone is 5.8MB. Checked against what the code actually references rather
  // than a hardcoded list, so an image the app does use at the root still gets copied.
  const referenced = readdirSync(src)
    .filter((n) => /\.(html|css|js)$/i.test(n))
    .map((n) => readFileSync(join(src, n), 'utf8'))
    .join('\n');
  const isUnusedRootImage = (entry) =>
    /\.(gif|png|jpe?g|webp|svg|ico)$/i.test(entry) && !referenced.includes(entry);

  for (const entry of readdirSync(src)) {
    if (SKIP.has(entry) || isUnusedRootImage(entry)) continue;
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

// The root of this domain is otherwise a raw Vercel 404. Nothing links here - the portfolio embeds
// /<slug>/ directly - but it is a public URL, so it should say what it is.
function writeIndex(built) {
  const link = (slug) => `<li><a href="/${slug}/">${slug}</a></li>`;
  writeFileSync(
    join(OUT, 'index.html'),
    `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Trybe course — project previews</title>
<style>
  :root { color-scheme: dark; }
  body { margin:0; padding:clamp(24px,6vw,72px); background:#0a0b0d; color:#e8eaed;
         font:16px/1.6 ui-sans-serif,system-ui,sans-serif; }
  main { max-width:52rem; margin:0 auto; }
  h1 { font-size:clamp(1.4rem,4vw,2rem); margin:0 0 .5rem; }
  p { color:#9aa0a6; margin:0 0 2rem; }
  h2 { font-size:.75rem; text-transform:uppercase; letter-spacing:.08em; color:#5b8def;
       margin:2rem 0 .75rem; font-family:ui-monospace,monospace; }
  ul { list-style:none; padding:0; margin:0; display:grid; gap:.25rem;
       grid-template-columns:repeat(auto-fill,minmax(15rem,1fr)); }
  a { color:#e8eaed; text-decoration:none; display:block; padding:.6rem .8rem; border-radius:8px;
      border:1px solid #23262b; font-family:ui-monospace,monospace; font-size:.9rem; }
  a:hover, a:focus-visible { border-color:#5b8def; background:#13161a; outline:none; }
  footer { margin-top:3rem; color:#5f6368; font-size:.85rem; }
  footer a { display:inline; padding:0; border:0; color:#5b8def; text-decoration:underline; }
</style>
</head>
<body>
<main>
  <h1>Trybe course — project previews</h1>
  <p>Static builds of coursework from 2020–21, served so my portfolio can embed them.
     These are supporting assets, not the portfolio itself.</p>
  <h2>// no build</h2>
  <ul>${built.filter((s) => s in STATIC).map(link).join('')}</ul>
  <h2>// react</h2>
  <ul>${built.filter((s) => s in VITE).map(link).join('')}</ul>
  <footer><a href="https://gabrielgaldinodev.vercel.app">← portfolio</a>
    · <a href="https://github.com/GGaldino95/trybe-course">source</a></footer>
</main>
</body>
</html>
`,
  );
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

const failedSlugs = new Set(failed.map(([slug]) => slug));
// Only list what actually built, so a skipped project is not advertised as a dead link.
if (!only) writeIndex(targets.map((t) => t.slug).filter((s) => !failedSlugs.has(s)));

console.log(`\n${targets.length - failed.length}/${targets.length} built → dist/`);
if (failed.length) {
  console.log('\nfailed:');
  for (const [slug, why] of failed) console.log(`  ${slug} — ${why}`);
  process.exit(1);
}
