# Cái Nữa Hong – trang mở app

Trang này cho app nội bộ có icon và tên riêng khi thêm vào màn hình chính.
Bấm icon (địa chỉ có `?app=1`) là chuyển thẳng sang app Apps Script, chạy y như mở bằng Safari/Chrome.
App không còn bị lồng trong trang này, vì ở chế độ màn hình chính iPhone chặn bớt app bị lồng (camera, đăng nhập).

- Link app hiện tại: https://script.google.com/macros/s/AKfycbzbhbsgYHQHGOIUU6gtN0aCQYEyeW75O6rbpGftGSQxJ4PDhk_Op7iYjBev13RqNSJAuA/exec
- Đổi link app: sửa dòng `var APP_URL = '...'` trong `index.html`.
- Đổi icon: thay các file `icon-180.png`, `icon-192.png`, `icon-512.png`, `favicon-64.png` (giữ nguyên tên file).
- `sw.js` chỉ để gỡ bộ nhớ đệm của bản trước trên các máy đã cài, không cần sửa.
