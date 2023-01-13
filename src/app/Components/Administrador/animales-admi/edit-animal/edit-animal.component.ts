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
  animalSetear!: IAnimal;

  constructor(
    private _animalServicio: AnimalService,
    private toast: ToastsService,
    private dialogRef: MatDialogRef<EditAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {data: IAnimal},
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

  ngOnInit(): void {
    
  }

}
