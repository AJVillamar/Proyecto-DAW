import { IAnimal } from './../Interfaces/IAnimal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  bandera!: IAnimal[];

  animal: IAnimal[] = [
    { 
      id: 1, imagen: "dog1.jpg", nombre: "Bella", raza: "Cocker Spaniel", categoria: "Perro", 
      fechaNac: "15/03/2019", fechaIng: "01/06/2021", sexo: "Hembra", estado: "Disponible",
      observacion: "Rescatamos a Bella de una situación de abandono en Guayaquil. Estaba muy delgada y necesitaba atención veterinaria urgente. Después de unas semanas de cuidados, Bella se recuperó y demostró ser un perro muy cariñoso y juguetón.",
    },
    { 
      id: 2, imagen: "dog2.jpg", nombre: "Max", raza: "Labrador Retriever", categoria: "Perro", 
      fechaNac: "15/03/2019", fechaIng: "01/06/2021", sexo: "Macho", estado: "Disponible",
      observacion: "Encontramos a Max vagando por las calles de Quito. Parecía haber sido abandonado por su antigua familia, así que decidimos llevarlo a la fundación. Es un perro muy activo y le encanta jugar con otros perros y personas.",
    },
    { 
      id: 3, imagen: "dog3.jpg", nombre: "Charlie", raza: "Beagle", categoria: "Perro", 
      fechaNac: "05/04/2017", fechaIng: "15/08/2019", sexo: "Macho", estado: "Esperando",
      observacion: "Charlie fue abandonado en una estación de tren en Cuenca. Estaba muy asustado y desconfiado al principio, pero después de un poco de amor y atención, se convirtió en un perro muy cariñoso y leal.",
    },
    { 
      id: 4, imagen: "dog4.jpg", nombre: "Oliver", raza: "Golden Retriever", categoria: "Perro", 
      fechaNac: "20/05/2018", fechaIng: " 05/11/2020", sexo: "Macho", estado: "Disponible",
      observacion: "Oliver fue encontrado por un trabajador del parque en el centro de la ciudad. Parecía haber estado allí por un tiempo y estaba muy delgado y sucio. Después de un poco de limpieza y comida, Oliver se convirtió en un perro muy saludable y juguetón.",
    },
    { 
      id: 5, imagen: "dog5.jpg", nombre: "Daisy", raza: "Poodle", categoria: "Perro", 
      fechaNac: "15/06/2019", fechaIng: "01/02/2022", sexo: "Hembra", estado: "Adoptado",
      observacion: "Daisy fue rescatada de una situación de maltrato en una finca cerca de Loja. Fue encontrada atada a un poste sin acceso a agua ni comida. Después de unas semanas de cuidados, Daisy se recuperó y demostró ser una perra muy cariñosa y agradecida.",
    }
  ];


  agregarMascota(newAnimal: IAnimal){
    this.animal.push(newAnimal);
  }

  editarAnimal(updateAnimal: IAnimal){
    this.animal.forEach(elemento => {
      if(elemento.id == updateAnimal.id){
        elemento.nombre == updateAnimal.nombre
      }
    });
  }

  getAnimals(): IAnimal[] {
    return this.animal;
  }
  
}
