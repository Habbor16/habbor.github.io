/* ==============================================================
   🎬 TU BASE DE DATOS DE VIDEOS
   --------------------------------------------------------------
   Este array ES tu "base de datos" local: cada objeto se
   convierte automáticamente en una tarjeta (y el primero además
   se usa como el destacado "EN FOCO" arriba). No necesitas tocar
   el HTML nunca más.

   Para agregar un video nuevo, copia este bloque:

     {
       titulo: "Nombre que verás en la tarjeta",
       portada: "URL de una imagen (miniatura/poster)",
       src: "URL que va dentro del iframe del reproductor"
     },

   ...pégalo dentro del array de abajo (antes del corchete final
   "]") y reemplaza los 3 valores. Guarda el archivo y listo.

   NOTA: los 5 elementos de abajo son solo de ejemplo (reutilizan
   el mismo video con licencia Creative Commons) para que
   compruebes que la cuadrícula, el destacado, el buscador y el
   reproductor funcionan. Bórralos cuando cargues tus propios
   enlaces.
============================================================== */
const videoteca = [
  { titulo: "Ejemplo — Episodio 1", portada: "https://picsum.photos/seed/ep1/480/270", src: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
  { titulo: "Ejemplo — Episodio 2", portada: "https://picsum.photos/seed/ep2/480/270", src: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
  { titulo: "Ejemplo — Episodio 3", portada: "https://picsum.photos/seed/ep3/480/270", src: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
  { titulo: "Ejemplo — Episodio 4", portada: "https://picsum.photos/seed/ep4/480/270", src: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
  { titulo: "Ejemplo — Episodio 5", portada: "https://picsum.photos/seed/ep5/480/270", src: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
];

/* ==============================================================
   REFERENCIAS AL DOM
============================================================== */
const grid        = document.getElementById('videoGrid');
const emptyState  = document.getElementById('emptyState');
const countBadge  = document.getElementById('countBadge');
const searchInput = document.getElementById('searchInput');

const modal        = document.getElementById('playerModal');
const modalTitle   = document.getElementById('modalTitle');
const playerIframe = document.getElementById('playerIframe');
const closeBtn     = document.getElementById('modalCloseBtn');
const backdrop     = document.querySelector('[data-close]');

const heroSection  = document.getElementById('heroSection');
const heroBackdrop = document.getElementById('heroBackdrop');
const heroTitle    = document.getElementById('heroTitle');
const heroPlayBtn  = document.getElementById('heroPlayBtn');

/* ==============================================================
   HERO — usa el primer título de la videoteca como destacado
============================================================== */
function renderHero() {
  if (videoteca.length === 0) {
    heroSection.classList.add('hidden');
    return;
  }
  const destacado = videoteca[0];
  heroBackdrop.style.backgroundImage = `url("${destacado.portada}")`;
  heroTitle.textContent = destacado.titulo;
  heroPlayBtn.onclick = () => abrirModal(destacado);
  heroSection.classList.remove('hidden');
}

/* ==============================================================
   RENDERIZAR TARJETAS
============================================================== */
function renderCards(lista, terminoBusqueda = '') {
  grid.innerHTML = '';
  countBadge.textContent = `${String(lista.length).padStart(3, '0')} TÍTULOS`;

  if (lista.length === 0) {
    emptyState.textContent = terminoBusqueda
      ? `Sin coincidencias para "${terminoBusqueda}". Prueba con otro título.`
      : 'Tu videoteca está vacía. Agrega un objeto al array "videoteca" en app.js.';
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
  }

  lista.forEach((video, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Reproducir ${video.titulo}`);

    card.innerHTML = `
      <div class="card-thumb">
        <img src="${video.portada}" alt="${video.titulo}" loading="lazy">
        <span class="card-index">EP ${String(i + 1).padStart(2, '0')}</span>
        <div class="card-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="white" width="44" height="44"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="card-info">
        <h3 class="card-title">${video.titulo}</h3>
      </div>
    `;

    card.querySelector('img').addEventListener('error', function () {
      this.style.opacity = '0';
    }, { once: true });

    card.addEventListener('click', () => abrirModal(video));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        abrirModal(video);
      }
    });

    grid.appendChild(card);
  });
}

/* ==============================================================
   MODAL: ABRIR / CERRAR
============================================================== */
function abrirModal(video) {
  modalTitle.textContent = video.titulo;
  playerIframe.src = video.src;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function cerrarModal() {
  modal.classList.add('hidden');
  playerIframe.src = ''; // Detiene la reproducción al cerrar
  modalTitle.textContent = '';
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', cerrarModal);
backdrop.addEventListener('click', cerrarModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) cerrarModal();
});

/* ==============================================================
   BUSCADOR EN VIVO
============================================================== */
searchInput.addEventListener('input', () => {
  const termino = searchInput.value.trim().toLowerCase();
  const filtrados = videoteca.filter((v) => v.titulo.toLowerCase().includes(termino));
  renderCards(filtrados, searchInput.value.trim());
});

/* ==============================================================
   INICIALIZAR
============================================================== */
renderHero();
renderCards(videoteca);
