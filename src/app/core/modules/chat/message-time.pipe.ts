import { Pipe, PipeTransform } from '@angular/core';
import { fromNow, isToday } from 'src/app/shared/datetime';

@Pipe({
  name: 'messageTime',
})
export class MessageTimePipe implements PipeTransform {
  transform(value: Date): string {
    return fromNow(value);
  }
}
