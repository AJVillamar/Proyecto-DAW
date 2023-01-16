import { IAnimal } from '../../../../Interfaces/IAnimal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from 'src/app/Services/animal.service';
import { Component, Inject } from '@angular/core';
import * as moment from 'moment';
import { Irescate } from 'src/app/Interfaces/IRescates';

@Component({
  selector: 'app-info-rescate',
  templateUrl: './info-rescate.component.html',
  styleUrls: ['./info-rescate.component.css']
})

export class InfoRescateComponent {
  edad!: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Irescate) { }


}