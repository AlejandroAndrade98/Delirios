import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiServer } from '../components/apiServer';
import { Tortas } from '../models/tortas';


@Injectable({
  providedIn: 'root'
})
export class TortasService {

    private TortasUrl: string = apiServer.serverUrls.tortas;

    constructor(private http: HttpClient) { }
  
    getEspecialidades(): Observable<Tortas[]> {
      return this.http.get<Tortas[]>(this.TortasUrl);
    }
  
}
