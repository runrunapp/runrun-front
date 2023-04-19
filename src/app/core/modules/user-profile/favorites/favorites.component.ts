import { ListingReduced } from './../../search/listing.models';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { URLs } from 'src/app/app.constants';
import { ListingService } from '../../search/listing.service';

@Component({
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<ListingReduced[]> =
    this.listingService.getFavoritesListings();

  constructor(private listingService: ListingService) {}

  ngOnInit(): void {}

  listingURL = URLs.profileURL;
}
