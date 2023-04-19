import { Listing } from 'src/app/core/modules/search/listing.models';
import { SortModel } from '../filters-store/models';

function sortByPrice(listings: Listing[], descending = false) {
  listings.sort((a, b) => {
    if (descending) {
      return b.price - a.price;
    }
    return a.price - b.price;
  });
}

function sortByDate(listings: Listing[], descending = false) {
  listings.sort((a, b) => {
    const a_d = new Date(a.availableDay).getTime();
    const b_d = new Date(b.availableDay).getTime();
    if (descending) {
      return b_d - a_d;
    }
    return a_d - b_d;
  });
}

function sortBySpace(listings: Listing[], descending = false) {
  listings.sort((a, b) => {
    const a_a: number = a.totalArea ? a.totalArea : 0;
    const b_a: number = b.totalArea ? b.totalArea : 0;
    if (descending) {
      return b_a - a_a;
    }
    return a_a - b_a;
  });
}

export const sortListings = (listings: Listing[], criteria: SortModel) => {
  if (criteria.bigger !== undefined) {
    sortByPrice(listings, criteria.bigger);
  }
  if (criteria.recent !== undefined) {
    sortByPrice(listings, criteria.recent);
  }
  if (criteria.price !== undefined) {
    sortByPrice(listings, !criteria.price);
  }
  return listings;
};
