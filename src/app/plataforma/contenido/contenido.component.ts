import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [BarraLateralComponent, RouterLink],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

}
