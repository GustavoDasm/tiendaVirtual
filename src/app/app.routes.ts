import { Routes } from '@angular/router';

import { DetallesProductoModalComponent } from './pages/plataforma/detalles-producto-modal/detalles-producto-modal.component';
import { PlataformaComponent } from './pages/plataforma/plataforma.component';
import { ContenidoComponent } from './pages/plataforma/contenido/contenido.component';
import { PasarelaPagosComponent } from './pages/plataforma/pasarela-pagos/pasarela-pagos.component';
import { CompraInvitadoComponent } from './pages/plataforma/compra-invitado/compra-invitado.component';
import { LoginComponent } from './pages/Auth/login/login.component';
import { DetallesProductoComponent } from './pages/plataforma/detalles-producto/detalles-producto.component';
import { RegistroUsuarioComponent } from './pages/Auth/registro-usuario/registro-usuario.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro-usuario', component: RegistroUsuarioComponent },
    { path: 'plataforma', component: PlataformaComponent, children: [
        { path: '', redirectTo: 'contenido', pathMatch: 'full' },
        { path: 'contenido', component: ContenidoComponent },
        { path: 'test', component: DetallesProductoComponent },
        { path: 'detalles-producto-modal', component: DetallesProductoModalComponent },
        { path: 'pasarela-pagos', component: PasarelaPagosComponent},
        { path: 'compra-invitado', component: CompraInvitadoComponent}
        ]
    },
];
