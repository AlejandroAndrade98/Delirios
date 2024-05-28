import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntremetsComponent } from './entremets.component';

describe('EntremetsComponent', () => {
  let component: EntremetsComponent;
  let fixture: ComponentFixture<EntremetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntremetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntremetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
