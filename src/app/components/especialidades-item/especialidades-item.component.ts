import { Component, OnInit, Input } from '@angular/core';
import { Especialidades } from '../../models/especialidades';

@Component({
  selector: 'app-especialidades-item',
  templateUrl: './especialidades-item.component.html',
  styleUrl: './especialidades-item.component.css'
})
export class EspecialidadesItemComponent implements OnInit {
    
    @Input() especialidades: Especialidades | undefined;
    
    ngOnInit(): void {
        console.log(this.especialidades)
    }

    
}
