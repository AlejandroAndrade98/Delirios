import { Component, OnInit } from '@angular/core';
import { Entremets } from '../../models/entremets';
import { EntremetsService } from '../../services/entremets.service';

@Component({
  selector: 'app-entremets-list',
  templateUrl: './entremets-list.component.html',
  styleUrl: './entremets-list.component.css'
})
export class EntremetsListComponent implements OnInit {

    entremets: Entremets[] = [];

    constructor(private entremetsService: EntremetsService) { }

    ngOnInit(): void {
        this.entremetsService.getEntremets()
        .subscribe ({
            next: ( especialidades: Entremets[] ) => {
                this.entremets = especialidades;
            }
        })
    }

}
