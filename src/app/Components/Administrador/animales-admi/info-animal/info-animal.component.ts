import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAnimal } from './../../../../Interfaces/IAnimal';
import { Component, Inject } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-info-animal',
  templateUrl: './info-animal.component.html',
  styleUrls: ['./info-animal.component.css']
})

export class InfoAnimalComponent {
  edad!: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IAnimal) {this.calcularEdad(); }

  calcularEdad() {
    const hoy = moment();
    const nacimiento = moment.utc(this.data.fechaNac, 'DD/MM/YYYY');
    this.edad = hoy.diff(nacimiento, 'years');
  } 
}