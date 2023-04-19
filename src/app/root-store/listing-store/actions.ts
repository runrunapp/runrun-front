import { PropertyType } from 'src/app/core/modules/publish/models/publish.models';
import { createAction, props } from '@ngrx/store';
import { Listing } from 'src/app/core/modules/search/listing.models';

export const fetchListings = createAction(
  '[Listing] Fetch Current',
  props<{ propertyType: PropertyType }>()
);
export const fetchAllListings = createAction('[Listing] Fetch All');
export const fetchListingById = createAction(
  '[Listing] Fetch By Id',
  props<{ id: number }>()
);
export const fetchHouseListings = createAction('[Listing] Fetch Houses');
export const fetchRoomsListings = createAction('[Listing] Fetch Rooms');
export const fetchOfficeListings = createAction('[Listing] Fetch Offices');
export const fetchLocalListings = createAction('[Listing] Fetch Locals');
export const fetchGarageListings = createAction('[Listing] Fetch Garages');

export const fetchFulfilled = createAction(
  '[Listing] Fetch Fulfilled',
  props<{ listings: Listing[] }>()
);

export const fetchFailed = createAction(
  '[Listing] Fetch Failed',
  props<{ error: any }>()
);

export const requestListing = createAction(
  '[Listing] Request Listing',
  props<{ id: number }>()
);
export const setActiveListing = createAction(
  '[Listing] Set Active Listing',
  props<{ id: number }>()
);

export const fetchActiveListing = createAction(
  '[Listing] Fetch Active Listing'
);

export const fetchActiveFulfilled = createAction(
  '[Listing] Fetch Active Fulfilled',
  props<{ listing: Listing }>()
);
