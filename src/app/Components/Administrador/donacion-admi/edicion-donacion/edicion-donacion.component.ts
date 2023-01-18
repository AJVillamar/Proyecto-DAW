import { MAT_DATE_FORMATS } from '@angular/material/core';
import { IDonante } from './../../../../Interfaces/IDonante';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastsService } from 'src/app/Services/toasts.service';
import { DonacionService } from 'src/app/Services/donacion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  selector: 'app-edicion-donacion',
  templateUrl: './edicion-donacion.component.html',
  styleUrls: ['./edicion-donacion.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class EdicionDonacionComponent implements OnInit{
  form: FormGroup;
  fileName!: any;

  constructor(
    private fb: FormBuilder,
    private toast: ToastsService,
    private _donacionServicio: DonacionService,
    private dialogRef: MatDialogRef<EdicionDonacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDonante){
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        tipo: ['', Validators.required],
        cantidad: ['', Validators.required],
        donante: ['', Validators.required],
        fecha: ['', Validators.required],
        observacion: ['', Validators.required],
      })
  }  

  ngOnInit(): void {        
    this.form.patchValue({
      nombre: this.data.nombre,
      tipo: this.data.tipo,
      cantidad: this.data.cantidad,
      donante: this.data.donante,
      fecha: moment(this.data.fecha, 'DD/MM/YYYY').toDate(),
      observacion: this.data.observacion
    })
  }

  editarDonacion(){
    if(this.form.invalid){
      this.toast.error('<strong>Error</strong><br> Todos los campos son obligatorio.');
      return
    }

    const donante: IDonante = {
      id: this.data.id,
      nombre: this.form.value.nombre,
      tipo: this.form.value.tipo,
      cantidad: this.form.value.cantidad,
      donante: this.form.value.donante,
      fecha: moment(this.form.value.fecha).format("DD/MM/YYYY"),
      observacion: this.form.value.observacion
    }
    
    this._donacionServicio.editarDonacion(donante);
    this.dialogRef.close("actualizado");    
  }
}
