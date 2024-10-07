import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {
  solicitudes: any[] = [];
  nombreSolicitante: string = '';
  direccion: string = '';
  telefono: string = '';
  mascotaId: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarSolicitudes();
  }

  cargarSolicitudes(): void {
    this.http.get<any[]>('http://127.0.0.1:4000/solicitud/buscar').subscribe(
      (data) => {
        this.solicitudes = data;
      },
      (error) => {
        console.error('Error al cargar las solicitudes', error);
      }
    );
  }

  crearSolicitud(): void {
    const nuevaSolicitud = {
      nombreSolicitante: this.nombreSolicitante,
      direccion: this.direccion,
      telefono: this.telefono,
      mascotaId: this.mascotaId
    };

    this.http.post('http://127.0.0.1:4000/solicitud/crear', nuevaSolicitud).subscribe(
      (response) => {
        console.log('Solicitud creada', response);
        this.cargarSolicitudes(); // Recargar la lista de solicitudes
      },
      (error) => {
        console.error('Error al crear la solicitud', error);
      }
    );
  }
}
