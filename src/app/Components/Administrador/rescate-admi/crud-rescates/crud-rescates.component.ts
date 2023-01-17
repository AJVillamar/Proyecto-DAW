import { Component, OnInit, ViewChild } from '@angular/core';
import { Irescate } from 'src/app/Interfaces/IRescates';
import {MatTableDataSource} from '@angular/material/table';
import { rescateService } from 'src/app/Services/rescate.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastsService } from 'src/app/Services/toasts.service';
import { MatDialog } from '@angular/material/dialog';
import {rescateDeleteComponent} from '../delete-rescate/delete-rescate.component';
import { EditRescateComponent } from '../edit-rescate/edit-rescate.component';
import { InfoRescateComponent } from '../info-rescate/info-rescate.component';
import { auto } from '@popperjs/core';


@Component({
  selector: 'app-crud-rescates',
  templateUrl: './crud-rescates.component.html',
  styleUrls: ['./crud-rescates.component.css']
})
export class CrudRescatesComponent implements OnInit {
    
    rescates: Irescate[] = [];
    public servicio: any;
    constructor(
      private rescatesService: rescateService,
      public dialog: MatDialog,
      private toast: ToastsService
      ) {
        this.rescates = this.rescatesService.getRescate();
        this.dataSource = new MatTableDataSource<Irescate>();
      }

    displayedColumns: string[] = ['nombre','animal', 'sexo', 'estado', 'fecha', 'acciones'];
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    dataSource = new MatTableDataSource<Irescate>(this.rescates);
  
    ngOnInit() {
      this.rescates = this.rescatesService.getRescate();
      this.dataSource = new MatTableDataSource<Irescate>(this.rescates);
    }
    
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
    }

    openInfo(data: Irescate){
      this.dialog.open(InfoRescateComponent,{
        autoFocus: false,
        disableClose: true,
        width: auto,
        data: data      
      });
    }

    openEdit(data: Irescate){
      this.dialog.open(EditRescateComponent,{
        autoFocus: false,
        width: '35%',
        data: data      
      }).afterClosed().subscribe(
        (resultado) => {
          if(resultado == "actualizado"){
            this.toast.exitoso('<strong>Estado: </strong><br> El reporte de rescate ha sido actualizado con éxito.');
            this.actualizar();
          }
      });
    }

    openDelete(data: Irescate){
      this.dialog.open(rescateDeleteComponent,{
        autoFocus: false,
        disableClose: true,
        width: '40%',
        data: data      
      }).afterClosed().subscribe(
        (resultado) => {
          if(resultado == "eliminado"){
            this.toast.fallecido('<strong>Estado: </strong><br>Se eliminó el reporte.');
            this.actualizar();
          }
      });
    }

    actualizar(){
      console.log(this.rescatesService.getRescate());
      this.dataSource = new MatTableDataSource<Irescate>(this.rescatesService.getRescate() as Irescate[]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }


  }
  