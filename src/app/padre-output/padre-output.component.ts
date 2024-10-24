import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-output',
  templateUrl: './padre-output.component.html',
  styleUrl: './padre-output.component.css'
})
export class PadreOutputComponent {
  mensajeRecibido: string = '';

  recibirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }
}
