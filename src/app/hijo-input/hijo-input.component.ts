import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-hijo-input',
  templateUrl: './hijo-input.component.html',
  styleUrl: './hijo-input.component.css'
})
export class HijoInputComponent {
  @Input() nombre?: string;
}
