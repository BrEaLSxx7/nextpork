import { AdminComponent } from './admin/admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { GranjaComponent } from './granja/granja.component';
import { RequeridosComponent } from './requeridos/requeridos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'granja', component: GranjaComponent },
  { path: 'requeridos', component: RequeridosComponent },
  { path: 'solicitar', component: SolicitarComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
