import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-angular',
  templateUrl: './form-angular.component.html',
  styleUrl: './form-angular.component.css'
})
export class FormAngularComponent {
  registroForm: FormGroup;
  MostrarDatos: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      pais: ['', Validators.required],
      fecha: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]]
    });
  }
  onSubmit() {
    if (this.registroForm && this.registroForm.valid) {
      console.log('Formulario válido. Datos:');
      console.log('Nombre:', this.registroForm.value.nombre);
      console.log('Correo Electrónico:', this.registroForm.value.email);
      console.log('Contraseña:', this.registroForm.value.password);
      console.log('Pais de residencia:', this.registroForm.value.pais);
      this.MostrarDatos = true;
    } else {
      console.error('Formulario inválido. Por favor, completa todos los campos correctamente.');
    }
  }
}
