import { IAnimal } from './../../../../Interfaces/IAnimal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from 'src/app/Services/animal.service';
import { Component, Inject } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-info-animal',
  templateUrl: './info-animal.component.html',
  styleUrls: ['./info-animal.component.css']
})

export class InfoAnimalComponent {
  edad!: number;

  constructor(
    private _animalServicio: AnimalService,
    private dialogRef: MatDialogRef<InfoAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimal) {this.calcularEdad(); }

  closeAnimal(){
    this.dialogRef.close();
  }

  calcularEdad() {
    const hoy = moment();
    const nacimiento = moment.utc(this.data.fechaNac, 'DD/MM/YYYY');
    this.edad = hoy.diff(nacimiento, 'years');
  } 
}