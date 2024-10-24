import { Component } from '@angular/core';

@Component({
  selector: 'app-form-plantilla',
  templateUrl: './form-plantilla.component.html',
  styleUrl: './form-plantilla.component.css'
})
export class FormPlantillaComponent {
  usuario: any = {};
  mostrar:boolean = false
  submitForm(form: any) {
    console.log('Formulario valido, datos del usuario:', this.usuario);
    this.mostrar = !this.mostrar
  }
}
