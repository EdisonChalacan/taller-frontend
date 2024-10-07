import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {

  mascotas = [
    {
      nombre: 'Max',
      edad: 3,
      raza: 'Labrador',
      imagen: 'https://example.com/labrador.jpg'
    },
    {
      nombre: 'Bella',
      edad: 2,
      raza: 'Beagle',
      imagen: 'https://example.com/beagle.jpg'
    },
    {
      nombre: 'Simba',
      edad: 5,
      raza: 'Golden Retriever',
      imagen: 'https://example.com/golden.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
