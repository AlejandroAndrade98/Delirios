import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit, OnDestroy {

    slug: string | undefined;
    producto: Producto | undefined;
    productoSub: Subscription | undefined;

    galeria: Array<any> = [];
    renderGaleria: Boolean = true; 
    currentImg: string | undefined;

    constructor(private route: ActivatedRoute, private ProductoService: ProductoService) {}

   ngOnInit(): void {
       this.slug = this.route.snapshot.params['id']
       this.productoSub = this.ProductoService.getProducto()
        .subscribe( {
            next: ( productos: Producto[]) => {
                this.producto = productos.filter( p => p.slug === this.slug )[0]
                this.currentImg = this.producto.imageUrl[0]
            },
            error: (err: any) => {
                console.error('Error', err)
            }
            })
   } 

   ngOnDestroy(): void {
       this.productoSub?.unsubscribe();
   }

    }


