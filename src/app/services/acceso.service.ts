import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appSetting } from '../environments/appSettings';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { ResponseAcceso } from '../interfaces/responseAcceso';
import { Login } from '../interfaces/login';
import { ResponseAPI } from '../interfaces/responseAPI';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  private apiURL: string = appSetting.apiURL
  private apiAccesoURL: string = this.apiURL + "Acceso"  
  
  constructor(private http:HttpClient) { }

  loginUsuario(login: Login): Observable<ResponseAcceso>{
    return this.http.post<ResponseAcceso>(`${this.apiAccesoURL}/Login`, login)
  }

  registrarUsuario(usuario: Usuario): Observable<ResponseAPI>{
    return this.http.post<ResponseAPI>(`${this.apiAccesoURL}/Registrarse`, usuario)
  }
}
