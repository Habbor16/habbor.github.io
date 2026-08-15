/* ==============================================================
   home.js — lógica de index.html (Inicio)
============================================================== */
const heroBackdrop  = document.getElementById('heroBackdrop');
const heroTitle     = document.getElementById('heroTitle');
const heroPlayBtn   = document.getElementById('heroPlayBtn');
const heroDots      = document.getElementById('heroDots');
const heroPrev      = document.getElementById('heroPrev');
const heroNext      = document.getElementById('heroNext');
const destacadosRow = document.getElementById('destacadosRow');
const rankingList   = document.getElementById('rankingList');

const TOTAL_HERO = Math.min(videoteca.length, 5);
let heroIndex = 0;

function pintarHero() {
  const video = videoteca[heroIndex];
  heroBackdrop.style.backgroundImage = `url("${video.portada}")`;
  heroTitle.textContent = video.titulo;
  heroPlayBtn.href = `episodio.html?id=${heroIndex}`;
  heroDots.innerHTML = '';
  for (let i = 0; i < TOTAL_HERO; i++) {
    const dot = document.createElement('span');
    dot.className = 'hero-dot' + (i === heroIndex ? ' active' : '');
    dot.addEventListener('click', () => { heroIndex = i; pintarHero(); });
    heroDots.appendChild(dot);
  }
}

heroPrev.addEventListener('click', () => { heroIndex = (heroIndex - 1 + TOTAL_HERO) % TOTAL_HERO; pintarHero(); });
heroNext.addEventListener('click', () => { heroIndex = (heroIndex + 1) % TOTAL_HERO; pintarHero(); });

function pintarDestacados() {
  destacadosRow.innerHTML = '';
  videoteca.slice(0, 6).forEach((video, i) => destacadosRow.appendChild(construirTarjeta(video, i)));
}

function pintarRanking() {
  rankingList.innerHTML = '';
  videoteca.slice(0, 5).forEach((video, i) => {
    const li = document.createElement('li');
    li.className = 'ranking-item';
    li.innerHTML = `
      <span class="ranking-number">${i + 1}</span>
      <img src="${video.portada}" alt="${video.titulo}" class="ranking-thumb" loading="lazy">
      <div class="ranking-info">
        <p class="ranking-title">${video.titulo}</p>
        <p class="ranking-meta">${video.calificacion ? '★ ' + video.calificacion : 'EP ' + String(i + 1).padStart(2, '0')}</p>
      </div>
    `;
    li.addEventListener('click', () => { window.location.href = `episodio.html?id=${i}`; });
    rankingList.appendChild(li);
  });
}

if (videoteca.length === 0) {
  document.getElementById('heroSection').classList.add('hidden');
} else {
  document.getElementById('heroSection').classList.remove('hidden');
  pintarHero();
}
pintarDestacados();
pintarRanking();
