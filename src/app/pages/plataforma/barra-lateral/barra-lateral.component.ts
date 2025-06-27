import { Component, inject } from '@angular/core';
import { ContenidoService } from '../contenido/contenido.service';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from '../../../interfaces/producto';

@Component({
    selector: 'app-barra-lateral',
    imports: [],
    templateUrl: './barra-lateral.component.html',
    styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {
  listaCategorias: Categoria[] = [];
  service = inject(ContenidoService)
  categoriaService = inject(CategoriaService)


  ngOnInit() {
    this.obtenerCategorias()
  }

  obtenerCategorias(){
    this.categoriaService.listarCategorias().subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.listaCategorias = data;
          console.log(this.listaCategorias)
        }
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }
}
