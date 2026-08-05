#!/usr/bin/env node
/**
 * Installs the preview API failsafe into each project that talks to a live third-party API.
 *
 * Why: these projects are 2021 coursework and their APIs are outside our control. Two have already
 * died (Trybe's SWAPI mirror, Mercado Libre's public search). The rest will eventually follow, and
 * a preview that renders an empty table is worse than no preview at all.
 *
 * How: previewFallback.js wraps window.fetch. The real API is still called first and its response
 * used whenever it works, so the preview shows live data. Only on failure - a network error, a
 * non-2xx, or an 8s timeout - does it serve a snapshot captured from that same API while it was
 * alive. Snapshots sit in public/ and are fetched lazily, so they cost nothing until needed.
 *
 * Re-runnable: it overwrites the shim and the snapshots, and only adds the import once.
 */

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PROJECTS = join(HERE, '..', 'projects');
const SNAPSHOTS = join(HERE, 'snapshots');

// project dir -> [ [regex source, snapshot file], ... ]  (first match wins, so order matters)
const TARGETS = {
  'modulo_2/bloco_16/sd-09-project-trybewallet': [
    ['economia\\.awesomeapi\\.com\\.br/json/all', 'awesomeapi-all.json'],
  ],
  'modulo_2/bloco_18/sd-09-project-starwars-planets-search': [
    ['swapi[.\\w]*/api/planets', 'swapi-planets.json'],
  ],
  'modulo_2/bloco_17/sd-09-project-trivia-react-redux': [
    ['opentdb\\.com/api_token\\.php', 'opentdb-token.json'],
    ['opentdb\\.com/api\\.php', 'opentdb-questions.json'],
  ],
  'modulo_2/bloco_19/sd-09-project-recipes-app': [
    ['themealdb\\.com/.*list\\.php\\?i=list', 'themealdb-ingredients.json'],
    ['thecocktaildb\\.com/.*list\\.php\\?i=list', 'thecocktaildb-ingredients.json'],
    ['themealdb\\.com/.*list\\.php\\?c=list', 'themealdb-categories.json'],
    ['thecocktaildb\\.com/.*list\\.php\\?c=list', 'thecocktaildb-categories.json'],
    ['themealdb\\.com/', 'themealdb-search.json'],
    ['thecocktaildb\\.com/', 'thecocktaildb-search.json'],
  ],
};

const shim = (routes) => `/**
 * Preview failsafe - see preview-mocks/install-fallback.mjs. Generated; edit that instead.
 *
 * The real API is called first and its answer used whenever it works, so the preview shows live
 * data. A snapshot captured from the same API is served only if the request fails, returns a
 * non-2xx, or exceeds the timeout - so this project keeps rendering after its API disappears,
 * the way two of its siblings' already have.
 */

// Built with new RegExp rather than literals: these patterns contain URL path separators,
// which would close a /.../ literal early.
const ROUTES = [
${routes.map(([re, file]) => `  [new RegExp(${JSON.stringify(re)}), '${file}'],`).join('\n')}
];

const TIMEOUT_MS = 8000;
const original = window.fetch.bind(window);
const cache = new Map();

function loadSnapshot(file) {
  if (!cache.has(file)) {
    // Lazy and cached: nothing is downloaded while the real API is healthy.
    cache.set(file, original(\`\${import.meta.env.BASE_URL}preview-snapshots/\${file}\`).then((r) => r.json()));
  }
  return cache.get(file);
}

window.fetch = async (input, init) => {
  const url = typeof input === 'string' ? input : (input && input.url) || String(input);
  const route = ROUTES.find(([pattern]) => pattern.test(url));
  if (!route) return original(input, init);

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    const response = await original(input, { ...init, signal: controller.signal });
    clearTimeout(timer);
    if (response.ok) return response;
    throw new Error(\`HTTP \${response.status}\`);
  } catch {
    console.warn(\`[preview] \${url} is unavailable - serving a captured snapshot instead.\`);
    const body = await loadSnapshot(route[1]);
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
`;

const IMPORT_LINE =
  "// Preview failsafe: falls back to a captured snapshot if the API is down. Must run first.\nimport './previewFallback';\n";

for (const [rel, routes] of Object.entries(TARGETS)) {
  const dir = join(PROJECTS, rel);
  writeFileSync(join(dir, 'src', 'previewFallback.js'), shim(routes));

  const snapDir = join(dir, 'public', 'preview-snapshots');
  mkdirSync(snapDir, { recursive: true });
  for (const [, file] of routes) copyFileSync(join(SNAPSHOTS, file), join(snapDir, file));

  const entry = join(dir, 'src', 'index.js');
  const source = readFileSync(entry, 'utf8');
  if (!source.includes('previewFallback')) writeFileSync(entry, IMPORT_LINE + source);

  console.log(`${rel.split('/').pop().padEnd(38)} ${routes.length} route(s)`);
}
