const cards = document.querySelectorAll('.reveal-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting));
}, { threshold: 0.14 });
cards.forEach(card => observer.observe(card));
