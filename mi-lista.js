/* ==============================================================
   mi-lista.js — lógica de mi-lista.html
   Placeholder honesto: sin localStorage, esta lista vive solo
   en memoria y se reinicia en cada carga de página. Avísame si
   quieres que persista de verdad (usando localStorage, que
   funciona bien cuando abres el sitio con Live Server).
============================================================== */
const grid       = document.getElementById('videoGrid');
const emptyState = document.getElementById('emptyState');
const countBadge = document.getElementById('countBadge');

const miLista = [];

countBadge.textContent = `${String(miLista.length).padStart(3, '0')} GUARDADOS`;
if (miLista.length === 0) {
  emptyState.classList.remove('hidden');
} else {
  emptyState.classList.add('hidden');
  miLista.forEach((video) => grid.appendChild(construirTarjeta(video, videoteca.indexOf(video))));
}
