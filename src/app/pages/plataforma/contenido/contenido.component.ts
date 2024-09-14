import { Component, inject } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { MatDialog } from '@angular/material/dialog';
import { CarritoService } from '../../../services/carrito.service';
import { DetallesProductoModalComponent } from '../detalles-producto-modal/detalles-producto-modal.component';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { ProductoService } from '../../../services/producto.service';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [BarraLateralComponent, RouterLink],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})

export class ContenidoComponent {

  public dialog = inject(MatDialog)
  carritoService = inject(CarritoService)
  productosService = inject(ProductoService)
  listaProductos: Producto[] = [];

  /* productos: Producto[] = [
    {
      productoID: 1,
      codigo: 'LNV-2024-001',
      nombreProducto: 'Lenovo',
      descripcion: 'Gaming laptop gl702 华硕 intel core i7 asus',
      precio: 2899,
      precioPromocion: 2699,
      stock: 25,
      categoriaID: 2,
      urlImagen: this.linkImgProductos+'GamingLaptop.png',
    },
    {
      productoID: 2,
      codigo: 'HPO-2024-002',
      nombreProducto: 'HP Omen',
      descripcion: 'HP Omen 15, Intel i7, 16GB RAM, 1TB SSD',
      precio: 3299,
      precioPromocion: 3099,
      stock: 18,
      categoriaID: 2,
      urlImagen: this.linkImgProductos+'HPOmen15.jpg',
    },
    {
      productoID: 3,
      codigo: 'DLL-2024-003',
      nombreProducto: 'Dell G5',
      descripcion: 'Dell G5, Intel i7, NVIDIA GTX 1660 Ti',
      precio: 2799,
      precioPromocion: 2599,
      stock: 22,
      categoriaID: 2,
      urlImagen: this.linkImgProductos+'DellG5.jpg',
    },
    {
      productoID: 4,
      codigo: 'ASU-2024-004',
      nombreProducto: 'ASUS ROG',
      descripcion: 'ASUS ROG Zephyrus G14, AMD Ryzen 9, 32GB RAM',
      precio: 3599,
      precioPromocion: 3299,
      stock: 30,
      categoriaID: 2,
      urlImagen: this.linkImgProductos+'ASUSROG.jpg',
    },
    {
      productoID: 5,
      codigo: 'ACR-2024-005',
      nombreProducto: 'Acer Predator',
      descripcion: 'Acer Predator Helios 300, Intel i7, RTX 3060',
      precio: 2999,
      precioPromocion: 2799,
      stock: 27,
      categoriaID: 2,
      urlImagen: this.linkImgProductos+'AcerPredator.jpg',
    },
    {
      productoID: 6,
      codigo: 'HPV-2024-006',
      nombreProducto: 'HP Pavilion',
      descripcion: 'HP Pavilion x360, Intel Core i5, 8GB RAM, 256GB SSD',
      precio: 999,
      precioPromocion: 899,
      stock: 35,
      categoriaID: 2,
      urlImagen: this.linkImgProductos+'HP-Pavilion.jpg',
    },
    {
      productoID: 7,
      codigo: 'LTP-2024-007',
      nombreProducto: 'Lenovo ThinkPad',
      descripcion: 'Lenovo ThinkPad X1 Carbon, Intel i7, 16GB RAM, 512GB SSD',
      precio: 1399,
      precioPromocion: 1299,
      stock: 40,
      categoriaID: 2,
      urlImagen: this.linkImgProductos+'Lenovo_ThinkPad.jpg',
    },
    {
      productoID: 8,
      codigo: 'MSI-2024-008',
      nombreProducto: 'MSI GE76 Raider',
      descripcion: 'MSI GE76 Raider, Intel i9, NVIDIA RTX 3080, 32GB RAM',
      precio: 3999,
      precioPromocion: 3799,
      stock: 45,
      categoriaID: 2,
      urlImagen: this.linkImgProductos+'MSI_GE76_Raider.jpg',
    },
    {
      productoID: 9,
      codigo: 'RAZ-2024-009',
      nombreProducto: 'Razer Blade 15',
      descripcion: 'Razer Blade 15, Intel i7, NVIDIA RTX 3070, 16GB RAM',
      precio: 3299,
      precioPromocion: 3099,
      stock: 20,
      categoriaID: 2,
      urlImagen: this.linkImgProductos+'Razer_Blade_15.jpg',
    },
    {
      productoID: 10,
      codigo: 'APP-2024-010',
      nombreProducto: 'Apple MacBook Pro',
      descripcion: 'Apple MacBook Pro 16-inch, M1 Pro, 32GB RAM, 1TB SSD',
      precio: 2499,
      precioPromocion: 2399,
      stock: 12,
      categoriaID: 2,
      urlImagen: this.linkImgProductos+'Apple_MacBook_Pro.png',
    }
  ]; */
  
  constructor(){
    this.obtenerProductos();
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

  abrirModalDetallesProducto(producto: Producto) {
    this.dialog.open(DetallesProductoModalComponent, {
      data: producto,
    });
    console.log(producto)
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarProducto(producto);
    alert("Producto " + producto.nombre + " agregado al carrito");
  }
}
