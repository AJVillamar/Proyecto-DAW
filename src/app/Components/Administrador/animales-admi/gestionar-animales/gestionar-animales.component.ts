import { ToastsService } from 'src/app/Services/toasts.service';
import { MatDialog } from '@angular/material/dialog';
import { IAnimal } from './../../../../Interfaces/IAnimal';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AnimalService } from 'src/app/Services/animal.service';
import { AddAnimalComponent } from '../add-animal/add-animal.component';
import { EditAnimalComponent } from '../edit-animal/edit-animal.component';
import { InfoAnimalComponent } from '../info-animal/info-animal.component';

@Component({
  selector: 'app-gestionar-animales',
  templateUrl: './gestionar-animales.component.html',
  styleUrls: ['./gestionar-animales.component.css']
})

export class GestionarAnimalesComponent implements OnInit, AfterViewInit{
  
  dataSource: any = [];

  constructor(
    private _servicioAnimal: AnimalService,
    public dialog: MatDialog,
    private toast: ToastsService
  ) { }
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IAnimal>(this._servicioAnimal.animal as IAnimal[]);
  }
  
  displayedColumns: string[] = ['nombre', 'raza', 'sexo', 'estado', 'accion'];
  
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
    this.dialog.open(AddAnimalComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
    }).afterClosed().subscribe(
      (resultado) => {
        if(resultado == "éxito"){
          this.toast.exitoso('<strong>Felicidades</strong><br> El animal ha sido ingresado con éxito.');
          this.actualizar();
        }
    });
  }

  openEdit(data: IAnimal){
    this.dialog.open(EditAnimalComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      data: data      
    }).afterClosed().subscribe(
      (resultado) => {
        if(resultado == "actualizado"){
          this.toast.exitoso('<strong>Felicidades</strong><br> El animal ha sido actualizado con éxito.');
          this.actualizar();
        }
    });
  }

  openInfo(data: IAnimal){
    this.dialog.open(InfoAnimalComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      data: data      
    })
  }

  actualizar(){
    this.dataSource = new MatTableDataSource<IAnimal>(this._servicioAnimal.animal as IAnimal[]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
