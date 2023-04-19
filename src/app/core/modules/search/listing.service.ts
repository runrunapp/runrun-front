import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Collection, Listing, ListingReduced } from './listing.models';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  apiURL = environment.apiUrl + 'publish/';

  // private listings$!: Observable<Listing[]>

  constructor(private http: HttpClient) {}

  getListing(propertyType: string | null) {
    let url = this.apiURL + 'publications/';
    if (propertyType) {
      url += '?property_type=' + propertyType;
    }
    return this.http.get<Listing[]>(url);
  }

  getListingById(id: number | null) {
    let url = this.apiURL + 'publications/';
    if (id !== null && id !== undefined) {
      url += id;
    }
    return this.http.get<Listing>(url);
  }

  addToFavorite(listing: number) {
    return this.http.post(
      this.apiURL + 'publications/' + listing + '/favorites/',
      {}
    );
  }
  removeFromFavorite(listing: number) {
    return this.http.delete(
      this.apiURL + 'publications/' + listing + '/favorites/'
    );
  }

  createCite(listing: number) {
    return this.http.post(this.apiURL + 'cites/', {
      listing,
    });
  }

  deleteCiteByUserListing(listing: number) {
    return this.http.delete(this.apiURL + `cites/delete/`, {
      params: { listing },
    });
  }

  getCollections() {
    return this.http
      .get<{ results: Collection[] }>(this.apiURL + 'collections')
      .pipe(map((res) => res.results));
  }

  getFavoritesListings() {
    let url = this.apiURL + 'publications/favorites_listings/';
    return this.http.get<ListingReduced[]>(url);
  }
}
