import { Component, inject } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { RouterLink, Router } from '@angular/router';
import { Producto } from '../../interfaces/producto';
import { MatDialog } from '@angular/material/dialog';
import { DetallesProductoModalComponent } from '../detalles-producto-modal/detalles-producto-modal.component';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [BarraLateralComponent, RouterLink, BarraNavegacionComponent],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

  public dialog = inject(MatDialog)
  carrito = inject(CarritoService)

  productos: Producto[] = [
    {
      id: 1,
      codigo: 'LNV-2024-001',
      nombre: 'Lenovo',
      descripcion: 'Gaming laptop gl702 华硕 intel core i7 asus',
      precio: 2899,
      precioPromocion: 2699,
      imagen: 'assets/GamingLaptop.png',
    },
    {
      id: 2,
      codigo: 'HPO-2024-002',
      nombre: 'HP Omen',
      descripcion: 'HP Omen 15, Intel i7, 16GB RAM, 1TB SSD',
      precio: 3299,
      precioPromocion: 3099,
      imagen: 'assets/HPOmen15.jpg',
    },
    {
      id: 3,
      codigo: 'DLL-2024-003',
      nombre: 'Dell G5',
      descripcion: 'Dell G5, Intel i7, NVIDIA GTX 1660 Ti',
      precio: 2799,
      precioPromocion: 2599,
      imagen: 'assets/DellG5.jpg',
    },
    {
      id: 4,
      codigo: 'ASU-2024-004',
      nombre: 'ASUS ROG',
      descripcion: 'ASUS ROG Zephyrus G14, AMD Ryzen 9, 32GB RAM',
      precio: 3599,
      precioPromocion: 3299,
      imagen: 'assets/ASUSROG.jpg',
    },
    {
      id: 5,
      codigo: 'ACR-2024-005',
      nombre: 'Acer Predator',
      descripcion: 'Acer Predator Helios 300, Intel i7, RTX 3060',
      precio: 2999,
      precioPromocion: 2799,
      imagen: 'assets/AcerPredator.jpg',
    },
    {
      id: 6,
      codigo: 'HPV-2024-006',
      nombre: 'HP Pavilion',
      descripcion: 'HP Pavilion x360, Intel Core i5, 8GB RAM, 256GB SSD',
      precio: 999,
      precioPromocion: 899,
      imagen: 'assets/HP-Pavilion.jpg'
    },
    {
      id: 7,
      codigo: 'LTP-2024-007',
      nombre: 'Lenovo ThinkPad',
      descripcion: 'Lenovo ThinkPad X1 Carbon, Intel i7, 16GB RAM, 512GB SSD',
      precio: 1399,
      precioPromocion: 1299,
      imagen: 'assets/Lenovo_ThinkPad.jpg'
    },
    {
      id: 8,
      codigo: 'MSI-2024-008',
      nombre: 'MSI GE76 Raider',
      descripcion: 'MSI GE76 Raider, Intel i9, NVIDIA RTX 3080, 32GB RAM',
      precio: 3999,
      precioPromocion: 3799,
      imagen: 'assets/MSI_GE76_Raider.jpg'
    },
    {
      id: 9,
      codigo: 'RAZ-2024-009',
      nombre: 'Razer Blade 15',
      descripcion: 'Razer Blade 15, Intel i7, NVIDIA RTX 3070, 16GB RAM',
      precio: 3299,
      precioPromocion: 3099,
      imagen: 'assets/Razer_Blade_15.jpg'
    },
    {
      id: 10,
      codigo: 'APP-2024-010',
      nombre: 'Apple MacBook Pro',
      descripcion: 'Apple MacBook Pro 16-inch, M1 Pro, 32GB RAM, 1TB SSD',
      precio: 2499,
      precioPromocion: 2399,
      imagen: 'assets/Apple_MacBook_Pro.png'
    }
];


  abrirModalDetallesProducto(producto: Producto) {
    this.dialog.open(DetallesProductoModalComponent, {
      data: producto,
    });
    console.log(producto)
  }

  agregarAlCarrito(producto: Producto): void{
    this.carrito.agregarProducto(producto)
    alert("Producto "+ producto.nombre + " agregado")
  }
}
