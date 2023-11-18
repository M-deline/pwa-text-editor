const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');
const { StaleWhileRevalidate } = require('workbox-strategies');

precacheAndRoute(self.__WB_MANIFEST);
//self.__WB_MANIFEST = (self.__WB_MANIFEST || []).concat(self.__precacheManifest || []); 
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

// TODO: Implement asset caching
// registerRoute(
//   ({ request }) => {
//     console.log('listening register route');
//     if (typeof request.destination !== 'string') {
//       console.error('request.destination is not a string:', request.destination);
//       return false;
//     }
//     return ["style", "script", "worker"].includes(request.destination);
//   },
//   new StaleWhileRevalidate({
//     cacheName: "asset-cache",
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// );

registerRoute(
  ({ request }) => request.destination === 'style' || request.destination === 'script' || request.destination === 'worker',
  new StaleWhileRevalidate({
    cacheName: "asset-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
)

// this one was uncommented below  
//registerRoute(
//   // Here we define the callback function that will filter the requests we want to cache (in this case, JS and CSS files)
//   ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
//   new StaleWhileRevalidate({
//     // Name of the cache storage.
//     cacheName: 'asset-cache',
//     plugins: [
//       // This plugin will cache responses with these headers to a maximum-age of 30 days
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// );
registerRoute();


const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];
//leave commented out 
// self.addEventListener('install', function(event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }

//         // Clone the request
//         var fetchRequest = event.request.clone();

//         return fetch(fetchRequest).then(
//           function(response) {
//             // Check if we received a valid response
//             if(!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }

//             // Clone the response
//             var responseToCache = response.clone();

//             caches.open(CACHE_NAME)
//               .then(function(cache) {
//                 cache.put(event.request, responseToCache);
//               });

//             return response;
//           }
//         );
//       })
//     );
// });
