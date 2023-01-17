import { Injectable } from '@angular/core';
import { IDonante } from '../Interfaces/IDonante';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  cbandera!: IDonante[];

  donante: IDonante[] = [
    {
      id: 1,
      nombre: "Croquetas",
      tipo: "Alimento",
      donante: "Juan Valle",
      cantidad: 4,
      fecha: "14/02/2022",
      observacion: "Ninguna",
    },
    {
      id: 2,
      nombre: "Complejo B",
      tipo: "Medicina",
      donante: "Dayana Luz",
      cantidad: 8,
      fecha: "30/05/2022",
      observacion: "Ninguna",
    },
    {
      id: 3,
      nombre: "Cepillo",
      tipo: "Utensilio",
      donante: "Fernando Mora",
      cantidad: 2,
      fecha: "04/06/2022",
      observacion: "Ninguna",
    },
    {
      id: 4,
      nombre: "Latas",
      tipo: "Alimento",
      donante: "Fernando Mora",
      cantidad: 6,
      fecha: "04/07/2022",
      observacion: "Ninguna",
    }


  ]

  agregarDonacion(newDonante: IDonante){
    this.donante.push(newDonante);
  }

  editarDonacion(updateDonante: IDonante) {
    this.donante.forEach(elemento => {
      if (elemento.id === updateDonante.id) {
        Object.assign(elemento, updateDonante);
      }
    });
  }

  eliminarDonacion(id: number) {
    this.donante = this.donante.filter(a => a.id !== id);
  }

  getDonante(): IDonante[] {
    return this.donante;
  }
}
