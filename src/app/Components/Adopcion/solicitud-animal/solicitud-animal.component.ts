import { IAnimal } from './../../../Interfaces/IAnimal';
import { ToastsService } from './../../../Services/toasts.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-solicitud-animal',
  templateUrl: './solicitud-animal.component.html',
  styleUrls: ['./solicitud-animal.component.css']
})
export class SolicitudAnimalComponent {

  constructor(
    private dialogRef: MatDialogRef<SolicitudAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimal,
    private toast: ToastsService
  ) {
  }

  enviar(){
    console.log(this.data);
    this.dialogRef.close("solicitud");
  }
}
