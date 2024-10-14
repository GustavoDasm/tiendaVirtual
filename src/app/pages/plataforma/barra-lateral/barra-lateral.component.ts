import { Component, inject } from '@angular/core';
import { ContenidoService } from '../contenido/contenido.service';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [],
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {
  service = inject(ContenidoService)
}
