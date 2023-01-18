import { MatDialog } from '@angular/material/dialog';
import { ToastsService } from 'src/app/Services/toasts.service';
import { IDonante } from './../../../../Interfaces/IDonante';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DonacionService } from 'src/app/Services/donacion.service';
import { AgregarDonacionComponent } from '../agregar-donacion/agregar-donacion.component';
import { EdicionDonacionComponent } from '../edicion-donacion/edicion-donacion.component';
import { EliminarDonacionComponent } from '../eliminar-donacion/eliminar-donacion.component';

@Component({
  selector: 'app-gestion-donacion',
  templateUrl: './gestion-donacion.component.html',
  styleUrls: ['./gestion-donacion.component.css']
})
export class GestionDonacionComponent implements OnInit, AfterViewInit{
  dataSource: any = [];

  constructor(
    private _servicioDonacion: DonacionService,
    public dialog: MatDialog,
    private toast: ToastsService
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IDonante>(this._servicioDonacion.donante as IDonante[]);
  }

  displayedColumns: string[] = ['Nombre', 'Tipo', 'Cantidad', 'Donante', 'Fecha', 'Observacion', 'Acción'];
  
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

  openAdd(){
    this.dialog.open(AgregarDonacionComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
    }).afterClosed().subscribe(
      (resultado) => {
        if(resultado == "éxito"){
          this.toast.exitoso('<strong>Felicidades</strong><br> La donacion ha sido ingresado con éxito.');
          this.actualizar();
        }
    });
  }

  openEdit(data: IDonante){
    this.dialog.open(EdicionDonacionComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      data: data      
    }).afterClosed().subscribe(
      (resultado) => {
        if(resultado == "actualizado"){
          this.toast.exitoso('<strong>Felicidades</strong><br> La donacion ha sido actualizado con éxito.');
          this.actualizar();
        }
    });
  }

  openDelete(data: IDonante){
    this.dialog.open(EliminarDonacionComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      data: data      
    }).afterClosed().subscribe(
      (resultado) => {
        if(resultado == "éxito"){
          this.toast.exitoso('<strong>Felicidades</strong><br> La donacion ha sido eliminada con éxito.');
          this.actualizar();
        }
    });
  }

  actualizar(){
    this.dataSource = new MatTableDataSource<IDonante>(this._servicioDonacion.donante as IDonante[]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
