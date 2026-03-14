/* ── MOBILE MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let isOpen = false;

function setMenu(open) {
  isOpen = open;
  hamburger.classList.toggle('open', open);
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', !open);
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => setMenu(!isOpen));

document.getElementById('mobile-close').addEventListener('click', () => setMenu(false));

document.querySelectorAll('.m-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    setMenu(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 380);
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isOpen) setMenu(false);
});

/* ── DESKTOP SMOOTH SCROLL ── */
document.querySelectorAll('nav > ul a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ── FADE-IN ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.produto-card, .membro-card, .valor-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  obs.observe(el);
});

/* ── FORM ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Mensagem Enviada ✓';
  btn.style.background = '#2a5a8c';
  setTimeout(() => {
    btn.textContent = 'Enviar Mensagem';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}