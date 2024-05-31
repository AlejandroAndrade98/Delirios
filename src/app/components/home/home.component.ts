import { Component, OnInit, Input } from '@angular/core'; // Corregir el import para 'Input'
import { CategoriasService } from '../../services/categorias.service';
import { Categorias } from '../../models/categorias';
import { Ofertas } from '../../models/Ofertas';
import { OfertasService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corregir el nombre de la propiedad a 'styleUrls'
})
export class HomeComponent implements OnInit {
  Categorias: Categorias[] = [];
  ofertas: Ofertas[] = []; // Asegurarse de que 'ofertas' es un array, no undefined

  constructor(
    private categoriasService: CategoriasService,
    private ofertasService: OfertasService // Corregir la inyección de dependencia con minúsculas
  ) {}

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe({
      next: (categorias: Categorias[]) => this.Categorias = categorias,
      error: (err: any) => console.error(err),
      complete: () => console.log('Categorias cargadas') // Corrección en el mensaje
    });

    this.ofertasService.getOfertas().subscribe({
      next: (ofertas: Ofertas[]) => this.ofertas = ofertas, // Usar la propiedad correcta 'ofertas'
      error: (err: any) => console.error(err),
      complete: () => console.log('Ofertas cargadas') // Corrección en el mensaje
    });
  }
}
