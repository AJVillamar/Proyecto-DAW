import { MAT_DATE_FORMATS } from '@angular/material/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { rescateService } from 'src/app/Services/rescate.service';
import { ToastsService } from 'src/app/Services/toasts.service';
import * as moment from 'moment';
import { Irescate } from 'src/app/Interfaces/IRescates';

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
  selector: 'app-add-edit-animal',
  templateUrl: './add-rescate.component.html',
  styleUrls: ['./add-rescate.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class AddRescateComponent {
  form: FormGroup;
  fileName!: any;
  constructor(
    private servicio: rescateService,
    private toast: ToastsService,
    private dialogRef: MatDialogRef<AddRescateComponent>,
    private fb: FormBuilder){
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        animal: ['', Validators.required],
        raza: ['', Validators.required],
        sexo: ['', Validators.required],
        estado: ['', Validators.required],
        descripcion: ['', Validators.required]
      })
  }

  ingresarRescate(){
    if(this.form.invalid){
      this.toast.error('<strong>Error: </strong><br> Todos los campos son obligatorios.');
      return
    }

    const newRescate: Irescate = {
      id: this.servicio.getRescate.length + 1,
      nombre: this.form.value.nombre,
      animal: this.form.value.animal,
      raza: this.form.value.raza,
      sexo: this.form.value.sexo,
      estado: this.form.value.estado,
      descripcion: this.form.value.descripcion,
      fecha: moment().format('DD/MM/YYYY')
    }
    console.log(newRescate);
    
    this.servicio.agregarRescate(newRescate);
    this.dialogRef.close("éxito");    
  }
  
}
