import { createSelector } from '@ngrx/store';

import { AppState } from '..';

import { listingEntityAdapter } from './entity';

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  listingEntityAdapter.getSelectors();

const selectListings = selectAll;

const selectListingState = (state: AppState) => state.listings;

export const selectActiveId = createSelector(
  selectListingState,
  (state) => state.activeListing
);

export const selectAllEntities = createSelector(
  selectListingState,
  selectEntities
);
export const getAllListings = createSelector(
  selectListingState,
  selectListings
);

export const selectActiveListing = createSelector(
  selectAllEntities,
  selectActiveId,
  (listings, id) => listings[id!]
);

export const selectRecommended = createSelector(
  selectListingState,
  selectListings
);

export const selectSimilars = createSelector(
  selectListingState,
  selectListings
);

export const selectListingById = (id: number) =>
  createSelector(selectAllEntities, (listings) => listings[id]);
