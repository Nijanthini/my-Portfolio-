// Loader
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 600);
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const icon = themeBtn.querySelector('i');
  icon.className = document.body.classList.contains('light') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
});

// Mobile menu
const menuBtn = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll progress + scroll-to-top
const progress = document.getElementById('scroll-progress');
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progress.style.width = scrolled + '%';
  scrollTopBtn.classList.toggle('show', h.scrollTop > 400);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Typing effect
const phrases = [
  'Software Engineering Student',
  'Aspiring AI Engineer',
  'Web Developer',
  'Curious Builder'
];
const typedEl = document.getElementById('typed');
let pi = 0, ci = 0, deleting = false;
function tick() {
  const current = phrases[pi];
  typedEl.textContent = current.substring(0, ci);
  if (!deleting && ci < current.length) { ci++; setTimeout(tick, 80); }
  else if (deleting && ci > 0) { ci--; setTimeout(tick, 40); }
  else {
    deleting = !deleting;
    if (!deleting) pi = (pi + 1) % phrases.length;
    setTimeout(tick, deleting ? 1400 : 300);
  }
}
tick();

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Contact form
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formStatus').textContent = '✓ Thanks! Your message has been sent.';
  form.reset();
  setTimeout(() => document.getElementById('formStatus').textContent = '', 4000);
});
