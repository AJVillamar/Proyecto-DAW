import { IAnimal } from './../../../../Interfaces/IAnimal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from './../../../../Services/animal.service';
import { Component, Inject } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-delete-animal',
  templateUrl: './delete-animal.component.html',
  styleUrls: ['./delete-animal.component.css']
})
export class DeleteAnimalComponent {
  edad!: number;

  constructor(
    private _animalServicio: AnimalService,
    private dialogRef: MatDialogRef<DeleteAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimal) {this.calcularEdad(); }

    calcularEdad() {
      const hoy = moment();
      const nacimiento = moment.utc(this.data.fechaNac, 'DD/MM/YYYY');
      this.edad = hoy.diff(nacimiento, 'years');
    } 

    closeAnimal(){
      this.dialogRef.close();
    }

}
