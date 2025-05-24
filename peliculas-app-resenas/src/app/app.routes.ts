import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'pelicula/:titulo', component: DetallePeliculaComponent },
  { path: '**', redirectTo: '' }
];
