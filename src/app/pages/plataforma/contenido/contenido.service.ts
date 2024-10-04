import { inject, Injectable } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { BarraNavService } from '../barra-navegacion/barra-nav.service';
import { ProductoService } from '../../../services/producto.service';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  listaProductos: Producto[] = [];
  barraNavService = inject(BarraNavService)
  productosService = inject(ProductoService)
  constructor() { }

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

  mostrarNombre(){
    console.log(this.barraNavService.nombre())
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
}
