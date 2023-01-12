import { MAT_DATE_FORMATS } from '@angular/material/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IAnimal } from '../../../../Interfaces/IAnimal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/Services/animal.service';
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
  selector: 'app-add-edit-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class AddAnimalComponent {
  form: FormGroup;
  fileName!: any;

  constructor(
    private _animalServicio: AnimalService,
    private toast: ToastsService,
    private dialogRef: MatDialogRef<AddAnimalComponent>,
    private fb: FormBuilder){
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        raza: ['', Validators.required],
        tipo: ['', Validators.required],
        sexo: ['', Validators.required],
        fechaNac: ['', Validators.required],
        imagen: ['', Validators.required],
        observacion: ['', Validators.required],
      })
  }

  onFileSelected(event: Event) {
    this.fileName = (event.target as HTMLInputElement).files?.[0]
  }

  
  ingresarAnimal(){
    if(this.form.invalid){
      this.toast.error('<strong>Error</strong><br> Todos los campos son obligatorio.');
      return
    }
    
    const animal: IAnimal = {
      id: this._animalServicio.animal.length + 1,
      imagen: this.fileName.name,
      nombre: this.form.value.nombre,
      razaNombre: this.form.value.nombre,
      categoriaNombre: this.form.value.tipo,
      fechaNac: moment(this.form.value.fechaNac).format("DD/MM/YYYY"),
      fechaIng: moment().format("DD/MM/YYYY"),
      sexoNombre: this.form.value.sexo,
      estadoNombre: "Disponible",
      observacion: this.form.value.observacion
    }
    
    this._animalServicio.agregarMascota(animal);
    this.dialogRef.close("éxito");    
  }
  
}
