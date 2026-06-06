/* ============================================================
   ARAM VAZHI — Main JavaScript
   ============================================================ */

/* ── Navbar scroll behaviour ── */
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Hamburger / mobile menu ── */
(function () {
  const btn      = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!btn || !mobileNav) return;
  btn.addEventListener('click', function () {
    btn.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  // close on link click
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      btn.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
})();

/* ── Scroll reveal ── */
(function () {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(function (el) { obs.observe(el); });
})();

/* ── Active nav link ── */
(function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (
      href === path ||
      (path === '' && href === 'index.html') ||
      (path === 'index.html' && href === 'index.html')
    ) {
      a.classList.add('active');
    }
  });
})();

/* ── Generic form handler ── */
function setupForm(formId, successId) {
  var form    = document.getElementById(formId);
  var success = document.getElementById(successId);
  if (!form || !success) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display    = 'none';
    success.classList.add('show');
  });
}
setupForm('contact-form',    'contact-success');
setupForm('volunteer-form',  'volunteer-success');
setupForm('quick-form',      'quick-success');

/* ── Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
