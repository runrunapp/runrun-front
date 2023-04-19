import { Pipe, PipeTransform } from '@angular/core';
import { fromNow } from 'src/app/shared/datetime';

@Pipe({
  name: 'fromNow',
})
export class FromNowPipe implements PipeTransform {
  transform(value: Date): string {
    return fromNow(value);
  }
}
