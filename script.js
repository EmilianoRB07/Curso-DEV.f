// ===== SCROLL REVEAL =====
<<<<<<< HEAD
=======
const reveals = document.querySelectorAll('.reveal');

>>>>>>> 370594c076e523ddddb2fab7d827c4b837616e6e
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
<<<<<<< HEAD
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
=======
        // Stagger each element slightly
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
>>>>>>> 370594c076e523ddddb2fab7d827c4b837616e6e
        observer.unobserve(entry.target);
      }
    });
  },
<<<<<<< HEAD
  { threshold: 0.07 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== NAV SCROLL SHADOW =====
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== MOBILE NAV =====
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.innerHTML = open ? '✕' : '&#9776;';
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.innerHTML = '&#9776;';
    });
  });
}

// ===== FORMULARIO =====
function handleForm(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  if (success) {
    success.classList.add('show');
    e.target.reset();
    setTimeout(() => success.classList.remove('show'), 5000);
  }
}

// ===== STATS COUNTER ANIMATION =====
function animateCount(el) {
  const target = parseFloat(el.dataset.target);
  const isPercent = el.textContent.includes('%');
  const isPlus    = el.textContent.includes('+');
  const duration  = 1600;
  const step      = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + (isPlus ? '+' : '') + (isPercent ? '%' : '');
  }, step);
}

// Trigger counter when stats bar enters viewport
const statNums = document.querySelectorAll('.stat-num');
if (statNums.length) {
  statNums.forEach(el => {
    const raw = el.textContent.replace(/[+%]/g, '');
    el.dataset.target = raw;
    el.dataset.animated = 'false';
  });

  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNums.forEach(el => {
          if (el.dataset.animated === 'false') {
            el.dataset.animated = 'true';
            animateCount(el);
          }
        });
        statsObs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) statsObs.observe(statsBar);
}
=======
  { threshold: 0.1 }
);

reveals.forEach(el => observer.observe(el));

// ===== TAGS HOVER GLOW =====
document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.boxShadow = '0 0 10px rgba(126,184,247,.15)';
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.boxShadow = '';
  });
});

// ===== CURSOR ACCENT LINE ON HEADER =====
// Subtle parallax tilt on the name when moving mouse
const name = document.querySelector('.name');
if (name) {
  document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 6;
    const y = (e.clientY / innerHeight - 0.5) * 4;
    name.style.transform = `translate(${x}px, ${y}px)`;
  });
}
>>>>>>> 370594c076e523ddddb2fab7d827c4b837616e6e
