import { Injectable } from '@angular/core';
import { IAdopcion } from '../Interfaces/iadopcion';

@Injectable({
  providedIn: 'root'
})
export class AdopcionService {

  adopcion: IAdopcion[] = [
    {
      id: 1, nombres: 'Juan Pérez', correo: 'juanperez@gmail.com',  telefono: 0912345678,
      direccion: 'Calle 123, Guayaquil, Ecuador', estado: 'pendiente', fechaAdopcion: '01/01/2022',  idAnimal: 3
    }
  ]
}
 