import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appSetting } from '../environments/appSettings';
import { Producto } from '../interfaces/producto';
import { ResponseAPI } from '../interfaces/responseAPI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiURL: string = appSetting.apiURL + "Productos"
  
  constructor(private http:HttpClient) { }

  //Signal --------- Observable
  listarProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiURL}/GetAllProductos`);
  }

  obtenerProductoID(id: number){
    return this.http.get<Producto>(`${this.apiURL}/GetProductosID/${id}`);
  }

  obtenerProductoNombre(nombre: string){
    return this.http.get<Producto>(`${this.apiURL}/GetProductosNombre/${nombre}`);
  }

  crearProducto(producto: Producto){
    return this.http.post<ResponseAPI>(`${this.apiURL}/PostProducto`,producto);
  }

  actualizarProducto(producto: Producto){
    return this.http.put<ResponseAPI>(`${this.apiURL}/PutProducto`,producto);
  }

  eliminarProducto(id: number){
    return this.http.delete<ResponseAPI>(`${this.apiURL}/DeleteProducto/${id}`);
  }
}
