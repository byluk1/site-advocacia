// Toggle menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  });
});
