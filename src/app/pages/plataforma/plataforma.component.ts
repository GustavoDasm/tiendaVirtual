import { Component } from '@angular/core';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component';
import { ContenidoComponent } from '../contenido/contenido.component';


@Component({
  selector: 'app-plataforma',
  standalone: true,
  imports: [BarraNavegacionComponent, ContenidoComponent],
  templateUrl: './plataforma.component.html',
  styleUrl: './plataforma.component.css'
})
export class PlataformaComponent {
  
}
