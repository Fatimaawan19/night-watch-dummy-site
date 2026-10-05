const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('aos-in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('[data-aos]').forEach(el => io.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
