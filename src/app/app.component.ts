import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlataformaComponent } from './plataforma/plataforma.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlataformaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda-virtual';
}
