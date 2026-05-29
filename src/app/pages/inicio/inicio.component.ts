import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule, RouterLink, DatePipe, DecimalPipe],
  templateUrl: './inicio.component.html'
})
export class InicioComponent {
  texto = '';
  genero = 'todas';
  orden = 'recientes';
  favoritas: Movie[] = [];

  readonly peliculas: Movie[];
  readonly generos = ['Ciencia ficcion', 'Animacion', 'Accion', 'Drama'];

  constructor(private readonly movieService: MovieService) {
    this.peliculas = this.movieService.peliculas;
    this.favoritas = this.movieService.getFavorites();
  }

  get peliculasFiltradas(): Movie[] {
    const textoNormalizado = this.texto.toLowerCase().trim();

    return this.peliculas
      .filter((pelicula) => {
        const coincideTexto = pelicula.titulo.toLowerCase().includes(textoNormalizado)
          || pelicula.resena.toLowerCase().includes(textoNormalizado);
        const coincideGenero = this.genero === 'todas' || pelicula.genero === this.genero;
        return coincideTexto && coincideGenero;
      })
      .sort((a, b) => {
        if (this.orden === 'rating') return b.rating - a.rating;
        const dateA = new Date(a.fecha).getTime();
        const dateB = new Date(b.fecha).getTime();
        return this.orden === 'recientes' ? dateB - dateA : dateA - dateB;
      });
  }

  get promedioRating(): number {
    const peliculas = this.peliculasFiltradas;
    if (!peliculas.length) return 0;
    return peliculas.reduce((sum, pelicula) => sum + pelicula.rating, 0) / peliculas.length;
  }

  agregarFavorita(id: number): void {
    this.favoritas = this.movieService.addFavorite(id);
  }

  quitarFavorita(id: number): void {
    this.favoritas = this.movieService.removeFavorite(id);
  }
}
