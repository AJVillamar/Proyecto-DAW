import { Injectable } from '@angular/core';
import { Admi } from '../Interfaces/IAdmi';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  comprobacion: boolean = false;
  administrador!: Admi;

  userAdmi: Admi[] = [
    { id: 1, nombres: "Administrador", apellidos: "General", user: "root", password: "root", rol: "admi", estado: 1 },
    { id: 2, nombres: "Angelo", apellidos: "Villamar", user: "angelo1", password: "angelo11", rol: "animales", estado: 1 },
    { id: 3, nombres: "John", apellidos: "Torres", user: "john1", password: "john11", rol: "adopcion", estado: 1 },
    { id: 4, nombres: "Josue", apellidos: "Baque", user: "josue1", password: "josue11", rol: "donacion", estado: 1 },
    { id: 5, nombres: "Genesis", apellidos: "Sanchez", user: "genesis1", password: "genesis11", rol: "rescate", estado: 1 }
  ]

  verificarUser(user: string):boolean{
    this.userAdmi.forEach(element => {
      if(element.user === user){
        this.comprobacion = true;
      }
    });
    return this.comprobacion;
  }

  verificarPass(password: string):boolean{
    this.comprobacion = false;
    this.userAdmi.forEach(element => {
      if(element.password === password){
        this.comprobacion = true;
      }
    });
    return this.comprobacion;
  }

  verificacionFinal(user: string, password: string):Admi{
    this.userAdmi.forEach(element =>{
      if(element.user === user && element.password === password){
        this.administrador = element;
      }
    });
    return this.administrador;
  }
}
