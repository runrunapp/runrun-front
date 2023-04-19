import { Pipe, PipeTransform } from '@angular/core';
import { Cite } from '../models/cite.models';

@Pipe({
  name: 'hasCite',
})
export class HasCitePipe implements PipeTransform {
  transform(values: Cite[] | undefined, listing: number): boolean {
    if (values) {
      if (values.filter((value) => value.listing === listing).length > 0) {
        return true;
      }
    }
    return false;
  }
}
