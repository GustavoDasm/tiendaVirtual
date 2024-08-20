import { Component } from '@angular/core';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-plataforma',
  standalone: true,
  imports: [BarraNavegacionComponent, RouterOutlet],
  templateUrl: './plataforma.component.html',
  styleUrl: './plataforma.component.css'
})
export class PlataformaComponent {
  
}
