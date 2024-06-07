import { Component, OnInit } from '@angular/core';
import { Especialidades } from '../../models/especialidades';
import { EspecialidadesService } from '../../services/especialidades.service';

@Component({
  selector: 'app-especialidades-list',
  templateUrl: './especialidades-list.component.html',
  styleUrl: './especialidades-list.component.css'
})
export class EspecialidadesListComponent implements OnInit {

    especialidades: Especialidades[] = [];

    constructor(private especialidadesService: EspecialidadesService ) { }

    ngOnInit(): void {
        this.especialidadesService.getEspecialidades()
        .subscribe ({
            next: ( especialidades: Especialidades[] ) => {
                this.especialidades = especialidades;
            }
        })
    }

}
