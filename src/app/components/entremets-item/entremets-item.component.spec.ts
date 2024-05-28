import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntremetsItemComponent } from './entremets-item.component';

describe('EntremetsItemComponent', () => {
  let component: EntremetsItemComponent;
  let fixture: ComponentFixture<EntremetsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntremetsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntremetsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
