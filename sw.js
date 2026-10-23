// Bản trước dùng service worker để lưu trang vỏ. Trang mới không cần nữa:
// file này tự xóa bộ nhớ đệm cũ và tự gỡ trên các máy đã cài bản trước.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.registration.unregister(); })
  );
});
