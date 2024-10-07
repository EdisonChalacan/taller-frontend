import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private apiUrl = 'http://localhost:4000/adopcion';  // URL del Backend

  constructor(private http: HttpClient) {}

  // Obtener lista de mascotas
  getMascotas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/buscar`);
  }

  // Crear una nueva mascota
  crearMascota(mascota: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, mascota);
  }

  // Actualizar una mascota
  actualizarMascota(id: number, mascota: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/actualizar/${id}`, mascota);
  }

  // Eliminar una mascota
  eliminarMascota(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminar/${id}`);
  }
}
