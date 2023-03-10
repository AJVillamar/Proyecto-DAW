import { Injectable } from '@angular/core';
import { Irescate } from '../Interfaces/IRescates';

@Injectable({
  providedIn: 'root'
})
export class rescateService {
  bandera!: Irescate;

  rescate: Irescate[] = [
    {
      id: 1, nombre: "Kitty", animal:"Gato", raza: "Siames", sexo: "Hembra", estado: "Callejero", fecha: "2021-01-01",
      descripcion: "Se ha reportado un gato callejero en la esquina de la calle tal y tal, presenta heridas en la pata"
    },
    {
      id: 2, nombre: "Lucy",animal:"Gato", raza: "Persa", sexo: "Hembra", estado: "Maltrato", fecha: "2021-02-01",
      descripcion: "Se ha reportado un gato maltratado en la calle tal, necesita atención veterinaria de urgencia"
    },
    {
      id: 3, nombre: "Max",animal:"Perro", raza: "Golden Retriever", sexo: "Macho", estado: "Accidente", fecha: "2021-03-01",
      descripcion: "Se ha reportado un perro herido en un accidente de tráfico en la calle tal, necesita atención veterinaria de urgencia"
    },
    {
      id: 4, nombre: "Bella",animal:"Perro", raza: "Bulldog", sexo: "Hembra", estado: "Grave",
      descripcion: "Se ha reportado un perro con problemas de salud graves en la calle tal, necesita atención veterinaria de urgencia",
      fecha: "2021-04-01"
    },
    {
      id: 5, nombre: "Charlie",animal:"Gato", raza: "Siames", sexo: "Macho", estado: "Callejero",
      descripcion: "Se ha reportado un gato callejero en la calle tal, parece ser abandonado",
      fecha: "2021-05-01"
    },
    {
      id: 6, nombre: "Oliver",animal:"Gato", raza: "Angora", sexo: "Macho", estado: "Maltrato", fecha: "2021-06-01",
      descripcion: "Se ha reportado un gato maltratado en la calle tal, necesita atención veterinaria de urgencia",
    },
    {
      id: 7, nombre: "Toby",animal:"Perro", raza: "Golden Retriever", sexo: "Macho", estado: "Accidente", fecha: "2021-07-01",
      descripcion: "Se ha reportado un perro herido en un accidente de tráfico en la calle tal, necesita atención veterinaria de urgencia"
    },
    {
      id: 8, nombre: "Mia",animal:"Perro", raza: "Bulldog", sexo: "Hembra", estado: "Grave", fecha: "2021-08-01",
      descripcion: "Se ha reportado un perro con problemas de salud graves en la calle tal, necesita atención veterinaria de urgencia"
    },
    {
      id: 9, nombre: "Rocky",animal:"Perro", raza: "Boxer", sexo: "Macho", estado: "Callejero", fecha: "2021-09-01",
      descripcion: "Se ha reportado un perro callejero en la calle tal, parece ser abandonado"
    },
    {
      id: 10, nombre: "Luna",animal:"Gato", raza: "Siames", sexo: "Hembra", estado: "Maltrato", fecha: "2021-10-01",
      descripcion: "Se ha reportado un gato maltratado en la calle tal, necesita atención veterinaria de urgencia"
    },
    {
      id: 11, nombre: "Buddy",animal:"Perro", raza: "Golden Retriever", sexo: "Macho", estado: "Accidente", fecha: "2021-11-01",
      descripcion: "Se ha reportado un perro herido en un accidente de tráfico en la calle tal, necesita atención veterinaria de urgencia"
    },
    {
      id: 12, nombre: "Daisy",animal:"Perro", raza: "Bulldog", sexo: "Hembra", estado: "Grave", fecha: "2021-12-01",
      descripcion: "Se ha reportado un perro con problemas de salud graves en la calle tal, necesita atención veterinaria de urgencia"
    },
    {
      id: 13,   nombre: "Gizmo",animal:"Gato",   raza: "Siames",   sexo: "Macho",   estado: "Callejero", fecha: "2022-01-01",
      descripcion: "Se ha reportado un gato callejero en la calle tal, parece ser abandonado",
    }
  ];

  agregarRescate(newRescate: Irescate){
    this.rescate.push(newRescate);
    console.log(this.rescate);
  }

  editarRescate(updateAnimals: Irescate) {
    this.rescate.forEach(elemento => {
      if (elemento.id === updateAnimals.id) {
        Object.assign(elemento, updateAnimals);
      }
    });
  }

  deleteRescate(id: number) {
    this.rescate.forEach(a => {
      if (a.id === id) {
        a.rechazada = "Eliminada";
      }
    });    
  }


  getRescate(): Irescate[] {
    return this.rescate;
  }
  
}
