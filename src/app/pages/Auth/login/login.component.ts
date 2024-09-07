import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  correoElectronico: string = "";
  contrasena: string = "";
  private correo: string = 'gustavo@gmail.com';
  private contraseña: string = 'xd';
  
  router = inject(Router)

  iniciarSesion(): void {
    if (this.correoElectronico === this.correo && this.contrasena === this.contraseña) {
      this.router.navigate(['/plataforma/contenido']);
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }
  }
}
