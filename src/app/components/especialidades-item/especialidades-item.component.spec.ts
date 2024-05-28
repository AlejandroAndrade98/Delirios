import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesItemComponent } from './especialidades-item.component';

describe('EspecialidadesItemComponent', () => {
  let component: EspecialidadesItemComponent;
  let fixture: ComponentFixture<EspecialidadesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EspecialidadesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecialidadesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
