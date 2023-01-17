import { SolicitudAnimalComponent } from './../solicitud-animal/solicitud-animal.component';
import { ToastsService } from './../../../Services/toasts.service';
import { MatDialog } from '@angular/material/dialog';
import { IAnimal } from './../../../Interfaces/IAnimal';
import { AnimalService } from 'src/app/Services/animal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informacion-animal',
  templateUrl: './informacion-animal.component.html',
  styleUrls: ['./informacion-animal.component.css']
})

export class InformacionAnimalComponent {
  animal!: IAnimal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected _animalServicio: AnimalService,
    public dialog: MatDialog,
    private toast: ToastsService
  ){
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.animal = this._animalServicio.getAnimalsById(id);
    });
  }
  

  openSolicitud(){
    this.dialog.open(SolicitudAnimalComponent,{
      autoFocus: false,
      width: '52%',
      height: '480px',
      data: this.animal
    }).afterClosed().subscribe(
      (resultado) => {
        if(resultado == "enviada"){
          this._animalServicio.editarEstado(this.animal.id,"Esperando");
          this.toast.exitoso('<strong>Solicitud envíada</strong><br> Pronto nos comunicaremos con usted.');
          this.router.navigate(['']);
        }
    });
  }

}
