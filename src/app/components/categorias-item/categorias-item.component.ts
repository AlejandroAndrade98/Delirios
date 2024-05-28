import { Component, Input, OnInit } from '@angular/core';
import { Categorias } from '../../models/categorias';
import { Especialidades } from '../../models/especialidades';
import { Entremets } from '../../models/entremets';



@Component({
  selector: 'app-categorias-item',
  templateUrl: './categorias-item.component.html',
  styleUrl: './categorias-item.component.css'
})
export class CategoriasItemComponent implements OnInit {


    @Input() categorias: Categorias | undefined;
    @Input() especialidades: Especialidades | undefined;
    @Input() entremets: Entremets | undefined;
    @Input() categoria: any;

    constructor() { }


    ngOnInit(): void {
        console.log(this.categorias)
    }
}


