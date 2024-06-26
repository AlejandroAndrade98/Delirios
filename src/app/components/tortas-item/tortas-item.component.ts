import { Component, Input, OnInit } from '@angular/core';
import { Tortas } from '../../models/tortas';

@Component({
  selector: 'app-tortas-item',
  templateUrl: './tortas-item.component.html',
  styleUrl: './tortas-item.component.css'
})
export class TortasItemComponent implements OnInit {
    
    @Input() tortas: Tortas | undefined;
    
    ngOnInit(): void {
        console.log(this.tortas)
    }

    
}