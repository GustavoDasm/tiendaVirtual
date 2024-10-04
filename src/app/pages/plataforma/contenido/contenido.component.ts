import { Component, effect, inject } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { MatDialog } from '@angular/material/dialog';
import { CarritoService } from '../../../services/carrito.service';
import { DetallesProductoModalComponent } from '../detalles-producto-modal/detalles-producto-modal.component';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { ProductoService } from '../../../services/producto.service';
import { RouterLink } from '@angular/router';
import { BarraNavService } from '../barra-navegacion/barra-nav.service';
import { ContenidoService } from './contenido.service';




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
  contenidoService = inject(ContenidoService)

  
  constructor(){
    
  }

  ngOnInit() {
    this.contenidoService.obtenerProductos(); // Llamada inicial para obtener todos los productos
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
