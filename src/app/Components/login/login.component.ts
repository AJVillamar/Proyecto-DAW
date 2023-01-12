import { Router } from '@angular/router';
import { Admi } from '../../Interfaces/IAdmi';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastsService } from 'src/app/Services/toasts.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  form: FormGroup;
  admis!: Admi; 

  constructor (
    private toast: ToastsService,
    private fb: FormBuilder,
    private _servicioLogin: LoginService,
    private router: Router
  ){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  ingresar(){
    if(this.form.invalid){
      this.toast.error('<strong>Error</strong><br> Todos los campos son obligatorio.');
      return
    }

    if(!this._servicioLogin.verificarUser(this.form.get('usuario')?.value)){
      this.toast.error('<strong>Error</strong><br> El usuario ingresado no existe.');
      this.form.reset();
      return;
    }

    if(!this._servicioLogin.verificarPass(this.form.get('password')?.value)){
      this.toast.advertencia('<strong>Advertencia</strong><br> Contraseña incorrecta, intente de nuevo.');
      this.form.reset();
      return;
    }

    if(this._servicioLogin.verificacionFinal(this.form.get('usuario')?.value, this.form.get('password')?.value) != null){
      this.admis = this._servicioLogin.verificacionFinal(this.form.get('usuario')?.value, this.form.get('password')?.value);
      this.router.navigate(['/admi-general'],{
        state:{
          data: this.admis
        }
      });      
      this.toast.exitoso('<strong>Bienvenido</strong><br> Acceso éxitoso al area admnistrativa.');
    }

  }
}
