import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Pelicula {
  titulo: string;
  descripcion: string;
  anio: number;
  poster: string;
  director: string;
  genero: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculas: Pelicula[] = [
    {
      titulo: 'Dune',
      descripcion: 'Paul Atreides, un joven brillante y talentoso, debe viajar al planeta más peligroso del universo para asegurar el futuro de su familia y su pueblo.',
      anio: 2021,
      poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      director: 'Denis Villeneuve',
      genero: 'Ciencia ficción épica'
    },
    {
      titulo: 'El Padrino',
      descripcion: 'Don Vito Corleone, el jefe de una familia de la mafia de Nueva York, recibe peticiones el día de la boda de su hija.',
      anio: 1972,
      poster: 'https://image.tmdb.org/t/p/w500/wLXd1Cd0XW7DhXayfC0Ok5ago9r.jpg',
      director: 'Francis Ford Coppola',
      genero: 'Mafia'
    },
    {
      titulo: 'Pulp Fiction',
      descripcion: 'Las vidas de dos sicarios, un boxeador, la esposa de un gángster y dos bandidos se entrelazan en cuatro historias de violencia y redención.',
      anio: 1994,
      poster: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      director: 'Quentin Tarantino',
      genero: 'Crimen'
    }
  ];

  constructor() { }

  getPeliculas(): Observable<Pelicula[]> {
    return of(this.peliculas);
  }

  getAnios(): Observable<number[]> {
    const anios = [...new Set(this.peliculas.map(p => p.anio))].sort();
    return of(anios);
  }
} 