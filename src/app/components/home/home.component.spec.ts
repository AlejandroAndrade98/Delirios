import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoriasComponent } from '../categorias/categorias.component';
import { CategoriasListComponent } from '../categorias-list/categorias-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importar el esquema CUSTOM_ELEMENTS_SCHEMA si se usa un Web Component

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent, 
        CategoriasComponent, 
        CategoriasListComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Añadir el esquema CUSTOM_ELEMENTS_SCHEMA si es necesario
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
