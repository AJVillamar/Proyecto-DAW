import { IAnimal } from './../../../../Interfaces/IAnimal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastsService } from 'src/app/Services/toasts.service';
import { AnimalService } from 'src/app/Services/animal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
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
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class EditAnimalComponent implements OnInit {
  form: FormGroup;
  fileName!: any;

  constructor(
    private fb: FormBuilder,
    private toast: ToastsService,
    private _animalServicio: AnimalService,
    private dialogRef: MatDialogRef<EditAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimal){
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        raza: ['', Validators.required],
        categoria: ['', Validators.required],
        sexo: ['', Validators.required],
        fechaNac: ['', Validators.required],
        observacion: ['', Validators.required],
      })
  }  

  onFileSelected(event: Event) {
    this.fileName = (event.target as HTMLInputElement).files?.[0].name
  }  

  ngOnInit(): void {        
    this.fileName = this.data.imagen;
    this.form.patchValue({
      nombre: this.data.nombre,
      raza: this.data.raza,
      categoria: this.data.categoria,
      sexo: this.data.sexo,
      fechaNac: moment(this.data.fechaNac, 'DD/MM/YYYY').toDate(),
      observacion: this.data.observacion
    })
  }

  editarAnimal(){
    if(this.form.invalid){
      this.toast.error('<strong>Error</strong><br> Todos los campos son obligatorio.');
      return
    }

    const animal: IAnimal = {
      id: this.data.id,
      imagen: this.fileName,
      nombre: this.form.value.nombre,
      raza: this.form.value.raza,
      categoria: this.form.value.categoria,
      fechaNac: moment(this.form.value.fechaNac).format("DD/MM/YYYY"),
      fechaIng: new Date().toLocaleDateString(),
      sexo: this.form.value.sexo,
      estado: "Disponible",
      observacion: this.form.value.observacion
    }
    
    this._animalServicio.editarAnimals(animal);
    this.dialogRef.close("actualizado");    
  }

}
