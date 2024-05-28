import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasItemComponent } from './categorias-item.component';

describe('CategoriasItemComponent', () => {
  let component: CategoriasItemComponent;
  let fixture: ComponentFixture<CategoriasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
