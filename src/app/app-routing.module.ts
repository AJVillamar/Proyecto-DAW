import { CrudRescatesComponent } from './Components/Administrador/animales-admi/crud-rescates/crud-rescates.component';
import { InformacionAnimalComponent } from './Components/Adopcion/informacion-animal/informacion-animal.component';
//Modulo
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './Components/login/login.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { CustomizeComponent } from './Components/Administrador/customize/customize.component';
import { ListarAnimalesComponent } from './Components/Adopcion/listar-animales/listar-animales.component';
import { InformacionAnimalComponent } from './Components/Adopcion/informacion-animal/informacion-animal.component';
import { InicioAnimalesComponent } from './Components/Administrador/animales-admi/inicio-animales/inicio-animales.component';
import { ReporteAnimalesComponent } from './Components/Administrador/animales-admi/reporte-animales/reporte-animales.component';
import { GestionarAnimalesComponent } from './Components/Administrador/animales-admi/gestionar-animales/gestionar-animales.component';
import { CrudRescatesComponent } from './Components/Administrador/crud-rescates/crud-rescates.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listar', component:  ListarAnimalesComponent },
  { path: 'informacion/:id', component: InformacionAnimalComponent },
  { path: 'admi-general', component: CustomizeComponent,
    children: [
      { path: '', component: InicioAnimalesComponent },
      { path: 'gestionar-animales', component: GestionarAnimalesComponent, data: { animation: 'Uno' } },
      { path: 'reporte-animales', component: ReporteAnimalesComponent, data: { animation: 'Dos' } },
      { path: 'crud-rescate', component: CrudRescatesComponent, data: { animation: 'Dos' } }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
