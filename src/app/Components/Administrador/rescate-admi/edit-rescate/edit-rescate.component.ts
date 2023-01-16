import { IAnimal } from '../../../../Interfaces/IAnimal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastsService } from 'src/app/Services/toasts.service';
import { rescateService } from 'src/app/Services/rescate.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Component, Inject, OnInit } from '@angular/core';
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
  selector: 'app-edit-rescate',
  templateUrl: './edit-rescate.component.html',
  styleUrls: ['./edit-rescate.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class EditRescateComponent implements OnInit {
  form: FormGroup;
  fileName!: any;

  constructor(
    private fb: FormBuilder,
    private toast: ToastsService,
    private servicio: rescateService,
    private dialogRef: MatDialogRef<EditRescateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Irescate) {
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        raza: ['', Validators.required],
        sexo: ['', Validators.required],
        estado: ['', Validators.required],
        descripcion: ['', Validators.required],
        fecha: ['', Validators.required]
      })
  }  

  onFileSelected(event: Event) {
    this.fileName = (event.target as HTMLInputElement).files?.[0].name
  }  

  ngOnInit(): void {
    this.form.patchValue({
      nombre: this.data.nombre,
      raza: this.data.raza,
      sexo: this.data.sexo,
      estado: this.data.estado,
      descripcion: this.data.descripcion,
      fecha: this.data.fecha
    })
    console.log(this.form.value.estado);
  }

  editarRescate(){
    if(this.form.invalid){
      this.toast.error('<strong>Error: </strong><br> Todos los campos son obligatorios.');
      return
    }

    const newRescate: Irescate = {
      id: this.data.id,
      nombre: this.form.value.nombre,
      raza: this.form.value.raza,
      sexo: this.form.value.sexo,
      estado: this.form.value.estado,
      descripcion: this.form.value.descripcion,
      fecha: moment(this.form.value.fecha).format('DD/MM/YYYY')
    }
    
    this.servicio.editarRescate(newRescate);
    this.dialogRef.close("actualizado");    
  }

}
