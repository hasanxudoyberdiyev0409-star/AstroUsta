document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  const overlay = document.querySelector('.overlay');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    overlay.classList.toggle('show');

    // Hamburgerni x ga aylantirish
    if (toggle.textContent === '☰') {
      toggle.textContent = '✖';
    } else {
      toggle.textContent = '☰';
    }
  });

  // Overlay bosilganda menu yopilsin
  overlay.addEventListener('click', () => {
    nav.classList.remove('open');
    overlay.classList.remove('show');
    toggle.textContent = '☰';
  });
});
