import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasItemComponent } from './entradas-item.component';

describe('EntradasItemComponent', () => {
  let component: EntradasItemComponent;
  let fixture: ComponentFixture<EntradasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradasItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
