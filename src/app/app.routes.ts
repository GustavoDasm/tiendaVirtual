import { Routes } from '@angular/router';

import { DetallesProductoModalComponent } from './pages/plataforma/detalles-producto-modal/detalles-producto-modal.component';
import { PlataformaComponent } from './pages/plataforma/plataforma.component';
import { ContenidoComponent } from './pages/plataforma/contenido/contenido.component';


export const routes: Routes = [
    {
        path: 'plataforma', component: PlataformaComponent, children: [
            { path: '', redirectTo: 'contenido', pathMatch: 'full' },
            { path: 'contenido', component: ContenidoComponent },
            { path: 'detalles-producto-modal', component: DetallesProductoModalComponent }
        ]
    },
];
