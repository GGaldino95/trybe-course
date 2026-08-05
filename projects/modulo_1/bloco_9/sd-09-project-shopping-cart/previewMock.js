/**
 * Canned Mercado Libre responses for the portfolio's live previews.
 *
 * Mercado Libre closed its public search API - api.mercadolibre.com now answers 403 without an
 * auth token - so the two projects that consume it render empty against the real endpoint. This
 * intercepts window.fetch and answers the three routes they call, leaving every other request
 * alone. The application code is untouched: it still calls the API exactly as it did in 2021.
 *
 * Thumbnails are inline SVG data URIs on purpose. A placeholder image host would be one more
 * third-party that can die, which is the situation this file exists to fix.
 *
 * Copied into each project that needs it - they are independent npm projects with no shared
 * module, and the file is small enough that duplication beats a build-time indirection.
 */

const swatch = (label, bg) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
      <rect width="180" height="180" fill="${bg}"/>
      <text x="90" y="96" font-family="system-ui,sans-serif" font-size="15"
            fill="#ffffff" text-anchor="middle">${label}</text>
    </svg>`,
  )}`;

const CATEGORIES = [
  { id: 'MLB5672', name: 'Acessórios para Veículos' },
  { id: 'MLB1051', name: 'Celulares e Telefones' },
  { id: 'MLB1648', name: 'Informática' },
  { id: 'MLB1000', name: 'Eletrônicos, Áudio e Vídeo' },
  { id: 'MLB1276', name: 'Esportes e Fitness' },
  { id: 'MLB1196', name: 'Instrumentos Musicais' },
];

const PRODUCTS = [
  { id: 'MLB1615760527', title: 'Notebook Dell Inspiron 15 i5 8GB 256GB SSD', price: 3299.9, bg: '#3b5bdb' },
  { id: 'MLB1932112331', title: 'Monitor LG UltraWide 29" IPS Full HD', price: 1249.0, bg: '#1971c2' },
  { id: 'MLB2085434567', title: 'Teclado Mecânico Redragon Kumara RGB', price: 219.9, bg: '#0c8599' },
  { id: 'MLB1447729813', title: 'Mouse Logitech MX Master 3S Bluetooth', price: 649.0, bg: '#087f5b' },
  { id: 'MLB1729845621', title: 'Cadeira Gamer ThunderX3 EC3 Reclinável', price: 1099.0, bg: '#5f3dc4' },
  { id: 'MLB2011938472', title: 'SSD Kingston NV2 1TB NVMe PCIe 4.0', price: 389.9, bg: '#a61e4d' },
  { id: 'MLB1884736251', title: 'Headset HyperX Cloud Stinger 2', price: 279.0, bg: '#e8590c' },
  { id: 'MLB1556231908', title: 'Webcam Logitech C920s Full HD 1080p', price: 429.9, bg: '#495057' },
].map((p) => ({ ...p, thumbnail: swatch(`R$ ${p.price.toFixed(2)}`, p.bg), available_quantity: 10 }));

const json = (body) =>
  Promise.resolve(
    new Response(JSON.stringify(body), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }),
  );

function respond(url) {
  // GET /sites/MLB/categories
  if (url.includes('/sites/MLB/categories')) return json(CATEGORIES);

  // GET /items/:id
  const item = url.match(/\/items\/([\w-]+)/);
  if (item) {
    const found = PRODUCTS.find((p) => p.id === item[1]);
    return json(found ?? { ...PRODUCTS[0], id: item[1] });
  }

  // GET /sites/MLB/search?q=&category=
  if (url.includes('/sites/MLB/search')) {
    const q = (new URL(url, 'https://api.mercadolibre.com').searchParams.get('q') ?? '').toLowerCase();
    const results = q ? PRODUCTS.filter((p) => p.title.toLowerCase().includes(q)) : PRODUCTS;
    // An empty query matched nothing would read as a broken preview, so fall back to everything.
    return json({ results: results.length ? results : PRODUCTS });
  }

  return json({ results: PRODUCTS });
}

const original = window.fetch.bind(window);

window.fetch = (input, init) => {
  const url = typeof input === 'string' ? input : input.url;
  if (url && url.includes('api.mercadolibre.com')) return respond(url);
  return original(input, init);
};
