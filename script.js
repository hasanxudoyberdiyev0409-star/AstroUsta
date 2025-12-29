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
const form = document.getElementById("tgForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  fetch("send.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(() => {
    alert("Xabar yuborildi 🚀 Tez orada bog‘lanamiz!");
    form.reset();
  })
  .catch(() => {
    alert("Xatolik 😬 Qayta urinib ko‘ring");
  });
});
