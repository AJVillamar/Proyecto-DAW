import { Injectable } from '@angular/core';
import { Irescate } from '../Interfaces/IRescates';

@Injectable({
  providedIn: 'root'
})
export class rescateService {
  bandera!: Irescate;

  rescate: Irescate[] = [
    {
    id: 1,
    nombre: "Kitty",
    raza: "Siames",
    sexo: "Hembra",
    estado: 1,
    descripcion: "Se ha reportado un gato callejero en la esquina de la calle tal y tal, presenta heridas en la pata",
    fecha: "2021-01-01"
    },
    {
    id: 2,
    nombre: "Lucy",
    raza: "Persa",
    sexo: "Hembra",
    estado: 2,
    descripcion: "Se ha reportado un gato maltratado en la calle tal, necesita atención veterinaria de urgencia",
    fecha: "2021-02-01"
    },
    {
      id: 3,
      nombre: "Max",
      raza: "Golden Retriever",
      sexo: "Macho",
      estado: 3,
      descripcion: "Se ha reportado un perro herido en un accidente de tráfico en la calle tal, necesita atención veterinaria de urgencia",
      fecha: "2021-03-01"
      },
      {
      id: 4,
      nombre: "Bella",
      raza: "Bulldog",
      sexo: "Hembra",
      estado: 4,
      descripcion: "Se ha reportado un perro con problemas de salud graves en la calle tal, necesita atención veterinaria de urgencia",
      fecha: "2021-04-01"
      },
      {
        id: 5,
        nombre: "Charlie",
        raza: "Siames",
        sexo: "Macho",
        estado: 1,
        descripcion: "Se ha reportado un gato callejero en la calle tal, parece ser abandonado",
        fecha: "2021-05-01"
        },
        {
        id: 6,
        nombre: "Oliver",
        raza: "Angora",
        sexo: "Macho",
        estado: 2,
        descripcion: "Se ha reportado un gato maltratado en la calle tal, necesita atención veterinaria de urgencia",
        fecha: "2021-06-01"
        },
        {
          id: 7,
          nombre: "Toby",
          raza: "Golden Retriever",
          sexo: "Macho",
          estado: 3,
          descripcion: "Se ha reportado un perro herido en un accidente de tráfico en la calle tal, necesita atención veterinaria de urgencia",
          fecha: "2021-07-01"
          },
          {
          id: 8,
          nombre: "Mia",
          raza: "Bulldog",
          sexo: "Hembra",
          estado: 4,
          descripcion: "Se ha reportado un perro con problemas de salud graves en la calle tal, necesita atención veterinaria de urgencia",
          fecha: "2021-08-01"
          },
          {
            id: 9,
            nombre: "Rocky",
            raza: "Boxer",
            sexo: "Macho",
            estado: 1,
            descripcion: "Se ha reportado un perro callejero en la calle tal, parece ser abandonado",
            fecha: "2021-09-01"
            },
            {
            id: 10,
            nombre: "Luna",
            raza: "Siames",
            sexo: "Hembra",
            estado: 2,
            descripcion: "Se ha reportado un gato maltratado en la calle tal, necesita atención veterinaria de urgencia",
            fecha: "2021-10-01"
            },
            {
              id: 11,
              nombre: "Buddy",
              raza: "Golden Retriever",
              sexo: "Macho",
              estado: 3,
              descripcion: "Se ha reportado un perro herido en un accidente de tráfico en la calle tal, necesita atención veterinaria de urgencia",
              fecha: "2021-11-01"
              },
              {
              id: 12,
              nombre: "Daisy",
              raza: "Bulldog",
              sexo: "Hembra",
              estado: 4,
              descripcion: "Se ha reportado un perro con problemas de salud graves en la calle tal, necesita atención veterinaria de urgencia",
              fecha: "2021-12-01"
              },
              {
                id: 13,
                nombre: "Gizmo",
                raza: "Siames",
                sexo: "Macho",
                estado: 1,
                descripcion: "Se ha reportado un gato callejero en la calle tal, parece ser abandonado",
                fecha: "2022-01-01"
                }
  ];


  agregarRescate(newRescate: Irescate){
    this.rescate.push(newRescate);
  }

  editarRescate(updateAnimals: Irescate) {
    this.rescate.forEach(elemento => {
      if (elemento.id === updateAnimals.id) {
        Object.assign(elemento, updateAnimals);
      }
    });
  }

  deleteRescate(id: number) {
    this.rescate.forEach((elemento, index) => {
        if (elemento.id === id) {
            this.rescate.splice(index, 1);
        }
    });
}

  getRescate(): Irescate[] {
    return this.rescate;
  }
  
}
