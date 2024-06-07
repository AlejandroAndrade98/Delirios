import { Component, OnInit } from '@angular/core';
import { Especialidades } from '../../models/especialidades';
import { Entremets } from '../../models/entremets';
import { Tortas } from '../../models/tortas';
import { Entradas } from '../../models/entradas';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

    Especialidades: Especialidades[] = [];
    Entremets: Entremets[] = [];
    Tortas: Tortas[] = [];
    Entradas: Entradas[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
