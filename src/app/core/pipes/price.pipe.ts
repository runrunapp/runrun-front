import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number): string {
    const valueStr = value.toString();
    let result = '';
    let count = 1;
    for (let index = valueStr.length - 1; index >= 0; index--) {
      result += valueStr[index];
      if (count === 3) {
        result += ' ';
        count = 0;
      }
      count++;
    }
    result = result.split('').reverse().join(''); // reverse
    return `${result}`;
  }
}
