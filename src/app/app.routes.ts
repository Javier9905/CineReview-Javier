import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ContactosComponent } from './pages/contactos/contactos.component';

export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'PIC CineReview Javier | Resenas cinematograficas' },
  { path: 'detalle/:id', component: DetalleComponent, title: 'Detalle de pelicula | CineReview Javier' },
  { path: 'contactos', component: ContactosComponent, title: 'Contactos | CineReview Javier' },
  { path: '**', redirectTo: '' }
];
