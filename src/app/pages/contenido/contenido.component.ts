import { Component, inject } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { RouterLink } from '@angular/router';
import { Producto } from '../../interfaces/producto';
import { MatDialog } from '@angular/material/dialog';
import { DetallesProductoComponent } from '../detalles-producto/detalles-producto.component';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [BarraLateralComponent, RouterLink],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

  public dialog = inject(MatDialog)

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Lenovo',
      descripcion: 'Gaming laptop gl702 华硕 intel core i7 asus, laptop, electrónica, netbook',
      precio: 2899,
      imagen: 'assets/GamingLaptop.png',
    },
    {
      id: 2,
      nombre: 'HP Omen',
      descripcion: 'HP Omen 15 Gaming Laptop, Intel i7, 16GB RAM, 1TB SSD',
      precio: 3299,
      imagen: 'assets/GamingLaptop.png', 
    },
    {
      id: 3,
      nombre: 'Dell G5',
      descripcion: 'Dell G5 Gaming Laptop, Intel i7, NVIDIA GTX 1660 Ti',
      precio: 2799,
      imagen: 'assets/GamingLaptop.png',
    },
    {
      id: 4,
      nombre: 'ASUS ROG',
      descripcion: 'ASUS ROG Zephyrus G14, AMD Ryzen 9, 32GB RAM',
      precio: 3599,
      imagen: 'assets/GamingLaptop.png',
    },
    {
      id: 5,
      nombre: 'Acer Predator',
      descripcion: 'Acer Predator Helios 300, Intel i7, RTX 3060',
      precio: 2999,
      imagen: 'assets/GamingLaptop.png',
    },
    {
      id: 6,
      nombre: 'Gato',
      descripcion: 'Gato volador , que vuela',
      precio: 999999,
      imagen: 'assets/GamingLaptop.png',
    },
  ];

  abrirModalDetallesProducto(producto: Producto){
    this.dialog.open(DetallesProductoComponent, {
      data: producto,
    });
    console.log(producto)
  }
}
