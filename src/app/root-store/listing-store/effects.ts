import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  mergeMap,
  switchMap,
  map,
  withLatestFrom,
  filter,
  take,
} from 'rxjs/operators';
import { PropertyType } from 'src/app/core/modules/publish/models/publish.models';

import { ListingService } from 'src/app/core/modules/search/listing.service';
import { ListingActions, ListingSelectors } from '.';
import { AppState } from '..';

@Injectable()
export class ListingEffects {
  propertyType = 'house';
  private fetchedTyped = {
    house: false,
    room: false,
    office: false,
    local: false,
    garage: false,
  };

  fetchEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListingActions.fetchListings),
      map((action) => {
        switch (action.propertyType) {
          case PropertyType.HOUSE:
            return 'house';

          case PropertyType.ROOM:
            return 'room';

          case PropertyType.OFFICE:
            return 'office';

          case PropertyType.LOCAL:
            return 'local';

          case PropertyType.GARAGE:
            return 'garage';
          default:
            return 'house';
        }
      }),
      switchMap((propertyType) => {
        if (this.fetchedTyped[propertyType]) {
          return of(ListingActions.fetchFulfilled({ listings: [] }));
        }
        return this.listingService.getListing(propertyType).pipe(
          map((listings) => {
            this.fetchedTyped[propertyType] = true;
            return ListingActions.fetchFulfilled({ listings });
          }),
          catchError((error) => {
            return of(ListingActions.fetchFailed({ error }));
          })
        );
      })
    )
  );

  fetchByIdEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListingActions.fetchListingById),
      mergeMap((action) =>
        this.listingService.getListingById(action.id).pipe(
          map((listing) =>
            ListingActions.fetchFulfilled({ listings: [listing] })
          ),
          catchError((error) => of(ListingActions.fetchFailed({ error })))
        )
      )
    )
  );

  requestListingEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListingActions.requestListing),

      mergeMap((action) => {
        return this.store.pipe(
          select(ListingSelectors.selectListingById(action.id)),
          take(1),
          map((listing) => {
            if (listing === null || listing === undefined) {
              return ListingActions.fetchListingById({ id: action.id });
            }
            return { type: 'NO_ACTION' };
          })
        );
      })
    )
  );
  checkForActiveEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListingActions.setActiveListing),
      withLatestFrom(
        this.store.pipe(select(ListingSelectors.selectActiveListing))
      ),
      map(([action, value]) => {
        if (value === undefined || value === null) {
          return ListingActions.fetchActiveListing();
        }
        return { type: 'NO_ACTION' };
      })
    )
  );

  fetchActiveEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListingActions.fetchActiveListing),
      withLatestFrom(
        this.store.pipe(select(ListingSelectors.selectActiveListing))
      ),
      filter(([_, listing]) => {
        return listing === null || listing === undefined;
      }),
      withLatestFrom(this.store.pipe(select(ListingSelectors.selectActiveId))),
      exhaustMap(([action, value]) =>
        this.listingService.getListingById(value).pipe(
          map((listing) => ListingActions.fetchActiveFulfilled({ listing })),
          catchError((error) => of(ListingActions.fetchFailed({ error })))
        )
      )
    )
  );

  fetchAllEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListingActions.fetchAllListings),
      switchMap(() =>
        this.listingService.getListing(null).pipe(
          map((listings) => {
            return ListingActions.fetchFulfilled({ listings });
          }),
          catchError((error) => {
            return of(ListingActions.fetchFailed({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private listingService: ListingService,
    private store: Store<AppState>
  ) {}
}
