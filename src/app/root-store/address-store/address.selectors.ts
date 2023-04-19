import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AddressState } from '.';
import { stateAdapter } from './address.entity';

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  stateAdapter.getSelectors();

export const selectAddressState =
  createFeatureSelector<AddressState>('address');

export const selectStates = createSelector(selectAddressState, selectAll);
