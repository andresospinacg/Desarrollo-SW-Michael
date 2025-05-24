import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PeliculasService, Pelicula } from '../../services/peliculas.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class CatalogoComponent implements OnInit {
  peliculas: Pelicula[] = [];
  peliculasFiltradas: Pelicula[] = [];
  anios: number[] = [];
  terminoBusqueda: string = '';
  anioSeleccionado: string = '';

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe(peliculas => {
      this.peliculas = peliculas;
      this.peliculasFiltradas = peliculas;
      this.anios = [...new Set(peliculas.map(p => p.anio))].sort((a, b) => b - a);
    });
  }

  filtrarPeliculas(): void {
    this.peliculasFiltradas = this.peliculas.filter(pelicula => {
      const coincideTitulo = pelicula.titulo.toLowerCase().includes(this.terminoBusqueda.toLowerCase());
      const coincideAnio = !this.anioSeleccionado || pelicula.anio.toString() === this.anioSeleccionado;
      return coincideTitulo && coincideAnio;
    });
  }
} 