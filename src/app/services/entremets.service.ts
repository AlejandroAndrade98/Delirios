import { Injectable } from '@angular/core';
import { Entremets } from '../models/entremets';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiServer } from '../components/apiServer';

@Injectable({
  providedIn: 'root'
})
export class EntremetsService {

    private EntremetsUrl: string = apiServer.serverUrls.entremets;

    constructor(private http: HttpClient) { }
  
    getEntremets(): Observable<Entremets[]> {
      return this.http.get<Entremets[]>(this.EntremetsUrl);
    }
  
}
