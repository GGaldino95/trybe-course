/**
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
  [new RegExp("swapi[.\\w]*/api/planets"), 'swapi-planets.json'],
];

const TIMEOUT_MS = 8000;
const original = window.fetch.bind(window);
const cache = new Map();

function loadSnapshot(file) {
  if (!cache.has(file)) {
    // Lazy and cached: nothing is downloaded while the real API is healthy.
    cache.set(file, original(`${import.meta.env.BASE_URL}preview-snapshots/${file}`).then((r) => r.json()));
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
    throw new Error(`HTTP ${response.status}`);
  } catch {
    console.warn(`[preview] ${url} is unavailable - serving a captured snapshot instead.`);
    const body = await loadSnapshot(route[1]);
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
