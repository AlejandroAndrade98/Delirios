import { Component, OnDestroy, OnInit } from '@angular/core';
import { Categorias } from '../../models/categorias';
import { CategoriasService } from '../../services/categorias.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrl: './categorias-list.component.css'
})
export class CategoriasListComponent implements OnInit, OnDestroy {
    categorias: Categorias[] = [];
    categoriasSub: Subscription | undefined;

    constructor(private CategoriasService: CategoriasService) {}

    ngOnInit(): void {
        this.categoriasSub = this.CategoriasService.getCategorias()
        .subscribe({
          next: (Categorias: Categorias[]) => {
            this.categorias = Categorias;
            console.log(this.categorias);
          },
          error: (err: any) => {
            console.error(err);
          },
          complete: () => {
            console.log('completado');
          }
        });
    }


    ngOnDestroy(): void {
        this.categoriasSub?.unsubscribe();
    }

}
