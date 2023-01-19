import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from './../../../../Services/login.service';
import { Admi } from './../../../../Interfaces/IAdmi';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admi-general',
  templateUrl: './admi-general.component.html',
  styleUrls: ['./admi-general.component.css']
})
export class AdmiGeneralComponent {

  dataSource: any = [];

  constructor(
    private _loginService: LoginService
  ) {
    
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Admi>(this._loginService.userAdmi as Admi[]);
  }
  
  displayedColumns: string[] = ['nombres', 'apellidos', 'user', 'rol'];
  
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
}