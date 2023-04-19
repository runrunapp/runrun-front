import { Pipe, PipeTransform } from '@angular/core';
import { BaseRunroomiePost } from '../modules/runroomie/runroomie.models';

@Pipe({
  name: 'isSharedOnRunroomie'
})
export class IsSharedOnRunroomiePipe implements PipeTransform {

  transform(values: BaseRunroomiePost[] | undefined, listing: number): boolean {
    if(values) {
      for (const value of values) {
        if (value.listing === listing) {
          return true;
        }
      }
    }
    return false;
  }
}
