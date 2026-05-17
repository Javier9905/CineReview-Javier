# PIC CineReview Javier - Actividad de Profundización

**Estudiante:** Javier Andrés Barrera Cárdenas  
**Programa académico:** Ingeniería de Software  
**Curso:** Desarrollo de Software Web Front-End  
**Actividad:** Actividad Académica No. 3 - Profundización  
**Proyecto base:** entregable_contextualizacion_Javier99 - CineReview Javier

## 1. Descripción general

Este proyecto corresponde a la actualización del trabajo original de contextualización llamado **CineReview Javier**, un catálogo web de reseñas cinematográficas. Para la etapa de profundización se mejoró la estructura visual, se mantuvo la temática original y se implementó **Sass** como preprocesador CSS.

El sitio permite:

- Consultar películas mediante tarjetas responsive.
- Buscar películas por título o reseña.
- Filtrar por género.
- Ordenar por fecha o calificación.
- Guardar películas favoritas durante la navegación.
- Ver una página de detalle por película.
- Agregar comentarios locales por película.

## 2. Relación con la actividad académica

La actividad solicita tomar el proyecto del momento evaluativo de contextualización y actualizarlo aplicando herramientas de control de versiones y Sass. Este entregable incluye:

- Proyecto web organizado para subir a Bitbucket.
- Archivo Sass en `scss/styles.scss`.
- CSS compilado en `css/estilos.css`.
- Uso de Bootstrap por CDN.
- Funcionalidad con JavaScript en `js/script.js`.
- Documentos de soporte para Bitbucket, video y foro.

## 3. Evidencia Sass

En `scss/styles.scss` se evidencia lo solicitado:

### Variables Sass

Se usan más de 5 variables, por ejemplo:

```scss
$color-primary: #f59e0b;
$color-secondary: #5b21b6;
$color-dark: #101827;
$color-muted: #64748b;
$color-light: #ffffff;
$font-main: "Segoe UI", system-ui, sans-serif;
$radius-main: 1.35rem;
$shadow-main: 0 1.2rem 2.5rem rgba(15, 23, 42, 0.12);
```

### Anidación de selectores

Se usa anidación en componentes como:

```scss
.hero {
  &__content { }
  &__badge { }
  h1 { }
}
```

### 2 casos de interpolación

Caso 1:

```scss
$movie-card-class: "card-pelicula";
.#{$movie-card-class} { }
```

Caso 2:

```scss
$genre-badge-class: "badge-genero";
.#{$genre-badge-class} { }
```

