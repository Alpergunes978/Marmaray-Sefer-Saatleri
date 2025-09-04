// sw.js
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activated');
});

self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Fetching:', event.request.url);
  // You can add caching logic here later, e.g., respond with cached assets.
  event.respondWith(fetch(event. Request));
});
