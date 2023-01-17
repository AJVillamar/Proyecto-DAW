import { AdopcionService } from 'src/app/Services/adopcion.service';
import { IAdopcion } from './../../../../Interfaces/IAdopcion';
import { MAT_DATE_FORMATS } from '@angular/material/core';
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
  selector: 'app-acept-delete-adopcion',
  templateUrl: './acept-delete-adopcion.component.html',
  styleUrls: ['./acept-delete-adopcion.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class AceptDeleteAdopcionComponent implements OnInit {
  fechaActual!: string;
  icon: string = 'verified';
  titulo: string = 'Confirmar'
  adopcion!: IAdopcion;
  tituloDos: string = 'Aceptar'

  constructor(
    private dialogRef: MatDialogRef<AceptDeleteAdopcionComponent>,
    private _adopcionServicio: AdopcionService,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
    this.fechaActual = moment().locale('es').format('LL');
    this.adopcion = this.data.objeto;
    if(this.data.accion === 'Delete'){
      this.titulo = "Rechazar";
      this.icon = "delete_forever";
      this.tituloDos = "Rechazar"
    }
  }

  aceptDelete(){
    if(this.titulo === 'Confirmar'){
      this._adopcionServicio.confirmarSolicitud(this.adopcion.id, this.fechaActual);
      this.dialogRef.close("Aprobado");
      return
    }
    if(this.titulo === 'Rechazar'){
      this._adopcionServicio.rechazarSolicitud(this.adopcion.id);
      let data = {
        estado: "Rechazado",
        id: this.adopcion.idAnimal
      }      
      this.dialogRef.close(data);
      return
    }
  }
  
}
