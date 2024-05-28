import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiServer } from '../components/apiServer';
import { Especialidades } from '../models/especialidades';


@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

    private EspecialidadesUrl: string = apiServer.serverUrls.especialidades;

    constructor(private http: HttpClient) { }
  
    getEspecialidades(): Observable<Especialidades[]> {
      return this.http.get<Especialidades[]>(this.EspecialidadesUrl);
    }
  
}
