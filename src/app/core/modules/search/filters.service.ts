import { PropertyType } from 'src/app/core/modules/publish/models/publish.models';
import { Listing } from 'src/app/core/modules/search/listing.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  filterListings(filters: any, listings: Listing[]) {
    // Filter based on property type
    listings = this.filterByPropertyType(filters.propertyType, listings);
    // Filter based on currency
    listings = this.filterByCurrency(filters.currency, listings);
    // Filter based on price range
    listings = this.filterByPrice(filters.minPrice, filters.maxPrice, listings);
    // Filter based on total area
    listings = this.filterByArea(
      filters.minTotalArea,
      filters.maxTotalArea,
      listings
    );
    // Filter based on floor level
    listings = this.filterByFloorLevel(filters.floorLevel, listings);
    // Filter based on min stay time
    listings = this.filterByStayTime(
      filters.minStay,
      filters.maxStay,
      listings
    );

    return listings;
  }

  filterByPropertyType(propertyType: PropertyType, listings: Listing[]) {
    return listings.filter((l) => l.propertyType === propertyType);
  }

  filterByCurrency(currency: string | null, listings: Listing[]) {
    if (currency === null) {
      return listings;
    }
    return listings.filter((l) => l.currency === currency);
  }

  filterByPrice(min: number | null, max: number | null, listings: Listing[]) {
    if (min !== null && max !== null) {
      return listings.filter((l) => l.price >= min && l.price <= max);
    }
    if (max !== null) {
      return listings.filter((l) => l.price <= max);
    }
    if (min !== null) {
      return listings.filter((l) => l.price >= min);
    }
    return listings;
  }

  filterByArea(min: number | null, max: number | null, listings: Listing[]) {
    if (min !== null && max !== null) {
      return listings.filter((l) => l.totalArea >= min && l.totalArea <= max);
    }
    if (max !== null) {
      return listings.filter((l) => l.totalArea <= max);
    }
    if (min !== null) {
      return listings.filter((l) => l.totalArea >= min);
    }
    return listings;
  }

  filterByStayTime(
    min: number | null,
    max: number | null,
    listings: Listing[]
  ) {
    if (min !== null && max !== null) {
      return listings.filter(
        (l) => l.minStay === null || (l.minStay <= min && l.minStay <= max)
      );
    }
    if (max !== null) {
      return listings.filter((l) => l.minStay === null || l.minStay <= max);
    }
    if (min !== null) {
      return listings.filter((l) => l.minStay === null || l.minStay <= min);
    }
    return listings;
  }

  filterByFloorLevel(floorLevel: number, listings: Listing[]) {
    if (floorLevel > -3) {
      return listings.filter((l) => l.floorLevel === floorLevel);
    }
    return listings;
  }

  filterByAvailableDate(date: Date | null, listings: Listing[]) {
    if (date === null) {
      return listings;
    }
    return listings.filter((l) => l.availableDate <= date);
  }

  constructor() {}
}
