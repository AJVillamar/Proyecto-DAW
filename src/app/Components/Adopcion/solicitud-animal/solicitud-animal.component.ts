import { MAT_DATE_FORMATS } from '@angular/material/core';
import { IAnimal } from './../../../Interfaces/IAnimal';
import { ToastsService } from './../../../Services/toasts.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
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
  selector: 'app-solicitud-animal',
  templateUrl: './solicitud-animal.component.html',
  styleUrls: ['./solicitud-animal.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class SolicitudAnimalComponent implements OnInit {
  fechaActual!: string;
  fechaNacimiento!: string;

  constructor(
    private dialogRef: MatDialogRef<SolicitudAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimal,
    private toast: ToastsService
  ) {
  }

  ngOnInit(): void {
    this.fechaActual = moment().locale('es').format('LL');
    this.fechaNacimiento = moment().locale('es').format('LL');
  }

}
