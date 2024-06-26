import { Component, Input, OnInit } from '@angular/core';
import { Entradas } from '../../models/entradas';

@Component({
  selector: 'app-entradas-item',
  templateUrl: './entradas-item.component.html',
  styleUrl: './entradas-item.component.css'
})
export class EntradasItemComponent implements OnInit {
    
    @Input() entradas: Entradas | undefined;
    
    ngOnInit(): void {
        console.log(this.entradas)
    }

    
}