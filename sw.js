const CACHE = "friend-cache-v2";

const urls = [
  "/",
  "/index.html",
  "/cards.html",
  "/favicon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(urls))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
