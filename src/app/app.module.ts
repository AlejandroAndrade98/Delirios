import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { EventosComponent } from './components/eventos/eventos.component';
import { OfertasItemComponent } from './ofertas-item/ofertas-item.component';
import { OfertasListComponent } from './ofertas-list/ofertas-list.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { RouterModule } from '@angular/router';
import { CategoriasItemComponent } from './components/categorias-item/categorias-item.component';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { EspecialidadesItemComponent } from './components/especialidades-item/especialidades-item.component';
import { EspecialidadesListComponent } from './components/especialidades-list/especialidades-list.component';
import { EntremetsComponent } from './components/entremets/entremets.component';
import { EntremetsItemComponent } from './components/entremets-item/entremets-item.component';
import { EntremetsListComponent } from './components/entremets-list/entremets-list.component';
// import { ProductoListComponent } from './components/producto-list/producto-list.component';
// import { ProductoItemComponent } from './components/producto-item/producto-item.component';
// import { ProductoComponent } from './components/producto/producto.component';

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
    CategoriasComponent,
    EspecialidadesComponent,
    EspecialidadesItemComponent,
    EspecialidadesListComponent,
    EntremetsComponent,
    EntremetsItemComponent,
    EntremetsListComponent,
    // ProductoListComponent,
    // ProductoItemComponent,
    // ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
