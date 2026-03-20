// Actualizar el año del footer automáticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Lógica del menú móvil
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const icon = btn.querySelector('i');

// Toggle del menú
btn.addEventListener('click', () => {
  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

// Cerrar menú al hacer clic en un enlace
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  });
});

// Efecto de sombra en el Navbar al hacer scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 10) {
    nav.classList.add('shadow-lg');
  } else {
    nav.classList.remove('shadow-lg');
  }
});
