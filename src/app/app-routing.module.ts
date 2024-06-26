import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
// import { CategoriasComponent } from './components/categorias/categorias.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { EntremetsComponent } from './components/entremets/entremets.component';
import { TortasComponent } from './components/tortas/tortas.component';
import { EntradasComponent } from './components/entradas/entradas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'home/especialidades', component: EspecialidadesComponent },
  { path: 'home/entremets', component: EntremetsComponent },
  { path: 'home/tortas', component: TortasComponent },
  { path: 'home/entradas', component: EntradasComponent },
  { path: 'home/especialidades/producto/:id', component: ProductoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
