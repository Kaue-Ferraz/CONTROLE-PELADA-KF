// Service Worker — Pelada KF
// Atualiza automaticamente quando o index.html muda

const CACHE_NAME = 'pelada-kf-v202603091840';
const CACHE_URLS = ['/'];

self.addEventListener('install', event => {
  // Ativa imediatamente sem esperar o tab fechar
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Remove caches antigos
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Para o index.html: sempre busca na rede primeiro, fallback para cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  // Demais recursos: cache first
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
