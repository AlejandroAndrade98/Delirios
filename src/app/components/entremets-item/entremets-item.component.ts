import { Component, Input, OnInit } from '@angular/core';
import { Entremets } from '../../models/entremets';

@Component({
  selector: 'app-entremets-item',
  templateUrl: './entremets-item.component.html',
  styleUrl: './entremets-item.component.css'
})
export class EntremetsItemComponent implements OnInit {
    
    @Input() entremets: Entremets | undefined;
    
    ngOnInit(): void {
        console.log(this.entremets)
    }

    
}
