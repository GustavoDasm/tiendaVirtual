import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { CarritoService } from '../../../services/carrito.service';
import { Carrito } from '../../../interfaces/carrito';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';


@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent implements OnInit{
  frase: string = "Donde la imaginación se convierte en código y cada línea construye un nuevo mundo"
  productosCarrito: Carrito[] = [];
  carritoService = inject(CarritoService)
  productoService = inject(ProductoService)
  precioTotal: number = 0;
  cantidadTotal: number = 0;
  buscarProducto: string = "";

  ngOnInit(): void {
  }

  constructor(){  
  }

  buscarProductoPorNombre(){
    this.productoService.obtenerProductoNombre(this.buscarProducto);
  }

  carritoVacio(): boolean{
    return this.carritoService.obtenerCantidadTotal() === 0
  }

  mostrarProductosCarrito(): void {
    this.productosCarrito = this.carritoService.obtenerCarrito();
    this.mostrarPrecioTotal()
  }

  mostrarPrecioTotal():void{
    this.precioTotal = this.carritoService.obtenerPrecioTotal();
    this.mostrarCantidadTotal()
  }

  mostrarCantidadTotal(): void{
    this.cantidadTotal = this.carritoService.obtenerCantidadTotal();
  }

  eliminarDelCarrito(producto: Producto) {
    this.carritoService.eliminarProducto(producto);
    this.mostrarProductosCarrito();
  }

  aumentarCantidad(producto: Producto){
    this.carritoService.aumentarCantidadProducto(producto)
    this.mostrarProductosCarrito()
  }

  disminuirCantidad(producto: Producto){
    this.carritoService.disminuirCantidadProducto(producto)
    this.mostrarProductosCarrito()
  }
/*   obtenerTotal(): void {
    for (let i = 0; i < this.productosCarrito.length; i++) {
      let producto = this.productosCarrito[i];
      this.total += producto.cantidadPedido * producto.precio;
    }
  } */

  /* verificarIdRepetido(id: number): boolean {
    let verificarId = false
    this.productosCarrito.forEach((i) => {
      if(i.id == id){
        verificarId = true
      } 
    });
    return verificarId
  } */


}
