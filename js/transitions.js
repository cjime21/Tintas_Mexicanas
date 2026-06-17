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
  const wavePath = "M0,90 C120,40 240,130 360,80 C480,30 600,120 720,70 C840,20 960,110 1080,60 C1200,10 1320,100 1440,60 L1440,1000 L0,1000 Z";
  const waveDuration = '1.8s';

  // Crear la onda (SVG) dentro del overlay si no existe
  let wave = overlay.querySelector('.page-transition-wave');
  if (!wave) {
    overlay.innerHTML = `<div class="page-transition-wave"><svg viewBox="0 0 1440 1000" preserveAspectRatio="none"><path d="${wavePath}" fill="${transitionColors[0]}"></path></svg></div>`;
    wave = overlay.querySelector('.page-transition-wave');
  }
  const wavePathEl = wave.querySelector('path');

  // Usar el mismo color que se eligió en la página anterior (si venimos de un clic interno)
  // para que no haya un cambio brusco de color justo al cambiar de página
  const carriedColor = sessionStorage.getItem('tintas_transition_color');
  sessionStorage.removeItem('tintas_transition_color');

  // Al cargar la página: la onda ya cubre la pantalla por completo y luego baja para revelar el contenido
  wavePathEl.setAttribute('fill', carriedColor || transitionColors[Math.floor(Math.random() * transitionColors.length)]);
  wave.style.transition = 'none';
  wave.style.transform = 'translateY(0%)';
  void wave.offsetHeight; // Forzar reflow para aplicar la posición antes de animar
  wave.style.transition = `transform ${waveDuration} cubic-bezier(0.77, 0, 0.175, 1)`;

  setTimeout(() => {
    wave.style.transform = 'translateY(110%)';
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

      // Elegir un color para la transición y recordarlo para la página siguiente
      const selectedColor = transitionColors[Math.floor(Math.random() * transitionColors.length)];
      wavePathEl.setAttribute('fill', selectedColor);
      sessionStorage.setItem('tintas_transition_color', selectedColor);

      // Forzar que la onda siempre entre desde abajo (sin transición visible)
      wave.style.transition = 'none';
      wave.style.transform = 'translateY(110%)';
      void wave.offsetHeight; // Forzar reflow para aplicar la posición antes de animar
      wave.style.transition = `transform ${waveDuration} cubic-bezier(0.77, 0, 0.175, 1)`;

      // La onda sube por completo, despacio, hasta cubrir toda la pantalla
      wave.style.transform = 'translateY(0%)';

      // Redirigir una vez que la onda terminó de subir
      setTimeout(() => {
        window.location.href = href;
      }, 1800);
    }
  });
});
