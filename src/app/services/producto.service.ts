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

  private apiURL: string = appSetting.apiURL
  private apiProductosURL: string = this.apiURL + "Productos"
  constructor(private http:HttpClient) { }

  //Signal --------- Observable
  //Service en cada componente...
/*   Observable permite manejar operaciones asincronas
Signal

.pipe para los errores
.subscribe para subscribir los datos de los observables */


  listarProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiProductosURL}/GetAllProductos`);
  }

  obtenerProductoID(id: number): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiProductosURL}/GetProductosID/${id}`);
  }

  //poner pipe para errores
  obtenerProductoNombre(nombre: string):Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiProductosURL}/GetProductosNombre/${nombre}`);
  }

  obtenerProductoPorOrdenPrecio(orden: string): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiProductosURL}/GetProductForPriceAscDesc?orden=${orden}`)
  } 

  crearProducto(producto: Producto){
    return this.http.post<ResponseAPI>(`${this.apiProductosURL}/PostProducto`,producto);
  }

  actualizarProducto(producto: Producto){
    return this.http.put<ResponseAPI>(`${this.apiProductosURL}/PutProducto`,producto);
  }

  eliminarProducto(id: number){
    return this.http.delete<ResponseAPI>(`${this.apiProductosURL}/DeleteProducto/${id}`);
  }
}
