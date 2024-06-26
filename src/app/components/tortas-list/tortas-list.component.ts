import { Component, OnInit } from '@angular/core';
import { Tortas } from '../../models/tortas';
import { TortasService } from '../../services/tortas.service';

@Component({
  selector: 'app-tortas-list',
  templateUrl: './tortas-list.component.html',
  styleUrl: './tortas-list.component.css'
})
export class TortasListComponent implements OnInit {

    tortas: Tortas[] = [];

    constructor(private TortasService: TortasService ) { }

    ngOnInit(): void {
        this.TortasService.getTortas()
        .subscribe ({
            next: ( tortas: Tortas[] ) => {
                this.tortas = tortas;
            }
        })
    }

}{

}
