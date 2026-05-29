import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  imports: [FormsModule],
  templateUrl: './contactos.component.html'
})
export class ContactosComponent {
  enviado = false;

  enviar(): void {
    this.enviado = true;
  }
}
