import { Component, inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CarritoService } from '../../../services/carrito.service';
import { FormsModule } from '@angular/forms';
import { Invitado } from '../../../interfaces/invitado';
import { ContenidoComponent } from '../contenido/contenido.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-compra-invitado',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ContenidoComponent, RouterLink],
  templateUrl: './compra-invitado.component.html',
  styleUrl: './compra-invitado.component.css'
})
export class CompraInvitadoComponent {
  formulario: boolean = false;
  carritoService = inject(CarritoService);
  invitado: Invitado = {} as Invitado;

  verificarForm(): void{
    console.log(this.invitado)
    this.formulario = true
  }
}
