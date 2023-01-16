import { IAdopcion } from './../Interfaces/IAdopcion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdopcionService {

  adopcion: IAdopcion[] = [
    {
      id: 1, nombres: 'Juan Pérez', correo: 'juanperez@gmail.com',  telefono: 0912345678,
      direccion: 'Calle 123, Guayaquil, Ecuador', estado: 'pendiente', fechaAdopcion: '01/01/2022',  idAnimal: 3
    },
    {
      id: 2, nombres: 'Ana Lopez', correo: 'analopez@gmail.com', telefono: 0922233344,
      direccion: 'Avenida 123, Loja, Ecuador', estado: 'pendiente', fechaAdopcion: '01/03/2022', idAnimal: 8
    }
  ]

  agregarSolicitud(newSolicitud: IAdopcion){
    this.adopcion.push(newSolicitud);
  }
  
}
 