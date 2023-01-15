import { MAT_DATE_FORMATS } from '@angular/material/core';
import { IAnimal } from '../../../../Interfaces/IAnimal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from '../../../../Services/animal.service';
import { Component, Inject } from '@angular/core';
import * as moment from 'moment';
import { rescateService } from 'src/app/Services/rescate.service';

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
  selector: 'app-delete-rescate',
  templateUrl: './delete-rescate.component.html',
  styleUrls: ['./delete-rescate.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class rescateDeleteComponent {
  fechaActual: string;


  constructor(
    private servicio: rescateService,
    private dialogRef: MatDialogRef<rescateDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimal) {
      this.fechaActual = new Date().toLocaleDateString()
    }

    deleteRescate(){
      this.servicio.deleteRescate(this.data.id!);
      this.dialogRef.close('eliminado');    
    }

}
