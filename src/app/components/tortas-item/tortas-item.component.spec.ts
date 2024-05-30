import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortasItemComponent } from './tortas-item.component';

describe('TortasItemComponent', () => {
  let component: TortasItemComponent;
  let fixture: ComponentFixture<TortasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TortasItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TortasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
