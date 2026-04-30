// ═══════════ THEME TOGGLE ═══════════
const themeToggleBtn = document.getElementById('theme-toggle');

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('aura-theme', theme);
  themeToggleBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
  themeToggleBtn.title = theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro';
}

// Init icon on load
setTheme(getTheme());

themeToggleBtn.addEventListener('click', () => {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
});

// ═══════════ NAVBAR SCROLL ═══════════
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ═══════════ MOBILE MENU ═══════════
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
document.querySelector('.nav-logo').addEventListener('click', () => {
  navLinks.classList.remove('open');
});

// ═══════════ SCREENSHOT TABS ═══════════
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const idx = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.screenshot-slide').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`.screenshot-slide[data-slide="${idx}"]`).classList.add('active');
  });
});

// ═══════════ FORM SUBMIT ═══════════
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = document.getElementById('form-submit');
  btn.textContent = '✓ Solicitação enviada!';
  btn.style.background = 'linear-gradient(135deg,#1e8449,#27ae60)';
  btn.disabled = true;
});

// ═══════════ PARTICLES CANVAS ═══════════
(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const N = 55;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < N; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '139,0,0' : '41,128,185'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();

      particles.forEach(q => {
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${p.color},${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ═══════════ SCROLL REVEAL ═══════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.problem-card, .feature-card, .audience-card, .xai-node, .solution-block'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
