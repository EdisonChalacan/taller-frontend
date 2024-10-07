import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent {
  nombre: string = '';
  edad: number | null = null;
  raza: string = '';
  sexo: string = '';
  color: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  agregarMascota(): void {
    const nuevaMascota = {
      nombre: this.nombre,
      edad: this.edad,
      raza: this.raza,
      sexo: this.sexo,
      color: this.color
    };

    this.http.post('http://127.0.0.1:4000/adopcion/crear', nuevaMascota).subscribe(
      (response) => {
        console.log('Mascota agregada', response);
        this.router.navigate(['/mascotas']);
      },
      (error) => {
        console.error('Error al agregar la mascota', error);
      }
    );
  }
}
