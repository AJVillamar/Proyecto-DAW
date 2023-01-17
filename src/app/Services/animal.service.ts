import { IAnimal } from './../Interfaces/IAnimal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  bandera!: IAnimal;

  animal: IAnimal[] = [
    { 
      id: 1, imagen: "dog1.jpg", nombre: "Bella", raza: "Cocker Spaniel", categoria: "Perro", 
      fechaNac: "15/03/2019", fechaIng: "01/06/2021", sexo: "Hembra", estado: "Disponible",
      observacion: "Rescatamos a Bella de una situación de abandono en Guayaquil. Estaba muy delgada y necesitaba atención veterinaria urgente. Después de unas semanas de cuidados, Bella se recuperó y demostró ser un perro muy cariñoso y juguetón.",
    },
    { 
      id: 2, imagen: "dog2.jpg", nombre: "Max", raza: "Labrador Retriever", categoria: "Perro", 
      fechaNac: "15/06/2019", fechaIng: "01/06/2021", sexo: "Macho", estado: "Disponible",
      observacion: "Encontramos a Max vagando por las calles de Quito. Parecía haber sido abandonado por su antigua familia, así que decidimos llevarlo a la fundación. Es un perro muy activo y le encanta jugar con otros perros y personas.",
    },
    { 
      id: 3, imagen: "dog3.jpg", nombre: "Charlie", raza: "Beagle", categoria: "Perro", 
      fechaNac: "05/03/2017", fechaIng: "15/08/2019", sexo: "Macho", estado: "Esperando",
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
    },
    {
      id: 6, imagen: "gato1.jpg", nombre: "Mittens", raza: "Siamese", categoria: "Gato",
      fechaNac: "01/01/2019", fechaIng: "01/06/2021", sexo: "Hembra", estado: "Disponible",
      observacion: "Mittens fue encontrada en las calles de Quito, estaba muy delgada y necesitaba atención veterinaria urgente. Después de unas semanas de cuidados, Mittens se recuperó y demostró ser un gato muy cariñoso y juguetón.",
    },
    {
      id: 7, imagen: "gato2.jpg", nombre: "Whiskers", raza: "Tabby", categoria: "Gato",
      fechaNac: "15/06/2019", fechaIng: "01/06/2021", sexo: "Macho", estado: "Disponible",
      observacion: "Whiskers fue encontrado vagando por las calles de Cuenca. Parecía haber sido abandonado por su antigua familia, así que decidimos llevarlo a la fundación. Es un gato muy activo y le encanta jugar con otros gatos y personas.",
    },
    {
      id: 8, imagen: "gato3.jpg", nombre: "Luna", raza: "Persa", categoria: "Gato",
      fechaNac: "05/04/2017", fechaIng: "15/08/2019", sexo: "Hembra", estado: "Esperando",
      observacion: "Luna fue abandonada en una estación de tren en Guayaquil. Estaba muy asustada y desconfiada al principio, pero después de un poco de amor y atención, se convirtió en un gato muy cariñoso y leal.",
    },
    {
      id: 9, imagen: "gato4.jpg", nombre: "Simba", raza: "Maine Coon", categoria: "Gato",
      fechaNac: "20/05/2018", fechaIng: "05/11/2020", sexo: "Macho", estado: "Disponible",
      observacion: "Simba fue encontrado por un trabajador del parque en el centro de la ciudad. Parecía haber estado allí por un tiempo y estaba muy delgado y sucio. Después de un poco de limpieza y comida, Simba se convirtió en un gato muy saludable y juguetón.",
    },
    {
      id: 10, imagen: "gato5.jpg", nombre: "Bella", raza: "Siamese", categoria: "Gato",
      fechaNac: "15/06/2019", fechaIng: "01/02/2022", sexo: "Hembra", estado: "Adoptado",
      observacion: "Bella fue rescatada de una situación de maltrato en una finca cerca de Loja. Fue encontrada atada a un poste sin acceso a agua ni comida. Después de unas semanas de cuidados, Bella se recuperó y demostró ser una gata muy cariñosa y agradecida.",
    },
    {
      id: 11, imagen: "dog9.jpg", nombre: "Sasha", raza: "Siberian Husky", categoria: "Perro",
      fechaNac: "01/01/2018", fechaIng: "01/06/2021", sexo: "Hembra", estado: "Disponible",
      observacion: "Sasha fue encontrada en un parque en Guayaquil, estaba sola y necesitaba ayuda. Fue llevada a la fundación y se recuperó rápidamente, demostrando ser un perro muy cariñoso y amigable."
      },
    {
      id: 12, imagen: "gato3.jpg", nombre: "Simba", raza: "Siamese", categoria: "Gato",
      fechaNac: "01/01/2019", fechaIng: "01/06/2021", sexo: "Macho", estado: "Adoptado",
      observacion: "Simba fue encontrado en una calle en Cuenca, estaba herido y necesitaba ayuda. Fue llevado a la fundación y se recuperó rápidamente, demostrando ser un gato muy cariñoso y juguetón."
    },
    {
      id: 13, imagen: "dog7.jpg", nombre: "Lucy", raza: "Bulldog", categoria: "Perro",
      fechaNac: "01/01/2020", fechaIng: "01/06/2021", sexo: "Hembra", estado: "Disponible",
      observacion: "Lucy fue rescatada de una situación de maltrato en una finca cerca de Quito. Estaba muy malherida y necesitaba atención veterinaria inmediata. Después de unas semanas de cuidados, Lucy se recuperó y demostró ser una perra muy cariñosa y leal."
    },
    {
      id: 14, imagen: "gato4.jpg", nombre: "Kitty", raza: "Siamese", categoria: "Gato",
      fechaNac: "01/01/2021", fechaIng: "01/06/2021", sexo: "Hembra", estado: "Disponible",
      observacion: "Kitty fue encontrada en una calle en Guayaquil, estaba sola y necesitaba ayuda. Fue llevada a la fundación y se recuperó rápidamente, demostrando ser una gata muy cariñosa y amigable."
    },
    {
      id: 15, imagen: "dog9.jpg", nombre: "Maxwell", raza: "Golden Retriever", categoria: "Perro",
      fechaNac: "01/01/2020", fechaIng: "01/06/2021", sexo: "Macho", estado: "Esperando",
      observacion: "Maxwell fue encontrado en un parque en Quito, estaba solo y necesitaba ayuda. Fue llevado a la fundación y se recuperó rápidamente, demostrando ser un perro muy cariñoso y amigable."
    },
    {
      id: 16, imagen: "gato5.jpg", nombre: "Luna", raza: "Siamese", categoria: "Gato",
      fechaNac: "01/01/2021", fechaIng: "01/06/2021", sexo: "Hembra", estado: "Disponible",
      observacion: "Luna fue encontrada en una calle en Cuenca, estaba sola y necesitaba ayuda. Fue llevada a la fundación y se recuperó rápidamente, demostrando ser una gata muy cariñosa y amigable."
    },
    {
      id: 17, imagen: "dog6.jpg", nombre: "Charlie", raza: "Beagle", categoria: "Perro",
      fechaNac: "01/01/2019", fechaIng: "01/06/2021", sexo: "Macho", estado: "Disponible",
      observacion: "Charlie fue encontrado en un parque en Guayaquil, estaba solo y necesitaba ayuda. Fue llevado a la fundación y se recuperó rápidamente, demostrando ser un perro muy cariñoso y amigable."
    },
    {
      id: 18, imagen: "gato6.jpg", nombre: "Mittens", raza: "Siamese", categoria: "Gato",
      fechaNac: "01/01/2018", fechaIng: "01/06/2021", sexo: "Hembra", estado: "Esperando",
      observacion: "Mittens fue encontrada en una calle en Quito, estaba sola y necesitaba ayuda. Fue llevada a la fundación y se recuperó rápidamente, demostrando ser una gata muy cariñosa y amigable."
    },
    {
      id: 19, imagen: "dog10.jpg", nombre: "Bella", raza: "Cocker Spaniel", categoria: "Perro",
      fechaNac: "01/01/2019", fechaIng: "01/06/2021", sexo: "Hembra", estado: "Disponible",
      observacion: "Bella fue encontrada en un parque en Cuenca, estaba sola y necesitaba ayuda. Fue llevada a la fundación y se recuperó rápidamente, demostrando ser una perra muy cariñosa y amigable."
    },
    {
      id: 20, imagen: "gato7.jpg", nombre: "Whiskers", raza: "Siamese", categoria: "Gato",
      fechaNac: "01/01/2018", fechaIng: "01/06/2021", sexo: "Macho", estado: "Esperando",
      observacion: "Whiskers fue encontrado en una calle en Guayaquil, estaba herido y necesitaba ayuda. Fue llevado a la fundación y se recuperó rápidamente, demostrando ser un gato muy cariñoso y juguetón."
    }
  ];

  agregarMascota(newAnimal: IAnimal){
    this.animal.push(newAnimal);
  }

  editarAnimals(updateAnimals: IAnimal) {
    this.animal.forEach(elemento => {
      if (elemento.id === updateAnimals.id) {
        Object.assign(elemento, updateAnimals);
      }
    });
  }

  editarEstado(idAnimal: number, estado: string) {
    this.animal.forEach(elemento => {
      if (elemento.id === idAnimal) {
        elemento.estado = estado;
      }
    });
  }

  deleteAnimals(id: number, fechaFal: string) {
    this.animal.forEach(a => {
      if (a.id === id) {
        a.estado = "Fallecido";
        a.fechaFal = fechaFal;
      }
    });    
  }

  getAnimals(): IAnimal[] {
    return this.animal;
  }

  getAnimalsById(id: number): IAnimal{
    this.animal.forEach(a => {
      if (a.id === id) {
        this.bandera = a;
      }
    });   
    return this.bandera;
  }

  getDogs(): IAnimal[] {
    return this.animal.filter(animal => animal.categoria === 'Perro' && animal.estado === "Disponible");
  }

  getCats(): IAnimal[] {
    return this.animal.filter(animal => animal.categoria === 'Gato' && animal.estado === "Disponible");
  }
  
}
