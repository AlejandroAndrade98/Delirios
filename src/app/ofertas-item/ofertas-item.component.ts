import { Component, Input, OnInit, input } from '@angular/core';
import { Ofertas } from '../models/Ofertas';

@Component({
  selector: 'app-ofertas-item',
  templateUrl: './ofertas-item.component.html',
  styleUrl: './ofertas-item.component.css'
})
export class OfertasItemComponent implements OnInit {

    @Input() ofertas: Ofertas | undefined;

    ngOnInit(): void {
        console.log(this.ofertas)
    }

}
