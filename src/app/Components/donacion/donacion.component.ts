import { ToastsService } from './../../Services/toasts.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.css']
})
export class DonacionComponent {
  form: FormGroup;
  
  constructor(
    private toast: ToastsService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      donacion: ['', Validators.required],
      correo: ['', Validators.required]
    }) 
  }


  submit() {
    if(this.form.invalid){
      this.toast.error('<strong>Error</strong><br> Todos los campos son obligatorio.');
      return
    }
  }
}
