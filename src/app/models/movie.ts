export interface Movie {
  id: number;
  titulo: string;
  genero: string;
  fecha: string;
  rating: number;
  imagen: string;
  sinopsis: string;
  actores: string;
  resena: string;
}

export interface MovieComment {
  nombre: string;
  comentario: string;
}
