import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  // Nueva función que se ejecutará al hacer clic en el botón
  sayHello() {
    alert('¡Hola Mundo!');
  }
}
