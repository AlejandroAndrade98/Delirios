import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Producto } from '../models/producto';
import { apiServer } from '../components/apiServer';
import { Categorias } from '../models/categorias';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
   
    private CategoriasUrl: string = apiServer.serverUrls.categorias;

    constructor(private http: HttpClient) { }
  
    getCategorias(): Observable<Categorias[]> {
      return this.http.get<Categorias[]>(this.CategoriasUrl);
    }
  
  }
beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [CategoriasService],
    });
   
});