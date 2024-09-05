import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Carrito } from '../interfaces/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Carrito[] = [];

  agregarProducto(producto: Producto, cantidad: number = 1): void {
    let encontrado = false;

    this.carrito.forEach(i => {
      if (i.producto.productoID == producto.productoID) {
        i.cantidad += cantidad;
        encontrado = true;
      }
    });
    if (!encontrado) {
      this.carrito.push({ producto, cantidad });
    }
  }

  obtenerCarrito(): Carrito[] {
    return this.carrito
  }

  obtenerPrecioTotal(): number {
    let precioTotal = 0
    this.obtenerCarrito().forEach(item => {
      precioTotal += item.producto.precio * item.cantidad
    })
    return precioTotal
  }

  obtenerCantidadTotal(): number {
    let cantidadTotal = 0
    this.obtenerCarrito().forEach(item => {
      cantidadTotal += item.cantidad
    })
    return cantidadTotal
  }

  eliminarProducto(producto: Producto): void {
    this.carrito = this.carrito.filter(item => item.producto.productoID !== producto.productoID);

  }

  aumentarCantidadProducto(producto: Producto): void {
    this.obtenerCarrito().forEach(item => {
      if (item.producto.productoID === producto.productoID) {
        item.cantidad++
      }
    })
  }

  disminuirCantidadProducto(producto: Producto): void {
    this.obtenerCarrito().forEach(item => {
      if (item.producto.productoID === producto.productoID) {
        item.cantidad--
      }
      if (item.cantidad === 0) {
        this.carrito = this.carrito.filter(item => item.producto.productoID !== producto.productoID);
      }
    })
  }
}
