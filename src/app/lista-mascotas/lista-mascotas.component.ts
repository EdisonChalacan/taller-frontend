import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {
  mascotas: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarMascotas();
  }

  cargarMascotas(): void {
    this.http.get<any[]>('http://127.0.0.1:4000/adopcion/buscar').subscribe(
      (data) => {
        this.mascotas = data;
      },
      (error) => {
        console.error('Error al cargar las mascotas', error);
      }
    );
  }
}
