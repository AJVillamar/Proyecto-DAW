import { AnimalService } from 'src/app/Services/animal.service';
import { IAdopcion } from './../Interfaces/IAdopcion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdopcionService {

  adopcion: IAdopcion[] = [
    {
      id: 1, nombres: 'Juan Pérez', raza: "Beagle", correo: 'juanperez@gmail.com',  telefono: '0912345678',
      direccion: 'Calle 123, Guayaquil, Ecuador', estado: 'Pendiente', fechaNac: '05/03/2017', fechaReg: '01/01/2022',  idAnimal: 3,
      nombreAnimal: 'Charlie', imagen: 'dog3.jpg'
    },
    {
      id: 2, nombres: 'Ana Lopez', raza: "Persa", correo: 'analopez@gmail.com', telefono: '0922233344',
      direccion: 'Avenida 123, Loja, Ecuador', estado: 'Pendiente', fechaNac: '05/04/2017', fechaReg: '01/03/2022', idAnimal: 8,
      nombreAnimal: 'Luna', imagen: 'gato3.jpg'
    },
    {
      id: 3, nombres: 'Carlos García', raza: "Golden Retriever", correo: 'carlosgarcia@gmail.com', telefono: '0987362531',
      direccion: 'Calle 456, Quito, Ecuador', estado: 'Pendiente', fechaNac: '05/04/2019', fechaReg: '11/02/2022', idAnimal: 15,
      nombreAnimal: 'Maxwell', imagen: 'dog9.jpg'
    },
    {
      id: 4, nombres: 'Maria Rodriguez', raza: "Siamese", correo: 'mariarodriguez@gmail.com', telefono: '0988978342',
      direccion: 'Avenida 789, Cuenca, Ecuador', estado: 'Pendiente', fechaNac: '05/04/2018', fechaReg: '22/10/2022', idAnimal: 18,
      nombreAnimal: 'Mittens', imagen: 'dog6.jpg'
    },
    {
      id: 5, nombres: 'Andres Ortiz', raza: "Siamese", correo: 'andresortiz@gmail.com', telefono: '0998374635',
      direccion: 'Calle 987, Loja, Ecuador', estado: 'Pendiente', fechaNac: '05/04/2016', fechaReg: '11/09/2022', idAnimal: 20,
      nombreAnimal: 'Whiskers', imagen: 'gato7.jpg'
    }
  ]
  
  agregarSolicitud(newSolicitud: IAdopcion){
    this.adopcion.push(newSolicitud);
  }

  confirmarSolicitud(id: number, fechaAct: string) {
    this.adopcion.forEach(a => {
      if (a.id === id) {
        a.estado = "Aprobado";
        a.fechaAdopcion = fechaAct;
      }
    });  
  }

  rechazarSolicitud(id: number) {
    this.adopcion.forEach(a => {
      if (a.id === id) {
        a.estado = "Rechazado"
      }
    });  
  }
  
}
 