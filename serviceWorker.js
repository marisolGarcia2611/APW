const staticDevCoffee = "dev-coffee-site-v1";
const assets=[
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "images/cafe1.png",
    "images/cafe2.png",
    // "images/cafe3.png",
    "images/cafe4.png",
    "images/cafe6.jpg",
    "images/cafe7.jpg",
    "images/cafe8.jpg",
    "images/cafe9.jpg",
    "images/icon.png",
]
self.addEventListener("install",installEvent=>{
    installEvent.waitUntil(Caches.open(staticDevCoffee).then(cache=>{
        cache.addAll(assets)
    }))
})

self.addEventListener("fetch", fetchEvent=>{
    fetchEvent.respondWith(caches.match(fetchEvent.request).then(res=>{
        return res || fetchEvent(fetchEvent.request)
    }))
})