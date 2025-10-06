// Script para navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Mensaje en consola
console.log("Electrofuturo web lista 🚀");
// Formulario de contacto -> Enviar por WhatsApp
(() => {
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('whatsappBtn');
  const phone = '+54 9 2664 690679'; // número de destino ejemplo

  function validarCampos() {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) { alert('Por favor ingresa tu nombre.'); return false; }
    if (!email || !emailRegex.test(email)) { alert('Por favor ingresa un email válido.'); return false; }
    if (!message) { alert('Por favor escribe un mensaje.'); return false; }
    return { name, email, message };
  }

  btn.addEventListener('click', () => {
    const data = validarCampos();
    if (!data) return;
    // Construir texto para WhatsApp y codificarlo completamente
    const rawText = `Hola, soy ${data.name}\nEmail: ${data.email}\nMensaje: ${data.message}`;

    // Formato para wa.me: phone debe venir sin signos ni espacios
    const phoneDigits = phone.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(rawText)}`;

    // Mostrar feedback en el botón y abrir en nueva pestaña
    const previous = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Abriendo...';
    setTimeout(() => {
      window.open(url, '_blank', 'noopener');
      btn.disabled = false;
      btn.innerHTML = previous;
    }, 600);
  });
})();

// Animaciones reveal on-scroll
(() => {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
})();
