import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { OfertasItemComponent } from './ofertas-item/ofertas-item.component';
import { OfertasListComponent } from './ofertas-list/ofertas-list.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { CategoriasItemComponent } from './components/categorias-item/categorias-item.component';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { EspecialidadesItemComponent } from './components/especialidades-item/especialidades-item.component';
import { EspecialidadesListComponent } from './components/especialidades-list/especialidades-list.component';
import { EntremetsComponent } from './components/entremets/entremets.component';
import { EntremetsItemComponent } from './components/entremets-item/entremets-item.component';
import { EntremetsListComponent } from './components/entremets-list/entremets-list.component';
import { TortasComponent } from './components/tortas/tortas.component';
import { TortasItemComponent } from './components/tortas-item/tortas-item.component';
import { TortasListComponent } from './components/tortas-list/tortas-list.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { EntradasItemComponent } from './components/entradas-item/entradas-item.component';
import { EntradasListComponent } from './components/entradas-list/entradas-list.component';
// import { ProductoListComponent } from './components/producto-list/producto-list.component';
// import { ProductoItemComponent } from './components/producto-item/producto-item.component';
// import { ProductoComponent } from './components/producto/producto.component';

// servicios
import { CategoriasService } from './services/categorias.service';
import { EntradasService } from './services/entradas.service';
import { OfertasService } from './services/producto.service';
import { TortasService } from './services/tortas.service';
import { EspecialidadesService } from './services/especialidades.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    OfertasComponent,
    EventosComponent,
    OfertasItemComponent,
    OfertasListComponent,
    CategoriasComponent,
    CategoriasItemComponent,
    CategoriasListComponent,
    EspecialidadesComponent,
    EspecialidadesItemComponent,
    EspecialidadesListComponent,
    EntremetsComponent,
    EntremetsItemComponent,
    EntremetsListComponent,
    TortasComponent,
    TortasItemComponent,
    TortasListComponent,
    EntradasComponent,
    EntradasItemComponent,
    EntradasListComponent,
    // ProductoListComponent,
    // ProductoItemComponent,
    // ProductoComponent,
  ],
  

  imports: [
    BrowserModule,
    AppRoutingModule,
    [HttpClientModule],
    RouterModule.forRoot([])
  ],

  
  providers: [
    CategoriasService,
    EntradasService,
    OfertasService,
    TortasService,
    EspecialidadesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

