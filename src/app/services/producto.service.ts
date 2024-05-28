import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiServer } from '../components/apiServer';
import { Ofertas } from '../models/Ofertas';
// import { Categorias } from '../models/categorias';
// import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  private ofertasUrl: string = apiServer.serverUrls.ofertas;


  constructor(private http: HttpClient) { }



  getOfertas(): Observable<Ofertas[]> {
    return this.http.get<Ofertas[]>(this.ofertasUrl);
  }
}

// export class CategoriasService {
   
//       private CategoriasUrl: string = apiServer.serverUrls.categorias;

//       constructor(private http: HttpClient) { }
    
//       getCategorias(): Observable<Categorias[]> {
//         return this.http.get<Categorias[]>(this.CategoriasUrl);
//       }
    
//     }

    // export class CategoriasService {
        //   private productosUrl: string = apiServer.serverUrls.producto;
      
        
        //   getProductos(): Observable<Producto[]> {
        //     return this.http.get<Producto[]>(this.productosUrl);
        //   }
        
        //   getProductos(): Observable<Producto[]> {
        //     return this.http.get<Productos[]>(this.ProductosUrl);
        //   }
        
        // }

    

