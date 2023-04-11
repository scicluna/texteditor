const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');
const { StaleWhileRevalidate } = require("workbox-strategies");

precacheAndRoute(self.__WB_MANIFEST);

// TODO: Explain what `registerRoute` does
registerRoute(
  // TODO: What does this line do?
  ({ request }) => ["style", "script", "worker"].includes(request.destination),
  new StaleWhileRevalidate({
    // Name of the cache storage.
    cacheName: "asset-cache",
    plugins: [
      // TODO: Explain what this plugin is doing
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

