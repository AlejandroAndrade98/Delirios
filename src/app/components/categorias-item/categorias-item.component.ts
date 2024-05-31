import { Component, Input, OnInit } from '@angular/core';
import { Categorias } from '../../models/categorias';
import { Especialidades } from '../../models/especialidades';
import { Entremets } from '../../models/entremets';
import { Tortas } from '../../models/tortas';
import { Entradas } from '../../models/entradas';




@Component({
    selector: 'app-categorias-item',
    templateUrl: './categorias-item.component.html',
    styleUrl: './categorias-item.component.css' 
})
export class CategoriasItemComponent implements OnInit {


    @Input() categorias: Categorias | undefined;
    @Input() especialidades: Especialidades | undefined;
    @Input() entremets: Entremets | undefined;
    @Input() tortas: Tortas | undefined;
    @Input() entradas: Entradas | undefined;
    @Input() categoria: any;

    constructor() { }


    ngOnInit(): void {
        console.log(this.categorias);
        // Add your additional logic here
        console.log(this.especialidades);
        console.log(this.entremets);
                console.log(this.tortas);
                console.log(this.entradas);
                console.log(this.categoria);
            } // Add the closing curly brace here
        
}