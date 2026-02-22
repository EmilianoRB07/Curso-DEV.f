// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger each element slightly
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
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
