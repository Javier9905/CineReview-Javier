const peliculas = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ciencia ficción",
    fecha: "2014-11-06",
    rating: 4.9,
    imagen: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
    sinopsis: "Un grupo de exploradores viaja a través de un agujero de gusano para buscar un nuevo hogar para la humanidad.",
    actores: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    resena: "Una película visualmente poderosa que combina ciencia, emoción y reflexión sobre el futuro de la humanidad."
  },
  {
    id: 2,
    titulo: "Coco",
    genero: "Animación",
    fecha: "2017-10-27",
    rating: 4.8,
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    sinopsis: "Miguel viaja al mundo de los muertos para descubrir la verdad sobre su familia y su pasión por la música.",
    actores: "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt",
    resena: "Una historia emotiva, colorida y familiar que resalta la importancia de la memoria y las raíces."
  },
  {
    id: 3,
    titulo: "Avatar: El camino del agua",
    genero: "Acción",
    fecha: "2022-12-16",
    rating: 4.5,
    imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    sinopsis: "Jake Sully y su familia exploran nuevas regiones de Pandora mientras enfrentan una amenaza humana.",
    actores: "Sam Worthington, Zoe Saldaña, Sigourney Weaver",
    resena: "Destaca por su apartado visual, sus escenarios acuáticos y su mensaje sobre la protección del entorno."
  },
  {
    id: 4,
    titulo: "La La Land",
    genero: "Drama",
    fecha: "2016-12-09",
    rating: 4.6,
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
    sinopsis: "Una actriz y un músico intentan cumplir sus sueños mientras construyen una relación en Los Ángeles.",
    actores: "Ryan Gosling, Emma Stone, John Legend",
    resena: "Una producción elegante que mezcla música, romance y decisiones personales con una estética memorable."
  },
  {
    id: 5,
    titulo: "Duna",
    genero: "Ciencia ficción",
    fecha: "2021-10-22",
    rating: 4.7,
    imagen: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    sinopsis: "Paul Atreides llega al planeta Arrakis, un lugar desértico clave para el futuro del universo.",
    actores: "Timothée Chalamet, Zendaya, Oscar Isaac",
    resena: "Una adaptación seria, visualmente fuerte y con una construcción de mundo muy bien lograda."
  },
  {
    id: 6,
    titulo: "Spider-Man: Un nuevo universo",
    genero: "Animación",
    fecha: "2018-12-14",
    rating: 4.9,
    imagen: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    sinopsis: "Miles Morales descubre sus poderes y conoce otras versiones de Spider-Man de distintos universos.",
    actores: "Shameik Moore, Jake Johnson, Hailee Steinfeld",
    resena: "Innovadora, dinámica y visualmente diferente; combina humor, acción y crecimiento personal."
  }
];

const contenedorPeliculas = document.querySelector("#contenedorPeliculas");
const contenedorFavoritas = document.querySelector("#contenedorFavoritas");
const buscador = document.querySelector("#buscador");
const filtroGenero = document.querySelector("#filtroGenero");
const ordenFecha = document.querySelector("#ordenFecha");
const detallePelicula = document.querySelector("#detallePelicula");
const formComentario = document.querySelector("#formComentario");
const listaComentarios = document.querySelector("#listaComentarios");
const totalPeliculas = document.querySelector("#totalPeliculas");
const promedioRating = document.querySelector("#promedioRating");
const totalFavoritas = document.querySelector("#totalFavoritas");

let favoritas = JSON.parse(localStorage.getItem("favoritasCineReview")) || [];

