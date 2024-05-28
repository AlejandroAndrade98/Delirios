import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfertasService } from '../services/producto.service';
import { Ofertas } from '../models/Ofertas';
// import { Producto } from '../models/producto';
@Component({
  selector: 'app-ofertas-list',
  templateUrl: './ofertas-list.component.html',
  styleUrl: './ofertas-list.component.css'
})

    export class OfertasListComponent implements OnInit, OnDestroy {
        ofertas: Ofertas[] = [];
        ofertasSub: Subscription | undefined;
      
        constructor(private OfertasService: OfertasService) { }
      
        ngOnInit(): void {
          this.ofertasSub = this.OfertasService.getOfertas()
            .subscribe({
              next: (ofertas: Ofertas[]) => {
                this.ofertas = ofertas;
                console.log(this.ofertas);
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
        this.ofertasSub?.unsubscribe();
    }

}
