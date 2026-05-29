/* ==========================================================================
   Khách sạn Đại Nghĩa — booking.js
   Booking widget validation + confirmation modal with focus trap
   ========================================================================== */
(function () {
  'use strict';
  var I18N = window.DNH_I18N;
  function t(key) { return I18N ? I18N.t(key, I18N.get()) : key; }

  var ROOM_KEYS = { standard: 'room.std', superior: 'room.sup', deluxe: 'room.dlx', family: 'room.fam' };

  function todayISO() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + m + '-' + day;
  }
  function formatDate(iso) {
    if (!iso) return '';
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d.getTime())) return iso;
    var lang = I18N ? I18N.get() : 'vi';
    if (lang === 'vi') return 'Ngày ' + d.getDate() + ' tháng ' + (d.getMonth() + 1) + ', ' + d.getFullYear();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('booking-modal');
    var lastFocus = null;

    function openModal(data) {
      if (!modal) return;
      var map = {
        'modal-room': data.room,
        'modal-checkin': data.checkin,
        'modal-checkout': data.checkout,
        'modal-guests': data.guests
      };
      Object.keys(map).forEach(function (id) {
        var el = modal.querySelector('[data-field="' + id + '"]');
        if (el) el.textContent = map[id];
      });
      lastFocus = document.activeElement;
      modal.classList.add('is-open');
      var btn = modal.querySelector('[data-modal-ack]');
      if (btn) btn.focus();
    }
    function closeModal() {
      if (!modal) return;
      modal.classList.remove('is-open');
      if (lastFocus) lastFocus.focus();
    }
    if (modal) {
      modal.querySelectorAll('[data-modal-close], [data-modal-ack]').forEach(function (b) {
        b.addEventListener('click', closeModal);
      });
      modal.querySelector('.modal__overlay').addEventListener('click', closeModal);
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
      });
    }

    var forms = document.querySelectorAll('[data-booking-form]');
    forms.forEach(function (form) {
      var checkin = form.querySelector('[name="checkin"]');
      var checkout = form.querySelector('[name="checkout"]');
      var room = form.querySelector('[name="roomtype"]');
      var guests = form.querySelector('[name="guests"]');

      if (checkin) checkin.min = todayISO();
      if (checkout) checkout.min = todayISO();
      if (checkin) checkin.addEventListener('change', function () {
        if (checkout) checkout.min = checkin.value || todayISO();
      });

      function setError(field, msg) {
        var wrap = field.closest('.field');
        if (!wrap) return;
        wrap.classList.add('field--error');
        var err = wrap.querySelector('.field__error');
        if (err) err.textContent = msg;
      }
      form.querySelectorAll('input, select').forEach(function (input) {
        input.addEventListener('input', function () {
          var wrap = input.closest('.field');
          if (wrap) { wrap.classList.remove('field--error'); var e = wrap.querySelector('.field__error'); if (e) e.textContent = ''; }
        });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.querySelectorAll('.field--error').forEach(function (f) {
          f.classList.remove('field--error');
          var err = f.querySelector('.field__error'); if (err) err.textContent = '';
        });
        var valid = true;
        var today = new Date(todayISO() + 'T00:00:00');

        if (!checkin.value) { setError(checkin, t('val.checkin')); valid = false; }
        if (!checkout.value) { setError(checkout, t('val.checkout')); valid = false; }
        if (checkin.value && checkout.value) {
          var inD = new Date(checkin.value + 'T00:00:00');
          var outD = new Date(checkout.value + 'T00:00:00');
          if (inD < today) { setError(checkin, t('val.checkinPast')); valid = false; }
          if (outD <= inD) { setError(checkout, t('val.checkoutOrder')); valid = false; }
        }
        if (!valid) return;

        window.open('https://zalo.me/0706563489', '_blank');
      });
    });
  });
})();
