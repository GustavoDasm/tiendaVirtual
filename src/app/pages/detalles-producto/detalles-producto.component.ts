import { Component, Inject } from '@angular/core';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component';
import { Producto } from '../../interfaces/producto';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [BarraNavegacionComponent],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent {
  producto: Producto = {} as Producto;

  constructor(
    public dialogRef: MatDialogRef<DetallesProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto) {
    this.producto = data
  }
  cerrar() {
    this.dialogRef.close();
  }
}
