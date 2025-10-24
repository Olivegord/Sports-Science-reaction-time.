const CACHE_VERSION = 'v1';
const CACHE_NAME = `reaction-lab-${CACHE_VERSION}`;
const BASE_PATH = self.location.pathname.replace(/sw\.js$/i, '');
const OFFLINE_ASSETS = [
  BASE_PATH || '/',
  `${BASE_PATH}index.html`,
  `${BASE_PATH}data.html`,
  `${BASE_PATH}sw.js`,
  'https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key.startsWith('reaction-lab-') && key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match(`${BASE_PATH}index.html`))
    )
  );
});
