import { PropertyType } from 'src/app/core/modules/publish/models/publish.models';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Subject, Observable, BehaviorSubject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { URLs } from 'src/app/app.constants';
import { AppState } from 'src/app/root-store';
import {
  ListingActions,
  ListingSelectors,
} from 'src/app/root-store/listing-store';
import { MapSearchComponent } from './map-search/map-search.component';
import { FiltersService } from './filters.service';
import { Listing } from './listing.models';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  _onDestroy$ = new Subject();
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private filtersService: FiltersService
  ) {}

  filtersForm = this.fb.group({
    propertyType: [PropertyType.HOUSE, [Validators.required]],
    currency: [null],
    minPrice: [null],
    maxPrice: [null],
    minTotalArea: [null],
    maxTotalArea: [null],
    floorLevel: [-3],

    minStay: [null],
    maxStay: [null],
  });

  listings$!: Observable<Listing[]>;

  get propertyType() {
    const pType = this.filtersForm.controls.propertyType.value;

    switch (pType) {
      case 'house':
        return 'Viviendas';
      case 'room':
        return 'Habitaciones';
      case 'office':
        return 'Oficinas';
      case 'local':
        return 'Locales';
      case 'garage':
        return 'Garaje';
      default:
        return '';
    }
  }
  isMapOpened = false;
  orderByPrice$ = new BehaviorSubject(false);

  get orderByPrice() {
    return this.orderByPrice$.value;
  }

  listingURL = URLs.profileURL;

  @ViewChild(MapSearchComponent)
  mapSearch!: MapSearchComponent;

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((params) => {
        const map = params.map;
        if (map) {
          this.isMapOpened = true;
        }

        const type = params.propertyType;
        if (type) {
          this.filtersForm.patchValue({
            propertyType: type,
          });
        } else {
          this.store.dispatch(
            ListingActions.fetchListings({ propertyType: PropertyType.HOUSE })
          );
        }
      });

    this.listings$ = combineLatest([
      this.filtersForm.valueChanges.pipe(
        takeUntil(this._onDestroy$),
        startWith(this.filtersForm.value)
      ),
      this.store.pipe(select(ListingSelectors.getAllListings), startWith([])),
      this.orderByPrice$,
    ]).pipe(
      map(([filters, listings, orderByPrice]) => {
        const propertyType = filters.propertyType;
        this.store.dispatch(ListingActions.fetchListings({ propertyType }));
        const results = this.filtersService.filterListings(filters, listings);
        return results.sort((a, b) => {
          if (orderByPrice) {
            return a.price - b.price;
          }
          return b.price - a.price;
        });
      })
    );
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  setMapState(state: boolean) {
    this.isMapOpened = state;
  }
}
