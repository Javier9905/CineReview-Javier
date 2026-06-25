# CineReview Javier

Catalogo web de resenas cinematograficas construido con Angular, Sass y Bootstrap. El proyecto muestra una experiencia responsive para explorar peliculas, filtrar resultados, guardar favoritas y revisar detalles con comentarios locales.

## Perfil Publico

**Javier Andres Barrera Cardenas**  
Estudiante de Ingenieria de Software y desarrollador front-end junior en formacion.

- Perfil laboral ES: [PERFIL_DESARROLLADOR.md](PERFIL_DESARROLLADOR.md)
- Developer profile EN: [PROFILE_DEVELOPER_EN.md](PROFILE_DEVELOPER_EN.md)
- Ingles avanzado: 90%.
- Saber TyT Ingles: B2, 168/200, percentil nacional 100.
- Saber TyT global: 130/200, percentil nacional 98.
- Enfoque profesional: Angular, TypeScript, JavaScript, Sass, SQL Server, Node.js, Git y GitHub.

## Stack Tecnico

- Angular 21
- TypeScript
- Sass / SCSS
- Bootstrap
- HTML5 y CSS3
- LocalStorage
- Git y GitHub

## Funcionalidades

- Catalogo de peliculas presentado en tarjetas responsive.
- Busqueda por titulo o resena.
- Filtro por genero.
- Ordenamiento por fecha o calificacion.
- Pagina de detalle por pelicula.
- Favoritas persistidas en `localStorage`.
- Comentarios locales por pelicula.
- Separacion por componentes, rutas, servicios y modelos.

## Valor Tecnico

Este proyecto evidencia capacidades importantes para un rol junior o trainee de desarrollo web:

- Construccion de interfaces con Angular y TypeScript.
- Manejo de estado simple usando servicios.
- Persistencia local con `localStorage`.
- Uso de pipes, formularios y rutas.
- Estructura de datos tipada con modelos.
- Estilos escalables con Sass.
- Diseno responsive para escritorio y movil.

## Instalacion

```bash
npm install
```

## Ejecutar en Desarrollo

```bash
npm start
```

La aplicacion queda disponible normalmente en:

```text
http://localhost:4200
```

## Build

```bash
npm run build
```

El build genera los archivos de produccion en `dist/`.

## Contexto Academico

El proyecto nace como una actividad de profundizacion del curso Desarrollo de Software Web Front-End. La version actual migra y organiza la experiencia como aplicacion Angular, manteniendo el proposito original de CineReview Javier y elevandolo como pieza de portafolio.

## Evidencia Sass

El proyecto usa variables, anidacion e interpolacion en Sass. Ejemplos:

```scss
$color-primary: #f59e0b;
$color-secondary: #5b21b6;
$font-main: "Segoe UI", system-ui, sans-serif;
```

```scss
.hero {
  &__content { }
  &__badge { }
  h1 { }
}
```

```scss
$movie-card-class: "card-pelicula";
.#{$movie-card-class} { }
```
