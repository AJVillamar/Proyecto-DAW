import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.css']
})
export class DonacionComponent {
  resultado!: string;

  formDonacion = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    donacion: new FormControl('', [Validators.required])
  });

  submit() {
    if (this.formDonacion.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
