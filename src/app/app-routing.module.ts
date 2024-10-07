import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

const routes: Routes = [
  { path: 'mascotas', component: ListaMascotasComponent },
  { path: 'agregar-mascotas', component: AgregarMascotaComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: '', redirectTo: '/mascotas', pathMatch: 'full' }, // Ruta predeterminada
  { path: '**', redirectTo: '/mascotas', pathMatch: 'full' }, // Ruta para no encontrados
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
