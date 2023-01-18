import { NosotrosComponent } from './Components/nosotros/nosotros.component';

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
import { CrudRescatesComponent } from './Components/Administrador/rescate-admi/crud-rescates/crud-rescates.component';
import { DonacionComponent } from './Components/donacion/donacion.component';
import { GestionarAdopcionesComponent } from './Components/Administrador/adopcion-admi/gestionar-adopciones/gestionar-adopciones.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listar', component:  ListarAnimalesComponent },
  { path: 'informacion/:id', component: InformacionAnimalComponent },
  { path: 'nosotros/:accion', component: NosotrosComponent },
  { path: 'admi-general', component: CustomizeComponent,
    children: [
      { path: '', component: InicioAnimalesComponent },
      { path: 'gestionar-animales', component: GestionarAnimalesComponent },
      { path: 'reporte-animales', component: ReporteAnimalesComponent },
      { path: 'crud-rescate', component: CrudRescatesComponent },
      { path: 'gestionar-adopcion', component: GestionarAdopcionesComponent }
    ]  
  },
  { path: 'donacion', component: DonacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
