document.addEventListener('DOMContentLoaded', () => {
  // Crear el div de transición de página si no existe en el DOM
  let overlay = document.querySelector('.page-transition-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.classList.add('page-transition-overlay');
    document.body.appendChild(overlay);
  }

  // Colores de la transición aleatorios o basados en la página
  const transitionColors = ['#236130', '#9ABC05', '#E4007C'];
  
  // Animación de entrada al cargar la página (revelar contenido)
  // Iniciamos cubriendo la pantalla y luego reduciendo el círculo
  overlay.style.backgroundColor = transitionColors[Math.floor(Math.random() * transitionColors.length)];
  overlay.style.clipPath = 'circle(150% at 50% 50%)';
  overlay.style.display = 'block';

  // Pequeño delay para iniciar la animación de salida del overlay
  setTimeout(() => {
    overlay.style.clipPath = 'circle(0% at 50% 50%)';
  }, 50);

  // Interceptar clics en enlaces para animar la transición de salida
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    // Obtener la URL de destino
    const href = link.getAttribute('href');
    
    // Validar si es una navegación interna válida (no whatsapp, no anclajes, no javascript, no target blank)
    const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);
    const isAnchor = href.startsWith('#');
    const isJs = href.startsWith('javascript:');
    const isWhatsApp = href.includes('wa.me');
    const targetBlank = link.getAttribute('target') === '_blank';

    if (href && !isExternal && !isAnchor && !isJs && !isWhatsApp && !targetBlank) {
      e.preventDefault();
      
      // Elegir un color para la transición
      const selectedColor = transitionColors[Math.floor(Math.random() * transitionColors.length)];
      overlay.style.backgroundColor = selectedColor;
      
      // Iniciar animación (cubrir la pantalla)
      overlay.style.clipPath = 'circle(150% at 50% 50%)';
      
      // Redirigir una vez completada la transición (800ms)
      setTimeout(() => {
        window.location.href = href;
      }, 700);
    }
  });
});
