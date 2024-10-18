import { Injectable } from '@angular/core';
import { appSetting } from '../environments/appSettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiURL: string = appSetting.apiURL
  private apiCategoriasURL: string = this.apiURL + "Categorias"
  constructor(private http:HttpClient) { }
  
  listarCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.apiCategoriasURL}/GetAllCategorias`)
  }
}
