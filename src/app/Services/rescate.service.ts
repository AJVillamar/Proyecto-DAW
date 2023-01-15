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
            imagen: "https://www.elperiodico.com/es/imagenes/2020/05/28/actualidad/1590640000_000000_1590640000_noticia_normal.jpg",
            nombre: "Pepito",
            raza: "Pastor Aleman",
            sexo: "Macho",
            estado: 1,
            descripcion: "Es un perro muy amigable y jugueton",
            fecha: "2021-05-28",
            id_animal: 1
        },
        {
            id: 2,
            imagen: "https://www.elperiodico.com/es/imagenes/2020/05/28/actualidad/1590640000_000000_1590640000_noticia_normal.jpg",
            nombre: "Pepito",
            raza: "Pastor Aleman",
            sexo: "Macho",
            estado: 1,
            descripcion: "Es un perro muy amigable y jugueton",
            fecha: "2021-05-28",
            id_animal: 1
        }
    ];


  agregarMascota(newRescate: Irescate){
    this.rescate.push(newRescate);
  }

  editarAnimals(updateAnimals: Irescate) {
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

  getAnimals(): Irescate[] {
    return this.rescate;
  }

  getAnimalsById(id: number): Irescate{
    this.rescate.forEach(a => {
      if (a.id === id) {
        this.bandera = a;
      }
    });   
    return this.bandera;
  }
  
}
