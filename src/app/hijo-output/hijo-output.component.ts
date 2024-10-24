import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-output',
  templateUrl: './hijo-output.component.html',
  styleUrl: './hijo-output.component.css'
})
export class HijoOutputComponent {
  @Output() mensajeEnviado = new EventEmitter<string>();
  enviarMensaje(mensaje:string) {
    this.mensajeEnviado.emit(mensaje);
  }
}
