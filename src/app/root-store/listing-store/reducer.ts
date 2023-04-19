import { Action, createReducer, on } from '@ngrx/store';
import { ListingActions } from '.';
import { listingEntityAdapter, State, STATUS } from './entity';

export const initialState: State = listingEntityAdapter.getInitialState({
  activeListing: null,
  status: STATUS.IDLE,
});

export const reducer = createReducer(
  initialState,
  // Request actions
  on(ListingActions.fetchListings, state => ({
    ...state,
    status: STATUS.LOADING,
  })),
  on(ListingActions.fetchAllListings, state => ({
    ...state,
    status: STATUS.LOADING,
  })),
  on(ListingActions.fetchHouseListings, state => ({
    ...state,
    status: STATUS.LOADING,
  })),
  on(ListingActions.fetchRoomsListings, state => ({
    ...state,
    status: STATUS.LOADING,
  })),
  on(ListingActions.fetchOfficeListings, state => ({
    ...state,
    status: STATUS.LOADING,
  })),
  on(ListingActions.fetchLocalListings, state => ({
    ...state,
    status: STATUS.LOADING,
  })),
  on(ListingActions.fetchGarageListings, state => ({
    ...state,
    status: STATUS.LOADING,
  })),
  // On Request Success
  on(ListingActions.fetchFulfilled, (state, action) => {
    return listingEntityAdapter.addMany(action.listings, {
      ...state,
      status: STATUS.SUCCEDED,
    });
  }),
  on(ListingActions.fetchFailed, (state, action) => {
    return {
      ...state,
      status: STATUS.FAILED,
    };
  }),
  on(ListingActions.fetchActiveListing, (state, action) => ({
    ...state,
    status: STATUS.LOADING,
  })),
  on(ListingActions.fetchActiveFulfilled, (state, action) =>
    listingEntityAdapter.addOne(action.listing, {
      ...state,
      status: STATUS.SUCCEDED,
    })
  ),
  on(ListingActions.setActiveListing, (state, action) => ({
    ...state,
    activeListing: action.id,
  }))
);
