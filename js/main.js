/* ==========================================================================
   Khách sạn Đại Nghĩa — main.js
   ========================================================================== */
(function () {
  'use strict';
  var I18N = window.DNH_I18N;
  function t(key) { return I18N ? I18N.t(key, I18N.get()) : key; }

  document.addEventListener('DOMContentLoaded', function () {

    /* ----- Mobile nav ----- */
    var toggle = document.querySelector('.nav__toggle');
    var menu = document.querySelector('.nav__menu');
    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          menu.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    /* ----- Reveal on scroll ----- */
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
    }

    /* ----- Rooms filter ----- */
    var roomGrid = document.querySelector('[data-room-grid]');
    if (roomGrid) {
      var typeSel = document.querySelector('[data-filter-type]');
      var guestSel = document.querySelector('[data-filter-guests]');
      var priceSel = document.querySelector('[data-filter-price]');
      var emptyMsg = document.querySelector('[data-room-empty]');
      var cards = Array.prototype.slice.call(roomGrid.querySelectorAll('[data-room]'));

      function applyFilter() {
        var tv = typeSel ? typeSel.value : 'all';
        var gv = guestSel ? guestSel.value : 'any';
        var pv = priceSel ? priceSel.value : 'any';
        var shown = 0;
        cards.forEach(function (card) {
          var ct = card.getAttribute('data-type');
          var cg = parseInt(card.getAttribute('data-guests'), 10);
          var cp = parseInt(card.getAttribute('data-price'), 10);
          var ok = true;
          if (tv !== 'all' && ct !== tv) ok = false;
          if (gv !== 'any' && cg < parseInt(gv, 10)) ok = false;
          if (pv === 'low' && cp >= 400000) ok = false;
          if (pv === 'mid' && (cp < 400000 || cp > 600000)) ok = false;
          if (pv === 'high' && cp <= 600000) ok = false;
          card.hidden = !ok;
          if (ok) shown++;
        });
        if (emptyMsg) emptyMsg.hidden = shown !== 0;
      }
      [typeSel, guestSel, priceSel].forEach(function (s) { if (s) s.addEventListener('change', applyFilter); });
      var resetBtn = document.querySelector('[data-filter-reset]');
      if (resetBtn) resetBtn.addEventListener('click', function () {
        if (typeSel) typeSel.value = 'all';
        if (guestSel) guestSel.value = 'any';
        if (priceSel) priceSel.value = 'any';
        applyFilter();
      });
    }

    /* ----- Gallery filter + lightbox ----- */
    var galleryGrid = document.querySelector('[data-gallery]');
    if (galleryGrid) {
      var tabs = document.querySelectorAll('[data-gallery-tab]');
      var items = Array.prototype.slice.call(galleryGrid.querySelectorAll('[data-gallery-item]'));
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) { t.classList.remove('is-active'); });
          tab.classList.add('is-active');
          var f = tab.getAttribute('data-gallery-tab');
          items.forEach(function (it) {
            it.hidden = !(f === 'all' || it.getAttribute('data-cat') === f);
          });
        });
      });

      // Lightbox
      var lb = document.querySelector('[data-lightbox]');
      if (lb) {
        var lbImg = lb.querySelector('.lightbox__img');
        var visible = function () { return items.filter(function (i) { return !i.hidden; }); };
        var idx = 0;
        function open(i) {
          var vis = visible();
          idx = i;
          var img = vis[idx].querySelector('img');
          if (img) { lbImg.src = img.src; lbImg.alt = img.alt; }
          lb.classList.add('is-open');
        }
        function move(d) {
          var vis = visible();
          idx = (idx + d + vis.length) % vis.length;
          var img = vis[idx].querySelector('img');
          if (img) { lbImg.src = img.src; lbImg.alt = img.alt; }
        }
        items.forEach(function (it) {
          it.addEventListener('click', function () {
            var img = it.querySelector('img');
            if (!img || !img.src) return; // skip placeholders with no image
            open(visible().indexOf(it));
          });
        });
        lb.querySelector('.lightbox__close').addEventListener('click', function () { lb.classList.remove('is-open'); });
        lb.querySelector('.lightbox__prev').addEventListener('click', function () { move(-1); });
        lb.querySelector('.lightbox__next').addEventListener('click', function () { move(1); });
        lb.addEventListener('click', function (e) { if (e.target === lb) lb.classList.remove('is-open'); });
        document.addEventListener('keydown', function (e) {
          if (!lb.classList.contains('is-open')) return;
          if (e.key === 'Escape') lb.classList.remove('is-open');
          if (e.key === 'ArrowLeft') move(-1);
          if (e.key === 'ArrowRight') move(1);
        });
      }
    }

    /* ----- FAQ accordion ----- */
    document.querySelectorAll('[data-faq]').forEach(function (item) {
      var q = item.querySelector('.faq-q');
      var a = item.querySelector('.faq-a');
      if (!q || !a) return;
      q.addEventListener('click', function () {
        var open = item.classList.toggle('is-open');
        q.setAttribute('aria-expanded', open ? 'true' : 'false');
        a.style.maxHeight = open ? a.scrollHeight + 'px' : '0';
      });
    });

    /* ----- Testimonials carousel ----- */
    var carousel = document.querySelector('[data-testimonials]');
    if (carousel) {
      var slides = carousel.querySelectorAll('.testimonial');
      var dots = carousel.querySelectorAll('.testimonial-dot');
      var cur = 0, timer;
      function show(i) {
        slides.forEach(function (s, n) { s.classList.toggle('is-active', n === i); });
        dots.forEach(function (d, n) { d.classList.toggle('is-active', n === i); });
        cur = i;
      }
      function next() { show((cur + 1) % slides.length); }
      dots.forEach(function (d, n) { d.addEventListener('click', function () { show(n); reset(); }); });
      function reset() { clearInterval(timer); timer = setInterval(next, 6000); }
      if (slides.length > 1) { reset(); carousel.addEventListener('mouseenter', function () { clearInterval(timer); }); carousel.addEventListener('mouseleave', reset); }
    }

    /* ----- Contact form ----- */
    var form = document.querySelector('[data-contact-form]');
    if (form) {
      var status = document.querySelector('[data-form-status]');
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      function setError(field, msg) {
        var wrap = field.closest('.field');
        if (!wrap) return;
        wrap.classList.add('field--error');
        var err = wrap.querySelector('.field__error');
        if (err) err.textContent = msg;
      }
      function clearError(field) {
        var wrap = field.closest('.field');
        if (!wrap) return;
        wrap.classList.remove('field--error');
        var err = wrap.querySelector('.field__error');
        if (err) err.textContent = '';
      }
      form.querySelectorAll('input, select, textarea').forEach(function (input) {
        input.addEventListener('input', function () { clearError(input); });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = form.querySelector('[name="name"]');
        var email = form.querySelector('[name="email"]');
        var subject = form.querySelector('[name="subject"]');
        var message = form.querySelector('[name="message"]');
        var valid = true;

        if (!name.value.trim()) { setError(name, t('val.name')); valid = false; }
        if (!email.value.trim()) { setError(email, t('val.email')); valid = false; }
        else if (!emailRegex.test(email.value.trim())) { setError(email, t('val.emailValid')); valid = false; }
        if (!subject.value) { setError(subject, t('val.subject')); valid = false; }
        if (!message.value.trim() || message.value.trim().length < 10) { setError(message, t('val.message')); valid = false; }

        if (!valid) return;
        form.reset();
        if (status) {
          status.textContent = t('con.success');
          status.classList.add('is-visible');
          status.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }

    /* ----- Footer year ----- */
    var yearEl = document.querySelector('[data-year]');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
