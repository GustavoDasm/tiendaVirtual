import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContenidoComponent } from '../contenido/contenido.component';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-pasarela-pagos',
  standalone: true,
  imports: [RouterLink, ContenidoComponent],
  templateUrl: './pasarela-pagos.component.html',
  styleUrl: './pasarela-pagos.component.css'
})
export class PasarelaPagosComponent {
  carritoService = inject(CarritoService)
}
