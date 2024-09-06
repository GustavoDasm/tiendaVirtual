import { Component, inject } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../interfaces/producto';

@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent {
  productosService = inject(ProductoService)
  public listaProductos: Producto[] = [];

  constructor(){
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.productosService.listarProductos().subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.listaProductos = data;
          console.log(this.listaProductos)
        }
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }
}
