import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Asegúrate de que este import esté presente
import { AppComponent } from './app.component';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    AgregarMascotaComponent,
    SolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  // Agrega este módulo
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
