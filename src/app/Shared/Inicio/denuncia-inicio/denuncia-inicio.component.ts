import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRescateComponent } from 'src/app/Components/Administrador/rescate-admi/add-rescate/add-rescate.component';

@Component({
  selector: 'app-denuncia-inicio',
  templateUrl: './denuncia-inicio.component.html',
  styleUrls: ['./denuncia-inicio.component.css']
})
export class DenunciaInicioComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AddRescateComponent, {
      width: '500px',
      height: '500px'
    });
  }

}
