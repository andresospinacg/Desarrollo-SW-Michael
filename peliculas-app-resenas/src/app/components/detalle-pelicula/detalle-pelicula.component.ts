import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PeliculasService, Pelicula } from '../../services/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DetallePeliculaComponent implements OnInit {
  pelicula: Pelicula | undefined;

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const titulo = params['titulo'];
      this.peliculasService.getPeliculas().subscribe(peliculas => {
        this.pelicula = peliculas.find(p => p.titulo === titulo);
      });
    });
  }
} 