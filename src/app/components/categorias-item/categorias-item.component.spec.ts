import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CategoriasItemComponent } from './categorias-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CategoriasItemComponent', () => {
  let component: CategoriasItemComponent;
  let fixture: ComponentFixture<CategoriasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasItemComponent ],
      imports: [ RouterTestingModule ] // Importar RouterTestingModule
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
