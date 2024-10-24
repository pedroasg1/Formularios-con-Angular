import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-input',
  templateUrl: './padre-input.component.html',
  styleUrl: './padre-input.component.css'
})
export class PadreInputComponent {
  NombreDelPadre: string="";
  CambiarNombre(nombre:string){
    this.NombreDelPadre = nombre;
  };
}
