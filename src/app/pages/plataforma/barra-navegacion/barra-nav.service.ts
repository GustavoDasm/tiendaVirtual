import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BarraNavService {
  nombre = signal<string>('');
  constructor() { 
    
  }
  setNombre(nuevoNombre: string) {
    this.nombre.set(nuevoNombre); // Actualiza el valor del signal
  }
}
