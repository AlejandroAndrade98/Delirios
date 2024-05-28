import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasItemComponent } from './ofertas-item.component';

describe('OfertasItemComponent', () => {
  let component: OfertasItemComponent;
  let fixture: ComponentFixture<OfertasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfertasItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfertasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
