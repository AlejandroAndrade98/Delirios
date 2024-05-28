import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Producto } from '../models/producto';
import { apiServer } from '../components/apiServer';
import { Categorias } from '../models/categorias';

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
