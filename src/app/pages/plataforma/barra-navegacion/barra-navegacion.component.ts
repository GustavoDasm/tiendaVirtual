import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { CarritoService } from '../../../services/carrito.service';
import { Carrito } from '../../../interfaces/carrito';


@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent implements OnInit{
  frase: string = "Donde la imaginación se convierte en código y cada línea construye un nuevo mundo"
  productosCarrito: Carrito[] = [];
  carritoService = inject(CarritoService)
  precioTotal: number = 0;
  cantidadTotal: number = 0;

  ngOnInit(): void {
  }

  constructor(){  
  }

  carritoVacio(): boolean{
    return this.carritoService.obtenerCantidadTotal() == 0
  }

  mostrarProductosCarrito(): void {
    this.productosCarrito = this.carritoService.obtenerCarrito();
    this.mostrarPrecioTotal()
    this.mostrarCantidadTotal()
  }

  mostrarPrecioTotal():void{
    this.precioTotal = this.carritoService.obtenerPrecioTotal();
  }

  mostrarCantidadTotal(): void{
    this.cantidadTotal = this.carritoService.obtenerCantidadTotal();
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
