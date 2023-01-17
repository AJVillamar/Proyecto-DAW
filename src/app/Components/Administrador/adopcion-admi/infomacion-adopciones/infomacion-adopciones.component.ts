import { MAT_DATE_FORMATS } from '@angular/material/core';
import { IAdopcion } from './../../../../Interfaces/IAdopcion';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  selector: 'app-infomacion-adopciones',
  templateUrl: './infomacion-adopciones.component.html',
  styleUrls: ['./infomacion-adopciones.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class InfomacionAdopcionesComponent {
  fecha: string;

  constructor(
    private dialogRef: MatDialogRef<InfomacionAdopcionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAdopcion
  ) { 
    this.fecha = moment(data.fechaReg).locale('es').format('LL');
  }

}
 