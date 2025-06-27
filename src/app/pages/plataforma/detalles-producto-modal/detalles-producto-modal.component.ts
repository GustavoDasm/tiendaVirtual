import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component';
import { Producto } from '../../../interfaces/producto';


@Component({
    selector: 'app-detalles-producto',
    imports: [BarraNavegacionComponent],
    templateUrl: './detalles-producto-modal.component.html',
    styleUrl: './detalles-producto-modal.component.css'
})
export class DetallesProductoModalComponent {
  producto: Producto = {} as Producto;

  constructor(
    public dialogRef: MatDialogRef<DetallesProductoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto) {
    this.producto = data
  }
  cerrar() {
    this.dialogRef.close();
  }
}
