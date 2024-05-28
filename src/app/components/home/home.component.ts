import { Component, OnInit } from '@angular/core';
// import { Producto } from '../../models/producto';
import { CategoriasService } from '../../services/categorias.service';
import { Categorias } from '../../models/categorias';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    Categorias: Categorias[] = [];
  
    constructor(private categoriasService: CategoriasService) { }
  
    ngOnInit(): void {
      this.categoriasService.getCategorias().subscribe({
        next: (categorias: Categorias[]) => this.Categorias = categorias,
        error: (err: any) => console.error(err),
        complete: () => console.log('Categorias cargados')
      });
    }
  }
