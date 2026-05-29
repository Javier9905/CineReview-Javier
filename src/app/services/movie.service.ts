import { Injectable } from '@angular/core';
import { MOVIES } from '../data/movies';
import { Movie, MovieComment } from '../models/movie';

const FAVORITES_KEY = 'favoritasCineReview';

@Injectable({ providedIn: 'root' })
export class MovieService {
  readonly peliculas = MOVIES;

  getMovie(id: number): Movie {
    return this.peliculas.find((movie) => movie.id === id) ?? this.peliculas[0];
  }

  getFavorites(): Movie[] {
    return this.readFromStorage<Movie[]>(FAVORITES_KEY, []);
  }

  addFavorite(id: number): Movie[] {
    const movie = this.getMovie(id);
    const favorites = this.getFavorites();

    if (!favorites.some((item) => item.id === id)) {
      favorites.push(movie);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }

    return favorites;
  }

  removeFavorite(id: number): Movie[] {
    const favorites = this.getFavorites().filter((item) => item.id !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return favorites;
  }

  getComments(movieId: number): MovieComment[] {
    return this.readFromStorage<MovieComment[]>(this.commentKey(movieId), []);
  }

  addComment(movieId: number, comment: MovieComment): MovieComment[] {
    const comments = this.getComments(movieId);
    comments.push(comment);
    localStorage.setItem(this.commentKey(movieId), JSON.stringify(comments));
    return comments;
  }

  private commentKey(movieId: number): string {
    return `comentariosCineReview_${movieId}`;
  }

  private readFromStorage<T>(key: string, fallback: T): T {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) as T : fallback;
    } catch {
      return fallback;
    }
  }
}
