import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../authentication/authentication.models';

@Pipe({
  name: 'isOwner',
})
export class IsOwnerPipe implements PipeTransform {
  transform(user: User | null, listing: number): boolean {
    if (user?.listings) {
      return user.listings?.filter(val => val === listing).length > 0;
    }
    return false;
  }
}
