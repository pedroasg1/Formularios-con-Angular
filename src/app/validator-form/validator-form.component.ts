import { Component } from '@angular/core';

@Component({
  selector: 'app-validator-form',
  templateUrl: './validator-form.component.html',
  styleUrl: './validator-form.component.css'
})
export class ValidatorFormComponent {
  usuario: any = {};
  mostrar:boolean = false
  submitForm2(formulario: any) {
    if (formulario.valid) {
      console.log('Formulario valido, datos del usuario:', this.usuario);
      this.mostrar = !this.mostrar
    } else {
      console.error('Fomulario invalido. Por favor, complete todos los campos correctamente.');
    }
  }
}
