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
import { OrganizacionInicioComponent } from './Shared/Inicio/organizacion-inicio/organizacion-inicio.component';
import { InicioAnimalesComponent } from './Components/Administrador/animales-admi/inicio-animales/inicio-animales.component';
import { GestionarAnimalesComponent } from './Components/Administrador/animales-admi/gestionar-animales/gestionar-animales.component';
import { ReporteAnimalesComponent } from './Components/Administrador/animales-admi/reporte-animales/reporte-animales.component';
import { AddAnimalComponent } from './Components/Administrador/animales-admi/add-animal/add-animal.component';
import { EditAnimalComponent } from './Components/Administrador/animales-admi/edit-animal/edit-animal.component';
import { InfoAnimalComponent } from './Components/Administrador/animales-admi/info-animal/info-animal.component';
import { DeleteAnimalComponent } from './Components/Administrador/animales-admi/delete-animal/delete-animal.component';

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
    DeleteAnimalComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
