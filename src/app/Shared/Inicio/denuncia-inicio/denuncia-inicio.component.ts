import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRescateComponent } from 'src/app/Components/Administrador/rescate-admi/add-rescate/add-rescate.component';
import { ToastsService } from 'src/app/Services/toasts.service';

@Component({
  selector: 'app-denuncia-inicio',
  templateUrl: './denuncia-inicio.component.html',
  styleUrls: ['./denuncia-inicio.component.css']
})
export class DenunciaInicioComponent {

  constructor(public dialog: MatDialog,
    private toast: ToastsService) { }

  openDialog() {
    this.dialog.open(AddRescateComponent, {
      width: '500px',
      height: '500px'
    }).afterClosed().subscribe(
      (resultado) => {
        if(resultado == "éxito"){
          this.toast.exitoso('<strong>Estado: </strong><br> El reporte de rescate ha sido reportado con éxito.');
        }
    });
  }

}
