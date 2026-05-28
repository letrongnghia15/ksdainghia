# Khách sạn Đại Nghĩa — Website / Hotel Website

Trang web song ngữ (Tiếng Việt / English) cho **Khách sạn Đại Nghĩa**, một khách sạn bình dân tại Quận Gò Vấp, TP. Hồ Chí Minh.

A bilingual (Vietnamese / English) website for **Dai Nghia Hotel**, a budget hotel in Go Vap District, Ho Chi Minh City.

> Static HTML/CSS/vanilla JS — không cần build, không cần framework. Deploy thẳng lên GitHub Pages.
> Static HTML/CSS/vanilla JS — no build step, no framework. Deploys straight to GitHub Pages.

---

## 🗂 Cấu trúc / Structure

```
dai-nghia-hotel/
├── index.html          Trang chủ / Home
├── rooms.html          Phòng & giá / Rooms & rates
├── amenities.html      Tiện nghi / Amenities
├── gallery.html        Thư viện ảnh / Gallery
├── location.html       Vị trí / Location
├── contact.html        Liên hệ / Contact
├── css/
│   └── style.css       Toàn bộ giao diện / All styling
├── js/
│   ├── i18n.js         Hệ thống song ngữ + từ điển / Bilingual engine + dictionary
│   ├── main.js         Điều hướng, bộ lọc, lightbox, FAQ, form / Nav, filters, lightbox, FAQ, form
│   └── booking.js      Form đặt phòng + hộp xác nhận / Booking form + modal
├── images/             ⬅️ ĐẶT ẢNH CỦA BẠN VÀO ĐÂY / PUT YOUR PHOTOS HERE
├── .nojekyll           (để GitHub Pages phục vụ file đúng cách)
└── README.md
```

---

## 🌐 Hệ thống song ngữ / Bilingual system

Mặc định là **Tiếng Việt**. Khách bấm nút **VI / EN** ở thanh menu để đổi ngôn ngữ; lựa chọn được ghi nhớ trong trình duyệt (localStorage).

Default language is **Vietnamese**. Visitors click the **VI / EN** button in the menu to switch; the choice is remembered in the browser (localStorage).

### Cách thêm / sửa bản dịch / How to add or edit translations

Mọi câu chữ nằm trong **một từ điển duy nhất** trong `js/i18n.js`:

All text lives in **one dictionary** in `js/i18n.js`:

```js
'room.std': { vi: 'Phòng Đôi Tiêu Chuẩn', en: 'Standard Double' },
```

- Sửa chữ: đổi giá trị `vi` hoặc `en`. / To edit wording: change the `vi` or `en` value.
- Thêm câu mới: thêm một dòng `'khoá.moi': { vi: '…', en: '…' }`, rồi gắn `data-i18n="khoá.moi"` vào thẻ HTML.
  / To add new text: add a line `'my.key': { vi: '…', en: '…' }`, then put `data-i18n="my.key"` on the HTML element.

Thuộc tính (placeholder, aria-label) dùng `data-i18n-attr="placeholder:khoá"`.
Attributes use `data-i18n-attr="placeholder:key"`.

---

## 🖼 Thay ảnh thật / Replacing the placeholder photos

Hiện tại các ô ảnh là **nền màu gradient có chữ "Ảnh sẽ được cập nhật"**. Để dùng ảnh thật:

Right now the image areas are **coloured gradient placeholders** reading "Photo coming soon". To use real photos:

1. Chép ảnh vào thư mục `images/` (ví dụ `images/phong-tieu-chuan.jpg`).
   / Copy your photos into the `images/` folder (e.g. `images/standard-room.jpg`).
2. **Trang chủ & trang Phòng** — tìm các khối `<div class="room-card__img" style="...">` và đổi thành:
   / **Home & Rooms pages** — find the `<div class="room-card__img" style="...">` blocks and replace with:
   ```html
   <div class="room-card__img" style="background-image:url('images/standard-room.jpg')"></div>
   ```
