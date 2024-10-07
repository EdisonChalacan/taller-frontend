import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdopcionService {
  private apiUrl = 'http://localhost:4000/adopcion';  // URL del backend

  constructor(private http: HttpClient) {}

  getMascotas() {
    return this.http.get(`${this.apiUrl}/buscar`);
  }
}
