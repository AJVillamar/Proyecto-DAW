import { MAT_DATE_FORMATS } from '@angular/material/core';
import { IAnimal } from './../../../../Interfaces/IAnimal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from './../../../../Services/animal.service';
import { Component, Inject } from '@angular/core';
import * as moment from 'moment';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
}

@Component({
  selector: 'app-delete-animal',
  templateUrl: './delete-animal.component.html',
  styleUrls: ['./delete-animal.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class DeleteAnimalComponent {
  fechaActual: string;


  constructor(
    private _animalServicio: AnimalService,
    private dialogRef: MatDialogRef<DeleteAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimal) {
      this.fechaActual = new Date().toLocaleDateString()
    }

    deleteAnimal(){
      this._animalServicio.deleteAnimals(this.data.id!, this.fechaActual);
      this.dialogRef.close("fallecido");    
    }

}
