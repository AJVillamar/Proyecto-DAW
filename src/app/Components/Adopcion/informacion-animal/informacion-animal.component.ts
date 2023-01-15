import { IAnimal } from './../../../Interfaces/IAnimal';
import { AnimalService } from 'src/app/Services/animal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informacion-animal',
  templateUrl: './informacion-animal.component.html',
  styleUrls: ['./informacion-animal.component.css']
})

export class InformacionAnimalComponent {
  animal!: IAnimal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected _animalServicio: AnimalService
  ){
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.animal = this._animalServicio.getAnimalsById(id);
    });
  }
  

  enviarSolicitud(){}

}
