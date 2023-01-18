//Modulos
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './Shared/Material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Shared/Inicio/menu/menu.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { SliderComponent } from './Shared/Inicio/slider/slider.component';
import { FooterComponent } from './Shared/Inicio/footer/footer.component';
import { DestacadoComponent } from './Shared/Inicio/destacado/destacado.component';
import { CumpleaniosComponent } from './Shared/Inicio/cumpleanios/cumpleanios.component';
import { AdoptaInicioComponent } from './Shared/Inicio/adopta-inicio/adopta-inicio.component';
import { CustomizeComponent } from './Components/Administrador/customize/customize.component';
import { DonacionInicioComponent } from './Shared/Inicio/donacion-inicio/donacion-inicio.component';
import { BusquedaInicioComponent } from './Shared/Inicio/busqueda-inicio/busqueda-inicio.component';
import { DenunciaInicioComponent } from './Shared/Inicio/denuncia-inicio/denuncia-inicio.component';
import { ListarAnimalesComponent } from './Components/Adopcion/listar-animales/listar-animales.component';
import { AddAnimalComponent } from './Components/Administrador/animales-admi/add-animal/add-animal.component';
import { OrganizacionInicioComponent } from './Shared/Inicio/organizacion-inicio/organizacion-inicio.component';
import { EditAnimalComponent } from './Components/Administrador/animales-admi/edit-animal/edit-animal.component';
import { InfoAnimalComponent } from './Components/Administrador/animales-admi/info-animal/info-animal.component';
import { DeleteAnimalComponent } from './Components/Administrador/animales-admi/delete-animal/delete-animal.component';
import { InicioAnimalesComponent } from './Components/Administrador/animales-admi/inicio-animales/inicio-animales.component';
import { ReporteAnimalesComponent } from './Components/Administrador/animales-admi/reporte-animales/reporte-animales.component';
import { GestionarAnimalesComponent } from './Components/Administrador/animales-admi/gestionar-animales/gestionar-animales.component';
import { InformacionAnimalComponent } from './Components/Adopcion/informacion-animal/informacion-animal.component';
import { SolicitudAnimalComponent } from './Components/Adopcion/solicitud-animal/solicitud-animal.component';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { CrudRescatesComponent } from './Components/Administrador/rescate-admi/crud-rescates/crud-rescates.component';
import { EditRescateComponent } from './Components/Administrador/rescate-admi/edit-rescate/edit-rescate.component';
import { AddRescateComponent } from './Components/Administrador/rescate-admi/add-rescate/add-rescate.component';
import { InfoRescateComponent } from './Components/Administrador/rescate-admi/info-rescate/info-rescate.component';
import { DonacionComponent } from './Components/donacion/donacion.component';
import { GestionarAdopcionesComponent } from './Components/Administrador/adopcion-admi/gestionar-adopciones/gestionar-adopciones.component';
import { InfomacionAdopcionesComponent } from './Components/Administrador/adopcion-admi/infomacion-adopciones/infomacion-adopciones.component';
import { AceptDeleteAdopcionComponent } from './Components/Administrador/adopcion-admi/acept-delete-adopcion/acept-delete-adopcion.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    SliderComponent,
    CumpleaniosComponent,
    DestacadoComponent,
    AdoptaInicioComponent,
    DonacionInicioComponent,
    BusquedaInicioComponent,
    DenunciaInicioComponent,
    OrganizacionInicioComponent,
    FooterComponent,
    ListarAnimalesComponent,
    LoginComponent,
    CustomizeComponent,
    InicioAnimalesComponent,
    GestionarAnimalesComponent,
    ReporteAnimalesComponent,
    AddAnimalComponent,
    EditAnimalComponent,
    InfoAnimalComponent,
    DeleteAnimalComponent,
    InformacionAnimalComponent,
    SolicitudAnimalComponent,
    CrudRescatesComponent,
    EditRescateComponent,
    AddRescateComponent,
    InfoRescateComponent,
    DonacionComponent,
    GestionarAdopcionesComponent,
    InfomacionAdopcionesComponent,
    AceptDeleteAdopcionComponent,
    NosotrosComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
