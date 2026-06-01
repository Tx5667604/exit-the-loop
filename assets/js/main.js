// Exit The Loop — Counter animation
document.addEventListener('DOMContentLoaded', () => {
  // Animate stats
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current.toLocaleString() + suffix;
    }, 30);
  }

  const yearsEl = document.getElementById('stat-years');
  const attentionEl = document.getElementById('stat-attention');
  const screenEl = document.getElementById('stat-screen');

  if (yearsEl) animateCounter(yearsEl, 17, '+');
  if (attentionEl) animateCounter(attentionEl, 1.7, 'с');
  if (screenEl) animateCounter(screenEl, 7, '+');

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});
