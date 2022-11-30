const CACHE = 'fake-store-v1';

function fromNetwork(request) {
    return new Promise((fulfill, reject) => {
        fetch(request).then(async (response) => {
            const res = await response.clone();
            await caches.open(CACHE).then((cache) => {
                if (cache.match(request.url)) {
                    cache.put(request.url, res);
                } else {
                    cache.add(request.url, res);
                }
            });
            fulfill(response);
        }, reject);
    });
}

function fromCache(request, err) {
    return caches
        .open(CACHE)
        .then((cache) => cache.match(request).then((matching) => matching || err));
}

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(['/'])));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fromNetwork(event.request).catch((err) => {
            return fromCache(event.request, err);
        })
    );
});
