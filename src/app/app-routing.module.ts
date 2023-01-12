//Modulo
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './Components/login/login.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AdopcionComponent } from './Components/adopcion/adopcion.component';
import { CustomizeComponent } from './Components/Administrador/customize/customize.component';
import { InicioAnimalesComponent } from './Components/Administrador/animales-admi/inicio-animales/inicio-animales.component';
import { GestionarAnimalesComponent } from './Components/Administrador/animales-admi/gestionar-animales/gestionar-animales.component';
import { ReporteAnimalesComponent } from './Components/Administrador/animales-admi/reporte-animales/reporte-animales.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adopcion', component:  AdopcionComponent },
  { path: 'admi-general', component: CustomizeComponent,
    children: [
      { path: '', component: InicioAnimalesComponent },
      { path: 'gestionar-animales', component: GestionarAnimalesComponent, data: { animation: 'Uno' } },
      { path: 'reporte-animales', component: ReporteAnimalesComponent, data: { animation: 'Dos' } }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
