import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntremetsListComponent } from './entremets-list.component';

describe('EntremetsListComponent', () => {
  let component: EntremetsListComponent;
  let fixture: ComponentFixture<EntremetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntremetsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntremetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