function formatoFecha(fecha) {
  return new Intl.DateTimeFormat("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(fecha));
}

function obtenerPeliculasFiltradas() {
  const texto = buscador ? buscador.value.toLowerCase().trim() : "";
  const genero = filtroGenero ? filtroGenero.value : "todas";
  const orden = ordenFecha ? ordenFecha.value : "recientes";

  const resultado = peliculas.filter((pelicula) => {
    const coincideTexto = pelicula.titulo.toLowerCase().includes(texto) || pelicula.resena.toLowerCase().includes(texto);
    const coincideGenero = genero === "todas" || pelicula.genero === genero;
    return coincideTexto && coincideGenero;
  });

  resultado.sort((a, b) => {
    if (orden === "rating") return b.rating - a.rating;
    return orden === "recientes" ? new Date(b.fecha) - new Date(a.fecha) : new Date(a.fecha) - new Date(b.fecha);
  });

  return resultado;
}

function actualizarIndicadores(resultado = peliculas) {
  if (totalPeliculas) totalPeliculas.textContent = resultado.length;
  if (promedioRating) {
    const promedio = resultado.length ? resultado.reduce((sum, pelicula) => sum + pelicula.rating, 0) / resultado.length : 0;
    promedioRating.textContent = promedio.toFixed(1);
  }
  if (totalFavoritas) totalFavoritas.textContent = favoritas.length;
}

function renderPeliculas() {
  if (!contenedorPeliculas) return;

  const resultado = obtenerPeliculasFiltradas();
  actualizarIndicadores(resultado);

  contenedorPeliculas.innerHTML = resultado.map((pelicula) => `
    <article class="col-12 col-sm-6 col-lg-4">
      <div class="card card-pelicula h-100 shadow-sm">
        <img class="poster" src="${pelicula.imagen}" alt="Imagen representativa de ${pelicula.titulo}">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
            <h3 class="h5 fw-bold mb-0">${pelicula.titulo}</h3>
            <span class="rating">★ ${pelicula.rating}</span>
          </div>
          <span class="badge badge-genero align-self-start mb-3">${pelicula.genero}</span>
          <p class="small text-secondary mb-2"><strong>Estreno:</strong> ${formatoFecha(pelicula.fecha)}</p>
          <p class="text-secondary flex-grow-1">${pelicula.resena}</p>
          <div class="d-flex gap-2">
            <a class="btn btn-dark flex-fill" href="detalle.html?id=${pelicula.id}">Ver detalle</a>
            <button class="btn btn-outline-warning" onclick="agregarFavorita(${pelicula.id})" aria-label="Agregar ${pelicula.titulo} a favoritas">♡</button>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  if (resultado.length === 0) {
    contenedorPeliculas.innerHTML = `<div class="col-12"><p class="empty-state">No se encontraron películas con esos filtros.</p></div>`;
  }
}

function agregarFavorita(id) {
  const pelicula = peliculas.find((item) => item.id === id);
  if (!pelicula) return;

  if (!favoritas.some((item) => item.id === id)) {
    favoritas.push(pelicula);
    localStorage.setItem("favoritasCineReview", JSON.stringify(favoritas));
    renderFavoritas();
    actualizarIndicadores(obtenerPeliculasFiltradas());
  }
}

function quitarFavorita(id) {
  favoritas = favoritas.filter((item) => item.id !== id);
  localStorage.setItem("favoritasCineReview", JSON.stringify(favoritas));
  renderFavoritas();
  actualizarIndicadores(obtenerPeliculasFiltradas());
}

function renderFavoritas() {
  if (!contenedorFavoritas) return;

  if (favoritas.length === 0) {
    contenedorFavoritas.innerHTML = `<div class="col-12"><p class="empty-state">Aún no has agregado películas favoritas.</p></div>`;
    actualizarIndicadores(obtenerPeliculasFiltradas());
    return;
  }

  contenedorFavoritas.innerHTML = favoritas.map((pelicula) => `
    <article class="col-12 col-md-6">
      <div class="favorite-card">
        <div>
          <h3>${pelicula.titulo}</h3>
          <span>${pelicula.genero} · ★ ${pelicula.rating}</span>
        </div>
        <button class="btn btn-sm btn-outline-danger" onclick="quitarFavorita(${pelicula.id})">Quitar</button>
      </div>
    </article>
  `).join("");
}

function renderDetalle() {
  if (!detallePelicula) return;

  const parametros = new URLSearchParams(window.location.search);
  const id = Number(parametros.get("id"));
  const pelicula = peliculas.find((item) => item.id === id) || peliculas[0];

  document.title = `${pelicula.titulo} | CineReview Javier`;
  detallePelicula.innerHTML = `
    <div class="col-12 col-lg-5">
      <img class="detalle-img shadow" src="${pelicula.imagen}" alt="Imagen representativa de ${pelicula.titulo}">
    </div>
    <article class="col-12 col-lg-7 detail-content">
      <span class="badge badge-genero mb-3">${pelicula.genero}</span>
      <h1>${pelicula.titulo}</h1>
      <p class="rating fs-4">★ ${pelicula.rating}</p>
      <p><strong>Fecha de estreno:</strong> ${formatoFecha(pelicula.fecha)}</p>
      <p><strong>Actores principales:</strong> ${pelicula.actores}</p>
      <h2>Sinopsis</h2>
      <p>${pelicula.sinopsis}</p>
      <h2>Reseña</h2>
      <p>${pelicula.resena}</p>
    </article>
  `;
}

function renderComentarios() {
  if (!listaComentarios) return;

  const parametros = new URLSearchParams(window.location.search);
  const id = Number(parametros.get("id")) || 1;
  const comentarios = JSON.parse(localStorage.getItem(`comentariosCineReview_${id}`)) || [];

  if (comentarios.length === 0) {
    listaComentarios.innerHTML = `<p class="empty-state mb-0">Todavía no hay comentarios para esta película.</p>`;
    return;
  }

  listaComentarios.innerHTML = comentarios.map((item) => `
    <div class="comentario-item">
      <strong>${item.nombre}</strong>
      <p class="mb-0">${item.comentario}</p>
    </div>
  `).join("");
}

if (buscador && filtroGenero && ordenFecha) {
  [buscador, filtroGenero, ordenFecha].forEach((control) => control.addEventListener("input", renderPeliculas));
  renderPeliculas();
  renderFavoritas();
}

if (detallePelicula) {
  renderDetalle();
  renderComentarios();
}

if (formComentario) {
  formComentario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id")) || 1;
    const comentarios = JSON.parse(localStorage.getItem(`comentariosCineReview_${id}`)) || [];
    comentarios.push({
      nombre: document.querySelector("#nombre").value.trim(),
      comentario: document.querySelector("#comentario").value.trim()
    });
    localStorage.setItem(`comentariosCineReview_${id}`, JSON.stringify(comentarios));
    formComentario.reset();
    renderComentarios();
  });
}
