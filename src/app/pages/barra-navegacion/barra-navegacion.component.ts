import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  frase: string = "Donde la imaginación se convierte en código y cada línea construye un nuevo mundo"
/*   @Input() carrito: Producto[] = []; */
  productos: Producto[] = [];

  agregarAlCarrito(producto: Producto) {
    this.productos.push(producto);
  } 
}
