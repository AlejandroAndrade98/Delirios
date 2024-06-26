import { Component, OnInit } from '@angular/core';
import { Entradas } from '../../models/entradas';
import { EntradasService } from '../../services/entradas.service';

@Component({
  selector: 'app-entradas-list',
  templateUrl: './entradas-list.component.html',
  styleUrl: './entradas-list.component.css'
})
export class EntradasListComponent implements OnInit {

    entradas: Entradas[] = [];

    constructor(private entradasService: EntradasService) { }

    ngOnInit(): void {
        this.entradasService.getEntradas()
        .subscribe ({
            next: ( especialidades: Entradas[] ) => {
                this.entradas = especialidades;
            }
        })
    }

}

