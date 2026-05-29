import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie, MovieComment } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-detalle',
  imports: [FormsModule, RouterLink, DatePipe],
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  pelicula: Movie;
  comentarios: MovieComment[] = [];
  nombre = '';
  comentario = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id')) || 1;
    this.pelicula = this.movieService.getMovie(id);
    this.comentarios = this.movieService.getComments(this.pelicula.id);
  }

  agregarComentario(): void {
    const nombre = this.nombre.trim();
    const comentario = this.comentario.trim();

    if (!nombre || !comentario) return;

    this.comentarios = this.movieService.addComment(this.pelicula.id, { nombre, comentario });
    this.nombre = '';
    this.comentario = '';
  }
}
