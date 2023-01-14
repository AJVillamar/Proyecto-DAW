import { IAnimal } from './../../../../Interfaces/IAnimal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from 'src/app/Services/animal.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-info-animal',
  templateUrl: './info-animal.component.html',
  styleUrls: ['./info-animal.component.css']
})
export class InfoAnimalComponent {
  constructor(
    private _animalServicio: AnimalService,
    private dialogRef: MatDialogRef<InfoAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimal) { }

  closeAnimal(){

  }
}
