import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from '../../models/producto'; // Asegúrate de que esta ruta sea correcta
import { ProductoService } from '../../services/producto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit, OnDestroy {
  productos: Producto[] = [];
  productoSub: Subscription | undefined;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoSub = this.productoService.getProducto()
      .subscribe({
        next: (productos: Producto[]) => {
          this.productos = productos;
          console.log(this.productos);
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
    this.productoSub?.unsubscribe();
  }
}

