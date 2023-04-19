import { Injectable } from '@angular/core';
import { Receipt } from './gestion.models';

@Injectable({
  providedIn: 'root',
})
export class ReceiptDataService {
  constructor() {}
  monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  receiptByYear(receipts: Receipt[], year: number, currency: string) {
    const aggregated: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    receipts.forEach((r) => {
      if (r.currency !== currency) {
        return;
      }
      const date = new Date(r.createdAt);
      const y = date.getFullYear();
      const m = date.getMonth();
      if (y === year) {
        aggregated[m] += r.amount;
      }
    });

    return aggregated.map((a, i) => {
      return { name: this.monthNames[i], value: a };
    });
  }
}
