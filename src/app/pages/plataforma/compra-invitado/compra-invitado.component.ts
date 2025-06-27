import { Component, inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CarritoService } from '../../../services/carrito.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../interfaces/usuario';
import { ContenidoComponent } from '../contenido/contenido.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-compra-invitado',
    imports: [MatFormFieldModule, MatInputModule, FormsModule, ContenidoComponent, RouterLink],
    templateUrl: './compra-invitado.component.html',
    styleUrl: './compra-invitado.component.css'
})
export class CompraInvitadoComponent {
  formulario: boolean = false;
  carritoService = inject(CarritoService);
  usuario: Usuario = {} as Usuario;

  verificarForm(): void{
    console.log(this.usuario)
    this.formulario = true
  }

  notaPedido(): void{
    console.log(`Id usuario: ${this.usuario.nombreUsuario}\nTotal: ${this.carritoService.obtenerCantidadTotal()}\n`)
    for(let i = 0; i < this.carritoService.carrito.length; i++){
      console.log(`Nombre: ${this.carritoService.carrito[i].producto.nombre}\nCantidad: hacer en casa v:`)
    }
  }
}
