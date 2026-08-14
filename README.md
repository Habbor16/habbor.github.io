<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <title>BOBINA — Directorio Personal</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Karla:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header class="topbar">
    <div class="brand">
      <svg class="brand-icon" viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <circle class="brand-icon-ring" cx="12" cy="12" r="9" fill="none" stroke-width="1.6" />
        <circle class="brand-icon-dot" cx="12" cy="12" r="2" />
        <circle class="brand-icon-dot" cx="12" cy="6.7" r="1.5" />
        <circle class="brand-icon-dot" cx="7.4" cy="14.6" r="1.5" />
        <circle class="brand-icon-dot" cx="16.6" cy="14.6" r="1.5" />
      </svg>
      <span class="brand-name">BOBINA</span>
    </div>

    <div class="search-box">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
        <path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
      <input type="text" id="searchInput" placeholder="Buscar por título..." aria-label="Buscar por título" autocomplete="off" />
    </div>
  </header>

  <main class="container">
    <div class="page-heading">
      <h1>Mi Colección</h1>
      <span id="countBadge" class="count-badge">000 TÍTULOS</span>
    </div>

    <section id="videoGrid" class="video-grid" aria-live="polite">
      <!-- Las tarjetas se generan automáticamente desde app.js -->
    </section>

    <p id="emptyState" class="empty-state hidden"></p>
  </main>

  <div id="playerModal" class="modal hidden" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal-backdrop" data-close></div>
    <div class="modal-panel">
      <button class="modal-close" id="modalCloseBtn" aria-label="Cerrar reproductor">&times;</button>
      <h2 id="modalTitle" class="modal-title"></h2>
      <div class="player-frame">
        <iframe
          id="playerIframe"
          src=""
          title="Reproductor de video"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
