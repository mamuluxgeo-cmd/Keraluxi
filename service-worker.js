const CACHE = 'keralux-v1';
const ASSETS = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest',
  './assets/logo.svg', './assets/hero.svg', './assets/toilet-1.svg', './assets/toilet-2.svg',
  './assets/cabinet-1.svg', './assets/cabinet-2.svg', './assets/cabinet-3.svg', './assets/cabinet-4.svg',
  './assets/cabinet-5.svg', './assets/broom-set.svg', './assets/spin-mop.svg', './assets/kettle.svg',
  './assets/hairdryer.svg', './assets/led-bulb.svg'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
