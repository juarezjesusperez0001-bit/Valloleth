const CACHE_NAME = 'estudio-pro-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  // Puedes añadir aquí los archivos CSS o JS si los tuvieras por separado
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/date-fns/cdn.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Si está en caché, lo devuelve
        }
        return fetch(event.request); // Si no, lo busca en la red
      }
    )
  );
});