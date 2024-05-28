import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiServer } from '../components/apiServer';
import { Ofertas } from '../models/Ofertas';

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