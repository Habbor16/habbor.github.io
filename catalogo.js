/* ==============================================================
   catalogo.js — lógica de catalogo.html
   (las categorías de la izquierda son navegación visual: tus
   datos no tienen campo de género todavía, así que todas
   llevan al catálogo completo)
============================================================== */
const grid       = document.getElementById('videoGrid');
const emptyState = document.getElementById('emptyState');
const countBadge = document.getElementById('countBadge');

function filtrar(termino) {
  return termino ? videoteca.filter((v) => v.titulo.toLowerCase().includes(termino.toLowerCase())) : videoteca;
}

function renderCatalogo(lista, termino = '') {
  grid.innerHTML = '';
  countBadge.textContent = `${String(lista.length).padStart(3, '0')} TÍTULOS`;

  if (lista.length === 0) {
    emptyState.textContent = termino
      ? `Sin coincidencias para "${termino}". Prueba con otro título.`
      : 'Tu videoteca está vacía. Agrega un objeto al array "videoteca" en data.js.';
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
  }

  lista.forEach((video) => {
    const indiceReal = videoteca.indexOf(video);
    grid.appendChild(construirTarjeta(video, indiceReal));
  });
}

const params = new URLSearchParams(window.location.search);
const buscarInicial = params.get('buscar') || '';
renderCatalogo(filtrar(buscarInicial), buscarInicial);

document.addEventListener('DOMContentLoaded', () => {
  const navSearchInput = document.getElementById('navSearchInput');
  if (!navSearchInput) return;
  navSearchInput.value = buscarInicial;
  navSearchInput.addEventListener('input', () => {
    const termino = navSearchInput.value.trim();
    renderCatalogo(filtrar(termino), termino);
  });
});
