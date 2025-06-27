import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlataformaComponent } from './pages/plataforma/plataforma.component';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, PlataformaComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda-virtual';
}
