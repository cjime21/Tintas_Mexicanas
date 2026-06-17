document.addEventListener('DOMContentLoaded', () => {
  // Verificamos si estamos en el index.html
  const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
  if (isIndex) return; // No habilitar cursor en index.html

  // Inyectar elementos del cursor en el DOM
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  
  const follower = document.createElement('div');
  follower.classList.add('custom-cursor-follower');
  
  document.body.appendChild(cursor);
  document.body.appendChild(follower);

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  // Salpicaduras de pintura siguiendo el movimiento del mouse
  const trailColors = ['#E4007C', '#9ABC05', '#236130'];
  const trailSplatPaths = [
    "M50,10 C65,10 75,20 80,35 C85,50 95,55 90,70 C85,85 75,90 60,85 C45,90 35,80 25,75 C15,70 10,55 15,40 C20,25 30,20 40,15 Z",
    "M55,15 C68,8 78,18 85,28 C92,38 98,52 92,65 C86,78 72,88 58,85 C44,82 32,92 22,82 C12,72 18,58 15,45 C12,32 25,22 35,18 Z",
    "M48,12 C62,5 82,15 88,28 C94,41 96,56 88,68 C80,80 65,92 50,88 C35,84 22,95 12,82 C2,69 15,52 14,38 C13,24 25,18 35,16 Z"
  ];
  const trailSplats = [];
  let lastSplatX = null, lastSplatY = null;
  const splatMinDistance = 60;

  function spawnTrailSplat(x, y) {
    const color = trailColors[Math.floor(Math.random() * trailColors.length)];
    const path = trailSplatPaths[Math.floor(Math.random() * trailSplatPaths.length)];
    const size = 22 + Math.random() * 20;
    const rot = Math.floor(Math.random() * 360);

    const splat = document.createElement('div');
    splat.classList.add('cursor-paint-splat');
    splat.style.width = `${size}px`;
    splat.style.height = `${size}px`;
    splat.style.left = `${x}px`;
    splat.style.top = `${y}px`;
    splat.style.setProperty('--rot', `${rot}deg`);
    splat.innerHTML = `<svg viewBox="0 0 100 100" style="width:100%;height:100%;"><path d="${path}" fill="${color}"></path></svg>`;

    document.body.appendChild(splat);
    trailSplats.push(splat);

    if (trailSplats.length > 25) {
      const old = trailSplats.shift();
      old.remove();
    }

    setTimeout(() => {
      splat.remove();
    }, 700);
  }

  // Actualizar posiciones del mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // El cursor principal sigue inmediatamente al mouse
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    // Generar una salpicadura de pintura cada cierta distancia recorrida
    if (lastSplatX === null || Math.hypot(mouseX - lastSplatX, mouseY - lastSplatY) > splatMinDistance) {
      lastSplatX = mouseX;
      lastSplatY = mouseY;
      spawnTrailSplat(mouseX, mouseY);
    }
  });

  // Animación del follower con suavizado de física (retardo físico)
  function animateFollower() {
    const ease = 0.15; // Velocidad del suavizado
    followerX += (mouseX - followerX) * ease;
    followerY += (mouseY - followerY) * ease;
    
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Cambios de estado en hovers sobre enlaces, botones, splatters y tarjetas
  const interactives = 'a, button, .splatter-item, .flip-card, .category-btn, .chat-suggestion-chip, .qty-btn, .product-add-btn';
  
  function addHoverListeners() {
    const elements = document.querySelectorAll(interactives);
    elements.forEach(el => {
      // Evitar duplicar listeners
      if (el.dataset.hasCursorListener) return;
      el.dataset.hasCursorListener = 'true';

      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
        follower.classList.add('hovered');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
        follower.classList.remove('hovered');
      });
    });
  }

  // Ejecutamos inicialmente y tras un breve tiempo para capturar elementos dinámicos
  addHoverListeners();
  setInterval(addHoverListeners, 1500);

  // Animación de salpicadura de pintura líquida al hacer clic
  document.addEventListener('click', (e) => {
    // Generar partículas de salpicadura
    const colors = ['#E4007C', '#9ABC05', '#236130'];
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('cursor-splatter');
      
      // Color aleatorio de la paleta
      const randColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = randColor;
      
      // Posición inicial
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      
      // Ángulo y distancia aleatoria para volar
      const angle = Math.random() * Math.PI * 2;
      const distance = 25 + Math.random() * 50;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      // Variables CSS para la animación
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      
      // Tamaño aleatorio de la gotita
      const size = 4 + Math.random() * 8;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      document.body.appendChild(particle);
      
      // Remover después de que acabe la animación
      setTimeout(() => {
        particle.remove();
      }, 600);
    }

    // Efecto de encogimiento/pulso en el cursor principal al hacer clic
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
    setTimeout(() => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 150);
  });
});
