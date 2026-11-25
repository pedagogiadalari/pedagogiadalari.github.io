// Remove o service worker antigo do Monetag dos navegadores que já o instalaram.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister());
});
