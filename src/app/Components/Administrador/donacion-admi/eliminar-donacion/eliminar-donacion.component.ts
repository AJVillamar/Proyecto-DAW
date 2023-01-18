import { IDonante } from './../../../../Interfaces/IDonante';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DonacionService } from './../../../../Services/donacion.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-eliminar-donacion',
  templateUrl: './eliminar-donacion.component.html',
  styleUrls: ['./eliminar-donacion.component.css']
})
export class EliminarDonacionComponent {
  constructor(
    private _donacionServicio: DonacionService,
    private dialogRef: MatDialogRef<EliminarDonacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDonante) {
      
    }

    eliminarDonacion(){
      this._donacionServicio.eliminarDonacion(this.data.id!);
      this.dialogRef.close("éxito");    
    }
}
