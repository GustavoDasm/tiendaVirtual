import { inject, Injectable } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { ProductoService } from '../../../services/producto.service';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  listaProductos: Producto[] = [];
  productosService = inject(ProductoService)
  constructor() {
    
  }

  obtenerProductos(){
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

  obtenerProductoPorNombre(nombre: string){
    this.productosService.obtenerProductoNombre(nombre).subscribe({
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

  obtenerProductosPorPrecioAscDesc(orden: string){
    this.productosService.obtenerProductoPorOrdenPrecio(orden).subscribe({
      next: (data) => {
        if(Array.isArray(data)){
          this.listaProductos = data;
          console.log(this.listaProductos)
        }
      },
      error: (err) => {
        console.log(err.message)
      } 
    })
  }
}