3. **Trang thư viện ảnh** — đổi mỗi nút `<button class="gallery-item" ...>` để chứa ảnh thật:
   / **Gallery page** — change each `<button class="gallery-item" ...>` to hold a real image:
   ```html
   <button class="gallery-item" data-gallery-item data-cat="rooms">
     <img src="images/room1.jpg" alt="Phòng tiêu chuẩn">
   </button>
   ```
   (Lightbox sẽ tự hoạt động khi có ảnh thật. / The lightbox activates automatically once real images are present.)
4. **Ảnh nền lớn (hero)** — trong `css/style.css` đặt biến:
   / **Large hero background** — in `css/style.css` set the variable:
   ```css
   .hero { --hero-img: url('../images/hero.jpg'); }
   .page-hero { --page-hero-img: url('../images/banner.jpg'); }
   ```

---

## ✏️ Cần điền thông tin thật / Real details still to fill in

Tìm chữ `[PLACEHOLDER...]` và thay bằng thông tin thật:
Search for `[PLACEHOLDER...]` and replace with real details:

- **Số điện thoại / Phone** — `[PLACEHOLDER: +84 xxx xxx xxx]` (footer + trang Liên hệ)
- **Email** — `[PLACEHOLDER: email@dainghiahotel.com]`
- **Địa chỉ chính xác / Exact address** — sửa khoá `foot.addr` trong `js/i18n.js`
- **Bản đồ / Map** — trong `location.html`, đổi `src` của `<iframe>` và link "Xem chỉ đường" sang địa chỉ Google Maps thật của khách sạn.
- **Giá phòng / Room rates** — giá hiện tại (350k–700k VND) nằm trực tiếp trong `index.html` và `rooms.html`.

---

## ✉️ Cho form Liên hệ hoạt động thật / Making the contact form actually send

Hiện form chỉ hiển thị thông báo cảm ơn (không gửi đi đâu). Để nhận được tin nhắn, dùng dịch vụ miễn phí như **Formspree** hoặc **Netlify Forms**:

The form currently just shows a thank-you message (it doesn't send anywhere). To actually receive messages, use a free service like **Formspree** or **Netlify Forms**:

**Formspree** — đăng ký tại formspree.io, rồi sửa thẻ `<form>` trong `contact.html`:
```html
<form data-contact-form action="https://formspree.io/f/MÃ_CỦA_BẠN" method="POST">
```

---

## 🚀 Xem thử & Đăng lên mạng / Preview & Deploy

### Xem thử trên máy / Preview locally
```bash
cd dai-nghia-hotel
python3 -m http.server 8000
# mở / open http://localhost:8000
```

### Đăng lên GitHub Pages / Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Bilingual budget hotel website"
git branch -M main
git remote add origin https://github.com/letrongnghia15/ksdainghia.git
git push -u origin main --force
```
Sau đó vào **Settings → Pages**, chọn **Deploy from branch → main → / (root)**, lưu lại.
Then go to **Settings → Pages**, choose **Deploy from branch → main → / (root)**, and save.

Trang sẽ chạy tại / The site will be live at:
**https://letrongnghia15.github.io/ksdainghia/**

> ⚠️ GitHub không còn cho đăng nhập bằng mật khẩu. Khi `git push`, dùng **Personal Access Token** (Settings → Developer settings → Tokens, quyền *Contents: read & write*) làm mật khẩu, hoặc dùng **GitHub CLI** (`gh auth login`).
> ⚠️ GitHub no longer accepts password auth. When you `git push`, use a **Personal Access Token** (Settings → Developer settings → Tokens, scope *Contents: read & write*) as the password, or use the **GitHub CLI** (`gh auth login`).

---

## 📄 License

Mã nguồn trang web tự do sử dụng cho khách sạn. / Website code free to use for the hotel.
Nhớ thay ảnh placeholder bằng ảnh bạn có quyền sử dụng. / Remember to replace placeholders with images you have the right to use.
