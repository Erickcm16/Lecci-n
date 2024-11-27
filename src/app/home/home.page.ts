import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Variables para las apuestas
  betAmountFootball: number = 0;
  betAmountBasketball: number = 0;
  betAmountTennis: number = 0;

  constructor() {}

  // Función para realizar la apuesta
  placeBet(sport: string, result: string) {
    let amount = 0;

    // Determinar el monto apostado según el deporte
    if (sport === 'football') {
      amount = this.betAmountFootball;
    } else if (sport === 'basketball') {
      amount = this.betAmountBasketball;
    } else if (sport === 'tennis') {
      amount = this.betAmountTennis;
    }

    // Validar el monto
    if (amount < 1 || amount > 1000) {
      alert('Por favor, introduce una cantidad válida entre $1 y $1000.');
      return;
    }

    // Calcular ganancia
    const winnings = amount * 10;

    // Generar comprobante
    alert(`Comprobante de apuesta:
Deporte: ${sport}
Resultado: ${result}
Cantidad apostada: $${amount}
Posibles ganancias: $${winnings}`);
  }
}
