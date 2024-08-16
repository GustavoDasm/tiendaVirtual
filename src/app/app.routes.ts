import { Routes } from '@angular/router';
import { DetallesProductoModalComponent } from './pages/detalles-producto-modal/detalles-producto-modal.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';
import { BarraNavegacionComponent } from './pages/barra-navegacion/barra-navegacion.component';


export const routes: Routes = [
    { path: 'detalles-producto', component: DetallesProductoComponent },
    { path: 'detalles-producto-modal', component: DetallesProductoModalComponent },
    /* { path: 'carrito/:id', component: BarraNavegacionComponent} */
];
