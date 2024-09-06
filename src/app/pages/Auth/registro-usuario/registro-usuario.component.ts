import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
  nombreUsuario: string = "";
  password: string = "";
  correoElectronico: string = "";
  nombres: string = "";
  apellidos: string = "";
  telefono: string = "";
  /* private correo: string = 'gustavo@gmail.com';
  private contraseña: string = 'xd'; */
  
  router = inject(Router)
}
