import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiServer } from '../components/apiServer';
import { Entradas } from '../models/entradas';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

    private EntradasUrl: string = apiServer.serverUrls.entradas;

    constructor(private http: HttpClient) { }
  
    getEntradas(): Observable<Entradas[]> {
      return this.http.get<Entradas[]>(this.EntradasUrl);
    }
  
}
