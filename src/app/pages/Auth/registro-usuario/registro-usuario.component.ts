import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Usuario } from '../../../interfaces/usuario';

@Component({
    selector: 'app-registro-usuario',
    imports: [RouterLink, FormsModule],
    templateUrl: './registro-usuario.component.html',
    styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
  usuario: Usuario = {} as Usuario;
  /* private correo: string = 'gustavo@gmail.com';
  private contraseña: string = 'xd'; */
}
