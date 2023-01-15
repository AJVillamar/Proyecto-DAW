import { Router } from '@angular/router';
import { AnimalService } from 'src/app/Services/animal.service';
import { IAnimal } from '../../../Interfaces/IAnimal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-animales',
  templateUrl: './listar-animales.component.html',
  styleUrls: ['./listar-animales.component.css'],
})

export class ListarAnimalesComponent implements OnInit {
  animals!: IAnimal[];
  selectedButton: string = 'Perros';

  constructor(
    private animalService: AnimalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.animals = this.animalService.getDogs();
  }

  onButtonClick(button: string) {
    this.selectedButton = button;
    if (this.selectedButton === 'Perros') {
      this.animals = this.animalService.getDogs();
    } else {
      this.animals = this.animalService.getCats();
    }
  }

  verInformacion(animal: IAnimal) {
    this.router.navigate(['/informacion', animal.id]);
  }

}
