import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  obtenerProductos(): Producto[] {
    return this.productos;
  }
}
