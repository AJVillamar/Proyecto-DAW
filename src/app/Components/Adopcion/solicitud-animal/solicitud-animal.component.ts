import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SolicitudAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimal,
    private toast: ToastsService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.fechaActual = moment().locale('es').format('LL');
    this.fechaNacimiento = moment().locale('es').format('LL');
  }

  enviarSolicitud(){
    if(this.form.invalid){
      this.toast.error('<strong>Error</strong><br> Todos los campos son obligatorio.');
      return
    }
  }
}
