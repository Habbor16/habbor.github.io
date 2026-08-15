/* ==============================================================
   common.js — navbar, footer y tarjeta compartidos
   Se incluye en TODAS las páginas, después de data.js.
   Cada página define window.PAGE_ID antes de este script para
   resaltar el link activo del menú.
============================================================== */
function montarNavbar() {
  const root = document.getElementById('navbarRoot');
  if (!root) return;
  root.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="brand">
        <span class="brand-mark">✦</span>
        <span class="brand-name">HABBOR</span>
      </a>
      <nav class="nav-links">
        <a href="index.html" data-page="inicio">Inicio</a>
        <a href="catalogo.html" data-page="catalogo">Explorar</a>
        <a href="catalogo.html" data-page="catalogo">Catálogo</a>
        <a href="noticias.html" data-page="noticias">Noticias</a>
        <a href="mi-lista.html" data-page="mi-lista">Mi Lista</a>
      </nav>
      <div class="nav-right">
        <label class="search-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
            <path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <input type="text" id="navSearchInput" placeholder="Buscar..." aria-label="Buscar" autocomplete="off" />
        </label>
        <a href="cuenta.html" class="nav-auth">Iniciar Sesión</a>
        <a href="cuenta.html?modo=registro" class="nav-auth nav-auth-solid">Registrarse</a>
      </div>
    </div>
  `;
  root.querySelectorAll('[data-page]').forEach((link) => {
    if (link.dataset.page === window.PAGE_ID) link.classList.add('active');
  });
  const navSearchInput = document.getElementById('navSearchInput');
  navSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && navSearchInput.value.trim()) {
      window.location.href = `catalogo.html?buscar=${encodeURIComponent(navSearchInput.value.trim())}`;
    }
  });
}

function montarFooter() {
  const root = document.getElementById('footerRoot');
  if (!root) return;
  root.innerHTML = `
    <div class="footer-inner">
      <div class="footer-links">
        <a href="#">Acerca de HABBOR</a>
        <a href="#">Términos</a>
        <a href="#">Soporte</a>
        <a href="#">Descargar App</a>
      </div>
      <div class="footer-social" aria-hidden="true"><span>◎</span><span>◈</span><span>✕</span></div>
      <div class="footer-copy">© 2026 HABBOR — proyecto personal</div>
    </div>
  `;
}

/* Construye una tarjeta de video reutilizable para cualquier página */
function construirTarjeta(video, indice) {
  const card = document.createElement('article');
  card.className = 'card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Reproducir ${video.titulo}`);
  const rating = video.calificacion ? `<span class="card-rating">★ ${video.calificacion}</span>` : '';
  card.innerHTML = `
    <div class="card-thumb">
      <img src="${video.portada}" alt="${video.titulo}" loading="lazy">
      ${rating}
      <span class="card-ep">EP ${String(indice + 1).padStart(2, '0')}</span>
    </div>
    <div class="card-info">
      <h3 class="card-title">${video.titulo}</h3>
    </div>
  `;
  card.querySelector('img').addEventListener('error', function () { this.style.opacity = '0'; }, { once: true });
  card.addEventListener('click', () => { window.location.href = `episodio.html?id=${indice}`; });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.location.href = `episodio.html?id=${indice}`; }
  });
  return card;
}

document.addEventListener('DOMContentLoaded', () => {
  montarNavbar();
  montarFooter();
});
