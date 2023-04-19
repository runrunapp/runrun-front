import { createReducer, on } from '@ngrx/store';
import { AddressActions } from '.';
import { stateAdapter, AddressState } from './address.entity';

const initialState: AddressState = stateAdapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(AddressActions.requestStatesFullfiled, (state, action) =>
    stateAdapter.addMany(action.states, state)
  )
);
