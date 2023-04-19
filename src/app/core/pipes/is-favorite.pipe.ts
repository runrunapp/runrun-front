import { Pipe, PipeTransform } from '@angular/core';
import { ListingReduced } from '../modules/search/listing.models';

@Pipe({
  name: 'isFavorite',
})
export class IsFavoritePipe implements PipeTransform {
  transform(values: ListingReduced[] | undefined, listing: number): boolean {
    if (values) {
      for (const value of values) {
        if (value.id === listing) {
          return true;
        }
      }
    }
    return false;
  }
}
