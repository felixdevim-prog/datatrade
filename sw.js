const CACHE_NAME = 'datatrade-pwa-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  'https://raw.githubusercontent.com/felixdevim-prog/datatrade/main/Gemini_Generated_Image_ahwwjahwwjahwwja.png'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar peticiones (modo offline)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Si está en caché, lo entrega
        }
        return fetch(event.request); // Si no, va a internet
      })
  );
});
