import { MAT_DATE_FORMATS } from '@angular/material/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDonante } from '../../../../Interfaces/IDonante';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { DonacionService } from 'src/app/Services/donacion.service';
import { ToastsService } from 'src/app/Services/toasts.service';
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
  selector: 'app-agregar-donacion',
  templateUrl: './agregar-donacion.component.html',
  styleUrls: ['./agregar-donacion.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class AgregarDonacionComponent {
  form: FormGroup;
  fileName!: any;
  
  constructor(
    private _donacionServicio: DonacionService,
    private toast: ToastsService,
    private dialogRef: MatDialogRef<AgregarDonacionComponent>,
    private fb: FormBuilder){
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        tipo: ['', Validators.required],
        cantidad: ['', Validators.required],
        donante: ['', Validators.required],
        fecha: ['', Validators.required],
        observacion: ['', Validators.required],
      })
  }

  onFileSelected(event: Event) {
    this.fileName = (event.target as HTMLInputElement).files?.[0]
  }

  
  ingresarDonante(){
    if(this.form.invalid){
      this.toast.error('<strong>Error</strong><br> Todos los campos son obligatorio.');
      return
    }
  
    const donante: IDonante = {
      id: this._donacionServicio.donante.length + 1,
      nombre: this.form.value.nombre,
      tipo: this.form.value.tipo,
      cantidad: this.form.value.cantidad,
      donante: this.form.value.donante,
      fecha:  moment(this.form.value.fecha).format("DD/MM/YYYY"),
      observacion: this.form.value.observacion
    }

    this._donacionServicio.agregarDonacion(donante);
    this.dialogRef.close("éxito");
  
  }

}
