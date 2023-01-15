import { AnimalService } from 'src/app/Services/animal.service';
import { IAnimal } from './../../Interfaces/IAnimal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css'],
})

export class AdopcionComponent implements OnInit {
  animals!: IAnimal[];
  selectedButton: string = 'Perros';

  constructor(private animalService: AnimalService) { }

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


}
