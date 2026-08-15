/* ==============================================================
   🎬 TU BASE DE DATOS DE VIDEOS
   --------------------------------------------------------------
   Este archivo se comparte entre TODAS las páginas de HABBOR.
   Edítalo una sola vez y se refleja en Inicio, Catálogo,
   Reproductor, Mi Lista, etc.

   Cada objeto necesita 3 campos y admite un cuarto opcional:

     titulo        Nombre que verás en la tarjeta
     portada       URL de una imagen vertical (ideal 2:3, ej. 400x600)
     src           URL que va dentro del iframe del reproductor
     calificacion  (opcional) texto tipo "4.8" para el badge ★

   Para agregar un video nuevo, copia este bloque:

     {
       titulo: "...",
       portada: "...",
       src: "..."
     },

   ...pégalo dentro del array de abajo y reemplaza los valores.
   "calificacion" es opcional — si lo omites, esa tarjeta
   simplemente no muestra el badge de estrella.

   NOTA: los 5 elementos de abajo son solo de ejemplo (reutilizan
   el mismo video con licencia Creative Commons e imágenes
   placeholder) para que compruebes que todo funciona. Bórralos
   cuando cargues tus propios enlaces.
============================================================== */
const videoteca = [
  { titulo: "Ejemplo — Episodio 1", portada: "https://picsum.photos/seed/ep1/400/600", src: "https://www.youtube.com/embed/aqz-KE-bpKQ", calificacion: "4.8" },
  { titulo: "Ejemplo — Episodio 2", portada: "https://picsum.photos/seed/ep2/400/600", src: "https://www.youtube.com/embed/aqz-KE-bpKQ", calificacion: "4.6" },
  { titulo: "Ejemplo — Episodio 3", portada: "https://picsum.photos/seed/ep3/400/600", src: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
  { titulo: "Ejemplo — Episodio 4", portada: "https://picsum.photos/seed/ep4/400/600", src: "https://www.youtube.com/embed/aqz-KE-bpKQ", calificacion: "4.9" },
  { titulo: "Ejemplo — Episodio 5", portada: "https://picsum.photos/seed/ep5/400/600", src: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
];
