import { Pipe, PipeTransform } from '@angular/core';
import { difference } from 'src/app/shared/datetime';

@Pipe({
  name: 'paymentDay'
})
export class PaymentDayPipe implements PipeTransform {

  transform(value: number): string  {
    const today = new Date()
    if(value > today.getDate())  {
      return value - today.getDate() + ' días'
    }
    if(value === today.getDate()) {
      return 'Hoy'
    }
    const nextPayment = new Date()
    nextPayment.setMonth(nextPayment.getMonth() + 1)
    nextPayment.setDate(value)
    return difference(nextPayment, today) + ' días'
  }

}
