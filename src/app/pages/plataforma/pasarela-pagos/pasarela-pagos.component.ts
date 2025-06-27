import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContenidoComponent } from '../contenido/contenido.component';
import { CarritoService } from '../../../services/carrito.service';
import { CompraInvitadoComponent } from '../compra-invitado/compra-invitado.component';
import { Producto } from '../../../interfaces/producto';

@Component({
    selector: 'app-pasarela-pagos',
    imports: [RouterLink, ContenidoComponent, CompraInvitadoComponent],
    templateUrl: './pasarela-pagos.component.html',
    styleUrl: './pasarela-pagos.component.css'
})
export class PasarelaPagosComponent {
  carritoService = inject(CarritoService)


  aumentarCantidad(producto: Producto){
    this.carritoService.aumentarCantidadProducto(producto)
  }

  disminuirCantidad(producto: Producto){
    this.carritoService.disminuirCantidadProducto(producto)
  }
}
