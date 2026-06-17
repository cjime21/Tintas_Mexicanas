// Base de Datos de Productos
const PRODUCT_CATALOG = [
  // Tintas para serigrafía
  { id: 'tinta-plastisol', name: 'Tinta Plastisol Premium', category: 'tintas', price: 180, desc: 'Base textil premium de alta densidad, cobertura excepcional y colores brillantes.', icon: `<svg viewBox="0 0 24 24"><path d="M12 2v6M9 2h6M4.5 22h15c1 0 1.5-1 1-2l-6-11V6h-5v3L3.5 20c-.5 1 0 2 1 2z"></path></svg>`, themeColor: '#E4007C' },
  { id: 'tinta-agua', name: 'Tinta Base Agua Caltex', category: 'tintas', price: 150, desc: 'Ecológica, de tacto suave sobre telas claras y excelente estabilidad.', icon: `<svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`, themeColor: '#9ABC05' },
  { id: 'aditivo-puff', name: 'Aditivo Puff 3D', category: 'tintas', price: 220, desc: 'Aditivo espumante para lograr relieves tridimensionales con calor.', icon: `<svg viewBox="0 0 24 24"><path d="M2 22h20M7 22l3-11h4l3 11M10 6l2-4 2 4"></path></svg>`, themeColor: '#236130' },
  { id: 'malla-120', name: 'Malla de Poliéster 120 Hilos', category: 'tintas', price: 95, desc: 'Ideal para detalles finos y tramas de alta definición en serigrafía.', icon: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`, themeColor: '#236130' },
  
  // Playeras personalizadas
  { id: 'playera-serigrafia', name: 'Playera de Algodón Negra', category: 'playeras', price: 250, desc: 'Playera 100% algodón pesado de 200g, estampada con tintas plastisol duraderas.', icon: `<svg viewBox="0 0 24 24"><path d="M6 2L3 6v4h3v10h12V10h3V6l-3-4H6z"></path><path d="M10 2v3a2 2 0 0 0 4 0V2"></path></svg>`, themeColor: '#236130' },
  { id: 'playera-sublimacion', name: 'Playera de Poliéster Blanca', category: 'playeras', price: 180, desc: 'Tacto algodón con impresión por sublimación a todo color que no se siente al tacto.', icon: `<svg viewBox="0 0 24 24"><path d="M6 2L3 6v4h3v10h12V10h3V6l-3-4H6z"></path><path d="M10 2v3a2 2 0 0 0 4 0V2"></path></svg>`, themeColor: '#E4007C' },
  { id: 'hoodie-premium', name: 'Sudadera Hoodie con Capucha', category: 'playeras', price: 450, desc: 'Sudadera premium afelpada con bolsa frontal y cordones ajustables.', icon: `<svg viewBox="0 0 24 24"><path d="M4 22V8l3-3 5 2 5-2 3 3v14H4z"></path><path d="M12 7v15M9 10h6"></path></svg>`, themeColor: '#9ABC05' },
  
  // Impresión de lonas
  { id: 'lona-front', name: 'Lona Front 13oz Brillante (m²)', category: 'lonas', price: 120, desc: 'Impresión de alta resolución con tintas solventes resistentes al sol y la lluvia.', icon: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2"></rect><path d="M7 21h10M12 17v4"></path></svg>`, themeColor: '#9ABC05' },
  { id: 'lona-mesh', name: 'Lona Mesh Microperforada (m²)', category: 'lonas', price: 170, desc: 'Permite el paso del aire evitando el efecto vela en espectaculares.', icon: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2"></rect><circle cx="8" cy="7" r="1"></circle><circle cx="12" cy="7" r="1"></circle><circle cx="16" cy="7" r="1"></circle><circle cx="8" cy="11" r="1"></circle><circle cx="12" cy="11" r="1"></circle><circle cx="16" cy="11" r="1"></circle></svg>`, themeColor: '#236130' },
  { id: 'lona-backlight', name: 'Lona Backlight para Caja de Luz (m²)', category: 'lonas', price: 240, desc: 'Dispersión de luz perfecta para anuncios luminosos de alto impacto.', icon: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2"></rect><path d="M9 10h6M12 7v6"></path></svg>`, themeColor: '#E4007C' },
  
  // Tarjetas de presentación
  { id: 'tarjetas-mate', name: 'Tarjetas Clásicas Mate (100 pzas)', category: 'tarjetas', price: 150, desc: 'Cartulina de 350g con acabado mate elegante por ambos lados.', icon: `<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="6" y1="9" x2="10" y2="9"></line><line x1="6" y1="13" x2="14" y2="13"></line></svg>`, themeColor: '#E4007C' },
  { id: 'tarjetas-barniz', name: 'Tarjetas con Barniz UV (100 pzas)', category: 'tarjetas', price: 280, desc: 'Acabado mate con detalles brillantes localizados mediante barniz UV registro.', icon: `<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M18 9l1 1-1 1M14 7l.5 1-.5 1"></path></svg>`, themeColor: '#9ABC05' },
  { id: 'tarjetas-soft', name: 'Tarjetas Soft Touch (100 pzas)', category: 'tarjetas', price: 350, desc: 'Textura aterciopelada premium y elegante al tacto. Una experiencia de lujo.', icon: `<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M6 9h4v6H6zM14 9h4v2h-4z"></path></svg>`, themeColor: '#236130' },
  
  // Volantes y folletos
  { id: 'volantes-carta', name: 'Flyers Volantes ¼ Carta (1000 pzas)', category: 'volantes', price: 490, desc: 'Papel couché de 135g impreso a todo color por un frente. Ideal para masivos.', icon: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="16" y2="17"></line></svg>`, themeColor: '#236130' },
  { id: 'tripticos-couche', name: 'Trípticos Plegados (100 pzas)', category: 'volantes', price: 350, desc: 'Papel couché de 150g impreso por ambos lados con dos dobleces de precisión.', icon: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="8" y1="4" x2="8" y2="20"></line><line x1="16" y1="4" x2="16" y2="20"></line></svg>`, themeColor: '#E4007C' },
  
  // Stickers
  { id: 'stickers-vinil', name: 'Stickers de Vinil (50 pzas)', category: 'stickers', price: 190, desc: 'Vinil autoadhesivo troquelado resistente a la intemperie y agua.', icon: `<svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`, themeColor: '#9ABC05' },
  { id: 'stickers-holografico', name: 'Stickers Holográficos (50 pzas)', category: 'stickers', price: 290, desc: 'Acabado metálico reflectante con efectos de arcoíris. Ideales para destacar.', icon: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>`, themeColor: '#E4007C' },
  { id: 'planilla-a4', name: 'Planilla de Stickers A4', category: 'stickers', price: 85, desc: 'Hoja de vinil tamaño A4 con múltiples figuras precortadas listas para desprender.', icon: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8" cy="8" r="2"></circle><circle cx="16" cy="8" r="2"></circle><circle cx="8" cy="16" r="2"></circle><circle cx="16" cy="16" r="2"></circle></svg>`, themeColor: '#236130' },
];

// Usuarios Demo
const DEMO_USERS = [
  { email: 'admin@tintas.mx', name: 'Administrador', pass: 'admin123' },
  { email: 'pedro@tintas.mx', name: 'Pedro', pass: 'pedro123' },
  { email: 'cliente1@tintas.mx', name: 'Cliente Principal', pass: 'cliente123' },
  { email: 'disenador@tintas.mx', name: 'Diseñador Tintas', pass: 'diseno123' },
  { email: 'impresor@tintas.mx', name: 'Impresor Taller', pass: 'imprenta123' },
];

// --- ALMACENAMIENTO BINARIO LOCAL (INDEXEDDB) ---
const DB_NAME = 'tintas_files_db';
const STORE_NAME = 'item_files';

function getDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

async function saveItemFiles(cartItemId, filesArray) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(filesArray, cartItemId);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function getItemFiles(cartItemId) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(cartItemId);
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

async function removeItemFiles(cartItemId) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(cartItemId);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function clearAllItemFiles() {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.clear();
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// --- GESTIÓN DE SESIÓN ---
function getCurrentUser() {
  const user = localStorage.getItem('tintas_session');
  return user ? JSON.parse(user) : null;
}

function getRegisteredUsers() {
  const users = localStorage.getItem('tintas_registered_users');
  return users ? JSON.parse(users) : [];
}

function registerUser(name, email, password) {
  email = email.trim().toLowerCase();
  const exists = DEMO_USERS.some(u => u.email === email) || getRegisteredUsers().some(u => u.email === email);
  if (exists) {
    return { success: false, message: 'Ese correo ya está registrado.' };
  }

  const registeredUsers = getRegisteredUsers();
  const newUser = { email, name, pass: password };
  registeredUsers.push(newUser);
  localStorage.setItem('tintas_registered_users', JSON.stringify(registeredUsers));

  return { success: true, user: newUser };
}

function loginUser(email, password) {
  email = email.trim().toLowerCase();
  const user = DEMO_USERS.find(u => u.email === email && u.pass === password)
    || getRegisteredUsers().find(u => u.email === email && u.pass === password);
  if (user) {
    localStorage.setItem('tintas_session', JSON.stringify({ email: user.email, name: user.name }));
    return { success: true, user };
  }
  return { success: false, message: 'Usuario o contraseña incorrectos.' };
}

function logoutUser() {
  localStorage.removeItem('tintas_session');
  localStorage.removeItem('tintas_cart'); // Opcional: limpiar carrito al salir
  clearAllItemFiles(); // Limpiar archivos de IndexedDB
  window.location.href = 'info.html';
}

// --- GESTIÓN DE CARRITO ---
function getCart() {
  const cart = localStorage.getItem('tintas_cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('tintas_cart', JSON.stringify(cart));
  updateHeaderUI();
}

function addToCart(productId, qty, cartItemId, filesMetadata) {
  const product = PRODUCT_CATALOG.find(p => p.id === productId);
  if (!product) return;

  let cart = getCart();

  // Si tiene archivos adjuntos, SIEMPRE creamos un elemento único en el carrito.
  // Si no tiene archivos, lo agrupamos con un elemento idéntico sin archivos si ya existe.
  const hasFiles = filesMetadata && filesMetadata.length > 0;
  const existingItemIndex = !hasFiles 
    ? cart.findIndex(item => item.id === productId && (!item.files || item.files.length === 0))
    : -1;

  if (existingItemIndex > -1) {
    cart[existingItemIndex].qty += qty;
  } else {
    cart.push({
      cartItemId: cartItemId || Date.now().toString(),
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      icon: product.icon,
      themeColor: product.themeColor,
      qty: qty,
      files: filesMetadata || []
    });
  }
  saveCart(cart);
}

function updateCartQty(productId, qty) {
  let cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex > -1) {
    cart[itemIndex].qty = qty;
    if (cart[itemIndex].qty <= 0) {
      if (cart[itemIndex].cartItemId) {
        removeItemFiles(cart[itemIndex].cartItemId);
      }
      cart.splice(itemIndex, 1);
    }
    saveCart(cart);
  }
}

function removeFromCart(productId, cartItemId) {
  let cart = getCart();
  if (cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    removeItemFiles(cartItemId);
  } else {
    const itemsToRemove = cart.filter(item => item.id === productId);
    itemsToRemove.forEach(item => {
      if (item.cartItemId) removeItemFiles(item.cartItemId);
    });
    cart = cart.filter(item => item.id !== productId);
  }
  saveCart(cart);
}

function clearCart() {
  const cart = getCart();
  cart.forEach(item => {
    if (item.cartItemId) removeItemFiles(item.cartItemId);
  });
  localStorage.removeItem('tintas_cart');
  updateHeaderUI();
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (item.price * item.qty), 0);
}

// --- ACTUALIZACIÓN DE INTERFAZ DEL HEADER ---
function updateHeaderUI() {
  const user = getCurrentUser();
  const cartNavContainer = document.getElementById('nav-cart-container');
  const loginNavContainer = document.getElementById('nav-login-container');

  // Si no existen elementos de navegación (ej. en el index) terminamos
  if (!loginNavContainer) return;

  if (user) {
    // Usuario logueado
    loginNavContainer.innerHTML = `
      <span class="user-greeting" style="font-family: var(--font-title); font-size: 0.9rem; color: var(--secondary); font-weight:700; margin-right:1rem;">¡Hola, ${user.name}!</span>
      <a href="#" id="btn-logout" class="nav-btn-login" style="background: linear-gradient(135deg, var(--accent), #ad005f); border-color: var(--accent); box-shadow: 0 4px 15px rgba(228, 0, 124, 0.3);">Cerrar Sesión</a>
    `;

    document.getElementById('btn-logout').addEventListener('click', (e) => {
      e.preventDefault();
      logoutUser();
    });

    // Añadir botón de carrito en el header si está logueado
    if (cartNavContainer) {
      const cartCount = getCartCount();
      cartNavContainer.innerHTML = `
        <a href="carrito.html" class="nav-cart-indicator" title="Ver Carrito">
          <svg style="width: 16px; height: 16px; stroke: currentColor; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; display: inline-block; vertical-align: middle;" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          ${cartCount > 0 ? `<span class="cart-count">${cartCount}</span>` : ''}
        </a>
      `;
    }
  } else {
    // Usuario no logueado
    loginNavContainer.innerHTML = `
      <a href="login.html" class="nav-btn-login">Iniciar Sesión</a>
    `;
    if (cartNavContainer) {
      cartNavContainer.innerHTML = ''; // Ocultar carrito
    }
  }
}

// --- SCROLL REVEAL (INTRSECCIÓN OBSERVER) ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-section');
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Dejar de observar una vez revelado
      }
    });
  }, {
    threshold: 0.15, // Se revela cuando el 15% del elemento es visible
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// --- INYECCIÓN DE AMBIENT GLOW (PÁGINAS MÁS PINTORESCAS) ---
function initAmbientGlow() {
  if (document.querySelector('.ambient-glow-container')) return;
  const container = document.createElement('div');
  container.className = 'ambient-glow-container';
  container.innerHTML = `
    <div class="glow-blob glow-blob-pink"></div>
    <div class="glow-blob glow-blob-lime"></div>
    <div class="glow-blob glow-blob-green"></div>
  `;
  document.body.appendChild(container);
}

// --- SPLASH DE PINTURA DE BIENVENIDA AL CARGAR LA PÁGINA ---
function initWelcomeSplash() {
  if (document.querySelector('.welcome-splash-overlay')) return;

  const colors = ['#E4007C', '#9ABC05', '#236130'];
  const coverColor = colors[Math.floor(Math.random() * colors.length)];
  const coverPath = "M50,5 C70,5 85,15 92,35 C99,55 95,75 80,88 C65,99 40,99 22,88 C5,77 1,55 8,35 C15,15 30,5 50,5 Z";
  const dropPaths = [
    "M50,10 C65,10 75,20 80,35 C85,50 95,55 90,70 C85,85 75,90 60,85 C45,90 35,80 25,75 C15,70 10,55 15,40 C20,25 30,20 40,15 Z",
    "M55,15 C68,8 78,18 85,28 C92,38 98,52 92,65 C86,78 72,88 58,85 C44,82 32,92 22,82 C12,72 18,58 15,45 C12,32 25,22 35,18 Z",
    "M48,12 C62,5 82,15 88,28 C94,41 96,56 88,68 C80,80 65,92 50,88 C35,84 22,95 12,82 C2,69 15,52 14,38 C13,24 25,18 35,16 Z"
  ];
  const cornerPositions = [
    { top: '8%', left: '6%' },
    { top: '12%', left: '92%' },
    { top: '88%', left: '10%' },
    { top: '90%', left: '90%' }
  ];

  const overlay = document.createElement('div');
  overlay.className = 'welcome-splash-overlay';
  overlay.innerHTML = `<svg class="welcome-splash-cover" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="${coverPath}" fill="${coverColor}"></path></svg>`;
  document.body.appendChild(overlay);

  // Gotas residuales que aparecen en algunas esquinas mientras se abre la salpicadura
  const numDrops = 2 + Math.floor(Math.random() * 2); // 2 o 3 gotas
  const chosenCorners = cornerPositions.sort(() => Math.random() - 0.5).slice(0, numDrops);

  chosenCorners.forEach((pos, i) => {
    const dropColor = colors[Math.floor(Math.random() * colors.length)];
    const path = dropPaths[Math.floor(Math.random() * dropPaths.length)];
    const size = 60 + Math.random() * 40;
    const rot = Math.floor(Math.random() * 360);

    const drop = document.createElement('div');
    drop.className = 'welcome-splash-drop';
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;
    drop.style.top = pos.top;
    drop.style.left = pos.left;
    drop.style.setProperty('--rot', `${rot}deg`);
    drop.style.animationDelay = `${0.35 + i * 0.08}s`;
    drop.innerHTML = `<svg viewBox="0 0 100 100" style="width:100%;height:100%;"><path d="${path}" fill="${dropColor}"></path></svg>`;
    overlay.appendChild(drop);
  });

  // Limpiar el overlay del DOM una vez terminan todas las animaciones
  setTimeout(() => {
    overlay.remove();
  }, 2100);
}

// --- SALPICADURAS ESTAMPADAS ALEATORIAMENTE MIENTRAS SE NAVEGA ---
function initPageDrips() {
  if (document.querySelector('.page-drip-container')) return;

  const container = document.createElement('div');
  container.className = 'page-drip-container';
  document.body.appendChild(container);

  const colors = ['#E4007C', '#9ABC05', '#236130'];
  const stampPaths = [
    "M50,10 C65,10 75,20 80,35 C85,50 95,55 90,70 C85,85 75,90 60,85 C45,90 35,80 25,75 C15,70 10,55 15,40 C20,25 30,20 40,15 Z",
    "M55,15 C68,8 78,18 85,28 C92,38 98,52 92,65 C86,78 72,88 58,85 C44,82 32,92 22,82 C12,72 18,58 15,45 C12,32 25,22 35,18 Z",
    "M48,12 C62,5 82,15 88,28 C94,41 96,56 88,68 C80,80 65,92 50,88 C35,84 22,95 12,82 C2,69 15,52 14,38 C13,24 25,18 35,16 Z"
  ];
  const stamps = [];

  function spawnStamp() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const path = stampPaths[Math.floor(Math.random() * stampPaths.length)];
    const size = 70 + Math.random() * 70;
    const rot = Math.floor(Math.random() * 360);
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    const stamp = document.createElement('div');
    stamp.className = 'page-drip';
    stamp.style.width = `${size}px`;
    stamp.style.height = `${size}px`;
    stamp.style.left = `${x}%`;
    stamp.style.top = `${y}%`;
    stamp.style.setProperty('--rot', `${rot}deg`);
    stamp.innerHTML = `<svg viewBox="0 0 100 100" style="width:100%;height:100%;"><path d="${path}" fill="${color}"></path></svg>`;
    container.appendChild(stamp);
    stamps.push(stamp);

    if (stamps.length > 12) {
      const old = stamps.shift();
      old.remove();
    }

    const nextDelay = 280 + Math.random() * 420;
    setTimeout(spawnStamp, nextDelay);
  }

  setTimeout(spawnStamp, 150 + Math.random() * 250);
}

// --- MENÚ HAMBURGUESA PARA MÓVIL ---
function initMobileNav() {
  const header = document.querySelector('.main-header');
  const nav = document.querySelector('.nav-menu');
  if (!header || !nav || document.querySelector('.nav-hamburger')) return;

  const hamburger = document.createElement('button');
  hamburger.className = 'nav-hamburger';
  hamburger.type = 'button';
  hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  header.appendChild(hamburger);

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-menu-open');
    hamburger.classList.toggle('active');
  });

  // Cerrar el menú al seleccionar un enlace
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-menu-open');
      hamburger.classList.remove('active');
    });
  });
}

// --- CONFIGURACIÓN GLOBAL AL CARGAR ---
document.addEventListener('DOMContentLoaded', () => {
  initWelcomeSplash();
  initPageDrips();
  initAmbientGlow();
  updateHeaderUI();
  initScrollReveal();
  initMobileNav();

  // Cambiar padding del header al hacer scroll
  const header = document.querySelector('.main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Resaltar enlace activo en el menú
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (path.includes(href) && href !== '') {
      link.classList.add('active');
    } else if ((path.endsWith('/') || path.endsWith('index.html')) && href === 'index.html') {
      link.classList.add('active');
    }
  });
});
