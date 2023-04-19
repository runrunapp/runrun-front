import { Pipe, PipeTransform } from '@angular/core';
import { Listing } from '../modules/search/listing.models';

@Pipe({
  name: 'listingSwiper'
})
export class ListingSwiperPipe implements PipeTransform {

  transform(value: Listing[], ...args: unknown[]) {
    const r = value.map(listing => (
      {
        id: listing.id,
        price: listing.price,
        title: listing.title,
        image: listing.images[0]?.image || ''
      }))
      return r;
  }

}
