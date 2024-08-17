import { Component, inject } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  frase: string = "Donde la imaginación se convierte en código y cada línea construye un nuevo mundo"
  productosCarrito: Producto[] = [];
  carritoService = inject(CarritoService)

  mostrarProductosCarrito(): void{
    this.productosCarrito = this.carritoService.obtenerProductos();
  } 
}
