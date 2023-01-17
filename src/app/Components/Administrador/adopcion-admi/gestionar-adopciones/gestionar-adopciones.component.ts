import { AnimalService } from 'src/app/Services/animal.service';
import { AceptDeleteAdopcionComponent } from './../acept-delete-adopcion/acept-delete-adopcion.component';
import { InformacionAnimalComponent } from './../../../Adopcion/informacion-animal/informacion-animal.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { IAdopcion } from './../../../../Interfaces/IAdopcion';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdopcionService } from 'src/app/Services/adopcion.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ToastsService } from 'src/app/Services/toasts.service';
import { InfomacionAdopcionesComponent } from '../infomacion-adopciones/infomacion-adopciones.component';

@Component({
  selector: 'app-gestionar-adopciones',
  templateUrl: './gestionar-adopciones.component.html',
  styleUrls: ['./gestionar-adopciones.component.css']
})
export class GestionarAdopcionesComponent implements OnInit, AfterViewInit {

  dataSource: any = [];

  constructor(
    private _servicioAdopcion: AdopcionService,
    private _servicioAnimal: AnimalService,
    public dialog: MatDialog,
    private toast: ToastsService
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IAdopcion>(this._servicioAdopcion.adopcion as IAdopcion[]);
  }

  displayedColumns: string[] = ['nombreAnimal', 'nombres', 'fechaReg', 'estado', 'accion'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = "Items por Página ";
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openInfo(data: IAdopcion){
    this.dialog.open(InfomacionAdopcionesComponent,{
      autoFocus: false,
      data: data,
      width: '50%',
      height: '475px',
    })
  }

  openConfirm(data: IAdopcion){
    this.dialog.open(AceptDeleteAdopcionComponent,{
      autoFocus: false,
      data: {
        objeto: data
      }
    }).afterClosed().subscribe(
      (resultado) => {
        if(resultado === 'Aprobado'){
          this.toast.exitoso('<strong>Felicidades</strong><br> El animal tiene un nuevo dueño.');
          this.actualizar();
        }
      });
  }

  openDelete(data: IAdopcion){
    this.dialog.open(AceptDeleteAdopcionComponent,{
      autoFocus: false,
      data: {
        objeto: data,
        accion: 'Delete' 
      }
    }).afterClosed().subscribe(
      (resultado) => {
        if(resultado.estado === 'Rechazado'){
          this._servicioAnimal.editarEstado(resultado.id,"Disponible");
          this.toast.error('<strong>Lo sentimos</strong><br> La solicitud ha sido rechazada.');
          this.actualizar();
        }
      });
  }

  actualizar(){
    this.dataSource = new MatTableDataSource<IAdopcion>(this._servicioAdopcion.adopcion as IAdopcion[]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
