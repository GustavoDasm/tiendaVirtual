import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccesoService } from '../../../services/acceso.service';
import { Login } from '../../../interfaces/login';

@Component({
    selector: 'app-login',
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  private accesoService = inject(AccesoService)
  private router = inject(Router)
  public formBuild = inject(FormBuilder);

  public formLogin: FormGroup = this.formBuild.group({
    correo: ['', Validators.required],
    clave: ['', Validators.required]
  })

  iniciarSesion(){
    if(this.formLogin.invalid) return;

    const objeto: Login = {
      correo: this.formLogin.value.correo,
      clave: this.formLogin.value.clave,
    }

    this.accesoService.loginUsuario(objeto).subscribe({
      next:(data) => {
        if(data.isSuccess){
          localStorage.setItem("token", data.token)
          this.router.navigate(['plataforma/contenido'])
        } else{
          alert("Las credenciales son incorrectas")
        }
      },
      error:(err) => {
        console.log(err.message);
      }
    })
  }
}
