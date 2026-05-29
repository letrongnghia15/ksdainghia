/* ==========================================================================
   Khách sạn Đại Nghĩa — i18n.js
   Bilingual VI/EN. Default Vietnamese. Choice saved in a cookie-free way
   (in-memory + URL not used; we keep it simple with a module variable and
   re-apply on load via the inline <script> that reads the stored attribute).

   NOTE: localStorage is intentionally avoided per platform constraints in
   some embeds; here on GitHub Pages it is available, so we use it with a
   guard. Falls back gracefully if unavailable.
   ========================================================================== */
(function () {
  'use strict';

  /* ----- Translation dictionary -------------------------------------------
     Keys are grouped by area. Each key has { vi, en }.
     Add data-i18n="key" to any element; its textContent is replaced.
     For attributes use data-i18n-attr="placeholder:key;aria-label:key".
     ----------------------------------------------------------------------- */
  var I18N = {
    // ---- Global / nav ----
    'nav.home':        { vi: 'Trang chủ',     en: 'Home' },
    'nav.rooms':       { vi: 'Phòng',         en: 'Rooms' },
    'nav.amenities':   { vi: 'Tiện nghi',     en: 'Amenities' },
    'nav.gallery':     { vi: 'Thư viện ảnh',  en: 'Gallery' },
    'nav.location':    { vi: 'Vị trí',        en: 'Location' },
    'nav.contact':     { vi: 'Liên hệ',       en: 'Contact' },
    'nav.book':        { vi: 'Đặt phòng',     en: 'Book Now' },
    'brand.tag':       { vi: 'Gò Vấp · Sài Gòn', en: 'Go Vap · Saigon' },

    // ---- Buttons / common ----
    'btn.exploreRooms':{ vi: 'Khám phá các phòng', en: 'Explore Our Rooms' },
    'btn.findUs':      { vi: 'Tìm chúng tôi',  en: 'Find Us' },
    'btn.viewAll':     { vi: 'Xem tất cả phòng', en: 'View All Rooms' },
    'btn.bookRoom':    { vi: 'Đặt phòng này',  en: 'Book This Room' },
    'btn.checkAvail':  { vi: 'Kiểm tra phòng trống', en: 'Check Availability' },
    'btn.sendMsg':     { vi: 'Gửi tin nhắn',   en: 'Send Message' },
    'btn.directions':  { vi: 'Xem chỉ đường',  en: 'Get Directions' },
    'btn.viewGallery': { vi: 'Xem thư viện ảnh', en: 'View Gallery' },
    'btn.amenities':   { vi: 'Khám phá tiện nghi', en: 'Explore Amenities' },
    'btn.ack':         { vi: 'Đã rõ, cảm ơn',  en: 'Got it, thanks' },
    'btn.reset':       { vi: 'Đặt lại bộ lọc', en: 'Reset filters' },

    // ---- HERO (home) ----
    'hero.eyebrow':    { vi: 'Chào mừng đến Quận Gò Vấp', en: 'Welcome to Go Vap District' },
    'hero.title':      { vi: 'Khách sạn bình dân, sạch sẽ và thân thiện ở Gò Vấp',
                         en: 'A clean, friendly budget hotel in Go Vap' },
    'hero.lead':       { vi: 'Phòng nghỉ thoải mái với mức giá phải chăng ngay tại Quận Gò Vấp, chỉ vài phút từ Sân bay Tân Sơn Nhất. Đón tiếp nồng hậu cho cả khách Việt và khách nước ngoài.',
                         en: 'Comfortable rooms at honest prices in Go Vap District, just minutes from Tan Son Nhat Airport. A warm welcome for Vietnamese and foreign guests alike.' },
    'hero.metaAirport':{ vi: 'Sân bay',        en: 'Airport' },
    'hero.metaAirportV':{ vi: '15 phút lái xe', en: '15 min drive' },
    'hero.metaDesk':   { vi: 'Lễ tân',         en: 'Front desk' },
    'hero.metaDeskV':  { vi: 'Phục vụ 24/7',   en: 'Open 24/7' },
    'hero.metaWifi':   { vi: 'Wi-Fi',          en: 'Wi-Fi' },
    'hero.metaWifiV':  { vi: 'Miễn phí',       en: 'Free' },

    // ---- Booking widget ----
    'book.title':      { vi: 'Đặt phòng', en: 'Book Your Stay' },
    'book.sub':        { vi: 'Giá tốt nhất khi đặt trực tiếp.', en: 'Best rates when you book direct.' },
    'book.checkin':    { vi: 'Nhận phòng', en: 'Check-in' },
    'book.checkout':   { vi: 'Trả phòng', en: 'Check-out' },
    'book.roomtype':   { vi: 'Loại phòng', en: 'Room type' },
    'book.guests':     { vi: 'Số khách', en: 'Guests' },
    'book.anyRoom':    { vi: 'Bất kỳ phòng nào', en: 'Any room type' },
    'book.g1':         { vi: '1 khách', en: '1 guest' },
    'book.g2':         { vi: '2 khách', en: '2 guests' },
    'book.g3':         { vi: '3 khách', en: '3 guests' },
    'book.g4':         { vi: '4 khách', en: '4 guests' },

    // ---- Welcome / about ----
    'welcome.eyebrow': { vi: 'Về chúng tôi', en: 'About Us' },
    'welcome.title':   { vi: 'Một nơi nghỉ chân giản dị và đáng tin cậy', en: 'A simple, dependable place to stay' },
    'welcome.p1':      { vi: 'Le Loi Hotel là khách sạn bình dân, tập trung vào những điều quan trọng nhất: phòng sạch sẽ, giường êm, máy lạnh mát, nước nóng ổn định và Wi-Fi nhanh — tất cả với mức giá phải chăng.',
                         en: 'Le Loi Hotel is a budget hotel focused on what matters most: clean rooms, comfortable beds, cool air conditioning, reliable hot water, and fast Wi-Fi — all at an affordable price.' },
    'welcome.p2':      { vi: 'Phần lớn khách của chúng tôi là người Việt, nhưng chúng tôi cũng thường xuyên đón khách nước ngoài. Lễ tân nói được tiếng Việt và tiếng Anh, luôn sẵn lòng giúp bạn gọi taxi, tìm quán ăn ngon hoặc chỉ đường.',
                         en: 'Most of our guests are Vietnamese, but we welcome foreign visitors often too. Our front desk speaks both Vietnamese and English, and is always glad to help you find a taxi, a good meal, or your way around.' },

    // ---- Why choose us ----
    'why.eyebrow':     { vi: 'Vì sao chọn chúng tôi', en: 'Why Choose Us' },
    'why.title':       { vi: 'Những điều giản dị, làm thật tốt', en: 'Simple things, done well' },
    'why.loc':         { vi: 'Vị trí thuận tiện', en: 'Convenient location' },
    'why.locP':        { vi: 'Ngay tại Gò Vấp, gần chợ, công viên và sân bay.', en: 'Right in Go Vap, near markets, parks, and the airport.' },
    'why.price':       { vi: 'Giá minh bạch', en: 'Honest pricing' },
    'why.priceP':      { vi: 'Giá rõ ràng, không phí ẩn, đón tiếp như nhau dù bạn ở một đêm hay cả tháng.', en: 'Clear prices, no hidden fees, the same welcome whether you stay one night or a month.' },
    'why.service':     { vi: 'Phục vụ 24/7', en: '24/7 service' },
    'why.serviceP':    { vi: 'Dù bạn đến lúc nửa đêm hay taxi đến trễ, luôn có người sẵn sàng giúp đỡ.', en: 'Whether you arrive at midnight or your taxi runs late, someone is always there to help.' },
    'why.wifi':        { vi: 'Wi-Fi miễn phí', en: 'Free Wi-Fi' },
    'why.wifiP':       { vi: 'Internet ổn định khắp khách sạn — đủ nhanh để gọi video và làm việc.', en: 'Reliable internet throughout — fast enough for video calls and work.' },

    // ---- Featured rooms (home) ----
    'rooms.eyebrow':   { vi: 'Phòng nghỉ', en: 'Our Rooms' },
    'rooms.title':     { vi: 'Phòng cho mọi nhu cầu', en: 'A room for every need' },
    'rooms.lead':      { vi: 'Bốn loại phòng, đều sạch sẽ và đầy đủ tiện nghi cơ bản.', en: 'Four room types, all clean and fully equipped with the essentials.' },

    // Room names + descriptions (shared on home + rooms page)
    'room.std':        { vi: 'Phòng Đôi Tiêu Chuẩn', en: 'Standard Double' },
    'room.stdDesc':    { vi: 'Phòng gọn gàng, thoải mái cho khách đi một mình hoặc cặp đôi. Máy lạnh, Wi-Fi miễn phí, phòng tắm riêng.',
                         en: 'A tidy, comfortable room for solo travellers or couples. Air conditioning, free Wi-Fi, private bathroom.' },
    'room.sup':        { vi: 'Phòng Đôi Superior', en: 'Superior Twin' },
    'room.supDesc':    { vi: 'Phòng rộng hơn với hai giường đơn — phù hợp cho bạn bè hoặc đồng nghiệp.',
                         en: 'A larger room with two single beds — ideal for friends or colleagues.' },
    'room.dlx':        { vi: 'Phòng Deluxe', en: 'Deluxe Room' },
    'room.dlxDesc':    { vi: 'Rộng rãi hơn với giường lớn, bàn làm việc và tủ lạnh mini.',
                         en: 'More space with a large bed, work desk, and mini-fridge.' },
    'room.fam':        { vi: 'Phòng Gia Đình', en: 'Family Room' },
    'room.famDesc':    { vi: 'Phòng lớn cho tối đa bốn khách, có khu vực ngồi riêng — phù hợp cho gia đình.',
                         en: 'A large room for up to four guests with a seating area — great for families.' },
    'room.from':       { vi: 'từ', en: 'from' },
    'room.perNight':   { vi: '/ đêm', en: '/ night' },
    'room.sleeps2':    { vi: '2 khách', en: 'Sleeps 2' },
    'room.sleeps3':    { vi: '3 khách', en: 'Sleeps 3' },
    'room.sleeps4':    { vi: '4 khách', en: 'Sleeps 4' },
    'room.badgePopular':{ vi: 'Được chọn nhiều', en: 'Most popular' },
    'room.badgeValue': { vi: 'Giá tốt', en: 'Best value' },
    'room.badgeFamily':{ vi: 'Cho gia đình', en: 'For families' },

    // ---- Testimonials ----
    'test.eyebrow':    { vi: 'Cảm nhận của khách', en: 'Guest Reviews' },
    'test.title':      { vi: 'Khách của chúng tôi nói gì', en: 'What our guests say' },
    'test.q1':         { vi: '“Phòng sạch sẽ, yên tĩnh và giá rất hợp lý. Nhân viên nhiệt tình giúp tôi gọi taxi và chỉ chỗ ăn ngon.”',
                         en: '“The room was clean and quiet, and the price was very reasonable. Staff happily helped me get a taxi and find good food.”' },
    'test.a1':         { vi: 'Chị Hương', en: 'Ms. Huong' },
    'test.r1':         { vi: 'Khách công tác', en: 'Business traveller' },
    'test.q2':         { vi: '“Stayed two weeks while working in Saigon. Wi-Fi was fast, breakfast was tasty, and the front desk handled my laundry without any fuss.”',
                         en: '“Stayed two weeks while working in Saigon. Wi-Fi was fast, breakfast was tasty, and the front desk handled my laundry without any fuss.”' },
    'test.a2':         { vi: 'David', en: 'David' },
    'test.r2':         { vi: 'Khách nước ngoài', en: 'Foreign guest' },
    'test.q3':         { vi: '“Gia đình tôi bốn người ở phòng gia đình rất thoải mái. Gần sân bay, nhân viên thân thiện với các cháu nhỏ.”',
                         en: '“Our family of four was very comfortable in the family room. Close to the airport, and staff were friendly with our young kids.”' },
    'test.a3':         { vi: 'Anh Tuấn', en: 'Mr. Tuan' },
    'test.r3':         { vi: 'Gia đình bốn người', en: 'Family of four' },

    // ---- Nearby attractions (home teaser) ----
    'near.eyebrow':    { vi: 'Lân cận', en: 'Nearby' },
    'near.title':      { vi: 'Quanh khách sạn', en: 'Around the hotel' },
    'near.lead':       { vi: 'Chợ, công viên và sân bay — tất cả trong tầm tay.', en: 'Markets, parks, and the airport — all within easy reach.' },

    // ---- CTA band ----
    'cta.title':       { vi: 'Sẵn sàng đặt phòng?', en: 'Ready to book?' },
    'cta.lead':        { vi: 'Gọi cho lễ tân hoặc gửi yêu cầu đặt phòng — chúng tôi phản hồi nhanh.', en: 'Call the front desk or send a booking request — we reply quickly.' },
    'cta.btn':         { vi: 'Liên hệ ngay', en: 'Contact us' },

    // ---- Footer ----
    'foot.about':      { vi: 'Khách sạn bình dân tại Quận Gò Vấp, Thành phố Hồ Chí Minh. Sạch sẽ, thân thiện, giá hợp lý.', en: 'A budget hotel in Go Vap District, Ho Chi Minh City. Clean, friendly, affordable.' },
    'foot.links':      { vi: 'Liên kết', en: 'Quick Links' },
    'foot.contact':    { vi: 'Liên hệ', en: 'Contact' },
    'foot.addr':       { vi: '25 Đường Lê Lợi, Phường 3, Phường Hạnh Thông, Gò Vấp, TP. Hồ Chí Minh', en: '25 Le Loi Street, Ward 3, Hanh Thong, Go Vap, Ho Chi Minh City, Vietnam' },
    'foot.rights':     { vi: 'Bảo lưu mọi quyền.', en: 'All rights reserved.' },

    // ---- Rooms page ----
    'roomsPage.eyebrow':{ vi: 'Phòng nghỉ', en: 'Accommodation' },
    'roomsPage.title': { vi: 'Phòng & giá', en: 'Rooms & Rates' },
    'roomsPage.lead':  { vi: 'Bốn loại phòng, đều sạch sẽ và đầy đủ tiện nghi cơ bản. Lọc để tìm phòng phù hợp.', en: 'Four room types, all clean and well-equipped with the basics. Filter to find your fit.' },
    'roomsPage.filterType': { vi: 'Loại phòng', en: 'Room type' },
    'roomsPage.filterGuests': { vi: 'Số khách', en: 'Guests' },
    'roomsPage.filterPrice': { vi: 'Mức giá', en: 'Price' },
    'roomsPage.allTypes': { vi: 'Tất cả', en: 'All types' },
    'roomsPage.anyGuests': { vi: 'Bất kỳ', en: 'Any' },
    'roomsPage.anyPrice': { vi: 'Bất kỳ', en: 'Any price' },
    'roomsPage.priceLow': { vi: 'Dưới 400.000đ', en: 'Under 400,000đ' },
    'roomsPage.priceMid': { vi: '400.000–600.000đ', en: '400,000–600,000đ' },
    'roomsPage.priceHigh': { vi: 'Trên 600.000đ', en: 'Over 600,000đ' },
    'roomsPage.g2plus': { vi: '2+ khách', en: '2+ guests' },
    'roomsPage.g3plus': { vi: '3+ khách', en: '3+ guests' },
    'roomsPage.g4plus': { vi: '4+ khách', en: '4+ guests' },
    'roomsPage.empty': { vi: 'Không có phòng nào phù hợp với bộ lọc.', en: 'No rooms match your filters.' },
    'roomsPage.features': { vi: 'Tiện ích phòng', en: 'Room features' },

    // room feature bullets
    'feat.ac':         { vi: 'Máy lạnh', en: 'Air conditioning' },
    'feat.wifi':       { vi: 'Wi-Fi miễn phí', en: 'Free Wi-Fi' },
    'feat.tv':         { vi: 'TV truyền hình cáp', en: 'Cable TV' },
    'feat.bath':       { vi: 'Phòng tắm riêng, nước nóng', en: 'Private bathroom, hot water' },
    'feat.fridge':     { vi: 'Tủ lạnh mini', en: 'Mini-fridge' },
    'feat.desk':       { vi: 'Bàn làm việc', en: 'Work desk' },
    'feat.twin':       { vi: 'Hai giường đơn', en: 'Two single beds' },
    'feat.king':       { vi: 'Một giường lớn', en: 'One large bed' },
    'feat.seating':    { vi: 'Khu vực ngồi', en: 'Seating area' },

    // ---- Amenities page ----
    'amen.eyebrow':    { vi: 'Tiện nghi & dịch vụ', en: 'Amenities & Services' },
    'amen.title':      { vi: 'Mọi thứ bạn cần cho một kỳ nghỉ dễ chịu', en: 'Everything you need for an easy stay' },
    'amen.lead':       { vi: 'Chúng tôi tập trung vào những điều cơ bản được làm tốt, cùng vài dịch vụ thêm khi bạn cần.', en: 'We focus on the basics done well, plus a few extra services when you need them.' },
    'amen.includedTitle': { vi: 'Tiện nghi tiêu chuẩn', en: 'Standard amenities' },
    'amen.includedLead': { vi: 'Có sẵn cho mọi phòng, không phụ phí.', en: 'Included with every room, no surprises.' },
    'amen.wifi':       { vi: 'Wi-Fi miễn phí', en: 'Free Wi-Fi' },
    'amen.wifiP':      { vi: 'Internet ổn định khắp các tầng.', en: 'Reliable internet on every floor.' },
    'amen.desk':       { vi: 'Lễ tân 24 giờ', en: '24-hour front desk' },
    'amen.deskP':      { vi: 'Luôn có người trực, sẵn sàng hỗ trợ.', en: 'Always staffed and ready to help.' },
    'amen.ac':         { vi: 'Máy lạnh', en: 'Air conditioning' },
    'amen.acP':        { vi: 'Mỗi phòng đều có máy lạnh, điều khiển theo ý bạn.', en: 'Every room is air-conditioned, set to your preference.' },
    'amen.clean':      { vi: 'Dọn phòng hàng ngày', en: 'Daily housekeeping' },
    'amen.cleanP':     { vi: 'Phòng được dọn và thay khăn mỗi ngày.', en: 'Rooms cleaned and towels refreshed daily.' },
    'amen.laundry':    { vi: 'Giặt ủi', en: 'Laundry service' },
    'amen.laundryP':   { vi: 'Dịch vụ giặt ủi giá hợp lý, trả trong ngày.', en: 'Affordable laundry with same-day turnaround.' },
    'amen.luggage':    { vi: 'Giữ hành lý', en: 'Luggage storage' },
    'amen.luggageP':   { vi: 'Gửi hành lý miễn phí trước hoặc sau khi nhận phòng.', en: 'Free luggage storage before and after your stay.' },
    'amen.parking':    { vi: 'Bãi đậu xe', en: 'Parking' },
    'amen.parkingP':   { vi: 'Chỗ để xe máy và ô tô an toàn, miễn phí cho khách.', en: 'Secure motorbike and car parking, free for guests.' },
    'amen.breakfast':  { vi: 'Bữa sáng', en: 'Breakfast' },
    'amen.breakfastP': { vi: 'Bữa sáng đơn giản có sẵn mỗi buổi sáng theo yêu cầu.', en: 'A simple breakfast available each morning on request.' },
    'amen.english':    { vi: 'Nhân viên nói tiếng Anh', en: 'English-speaking staff' },
    'amen.englishP':   { vi: 'Lễ tân nói được tiếng Việt và tiếng Anh.', en: 'Front desk speaks Vietnamese and English.' },
    'amen.servTitle':  { vi: 'Dịch vụ theo yêu cầu', en: 'Services on request' },
    'amen.servLead':   { vi: 'Báo trước cho lễ tân và chúng tôi sẽ sắp xếp.', en: 'Let the front desk know in advance and we will arrange it.' },
    'amen.airport':    { vi: 'Đưa đón sân bay', en: 'Airport transfer' },
    'amen.airportP':   { vi: 'Đón và trả tại Sân bay Tân Sơn Nhất với giá cố định.', en: 'Pickup and drop-off at Tan Son Nhat Airport at a fixed price.' },
    'amen.tour':       { vi: 'Tour & vé tham quan', en: 'Tours & tickets' },
    'amen.tourP':      { vi: 'Đặt tour trong ngày và tư vấn điểm tham quan.', en: 'Day-trip bookings and sightseeing advice.' },
    'amen.moto':       { vi: 'Thuê xe máy', en: 'Motorbike rental' },
    'amen.motoP':      { vi: 'Thuê xe máy theo ngày qua đối tác địa phương.', en: 'Daily motorbike rental via local partners.' },
    'amen.sim':        { vi: 'Thẻ SIM', en: 'SIM cards' },
    'amen.simP':       { vi: 'Thẻ SIM du lịch, lắp sẵn khi bạn đến.', en: 'Tourist SIM cards, set up when you arrive.' },

    // ---- Gallery page ----
    'gal.eyebrow':     { vi: 'Hình ảnh', en: 'Photos' },
    'gal.title':       { vi: 'Thư viện ảnh', en: 'Photo Gallery' },
    'gal.lead':        { vi: 'Hình ảnh phòng, khu vực chung và xung quanh khách sạn.', en: 'Photos of our rooms, common areas, and around the hotel.' },
    'gal.all':         { vi: 'Tất cả', en: 'All' },
    'gal.rooms':       { vi: 'Phòng', en: 'Rooms' },
    'gal.common':      { vi: 'Khu vực chung', en: 'Common areas' },
    'gal.area':        { vi: 'Xung quanh', en: 'Around' },
    'gal.placeholder': { vi: 'Ảnh sẽ được cập nhật', en: 'Photo coming soon' },

    // ---- Location page ----
    'loc.eyebrow':     { vi: 'Vị trí & chỉ đường', en: 'Location & Directions' },
    'loc.title':       { vi: 'Tìm chúng tôi', en: 'Find Us' },
    'loc.lead':        { vi: 'Tại Quận Gò Vấp — gần sân bay, chợ và công viên, nhưng vẫn yên tĩnh vào ban đêm.', en: 'In Go Vap District — close to the airport, markets, and parks, yet quiet at night.' },
    'loc.mapTitle':    { vi: 'Bản đồ', en: 'On the map' },
    'loc.howTitle':    { vi: 'Cách đến khách sạn', en: 'How to get here' },
    'loc.airport':     { vi: 'Từ sân bay', en: 'From the airport' },
    'loc.airportP':    { vi: 'Sân bay Tân Sơn Nhất cách khoảng 6 km — 15 đến 25 phút đi xe. Chúng tôi có thể sắp xếp xe đón với giá cố định.', en: 'Tan Son Nhat Airport is about 6 km away — 15 to 25 minutes by car. We can arrange a pickup at a fixed price.' },
    'loc.taxi':        { vi: 'Taxi & Grab', en: 'Taxi & Grab' },
    'loc.taxiP':       { vi: 'Taxi và Grab đều dễ gọi. Vinasun và Mai Linh là các hãng taxi uy tín.', en: 'Taxis and Grab are easy to get. Vinasun and Mai Linh are trusted taxi brands.' },
    'loc.center':      { vi: 'Từ trung tâm', en: 'From the centre' },
    'loc.centerP':     { vi: 'Từ Quận 1 mất khoảng 20–30 phút đi xe, theo hướng tây bắc qua Phú Nhuận vào Gò Vấp.', en: 'From District 1 it is about 20–30 minutes by car, heading north-west through Phu Nhuan into Go Vap.' },
    'loc.nearTitle':   { vi: 'Điểm tham quan lân cận', en: 'Nearby attractions' },

    // attractions
    'attr.airport':    { vi: 'Sân bay Tân Sơn Nhất', en: 'Tan Son Nhat Airport' },
    'attr.airportP':   { vi: 'Sân bay quốc tế chính của thành phố.', en: "The city's main international airport." },
    'attr.park':       { vi: 'Công viên Gia Định', en: 'Gia Dinh Park' },
    'attr.parkP':      { vi: 'Không gian xanh rộng, lý tưởng để đi bộ buổi sáng.', en: 'A large green space, ideal for morning walks.' },
    'attr.market':     { vi: 'Chợ Gò Vấp', en: 'Go Vap Market' },
    'attr.marketP':    { vi: 'Chợ địa phương với đồ tươi và món ăn đường phố.', en: 'A local market with fresh produce and street food.' },
    'attr.mall':       { vi: 'Cityland Center Hills', en: 'Cityland Center Hills' },
    'attr.mallP':      { vi: 'Khu mua sắm và ăn uống hiện đại.', en: 'A modern shopping and dining complex.' },

    // ---- Contact page ----
    'con.eyebrow':     { vi: 'Liên hệ', en: 'Get in Touch' },
    'con.title':       { vi: 'Liên hệ với chúng tôi', en: 'Contact us' },
    'con.lead':        { vi: 'Câu hỏi về phòng, yêu cầu đặc biệt hay cần tư vấn — lễ tân luôn sẵn lòng, cả ngày lẫn đêm.', en: 'Questions about rooms, special requests, or local tips — our front desk is happy to help, day or night.' },
    'con.formTitle':   { vi: 'Gửi tin nhắn', en: 'Send a message' },
    'con.name':        { vi: 'Họ và tên', en: 'Full name' },
    'con.email':       { vi: 'Email', en: 'Email address' },
    'con.phone':       { vi: 'Số điện thoại (không bắt buộc)', en: 'Phone (optional)' },
    'con.subject':     { vi: 'Chủ đề', en: 'Subject' },
    'con.subjChoose':  { vi: 'Vui lòng chọn…', en: 'Please choose…' },
    'con.subjBooking': { vi: 'Đặt phòng', en: 'Booking inquiry' },
    'con.subjGroup':   { vi: 'Đặt nhóm / dài ngày', en: 'Group or long-stay' },
    'con.subjAmen':    { vi: 'Tiện nghi & dịch vụ', en: 'Amenities & services' },
    'con.subjOther':   { vi: 'Khác', en: 'Something else' },
    'con.message':     { vi: 'Tin nhắn', en: 'Your message' },
    'con.msgPlaceholder': { vi: 'Cho chúng tôi biết ngày dự kiến và điều bạn cần hỗ trợ.', en: 'Tell us your dates and anything we can help with.' },
    'con.formNote':    { vi: 'Gửi tin nhắn đồng nghĩa bạn đồng ý được liên hệ lại. Chúng tôi không chia sẻ thông tin của bạn.', en: 'By sending this you agree to be contacted. We never share your details.' },
    'con.success':     { vi: 'Cảm ơn — tin nhắn của bạn đã được gửi. Chúng tôi sẽ liên hệ lại sớm. Nếu gấp, vui lòng gọi lễ tân.', en: 'Thank you — your message has been sent. We will be in touch soon. If it is urgent, please call the front desk.' },
    'con.deskTitle':   { vi: 'Lễ tân', en: 'Front desk' },
    'con.phoneLabel':  { vi: 'Điện thoại', en: 'Phone' },
    'con.emailLabel':  { vi: 'Email', en: 'Email' },
    'con.addrLabel':   { vi: 'Địa chỉ', en: 'Address' },
    'con.hoursLabel':  { vi: 'Giờ làm việc', en: 'Hours' },
    'con.hoursValue':  { vi: 'Mở cửa 24/7', en: 'Open 24/7' },
    'con.faqTitle':    { vi: 'Câu hỏi thường gặp', en: 'Common questions' },
    'con.faqQ1':       { vi: 'Giờ nhận và trả phòng?', en: 'Check-in and check-out times?' },
    'con.faqA1':       { vi: 'Nhận phòng từ 14:00, trả phòng trước 12:00. Nếu lịch của bạn khác, hãy báo trước — chúng tôi sẽ cố gắng sắp xếp miễn phí nếu còn phòng. Giữ hành lý luôn miễn phí.', en: 'Check-in from 14:00, check-out by 12:00. If your schedule differs, let us know in advance — we will try to accommodate at no charge, subject to availability. Luggage storage is always free.' },
    'con.faqQ2':       { vi: 'Có bao gồm bữa sáng không?', en: 'Is breakfast included?' },
    'con.faqA2':       { vi: 'Có bữa sáng đơn giản theo yêu cầu. Hãy báo lễ tân từ tối hôm trước.', en: 'A simple breakfast is available on request. Just let the front desk know the night before.' },
    'con.faqQ3':       { vi: 'Có đón sân bay không?', en: 'Do you offer airport pickup?' },
    'con.faqA3':       { vi: 'Có. Sân bay Tân Sơn Nhất cách khoảng 6 km. Gửi số chuyến bay và giờ đến, tài xế sẽ đón bạn với giá cố định.', en: 'Yes. Tan Son Nhat is about 6 km away. Send your flight number and arrival time and our driver will meet you at a fixed price.' },
    'con.faqQ4':       { vi: 'Thanh toán bằng cách nào?', en: 'What payment methods do you accept?' },
    'con.faqA4':       { vi: 'Tiền mặt (VND và USD), thẻ Visa/Mastercard, và chuyển khoản QR (VietQR, Momo, ZaloPay).', en: 'Cash (VND and USD), Visa/Mastercard, and QR transfers (VietQR, Momo, ZaloPay).' },

    // ---- Booking modal ----
    'modal.title':     { vi: 'Đã nhận yêu cầu đặt phòng', en: 'Booking request received' },
    'modal.body':      { vi: 'Cảm ơn bạn! Chúng tôi sẽ liên hệ trong vòng 2 giờ để xác nhận.', en: 'Thank you! We will contact you within 2 hours to confirm.' },
    'modal.room':      { vi: 'Phòng', en: 'Room' },
    'modal.checkin':   { vi: 'Nhận phòng', en: 'Check-in' },
    'modal.checkout':  { vi: 'Trả phòng', en: 'Check-out' },
    'modal.guests':    { vi: 'Số khách', en: 'Guests' },

    // ---- validation ----
    'val.checkin':     { vi: 'Vui lòng chọn ngày nhận phòng.', en: 'Please select a check-in date.' },
    'val.checkout':    { vi: 'Vui lòng chọn ngày trả phòng.', en: 'Please select a check-out date.' },
    'val.checkinPast': { vi: 'Ngày nhận phòng phải từ hôm nay trở đi.', en: 'Check-in must be today or later.' },
    'val.checkoutOrder':{ vi: 'Ngày trả phòng phải sau ngày nhận phòng.', en: 'Check-out must be after check-in.' },
    'val.name':        { vi: 'Vui lòng nhập họ tên.', en: 'Please enter your name.' },
    'val.email':       { vi: 'Vui lòng nhập email.', en: 'Please enter your email.' },
    'val.emailValid':  { vi: 'Vui lòng nhập email hợp lệ.', en: 'Please enter a valid email address.' },
    'val.subject':     { vi: 'Vui lòng chọn chủ đề.', en: 'Please choose a subject.' },
    'val.message':     { vi: 'Vui lòng nhập tin nhắn ít nhất 10 ký tự.', en: 'Please enter a message of at least 10 characters.' },

    // page titles + meta
    'meta.title.home': { vi: 'Le Loi Hotel — Khách sạn bình dân tại Gò Vấp, TP.HCM', en: 'Le Loi Hotel — Budget hotel in Go Vap, HCMC' },
    'meta.title.rooms':{ vi: 'Phòng & giá — Le Loi Hotel', en: 'Rooms & Rates — Le Loi Hotel' },
    'meta.title.amen': { vi: 'Tiện nghi — Le Loi Hotel', en: 'Amenities — Le Loi Hotel' },
    'meta.title.gal':  { vi: 'Thư viện ảnh — Le Loi Hotel', en: 'Gallery — Le Loi Hotel' },
    'meta.title.loc':  { vi: 'Vị trí — Le Loi Hotel', en: 'Location — Le Loi Hotel' },
    'meta.title.con':  { vi: 'Liên hệ — Le Loi Hotel', en: 'Contact — Le Loi Hotel' }
  };

  var STORAGE_KEY = 'dnh-lang';
  var DEFAULT_LANG = 'vi';

  function getStored() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setStored(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function t(key, lang) {
    var entry = I18N[key];
    if (!entry) return key;
    return entry[lang] || entry[DEFAULT_LANG] || key;
  }

  function apply(lang) {
    document.documentElement.lang = lang;

    // text content
    var nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (I18N[key]) el.textContent = t(key, lang);
    });

    // attributes: data-i18n-attr="placeholder:key;aria-label:key"
    var attrNodes = document.querySelectorAll('[data-i18n-attr]');
    attrNodes.forEach(function (el) {
      var spec = el.getAttribute('data-i18n-attr');
      spec.split(';').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length === 2) {
          var attr = bits[0].trim();
          var key = bits[1].trim();
          if (I18N[key]) el.setAttribute(attr, t(key, lang));
        }
      });
    });

    // page <title> via data-i18n-title on <html> or <body>
    var titleKey = document.body.getAttribute('data-title-key');
    if (titleKey && I18N[titleKey]) document.title = t(titleKey, lang);

    // toggle button active state
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    // let other scripts know (booking/contact validation needs current lang)
    window.DNH_LANG = lang;
    document.dispatchEvent(new CustomEvent('dnh:langchange', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (lang !== 'vi' && lang !== 'en') lang = DEFAULT_LANG;
    setStored(lang);
    apply(lang);
  }

  // expose minimal API
  window.DNH_I18N = { t: t, setLang: setLang, get: function () { return window.DNH_LANG || DEFAULT_LANG; } };

  document.addEventListener('DOMContentLoaded', function () {
    var initial = getStored() || DEFAULT_LANG;
    apply(initial);

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
  });
})();
