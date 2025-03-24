const CACHE_NAME = 'pwa';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/icons/foto1_192.png',
    '/icons/foto2_512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});