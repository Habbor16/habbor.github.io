/* ==============================================================
   episodio.js — lógica de episodio.html
   Lee qué video mostrar desde la URL (?id=), definido en
   "videoteca" (data.js).
============================================================== */
const params = new URLSearchParams(window.location.search);
const idParam = parseInt(params.get('id'), 10);
const indiceActual = (!Number.isNaN(idParam) && idParam >= 0 && idParam < videoteca.length) ? idParam : 0;

const playerIframe = document.getElementById('playerIframe');
const watchTitle    = document.getElementById('watchTitle');
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
const moreGrid      = document.getElementById('moreGrid');

function cargar() {
  const video = videoteca[indiceActual];
  if (!video) return;
  playerIframe.src = video.src;
  watchTitle.textContent = video.titulo;
  prevBtn.disabled = indiceActual <= 0;
  nextBtn.disabled = indiceActual >= videoteca.length - 1;

  moreGrid.innerHTML = '';
  videoteca.forEach((v, i) => {
    const card = construirTarjeta(v, i);
    if (i === indiceActual) card.classList.add('card-active');
    moreGrid.appendChild(card);
  });
}

prevBtn.addEventListener('click', () => { window.location.href = `episodio.html?id=${indiceActual - 1}`; });
nextBtn.addEventListener('click', () => { window.location.href = `episodio.html?id=${indiceActual + 1}`; });

cargar();
